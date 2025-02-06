export const API_URL: string =
  process.env.NEXT_PUBLIC_API_URL || "localhost:3000";

export const STYLES = {
  disableFocusVisible:
    "focus-visible:!border-[#DDDDE3] focus-visible:!ring-transparent focus:!ring-offset-transparent focus-visible:!ring-offset-transparent focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0 focus:!ring-0 focus:!ring-offset-0",
};

export const Languages = [
  {
    name: "EN-US",
    label: "English",
    value: "US",
  },
  {
    name: "VI-VN",
    label: "Tiếng Việt",
    value: "VN",
  },
];

export const COMMON = {
  header_menus: [
    {
      name: "Homepage",
      url: "/",
    },
    {
      name: "About Votings",
      url: "/about-votings",
    },
    {
      name: "News",
      url: "/news",
    },
    {
      name: "Gallery",
      url: "/gallery",
    },
    {
      name: "Sponsor",
      url: "/sponsor",
    },
  ],
  footer: {
    first: [
      {
        name: "Payment Guide",
        url: "/payment-guide",
      },
      {
        name: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        name: "Terms and conditions",
        url: "/terms-and-conditions",
      },
      {
        name: "Shipping Policy",
        url: "/shipping-policy",
      },
      {
        name: "Return & Refund Policy",
        url: "/return-refund-policy",
      },
      {
        name: "FAQ",
        url: "/faq",
      },
    ],
    second: {
      logo: "/logos/logo-bw.svg",
      describes:
        "TekNix is a fan engagement platform with a diverse ecosystem of solutions: Online Voting Platform, Ticket Distribution Platform and eCommerce for Merchandise. TekNix is currently a strategic partner of top tier entertainment company in Asia such as Glamanand Supermodel India, Sen Vang Entertainment, Uni Corp, TNA Entertainment,.... becoming an important platform to bring business efficiency outstanding for businesses in the entertainment industry.",
    },
    support: [
      "Email: info@teknixcorp.com",
      "Website: https://www.teknixcorp.com/",
      "Hotline: (+84) 28 7101 6565",
    ],
    third: [
      {
        name: "eCommerce Certified by",
        ls: ["/logos/subscribe.svg"],
      },
      {
        name: "Connect with us",
        ls: [
          "/logos/socials/facebook.svg",
          "/logos/socials/tiktok.svg",
          "/logos/socials/linked.svg",
        ],
      },
      {
        name: "Payment method",
        ls: [
          "/logos/payments/momo.svg",
          "/logos/payments/vnpay.svg",
          "/logos/payments/zalopay.svg",
          "/logos/payments/visa.svg",
          "/logos/payments/master-card.svg",
        ],
      },
    ],
    fourth: [
      {
        name: "TekNix Headquarter",
        ls: [
          "6th Floor Golden House Tower – Sunwah Pearl Building, 90 Nguyen Huu Canh, Ward 22, Binh Thanh District, Ho Chi Minh City, Vietnam",
        ],
      },
      {
        name: "Can Tho Branch",
        ls: [
          "STS Tower, 11B Hoa Binh Street, Ninh Kieu District, Can Tho City.",
        ],
      },
      {
        name: "USA Branch",
        ls: ["3707 Cypress Creek Parkway Suite 310, Houston, TX 77068"],
      },
    ],
    fifth: "@2024 Copyright belongs to Eventista",
  },
};
