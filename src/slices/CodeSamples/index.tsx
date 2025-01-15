import CodeSamplesContent from "@/components/codesamplescontent";
import Section from "@/components/section";
import Title from "@/components/title";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CodeSamples`.
 */
export type CodeSamplesProps = SliceComponentProps<Content.CodeSamplesSlice>;

/**
 * Component for "CodeSamples" Slices.
 */
const CodeSamples = ({ slice }: CodeSamplesProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} className={""}    >
        <div className="py-6">
          <Title field={slice.primary.title} />
        </div>

        <div className="border-b border-slate-300/50">
          {slice.primary.repeatable_zone.map((item) => (
            <CodeSamplesContent time={`${item.time}`} link={item.heading} body={item.body}  />
          ))}
        </div>
    </Section>
  );
};

export default CodeSamples;
