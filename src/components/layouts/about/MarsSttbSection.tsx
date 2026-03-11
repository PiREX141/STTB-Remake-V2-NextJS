import Image from "next/image";
import AudioPlayer from "@/components/shared/AudioPlayer";

const MarsSttbSection = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Anthem</h1>
          <p className="text-xl text-gray-200">
            The official anthem of Sekolah Tinggi Teologi Bethel, a song that
            embodies the spirit and values of our institution.
          </p>
        </div>
      </section>

      <section className="pt-16 pb-28 bg-white self-center">
        <div className="flex flex-col">
          <Image
            src="/mars-sttb.jpg"
            alt="Mars STTB"
            width={800}
            height={500}
            className="pb-10"
          />
        </div>
        <AudioPlayer
          src="/mars-sttb.mp3"
          title="Mars STTB"
          author="Dorothy I. Marx"
        />
      </section>
    </div>
  );
};

export default MarsSttbSection;
