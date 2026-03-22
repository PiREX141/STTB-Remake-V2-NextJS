"use client";

import { useEffect, useState } from "react";
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
  MapPin,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { motion } from "motion/react";
import { getAllMajors, type Major } from "@/api/MajorApiServices";
import { getAllNews, type News } from "@/api/NewsApiServices";
import { getAllEvents, type Event } from "@/api/EventApiServices";

export default function Home() {
  const [majors, setMajors] = useState<Major[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [majorsLoading, setMajorsLoading] = useState(true);
  const [newsLoading, setNewsLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [majorsError, setMajorsError] = useState<string | null>(null);
  const [newsError, setNewsError] = useState<string | null>(null);
  const [eventsError, setEventsError] = useState<string | null>(null);

  useEffect(() => {
    getAllMajors()
      .then((data) => setMajors(data.slice(0, 3)))
      .catch((err) => setMajorsError(err.message))
      .finally(() => setMajorsLoading(false));

    getAllNews()
      .then((data) => {
        const sorted = [...data].sort(
          (a, b) =>
            new Date(b.tanggal_Publikasi).getTime() -
            new Date(a.tanggal_Publikasi).getTime()
        );
        setNews(sorted.slice(0, 3));
      })
      .catch((err) => setNewsError(err.message))
      .finally(() => setNewsLoading(false));

    getAllEvents()
      .then((data) => setEvents(data.slice(0, 4)))
      .catch((err) => setEventsError(err.message))
      .finally(() => setEventsLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date
      .toLocaleDateString("en-US", { month: "short" })
      .toUpperCase();
    const day = date.getDate().toString();
    return { month, day };
  };

  const formatEventTime = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeFormat: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    if (start.toDateString() === end.toDateString()) {
      return `${start.toLocaleTimeString("en-US", timeFormat)} - ${end.toLocaleTimeString("en-US", timeFormat)}`;
    }

    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    const plainText = text.replace(/<[^>]*>/g, "");
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength).trim() + "...";
  };

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
              <Link href="https://sis.sttb.ac.id/pmb">Apply Now</Link>
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

          {majorsLoading && (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-sttb-primary-blue" />
              <span className="ml-3 text-gray-600">Loading programs...</span>
            </div>
          )}

          {majorsError && (
            <div className="text-center py-16">
              <p className="text-red-500 mb-2">Failed to load programs</p>
              <p className="text-gray-500 text-sm">{majorsError}</p>
            </div>
          )}

          {!majorsLoading && !majorsError && majors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No programs available at this time.</p>
            </div>
          )}

          {!majorsLoading && !majorsError && majors.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {majors.map((major, index) => {
                const Icon = major.tingkat === "S1" ? BookOpen : GraduationCap;
                return (
                  <motion.div
                    key={major.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-sttb-primary-blue rounded-lg flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-sttb-dark-blue">
                          {major.nama_Prodi}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          {major.tingkat === "S1"
                            ? "Comprehensive undergraduate program in biblical studies, systematic theology, and practical ministry."
                            : "Advanced graduate program preparing students for theological leadership and specialized Christian service."}
                        </CardDescription>
                        <Link
                          href={`/academics/programs/${major.id}`}
                          className="text-sttb-primary-blue hover:text-sttb-dark-blue font-medium inline-flex items-center"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
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
                Stay updated with what&apos;s happening at STTB
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

          {newsLoading && (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-sttb-primary-blue" />
              <span className="ml-3 text-gray-600">Loading news...</span>
            </div>
          )}

          {newsError && (
            <div className="text-center py-16">
              <p className="text-red-500 mb-2">Failed to load news</p>
              <p className="text-gray-500 text-sm">{newsError}</p>
            </div>
          )}

          {!newsLoading && !newsError && news.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No news articles available at this time.</p>
            </div>
          )}

          {!newsLoading && !newsError && news.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/news-events/news/${article.slug}`} className="group">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                      <div className="aspect-video relative overflow-hidden">
                        <ImageWithFallback
                          src={article.thumbnail_Url}
                          alt={article.judul}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="text-sm text-sttb-primary-blue mb-2">
                          {formatDate(article.tanggal_Publikasi)}
                        </div>
                        <CardTitle className="text-xl text-sttb-dark-blue">
                          {article.judul}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {truncateText(article.konten)}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

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

          {eventsLoading && (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-sttb-primary-blue" />
              <span className="ml-3 text-gray-600">Loading events...</span>
            </div>
          )}

          {eventsError && (
            <div className="text-center py-16">
              <p className="text-red-500 mb-2">Failed to load events</p>
              <p className="text-gray-500 text-sm">{eventsError}</p>
            </div>
          )}

          {!eventsLoading && !eventsError && events.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No upcoming events at this time.</p>
            </div>
          )}

          {!eventsLoading && !eventsError && events.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {events.map((event, index) => {
                const { month, day } = formatEventDate(event.tanggal_Mulai);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/news-events/events/${event.id}`} className="group">
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <div className="shrink-0 w-16 h-16 bg-sttb-accent-red rounded-lg flex flex-col items-center justify-center text-white">
                              <div className="text-xs font-semibold">
                                {month}
                              </div>
                              <div className="text-2xl font-bold">
                                {day}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg text-sttb-dark-blue mb-2 group-hover:text-sttb-primary-blue transition-colors">
                                {event.nama_Kegiatan}
                              </h3>
                              <div className="flex flex-col gap-1 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-sttb-primary-blue" />
                                  <span>{formatEventTime(event.tanggal_Mulai, event.tanggal_Selesai)}</span>
                                </div>
                                {event.lokasi && (
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-sttb-primary-blue" />
                                    <span>{event.lokasi}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
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
