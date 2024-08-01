"use client"
import { Grid } from "@/components/Grid";
import { useRef } from "react";


export default function Home() {
  const isVisualizationRunningRef = useRef(false)
  return (
    <main className="flex h-screen flex-col w-screen">
      <Grid isVisualizationRunningRef = {isVisualizationRunningRef}/>
    </main>
  );
}
