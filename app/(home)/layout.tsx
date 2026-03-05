import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import Footer from "@/components/landing/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen max-h-screen min-h-screen bg-red-400">
      <HomeLayout {...baseOptions}>{children}</HomeLayout>
      <Footer />
    </div>
  );
}
