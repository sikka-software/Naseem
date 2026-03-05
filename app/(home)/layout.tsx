import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import Footer from "@/components/landing/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <HomeLayout {...baseOptions} className="flex-1 overflow-hidden">
        {children}
      </HomeLayout>
      <Footer />
    </div>
  );
}
