interface ExternalLinksProps {
  source?: string;
  storybook?: string;
}
import Image from "next/image";
import githublogo from "@/assets/images/github-logo.svg";
import storybooklogo from "@/assets/images/storybook-logo.svg";
import arrowicon from "@/assets/images/arrow-icon.svg";

export function ExternalLinks({ source, storybook }: ExternalLinksProps) {
  const baseURL = process.env.NEXT_STORYBOOK_BASE_URL;

  return (
    <div className="flex flex-row gap-7 m-0 p-0 align-center">
      <div>
        <a
          className="flex flex-row gap-2 items-center text-decoration-none h-5"
          href={source}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={githublogo}
            alt="GitHub"
            width={17}
            height={17}
            className="p-0 m-0"
          />
          <span className="text-sm m-0 p-0 h-fit">Source</span>
          <Image src={arrowicon} alt="redirectIcon" width={15} height={15} />
        </a>
      </div>
      <div>
        <a
          className="flex flex-row gap-2 items-center h-5"
          href={`${baseURL}/${storybook}--docs`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={storybooklogo} alt="Storybook" width={17} height={17} />
          <span className="text-sm m-0 p-0 h-fit">Storybook</span>
          <Image src={arrowicon} alt="redirectIcon" width={15} height={15} />
        </a>
      </div>
    </div>
  );
}
