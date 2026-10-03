export type AnimationPrinciple = {
  number: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
};

export const animationPrinciples: AnimationPrinciple[] = [
  {
    number: "01",
    slug: "timing-easing",
    title: "Timing & Easing",
    description:
      "The duration and acceleration of movement determine how motion feels.",
    shortDescription:
      "Control speed, acceleration, and the character of movement.",
  },
  {
    number: "02",
    slug: "anticipation",
    title: "Anticipation",
    description:
      "A preparatory movement helps communicate what is about to happen.",
    shortDescription:
      "Prepare the viewer before the main action begins.",
  },
  {
    number: "03",
    slug: "squash-stretch",
    title: "Squash & Stretch",
    description:
      "Deformation communicates weight, flexibility, speed, and impact.",
    shortDescription:
      "Give movement weight through controlled deformation.",
  },
  {
    number: "04",
    slug: "follow-through",
    title: "Follow Through",
    description:
      "Different parts of an object can continue moving after the main action.",
    shortDescription:
      "Create natural movement through delayed settling.",
  },
  {
    number: "05",
    slug: "staging",
    title: "Staging",
    description:
      "Composition, contrast, and movement direct the viewer's attention.",
    shortDescription:
      "Use motion and composition to control visual focus.",
  },
];