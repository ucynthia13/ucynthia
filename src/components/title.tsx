import { PrismicRichText } from "@prismicio/react";

type TitleProps = {
  field: any;
  className?: string;
};

const Title = ({ field, className }: TitleProps): JSX.Element => {
  return (
    <PrismicRichText
      field={field}
      components={{
        heading2: ({ children }) => (
          <h2 className={className || "text-balance font-semibold"}>
            {children}  
          </h2>
        ),
      }}
    />
  );
};

export default Title;
