"use client";

import AnimatedTabs from "./components/custom/AnimatedTabs";
import { useSearchParams, useRouter } from "next/navigation";
import About from "./components/custom/About";

const tabs = ["About", "Work"];

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("tab") || "About";

  const handleTabChange = (tab: string) => {
    router.push(`?tab=${tab}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-6 px-6 sm:py-16">
      <div className="max-w-xl w-full">
        <header>
          <AnimatedTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </header>
        {activeTab === "About" && <About />}
      </div>
    </main>
  );
}
