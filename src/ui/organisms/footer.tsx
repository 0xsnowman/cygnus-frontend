import React from "react";

import { Flex, Container, Box, Text } from "../atoms";
import { Link } from "../molecules";

import coinPng from "../../assets/icons/coin.png";

const Footer = () => {
  return (
    <Box
      className="organism-footer"
      backgroundColor="#111111"
      paddingVertical={20}
    >
      <Container>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize="LARGE">CYGNUS</Text>
          <Text fontSize="SMALL">
              Cygnus copyright@2022
          </Text>
          <Flex justifyContent="space-between" gap={15}>
            <Link iconSrc={coinPng} />
            <Link iconSrc={coinPng} />
            <Link iconSrc={coinPng} />
            <Link iconSrc={coinPng} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
