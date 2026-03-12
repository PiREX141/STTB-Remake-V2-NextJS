import { CheckCircle } from "lucide-react";

type RequirementListProps = {
  title: string;
  requirements: string[];
  className?: string;
};

const RequirementList = ({
  title,
  requirements,
  className = "",
}: RequirementListProps) => {
  return (
    <div className={className}>
      {title && <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6">{title}</h2>}

      <ul className="space-y-3">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-sttb-primary-blue shrink-0 mt-0.5" />
            <span className="text-gray-700">{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequirementList;
