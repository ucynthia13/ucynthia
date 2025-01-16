import Section from "@/components/section";
import TimeAndContent from "@/components/timeandcontent";
import Title from "@/components/title";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Work`.
 */
export type WorkProps = SliceComponentProps<Content.WorkSlice>;

/**
 * Component for "Work" Slices.
 */
const Work = ({ slice }: WorkProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={""}
    >
      <div className="py-6">
        <Title field={slice.primary.title} />
      </div>
      <div className="bottom-border">
        {slice.primary.repeatable_zone.map((item, index) => (
          <TimeAndContent key={index} time={`${item.time}`} subheading={item.heading} body={item.body} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Work;
