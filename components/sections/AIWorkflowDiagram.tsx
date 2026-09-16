"use client";

import { useState } from "react";

const WORKFLOW_STAGES = [
  {
    id: "request",
    number: "01",
    label: "REQUEST",
    description: "Someone asks SoloBuildAI to solve a business task."
  },
  {
    id: "understand",
    number: "02",
    label: "UNDERSTAND",
    description: "AI identifies intent, context, entities and requirements."
  },
  {
    id: "reason",
    number: "03",
    label: "REASON",
    description: "AI determines what needs to happen."
  },
  {
    id: "plan",
    number: "04",
    label: "PLAN",
    description: "AI selects the appropriate workflow and actions."
  },
  {
    id: "act",
    number: "05",
    label: "ACT",
    description: "AI executes tasks across connected systems."
  },
  {
    id: "verify",
    number: "06",
    label: "VERIFY",
    description: "AI checks the result against rules and context."
  },
  {
    id: "handoff",
    number: "07",
    label: "HANDOFF",
    description: "Human judgment is requested when needed."
  },
  {
    id: "outcome",
    number: "08",
    label: "OUTCOME",
    description: "The task is completed and the result is delivered."
  }
];

const BUSINESS_SYSTEMS = [
  { id: "hiring", label: "HIRING", sub: ["JD", "Resume", "Screen", "Shortlist"] },
  { id: "voice", label: "VOICE", sub: ["Calls", "RAG", "Actions", "Handoff"] },
  { id: "hrops", label: "HR OPS", sub: ["Payroll", "Leave", "Attendance", "Shifts"] },
  { id: "lnd", label: "L&D", sub: ["Training", "Skill Gap", "Evaluation", "Reviews"] }
];

