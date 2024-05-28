import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "NexJS",
  author: "ethan",
  description:
    "Next.js boilerplate with shadcn/ui, prisma, icons, and typesafe env setup.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: env.NEXT_PUBLIC_APP_URL,
  links: {
    github: "https://github.com/rxnk/next-boilerplate",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
