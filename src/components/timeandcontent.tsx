import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

type TimeAndContentProps = {
    time: string;
    subheading: any;
    body: any;
    background: boolean,
    index: number;
};

const TimeAndContent = ({ time, subheading, body, background, index }: TimeAndContentProps): JSX.Element => {
    return (
        <div className="grid grid-cols-3">
            <div className="font-extralight text-sm py-8">{time}</div>
            <div className="col-span-2">
                <div className={clsx("py-8", index%2 === 0 && "border-b border-slate-300/50")}>
                    <div className={clsx("grid gap-3", background ? "p-6 bg-slate-800 rounded-md": "bg-none")}>
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
