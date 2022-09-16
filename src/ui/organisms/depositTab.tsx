import React, { useState } from "react";

import { Box, Flex, Text, Input } from "../atoms";

import { Button } from "../molecules";

import { Switch } from "../organisms";

const DepositTab = () => {
  const [tabViewChannel, setTabViewChannel] = useState("borrow");

  return (
    <Box className="organism-deposittab" borderRadius={12}>
      <Box height="100%">
        <Box backgroundColor="#121219">
          <Flex>
            <Flex
              flex={1}
              justifyContent="center"
              backgroundColor={
                tabViewChannel === "borrow" ? "#121219" : "#1B1B21"
              }
              paddingVertical={5}
              borderRadius={0}
              position="relative"
            >
              <Button
                width="100%"
                height="100%"
                padding={20}
                className="molecule-button-noborder"
                onClick={() => {
                  setTabViewChannel("borrow");
                }}
              >
                DEPOSIT
              </Button>
            </Flex>
            <Flex
              flex={1}
              justifyContent="center"
              backgroundColor={
                tabViewChannel === "lend" ? "#121219" : "#1B1B21"
              }
              paddingVertical={5}
              borderRadius={0}
              position="relative"
            >
              <Button
                width="100%"
                height="100%"
                padding={20}
                className="molecule-button-noborder"
                onClick={() => {
                  setTabViewChannel("lend");
                }}
              >
                WITHDRAW
              </Button>
            </Flex>
          </Flex>
        </Box>
        {tabViewChannel === "borrow" ? (
          <Box backgroundColor="#121219" padding={20}>
            <Flex flexDirection="column" gap={1} backgroundColor="grey">
              <Box padding={20} backgroundColor="#121219">
                <Flex flexDirection="column" gap={30}>
                  <Text color="#AAA">AMOUNT (ETH)</Text>
                  <Box
                    borderRadius={10}
                    borderWidth={2}
                    borderColor="white"
                    paddingHorizontal={15}
                    paddingVertical={2}
                    backgroundColor="#1B1B21"
                  >
                    <Flex alignItems="center" justifyContent="space-between">
                      <Input
                        width="70%"
                        height="60px"
                        fontSize="25px"
                        placeholder="Enter An Amount"
                      />
                      <Box
                        backgroundColor="#121219"
                        borderRadius={5}
                        borderColor="#121219"
                        borderWidth={2}
                        paddingVertical={5}
                        paddingHorizontal={10}
                      >
                        <Text center color="#999">MAX</Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Flex justifyContent="space-between">
                    <Text color="#AAA">Wallet Balance</Text>
                    <Text>0 ETH</Text>
                  </Flex>
                  <Button backgroundColor="#161822" color="#46639B">CONNECT WALLET</Button>
                  <Text color="#46639B">
                    Your deposit will be deployed in the vault’s weekly strategy
                    on Friday at 11am UTC
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ) : (
          <></>
        )}
        {tabViewChannel === "lend" ? (
          <Box backgroundColor="#121219" padding={20}>
            <Flex flexDirection="column" gap={1} backgroundColor="grey">
            <Box padding={20} backgroundColor="#121219">
                <Flex flexDirection="column" gap={30}>
                  <Switch />
                  <Text color="#AAA">AMOUNT (ETH)</Text>
                  <Box
                    borderRadius={10}
                    borderWidth={2}
                    borderColor="white"
                    paddingHorizontal={15}
                    paddingVertical={2}
                    backgroundColor="#1B1B21"
                  >
                    <Flex alignItems="center" justifyContent="space-between">
                      <Input
                        width="70%"
                        height="60px"
                        fontSize="25px"
                        placeholder="Enter An Amount"
                      />
                      <Box
                        backgroundColor="#121219"
                        borderRadius={5}
                        borderColor="#121219"
                        borderWidth={2}
                        paddingVertical={5}
                        paddingHorizontal={10}
                      >
                        <Text center color="#999">MAX</Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Flex justifyContent="space-between">
                    <Text color="#AAA">Instant Withdraw Limit</Text>
                    <Text>0 ETH</Text>
                  </Flex>
                  <Button backgroundColor="#161822" color="#46639B">WITHDRAW ETH</Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default DepositTab;
