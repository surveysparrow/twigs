"use client";
import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import logoLightMode from "@/assets/images/logo-w-text-lightmode.svg";
import footerPot from "@/assets/images/footer-pot.svg";
import footerGit from "@/assets/images/footer-git.svg";
import surveysparrow from "@/assets/images/footer-spr.svg";
import {
  FOOTER_DOCUMENTATION_LINKS,
  FOOTER_COMPONENT_LINKS,
  FOOTER_OTHER_LINKS,
} from "../constants";

// Memoized link list component
interface LinkListProps {
  title: string;
  links: readonly { label: string; href: string }[];
}

const LinkList = memo(function LinkList({ title, links }: LinkListProps) {
  return (
    <div className="mb-6">
      <h3 className="text-slate-900 font-bold text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-fd-primary/80 transition-colors text-base"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-5 px-6 lg:px-20 2xl:px-0 lg:pb-20">
      <div className="mx-auto">
        {/* Main Grid - 3 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Left Column - Navigation Links */}
          <div className="bg-[#F1F5F9] rounded-2xl p-6 lg:p-8 order-2 lg:order-1">
            <LinkList title="Documentation" links={FOOTER_DOCUMENTATION_LINKS} />
            <LinkList title="Components" links={FOOTER_COMPONENT_LINKS} />
            <LinkList title="Others" links={FOOTER_OTHER_LINKS} />
          </div>

          {/* Middle Column - Pot Illustration + Logo */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            {/* Pot Illustration */}
            <div className="bg-[#F1F5F9] rounded-2xl p-6 flex items-center justify-center flex-1 flex-col relative">
              <Image
                src={footerPot}
                alt="Twigs - Crafted with care"
                className="w-full max-w-[180px] lg:max-w-[320px] h-auto absolute top-10 right-0"
              />
              <div className="pt-53.5 lg:pt-92.5">
                <div className="border-t border-slate-200 w-full pb-5 lg:pb-10" />
                <Image
                  src={logoLightMode}
                  alt="Twigs Logo"
                  className="h-10 w-auto mb-4"
                />
                <p className="text-slate-600 text-base leading-relaxed">
                  Accessible, themeable, and production-tested React components
                  for creating scalable design systems and delightful user
                  interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - GitHub + Copyright */}
          <div className="flex flex-col gap-6 order-3">
            {/* GitHub Link */}
            <a
              href="https://github.com/surveysparrow/twigs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F1F5F9] rounded-2xl p-8 flex-1 flex items-center justify-center group transition-colors"
            >
              <Image
                src={footerGit}
                alt="GitHub"
                className="w-20 lg:w-32 h-20 lg:h-32 group-hover:scale-105 transition-transform"
              />
            </a>

            {/* Copyright */}
            <div className="bg-[#F1F5F9] rounded-2xl p-6 flex-1 flex-col justify-between items-center gap-4 h-full group">
              <Image 
                src={surveysparrow} 
                alt="Footer Logo" 
                className="w-20 lg:w-30 h-20 lg:h-30 group-hover:scale-105 transition-transform mx-auto mt-3" 
              />
              <p className="text-slate-700 text-lg mt-5 lg:mt-8 text-center">
                Built with{" "}
                <span className="text-red-500" aria-label="love">
                  ❤️
                </span>{" "}
                from{" "}
                <a
                  href="https://surveysparrow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fd-primary hover:text-[#017480] transition-colors"
                >
                  SurveySparrow
                </a>
              </p>
              <p className="text-slate-500 text-base text-center">
                Copyright © {new Date().getFullYear()} SurveySparrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
