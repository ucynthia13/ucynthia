import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";
import { MdOutlineArrowOutward } from "react-icons/md";

type CodeSamplesContent = {
    time: string;
    link: any;
    body: any;
};

const CodeSamplesContent = ({ time, link, body}: CodeSamplesContent): JSX.Element => {
    return (
        <div className="grid grid-cols-3">
            <div className="font-extralight text-sm py-8">{time}</div>
            <div className="col-span-2">
                <div className={clsx("py-8")}>
                    <div className={clsx("grid gap-3 p-6 bg-slate-800")}>
                        <div className="flex flex-row">
                        <PrismicNextLink
                            field={link}
                            className="font-semibold"
                        />
                        <MdOutlineArrowOutward size={14}/>
                        </div>
                        <PrismicRichText
                            field={body}
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
    );
};

export default CodeSamplesContent;
