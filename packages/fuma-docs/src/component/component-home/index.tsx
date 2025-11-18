"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ComponentPreview } from "./component-preview";
import { components } from "./components-data";

export function ComponentHome() {
  const router = useRouter();
  return (
    <div>
      {Object.entries(
        components.reduce((acc, component) => {
          if (!acc[component.category]) {
            acc[component.category] = [];
          }
          acc[component.category].push(component);
          return acc;
        }, {} as Record<string, typeof components>)
      ).map(([category, categoryComponents]) => (
        <div key={category} className="mb-5 pb-5 border-b border-fd-border">
          <h3 className="text-base font-medium mb-6 mt-0 text-fd-secondary-foreground">
            {category}
          </h3>
          <div
            className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {categoryComponents.map((component) => (
              <div
                key={component.name}
                onClick={() => {
                  router.push(component.href);
                }}
              >
                <div className="border border-fd-border hover:bg-fd-secondary/40 rounded-lg cursor-pointer min-h-70">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-center items-center tabs-grid-chip h-40 rounded-t-lg">
                        <ComponentPreview name={component.name} title={component.title} />
                    </div>
                    <div className="p-2 rounded-lg m-0">
                      <p className="!m-0 pl-1 text-base font-medium">
                        {component.title}
                      </p>
                      <p className="text-fd-muted-foreground !m-0 p-1 pt-2 font-normal pb-0 text-sm">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
