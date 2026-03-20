"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { getAllNews, type News } from "@/api/NewsApiServices";

export default function NewsSlug() {
  const params = useParams();
  const slug = params.slug as string;

  const [article, setArticle] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllNews()
      .then((data) => {
        const found = data.find((n) => n.slug === slug);
        if (found) {
          setArticle(found);
        } else {
          setError("Article not found");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
            <span className="ml-3 text-gray-600">Loading article...</span>
          </div>
        </section>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="flex flex-col">
        <section className="bg-sttb-dark-blue text-white py-16">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Article Not Found</h1>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4 text-center py-16">
            <p className="text-red-500 mb-4">{error || "The requested article could not be found."}</p>
            <Link
              href="/news-events"
              className="inline-flex items-center gap-2 text-sttb-primary-blue hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News & Events
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <Link
            href="/news-events"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News & Events
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {article.judul}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(article.tanggal_Publikasi)}</span>
            </div>
            {article.kategori_Berita && (
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span className="bg-white/15 px-3 py-1 rounded-full text-sm">
                  {article.kategori_Berita.nama_Kategori}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            {article.thumbnail_Url && (
              <div className="aspect-video relative overflow-hidden rounded-xl mb-10 shadow-lg">
                <ImageWithFallback
                  src={article.thumbnail_Url}
                  alt={article.judul}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article Body */}
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <div
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                    prose-headings:text-sttb-dark-blue
                    prose-a:text-sttb-primary-blue prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-lg prose-img:shadow-md"
                  dangerouslySetInnerHTML={{ __html: article.konten }}
                />
              </CardContent>
            </Card>

            {/* Bottom Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/news-events"
                className="inline-flex items-center gap-2 text-sttb-primary-blue hover:text-sttb-dark-blue transition-colors font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to News & Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
