import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Providers from "~/components/Providers";
import data from "~/data";
import AnimationLayout from "~/components/AnimationLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: data.name,
  description: `${data.name}'s portfolio. Has all the info on ${data.name}'s career.`,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Providers>
          <AnimationLayout>{children}</AnimationLayout>
        </Providers>
      </body>
    </html>
  );
}
