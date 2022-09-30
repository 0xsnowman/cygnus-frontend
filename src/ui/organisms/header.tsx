import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Flex, Container, Logo, Box } from "../atoms";
import { Button, Link } from "../molecules";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import EthLogo from "../../assets/icons/eth-logo.png";
import { Icon } from "../atoms"

const Header = () => {
  const context = useWeb3React();
  const { library, chainId, account, activate, deactivate, active, error } =
    context;
  // const [ethBalance, setETHBalance] = useState();

  const metamaskConnect = () => {
    if (active) {
      deactivate();
    } else {
      const metamaskConnector = new InjectedConnector({
        // Localhost 31337
        supportedChainIds: [43113, 43114, 31337],
      });
      activate(metamaskConnector);
    }
  };

  useEffect(() => {
    const getETHBalance = () => {
      library
        .getBalance(account)
        .then((balance: any) => {
          // setETHBalance(balance);
        })
        .catch((err: any) => {
          // setETHBalance(undefined);
        });
    };

    if (library && active && !error) {
      getETHBalance();
    } else {
      // setETHBalance(undefined);
    }
  }, [active, chainId, error, library, account]);

  const navigate = useNavigate();
  return (
    <Box
      className="organism-header"
      paddingVertical={20}
      position="fixed"
      width="100%"
    >
      <Box position="relative">
        <Container>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Logo />
            </Box>
            <Button
              backgroundColor="#111"
              color="whitesmoke"
              onClick={() => {
                metamaskConnect();
              }}
            >
              {error instanceof UnsupportedChainIdError
                ? "Wrong NET"
                : account
                  ? `${account.substring(0, 6)}...${account.substring(
                    account.length - 4
                  )}`
                : "Connect"}
            </Button>
            <Box
              position="absolute"
              left={0}
              top={0}
              width="100%"
              height="100%"
            >
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                gap={40}
                height="100%"
              >
                <Link
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Terminal
                </Link>
                <Link>Dashboard</Link>
                <Link
                  onClick={() => {
                    navigate("/stake");
                  }}
                >
                  xCYG
                </Link>
                <Link>Governance</Link>
                <Link>Docs</Link>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
