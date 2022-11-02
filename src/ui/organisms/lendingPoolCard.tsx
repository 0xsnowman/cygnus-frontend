import React, { useState, useEffect } from 'react';
import { Box, Flex, Grid, GridItem, Text, Process } from '../atoms';
import { useNavigate } from 'react-router-dom';

// import { Icons } from "../../assets";
import Skeleton from '@mui/material/Skeleton';


import Dimension from '../../config/dimension';
import TokenPair from '../molecules/tokenPair';
import avaxLogo from '../../assets/icons/avax-logo.png';
import traderJoe from '../../assets/dexes/traderjoe.png';

// Ethers
import { ethers } from 'ethers';

// UI
import { Tooltip, Slider, IconButton } from '@mui/material';

// Pools
import { ALL_LENDING_POOLS } from '../../config/contracts';
import { useWeb3React } from '@web3-react/core';

// Abis
import borrowableAbi from '../../abis/borrowable.json';
import collateralAbi from '../../abis/collateral.json';

const LendingPoolCard = ({ shuttle, provider }: any) => {
  // Replace with props of shuttleId
  const pool = ALL_LENDING_POOLS[shuttle.shuttleId];

  const context = useWeb3React();
  const { account } = context;

  // Build borrowable and collateral ethers contract
  const borrowable = new ethers.Contract(shuttle.borrowable, borrowableAbi, provider);
  const collateral = new ethers.Contract(shuttle.collateral, collateralAbi, provider);

  // State variables from contracts
  const [totalSupply, setTotalSupply] = useState<string[]>(['']);
  const [totalBalance, setTotalBalance] = useState<string[]>(['']);
  const [exchangeRate, setExchangeRate] = useState<string[]>(['']);
  const [utilizationRate, setUtilizationRate] = useState<string>('');
  const [totalBorrows, setTotalBorrows] = useState<string>('');
  const [lpPrice, setLpPrice] = useState<string>('');

  // User Holdings of pool tokens
  const [cygLPBal, setCygLPBal] = useState<string>('');

  /**
   *  @notice Total Supply of CygUSDC and CygLP
   */
  async function getSupply() {
    const supplyB = ((await borrowable.totalSupply()) / 1e6).toLocaleString(undefined, { minimumFractionDigits: 3 });
    const supplyC = ((await collateral.totalSupply()) / 1e18).toLocaleString(undefined, { minimumFractionDigits: 3 });
    setTotalSupply([supplyB, supplyC]);
  }

  /**
   *  @notice Total assets of USDC and LP Tokens in Cygnus contracts
   */
  async function getTotalBalance() {
    const totalBalanceB = ((await borrowable.totalBalance()) / 1e6).toLocaleString(undefined, { minimumFractionDigits: 2 });
    const totalBalanceC = ((await collateral.totalBalance()) / 1e18).toLocaleString(undefined, { minimumFractionDigits: 2 });
    setTotalBalance([totalBalanceB, totalBalanceC]);
  }

  /**
   *  @notice Current exchange rate between asset and pool token
   */
  async function getExchangeRate() {
    const exchangeB = ((await borrowable.exchangeRateStored()) / 1e18).toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });
    const exchangeC = ((await collateral.exchangeRate()) / 1e18).toLocaleString(undefined, {
      minimumFractionDigits: 4,
    });
    setExchangeRate([exchangeB, exchangeC]);
  }

  /**
   *  @notice Current Utilization Rate for this pool
   */
  async function getUtilizationRate() {
    const util = ((await borrowable.utilizationRate()) / 1e16).toLocaleString(undefined, { minimumFractionDigits: 2 });
    setUtilizationRate(util)
  }

  /**
   *  @notice Current LP Token Price for this pool
   */
  async function getLPTokenPrice() { 
    const price = ((await collateral.getLPTokenPrice()) / 1e6).toLocaleString();
    setLpPrice(price);
  }

  /**
   *  @notice Total Borrows stored in Borrowable contract
   */
  async function getTotalBorrows() { 
    const borrows = ((await borrowable.totalBorrows()) / 1e6).toLocaleString();
    setTotalBorrows(borrows);
  }

  /**
   *  @notice When component mounts
   */
  useEffect(() => {
    getSupply();
    getTotalBalance();
    getExchangeRate();
    getUtilizationRate()
    getLPTokenPrice();
    getTotalBorrows();
  }, []);

  async function getCygLPBal() {
    const cygLPBal = collateral.balanceOf(account).then((response: any) => response);
    return cygLPBal;
  }

  /**
   *  @notice Users CYGLP Balance
   */
  if (account !== undefined) {
    getCygLPBal().then((response: any) => {
      setCygLPBal((response / 1e18).toLocaleString() + ' CygLP');
    });
  }

  const navigate = useNavigate();

  return (
    <Box
      className="organism-lendingpoolcard"
      borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
      position="relative"
      onClick={(e) => {
        navigate(`/${pool.shuttleId}/${pool.orbiterId}/${pool.lpToken}`);
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
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK" color="black">
                {shuttle.orbiterName}
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
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK" color="black">
                {shuttle.strategy}
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
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK" color="black">
                {'ID: ' + shuttle.shuttleId}
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
            <Flex>
              <Text color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
                {/* REPLACE with supply APR */}
                Total Projected USDC APR ⓘ
              </Text>
            </Flex>
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
              <Text center color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
                USDC
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text center color="#A8A8A8" fontWeight="SICK" fontSize="EXTRA_SMALL">
                Asset
              </Text>
            </GridItem>

            <GridItem columns={4}>
              <Text center color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
                ETH/AVAX LP
              </Text>
            </GridItem>
          </Grid>
        </Box>

        {/* PRICE */}

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text center color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
                $1.00
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text center color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
                Price
              </Text>
            </GridItem>

            <GridItem columns={4}>
              <Text center color="#16CEB9" fontSize="EXTRA_SMALL" fontWeight="SICK">
                {'$' + lpPrice}
              </Text>
            </GridItem>
          </Grid>
        </Box>

        {/* ------------ TOTAL BALANCE ------------ */}

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text center color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
                {'$' + totalBalance[0]}
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text center color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
                Total Balance
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text center color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
                {totalBalance[1]}
              </Text>
            </GridItem>
          </Grid>
        </Box>

        {/* ------------ TOTAL SUPPLY ------------ */}

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text center color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
                {totalSupply[0]}
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text center color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
                Total Supply
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text center color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
                {totalSupply[1]}
              </Text>
            </GridItem>
          </Grid>
        </Box>

        {/* ------------ EXCHANGE RATE ------------ */}

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text center color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
                {exchangeRate[0]}
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text center color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
                Exchange Rate
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text center color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
                {exchangeRate[1]}
              </Text>
            </GridItem>
          </Grid>
        </Box>

        {/* ------------ 24H VOLUME ------------ */}

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text center color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
                $2193
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text center color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
                24h Volume
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text center color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
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
              {'$' + totalBorrows}
            </Text>
          </Flex>
          <Box paddingVertical={8}>
            <Process
              value={Number(totalBorrows) / (Number(totalBorrows) + Number(totalBalance[0]))}
              borderRadius="20px"
            />
          </Box>
          <Flex justifyContent="space-between">
            <Text color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
              Utilization Rate
            </Text>

            <Text color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
              {utilizationRate + '%'}
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
          <Text fontWeight="SICK">{cygLPBal}</Text>
        </Flex>
      </Box>

      <Box position="absolute" top={80} paddingHorizontal={Dimension.PADDING.MEDIUM}>
        <Flex justifyContent="flex-start">
          <TokenPair token1={pool.token0img} token2={pool.token1img} />
        </Flex>
      </Box>

     </Box>
  );
};

export default LendingPoolCard;
