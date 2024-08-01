import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PathFindingProvider } from "@/context/PathFindingContext";
import { TileProvider } from "@/context/TileContext";
import { SpeedProvider } from "@/context/SpeedContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PathFinding Visualizer",
  description: "visualize various pathfinding algos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PathFindingProvider>
        <TileProvider>
          <SpeedProvider>
            <body className={inter.className}>
              {children}
            </body>
          </SpeedProvider>
        </TileProvider>
      </PathFindingProvider>
    </html>
  );
}
