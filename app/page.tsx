import Image from "next/image";
import TextLink from "./ui/components/TextLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-6 py-24 ">
      <div>
        <header className="">
          <h1>Josh Breite</h1>
          <time className="text-[#ADADAD]">Updated, July 19, 2024</time>
        </header>

        <p className="pt-4">
          I live in New York. Currently exploring new opportunities.
        </p>
        <div className="flex flex-col pt-2 gap-y-4 ">
          <p>
            I co-founded <TextLink href="http://joinfire.xyz" label="Fire" /> a
            company that protected users crypto funds.
          </p>
          <p>
            Before that, I worked for{" "}
            <TextLink label="Atomic" href="http://atomic.vc" />, starting as an
            intern and then to product manager in residence, where I worked on
            many different types of crypto products.
          </p>

          <p>
            I also worked at{" "}
            <TextLink href="http://joinpogo.com" label="Pogo" />.
          </p>
          <p>
            I graduated from Northwestern with a major in Learning and
            Organizational Change and a minor in Computer Science
          </p>
        </div>
      </div>
    </main>
  );
}
