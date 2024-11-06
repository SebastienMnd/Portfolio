import { Container } from "@/components/ui/Container";
import { Title } from "@/components/ui/Typography";
import { NavLink } from "@/components/ui/Link";
import { navLinks } from "@/lib/constants";

const Header = () => {
  return (
    <header className="border-b border-neutral-200 bg-neutral-100 sticky top-0 h-24 ">
      <Container className="flex justify-between items-center h-24">
        <Title>@Sébastien<span className="text-green-600">Mnd</span></Title>

        <nav className="flex items-center justify-center gap-7">
          {navLinks.map(({ url, label }) => (
            <NavLink key={label} href={url}>
              {label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
