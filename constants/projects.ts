export const projects = {
  fire: {
    title: "Fire",
    description:
      "Led product, design, and growth for a crypto security tool protecting over $750M in assets for 60,000+ users. The Fire extension was successfully acquired by Kerebus.",
    type: "work",
    links: {
      website: "https://getfire.xyz",
      twitter: "https://x.com/getfirexyz",
    },
    content: [
      {
        type: "video",
        url: "https://video.twimg.com/ext_tw_video/1620090093842071553/pu/vid/1280x720/-PGWo5lrWxn11eiT.mp4",
        title: "Fire Minting Game",
        description:
          "The minting game was the first moment of delight that we wanted users to experience. We had them use the simulator to be able to know which card to get and not get 'rekt'!",
      },
      {
        type: "image",
        url: "https://pbs.twimg.com/media/GYRvTF4akAApk55?format=jpg&name=medium",
        title: "First designs + Ads for the Fire Extension",
        description:
          "These initial designs gained significant traction on Twitter. The combination of compelling ad copy and clear messaging proved crucial for expanding our user base.",
      },
      {
        type: "image",
        url: "/fire/fireSimulatorUI.png",
        title: "Fire Simulator UI",
        description:
          "This was the updated UI for the simulator that was built after our initial rush of users. It included enhancements and a design system for different types of core transactions on Ethereum.",
      },
      {
        type: "image",
        url: "/fire/fireTransactionOfTheDay.png",
        title: "Transaction of the Day",
        description:
          "A hackathon project that turned into a real product the team built a way to encourage users to perform one transaction per day on Ethereum, designed to increase engagement with the extension and our future wallet.",
      },
    ],
    logo: "/fire/fireLogo.svg",
  },
  iceberg: {
    title: "Iceberg",
    description:
      "Led product, design, and frontend development for a consumer-friendly crypto platform that enables cross-chain token trading using USDC, similar to using a debit card on Coinbase, but onchain.",
    type: "work",
    links: {
      website: "https://getfire.xyz",
      twitter: "https://x.com/getfirexyz",
    },
    content: [
      {
        type: "video",
        url: "/iceberg/icebergRecording-8:27.mov",
        title: "Iceberg Demo",
        description:
          "Demo of the Iceberg app showcasing the complete user experience: managing buying power, token swaps, and token portfolio visualization.",
      },
      {
        type: "image",
        url: "/iceberg/icebergForYou.png",
        title: "For You Pages",
        description:
          "This concept showcased how users could interact with on-chain activities in a social context, including the ability to comment on token swaps. (Special thanks to Interface for implementing this in production!)",
      },
      {
        type: "image",
        url: "/iceberg/icebergProfilePage.png",
        title: "Profile Pages",
        description:
          "Enables users to track their onchain activity, view personal swaps and comments. Users can follow other traders and configure automated copy trading functionality.",
      },
      {
        type: "image",
        url: "/iceberg/farcasterIndex.png",
        title: "Iceberg Farcaster Index",
        description:
          "This concept was developed as an advertising campaign to gauge user interest across Farcaster and Twitter platforms. It integrated both individual token pages and index features from the app.",
      },
    ],
    logo: "/iceberg/icebergLoog.png",
  },
  herd: {
    title: "Herd",
    description:
      "Building a new way to take control of your health. Herd will help you understand your health and give you the tools to get to a diagnosis quicker. Currently in development with React Native for iOS.",
    type: "project",
    links: {
      website: "https://withherd.com/",
      twitter: "",
    },
    content: [
      {
        type: "image",
        url: "/herd/herd-home.png",
        title: "Herd Home",
        description:
          "The Herd home page provides users with personalized health guidance through targeted questions, covering everything from lab test results to current symptoms like the common cold.",
      },
      {
        type: "image",
        url: "/herd/herd-history.png",
        title: "Herd History",
        description:
          "A complete reimagining of electronic health record (EHR) presentation. Transforms raw medical data into an intuitive, chronological timeline of your health journey.",
      },
      {
        type: "image",
        url: "/herd/herd-context.png",
        title: "Herd Context",
        description:
          "Herd Context enables users to seamlessly reference their health documents and past conversations, serving as a powerful search tool for your electronic health records — similar to how Cursor works for code.",
      },
      {
        type: "image",
        url: "/herd/herd-chat.png",
        title: "Herd Chat",
        description:
          "A chat interface that enables users to explore their health concerns in depth, providing personalized guidance and care recommendations based on their unique medical history.",
      },
    ],
    logo: "/herd/herdLogo.png",
  },
  bsquared: {
    title: "Bsquared",
    description:
      "A cross-platform sports betting application built on Overtime Markets, enabling onchain wagers through iOS and Farcaster Frame V2. Developed with React Native (mobile) and Next.js (web).",
    type: "project",
    links: {
      website: "",
      twitter: "",
    },
    content: [
      {
        type: "video",
        url: "/bsquared/kcOverOpendingDaySquare.mov",
        title: "Placing a bet",
        description:
          "Placing a bet on the mobile app through a created Coinbase smart wallet where the user doesn't need to pay gas and can just use USDC like a debit card on DraftKings.",
      },
      {
        type: "video",
        url: "/bsquared/frameBets.mov",
        title: "Farcaster Frame V2",
        description:
          "Transformed the original iOS application into a Next.js-powered platform that integrates with Farcaster Frame V2, enabling seamless betting directly from social feeds.",
      },
      {
        type: "video",
        url: "/bsquared/bsquaredIosOnboarding.mov",
        title: "Mobile Onboarding",
        description:
          "Streamlined onboarding experience allowing users to customize their wallet and begin sports betting. Built with React Reanimated for smooth animations.",
      },
      {
        type: "video",
        url: "/bsquared/betTabInteractionStates.mov",
        title: "Mobile Bet Tab Interaction States",
        description:
          "Built with React Reanimated, this video demonstrates the different interaction states on the bet tab, making it feel like DraftKings or FanDuel.",
      },
    ],
    logo: "/bsquared/bsquaredLogo.png",
  },
};
