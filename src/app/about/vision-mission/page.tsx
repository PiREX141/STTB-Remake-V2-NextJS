"use client";

import { Target, Heart, Book, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutVisionMission() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vision & Mission</h1>
          <p className="text-xl text-gray-200">Our purpose and guiding principles</p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-20 h-20 bg-sttb-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To be a leading theological seminary in Indonesia that equips Christian leaders with sound biblical knowledge, practical ministry skills, and spiritual maturity to serve the church and transform communities for the glory of God.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">We are committed to the following objectives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Book,
                title: "Academic Excellence",
                description: "Provide rigorous theological education grounded in Scripture and informed by the best of Christian tradition and contemporary scholarship.",
              },
              {
                icon: Heart,
                title: "Spiritual Formation",
                description: "Cultivate spiritual maturity through worship, prayer, community life, and mentorship in Christian discipleship.",
              },
              {
                icon: Users,
                title: "Ministry Preparation",
                description: "Equip students with practical skills for effective ministry in diverse cultural contexts and ministry settings.",
              },
              {
                icon: Target,
                title: "Kingdom Impact",
                description: "Prepare leaders who will serve the church, engage society, and advance God's kingdom in Indonesia and beyond.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-sttb-primary-blue rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-sttb-dark-blue">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-12 text-center">Core Values</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Biblical Fidelity",
                  description: "We are committed to the authority and sufficiency of Scripture as God's inspired Word.",
                },
                {
                  title: "Academic Integrity",
                  description: "We pursue excellence in scholarship and maintain high standards of intellectual rigor.",
                },
                {
                  title: "Spiritual Vitality",
                  description: "We emphasize the importance of personal relationship with God and spiritual growth.",
                },
                {
                  title: "Servant Leadership",
                  description: "We model and teach leadership that follows Christ's example of humble service.",
                },
                {
                  title: "Cultural Engagement",
                  description: "We prepare students to engage thoughtfully with contemporary issues and diverse contexts.",
                },
                {
                  title: "Kingdom Partnership",
                  description: "We collaborate with churches and Christian organizations for greater kingdom impact.",
                },
              ].map((value, index) => (
                <div key={index} className="border-l-4 border-sttb-primary-blue pl-6 py-2">
                  <h3 className="text-xl font-semibold text-sttb-dark-blue mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
