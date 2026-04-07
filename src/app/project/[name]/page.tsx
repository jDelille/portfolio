import Footer from "@/components/footer/Footer";
import ProjectOverview from "@/components/project-overview/ProjectOverview";

interface PageProps {
  params: Promise<{ name: string }>;
}

const page = async ({ params }: PageProps) => {
  const { name } = await params;
  return (
    <div className="page project-page">
      <ProjectOverview projectName={name} />
      <Footer />
    </div>
  );
};

export default page;
