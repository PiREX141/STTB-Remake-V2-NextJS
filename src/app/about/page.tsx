import ConfessionOfFaithSection from "@/components/layouts/about/ConfessionOfFaithSection";
import FoundationSection from "@/components/layouts/about/FoundationSection";
import HistorySection from "@/components/layouts/about/HistorySection";
import LecturerCouncilSection from "@/components/layouts/about/LecturerCouncilSection";
import MarsSttbSection from "@/components/layouts/about/MarsSttbSection";
import ScrollSpyAbout from "@/components/layouts/about/ScrollSpyAbout";
import VisionMissionSection from "@/components/layouts/about/VisionMissionSection";
import { Mars } from "lucide-react";

export default function About() {
  return (
    <div className="flex items-start">
      {/* Sidebar */}
      <ScrollSpyAbout />

      {/* Page Content */}
      <main className="flex flex-col w-full">
        <section id="history" className="min-h-screen">
          <HistorySection />
        </section>

        <section id="vision-mission" className="min-h-screen">
          <VisionMissionSection />
        </section>

        <section id="mars-sttb" className="min-h-screen">
          <MarsSttbSection />
        </section>

        <section id="confession-of-faith" className="min-h-screen">
          <ConfessionOfFaithSection />
        </section>

        <section id="lecturer-council" className="min-h-screen">
          <LecturerCouncilSection />
        </section>

        <section id="foundation" className="min-h-screen">
          <FoundationSection />
        </section>
      </main>
    </div>
  );
}
