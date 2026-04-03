import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AmbientLights } from "@/components/ambient-lights";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jacopo Martinuzzi | IT & Security Engineer",
  description:
    "Freelance IT & Security Engineer specializing in Zero Trust, cloud IAM, DevOps, and Atlassian platforms. Available for remote contract work.",
  openGraph: {
    title: "Jacopo Martinuzzi | IT & Security Engineer",
    description:
      "Freelance IT & Security Engineer specializing in Zero Trust, cloud IAM, DevOps, and Atlassian platforms. Available for remote contract work.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
            <AmbientLights />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
