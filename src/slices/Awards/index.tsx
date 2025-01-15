import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Awards`.
 */
export type AwardsProps = SliceComponentProps<Content.AwardsSlice>;

/**
 * Component for "Awards" Slices.
 */
const Awards = ({ slice }: AwardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for awards (variation: {slice.variation}) Slices
    </section>
  );
};

export default Awards;
