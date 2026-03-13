"use client";

import {
  Users,
  Star,
  BookOpen,
  PartyPopper,
  School,
  Film,
  Theater,
  Music,
  Church,
  HandHeart,
  Flag,
  Sparkles,
  GraduationCap,
  Gamepad2,
  Vote,
} from "lucide-react";

const senatActivities = [
  {
    id: "training-group",
    title: "Training Group",
    icon: Star,
    items: [
      { label: "Training Group Media & Au-Vi", icon: Film },
      { label: "Training Group Panggung Boneka", icon: Theater },
      { label: "Training Group Musik Ibadah", icon: Music },
    ],
  },
  {
    id: "pembinaan-pelayanan",
    title: "Pembinaan & Pelayanan",
    icon: BookOpen,
    items: [
      { label: "Pameran Buku", icon: BookOpen },
      { label: "Pelatihan/Lokakarya", icon: School },
      { label: "Pelayanan Gereja", icon: Church },
      { label: "Pelayanan Masyarakat", icon: HandHeart },
    ],
  },
  {
    id: "perayaan-peringatan",
    title: "Perayaan & Peringatan",
    icon: PartyPopper,
    items: [
      { label: "Upacara HUT RI", icon: Flag },
      { label: "Malam Budaya", icon: Sparkles },
      { label: "Hari Reformasi", icon: BookOpen },
      { label: "Hari Natal / Paskah", icon: Church },
    ],
  },
  {
    id: "kehidupan-kampus",
    title: "Kehidupan Kampus",
    icon: Users,
    items: [
      { label: "Orientasi Mahasiswa Baru", icon: GraduationCap },
      { label: "Pemilihan Senat", icon: Vote },
      { label: "Wisuda & Dies Natalis STTB", icon: GraduationCap },
      { label: "Games/Sport Day", icon: Gamepad2 },
    ],
  },
];

const navLinks = [
  { id: "about", label: "About Senat" },
  { id: "training-group", label: "Training Group" },
  { id: "pembinaan-pelayanan", label: "Pembinaan & Pelayanan" },
  { id: "perayaan-peringatan", label: "Perayaan & Peringatan" },
  { id: "kehidupan-kampus", label: "Kehidupan Kampus" },
];

export default function Senat() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Senat</h1>
          <p className="text-xl text-gray-200">
            Students Today, Leaders Tomorrow!
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto max-w-screen px-4">
          <nav className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-sttb-primary-blue hover:bg-blue-50 rounded-lg whitespace-nowrap transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* About Senat */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-6 text-center">
              Senat Mahasiswa
            </h2>
            <div className="space-y-5">
              <div className="border-l-4 border-sttb-primary-blue pl-5 py-3">
                <p className="text-lg text-gray-700 font-medium italic">
                  Ladang sangat luas dan siap dituai, namun penuai sangat
                  sedikit dan tidak siap.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Signifikansi dan urgensi kepemimpinan Kristen dalam misi Tuhan
                merupakan prioritas strategis bagi sinode, gereja, sekolah,
                lembaga pelayanan, dan ladang misi. Ladang sangat luas dan siap
                dituai, namun penuai sangat sedikit dan tidak siap.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Untuk mempersiapkan para pemimpin masa depan memerlukan bukan
                hanya pemahaman wawasan kepemimpinan melainkan juga pengalaman
                langsung dalam memimpin dengan disertai mentoring dalam
                prosesnya.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Senat mahasiswa adalah salah satu wadah untuk mengasah
                kepemimpinan di dalam diri mahasiswa. Senat berperan sebagai
                wadah representasi bagi mahasiswa secara internal dan eksternal,
                mengkoordinasikan kegiatan kampus dan kemahasiswaan,
                menyelenggarakan sarana pengembangan minat-bakat mahasiswa, serta
                memberi solusi untuk menciptakan suasana belajar dan bertumbuh
                yang kondusif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kegiatan Senat Title */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-2">
              Kegiatan Senat
            </h2>
            <p className="text-lg text-gray-600">
              Berbagai kegiatan yang diselenggarakan oleh Senat Mahasiswa STTB
            </p>
          </div>
        </div>
      </section>

      {/* Activity Sections */}
      {senatActivities.map((section, index) => {
        const SectionIcon = section.icon;
        const isAlternate = index % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-16 md:py-20 ${isAlternate ? "bg-gray-50" : "bg-white"}`}
          >
            <div className="container mx-auto max-w-screen px-4">
              <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 bg-sttb-dark-blue rounded-xl text-white shrink-0">
                    <SectionIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-sttb-dark-blue mb-2">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Activity Items Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.items.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-sttb-primary-blue/30 transition-all duration-300"
                      >
                        <div className="p-2.5 bg-blue-50 rounded-lg text-sttb-primary-blue shrink-0">
                          <ItemIcon className="w-5 h-5" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
