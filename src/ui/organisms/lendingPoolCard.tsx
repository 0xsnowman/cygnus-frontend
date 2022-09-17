import React from "react";

import { Box, Flex, Grid, GridItem, Text, Process } from "../atoms";

import coinPng from "../../assets/icons/coin.png";

// import { Icons } from "../../assets";

import Dimension from "../../config/dimension";
import TokenPair from "../molecules/tokenPair";
import { useNavigate } from "react-router-dom";
import avaxLogo from "../../assets/icons/avax-logo.png";
import btcLogo from "../../assets/icons/btc-logo.png";
import avaxLogoT from "../../assets/icons/transparent-avax.png";

const LendingPoolCard = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="organism-lendingpoolcard"
      borderRadius={Dimension.BORDER_RADIUS.LARGE}
      border="2px solid #030309"
      position="relative"
      onClick={() => {
        navigate("/1");
      }}
    >
      <Box background="linear-gradient(90deg, rgba(0,0,0,1) -50%, #2d0e13 100%)" padding={Dimension.PADDING.MEDIUM} height="100px">
        <Flex flexDirection="row" gap={Dimension.GAP.SMALL}>
          <Box
            backgroundColor="#8a2829"
            borderRadius={Dimension.BORDER_RADIUS.MEDIUM}
            paddingHorizontal={Dimension.PADDING.MEDIUM}
            paddingVertical={Dimension.PADDING.SMALL}
          >
            <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
              TRADER JOE
            </Text>
          </Box>
          <Box
            backgroundColor="#8a2829"
            borderRadius={Dimension.BORDER_RADIUS.MEDIUM}
            paddingHorizontal={Dimension.PADDING.MEDIUM}
            paddingVertical={Dimension.PADDING.SMALL}
          >
            <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
              MCV3
            </Text>
          </Box>
          <Flex
            backgroundColor="#8a2829"
            borderRadius={Dimension.BORDER_RADIUS.MEDIUM}
            paddingHorizontal={Dimension.PADDING.MEDIUM}
            flexDirection="row"
            alignItems="center"
            borderColor="#e84142"
            border="3px solid #e84142"
          >
            <img src={avaxLogoT} width="16px" height="16px" />
          </Flex>
        </Flex>

        <Box padding={Dimension.PADDING.MEDIUM} />
      </Box>
      <Box backgroundColor="#030309" padding={Dimension.PADDING.MEDIUM}>
        <Box padding={Dimension.PADDING.MEDIUM} />
        <Flex flexDirection="column" gap={Dimension.GAP.MEDIUM}>
          <Text textAlign="left" fontSize="MEDIUM" fontWeight="BOLD">
            ETH-AVAX
          </Text>
          <Box padding={Dimension.PADDING.EXTRA_SMALL} />
          <Text color="gray" fontSize="EXTRA_SMALL" fontWeight="SICK">
            Total Projected USDC APR ⓘ
          </Text>
          <Text fontSize="MEDIUM">12.45%</Text>
          <Box padding={Dimension.PADDING.EXTRA_SMALL} />
          <Flex flexDirection="row" justifyContent="space-between">
            <Flex flexDirection="column">
              <Text color="gray" fontSize="EXTRA_SMALL" fontWeight="SICK">
                Liq. Incentive ⓘ
              </Text>
              <Text center fontSize="EXTRA_SMALL" padding="8px">
                12.45%
              </Text>
            </Flex>
            <Flex flexDirection="column">
              <Text color="gray" fontSize="EXTRA_SMALL" fontWeight="SICK">
                Debt Ratio ⓘ
              </Text>
              <Text center fontSize="EXTRA_SMALL" padding="8px">
                95%
              </Text>
            </Flex>
            <Flex flexDirection="column">
              <Text color="gray" fontSize="EXTRA_SMALL" fontWeight="SICK">
                LP Token Price
              </Text>
              <Text
                center
                fontSize="EXTRA_SMALL"
                padding="8px"
                color="rgb(22, 206, 185)"
              >
                $4.24
              </Text>
            </Flex>
          </Flex>
          <Box padding={Dimension.PADDING.SMALL} />
          <Flex flexDirection="column">
            <Flex flexDirection="column" justifyContent="space-between">
              <Text
                color="gray"
                fontSize="EXTRA_SMALL"
                padding="12px 0px"
                fontWeight="SICK"
              >
                Current USDC Borrows
              </Text>
              <Process value={0.4} borderRadius="20px"/>
              <Text
                color="gray"
                fontSize="EXTRA_SMALL"
                padding="12px 0px"
                fontWeight="SICK"
              >
                Current USDC Deposits
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box position="absolute" width="100%" height="100px" top={105}>
        <Flex justifyContent="flex-start">
          <TokenPair token1={btcLogo} token2={avaxLogo} />
        </Flex>
      </Box>
    </Box>
  );
};

export default LendingPoolCard;
