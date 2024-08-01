"use client"
import { Grid } from "@/components/Grid";
import Navbar from "@/components/Navbar";
import { useRef } from "react";


export default function Home() {
  const isVisualizationRunningRef = useRef(false)
  return (
    <main className="flex h-screen flex-col w-screen">
      <Navbar/>
      <Grid isVisualizationRunningRef = {isVisualizationRunningRef}/>
    </main>
  );
}
