import Image from "next/image";

interface LecturerCouncilCardProps {
  name: string;
  role: string;
  image: string;
  titles: string[];
}

const LecturerCouncilCard = ({
  name,
  role,
  image,
  titles,
}: LecturerCouncilCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-65 h-172 flex flex-col flex-1">
      {/* Image */}
      <div className="relative w-full h-100 bg-gray-200">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Name + Role */}
      <div className="border-t p-4 text-center">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-sttb-accent-red">{role}</p>
      </div>

      {/* Titles */}
      <div className="border-t p-3 text-sm text-gray-600 text-justify space-y-3">
        {titles.map((title, index) => (
          <p key={index}>{title}</p>
        ))}
      </div>
    </div>
  );
};

export default LecturerCouncilCard;
