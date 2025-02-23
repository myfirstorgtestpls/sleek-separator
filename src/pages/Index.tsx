
import NavHeader from "@/components/blocks/nav-header";
import { Delimiter } from "@/components/Delimiter";
import { Footerdemo } from "@/components/ui/footer-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="pt-8 pb-4">
        <NavHeader />
      </div>
      <main className="container mx-auto px-4">
        <Delimiter />
      </main>
      <Footerdemo />
    </div>
  );
};

export default Index;
