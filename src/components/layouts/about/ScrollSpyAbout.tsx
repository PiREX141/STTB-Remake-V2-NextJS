"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "history", label: "History" },
  { id: "vision-mission", label: "Vision & Mission" },
  { id: "mars-sttb", label: "Mars STTB" },
  { id: "confession-of-faith", label: "Confession of Faith" },
  { id: "lecturer-council", label: "Lecturer Council" },
  { id: "foundation", label: "Foundation" },
];

const ScrollSpyAbout = () => {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress(scrollTop / height);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 border-r bg-white flex items-center self-start">
      <nav className="relative px-6">
        {/* background line */}
        <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-200" />

        {/* progress line */}
        <div
          className="absolute left-2 top-0 w-0.5 bg-blue-600 transition-all"
          style={{ height: `${progress * 100}%` }}
        />

        <ul className="space-y-3 ml-6">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block transition ${
                  active === section.id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default ScrollSpyAbout;
