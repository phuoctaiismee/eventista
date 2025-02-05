import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import {AppProvider} from "@/providers/app-provider";
import {IGlobalLayoutProps} from "@/types";

const GlobalRootLayout = ({children}: IGlobalLayoutProps) => {
  return (
    <AppProvider>
      <Header />
      {children}
      <Footer />
    </AppProvider>
  );
};

export default GlobalRootLayout;
