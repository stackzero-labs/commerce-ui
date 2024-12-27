import { Registry } from "@/registry/schema";

export const exampleBlocks: Registry = [
  {
    name: "rating-block",
    type: "registry:exampleBlock",
    registryDependencies: ["face-rating"],
    files: [
      {
        path: "exampleBlock/rating-block.tsx",
        type: "registry:exampleBlock",
      },
    ],
  },
];