export default function AIWorkflowDiagram() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <div className="border border-white/10 rounded-sm bg-neutral-950 p-8 lg:p-12">
      
      {/* Workflow Stages - Interactive */}
      <div className="mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {WORKFLOW_STAGES.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
              className={`p-4 border transition-all text-left ${
                activeStage === stage.id
                  ? 'border-[#087CF5] bg-[#087CF5]/10'
                  : 'border-white/10 hover:border-white/20 hover:bg-white/5'
              }`}
            >
              <div className="text-[9px] font-mono text-slate-600 mb-1">{stage.number}</div>
              <div className={`text-xs font-bold ${
                activeStage === stage.id ? 'text-[#087CF5]' : 'text-white'
              }`}>
                {stage.label}
              </div>
            </button>
          ))}
        </div>

        {/* Active stage description */}
        {activeStage && (
          <div className="mt-6 p-6 border border-[#087CF5]/30 bg-[#087CF5]/5">
            <div className="text-sm text-slate-300">
              {WORKFLOW_STAGES.find(s => s.id === activeStage)?.description}
            </div>
          </div>
        )}
      </div>

      {/* Visual Architecture Diagram */}
      <div className="relative py-12">
        
        {/* Desktop: Horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            
            {/* Top: PEOPLE */}
            <div className="flex justify-center mb-8">
              <div className="px-6 py-3 border border-slate-700 bg-neutral-900 text-xs font-bold text-white">
                PEOPLE
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-gradient-to-b from-slate-700 to-[#087CF5]"></div>
            </div>

            {/* AI INTERACTION */}
            <div className="flex justify-center mb-8">
              <div className="px-8 py-4 border border-[#087CF5]/50 bg-[#087CF5]/10 text-sm font-bold text-[#087CF5]">
                AI INTERACTION
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-gradient-to-b from-[#087CF5] to-[#087CF5]/50"></div>
            </div>

            {/* UNDERSTAND */}
            <div className="flex justify-center mb-8">
              <div className="px-8 py-4 border border-[#087CF5] bg-[#087CF5]/20 text-sm font-bold text-white">
                UNDERSTAND
              </div>
            </div>

            {/* Arrow down with split */}
            <div className="flex justify-center mb-8 relative">
              <div className="w-px h-8 bg-[#087CF5]/50"></div>
              {/* Horizontal line for split */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-px bg-[#087CF5]/30"></div>
            </div>

            {/* REASON & CONTEXT row */}
            <div className="grid grid-cols-2 gap-32 max-w-4xl mx-auto mb-8">
              <div className="flex flex-col items-center">
                <div className="px-6 py-3 border border-[#087CF5]/50 bg-[#087CF5]/10 text-xs font-bold text-white mb-4">
                  REASON
                </div>
                <div className="w-px h-8 bg-[#087CF5]/30"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="px-6 py-3 border border-slate-700 bg-neutral-900 text-xs font-bold text-slate-400 mb-4">
                  CONTEXT
                </div>
                <div className="w-px h-8 bg-slate-700"></div>
              </div>
            </div>

            {/* PLAN & KNOWLEDGE row */}
            <div className="grid grid-cols-2 gap-32 max-w-4xl mx-auto mb-8">
              <div className="flex flex-col items-center">
                <div className="px-6 py-3 border border-[#087CF5] bg-[#087CF5]/20 text-xs font-bold text-white mb-4">
                  PLAN
                </div>
                <div className="w-px h-8 bg-[#087CF5]"></div>
              </div>
              <div className="px-6 py-3 border border-slate-700 bg-neutral-900 text-xs font-bold text-slate-400">
                KNOWLEDGE
              </div>
            </div>

            {/* ACT */}
            <div className="flex justify-center mb-8">
              <div className="px-8 py-4 border border-[#087CF5] bg-[#087CF5]/30 text-sm font-bold text-white">
                ACT
              </div>
            </div>

            {/* Arrow down with 4-way split */}
            <div className="flex justify-center mb-8 relative">
              <div className="w-px h-12 bg-[#087CF5]"></div>
            </div>

            {/* Business Systems Grid */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {BUSINESS_SYSTEMS.map((system) => (
                <div key={system.id} className="border border-white/10 bg-black p-4">
                  <div className="text-xs font-bold text-[#087CF5] mb-3">{system.label}</div>
                  <div className="space-y-1">
                    {system.sub.map((item, i) => (
                      <div key={i} className="text-[10px] text-slate-500">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* BUSINESS SYSTEMS */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-slate-700"></div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="px-8 py-3 border border-slate-700 bg-neutral-900 text-xs font-bold text-slate-400">
                BUSINESS SYSTEMS
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-gradient-to-b from-slate-700 to-green-500/50"></div>
            </div>

            {/* OUTCOME */}
            <div className="flex justify-center">
              <div className="px-8 py-4 border border-green-500/50 bg-green-500/10 text-sm font-bold text-green-400">
                OUTCOME
              </div>
            </div>

          </div>
        </div>

        {/* Mobile: Vertical stack */}
        <div className="lg:hidden space-y-4">
          <div className="p-4 border border-slate-700 bg-neutral-900 text-xs font-bold text-white text-center">PEOPLE</div>
          <div className="flex justify-center"><div className="w-px h-8 bg-slate-700"></div></div>
          <div className="p-4 border border-[#087CF5]/50 bg-[#087CF5]/10 text-xs font-bold text-[#087CF5] text-center">AI INTERACTION</div>
          <div className="flex justify-center"><div className="w-px h-8 bg-[#087CF5]/50"></div></div>
          <div className="p-4 border border-[#087CF5] bg-[#087CF5]/20 text-xs font-bold text-white text-center">UNDERSTAND</div>
          <div className="flex justify-center"><div className="w-px h-8 bg-[#087CF5]/50"></div></div>
          <div className="p-4 border border-[#087CF5]/50 bg-[#087CF5]/10 text-xs font-bold text-white text-center">REASON</div>
          <div className="flex justify-center"><div className="w-px h-8 bg-[#087CF5]/50"></div></div>
          <div className="p-4 border border-[#087CF5] bg-[#087CF5]/20 text-xs font-bold text-white text-center">PLAN</div>
          <div className="flex justify-center"><div className="w-px h-8 bg-[#087CF5]"></div></div>
          <div className="p-4 border border-[#087CF5] bg-[#087CF5]/30 text-xs font-bold text-white text-center">ACT</div>
          <div className="flex justify-center"><div className="w-px h-8 bg-[#087CF5]"></div></div>
          
          {BUSINESS_SYSTEMS.map((system) => (
            <div key={system.id} className="border border-white/10 bg-black p-4">
              <div className="text-xs font-bold text-[#087CF5] mb-2">{system.label}</div>
              <div className="grid grid-cols-2 gap-1">
                {system.sub.map((item, i) => (
                  <div key={i} className="text-[10px] text-slate-500">{item}</div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-center"><div className="w-px h-8 bg-slate-700"></div></div>
          <div className="p-4 border border-slate-700 bg-neutral-900 text-xs font-bold text-slate-400 text-center">BUSINESS SYSTEMS</div>
          <div className="flex justify-center"><div className="w-px h-8 bg-green-500/50"></div></div>
          <div className="p-4 border border-green-500/50 bg-green-500/10 text-xs font-bold text-green-400 text-center">OUTCOME</div>
        </div>

      </div>

    </div>
  );
}
