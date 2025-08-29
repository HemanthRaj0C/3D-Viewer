"use client";

import { useRouter } from "next/navigation";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  const router = useRouter();

  const models = [
    { name: "Taj Mahal", slug: "mosque_masjid_3d_model" },
    { name: "Elephanta Caves", slug: "elephanta_caves_mumbai_india" },
    { name: "Ellora Caves", slug: "ellora_caves__india" },
    { name: "Jaya Karan", slug: "JK" },

  ];

  return (
  <main className="relative overflow-hidden pb-24">
  {/* Subtle grid background overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage:'linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)',backgroundSize:'60px 60px'}} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-14 sm:pt-16">
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-block brutal-border bg-brutal-accent px-4 sm:px-5 py-2 mb-5 brutal-shadow">
            <span className="font-mono text-xs sm:text-sm font-bold text-brutal-bg tracking-widest">// NEO BRUTAL 3D</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 leading-[1.05]">
            Explore Models In <span className="text-brutal-accent">3D</span> + AR
          </h1>
          <p className="max-w-2xl mx-auto font-mono text-[12px] sm:text-sm md:text-base opacity-80 px-1">
            Pick a model card below to launch the interactive viewer. AR supported on compatible devices.
          </p>
        </div>

  <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {models.map(m => (
            <Card key={m.slug} className="cursor-pointer group" onClick={() => router.push(`/viewer/${m.slug}`)}>
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                <h2 className="text-xl sm:text-2xl font-black group-hover:text-brutal-accent transition-colors leading-tight">{m.name}</h2>
                <span className="font-mono text-[10px] sm:text-xs bg-brutal-secondary text-white px-2 py-1 brutal-border brutal-shadow">.GLB</span>
              </div>
              <p className="font-mono text-[11px] sm:text-xs mb-3 sm:mb-4 opacity-70">Tap to open viewer →</p>
              <Button variant="accent" className="text-[11px] sm:text-xs px-3 py-2 w-full sm:w-auto">Open Model</Button>
            </Card>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="secondary" className="w-full sm:w-auto sm:mr-2">Add New</Button>
          <Button variant="surface" className="w-full sm:w-auto">Docs</Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-brutal-accent via-brutal-secondary to-brutal-warning" />
    </main>
  );
}
