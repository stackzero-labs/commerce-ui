import { CodeIcon, TerminalIcon } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  // TabsTriggerIcon,
  // TabsTriggerText,
} from "./tabs";

const ComponentInstall = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tabs defaultValue="cli">
      <TabsList>
        <TabsTrigger value="cli">CLI</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

const CLIInstall = ({ children }: { children: React.ReactNode }) => {
  return <TabsContent value="cli">{children}</TabsContent>;
};

const ManualInstall = ({ children }: { children: React.ReactNode }) => {
  return <TabsContent value="manual">{children}</TabsContent>;
};

export { ComponentInstall, CLIInstall, ManualInstall };
