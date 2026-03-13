"use client";

import {
  Users,
  Church,
  Heart,
  BookOpen,
  Flame,
  Globe,
  Briefcase,
} from "lucide-react";

const coachingSections = [
  {
    id: "kehidupan-komunitas",
    icon: Users,
    title: "Community Life",
    subtitle:
      "All full-time unmarried students in the S.Th., S.Pd.K., and M.Th. matriculation programs are required to live in the dormitory.",
    description: [
      'As part of the community, every student needs to learn to love, help, and care for one another in managing and shaping a conducive campus and dormitory life. The "STTB Student Life Guide" is designed to help students learn and grow on campus and in the dormitory.',
      "STTB's student affairs department oversees everything related to the coaching and daily life of all students. The student affairs department is led by Vice Chairman III, assisted by staff, dormitory heads, pastoral mentors, discipleship coaches, counselors, student senate, hall leaders, room leaders, class coordinators, and kitchen staff.",
    ],
  },
  {
    id: "kapel-dan-forum-pembinaan",
    icon: Church,
    title: "Chapel & Coaching Forum",
    subtitle:
      "Coaching forums are held to shape and equip students' lives and ministries in four areas of transformation.",
    description: [
      "Chapel services are held multiple times each week (for days and times, see the schedule), in varying formats, including:",
    ],
    bulletPoints: [
      "Liturgical worship",
      "Contemporary worship",
      "Contemplative worship",
      "Mission Prayer Fellowship",
      "And more",
    ],
    additionalText:
      "Content is delivered by lecturers, alumni, leaders of ministry/mission organizations, other invited speakers, and student sermons. All dormitory students, including those writing their theses, are required to attend chapel as scheduled.",
    transformations: [
      {
        title: "Teaching Formation",
        desc: "Growing in knowledge of God and His Word",
      },
      {
        title: "Spiritual Formation",
        desc: "Growing in personal relationship with God",
      },
      {
        title: "Character Formation",
        desc: "Growing in Christ-like character",
      },
      {
        title: "Ministry Formation",
        desc: "Growing in ministry within the body of Christ and mission in the world",
      },
    ],
  },
  {
    id: "kelompok-pastoral",
    icon: Heart,
    title: "Pastoral Groups",
    subtitle:
      "Pastoral groups serve as a means to accompany students in academic learning, spiritual character, and vocational ministry.",
    description: [
      "Each group is led by a pastoral mentor who serves as a spiritual parent accompanying a number of students from the same cohort throughout four years of study at STTB and one year of ministry practice.",
      "Group meetings are held every two weeks. One-on-one meetings are conducted as needed.",
      "Special conditions that students may experience during their studies at STTB will receive attention from pastoral mentors. These conditions include health issues (emergencies, hospitalization), character feedback (awards, reprimands, warnings from student affairs), and psychological issues (counseling or referral to a counselor).",
    ],
  },
  {
    id: "kelompok-pemuridan",
    icon: BookOpen,
    title: "Discipleship Groups",
    subtitle:
      "Discipleship groups serve as a means to help students learn and grow together regarding the foundations of Christian faith growth — to become disciples of Christ and make others disciples of Christ, wherever they are and are sent.",
    description: [
      'Each group is led by a discipleship mentor who serves as a "spiritual sibling" helping students experience transformation in mindset and lifestyle throughout the first three semesters at STTB.',
      "Group meetings are held weekly on designated days. One-on-one meetings are conducted as needed.",
      "Discipleship mentors are specifically mentored by male and female discipleship coaches.",
    ],
  },
  {
    id: "formasi-spiritual",
    icon: Flame,
    title: "Spiritual Formation",
    subtitle:
      "Spiritual formation activities are designed to help students deepen their relationship with God throughout their studies.",
    description: [],
    bulletPoints: [
      "Beginning-of-study retreat and preparation for life as a theology student",
      '"Mini retreats" (almost) every semester',
      "End-of-study retreat and preparation for 1-year ministry practice",
      "And more",
    ],
  },
  {
    id: "mission-trip",
    icon: Globe,
    title: "Mission Education & Exposure",
    subtitle:
      "Missional formation is carried out to help students gain insight and skills for missions, direct experience in mission fields, and develop a missionary lifestyle.",
    description: [
      "Missional formation is conducted through Mission Education & Exposure Training (MEET) for one full month at the end of the second year of studies.",
    ],
  },
  {
    id: "praktik-pelayanan",
    icon: Briefcase,
    title: "Service Practice",
    subtitle:
      "Service practice is a vital part of student preparation for future ministry.",
    description: ["Ministry practice is conducted in the following forms:"],
    bulletPoints: [
      "Mission Education & Exposure Training (MEET)",
      "Weekend Ministry Practice",
      "Short-Term Ministry Practice",
      "Long-Term Ministry Practice (1 Year)",
    ],
    additionalText:
      "Students who can participate in the 1-year ministry practice are those who have completed their thesis examination and revision and have a minimum GPA of 2.5 (on a 4.0 scale). Churches and ministry organizations play a crucial role as STTB's partners in providing learning and equipping students for their future ministry. STTB collaborates with ministry partners to facilitate good learning and mentoring processes during ministry practice through the Develop Mentor (mentoring for development) program.",
  },
];

