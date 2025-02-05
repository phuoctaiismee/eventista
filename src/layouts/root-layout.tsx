import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import BottomNavigation from "@/components/common/navigation/bottom-navigation";
import {AppProvider} from "@/providers/app-provider";
import {IGlobalLayoutProps} from "@/types";

const GlobalRootLayout = ({children}: IGlobalLayoutProps) => {
  return (
    <AppProvider>
      <Header />
      {children}
      <Footer />
      <BottomNavigation />
    </AppProvider>
  );
};

export default GlobalRootLayout;
