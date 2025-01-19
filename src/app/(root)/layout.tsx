import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import React from "react";

type PropsType = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: PropsType) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
