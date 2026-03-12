import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ConfessionOfFaithSection = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Confession of Faith
          </h1>
          <p className="text-xl text-gray-200 font-bold">
            Domino Optimo Maximo
          </p>
          <p className="text-lg text-gray-200">
            To The Lord, the Best, the Greatest
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="flex flex-row justify-between px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "1. Kami Percaya",
                description:
                  "bahwa Alkitab secara keseluruhan, Perjanjian Lama dan Perjanjian Baru, adalah firman Allah yang diwahyukan dan diilhamkan tanpa kesalahan. Oleh karena itu, Alkitab adalah sumber otoritas tertinggi bagi iman dan kehidupan orang percaya di segala abad dan tempat.",
              },
              {
                title: "2. Kami Percaya",
                description:
                  "bahwa Allah adalah Esa dan kekal, Mahakudus, dan penuh rahmat. Ia adalah pencipta, penguasa, dan pemelihara alam semesta beserta segala isinya, Tritunggal sebagai Bapa, Anak, dan Roh Kudus. Masing-masing adalah Pribadi yang tidak diciptakan, sehakekat, dan setara dalam kuasa dan kemuliaan. Ia berdaulat baik dalam keselamatan maupun dalam penghakiman umat manusia.",
              },
              {
                title: "3. Kami Percaya",
                description:
                  "bahwa manusia, laki-laki dan perempuan, telah diciptakan oleh Allah menurut gambar-Nya, yang telah dimahkotai-Nya dengan kemuliaan serta mandat untuk memenuhi bumi, mengelola dan memelihara seluruh ciptaan-Nya. Tetapi manusia telah jatuh ke dalam dosa, terpisah dari Allah, dan kehilangan kemampuan untuk hidup sesuai dengan citranya sebagai ciptaan Allah, sehingga tidak mampu menyelamatkan dirinya sendiri.",
              },
              {
                title: "4. Kami Percaya",
                description:
                  "bahwa Yesus Kristus adalah Anak Tunggal Allah, Allah sejati dan Manusia sejati, penebus dan satu-satunya jalan keselamatan bagi seluruh umat manusia. Ia dikandung dari Roh Kudus, lahir dari anak dara Maria, hidup tanpa dosa, sempurna dalam pengorbanan dan kasih. Ia mati di atas kayu salib, bangkit kembali dari antara orang mati dalam tubuh kebangkitan yang nyata, naik ke sorga, duduk di sebelah kanan Allah Bapa, menjadi Imam Besar Agung bagi orang percaya, dan pengantara tunggal antara Allah dan manusia, serta Raja di atas segala raja.",
              },
              {
                title: "5. Kami Percaya",
                description:
                  "bahwa Roh Kudus adalah Allah yang hidup, yang menginsafkan manusia akan dosa, kebenaran, dan penghakiman. Ia melahirbarukan orang berdosa yang percaya, mendiami, menguduskan, dan memberi kuasa serta karunia-karunia kepada setiap orang percaya menurut kehendak-Nya demi kesaksian, persekutuan, dan pelayanan untuk pembangunan tubuh Kristus.",
              },
              {
                title: "6. Kami Percaya",
                description:
                  "bahwa manusia hanya dapat diselamatkan oleh kasih karunia melalui penebusan oleh Tuhan Yesus Kristus dan dibenarkan melalui iman, tanpa jasa, usaha, ataupun kesalehan dari pihak manusia. Melalui penyelamatan Allah dalam Kristus, gambar Allah pada manusia dipulihkan. Dengan demikian, manusia dimampukan untuk menjalani kehidupan yang penuh tanggung jawab dalam pengabdian dan kasih di hadapan Allah dan manusia.",
              },
              {
                title: "7. Kami Percaya",
                description:
                  "bahwa Gereja selaku garam dan terang dunia adalah himpunan semua orang percaya dari segala abad dan bangsa. Ia adalah tubuh Kristus yang kudus dan Am, dengan Kristus sebagai Kepalanya. Gereja memberitakan Kerajaan Allah melalui kebaktian, pengajaran, sakramen baptisan dan perjamuan kudus, serta pemberitaan Injil dan misi umat Allah seutuhnya di tengah dunia.",
              },
              {
                title: "8. Kami Percaya",
                description:
                  "bahwa kepastian kedatangan kembali Yesus Kristus secara nyata dan pribadi akan terjadi pada akhir zaman untuk menjemput umat-Nya untuk menghakimi seluruh umat manusia, baik yang hidup maupun yang mati. Pada kedatangan-Nya kedua kali itulah setiap orang mati akan dibangkitkan, orang percaya masuk ke dalam kehidupan yang kekal, orang yang tidak percaya masuk ke dalam kebinasaan yang kekal.",
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
