import React from "react";

import { Flex, Container, Box, Text } from "../atoms";
import { Link } from "../molecules";
import Dimension from "../../config/dimension";

import coinPng from "../../assets/icons/coin.png";
import gitbook from "../../assets/icons/gitbook.png";
import github from "../../assets/icons/github.png";
import discord from "../../assets/icons/discord.png";
import twitter from "../../assets/icons/twitter.png";
import logo from "../../assets/images/logo.png"

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
        <div>
          <img src={logo} alt='Cyg' width="200px"/>
        </div>
          <Text fontSize="SMALL" fontWeight="SICK">
            ©2022 by Cygnus Finance. All rights reserved

          </Text>
          <Flex justifyContent="space-between" gap={Dimension.GAP.LARGE}>
            <Link iconSrc={gitbook} />
            <Link iconSrc={github} />
            <Link iconSrc={discord} />
            <Link iconSrc={twitter} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
