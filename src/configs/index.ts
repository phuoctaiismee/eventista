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
      url: "#",
    },
    {
      name: "News",
      url: "#",
    },
    {
      name: "Gallery",
      url: "#",
    },
    {
      name: "Sponsor",
      url: "#",
    },
  ],
  footer: {
    first: [
      {
        name: "Payment Guide",
        url: "#",
      },
      {
        name: "Privacy Policy",
        url: "#",
      },
      {
        name: "Terms and conditions",
        url: "#",
      },
      {
        name: "Shipping Policy",
        url: "#",
      },
      {
        name: "Return & Refund Policy",
        url: "#",
      },
      {
        name: "FAQ",
        url: "#",
      },
    ],
    second: {
      describes:
        "Eventista is a fan engagement platform with a diverse ecosystem of solutions: Online Voting Platform, Ticket Distribution Platform and eCommerce for Merchandise. Eventista is currently a strategic partner of top tier entertainment company in Asia such as Glamanand Supermodel India, Sen Vang Entertainment, Uni Corp, TNA Entertainment,.... becoming an important platform to bring business efficiency outstanding for businesses in the entertainment industry.",
    },
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
        name: "Eventista Việt Nam",
        ls: [
          "1A Trần Thánh Tông, Phường Bạch Đằng, Quận Hai Bà Trưng, Hà Nội Công ty TNHH Eventista.",
          "GPĐKKD số 0110372057 do Sở KHĐT TP Hà Nội cấp ngày 31/05/2022",
        ],
      },
      {
        name: "Eventista Limited Company HongKong",
        ls: [
          "SUITE C, LEVEL 7, WORLD TRUST TOWER, 50 STANLEY STREET, CENTRAL, HONG KONG",
          "Business Reg Number: 75914577-000-11-23-7. Shorten BRN: 3338407",
        ],
      },
      {
        name: "Eventista Global Company Limited United KingDom",
        ls: [
          "71-75 Shelton Street Covent Garden London, WC2H 9JQ, UNITED KINGDOM",
          "Business Reg Number: 15533570",
        ],
      },
    ],
    fifth: "@2024 Copyright belongs to Eventista",
  },
  meta: {
    title: "Mister Tourism World",
    description: "Mister Tourism World",
    image: "/thumbnail.png",
  },
};
