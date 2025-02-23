
import NavHeader from "@/components/blocks/nav-header";
import { Delimiter } from "@/components/Delimiter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="pt-8 pb-4">
        <NavHeader />
      </div>
      <main className="container mx-auto px-4">
        <Delimiter />
      </main>
    </div>
  );
};

export default Index;
