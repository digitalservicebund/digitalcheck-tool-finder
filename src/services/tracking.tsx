import Plausible from "plausible-tracker";
import { VisualisationObject } from "../models/VisualisationObject";
import { Reason } from "../models/Reason";
import { Ressort } from "../models/Ressort";

const EVENT_BUTTON_CLICK = "Button: Click";

const { enableAutoPageviews, enableAutoOutboundTracking, trackEvent } =
  Plausible({
    domain: "visualisieren.digitalcheck.bund.de",
    hashMode: true,
  });

export function enableTracking() {
  enableAutoPageviews();
  enableAutoOutboundTracking();
}

export function trackButtonClick(
  id: string | undefined,
  href: string | undefined,
) {
  trackEvent(EVENT_BUTTON_CLICK, {
    props: {
      id: id ?? "",
      href: href ?? "",
    },
  });
}

export function trackSelection(
  ressort: Ressort,
  object: VisualisationObject,
  reason: Reason,
) {
  const combine = (...values: string[]) => {
    return values.join(" --- ");
  };

  const ressortName = ressort.name;
  const objectName = object.name;
  const reasonName = reason.name;

  trackEvent("Selection: Submit", {
    props: {
      ressort: ressortName,
      object: objectName,
      reason: reasonName,
      ressortAndObject: combine(ressortName, objectName),
      ressortAndReason: combine(ressortName, reasonName),
      objectAndReason: combine(objectName, reasonName),
      ressortAndObjectAndReason: combine(ressortName, objectName, reasonName),
    },
  });
}

export function trackDBInitErrors(error: Error) {
  trackEvent("Database: Initialisation Error", {
    props: {
      errorMessage: error.message,
    },
  });
}
