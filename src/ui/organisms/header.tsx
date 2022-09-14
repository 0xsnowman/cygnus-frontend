import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Flex, Container, Logo, Box } from "../atoms";
import { Button, Link } from "../molecules";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

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
        supportedChainIds: [43113, 43114],
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
            <Logo />
            <Button
              backgroundColor="#08161A"
              color="#15C7B3"
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
                : "Connect Wallet"}
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
                gap={30}
                height="100%"
              >
                <Link
                  onClick={() => {
                    navigate("/stake");
                  }}
                >
                  STAKING
                </Link>
                <Link>PORTFOLIO</Link>
                <Link>GOVERNANCE</Link>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
