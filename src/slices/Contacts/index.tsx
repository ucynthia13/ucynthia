import Section from "@/components/section";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { MdOutlineArrowOutward } from "react-icons/md";

/**
 * Props for `Contacts`.
 */
export type ContactsProps = SliceComponentProps<Content.ContactsSlice>;

/**
 * Component for "Contacts" Slices.
 */
const Contacts = ({ slice }: ContactsProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} className={""}    >
      <div className="grid grid-cols-3 py-8">
        <div className="">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2 className="font-semibold">
                  {children}
                </h2>
              )
            }}
          />
        </div>
        <div className="col-span-2">
          {slice.primary.repeable_zone.map((item, index) => (
            <div
              className="flex flex-col sm:flex-row md:items-center gap-4 md:gap-8 py-2 text-sm"
              key={index}
            >
              <div className="flex-1">
                <PrismicRichText
                  field={item.contactname}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="font-semibold">{children}</h2>
                    ),
                  }}
                />
              </div>
              <div className="flex flex-row">
              <PrismicNextLink
                field={item.link}
                className="hover:underline font-extralight text-start md:text-left"
              />
              <MdOutlineArrowOutward size={12}/>
              </div>
            </div>
          ))}

        </div>
      </div>
    </Section>
  );
};

export default Contacts;