const navLinks = [
  { id: "kehidupan-komunitas", label: "Community Life" },
  { id: "kapel-dan-forum-pembinaan", label: "Chapel & Forum" },
  { id: "kelompok-pastoral", label: "Pastoral" },
  { id: "kelompok-pemuridan", label: "Discipleship" },
  { id: "formasi-spiritual", label: "Spiritual Formation" },
  { id: "mission-trip", label: "Mission Education" },
  { id: "praktik-pelayanan", label: "Service Practice" },
];

export default function Coachings() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Student Coaching
          </h1>
          <p className="text-xl text-gray-200">
            Holistic formation for life and ministry
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto max-w-screen px-4">
          <nav className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-sttb-primary-blue hover:bg-blue-50 rounded-lg whitespace-nowrap transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-6">
              Student Coaching
            </h2>
            <p className="text-lg text-gray-700">
              At STTB, student coaching is designed to form and equip God&apos;s
              servants holistically — not only through academic excellence, but
              also through spiritual growth, character formation, and ministry
              preparation. Our residential community life creates a
              transformative environment for every student.
            </p>
          </div>
        </div>
      </section>

      {/* Coaching Sections */}
      {coachingSections.map((section, index) => {
        const Icon = section.icon;
        const isAlternate = index % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-16 md:py-20 ${isAlternate ? "bg-gray-50" : "bg-white"}`}
          >
            <div className="container mx-auto max-w-screen px-4">
              <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 bg-sttb-dark-blue rounded-xl text-white shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-sttb-dark-blue mb-2">
                      {section.title}
                    </h2>
                    <p className="text-lg text-gray-600 font-medium">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description paragraphs */}
                {section.description.length > 0 && (
                  <div className="space-y-4 mb-6">
                    {section.description.map((para, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {/* Bullet points */}
                {section.bulletPoints && (
                  <ul className="space-y-2 mb-6 ml-4">
                    {section.bulletPoints.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className="w-2 h-2 rounded-full bg-sttb-primary-blue mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Additional text */}
                {section.additionalText && (
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {section.additionalText}
                  </p>
                )}

                {/* Transformation areas (Chapel section) */}
                {section.transformations && (
                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    {section.transformations.map((t, i) => (
                      <div
                        key={i}
                        className="border-l-4 border-sttb-primary-blue pl-5 py-3 bg-white rounded-r-lg shadow-sm"
                      >
                        <h3 className="text-lg font-semibold text-sttb-dark-blue mb-1">
                          {t.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
