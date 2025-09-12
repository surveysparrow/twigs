interface ExternalLinksProps {
  source?: string;
  storybook?: string;   
}

export function ExternalLinks({ source, storybook }: ExternalLinksProps) {
  const baseURL = process.env.NEXT_STORYBOOK_BASE_URL;

  return (
    <div className="flex flex-row gap-5 m-0 p-0">  
        <div>
            <a 
              className="flex flex-row gap-2 items-center text-decoration-none" 
              href={source} 
              target="_blank" 
              rel="noopener noreferrer"
            >
                <span className="text-sm m-0 p-0 h-fit">Source</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
            </a>
        </div>
        <div>
            <a 
              className="flex flex-row gap-2 items-center" 
              href={`${baseURL}/${storybook}--docs`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
                <span className="text-sm m-0 p-0 h-fit">Storybook</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
            </a>
        </div>
    </div>
  );
}