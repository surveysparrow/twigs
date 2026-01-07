import React from "react";
import { Text, Image } from "@sparrowengg/twigs-react";
import surveysparrow from "@/assets/images/surveysparrow.svg";
import sparrowdesk from "@/assets/images/sparrowDesk.svg";
import thrivesparrow from "@/assets/images/thrivesparrow.svg";

export default function Testimonials() {
  return (
    <>
      <div className="mx-6">
        <h2 className="text-slate-900 text-[30px]/[38px] lg:text-[48px]/[56px] font-bold text-center mt-10 lg:mt-30 mb-4">
          Built for teams who demand
          <span className="text-indigo-600 text-[30px] lg:text-[46px] italic font-normal font-[400]"
          style={{
            fontFamily: "libre baskerville",
            fontWeight: 300,
          }}
          >
            {" "}
            excellence
          </span>
        </h2>
        <p className="text-slate-500 text-[16px] lg:text-[20px]/[28px] w-full lg:w-[806px] mx-auto text-center font-[300] tracking-[-0.08px] mb-8 lg:mb-16">
          Trusted by industry leaders who value quality and innovation
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 lg:mx-20 2xl:mx-0 pb-15 lg:pb-25">
        {/* Testimonial 1 - SurveySparrow */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-5 lg:p-8 shadow-sm transition-all duration-300 border border-gray-100 hover:border-[#00828D]/30 hover:-translate-y-0.5 cursor-pointer"
        onClick={() => {
          window.open("https://surveysparrow.com", "_blank");
        }}
        >
          <div className="absolute top-5 lg:top-8 right-5 lg:right-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg
              className="w-13 h-13 text-[#00828D]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 10-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
            </svg>
          </div>
          <div className="flex items-center gap-3 mb-8 lg:mb-14">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00828D]/20 to-[#00828D]/10 flex items-center justify-center shadow-sm p-2">
              <Image
                src={surveysparrow.src}
                alt="SurveySparrow"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-slate-800 font-medium text-[16px] lg:text-[20px]/[28px]">SurveySparrow</h3>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8 lg:mb-14 relative z-10 text-sm  md:text-[18px]/[28px]">
            &quot;Twigs eliminates repetition, speeds up development, and
            ensures consistent, accessible UI across all our SurveySparrow
            products. It’s a game-changer for multi-product engineering.&quot;
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00828D]/20">
              <Image
                src="https://ca.slack-edge.com/T3RDEGA00-U55LXJ8J1-1653390fc97a-512"
                alt="Balaji CM"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Text size="md" weight="normal" css={{ color: "$neutral900" }}>
                Balaji CM
              </Text>
              <Text size="sm" weight="normal" css={{ color: "$neutral500" }}>
                CTO, SurveySparrow
              </Text>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00828D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
        </div>

        {/* Testimonial 2 - ThriveSparrow */}
        <div className="group cursor-pointer relative bg-white/80 backdrop-blur-sm rounded-3xl p-5 lg:p-8 shadow-sm transition-all duration-300 border border-gray-100 hover:border-[#00828D]/30 hover:-translate-y-0.5"
        onClick={() => {
          window.open("https://thrivesparrow.com", "_blank");
        }}
        >
          <div className="absolute top-5 lg:top-8 right-5 lg:right-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg
              className="w-13 h-13 text-[#00828D]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 10-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
            </svg>
          </div>
          <div className="flex items-center gap-3 mb-8 lg:mb-14">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00828D]/20 to-[#00828D]/10 flex items-center justify-center shadow-sm">
              <Image
                src={thrivesparrow.src}
                alt="ThriveSparrow"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-slate-800 font-medium text-[16px] lg:text-[20px]/[28px]">ThriveSparrow</h3>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8 lg:mb-14 relative z-10 text-sm  md:text-[18px]/[28px]">
            &quot;Adopting Twigs has been a game changer for our frontend team.
            It enabled us to build and iterate on UI components faster than
            ever, while maintaining a clean and scalable code structure.&quot;
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100 align-self-end">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00828D]/20">
              <Image
                src="https://ca.slack-edge.com/T3RDEGA00-US379KADC-6328985145bb-512"
                alt="Nikhil Ponduri"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Text size="md" weight="normal" css={{ color: "$neutral900" }}>
                Nikhil Ponduri
              </Text>
              <Text size="sm" weight="normal" css={{ color: "$neutral500" }}>
                Engineering Manager, ThriveSparrow
              </Text>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00828D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
        </div>

        {/* Testimonial 3 - SparrowDesk */}
        <div className="group cursor-pointer relative bg-white/80 backdrop-blur-sm rounded-3xl p-5 lg:p-8 shadow-sm transition-all duration-300 border border-gray-100 hover:border-[#00828D]/30 hover:-translate-y-0.5"
        onClick={() => {
          window.open("https://sparrowdesk.com", "_blank");
        }}
        >
          <div className="absolute top-5 lg:top-8 right-5 lg:right-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg
              className="w-13 h-13 text-[#00828D]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 10-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
            </svg>
          </div>
          <div className="flex items-center gap-3 mb-8 lg:mb-14">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00828D]/20 to-[#00828D]/10 flex items-center justify-center shadow-sm p-2">
              <Image
                src={sparrowdesk.src}
                alt="SparrowDesk"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-slate-800 font-medium text-[16px] lg:text-[20px]/[28px]">SparrowDesk</h3>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8 lg:mb-21 relative z-10 text-sm  md:text-[18px]/[28px]">
            &quot;Twigs is a fantastic React component library that helped us
            build SparrowDesk real fast. Very well documented and works great
            out of the box.&quot;
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00828D]/20">
              <Image
                src="https://ca.slack-edge.com/T3RDEGA00-U019T7DRSF7-9d3017c90281-512"
                alt="Justin"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Text size="md" weight="normal" css={{ color: "$neutral900" }}>
                Justin
              </Text>
              <Text size="sm" weight="normal" css={{ color: "$neutral500" }}>
                Product Owner, SparrowDesk
              </Text>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00828D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
        </div>
      </div>
    </>
  );
}
