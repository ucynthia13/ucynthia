import Section from "@/components/section";
import TimeAndContent from "@/components/timeandcontent";
import Title from "@/components/title";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Certifications`.
 */
export type CertificationsProps =
  SliceComponentProps<Content.CertificationsSlice>;

/**
 * Component for "Certifications" Slices.
 */
const Certifications = ({ slice }: CertificationsProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} className={""}    >
      <div className="py-6">
        <Title field={slice.primary.title} />
      </div>
      <div className="bottom-border">
        {slice.primary.repeatable_zone.map((item, index) => (
          <TimeAndContent key={index} time={`${item.time}`} subheading={item.heading} body={item.body} index={1} />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
