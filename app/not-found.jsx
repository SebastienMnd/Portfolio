import { Container } from "@/components/ui/Container";
import { Subtitle, Title } from "@/components/ui/Typography";

const NotFound = ({}) => {
  return (
    <div>
      <Container>
        <Subtitle className="text-center">
          <span className="text-red-600">Erreur 404</span> - Page non trouvée
        </Subtitle>
      </Container>
    </div>
  );
};

export default NotFound;
