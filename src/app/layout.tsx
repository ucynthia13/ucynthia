import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: "swap",
  variable: "--font-dm-sans"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="grid bg-[#070815] text-white">
        <Header />
        <main>{children}</main>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
