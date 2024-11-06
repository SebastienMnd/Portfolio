import { Toaster } from "@/components/hooks/useToast";
import AboutSection from "@/components/layouts/section/About";
import ProjectsSection from "@/components/layouts/section/Projects";
import ResumeSection from "@/components/layouts/section/Resume";

const Page = ({}) => {
  return (
    <>
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
    </>
  );
};

export default Page;
