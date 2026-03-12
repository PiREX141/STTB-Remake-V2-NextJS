import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ConfessionOfFaithSection = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Confession of Faith
          </h1>
          <p className="text-xl text-gray-200">
            Our beliefs in pursuit of studies
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="flex flex-row justify-between px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Pastor-Scholar",
                description:
                  "memiliki jiwa gembala (kepemimpinan yg melayani di gereja, dunia pendidikan, maupun profesi lain) dan sekaligus pembelajar (semangat untuk terus belajar, daya nalar kritis seorang intelektual Kristen, dan kemampuan berkontribusi terhadap dunia ilmu pengetahuan dari perspektif Kristen)",
              },
              {
                title: "Berita Injil yang utuh",
                description:
                  "kuasa Injil yg mampu mentransformasi seluruh aspek hidup manusia dan seluruh ciptaan yg sudah jatuh dalam dosa (total depravity), yg kesempurnaannya baru akan terjadi setelah kedatangan Kristus yang kedua, namun cicipan awalnya sudah bisa dirasakan hari ini.",
              },
              {
                title: "Seluruh umat Allah",
                description:
                  "kuasa penebusan Kristus dinyatakan melalui hidup setiap pengikut Kristus, di tengah keluarga, gereja, dan masyarakat.",
              },
              {
                title: "Masyarakat Urban",
                description:
                  "mahasiswa STTB dipersiapkan dengan fokus melayani masyarakat di perkotaan, tanpa menutup kemungkinan tuntunan lain yang Tuhan berikan kepada mereka di tempat lain.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-sttb-dark-blue text-2xl">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-col"></div>
        </div>
      </section>
    </div>
  );
};

export default ConfessionOfFaithSection;
