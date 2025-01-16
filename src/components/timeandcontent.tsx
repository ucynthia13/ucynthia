import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

type TimeAndContentProps = {
    time: string;
    subheading: any;
    body: any;
    index: number;
};

const TimeAndContent = ({ time, subheading, body, index }: TimeAndContentProps): JSX.Element => {
    return (
        <div className="grid grid-cols-3">
            <div className="font-extralight text-sm py-8">{time}</div>
            <div className="col-span-2">
                <div className={clsx("py-8", index%2 === 0 && "bottom-border")}>
                    <div className={clsx("grid gap-3 p-6")}>
                        <PrismicRichText
                            field={subheading}
                            components={{
                                heading2: ({ children }) => (
                                    <h2 className="font-semibold">
                                        {children}
                                    </h2>
                                ),
                            }}
                        />
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

export default TimeAndContent;
