import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ProgramCardProps {
  id: number;
  icon: LucideIcon;
  title: string;
  duration: string;
  description: string;
  courses: string[];
}

const ProgramCard = ({
  id,
  icon: Icon,
  title,
  duration,
  description,
  courses,
}: ProgramCardProps) => {
  return (
    <Link href={`/academics/programs/${id}`} className="block">
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-sttb-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-2xl text-sttb-dark-blue mb-2">
                {title}
              </CardTitle>
              <CardDescription className="text-base text-sttb-primary-blue">
                {duration}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">{description}</p>
          <div>
            <h4 className="font-semibold text-sttb-dark-blue mb-3">
              Key Courses:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-sttb-primary-blue" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProgramCard;
