import LecturerCouncilCard from "./LecturerCouncilCard";
import LecturerCouncilCarousel from "./LecturerCouncilCarousel";

const ketua = [
  {
    name: "Sutrisna Harjanto",
    role: "Dosen Pendidikan, Biblika, Marketplace",
    image: "/lecturers/lecturer-sutrisna-harjanto.png",
    titles: [
      "Ph.D. Trinity International University, Illinois USA",
      "M.Div. Trinity Theological College, Singapore",
      "S.Farn. Universitas Padjajaran, Bandung",
    ],
  },
];

const wakilKetua = [
  {
    name: "Tan Giok Lie",
    role: "Wakil Ketua I Akademik",
    image: "/lecturers/lecturer-tan-giok-lie.png",
    titles: [
      "Ed.D. Biola University Talbot School Theology USA",
      "M.A. Institut Alkitab Tiranus Bandung",
      "S.S. Universitas Kristen Maranatha Bandung",
    ],
  },
  {
    name: "Wemmy Prayogo",
    role: "Wakil Ketua II Adm. & Keuangan",
    image: "/lecturers/lecturer-wemmy-prayogo.png",
    titles: [
      "M.Ed. Monash University Australia",
      "S.Pd. Universitas Kristen Satya Wacana Salatiga",
    ],
  },
  {
    name: "Johan Setiawan",
    role: "Wakil Ketua III Kemahasiswaan",
    image: "/lecturers/lecturer-johan-setiawan.png",
    titles: [
      "M.Th. Sekolah Tinggi Teologi Bandung",
      "M.C.M Discipleship Training Centre (DTC) Singapore",
      "S.Psi. Universitas Gadjah Madah (UGM) Yogyakarta",
    ],
  },
];

const ketuaProgramStudi = [
  {
    name: "Ferry Herlianto",
    role: "Ketua Program Studi S.Pd.",
    image: "/lecturers/lecturer-ferry-herlianto.png",
    titles: ["M.Th. STA Tiranus", "S.Th. STT Tawangmangu"],
  },
  {
    name: "Dwi Maria Handayani",
    role: "Ketua Program Studi M.Th.",
    image: "/lecturers/lecturer-dwi-maria-handayani.png",
    titles: [
      "Ph.D. AGST Manila Philippines",
      "M.Th. International Theological Seminary USA",
      "M.A. Sekolah Tinggi Teologi Bandung",
      "S.E. Universitas Katolik Widyakarya Malang",
    ],
  },
  {
    name: "Sarinah Lo",
    role: "Ketua Program Studi M.Pd..K",
    image: "/lecturers/lecturer-sarinah-lo.png",
    titles: [
      "Ph.D. TEDS (Trinity Evangelical Divinity School)",
      "M.Ed. Calvin College USA",
      "M.A. Singapore Bible College",
      "S.Si. Universitas Indonesia Jakarta",
    ],
  },
  {
    name: "Heriyanto",
    role: "Ketua Program Studi M.Min.",
    image: "/lecturers/lecturer-heriyanto.png",
    titles: [
      "DR. Universitas Pendidikan Indonesia Bandung",
      "M.Th. International Theological Seminary USA",
      "S.Th. Sekolah Tinggi Teologi Bandung",
    ],
  },
  {
    name: "Kristian Kusumawardana",
    role: "Ketua Program Studi S.Th.",
    image: "/lecturers/lecturer-kristian-kusumawardana.png",
    titles: [
      "M.Th. Sekolah Tinggi Teologi Bandung",
      "M.Div. Sekolah Tinggi Teologi SAAT Malang ",
      "S.Si. MIPA UNS Surakarta",
    ],
  },
];

const dosen = [
  {
    name: "Ferry Herlianto",
    role: "Ketua Program Studi S.Pd.",
    image: "/lecturers/lecturer-ferry-herlianto.png",
    titles: ["M.Th. STA Tiranus", "S.Th. STT Tawangmangu"],
  },
  {
    name: "Dwi Maria Handayani",
    role: "Ketua Program Studi M.Th.",
    image: "/lecturers/lecturer-dwi-maria-handayani.png",
    titles: [
      "Ph.D. AGST Manila Philippines",
      "M.Th. International Theological Seminary USA",
      "M.A. Sekolah Tinggi Teologi Bandung",
      "S.E. Universitas Katolik Widyakarya Malang",
    ],
  },
  {
    name: "Sarinah Lo",
    role: "Ketua Program Studi M.Pd..K",
    image: "/lecturers/lecturer-sarinah-lo.png",
    titles: [
      "Ph.D. TEDS (Trinity Evangelical Divinity School)",
      "M.Ed. Calvin College USA",
      "M.A. Singapore Bible College",
      "S.Si. Universitas Indonesia Jakarta",
    ],
  },
  {
    name: "Heriyanto",
    role: "Ketua Program Studi M.Min.",
    image: "/lecturers/lecturer-heriyanto.png",
    titles: [
      "DR. Universitas Pendidikan Indonesia Bandung",
      "M.Th. International Theological Seminary USA",
      "S.Th. Sekolah Tinggi Teologi Bandung",
    ],
  },
  {
    name: "Kristian Kusumawardana",
    role: "Ketua Program Studi S.Th.",
    image: "/lecturers/lecturer-kristian-kusumawardana.png",
    titles: [
      "M.Th. Sekolah Tinggi Teologi Bandung",
      "M.Div. Sekolah Tinggi Teologi SAAT Malang ",
      "S.Si. MIPA UNS Surakarta",
    ],
  },
];

const LecturerCouncilSection = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lecturer Council
          </h1>
          <p className="text-xl text-gray-200">Meet the Lecturers</p>
        </div>
      </section>

      <section className="pt-16 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 items-center flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-4 pb-2">
                Ketua
              </h2>
              <div className="self-center">
                {ketua.map((lecturer, index) => (
                  <LecturerCouncilCard
                    key={index}
                    name={lecturer.name}
                    role={lecturer.role}
                    image={lecturer.image}
                    titles={lecturer.titles}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-4 pb-2">
                Wakil Ketua
              </h2>
              {/* <LecturerCouncilCarousel lecturers={wakilKetua} /> */}
              <div className="flex flex-row gap-5 self-center w-fit">
                {wakilKetua.map((lecturer, index) => (
                  <LecturerCouncilCard
                    key={index}
                    name={lecturer.name}
                    role={lecturer.role}
                    image={lecturer.image}
                    titles={lecturer.titles}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-4 pb-2">
                Ketua Program Studi
              </h2>
              <LecturerCouncilCarousel lecturers={ketuaProgramStudi} />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-16 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-4 pb-2">
                Jajaran Dosen
              </h2>
              {/* placeholder dlu pke ketua progra studi */}
              <LecturerCouncilCarousel lecturers={dosen} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LecturerCouncilSection;
