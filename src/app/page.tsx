import ThemeSchema from "@/components/common/themes/theme-schema";
import { ModeToggle } from "@/components/common/themes/theme-toggle";
export default function Home() {
  
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
     
      <ModeToggle />
      <ThemeSchema />
    </main>
  );
}
