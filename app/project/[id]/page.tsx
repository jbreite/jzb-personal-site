/* eslint-disable @next/next/no-img-element */
"use client";

import { projects } from "@/constants/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";



export default function ProjectPage() {
  const router = useRouter();
  const { id } = useParams();
  console.log(id);

  const project = projects[id as keyof typeof projects];
  const [currentImage, setCurrentImage] = useState(0);
  const carouselContent = project.content;

  //Move carousel
  const moveForward = () => {
    setCurrentImage((prevSlide) => (prevSlide + 1) % carouselContent.length);
  };

  const moveBack = () => {
    setCurrentImage(
      (prevSlide) =>
        (prevSlide - 1 + carouselContent.length) % carouselContent.length
    );
  };

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
          <div className="flex flex-row gap-x-2">
            <button onClick={() => router.back()}>
              <ChevronLeft />
            </button>
            <img src={project.logo} alt={project.title} className="w-6 h-6 rounded-md" />
            <h1 className="font-medium">{project.title}</h1>
          </div>
          <div className="flex flex-row gap-x-3 justify-end w-full">
            <CarouselControlButton
              onClick={moveBack}
              icon={<ChevronLeft size={20} />}
            />
            <CarouselControlButton
              onClick={moveForward}
              icon={<ChevronRight size={20} />}
            />
          </div>
        </div>

        <div className="flex flex-col w-full  bg-gray-[#F6F7F9] rounded-2xl justify-center items-center">
          {getMediaType(project.content[currentImage]) === "video" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            >
              <source src={project.content[currentImage]} type="video/mp4" />
            </video>
          ) : (
            <img
              src={project.content[currentImage]}
              className="w-full h-full object-cover rounded-2xl"
              alt={project.title}
            />
          )}
        </div>

        <div>
          <p>{project.description}</p>
        </div>
      </div>
    </>
  );
}

function CarouselControlButton({
  onClick,
  icon,
}: {
  onClick: () => void;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-6 h-6 items-center justify-center rounded-full bg-[#F6F7F9]"
    >
      {icon}
    </button>
  );
}
