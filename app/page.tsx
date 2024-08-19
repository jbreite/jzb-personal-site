import TextLink from "./ui/components/TextLink";
import ButtonLink from "./ui/components/ButtonLink";
import TwitterLogo from "../public/twitterLogo.svg";
import FarcasterLogo from "../public/farcasterLogo.svg";
import LinkedinLogo from "../public/linkedinLogo.svg";
import SubstackLogo from "../public/substackLogo.svg";
import GitHubLogo from "../public/githubLogo.svg";

const FireLink = "https://www.joinfire.xyz/";
const AtomicLink = "https://atomic.vc/";
const PogoLink = "https://www.joinpogo.com/";
const TwitterLink = "https://x.com/joshbreite";
const EmailLink = "mailto:joshbreite@gmail.com";
const FarcasterLink = "https://warpcast.com/joshbreite.eth";
const LinkedInLink = "https://www.linkedin.com/in/josh-breite-0ba696173/";
const SubstackLink = "https://joshbreite.substack.com/";
const GitHubLink = "https://github.com/jbreite";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-6 px-6 sm:py-16">
      <div className="max-w-xl">
        <header>
          <h1 className="font-medium">Josh Breite</h1>
          {/* <time className="text-[#ADADAD]">Last updated, July 19, 2024</time> */}
        </header>

        <div className="flex flex-col gap-y-4 py-6 ">
          <p>I live in New York. Currently exploring new opportunities.</p>
          <p>
            I co-founded <TextLink href={FireLink} label="Fire" external /> a a
            security tool to help users protect funds while interacting with
            crypto. We had 60k+ users who downloaded our extension, while
            protecting over $750m in assets.
          </p>
          <p>
            Before that, I worked for{" "}
            <TextLink label="Atomic" href={AtomicLink} />, starting as an intern
            and then to product manager in residence, where I worked on many
            different types of crypto products.
          </p>
          <p>
            I also worked at <TextLink href={PogoLink} label="Pogo" /> as an
            intern where I worked on product (and other things).
          </p>
          <p>
            I graduated from Northwestern with a major in Learning and
            Organizational Change and a minor in Computer Science.
          </p>

          <p>
            Reach me at either{" "}
            <TextLink href={TwitterLink} label="@joshbreite" /> or{" "}
            <TextLink href={EmailLink} label="joshbreite@gmail.com" />.
          </p>
        </div>

        <div className="flex  flex-row gap-x-4 gap-y-2 flex-wrap">
          <ButtonLink href={TwitterLink} label="Twitter" image={TwitterLogo} />
          <ButtonLink
            href={FarcasterLink}
            label="Farcaster"
            image={FarcasterLogo}
          />
          <ButtonLink href={GitHubLink} label="GitHub" image={GitHubLogo} />

          <ButtonLink
            href={LinkedInLink}
            label="LinkedIn"
            image={LinkedinLogo}
          />
          <ButtonLink
            href={SubstackLink}
            label="Substack"
            image={SubstackLogo}
          />
        </div>
      </div>
    </main>
  );
}
