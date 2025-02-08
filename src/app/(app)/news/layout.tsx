import { Metadata, ResolvingMetadata } from "next";
type Props = {};
export async function generateMetadata(
    props: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const { title, description, openGraph } = await parent;
  
    return {
      title: `Miss Tourism Mister tourism world press release`,
      description: `Miss Tourism Mister tourism world press release`,
      openGraph: {
        images: [...(openGraph?.images || [])],
        title: title || "Miss Tourism Mister tourism world press release",
        description:
          description || "Miss Tourism Mister tourism world press release",
        url: `/news`,
        locale: "en-US",
        siteName:
          "Miss Tourism Mister tourism world press release",

        type: "article",
      },
      alternates: {
        canonical: `/news`,
      },
      twitter: {
        title: `Miss Tourism Mister tourism world press release`,
        description: "Miss Tourism Mister tourism world press release",
        images: [...(openGraph?.images || [])],
        card: "summary_large_image",
      },
    };
  }
const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full flex flex-col bg-[#05112C] overflow-hidden md:px-0">
      {children}
    </main>
  );
};

export default NewsLayout;
