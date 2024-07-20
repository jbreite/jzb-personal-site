import type { StaticImageData } from "next/image";
import Image from "next/image";

export default function ButtonLink({
  href,
  label,
  image,
}: {
  href: string;
  label: string;
  image: StaticImageData;
}) {
  return (
    <a
      href={href}
      className="flex items-center justify-center p-2 bg-[#F6F7F9] rounded-lg gap-x-1"
    >
      <Image src={image} alt={label} className="w-4 " />
    </a>
  );
}
