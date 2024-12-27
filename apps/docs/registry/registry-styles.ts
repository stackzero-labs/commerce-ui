export const styles = [
  {
    name: "default",
    label: "Default",
  },
  // {
  //   name: "css",
  //   label: "css",
  // },
] as const;

export type Style = (typeof styles)[number];
