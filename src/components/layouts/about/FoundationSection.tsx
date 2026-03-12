import React from "react";

const FoundationSection = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            STTB Foundation
          </h1>
          <p className="text-xl text-gray-200">Meet the Board Administrators</p>
        </div>
      </section>

      <section className="pt-16 pb-24 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-12 text-center">
              Board of Administrators
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Dewan Pembina",
                  items: [
                    "Pdt. Agus Gunawan, Ph.D.",
                    "Pnt. Subianto Tjandra",
                    "Pdt. Budiyanto Santosa, D.Min.",
                  ],
                },
                {
                  title: "Dewan Pengurus",
                  items: [
                    "Ketua, Pnts. Benny Soenarjo",
                    "Wakil Ketua, Pnts.Ginawan Chondro",
                    "Sekretaris, Pnt. Arif Subagyo",
                    "Bendahara, Pnt. Widianto Tjandradipura",
                  ],
                },
                {
                  title: "Anggota",
                  items: [
                    "Pnts. Agus Tjandra",
                    "Ev. Doroti Tunggal Widjaja, M.Th.",
                    "Bp. Eddy Samuel Affendie",
                    "Pnts. Edi Sukamto Josana",
                    "Bp. Herjanto Gunawan",
                    "Pnts, Joseph Koshan",
                    "Pnt. Suwito Kwee",
                  ],
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="border-l-4 border-sttb-primary-blue pl-6 py-2"
                >
                  <h3 className="text-xl font-semibold text-sttb-dark-blue mb-2">
                    {value.title}
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {value.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundationSection;
