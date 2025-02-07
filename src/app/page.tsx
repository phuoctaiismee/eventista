import HomeFeatures from "@/features/home";
import LenisProvider from "@/providers/lenis-provider";
export default function Home() {
  return (
    <LenisProvider>
      <main className="min-h-screen w-full flex flex-col">
        <HomeFeatures />
      </main>
    </LenisProvider>
  );
}
