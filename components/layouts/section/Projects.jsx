import { Section } from "@/components/ui/Container";
import { Title, Heading } from "@/components/ui/Typography";

import { ProjectBox } from "@/components/ui//ProjectSection/Box";
import { ProjectImage } from "@/components/ui/ProjectSection/Image";
import { ProjectContent } from "@/components/ui/ProjectSection/Content";

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <Title className="mb-4">Projets</Title>

      <div className="flex flex-col gap-2">
        <ProjectBox>
          <ProjectImage src="/pokemon.webp" alt="Projet à créer" />
          <ProjectContent title="Portfolio" badges={["React", "NextJS"]}>
            La réalisation de mon portfolio avec une brève présentation, mon
            parcours et un espace pour me contacter.
          </ProjectContent>
        </ProjectBox>
      </div>

      <Heading className="text-center py-4">A venir ...</Heading>
    </Section>
  );
};

export default ProjectsSection;
