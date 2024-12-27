import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Header } from "./homepage/layout.client";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container">
        <div className="pt-36 relative text-center flex flex-col items-center">
          <ThemeImage
            alt="logo"
            srcLight="/logo/ui.svg"
            srcDark="/logo/ui.svg"
            width={128}
            height={64}
          />
          <h1>stackzero/ui</h1>
          <p>A UI library for building commerce applications.</p>
        </div>
        <div className="h-[1000px]">ssss</div>
      </main>
    </div>
  );
}
