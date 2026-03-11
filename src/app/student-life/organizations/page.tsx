"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Music, BookOpen, Globe } from "lucide-react";

export default function StudentLifeOrganizations() {
  const organizations = [
    {
      icon: Users,
      name: "Student Council",
      description: "Student government representing the student body and organizing campus activities.",
    },
    {
      icon: Music,
      name: "Worship Ministry",
      description: "Lead worship in chapel services and special events, developing musical gifts.",
    },
    {
      icon: BookOpen,
      name: "Theological Society",
      description: "Facilitate theological discussions, debates, and academic presentations.",
    },
    {
      icon: Globe,
      name: "Missions Fellowship",
      description: "Promote missions awareness and organize outreach activities locally and abroad.",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Organizations</h1>
          <p className="text-xl text-gray-200">Get involved in campus ministry</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12 text-center">
              Student organizations provide opportunities for leadership development, service, and fellowship beyond the classroom.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organizations.map((org, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-sttb-primary-blue rounded-lg flex items-center justify-center mb-3">
                      <org.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-sttb-dark-blue">{org.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{org.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
