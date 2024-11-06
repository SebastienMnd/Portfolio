import { Subtitle, Paragraph } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";

export const ProjectContent = ({
  title = "Projet vide",
  badges = [],
  children,
}) => {
  return (
    <div className="flex flex-col p-2">
      <Subtitle>{title}</Subtitle>
      <Paragraph className="flex-grow">{children}</Paragraph>
      <div className="flex gap-2">
        {badges.map((badge, index) => {
          return <Badge key={index}>{badge}</Badge>;
        })}
      </div>
    </div>
  );
};
