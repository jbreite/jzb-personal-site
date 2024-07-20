import TextLink from "./ui/components/TextLink";
import ButtonLink from "./ui/components/ButtonLink";
import TwitterLogo from "../public/twitterLogo.svg";
import FarcasterLogo from "../public/farcasterLogo.svg";
import LinkedinLogo from "../public/linkedinLogo.svg";
import SubstackLogo from "../public/substackLogo.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-6 py-12">
      <div className="max-w-xl">
        <header className=" text-sm">
          <h1>Josh Breite</h1>
          <time className="text-[#ADADAD]">Last updated, July 19, 2024</time>
        </header>

        <div className="flex flex-col gap-y-4 py-6 text-sm">
          <p>I live in New York. Currently exploring new opportunities.</p>
          <p>
            I co-founded{" "}
            <TextLink href="http://joinfire.xyz" label="Fire" external /> a
            company that protected users&apos; crypto funds.
          </p>
          <p>
            Before that, I worked for{" "}
            <TextLink label="Atomic" href="http://atomic.vc" />, starting as an
            intern and then to product manager in residence, where I worked on
            many different types of crypto products.
          </p>
          <p>
            I also worked at{" "}
            <TextLink href="http://joinpogo.com" label="Pogo" /> as an intern
            where I worked on product (and other things).
          </p>
          <p>
            I graduated from Northwestern with a major in Learning and
            Organizational Change and a minor in Computer Science.
          </p>

          <p>
            Reach me at either{" "}
            <TextLink href="http://x.com/joshbreite" label="@joshbreite" /> or{" "}
            <TextLink
              href="mailto:joshbreite@gmail.com"
              label="joshbreite@gmail.com"
            />
            .
          </p>
        </div>

        <div className="flex text-sm flex-row gap-x-4 gap-y-2 flex-wrap">
          <ButtonLink
            href="http://x.com/joshbreite"
            label="Twitter"
            image={TwitterLogo}
          />
          <ButtonLink
            href="http://warpcast.com/joshbreite.eth"
            label="Farcaster"
            image={FarcasterLogo}
          />
          <ButtonLink
            href="https://www.linkedin.com/in/josh-breite-0ba696173/"
            label="LinkedIn"
            image={LinkedinLogo}
          />
          <ButtonLink
            href="https://www.linkedin.com/in/josh-breite-0ba696173/"
            label="Substack"
            image={SubstackLogo}
          />
        </div>
      </div>
    </main>
  );
}
