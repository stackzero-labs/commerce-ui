import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import typesJson from "@/__registry__/types.json";
import { InfoIcon } from "lucide-react";

interface PropsTableProps {
  componentName: string;
}

export const ComponentPropsTable: React.FC<PropsTableProps> = ({
  componentName,
}) => {
  const componentData = Object.values(typesJson)
    .flat()
    .find((comp) => comp.displayName === componentName);

  if (!componentData) {
    return <p>Component not found.</p>;
  }

  //@ts-ignore
  const { props } = componentData;
  console.log("propsComponentData", props);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-sm font-medium  tracking-wider">
            Prop
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
            Type
          </th>
          {/* <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
            Required
          </th> */}
          <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
            Default
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {Object.keys(props).map((propName) => (
          <tr key={propName}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <div className="flex flex-row gap-1 items-start align-middle">
                <code className="rounded-md p-1 bg-fd-primary/10 text-fd-primary">
                  {propName}
                </code>
                {props[propName].required && (
                  <span className="text-red-500 text-md">*</span>
                )}
                {props[propName].description && (
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon size={16} />
                    </TooltipTrigger>

                    <TooltipContent>
                      <p> {props[propName].description}</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </td>

            <td className="px-6 py-4 whitespace-wrap text-sm text-gray-500 font-mono">
              {props[propName].tsType.name === "signature"
                ? props[propName].tsType.raw
                : props[propName].tsType.name}
            </td>
            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {props[propName].required ? "Yes" : "No"}
            </td> */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
              {props[propName].defaultValue?.value || "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
