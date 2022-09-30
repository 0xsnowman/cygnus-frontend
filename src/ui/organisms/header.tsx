import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Flex, Container, Logo, Box } from "../atoms";
import { Button, Link } from "../molecules";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { Icon } from "../atoms";
import Dimension from "../../config/dimension";

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
      position="fixed"
      width="100%"
    >
      <Box position="relative">
        <Container>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            paddingVertical={20}
          >
            <Box padding={Dimension.PADDING.SMALL}></Box>
            <Box left={0} top={0} width="100%" height="100%">
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                gap={30}
                height="100%"
              >
                <Logo />
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
                  CYG Vault
                </Link>
                <Link>Governance</Link>
                <Flex alignItems="center" gap={4}>
                  <Link>Docs</Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </Flex>
              </Flex>
            </Box>
            <Button
              backgroundColor="#111"
              color="whitesmoke"
              width="200px"
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
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
export default Header;
