import { HeadingSecondary } from "@/components/ui/Typography";

export const ResumeInformation = ({ className = "", children }) => {
  return (
    <HeadingSecondary className={`${className}`}>{children}</HeadingSecondary>
  );
};
