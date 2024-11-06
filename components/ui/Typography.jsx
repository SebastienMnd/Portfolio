import { PRIMARY_FONT, SECONDARY_FONT } from "@/lib/font";

export const Title = ({ className = "", children }) => {
  return (
    <h1 className={`${PRIMARY_FONT.className} ${className} text-5xl`}>
      {children}
    </h1>
  );
};

export const Subtitle = ({ className = "", children }) => {
  return (
    <h2 className={`${PRIMARY_FONT.className} ${className} text-3xl`}>
      {children}
    </h2>
  );
};

export const Heading = ({ className = "", children }) => {
  return (
    <h3
      className={`${PRIMARY_FONT.className} ${className} tracking-widest italic text-2xl`}
    >
      {children}
    </h3>
  );
};

export const HeadingSecondary = ({ className = "", children }) => {
  return (
    <h3
      className={`${SECONDARY_FONT.className}  ${className} text-lg font-light`}
    >
      {children}
    </h3>
  );
};

export const Paragraph = ({ className = "", children }) => {
  return (
    <p className={`${SECONDARY_FONT.className} ${className} text-base`}>
      {children}
    </p>
  );
};
