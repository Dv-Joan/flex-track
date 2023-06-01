export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Flex Track",
  description: "Fullstack solution designed for FlexTrack Inc GYM company ",
  mainNav: [
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  footerNav: [
    {
      title: "Services",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
  ],
  links: {
    docs: "https://ui.shadcn.com",
    twitter: "https://twitter.com/shadcn",
  },
}
