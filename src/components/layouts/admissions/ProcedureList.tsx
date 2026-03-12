import { CheckCircle } from "lucide-react";

type DescriptionItem = string | { text: string; list?: string[] };

type RequirementListProps = {
  title: string;
  contents: string[];
  description?: DescriptionItem[];
  className?: string;
};

const ProcedureList = ({
  title,
  contents,
  description,
  className = "",
}: RequirementListProps) => {
  return (
    <div className={className}>
      {title && (
        <h2 className="text-lg font-semibold text-sttb-dark-blue mb-3">
          {title}
        </h2>
      )}

      <ul className="space-y-3">
        {contents.map((content, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-sttb-primary-blue shrink-0 mt-0.5" />
            <span className="text-gray-700">{content}</span>
          </li>
        ))}
      </ul>

      {description && description.length > 0 && (
        <div className="mt-6 space-y-4 text-gray-700">
          {description.map((item, index) =>
            typeof item === "string" ? (
              <p key={index}>{item}</p>
            ) : (
              <div key={index} className="space-y-2">
                <p>{item.text}</p>
                {item.list && item.list.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    {item.list.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default ProcedureList;
