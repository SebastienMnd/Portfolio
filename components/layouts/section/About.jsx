import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Container";
import { ExternalLink, Link } from "@/components/ui/Link";
import {
  Title,
  Subtitle,
  Paragraph,
  Heading,
} from "@/components/ui/Typography";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Section id="aboutme" className="flex items-center justify-between gap-12">
      <div>
        <Heading className="leading-3">Sébastien Mandé</Heading>
        <Title className="mb-4">Développeur Web</Title>

        <Paragraph className="leading-relaxed text-justify">
          Je suis un développeur en apprentissage, titulaire d&apos;un DUT
          Informatique obtenu à l&apos;IUT du Havre, où j&apos;ai acquis les
          fondamentaux du développement à travers des langages tels que{" "}
          <Badge>Java</Badge>, <Badge>C</Badge> ou encore le <Badge>SQL</Badge>{" "}
          et{" "}
          <Badge title="HTML, CSS et Javascript">les technologies du web</Badge>
          .
          <br />
          Par la suite, j&apos;ai poursuivi ma formation en tant
          qu&apos;autodidacte, en me spécialisant dans <Badge>
            React
          </Badge> et <Badge>Next.js</Badge> pour en maîtriser les subtilités.
          <br />
          Vous pouvez également me retrouver sur{" "}
          <ExternalLink href="https://fr.linkedin.com/in/sebastien-mande">
            <Badge>LinkedIn</Badge>
          </ExternalLink>
          .
        </Paragraph>
      </div>

      <div className="flex flex-col gap-2">
        <Image
          src="/pp.jpg"
          width="350"
          height="150"
          alt="Moi"
          loading="lazy"
        />
        <Heading className="text-right text-sm">he/him</Heading>
      </div>
    </Section>
  );
};

export default AboutSection;
