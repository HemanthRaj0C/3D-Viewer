//@ts-nocheck

"use client";

import { useParams } from "next/navigation";
import "@google/model-viewer";

export default function ViewerPage() {
  const params = useParams();
  const { slug } = params;

  return (
  <main className="min-h-screen bg-brutal-bg relative overflow-hidden pb-24">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage:'linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)',backgroundSize:'60px 60px'}} />
      
  <div className="relative z-10 container mx-auto px-4 py-8 sm:py-10 md:py-12">
        {/* Brutal Header Section */}
        <div className="text-center mb-10 md:mb-12 px-1">
          <div className="inline-block bg-brutal-accent px-4 sm:px-6 py-2 mb-4 brutal-border brutal-shadow">
            <span className="text-brutal-bg font-black text-[10px] sm:text-xs tracking-wider">
              /// VIEWING MODEL
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-3 break-words">
            {slug}
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-brutal-secondary mx-auto"></div>
        </div>

        {/* Model Viewer Container */}
        <div className="max-w-4xl mx-auto mb-10 md:mb-12">
          <div className="bg-brutal-surface p-4 sm:p-6 md:p-8 brutal-border brutal-shadow">
            <div className="relative">
              <model-viewer
                src={`/models/${slug}.glb`}
                ios-src={`/models/${slug}.usdz`}
                alt={`${slug} model`}
                camera-controls
                auto-rotate
                ar
                shadow-intensity="1"
                environment-image="neutral"
                className="w-full h-[340px] xs:h-[380px] sm:h-[420px] md:h-[500px] lg:h-[560px]"
              ></model-viewer>
              
              {/* Brutal Corner Decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 bg-brutal-accent"></div>
              <div className="absolute top-0 right-0 w-6 h-6 bg-brutal-secondary"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-brutal-warning"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-brutal-accent"></div>
            </div>
          </div>
          {/* AR Notice */}
          <div className="mt-4 brutal-border bg-brutal-warning text-black font-mono text-[11px] sm:text-xs tracking-wide px-4 py-3 flex items-center justify-center gap-2 brutal-shadow">
            <span className="font-black">AR TIP:</span>
            <span>Tap the <code className="bg-brutal-bg text-brutal-warning px-1 py-0.5 brutal-border">AR</code> icon/button in the viewer to place this model in your real space.</span>
          </div>
        </div>

        {/* Brutal Info Panel */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-brutal-surface p-4 sm:p-6 brutal-border brutal-shadow">
            <h3 className="text-brutal-accent font-black text-xl mb-4 uppercase">
              [CONTROLS]
            </h3>
            <div className="space-y-1.5 font-mono text-[11px] sm:text-xs md:text-sm">
              <p><span className="text-brutal-secondary">DRAG:</span> Rotate model</p>
              <p><span className="text-brutal-secondary">SCROLL:</span> Zoom in/out</p>
              <p><span className="text-brutal-secondary">AR:</span> View in space</p>
              <p><span className="text-brutal-secondary">AUTO:</span> Rotation enabled</p>
            </div>
          </div>
          
          <div className="bg-brutal-surface p-4 sm:p-6 brutal-border brutal-shadow">
            <h3 className="text-brutal-warning font-black text-xl mb-4 uppercase">
              [MODEL_DATA]
            </h3>
            <div className="space-y-1.5 font-mono text-[11px] sm:text-xs md:text-sm">
              <p><span className="text-brutal-secondary">FILE:</span> {slug}.glb</p>
              <p><span className="text-brutal-secondary">TYPE:</span> 3D_MESH</p>
              <p><span className="text-brutal-secondary">AR:</span> SUPPORTED</p>
              <p><span className="text-brutal-secondary">STATUS:</span> LOADED</p>
            </div>
          </div>
        </div>

        {/* Brutal Navigation */}
        <div className="text-center mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => window.history.back()} className="btn-brutal w-full sm:w-auto sm:mr-2">← Back</button>
          <button className="btn-brutal btn-secondary w-full sm:w-auto">Share Model</button>
        </div>
      </div>
      
  {/* Brutal Bottom Accent */}
  <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-brutal-accent via-brutal-secondary to-brutal-warning"></div>
    </main>
  );
}
