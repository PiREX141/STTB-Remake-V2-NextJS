"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import {
  BookOpen,
  Users,
  GraduationCap,
  Church,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-150 flex items-center justify-center bg-linear-to-r from-sttb-dark-blue to-sttb-primary-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1673609218895-bb331f054e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczMTE4MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="STTB Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto max-w-screen px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Sekolah Tinggi Teologi Bandung
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Preparing Leaders for Christian Ministry and Service
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-sttb-accent-red hover:bg-sttb-accent-red/90 text-white cursor-pointer"
            >
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-sttb-dark-blue hover:bg-gray-100 cursor-pointer"
            >
              <Link href="/academics/programs">Explore Programs</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sttb-dark-blue">
              Welcome to STTB
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For over five decades, Sekolah Tinggi Teologi Bandung has been a
              beacon of theological education in Indonesia. We are committed to
              equipping students with sound biblical knowledge, practical
              ministry skills, and spiritual formation for effective Christian
              leadership.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our rigorous academic programs, experienced faculty, and vibrant
              community create an ideal environment for spiritual growth and
              theological study.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sttb-dark-blue">
              Academic Programs
            </h2>
            <p className="text-lg text-gray-600">
              Discover our comprehensive theological education offerings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Bachelor of Theology",
                description:
                  "Comprehensive undergraduate program in biblical studies, systematic theology, and practical ministry.",
                link: "/academics/programs",
              },
              {
                icon: GraduationCap,
                title: "Master of Divinity",
                description:
                  "Advanced professional degree preparing students for pastoral ministry and theological leadership.",
                link: "/academics/programs",
              },
              {
                icon: Users,
                title: "Master of Theology",
                description:
                  "Research-focused graduate program for in-depth theological study and scholarship.",
                link: "/academics/programs",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-sttb-primary-blue rounded-lg flex items-center justify-center mb-4">
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-sttb-dark-blue">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {program.description}
                    </CardDescription>
                    <Link
                      href={program.link}
                      className="text-sttb-primary-blue hover:text-sttb-dark-blue font-medium inline-flex items-center"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sttb-dark-blue">
                Latest News
              </h2>
              <p className="text-lg text-gray-600">
                Stay updated with what's happening at STTB
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex cursor-pointer"
            >
              <Link href="/news-events">View All News</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1745162829464-c3487261f90d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMHRoZW9sb2d5fGVufDF8fHx8MTc3MzExODA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "New Academic Year 2026 Begins",
                date: "March 5, 2026",
                excerpt:
                  "STTB welcomes 120 new students across all programs as we begin the 2026 academic year with renewed vision and commitment.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50cyUyMGNlbGVicmF0aW5nfGVufDF8fHx8MTc3MzExNTIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Graduation Ceremony 2025 Highlights",
                date: "February 28, 2026",
                excerpt:
                  "Celebrating the achievements of 85 graduates who are now equipped to serve in various ministry contexts.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1760840414854-36cd365d14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGxpYnJhcnklMjBib29rcyUyMHJlYWRpbmd8ZW58MXx8fHwxNzczMTE4MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Library Expansion Completed",
                date: "February 15, 2026",
                excerpt:
                  "Our newly renovated library now features 10,000 additional theological resources and modern study spaces.",
              },
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-sttb-primary-blue mb-2">
                      {news.date}
                    </div>
                    <CardTitle className="text-xl text-sttb-dark-blue">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {news.excerpt}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="cursor-pointer">
              <Link href="/news-events">View All News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-sttb-secondary-blue/10">
        <div className="container mx-auto max-w-screen px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sttb-dark-blue">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Join us for these upcoming events and activities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                date: "MAR 15",
                title: "Open House for Prospective Students",
                time: "9:00 AM - 3:00 PM",
                location: "Main Campus",
              },
              {
                date: "MAR 22",
                title: "Guest Lecture: Contemporary Theological Issues",
                time: "2:00 PM - 4:00 PM",
                location: "Auditorium",
              },
              {
                date: "MAR 29",
                title: "Spring Spiritual Emphasis Week",
                time: "All Week",
                location: "Chapel",
              },
              {
                date: "APR 5",
                title: "Ministry Internship Fair",
                time: "10:00 AM - 2:00 PM",
                location: "Student Center",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="shrink-0 w-16 h-16 bg-sttb-accent-red rounded-lg flex flex-col items-center justify-center text-white">
                        <div className="text-xs font-semibold">
                          {event.date.split(" ")[0]}
                        </div>
                        <div className="text-2xl font-bold">
                          {event.date.split(" ")[1]}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-sttb-dark-blue mb-2">
                          {event.title}
                        </h3>
                        <div className="flex flex-col gap-1 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-sttb-primary-blue" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Church className="h-4 w-4 text-sttb-primary-blue" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sttb-dark-blue">
              Why Choose STTB?
            </h2>
            <p className="text-lg text-gray-600">
              Experience excellence in theological education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Academic Excellence",
                description:
                  "Rigorous curriculum taught by experienced scholars",
              },
              {
                icon: Users,
                title: "Vibrant Community",
                description: "Diverse student body from across Indonesia",
              },
              {
                icon: Church,
                title: "Spiritual Formation",
                description: "Integrated approach to ministry preparation",
              },
              {
                icon: GraduationCap,
                title: "Career Support",
                description: "Placement assistance and ministry connections",
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-sttb-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sttb-dark-blue">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-linear-to-r from-sttb-primary-blue to-sttb-secondary-blue text-white">
        <div className="container mx-auto max-w-screen px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us at STTB and prepare for a life of meaningful ministry and
            service. Applications are now open for the 2026 academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-sttb-accent-red hover:bg-sttb-accent-red/90 text-white cursor-pointer"
            >
              <Link href="https://sis.sttb.ac.id/pmb">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-sttb-primary-blue hover:bg-gray-100 cursor-pointer"
            >
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
