"use client";

import { Library, Home, Utensils, Wifi } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export default function AboutFacilities() {
  const facilities = [
    {
      icon: Library,
      title: "Modern Library",
      description: "Our library houses over 25,000 volumes of theological resources, journals, and digital databases. Study rooms and research areas provide quiet spaces for academic work.",
    },
    {
      icon: Home,
      title: "Student Housing",
      description: "On-campus dormitories accommodate 200 students with modern amenities, providing a safe and supportive community environment.",
    },
    {
      icon: Utensils,
      title: "Dining Hall",
      description: "Our cafeteria serves nutritious meals daily, accommodating various dietary needs and providing a gathering space for community.",
    },
    {
      icon: Wifi,
      title: "Technology Infrastructure",
      description: "Campus-wide Wi-Fi, computer labs, and online learning platforms support both traditional and digital education.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Facilities</h1>
          <p className="text-xl text-gray-200">Resources to support your academic journey</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1673609218895-bb331f054e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczMTE4MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="STTB Campus"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-sttb-primary-blue rounded-lg flex items-center justify-center mb-4">
                    <facility.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-sttb-dark-blue">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
