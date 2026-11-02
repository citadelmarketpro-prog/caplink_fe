"use client";

import { useTranslations } from "next-intl";
import { FadeUp, CARD_HOVER } from "@/components/ScrollReveal";

const ICONS = ["/icons/trade.png", "/icons/clipboard.svg", "/icons/chart.svg"];

export default function WhatYouCanCopy() {
  const t = useTranslations("whatYouCanCopy");
  const items = [
    { title: t("item1Title"), description: t("item1Desc"), icon: ICONS[0] },
    { title: t("item2Title"), description: t("item2Desc"), icon: ICONS[1] },
    { title: t("item3Title"), description: t("item3Desc"), icon: ICONS[2] },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#07901f] to-[#045c14]">
      {/* ── Soft decorative glows — modern depth, kept subtle ── */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-white/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-[420px] h-[420px] rounded-full bg-black/10 blur-[110px]" />

      <div className="relative max-w-[1440px] mx-auto">

        {/* ── Header — centered ── */}
        <FadeUp className="text-center px-6 pt-14 pb-12 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
          <h2 className="text-[26px] sm:text-[38px] lg:text-[52px] font-extrabold text-white leading-tight">
            {t("heading")}
          </h2>
        </FadeUp>

        {/* ── Three cards — each reveals independently on scroll ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 lg:px-[72px] pb-14 lg:pb-20">
          {items.map((item, i) => (
            <FadeUp
              key={i}
              delay={(i % 3) * 0.06}
              distance={24}
              duration={0.4}
              whileHover={CARD_HOVER}
              className="flex flex-col items-center text-center px-8 py-12 lg:py-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 hover:border-white/25 hover:shadow-2xl transition-colors"
            >
              <div className="mb-8 w-16 h-16 rounded-full bg-white/15 ring-1 ring-white/20 flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="w-7 h-7 object-contain [filter:brightness(0)_invert(1)]" />
              </div>

              <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-extrabold text-white leading-snug mb-4">
                {item.title}
              </h3>
              <p className="text-[14px] lg:text-[15px] leading-[1.75] text-white/75">
                {item.description}
              </p>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
