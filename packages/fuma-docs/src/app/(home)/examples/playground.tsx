"use client";
import React from "react";
import { ForwardArrowIcon } from "@sparrowengg/twigs-react-icons";
import Image, { StaticImageData } from "next/image";
import playground from "@/assets/images/play-new.svg";

const PLAYGROUND_URL = "https://play.twigs.surveysparrow.com/"; 

interface HoverImageProps {
  src: StaticImageData;
  alt: string;
}

const HoverImage = ({ src, alt }: HoverImageProps) => {
  return (
    <a
      href={PLAYGROUND_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block group cursor-pointer rounded-t-2xl overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        className="rounded-b-2xl md:rounded-b-none rounded-t-2xl h-full transition-transform duration-300 p-3 md:p-0 bg-[#FFF6D3] object-cover"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center rounded-t-2xl">
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-xl font-semibold tracking-tight">
            Go to Playground
          </span>
          <span className="text-white transition-transform duration-300 rotate-[-45deg]">
            <ForwardArrowIcon size={28} color="currentColor" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default function Playground() {
    return (
      <div className="bg-[#FFF6D3] mx-6 lg:mx-20 rounded-2xl  pt-10">
        <div className="flex flex-col gap-4 max-w-[550px] md:mx-auto mx-6 mb-5 lg:mb-10">
          <h2 className="text-[30px] lg:text-[48px]/[56px] font-[800] text-center text-neutral-900 tracking-[-1.2px]">
            Twigs Playground
          </h2>
          <p className="text-center text-[16px] md:text-[20px]/[28px] text-slate-500 break-words tracking-[-0.08px] font-[300]">
            Playground designed for the twigs development with a live preview and code editor
            <span className="cursor-pointer underline block lg:hidden" onClick={() => window.open(PLAYGROUND_URL, "_blank")}>{" "}Explore the Playground</span>
          </p>
        </div>
        <div className="max-w-[870px] mx-auto">
          <HoverImage src={playground} alt="playground"/>
        </div>
      </div>
    );
}