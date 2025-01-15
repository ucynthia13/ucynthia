import Section from "@/components/section";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { MdOutlineArrowOutward } from "react-icons/md";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} className={""}    >
      <div className="grid grid-cols-3 border-b border-slate-300/50 py-8 gap-8">
        <div className="flex justify-center items-center">
          <PrismicImage
            field={slice.primary.image}
            className="w-48 h-48 opacity-90 hover:opacity-100 object-cover rounded-full p-1 border border-slate-300/50"
            sizes="(max-width: 96px) 16vw, 10vw"
          />
        </div>

        <div className="col-span-2">
          <div className="grid gap-3">
            <PrismicRichText
              field={slice.primary.name}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-xl md:text-2xl text-balance font-bold">
                    {children}
                  </h2>
                )
              }}
            />
            <div className="font-extralight text-sm">
              {slice.primary.intro}
            </div>
            <div className="flex flex-row">
              <PrismicNextLink field={slice.primary.link} className="text-sm" />
              <MdOutlineArrowOutward size={14} />
            </div>
            <div className="font-extralight text-sm">
              {slice.primary.aboutme}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
