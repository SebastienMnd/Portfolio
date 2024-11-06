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
          Je suis un développeur en apprentissage. Diplômé d&apos;un DUT
          Informatique à l&apos;IUT du Havre, j&apos;y ai appris les bases du
          développement avec différents langages comme <Badge>JAVA</Badge>,{" "}
          <Badge>C</Badge> ou encore le <Badge>SQL</Badge> et{" "}
          <Badge title="HTML, CSS et Javascript">
            les différents langages du Web
          </Badge>
          .
          <br />
          Par la suite, j&apos;ai continué à me former sur <Badge>
            React
          </Badge>{" "}
          et <Badge>NextJS</Badge>{" "}
          en auto-didacte afin d&apos;en connaître tous les secrets et rouages.
          <br />
          Je suis présent sur{" "}
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
