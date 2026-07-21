import React from "react";
import { Gauge, Target, Users, Sliders, Eye, Handshake } from "lucide-react";
import { SectionHeading, Card, IconBox, Reveal } from "./UI.jsx";

const REASONS = [
  { icon: Gauge, title: "Moving Inventory", copy: "Every decision is measured against one goal: helping vehicles sell faster." },
  { icon: Target, title: "Real Dealership Growth", copy: "Not vanity metrics — outcomes that show up in your sales numbers." },
  { icon: Users, title: "Qualified Buyers", copy: "Attention from people who are actually ready to buy." },
  { icon: Eye, title: "Performance Focused", copy: "Campaigns reviewed and refined against what's actually working." },
  { icon: Sliders, title: "Transparency", copy: "Clear updates and honest reporting, without the jargon." },
  { icon: Handshake, title: "Long-Term Partnership", copy: "A growth partner invested in your dealership, not just a campaign." },
];

export default function WhyVilGrowth() {
  return (
    <section id="why" className="py-24 md:py-28 bg-bgAlt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Why VilGrowth"
          title="We're Not Another Agency."
          sub="VilGrowth is built around a single purpose — helping dealerships move inventory faster, not selling advertising for its own sake."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i % 3}>
              <Card className="p-7 h-full">
                <IconBox icon={r.icon} size={17} />
                <h3 className="font-display text-base font-semibold mb-2 text-text">{r.title}</h3>
                <p className="text-sm leading-relaxed text-textSecondary">{r.copy}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
