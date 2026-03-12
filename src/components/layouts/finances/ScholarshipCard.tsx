import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Award } from "lucide-react";

type scholarshipCardProps = {
  title: string;
  description: string;
  items: string[];
};

const ScholarshipCard = ({
  title,
  description,
  items,
}: scholarshipCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 bg-sttb-primary-blue rounded-lg flex items-center justify-center mb-3">
          <Award className="h-6 w-6 text-white" />
        </div>

        <CardTitle className="text-sttb-dark-blue">{title}</CardTitle>

        <CardDescription className="text-sttb-accent-red font-semibold">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ScholarshipCard;
