"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AcademicsPrograms() {
  const programs = [
    {
      icon: BookOpen,
      title: "Bachelor of Theology (B.Th.)",
      duration: "4 years (8 semesters)",
      description: "A comprehensive undergraduate program designed to provide students with a solid foundation in biblical studies, systematic theology, church history, and practical ministry.",
      courses: [
        "Old Testament Studies",
        "New Testament Studies",
        "Systematic Theology",
        "Church History",
        "Homiletics & Preaching",
        "Christian Education",
        "Pastoral Counseling",
        "Mission & Evangelism",
      ],
    },
    {
      icon: GraduationCap,
      title: "Master of Divinity (M.Div.)",
      duration: "3 years (6 semesters)",
      description: "An advanced professional degree preparing students for pastoral ministry, theological leadership, and specialized Christian service through intensive biblical and theological study.",
      courses: [
        "Advanced Biblical Exegesis",
        "Theological Research Methods",
        "Contemporary Theology",
        "Leadership & Administration",
        "Spiritual Formation",
        "Cross-Cultural Ministry",
        "Ethics & Social Issues",
        "Ministry Practicum",
      ],
    },
    {
      icon: Users,
      title: "Master of Theology (M.Th.)",
      duration: "2 years (4 semesters)",
      description: "A research-focused graduate program for in-depth theological study and scholarship, preparing students for academic teaching or advanced ministry positions.",
      courses: [
        "Research Methodology",
        "Advanced Hermeneutics",
        "Theological Analysis",
        "Dissertation Seminar",
        "Academic Writing",
        "Specialized Electives",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl text-gray-200">Comprehensive theological education for ministry preparation</p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-sttb-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <program.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-sttb-dark-blue mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-base text-sttb-primary-blue">{program.duration}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  <div>
                    <h4 className="font-semibold text-sttb-dark-blue mb-3">Key Courses:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.courses.map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-sttb-primary-blue" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-sttb-accent-red hover:bg-sttb-accent-red/90 cursor-pointer">
              <Link href="/admissions/apply">Apply to a Program</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
