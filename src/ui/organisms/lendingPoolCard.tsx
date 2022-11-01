import React, { useState, useEffect } from "react";

import { Icon, Box, Flex, Grid, GridItem, Text, Process } from "../atoms";

import coinPng from "../../assets/icons/coin.png";

// import { Icons } from "../../assets";

import Dimension from "../../config/dimension";
import TokenPair from "../molecules/tokenPair";
import { useNavigate } from "react-router-dom";
import avaxLogo from "../../assets/icons/avax-logo.png";
import btcLogo from "../../assets/icons/btc-logo.png";
import avaxLogoT from "../../assets/icons/transparent-avax.png";
import arrow from "../../assets/icons/arrow.png";
import funnyArrow from "../../assets/images/arrow.png";

import astronaut from "../../assets/icons/astronaut.png";

// @ts-ignore
import BackdropFilter from "react-backdrop-filter";

// Ethers
import { ethers } from "ethers";

import Slider from "@mui/material/Slider";

// Pool
import { ALL_LENDING_POOLS } from "../../config/contracts";
import borrowableAbi from "../../abis/borrowable.json";
import collateralAbi from "../../abis/collateral.json";
import { useWeb3React } from "@web3-react/core";

const LendingPoolCard = () => {
  // Replace with props of poolId
  let pool = ALL_LENDING_POOLS[0];
  const context = useWeb3React();
  const { library } = context;

  // THIS IS PROBABLY BAD

  // Build borrowable and collateral ethers contract
  let borrowable = new ethers.Contract("0x3a8C6A042d6Df68c9143197aCeB185301979081D", borrowableAbi, library);
  let collateral = new ethers.Contract("0xb9EBEc450f4e5212bE27c3d4B7Cdd05D569Cfa42", collateralAbi, library);

  async function getSupply() { 
    let supply = collateral.totalSupply().then((response : any) => response);
    return supply;
  }

  // State variables from contracts
  const [totalSupply, setTotalSupply] = useState<string>("");

  console.log("HI");
  console.log(getSupply().then((response : any) => setTotalSupply((response / 1e18).toLocaleString())));



  const navigate = useNavigate();

  return (
    <Box
      className="organism-lendingpoolcard"
      borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
      position="relative"
      onClick={(e) => {
        navigate("/1");
      }}
    >
      <Box
        background="transparent linear-gradient(180deg, #E84142 0%, #742121 100%)"
        padding={Dimension.PADDING.MEDIUM}
        height="75px"
      >
        <Flex flexDirection="row" gap={Dimension.GAP.SMALL}>
          <Flex flexDirection="row" alignItems="center">
            <Box
              backgroundColor="rgba(255, 255, 255, 0.5)"
              borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
              paddingHorizontal={Dimension.PADDING.MEDIUM}
              paddingVertical={Dimension.PADDING.SMALL}
            >
              <Text
                center
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
                color="black"
              >
                {pool.dex}
              </Text>
            </Box>
          </Flex>

          <Flex flexDirection="row" alignItems="center">
            <Box
              backgroundColor="rgba(255, 255, 255, 0.5)"
              borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
              paddingHorizontal={Dimension.PADDING.MEDIUM}
              paddingVertical={Dimension.PADDING.SMALL}
            >
              <Text
                center
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
                color="black"
              >
                {pool.strategy}
              </Text>
            </Box>
          </Flex>

          <Flex flexDirection="row" alignItems="center">
            <Box
              backgroundColor="rgba(255, 255, 255, 0.5)"
              borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
              paddingHorizontal={Dimension.PADDING.MEDIUM}
              paddingVertical={Dimension.PADDING.SMALL}
            >
              <Text
                center
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
                color="black"
              >
                {pool.poolId}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* ------------------ CARD START --------------- */}

      <Box
        background="linear-gradient(180deg, rgba(1,1,1,0.6) 0%, rgba(13,13,31,0.4) 100%)"
        padding={Dimension.PADDING.MEDIUM}
      >
        <Box padding={Dimension.PADDING.SEMI_SMALL} />

        {/* ------------------ POOL NAME --------------- */}

        <Text fontSize="MEDIUM">{pool.poolName}</Text>

        <Box padding={Dimension.PADDING.SEMI_SMALL} />

        {/* ------------ PROJECTED USDC APY ------------ */}

        <Grid>
          <GridItem columns={12}>
            <Text color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
              {/* REPLACE with supply APR */}
              Total Projected USDC APR ⓘ
            </Text>
          </GridItem>
          <GridItem columns={12}>
            <Box paddingVertical={Dimension.PADDING.SMALL}>
              <Text color="whitesmoke" fontSize="MEDIUM" fontWeight="SICK">
                12.48%
              </Text>
            </Box>
          </GridItem>
        </Grid>
        <Box padding={Dimension.PADDING.EXTRA_SMALL} />

        {/* ------------ PROJECTED LP APY ------------ */}

        {/* ------------------ ASSET ------------------ */}

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                USDC
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontWeight="SICK"
                fontSize="EXTRA_SMALL"
              >
                Asset
              </Text>
            </GridItem>

            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                ETH/AVAX LP
              </Text>
            </GridItem>
          </Grid>
        </Box>

        {/* PRICE */}

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $1.00
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                Price
              </Text>
            </GridItem>

            <GridItem columns={4}>
              <Text
                center
                color="#16CEB9"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $4.58
              </Text>
            </GridItem>
          </Grid>
        </Box>

        {/* ------------ TOTAL BALANCE ------------ */}

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $9213
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                Total Balance
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $9,123
              </Text>
            </GridItem>
          </Grid>
        </Box>

        {/* ------------ TOTAL SUPPLY ------------ */}

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                19,200
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                Total Supply
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                {totalSupply}
              </Text>
            </GridItem>
          </Grid>
        </Box>

        {/* ------------ EXCHANGE RATE ------------ */}

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                1.025
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                Exchange Rate
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                1.43
              </Text>
            </GridItem>
          </Grid>
        </Box>

        {/* ------------ 24H VOLUME ------------ */}

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $2193
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                24h Volume
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $420
              </Text>
            </GridItem>
          </Grid>
        </Box>

        <Box padding={Dimension.PADDING.SMALL} />

        {/* ------------ UTILIZATION RATE ------------ */}

        <Flex flexDirection="column" justifyContent="space-between">
          <Flex justifyContent="space-between">
            <Text color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
              Current USDC Borrows
            </Text>
            <Text color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
              $5,238
            </Text>
          </Flex>
          <Box paddingVertical={8}>
            <Process value={0.4} borderRadius="20px" />
          </Box>
          <Flex justifyContent="space-between">
            <Text color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
              Utilization Rate
            </Text>

            <Text color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
              75%
            </Text>
          </Flex>
        </Flex>

        {/* ------------ LEVERAGED LP APR ------------ */}

        <Box padding={Dimension.PADDING.EXTRA_SMALL} />

        <Box
          paddingVertical={Dimension.PADDING.SMALL}
          borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
          onClick={(e) => e.stopPropagation()}
        >
          <Box paddingVertical={Dimension.PADDING.SMALL}>
            <Text center fontWeight="SICK" fontSize="EXTRA_SMALL">
              Total Projected LP APR ⓘ
            </Text>
          </Box>
          <Box paddingVertical={Dimension.PADDING.SMALL}>
            <Text color="whitesmoke" fontSize="MEDIUM" fontWeight="SICK" center>
              4.12%
            </Text>
          </Box>
        </Box>

        <Slider
          defaultValue={1}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={13}
          onClick={(e) => e.stopPropagation()}
        />
      </Box>

      <Box backgroundColor="#0d0d1f" padding={Dimension.PADDING.MEDIUM}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="EXTRA_SMALL" fontWeight="SICK">
            Your Position:
          </Text>
          <Text fontWeight="SICK">--</Text>
        </Flex>
      </Box>

      <Box
        position="absolute"
        top={80}
        paddingHorizontal={Dimension.PADDING.MEDIUM}
      >
        <Flex justifyContent="flex-start">
          <TokenPair token1={btcLogo} token2={avaxLogo} />
        </Flex>
      </Box>
    </Box>
  );
};

export default LendingPoolCard;
