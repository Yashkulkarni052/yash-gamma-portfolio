
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Yash Kulkarni | Full Stack Developer",
  description: "Gamma-style portfolio built with Next.js, Tailwind and Framer Motion",
  openGraph: {
    title: "Yash Kulkarni | Portfolio",
    description: "Full Stack Developer | Python | Web Technologies",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
