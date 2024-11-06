'use client';

import { ExternalLink, Link } from "@/components/ui/Link";
import { Paragraph, Title } from "@/components/ui/Typography";
import { PRIMARY_FONT } from "@/lib/font";
import { InstagramIcon, LinkedInIcon } from "@/lib/icons";
import { useToast } from "@/components/hooks/useToast";
import { SendEmail } from "@/utils/sendEmail";

const Footer = () => {
  const { toast } = useToast();

  return (
    <footer className="flex flex-col items-center justify-center gap-7 py-4">
      <Title className="">Contactez moi !</Title>
      <Paragraph>
        Une question sur mes projets, mon parcours ou mes disponibilités,
        contactez moi directement.
      </Paragraph>
      <form
        action={ async (formData) => {
          await SendEmail(formData);
          toast("Message envoyé");
        }}
        className="grid grid-rows-3 grid-flow-col auto-cols-fr gap-2 w-2/3"
      >
        <input name="email" placeholder="Email" className="px-4 py-2" />
        <input
          type="text"
          name="username"
          placeholder="Nom"
          className="px-4 py-2"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Envoyer
        </button>
        <textarea
          name="message"
          placeholder="Message"
          className="resize-none px-4 py-2 row-span-3 min-h-[200px]"
        ></textarea>
      </form>
      <Link
        href="mailto:sebastien.mande@outlook.fr"
        className={`${PRIMARY_FONT.className} text-2xl hover:text-neutral-700 transition`}
      >
        sebastien.mande@outlook.fr
      </Link>
      <div className="flex gap-4">
        <ExternalLink
          className="text-4xl hover:text-blue-500 transition"
          href="https://fr.linkedin.com/in/sebastien-mande"
        >
          <LinkedInIcon />
        </ExternalLink>
        <ExternalLink
          className="text-4xl hover:text-purple-500 transition"
          href="https://www.instagram.com/sebastien_mnd"
        >
          <InstagramIcon />
        </ExternalLink>
      </div>
    </footer>
  );
};

export default Footer;
