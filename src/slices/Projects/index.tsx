import Section from "@/components/section";
import Title from "@/components/title";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { MdOutlineArrowOutward } from "react-icons/md";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} className={""}    >
      <div className="py-6">
        <Title field={slice.primary.title} />
      </div>
      <div className="border-b border-slate-300/50">
        {slice.primary.repeatable_zone.map((item, index) => (
          <div className="grid grid-cols-3">
            <div className="font-extralight text-sm py-8">{item.time}</div>
            <div className="col-span-2">
              <div className="flex flex-row gap-8">
                <div className="flex justify-center items-center">
                  <PrismicNextImage
                    field={item.image}
                    className="opacity-90 hover:opacity-100 object-contain"
                  />
                </div>
                <div className={clsx("py-8", index % 2 === 0 && "border-b border-slate-300/50")}>
                  <div className="grid gap-3">
                    <div className="flex flex-row">
                      <PrismicRichText
                        field={item.heading}
                        components={{
                          heading2: ({ children }) => (
                            <h2 className="font-semibold cursor-pointer">
                              {children}
                            </h2>
                          ),
                        }}
                      />
                      <MdOutlineArrowOutward size={14} />
                    </div>

                    <PrismicRichText
                      field={item.body}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="font-extralight text-sm">{children}</p>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
