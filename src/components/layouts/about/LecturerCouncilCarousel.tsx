"use client";
import LecturerCouncilCard from "./LecturerCouncilCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Lecturer {
  name: string;
  role: string;
  image: string;
  titles: string[];
}

interface LecturerCouncilCarouselProps {
  lecturers: Lecturer[];
}

const LecturerCouncilCarousel = ({
  lecturers,
}: LecturerCouncilCarouselProps) => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent className="ml-4">
        {lecturers.map((lecturer, index) => (
          <CarouselItem key={index} className="pl-4 basis-auto">
            <LecturerCouncilCard {...lecturer} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default LecturerCouncilCarousel;
