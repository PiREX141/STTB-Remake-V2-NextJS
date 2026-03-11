"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Calendar } from "lucide-react";

export default function NewsEvents() {
  const news = [
    {
      image: "https://images.unsplash.com/photo-1745162829464-c3487261f90d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMHRoZW9sb2d5fGVufDF8fHx8MTc3MzExODA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "New Academic Year 2026 Begins",
      date: "March 5, 2026",
      excerpt: "STTB welcomes 120 new students across all programs as we begin the 2026 academic year with renewed vision and commitment to excellence in theological education.",
    },
    {
      image: "https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50cyUyMGNlbGVicmF0aW5nfGVufDF8fHx8MTc3MzExNTIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Graduation Ceremony 2025 Highlights",
      date: "February 28, 2026",
      excerpt: "Celebrating the achievements of 85 graduates who are now equipped to serve in various ministry contexts across Indonesia and beyond.",
    },
    {
      image: "https://images.unsplash.com/photo-1760840414854-36cd365d14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGxpYnJhcnklMjBib29rcyUyMHJlYWRpbmd8ZW58MXx8fHwxNzczMTE4MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Library Expansion Completed",
      date: "February 15, 2026",
      excerpt: "Our newly renovated library now features 10,000 additional theological resources and modern study spaces for student research.",
    },
    {
      image: "https://images.unsplash.com/photo-1639254241570-da099e4fc62c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBtaW5pc3RyeSUyMHdvcnNoaXAlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MzExODA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Annual Spiritual Emphasis Week",
      date: "January 20, 2026",
      excerpt: "A powerful week of worship, teaching, and spiritual renewal brought the STTB community together in seeking God's presence.",
    },
    {
      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzczMDU5MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "International Partnership Announcement",
      date: "December 10, 2025",
      excerpt: "STTB announces new academic partnership with theological institutions in Singapore and South Korea for student exchange programs.",
    },
    {
      image: "https://images.unsplash.com/photo-1673609218895-bb331f054e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczMTE4MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "New Faculty Members Join STTB",
      date: "November 5, 2025",
      excerpt: "We welcome three new faculty members with doctoral degrees from leading theological institutions to strengthen our academic programs.",
    },
  ];

  const events = [
    {
      date: "MAR 15",
      title: "Open House for Prospective Students",
      time: "9:00 AM - 3:00 PM",
    },
    {
      date: "MAR 22",
      title: "Guest Lecture: Contemporary Theological Issues",
      time: "2:00 PM - 4:00 PM",
    },
    {
      date: "MAR 29",
      title: "Spring Spiritual Emphasis Week",
      time: "All Week",
    },
    {
      date: "APR 5",
      title: "Ministry Internship Fair",
      time: "10:00 AM - 2:00 PM",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-xl text-gray-200">Stay connected with STTB</p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="text-3xl font-bold text-sttb-dark-blue mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-sttb-primary-blue mb-2">{article.date}</div>
                  <CardTitle className="text-lg text-sttb-dark-blue">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="text-3xl font-bold text-sttb-dark-blue mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-sttb-accent-red rounded-lg flex flex-col items-center justify-center text-white">
                      <div className="text-xs font-semibold">{event.date.split(" ")[0]}</div>
                      <div className="text-2xl font-bold">{event.date.split(" ")[1]}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-sttb-dark-blue mb-2">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-sttb-primary-blue" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
