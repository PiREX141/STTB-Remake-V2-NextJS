"use client";

import {
  Book,
  BookOpen,
  Clock,
  Phone,
  Globe,
  ExternalLink,
  Library,
  Bookmark,
  FileText,
  Users,
  ClipboardList,
} from "lucide-react";

const physicalLibraryLinks = [
  {
    title: "KATALOG",
    href: "http://library.sttb.ac.id",
    description: "Browse the full library catalog",
  },
  {
    title: "PUSTAKA PINTAR",
    href: "https://docs.google.com/forms/d/18xoNEwlURemRdvMCCypUSXAK57Ni1S26j3pHlokUwyM/viewform?chromeless=1&edit_requested=true",
    description: "Smart library request form",
  },
  {
    title: "PERPANJANG MANDIRI",
    href: "http://library.sttb.ac.id/index.php?p=perpanjang",
    description: "Self-service book renewal",
  },
];

const stats = [
  { icon: FileText, value: "47,254", label: "Judul" },
  { icon: Bookmark, value: "51,932", label: "Eksemplar" },
  { icon: Globe, value: "39,913", label: "Sirkulasi" },
];

const digitalLibrary = [
  {
    title: "Koleksi E-Book via EBSCO",
    description: "Access thousands of e-books",
  },
  { title: "Jurnal Teologi ATLA", description: "Theological journal database" },
  { title: "Open Access E-Book", description: "Free access e-book collection" },
];

const onlineSources = [
  { title: "PERPUSNAS", href: "https://e-resources.perpusnas.go.id/" },
  { title: "OADTL", href: "http://oadtl.org/" },
  { title: "OJS/TRANSFORMATIO", href: "http://e-journal.sttb.ac.id/" },
  { title: "GARUDA", href: "https://garuda.kemdikbud.go.id/" },
  { title: "SINTA", href: "https://sinta.kemdikbud.go.id/journals" },
  { title: "GLOBETHICS", href: "https://www.globethics.net/home" },
  { title: "SCIMAGO", href: "https://www.scimagojr.com" },
];

const membershipRequirements = [
  "Pas foto digital",
  "Fotokopi KTP atau kartu identitas lainnya (1 lembar)",
  "Bagi pelajar/mahasiswa, surat keterangan dari sekolah/universitas dan orang tua atau wali (fisik dan digital)",
  "Uang keanggotaan sebesar Rp. 100.000,- / tahun",
  "Uang jaminan selama menjadi anggota sebesar Rp. 250.000,-",
  "Bukti transfer uang keanggotaan dan jaminan",
  "Keterlambatan perpanjang keanggotaan akan otomatis mengurangi jumlah uang jaminan",
  "Jika menghilangkan buku atau merusak buku maka harus mengganti buku yang sama atau seharga buku baru",
  "Keterlambatan mengembalikan atau perpanjang peminjaman buku dikenakan denda sebesar Rp. 1.000,-/hari/buku",
  "Membawa buku perpustakaan tanpa melalui prosedur yang berlaku dikenakan sanksi 3 bulan non-aktif keanggotaan",
];

const bookHighlights = [
  {
    title:
      "The Transcendent Character of the Good: Philosophical and Theological Perspectives",
    description:
      "This volume addresses issues of moral pluralism and polarization by drawing attention to the transcendent character of the good. It probes the history of Christian theology and moral philosophy to investigate the value of this idea and then relates it to contemporary discussions.",
    href: "https://sttb.ac.id/koleksi_perpustakaan/title-the-transcendent-character-of-the-good-philosophical-and-theological-perspectives/",
  },
  {
    title: "Kingdom Calling: Vocational Stewardship for the Common Good",
    description:
      "Amy Sherman unpacks Proverbs 11:10 — 'When the righteous prosper, the city rejoices' — to develop a theology and program of vocational stewardship. Here is practical help for churches, ministries and other faith communities to navigate the complex process of following God's call.",
    href: "https://sttb.ac.id/koleksi_perpustakaan/title-kingdom-calling-vocational-stewardship-for-the-common-good/",
  },
  {
    title:
      "A Christian Education in the Virtues: Character Formation and Human Flourishing",
    description:
      "This book examines the connection between human nature and human flourishing. It draws on ancient and medieval sources to explore the formation of the person based on a Christian anthropology, emphasising the communal nature of the virtuous life.",
    href: "https://sttb.ac.id/koleksi_perpustakaan/a-christian-education-in-the-virtues-character-formation-and-human-flourishing/",
  },
];

