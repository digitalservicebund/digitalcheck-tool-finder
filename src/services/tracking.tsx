import Plausible from "plausible-tracker";

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
  console.log(id);
  trackEvent(EVENT_BUTTON_CLICK, {
    props: {
      id: id ?? "",
      href: href ?? "",
    },
  });
}

export function trackSelection(
  ressort: string,
  object: string,
  reason: string,
) {
  trackEvent("Selection: Submit", {
    props: {
      ressort: ressort,
      object: object,
      reason: reason,
      ressortAndObject: `${ressort}-${object}`,
      ressortAndReason: `${ressort}-${reason}`,
      objectAndReason: `${object}-${reason}`,
      ressortAndObjectAndReason: `${ressort}-${object}-${reason}`,
    },
  });
}
