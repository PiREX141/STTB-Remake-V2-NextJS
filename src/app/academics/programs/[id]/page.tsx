"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Clock,
  Award,
  User,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllMajors, type Major } from "@/api/MajorApiServices";

export default function ProgramStudiId() {
  const params = useParams();
  const programId = Number(params.id);

  const [major, setMajor] = useState<Major | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllMajors()
      .then((data) => {
        const found = data.find((m) => m.id === programId);
        if (found) {
          setMajor(found);
        } else {
          setError("Program not found");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [programId]);

  if (loading) {
    return (
      <div className="flex flex-col">
        <section className="bg-sttb-dark-blue text-white py-16">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="h-10 w-64 bg-white/10 rounded animate-pulse mb-4" />
            <div className="h-6 w-48 bg-white/10 rounded animate-pulse" />
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4 flex justify-center items-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-sttb-primary-blue" />
            <span className="ml-3 text-gray-600">Loading program...</span>
          </div>
        </section>
      </div>
    );
  }

  if (error || !major) {
    return (
      <div className="flex flex-col">
        <section className="bg-sttb-dark-blue text-white py-16">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Program Not Found
            </h1>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4 text-center py-16">
            <p className="text-red-500 mb-4">
              {error || "The requested program could not be found."}
            </p>
            <Link
              href="/academics/programs"
              className="inline-flex items-center gap-2 text-sttb-primary-blue hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Academic Programs
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const isS1 = major.tingkat === "S1";
  const Icon = isS1 ? BookOpen : GraduationCap;
  const duration = isS1 ? "4 years (8 semesters)" : "2 years (4 semesters)";
  const degreeLevel = isS1 ? "Undergraduate (S1)" : "Graduate (S2)";
  const description = isS1
    ? "A comprehensive undergraduate program designed to provide students with a solid foundation in biblical studies, systematic theology, church history, and practical ministry. Students will develop critical thinking skills, theological literacy, and practical competencies needed for effective ministry in diverse contexts."
    : "An advanced graduate program preparing students for theological leadership and specialized Christian service through intensive biblical and theological study. This program equips graduates with advanced research skills, deeper theological understanding, and specialized expertise for academic and ministry leadership roles.";
  const courses = isS1
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
      ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <Link
            href="/academics/programs"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Academic Programs
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {major.nama_Prodi}
            </h1>
          </div>
          <div className="flex items-center gap-2 text-gray-200">
            <Award className="h-4 w-4" />
            <span className="bg-white/15 px-3 py-1 rounded-full text-sm">
              {degreeLevel}
            </span>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Duration Card */}
              <Card className="border-l-4 border-l-sttb-primary-blue">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-sttb-primary-blue" />
                    <h3 className="font-semibold text-sttb-dark-blue">
                      Duration
                    </h3>
                  </div>
                  <p className="text-gray-700">{duration}</p>
                </CardContent>
              </Card>

              {/* Degree Level Card */}
              <Card className="border-l-4 border-l-sttb-accent-red">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-5 w-5 text-sttb-accent-red" />
                    <h3 className="font-semibold text-sttb-dark-blue">
                      Degree Level
                    </h3>
                  </div>
                  <p className="text-gray-700">{major.tingkat}</p>
                </CardContent>
              </Card>

              {/* Head of Program Card */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <User className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold text-sttb-dark-blue">
                      Head of Program
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {major.ketua_Prodi
                      ? major.ketua_Prodi.nama_Lengkap
                      : "To be announced"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Program Description */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sttb-dark-blue mb-6">
                  About This Program
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {description}
                </p>
              </CardContent>
            </Card>

            {/* Key Courses */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sttb-dark-blue mb-6">
                  Key Courses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-700 p-3 rounded-lg bg-gray-50"
                    >
                      <div className="w-2 h-2 rounded-full bg-sttb-primary-blue flex-shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Apply CTA */}
            <div className="text-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-sttb-accent-red hover:bg-sttb-accent-red/90 cursor-pointer"
              >
                <Link href="https://sis.sttb.ac.id/pmb">
                  Apply to This Program
                </Link>
              </Button>
            </div>

            {/* Bottom Navigation */}
            <div className="pt-8 border-t border-gray-200">
              <Link
                href="/academics/programs"
                className="inline-flex items-center gap-2 text-sttb-primary-blue hover:text-sttb-dark-blue transition-colors font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Academic Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
