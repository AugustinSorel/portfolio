import React from "react";
import Header from "../UIElements/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <h1>Footer</h1>
    </>
  );
};

export default Layout;
