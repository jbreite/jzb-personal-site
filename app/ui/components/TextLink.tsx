import React from "react";
import Image from "next/image";
import ExternalLink from "../../../public/externalLink.svg";

export default function TextLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a href={href} className=" text-blue-500 hover:text-blue-300">
      {/* <span className="flex items-center"> */}
      {label}
      {/* {external && (
          <Image src={ExternalLink} alt="Link" className="h-4 aspect-square" />
        )} */}
      {/* </span> */}
    </a>
  );
}