export default function LibraryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Perpustakaan Transformatio
          </h1>
          <p className="text-xl text-gray-200 italic mb-4">
            Menjadi wadah tranformasi pemikiran dan kehidupan.
          </p>
          <blockquote className="border-l-4 border-white/40 pl-4 mt-6">
            <p className="text-gray-300 leading-relaxed">
              &ldquo;Semua yang benar, semua yang mulia, semua yang adil, semua
              yang suci, semua yang manis, semua yang sedap didengar, semua yang
              disebut kebajikan dan patut dipuji, pikirkanlah semuanya
              itu&rdquo;.
            </p>
            <cite className="text-gray-400 text-sm mt-2 block not-italic">
              — Filipi 4:8
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Physical Library */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-sttb-dark-blue rounded-xl text-white shrink-0">
                <Library className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sttb-dark-blue">
                  Perpustakaan Fisik
                </h2>
                <p className="text-gray-600">
                  Access the STTB physical library catalog and services
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {physicalLibraryLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-sttb-primary-blue hover:bg-sttb-dark-blue text-white rounded-xl p-6 text-center transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <h3 className="text-lg font-bold tracking-wide mb-1">
                    {link.title}
                  </h3>
                  <p className="text-sm text-white/75">{link.description}</p>
                  <ExternalLink className="w-4 h-4 absolute top-3 right-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100"
                  >
                    <div className="w-14 h-14 bg-sttb-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-4xl font-bold text-sttb-dark-blue mb-1">
                      {stat.value}
                    </p>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Service Hours & WhatsApp */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-sttb-primary-blue pl-5 py-3 bg-gray-50 rounded-r-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-sttb-primary-blue" />
                  <h3 className="text-lg font-semibold text-sttb-dark-blue">
                    Jam Layanan
                  </h3>
                </div>
                <p className="text-gray-700">08.00 s.d 17.00 WIB</p>
              </div>
              <div className="border-l-4 border-sttb-primary-blue pl-5 py-3 bg-gray-50 rounded-r-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-sttb-primary-blue" />
                  <h3 className="text-lg font-semibold text-sttb-dark-blue">
                    WhatsApp
                  </h3>
                </div>
                <a
                  href="https://wa.me/6285173057735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sttb-primary-blue hover:underline font-medium"
                >
                  0851-7305-7735
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Library & Online Sources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-5xl mx-auto">
            {/* Digital Library */}
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-sttb-dark-blue rounded-xl text-white shrink-0">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sttb-dark-blue">
                  Perpustakaan Digital
                </h2>
                <p className="text-gray-600">
                  Digital resources for research and study
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {digitalLibrary.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <Book className="w-5 h-5 text-sttb-primary-blue" />
                  </div>
                  <h3 className="font-semibold text-sttb-dark-blue mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <a
              href="https://search.ebscohost.com/Login.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sttb-primary-blue hover:bg-sttb-dark-blue text-white font-bold px-8 py-3 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg mb-16"
            >
              <ExternalLink className="w-5 h-5" />
              E-LIBRARY VIA EBSCO
            </a>

            {/* Online Sources */}
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-sttb-dark-blue rounded-xl text-white shrink-0">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sttb-dark-blue">
                  Sumber Online
                </h2>
                <p className="text-gray-600">
                  External academic and theological resources
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {onlineSources.map((source) => (
                <a
                  key={source.title}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-sttb-primary-blue hover:shadow-md transition-all duration-300 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-blue-50 group-hover:bg-sttb-primary-blue rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300">
                    <ExternalLink className="w-5 h-5 text-sttb-primary-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-semibold text-sttb-dark-blue text-sm">
                    {source.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-sttb-dark-blue rounded-xl text-white shrink-0">
                <ClipboardList className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sttb-dark-blue">
                  Syarat & Kewajiban Pendaftaran
                </h2>
                <p className="text-gray-600">
                  Membership requirements and obligations
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-8">
              <ol className="space-y-3">
                {membershipRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-7 h-7 bg-sttb-primary-blue text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-sttb-primary-blue pl-5 py-4 bg-gray-50 rounded-r-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-sttb-primary-blue" />
                  <h3 className="text-lg font-semibold text-sttb-dark-blue">
                    Pendaftaran Anggota Perpustakaan
                  </h3>
                </div>
                <p className="text-gray-700 font-medium">Terbuka untuk Umum</p>
              </div>
              <div className="border-l-4 border-sttb-primary-blue pl-5 py-4 bg-gray-50 rounded-r-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-sttb-primary-blue" />
                  <h3 className="text-lg font-semibold text-sttb-dark-blue">
                    Bebas Pustaka
                  </h3>
                </div>
                <p className="text-gray-700">
                  Permohonan non-aktif keanggotaan, berupa surat keterangan
                  bebas pustaka (SKBP)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Highlights */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-sttb-dark-blue rounded-xl text-white shrink-0">
                <Book className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sttb-dark-blue">
                  Highlight Buku
                </h2>
                <p className="text-gray-600">
                  Featured books from our collection
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {bookHighlights.map((book) => (
                <a
                  key={book.title}
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-3 bg-sttb-primary-blue group-hover:bg-sttb-dark-blue transition-colors duration-300" />
                  <div className="p-6">
                    <div className="w-12 h-12 bg-blue-50 group-hover:bg-sttb-primary-blue rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                      <BookOpen className="w-6 h-6 text-sttb-primary-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-sttb-dark-blue mb-3 leading-snug group-hover:text-sttb-primary-blue transition-colors duration-300">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                      {book.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sttb-primary-blue text-sm font-medium mt-4">
                      Read more
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
