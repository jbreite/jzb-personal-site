import React from "react";

export default function TextLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a href={href} className="text-blue-500 hover:text-blue-300">
      {label}
    </a>
  );
}
