
import NavHeader from "@/components/blocks/nav-header";
import { Footerdemo } from "@/components/ui/footer-section";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="pt-8 pb-4">
        <NavHeader />
      </div>
      <main className="container mx-auto px-4 pb-20">
        <Outlet />
      </main>
      <Footerdemo />
    </div>
  );
};

export default RootLayout;
