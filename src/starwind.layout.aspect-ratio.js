// sw-aspect-ratio.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwAspectRatioLayout = createStarwindElement({
  ratio: { var: "--sw-aspect-ratio", type: "ratio" },
  fit: { var: "--sw-aspect-fit", type: "raw" },
  position: { var: "--sw-aspect-position", type: "raw" },

  // New: lets consumers opt out of clipping when needed
  overflow: { var: "--sw-aspect-overflow", type: "raw" },
});

export function defineSwAspectRatio() {
  defineElement("sw-aspect-ratio", SwAspectRatioLayout);
}
