import { Section } from "@/components/ui/Container";
import { Title } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";

import { ResumeDescription } from "@/components/ui/ResumeSection/Description";
import { ResumeInformation } from "@/components/ui/ResumeSection/Information";
import { ResumeTitle } from "@/components/ui/ResumeSection/Title";
import { ResumeBox } from "@/components/ui/ResumeSection/Box";

import { ClockIcon, LocationIcon, NotesIcon, PencilIcon } from "@/lib/icons";

const ResumeSection = () => {
  return (
    <Section id="resume">
      <Title className="mb-4">Parcours</Title>

      <ResumeBox type="work">
        <ResumeTitle>Agent Support Technique</ResumeTitle>
        <ResumeInformation className="flex items-center gap-2">
          <LocationIcon /> Guillemot Administration et Logistique
        </ResumeInformation>
        <ResumeInformation className="flex items-center gap-2">
          <ClockIcon /> Octobre 2021 - Aujourd&apos;hui
        </ResumeInformation>
        <ResumeDescription>
          <span className="pt-1">
            <NotesIcon />
          </span>
          Avec une expertise technique et une bonne relation clientèle, j'ai
          rejoins la socitété Guillemot Corporation d&apos;assurer le service
          clientèle par mail et téléphone en français et anglais pour les
          marques Thrustmaster et Hercules.
        </ResumeDescription>
        <ResumeDescription>
          <span className="pt-1">
            <PencilIcon />
          </span>
          Dans le même temps, j&apos;ai continué de pratiquer le développement
          en me concentrant sur les technologies du Web. J&apos;ai notamment
          découvert la librairie React avec NextJS.
        </ResumeDescription>
        <div className="inline-flex gap-2">
          <Badge>Relation clientèle</Badge>
          <Badge>Diplomatie</Badge>
          <Badge>React</Badge>
          <Badge>NextJS</Badge>
        </div>
      </ResumeBox>

      <ResumeBox type="work">
        <ResumeTitle>Technicien et vendeur informatique</ResumeTitle>
        <ResumeInformation className="flex items-center gap-2">
          <LocationIcon /> Top Office Redon
        </ResumeInformation>
        <ResumeInformation className="flex items-center gap-2">
          <ClockIcon /> Février 2020 - Octobre 2021
        </ResumeInformation>
        <ResumeDescription>
          <span className="pt-1">
            <NotesIcon />
          </span>
          Cette expérience m'a permis de développer mes connaissances au niveau
          hardware, tout en développant mes compétences en relation clientèle.
        </ResumeDescription>
        <ResumeDescription>
          <span className="pt-1">
            <PencilIcon />
          </span>
          J'ai profité de mes connaissances en développement web afin de créer
          un site interne permettant d'avoir un suivi sur les bons de commande
          client.
        </ResumeDescription>
        <div className="inline-flex gap-2">
          <Badge>Vente</Badge>
          <Badge>Réparation</Badge>
          <Badge>Mise en rayon</Badge>
          <Badge>Commandes client</Badge>
          <Badge>NodeJS</Badge>
        </div>
      </ResumeBox>

      <ResumeBox type={"school"}>
        <ResumeTitle>Stage Développeur Informatique</ResumeTitle>
        <ResumeInformation className="flex items-center gap-2">
          <LocationIcon /> ENSA Nantes
        </ResumeInformation>
        <ResumeInformation className="flex items-center gap-2">
          <ClockIcon /> Été 2019
        </ResumeInformation>
        <ResumeDescription className="flex items-center gap-2">
          <span className="pt-1">
            <NotesIcon />
          </span>
          Dans le cadre de ma formation, on m&apos;a offert l&apos;opportunité
          de mettre en pratique mes compétences au cours d&apos;un stage à
          l&apos;ENSA, l&apos;Ecole Nationale Supérieure d&apos;Architecture de
          Nantes. J&apos;y ai réalisé une application de prêt de matériel à
          destination des étudiants.
        </ResumeDescription>
        <div className="inline-flex gap-2">
          <Badge>NodeJS</Badge>
        </div>
      </ResumeBox>

      <ResumeBox type="school">
        <ResumeTitle>DUT Informatique</ResumeTitle>
        <ResumeInformation className="flex items-center gap-2">
          <LocationIcon /> IUT Le Havre
        </ResumeInformation>
        <ResumeInformation className="flex items-center gap-2">
          <ClockIcon /> 2017 - 2019
        </ResumeInformation>
        <ResumeDescription>
          <span className="pt-1">
            <NotesIcon />
          </span>
          2 années de formation au sein de l&apos;IUT du Havre qui m&apos;ont
          permis d&apos;acquérir toutes les compétences de bases afin de
          travailler dans le développement informatique.
        </ResumeDescription>
        <div className="inline-flex gap-2">
          <Badge>HTML</Badge>
          <Badge>CSS</Badge>
          <Badge>Javascript</Badge>
          <Badge>JAVA</Badge>
          <Badge>SQL</Badge>
          <Badge>C</Badge>
        </div>
      </ResumeBox>
    </Section>
  );
};

export default ResumeSection;
