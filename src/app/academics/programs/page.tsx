"use client";

import { useEffect, useState } from "react";
import ProgramCard from "@/components/layouts/academics/ProgramCard";
import { BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllMajors, Major } from "@/api/MajorApiServices";
import { LucideIcon } from "lucide-react";

// const programs = [
//   {
//     icon: BookOpen,
//     title: "Sarjana Teologi",
//     duration: "4 years (8 semesters)",
//     description:
//       "A comprehensive undergraduate program designed to provide students with a solid foundation in biblical studies, systematic theology, church history, and practical ministry.",
//     courses: [
//       "Old Testament Studies",
//       "New Testament Studies",
//       "Systematic Theology",
//       "Church History",
//       "Homiletics & Preaching",
//       "Christian Education",
//       "Pastoral Counseling",
//       "Mission & Evangelism",
//     ],
//   },
//   {
//     icon: BookOpen,
//     title: "Sarjana Pendidikan Kristen",
//     duration: "4 years (8 semesters)",
//     description:
//       "A comprehensive undergraduate program designed to provide students with a solid foundation in biblical studies, systematic theology, church history, and practical ministry.",
//     courses: [
//       "Old Testament Studies",
//       "New Testament Studies",
//       "Systematic Theology",
//       "Church History",
//       "Homiletics & Preaching",
//       "Christian Education",
//       "Pastoral Counseling",
//       "Mission & Evangelism",
//     ],
//   },
//   {
//     icon: BookOpen,
//     title: "Magister Teologi Pelayanan Pastoral Gereja Urban",
//     duration: "4 years (8 semesters)",
//     description:
//       "A comprehensive undergraduate program designed to provide students with a solid foundation in biblical studies, systematic theology, church history, and practical ministry.",
//     courses: [
//       "Old Testament Studies",
//       "New Testament Studies",
//       "Systematic Theology",
//       "Church History",
//       "Homiletics & Preaching",
//       "Christian Education",
//       "Pastoral Counseling",
//       "Mission & Evangelism",
//     ],
//   },
//   {
//     icon: GraduationCap,
//     title: "Magister Teologi Transformasi Budaya & Masyarakat",
//     duration: "3 years (6 semesters)",
//     description:
//       "An advanced professional degree preparing students for pastoral ministry, theological leadership, and specialized Christian service through intensive biblical and theological study.",
//     courses: [
//       "Advanced Biblical Exegesis",
//       "Theological Research Methods",
//       "Contemporary Theology",
//       "Leadership & Administration",
//       "Spiritual Formation",
//       "Cross-Cultural Ministry",
//       "Ethics & Social Issues",
//       "Ministry Practicum",
//     ],
//   },
//   {
//     icon: Users,
//     title: "Magister Pendidikan Kristen",
//     duration: "2 years (4 semesters)",
//     description:
//       "A research-focused graduate program for in-depth theological study and scholarship, preparing students for academic teaching or advanced ministry positions.",
//     courses: [
//       "Research Methodology",
//       "Advanced Hermeneutics",
//       "Theological Analysis",
//       "Dissertation Seminar",
//       "Academic Writing",
//       "Specialized Electives",
//     ],
//   },
//   {
//     icon: Users,
//     title: "Magister Ministri Marketplace",
//     duration: "2 years (4 semesters)",
//     description:
//       "A research-focused graduate program for in-depth theological study and scholarship, preparing students for academic teaching or advanced ministry positions.",
//     courses: [
//       "Research Methodology",
//       "Advanced Hermeneutics",
//       "Theological Analysis",
//       "Dissertation Seminar",
//       "Academic Writing",
//       "Specialized Electives",
//     ],
//   },
//   {
//     icon: Users,
//     title: "Magister Ministri Kepemimpinan Pastoral",
//     duration: "2 years (4 semesters)",
//     description:
//       "A research-focused graduate program for in-depth theological study and scholarship, preparing students for academic teaching or advanced ministry positions.",
//     courses: [
//       "Research Methodology",
//       "Advanced Hermeneutics",
//       "Theological Analysis",
//       "Dissertation Seminar",
//       "Academic Writing",
//       "Specialized Electives",
//     ],
//   },
//   {
//     icon: Users,
//     title: "Magister Ministri Teologi Pelayanan Gerejawi",
//     duration: "2 years (4 semesters)",
//     description:
//       "A research-focused graduate program for in-depth theological study and scholarship, preparing students for academic teaching or advanced ministry positions.",
//     courses: [
//       "Research Methodology",
//       "Advanced Hermeneutics",
//       "Theological Analysis",
//       "Dissertation Seminar",
//       "Academic Writing",
//       "Specialized Electives",
//     ],
//   },
// ];

function mapMajorToProgram(major: Major) {
  const isS1 = major.tingkat === "S1";

  return {
    icon: isS1 ? BookOpen : GraduationCap,
    title: major.nama_Prodi,
    duration: isS1 ? "4 years (8 semesters)" : "2 years (4 semesters)",
    description: isS1
      ? "A comprehensive undergraduate program designed to provide students with a solid foundation in biblical studies, systematic theology, church history, and practical ministry."
      : "An advanced graduate program preparing students for theological leadership and specialized Christian service through intensive biblical and theological study.",
    courses: isS1
      ? [
          "Old Testament Studies",
          "New Testament Studies",
          "Systematic Theology",
          "Church History",
          "Homiletics & Preaching",
          "Christian Education",
          "Pastoral Counseling",
          "Mission & Evangelism",
        ]
      : [
          "Advanced Biblical Exegesis",
          "Theological Research Methods",
          "Contemporary Theology",
          "Leadership & Administration",
          "Spiritual Formation",
          "Cross-Cultural Ministry",
          "Ethics & Social Issues",
          "Ministry Practicum",
        ],
  };
}

interface ProgramData {
  icon: LucideIcon;
  title: string;
  duration: string;
  description: string;
  courses: string[];
}

export default function AcademicsPrograms() {
  const [programs, setPrograms] = useState<ProgramData[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const majors = await getAllMajors();
        setPrograms(majors.map(mapMajorToProgram));
      } catch (error) {
        console.error("Failed to fetch programs:", error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Programs
          </h1>
          <p className="text-xl text-gray-200">
            Comprehensive theological education for ministry preparation
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-sttb-accent-red hover:bg-sttb-accent-red/90 cursor-pointer"
            >
              <Link href="https://sis.sttb.ac.id/pmb">Apply to a Program</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

