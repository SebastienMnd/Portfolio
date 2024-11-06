import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { Paragraph, Subtitle, Title } from "@/components/ui/Typography";

const Page = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 py-4">
        <Link href="/thoughts/1" className="border border-neutral-300 p-4 rounded flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <Subtitle>Mes pensées 1</Subtitle>
            <Paragraph className="">{Date.now()}</Paragraph>
          </div>
          <Paragraph className="max-h-12 overflow-hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            pariatur provident consequatur voluptatum modi vero sint fuga,
            deleniti voluptates necessitatibus odio. Pariatur reiciendis
            praesentium nisi porro deleniti facere repellat iure dolor officia
            consequuntur eos consequatur tempora quas sunt voluptatibus corrupti
            labore neque, nulla, excepturi recusandae reprehenderit nesciunt?
            Sapiente expedita rem id aspernatur eum repellendus beatae eius
            accusamus harum consequuntur, minus ex exercitationem itaque maiores
            corporis voluptatibus blanditiis quas ea voluptatem optio dolores
            tempora nostrum! Eaque praesentium enim aperiam natus amet culpa
            similique perferendis. Corrupti nemo numquam doloremque modi, quidem
            vel, laborum optio molestiae voluptate voluptatum minima. Iure quas
            sed, possimus eius error nostrum eos. Voluptatem, necessitatibus
            numquam. Vitae, quos praesentium est aperiam tenetur in ex modi.
            Iusto nobis, commodi possimus quod ducimus blanditiis. Est obcaecati
            excepturi repellendus id sed.
          </Paragraph>
        </Link>
      </div>
    </Container>
  );
};

export default Page;
