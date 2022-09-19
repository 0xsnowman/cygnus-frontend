import React, { useState } from "react";

import { Box, Text, Flex, Process } from "../atoms";

import { Link } from "../molecules";

import leftArrowSvg from "../../assets/images/left.svg";
import rightArrowSvg from "../../assets/images/right.svg";

const CarouselSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <Box
      className="organism-carouselslider"
      backgroundColor="#121219"
      borderRadius={10}
    >
      <Box height="200px" backgroundColor="#1B1B21"></Box>
      <Flex flexDirection="column" gap={20}>
        <Box position="relative" height="150px" width="100%">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return (
              <Box
                padding={20}
                opacity={index === currentIndex ? 1 : 0}
                transition={0.4}
                position="absolute"
                left={
                  700 * index - currentIndex * 700
                }
              >
                <Flex flexDirection="column" gap={20}>
                  <Box paddingVertical={5}>
                    <Text>VAULT RECEIVES DEPOSITS</Text>
                  </Box>
                  <Box>
                    <Text color="#999" lineHeight={1.3}>
                      {`The vault receives ETH from depositors and invests 100% of its ETH - the balance in its weekly options strategy. The current selected Index is ${currentIndex +
                        1}.`}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </Box>
        <Box padding={20}>
          <Flex gap={20} alignItems="center" justifyContent="center">
            <Box
              backgroundColor="#1B1B21"
              padding={10}
              borderRadius={30}
              onClick={() => {
                if (currentIndex > 0) {
                  setCurrentIndex(currentIndex - 1);
                }
              }}
            >
              <Link iconSrc={leftArrowSvg} />
            </Box>
            <Flex gap={0} alignItems="center" justifyContent="space-around">
              {[0, 1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                  <Flex flex={1}>
                    <Box
                      position="relative"
                      paddingVertical={30}
                      paddingHorizontal={7.5}
                      onClick={() => {
                        setCurrentIndex(index);
                      }}
                    >
                      <Box width="10px">
                        <Process
                          value={index === currentIndex ? 1 : 0}
                          transition={0.2}
                        />
                      </Box>
                    </Box>
                  </Flex>
                );
              })}
            </Flex>
            <Box
              backgroundColor="#1B1B21"
              padding={10}
              borderRadius={30}
              onClick={() => {
                if (currentIndex < 6) {
                  setCurrentIndex(currentIndex + 1);
                }
              }}
            >
              <Link iconSrc={rightArrowSvg} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CarouselSlider;
