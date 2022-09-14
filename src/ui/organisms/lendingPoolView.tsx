import React, { useState } from "react";

import { Box, Flex, Text, Icon } from "../atoms";
import { Link } from "../molecules";

import coinPng from "../../assets/icons/coin.png";

// import { Icons } from "../../assets";

// import Dimension from "../../config/dimension";
import TokenPair from "../molecules/tokenPair";
import { Button } from "../molecules";

const LendingPoolView = () => {
  const [tabViewChannel, setTabViewChannel] = useState("borrow");
  // const [collapsedView, setCollapsedView] = useState(true);

  return (
    <Box className="organism-lendingpooltab">
      <Box height="100%">
        <Box backgroundColor="#24244A">
          <Flex>
            <Flex
              flex={1}
              justifyContent="center"
              backgroundColor={
                tabViewChannel === "borrow" ? "#24244A" : "#101027"
              }
              paddingVertical={5}
              borderRadius={0}
              borderTop={
                tabViewChannel === "borrow"
                  ? "3px solid #6869E7"
                  : "3px solid #101027"
              }
              position="relative"
            >
              <Button
                width="100%"
                height="100%"
                padding={5}
                className="molecule-button-noborder"
                onClick={() => {
                  setTabViewChannel("borrow");
                }}
              >
                BORRROW
              </Button>
            </Flex>
            <Flex
              flex={1}
              justifyContent="center"
              backgroundColor={
                tabViewChannel === "lend" ? "#24244A" : "#101027"
              }
              paddingVertical={5}
              borderRadius={0}
              borderTop={
                tabViewChannel === "lend"
                  ? "3px solid #6869E7"
                  : "3px solid #101027"
              }
              position="relative"
            >
              <Button
                width="100%"
                height="100%"
                padding={5}
                className="molecule-button-noborder"
                onClick={() => {
                  setTabViewChannel("lend");
                }}
              >
                LEND
              </Button>
            </Flex>
            <Flex
              flex={1}
              justifyContent="center"
              backgroundColor={
                tabViewChannel === "info" ? "#24244A" : "#101027"
              }
              paddingVertical={5}
              borderRadius={0}
              borderTop={
                tabViewChannel === "info"
                  ? "3px solid #6869E7"
                  : "3px solid #101027"
              }
              position="relative"
            >
              <Button
                width="100%"
                height="100%"
                padding={5}
                className="molecule-button-noborder"
                onClick={() => {
                  setTabViewChannel("info");
                }}
              >
                INFO
              </Button>
            </Flex>
          </Flex>
        </Box>
        {tabViewChannel === "borrow" ? (
          <Box backgroundColor="#24244A" padding={20}>
            <Flex flexDirection="column" gap={1} backgroundColor="grey">
              <Box padding={20} backgroundColor="#24244A">
                <Flex>
                  <Flex flexDirection="column" gap={10} flex={1}>
                    <Flex flexDirection="column">
                      <Text>Total Collateral</Text>
                      <Text>$0</Text>
                    </Flex>
                    <Flex flexDirection="column">
                      <Text>Total Collateral</Text>
                      <Text>$0</Text>
                    </Flex>
                    <Flex flexDirection="column">
                      <Text>Total Collateral</Text>
                      <Text>$0</Text>
                    </Flex>
                  </Flex>
                  <Flex flexDirection="column" gap={10} flex={1}>
                    <Flex flexDirection="column">
                      <Text>Total Collateral</Text>
                      <Text>$0</Text>
                    </Flex>
                    <Flex flexDirection="column">
                      <Text>Total Collateral</Text>
                      <Text>$0</Text>
                    </Flex>
                    <Flex flexDirection="column">
                      <Text>Total Collateral</Text>
                      <Text>$0</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
              <Box backgroundColor="#24244A" position="relative" height="120px">
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  height={120}
                  gap={10}
                >
                  <Box position="absolute" top={30} width="100px" height="55px">
                    <TokenPair token1={coinPng} token2={coinPng} />
                  </Box>
                  <Flex flex={1}>
                    <Box />
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>VTX</Text>
                    <Text>STAKE VTX</Text>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>APR</Text>
                    <Text>4.2%</Text>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>STAKE VTX</Text>
                    <Text>0.0VTX</Text>
                  </Flex>
                  <Flex
                    flex={1}
                    flexDirection="column"
                    alignItems="space-between"
                    gap={5}
                  >
                    <Button padding={10} backgroundColor="#101027">
                      Deposit
                    </Button>
                    <Button padding={10} backgroundColor="#101027">
                      Leverage
                    </Button>
                  </Flex>
                  <Flex gap={5} flex={1} flexDirection="column">
                    <Button padding={10} backgroundColor="#101027">
                      Withdraw
                    </Button>
                    <Button padding={10} backgroundColor="#101027">
                      Deleverage
                    </Button>
                  </Flex>
                </Flex>
              </Box>
              <Box
                backgroundColor="#24244A"
                position="relative"
                paddingVertical={10}
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap={10}
                >
                  <Flex flex={1}>
                    <Icon src={coinPng} size="TOKEN" />
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>VTX</Text>
                    <Text>STAKE VTX</Text>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>APR</Text>
                    <Text>4.2%</Text>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>STAKE VTX</Text>
                    <Text>0.0VTX</Text>
                  </Flex>
                  <Flex
                    flex={1}
                    flexDirection="column"
                    alignItems="space-between"
                  >
                    <Button padding={10} backgroundColor="#101027">
                      Deposit
                    </Button>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Button padding={10} backgroundColor="#101027">
                      Withdraw
                    </Button>
                  </Flex>
                </Flex>
              </Box>
              <Box
                backgroundColor="#24244A"
                position="relative"
                paddingVertical={10}
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap={10}
                >
                  <Flex flex={1}>
                    <Icon src={coinPng} size="TOKEN" />
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>VTX</Text>
                    <Text>STAKE VTX</Text>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>APR</Text>
                    <Text>4.2%</Text>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>STAKE VTX</Text>
                    <Text>0.0VTX</Text>
                  </Flex>
                  <Flex
                    flex={1}
                    flexDirection="column"
                    alignItems="space-between"
                  >
                    <Button padding={10} backgroundColor="#101027">
                      Deposit
                    </Button>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Button padding={10} backgroundColor="#101027">
                      Withdraw
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ) : (
          <></>
        )}
        {tabViewChannel === "lend" ? (
          <Box backgroundColor="#24244A" padding={20}>
            <Flex flexDirection="column" gap={1} backgroundColor="grey">
              <Box padding={20} backgroundColor="#24244A">
                <Flex>
                  <Flex flexDirection="column" gap={10} flex={1}>
                    <Flex flexDirection="column">
                      <Text>Total Collateral</Text>
                      <Text>$0</Text>
                    </Flex>
                  </Flex>
                  <Flex flexDirection="column" gap={10} flex={1}>
                    <Flex flexDirection="column">
                      <Text>Total Collateral</Text>
                      <Text>$0</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
              <Box
                backgroundColor="#24244A"
                position="relative"
                paddingVertical={10}
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap={10}
                >
                  <Flex flex={1}>
                    <Icon src={coinPng} size="TOKEN" />
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>VTX</Text>
                    <Text>STAKE VTX</Text>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>APR</Text>
                    <Text>4.2%</Text>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>STAKE VTX</Text>
                    <Text>0.0VTX</Text>
                  </Flex>
                  <Flex
                    flex={1}
                    flexDirection="column"
                    alignItems="space-between"
                  >
                    <Button padding={10} backgroundColor="#101027">
                      Deposit
                    </Button>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Button padding={10} backgroundColor="#101027">
                      Withdraw
                    </Button>
                  </Flex>
                </Flex>
              </Box>
              <Box
                backgroundColor="#24244A"
                position="relative"
                paddingVertical={10}
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap={10}
                >
                  <Flex flex={1}>
                    <Icon src={coinPng} size="TOKEN" />
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>VTX</Text>
                    <Text>STAKE VTX</Text>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>APR</Text>
                    <Text>4.2%</Text>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Text>STAKE VTX</Text>
                    <Text>0.0VTX</Text>
                  </Flex>
                  <Flex
                    flex={1}
                    flexDirection="column"
                    alignItems="space-between"
                  >
                    <Button padding={10} backgroundColor="#101027">
                      Deposit
                    </Button>
                  </Flex>
                  <Flex flex={1} flexDirection="column">
                    <Button padding={10} backgroundColor="#101027">
                      Withdraw
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ) : (
          <></>
        )}
        {tabViewChannel === "info" ? (
          <Box backgroundColor="#24244A" padding={20}>
            <Flex flexDirection="column" gap={10}>
              <Flex gap={20}>
                <Text>VTX Contract:</Text>
                <Link>0x5817d4f0b62a59b17f75207da1848c2ce75e7af4</Link>
              </Flex>
              <Flex gap={20}>
                <Text>Staking Contract:</Text>
                <Link>0x5817d4f0b62a59b17f75207da1848c2ce75e7af4</Link>
              </Flex>
            </Flex>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default LendingPoolView;
