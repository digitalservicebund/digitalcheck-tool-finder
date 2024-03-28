import Plausible from "plausible-tracker";
import type { Reason } from "../models/Reason";
import type { Ressort } from "../models/Ressort";
import type { VisualisationObject } from "../models/VisualisationObject";

const EVENT_BUTTON_CLICK = "Button: Click";
const EVENT_FEEDBACK_CLICK = "Feedback: Click";

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

export function trackFeedbackCick(question: string, value: number) {
  trackEvent(EVENT_FEEDBACK_CLICK, {
    props: {
      questionAndValue: `${question} --- ${value}`,
    },
  });
}

export function trackSelection(
  ressort: Ressort | null,
  object: VisualisationObject | null,
  reason: Reason | null,
) {
  if (!ressort || !object || !reason) {
    return;
  }

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
