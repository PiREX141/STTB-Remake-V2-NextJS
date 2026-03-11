import ConfessionOfFaithSection from "@/components/layouts/about/ConfessionOfFaithSection";
import HistorySection from "@/components/layouts/about/HistorySection";
import MarsSttbSection from "@/components/layouts/about/MarsSttbSection";
import ScrollSpyAbout from "@/components/layouts/about/ScrollSpyAbout";
import { Mars } from "lucide-react";

export default function About() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <ScrollSpyAbout />

      {/* Page Content */}
      <main className="ml-60 flex flex-col w-full">
        <section id="history" className="min-h-screen">
          <HistorySection />
        </section>

        <section id="vision-mission" className="min-h-screen">
          Vision & Mission
        </section>

        <section id="mars-sttb" className="min-h-screen">
          <MarsSttbSection />
        </section>

        <section id="confession-of-faith" className="min-h-screen">
          <ConfessionOfFaithSection />
        </section>

        <section id="lecturer-council" className="min-h-screen">
          Lecturer Council
        </section>

        <section id="foundation" className="min-h-screen p">
          Foundation
        </section>
      </main>
    </div>
  );
}
