"use client";

import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background h-screen">
      <div className="bg-background text-primary text-6xl">Hello World</div>
      <h1>
        Testing theme here with tailwind
      </h1>
        <ChevronsLeft className="w-6 h-6 text-primary" />
        <ChevronsRight className="w-6 h-6 text-primary" />
    </div>
  );
}
