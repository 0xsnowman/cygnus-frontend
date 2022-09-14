import React from "react";

import { Box } from "../atoms";

interface IPageProps {
  children: JSX.Element | JSX.Element[];
}

const Page: React.FC<IPageProps> = ({ children }) => {
  return (
    <Box className="molecule-page" paddingVertical={200}>
      {children}
    </Box>
  );
};

export default Page;
