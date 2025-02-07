import { IGlobalLayoutProps } from "@/types";
import StoreProvider from "./store-provider";
import { ThemeProvider } from "./theme-provider";
import LenisProvider from "./lenis-provider";

export const AppProvider = ({ children }: IGlobalLayoutProps) => {
  return (
    <StoreProvider>
      {/* <LenisProvider> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      {/* </LenisProvider> */}
    </StoreProvider>
  );
};
