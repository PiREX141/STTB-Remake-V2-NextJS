"use client";

import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export default function AboutHistory() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our History</h1>
          <p className="text-xl text-gray-200">Over five decades of theological excellence</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1673609218895-bb331f054e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczMTE4MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="STTB Historic Building"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6">Our Founding</h2>
              <p className="text-gray-700 mb-6">
                Sekolah Tinggi Teologi Bandung (STTB) was founded in 1972 by a group of dedicated Christian leaders who recognized the need for sound theological education in Indonesia. Their vision was to establish an institution that would train pastors, missionaries, and Christian workers equipped with both biblical knowledge and practical ministry skills.
              </p>

              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6 mt-12">Growth and Development</h2>
              <p className="text-gray-700 mb-6">
                From humble beginnings with just 25 students, STTB has grown to become one of Indonesia&apos;s leading theological seminaries. Throughout the 1980s and 1990s, we expanded our academic programs, developed our campus facilities, and established partnerships with theological institutions worldwide.
              </p>

              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6 mt-12">Modern Era</h2>
              <p className="text-gray-700 mb-6">
                Today, STTB serves over 400 students across undergraduate and graduate programs. Our faculty includes renowned theologians and experienced ministry practitioners. We continue to adapt our curriculum to meet the changing needs of the church while maintaining our commitment to biblical orthodoxy and academic excellence.
              </p>

              <div className="bg-sttb-secondary-blue/10 p-8 rounded-xl mt-12">
                <h3 className="text-2xl font-bold text-sttb-dark-blue mb-4">Key Milestones</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>1972:</strong> STTB founded with 25 students</li>
                  <li><strong>1985:</strong> Accredited by the Ministry of Education</li>
                  <li><strong>1995:</strong> Master&apos;s program established</li>
                  <li><strong>2005:</strong> New library building completed</li>
                  <li><strong>2015:</strong> Partnership with international theological institutions</li>
                  <li><strong>2020:</strong> Online learning platform launched</li>
                  <li><strong>2025:</strong> Celebrated 50+ years of theological education</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
