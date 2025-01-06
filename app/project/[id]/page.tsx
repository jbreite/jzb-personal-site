/* eslint-disable @next/next/no-img-element */
"use client";

import { projects } from "@/constants/projects";
import { ChevronLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = useParams();

  const project = projects[id as keyof typeof projects];

  const getMediaType = (url: string) => {
    const extension = url.split(".").pop()?.toLowerCase();
    if (extension === "gif" || extension === "mp4" || extension === "mov") {
      return "video";
    }
    return "image";
  };

  return (
    <>
      <div className="flex flex-col gap-y-4 w-full">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-x-1">
            <button onClick={() => router.back()}>
              <ChevronLeft />
            </button>
          </div>
          <div className="flex flex-row gap-x-1">
            <img
              src={project.logo}
              alt={project.title}
              className="w-6 h-6 rounded-md"
            />
            <h1 className="font-medium">{project.title}</h1>
          </div>
        </div>

        <div className="mb-4 bg-[#F6F7F9] rounded-xl p-4">
          <p>{project.description}</p>
        </div>

        <ul className="space-y-6">
          {project.content.map((work, index) => {
            return (
              <li key={work.url} className="space-y-2">
                <div className="flex flex-col ">
                  <h1 className="font-medium">{work.title}</h1>
                  <p>{work.description}</p>
                </div>
                <div className="relative flex items-center justify-center overflow-hidden -mx-6 px-6 py-4 rounded-none border-b-[1px] border-preview-border-light bg-preview-light shadow-none sm:rounded-xl sm:mx-0 sm:p-0 sm:border sm:shadow-sm dark:border-preview-border-dark">
                  {getMediaType(work.url) === "video" ? (
                    <video
                      controls
                      loop
                      autoPlay={index === 0}
                      muted
                      playsInline
                      className="w-full aspect-1 object-cover rounded-md sm:rounded-xl"
                    >
                      <source src={work.url} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={work.url}
                      className="w-full h-fit max-h-96 object-contain rounded-md sm:rounded-2xl"
                      alt={work.title}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
