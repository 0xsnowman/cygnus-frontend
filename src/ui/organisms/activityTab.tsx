import React, { useState } from "react";

import { Box, Text, Grid, Process, GridItem, Icon, Flex } from "../atoms";

import { Link } from "../molecules";

import Dimension from "../../config/dimension";

import coinPng from "../../assets/icons/coin.png";
import logoPng from "../../assets/icons/logo.png";

const ActivityTab = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(1);
  const [totalItemCount, setTotalItemCount] = useState<number>(36);
  const [itemCountPerPage, setitemCountPerPage] = useState<number>(4);
  return (
    <Box className="organism-activitytab">
      <Box height="20px" />
      <Box paddingVertical={30}>
        <Flex>
          <Text>VAULT ACTIVITIES</Text>
        </Flex>
      </Box>
      <Box padding={20}>
        <Grid gap={Dimension.GAP.LARGE}>
          <GridItem columns={3}>
            <Text>Action</Text>
          </GridItem>
          <GridItem columns={3}>
            <Text>Contract</Text>
          </GridItem>
          <GridItem columns={3}>
            <Flex justifyContent="flex-end">
              <Text>Quantity</Text>
            </Flex>
          </GridItem>
          <GridItem columns={3}>
            <Flex justifyContent="flex-end">
              <Text>Yeild</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Flex flexDirection="column" gap={20}>
        <Box backgroundColor="#1B1B21" padding={20} borderRadius={5}>
          <Grid gap={Dimension.GAP.LARGE}>
            <GridItem columns={3}>
              <Flex gap={20} alignItems="center">
                <Icon src={coinPng} size="LARGE" />
                <Flex flexDirection="column" gap={10}>
                  <Text>SOLD CONTRACTS</Text>
                  <Text fontSize="EXTRA_SMALL" color="#999">
                    7 days ago
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex flexDirection="column" gap={10}>
                <Text>O-WETH 9/16 CALL</Text>
                <Text fontSize="EXTRA_SMALL" color="#999">
                  {`Strike 2200 : Page ${currentPageIndex + 1}`}
                </Text>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex alignItems="center" height="100%" justifyContent="flex-end">
                <Text>6,832.064</Text>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex justifyContent="flex-end">
                <Flex flexDirection="column" gap={10}>
                  <Text>+29.445383 ETH</Text>
                  <Text fontSize="EXTRA_SMALL" color="#999">
                    +5336,453.28
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box backgroundColor="#1B1B21" padding={20} borderRadius={5}>
          <Grid gap={Dimension.GAP.LARGE}>
            <GridItem columns={3}>
              <Flex gap={20} alignItems="center">
                <Icon src={logoPng} size="LARGE" />
                <Flex flexDirection="column" gap={10}>
                  <Text>MINTED CONTRACTS</Text>
                  <Text fontSize="EXTRA_SMALL" color="#999">
                    7 days ago
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex flexDirection="column" gap={10}>
                <Text>O-WETH 9/16 CALL</Text>
                <Text fontSize="EXTRA_SMALL" color="#999">
                  {`Strike 2200 : Page ${currentPageIndex + 1}`}
                </Text>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex alignItems="center" height="100%" justifyContent="flex-end">
                <Text>6,832.064</Text>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex alignItems="center" height="100%" justifyContent="flex-end">
                <Flex flexDirection="column" gap={10}>
                  <Text>-</Text>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box backgroundColor="#1B1B21" padding={20} borderRadius={5}>
          <Grid gap={Dimension.GAP.LARGE}>
            <GridItem columns={3}>
              <Flex gap={20} alignItems="center">
                <Icon src={coinPng} size="LARGE" />
                <Flex flexDirection="column" gap={10}>
                  <Text>SOLD CONTRACTS</Text>
                  <Text fontSize="EXTRA_SMALL" color="#999">
                    7 days ago
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex flexDirection="column" gap={10}>
                <Text>O-WETH 9/16 CALL</Text>
                <Text fontSize="EXTRA_SMALL" color="#999">
                  {`Strike 2200 : Page ${currentPageIndex + 1}`}
                </Text>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex alignItems="center" height="100%" justifyContent="flex-end">
                <Text>6,832.064</Text>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex justifyContent="flex-end">
                <Flex flexDirection="column" gap={10}>
                  <Text>+29.445383 ETH</Text>
                  <Text fontSize="EXTRA_SMALL" color="#999">
                    +5336,453.28
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box backgroundColor="#1B1B21" padding={20} borderRadius={5}>
          <Grid gap={Dimension.GAP.LARGE}>
            <GridItem columns={3}>
              <Flex gap={20} alignItems="center">
                <Icon src={logoPng} size="LARGE" />
                <Flex flexDirection="column" gap={10}>
                  <Text>MINTED CONTRACTS</Text>
                  <Text fontSize="EXTRA_SMALL" color="#999">
                    7 days ago
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex flexDirection="column" gap={10}>
                <Text>O-WETH 9/16 CALL</Text>
                <Text fontSize="EXTRA_SMALL" color="#999">
                  {`Strike 2200 : Page ${currentPageIndex + 1}`}
                </Text>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex alignItems="center" height="100%" justifyContent="flex-end">
                <Text>6,832.064</Text>
              </Flex>
            </GridItem>
            <GridItem columns={3}>
              <Flex alignItems="center" height="100%" justifyContent="flex-end">
                <Flex flexDirection="column" gap={10}>
                  <Text>-</Text>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        gap={40}
        paddingVertical={40}
        justifyContent="center"
      >
        <Box
          onClick={() => {
            if (currentPageIndex > 0) {
              setCurrentPageIndex(currentPageIndex - 1);
            }
          }}
        >
          <Link iconSrc={coinPng} />
        </Box>
        <Flex gap={7} alignItems="center">
          <Text fontSize="EXTRA_SMALL">01</Text>
          <Box width="100px">
            <Process value={0.1 * (currentPageIndex + 1)} />
          </Box>
          <Text fontSize="EXTRA_SMALL">10</Text>
        </Flex>
        <Box
          onClick={() => {
            if ((currentPageIndex + 1) * itemCountPerPage < totalItemCount) {
              setCurrentPageIndex(currentPageIndex + 1);
            }
          }}
        >
          <Link iconSrc={coinPng} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ActivityTab;
