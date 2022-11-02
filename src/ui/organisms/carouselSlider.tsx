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
        <Box padding={20}>
          <Flex flexDirection="column" gap={20}>
            <Box paddingVertical={5}>
              <Text>VAULT RECEIVES DEPOSITS</Text>
            </Box>
            <Text color="#999">
              {`The vault receives ETH from depositors and invests 100% of its ETH
              balance in its weekly options strategy. The current selected Index is ${currentIndex + 1}.`}
            </Text>
          </Flex>
        </Box>
        <Box padding={20}>
          <Flex gap={20} alignItems="center" justifyContent="center">
            <Box backgroundColor="#1B1B21" padding={10} borderRadius={30} onClick={() => {
                if (currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1);
                }
            }}>
                <Link iconSrc={leftArrowSvg} />
            </Box>
            <Flex gap={0}>
              {[0, 1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                    <Box
                      key={index}
                      paddingVertical={30}
                      paddingHorizontal={7.5}
                      onClick={() => {
                        setCurrentIndex(index);
                      }}
                    >
                      <Box width="25px">
                        <Process value={index === currentIndex ? 1 : 0} transition={0.2} />
                      </Box>
                    </Box>
                  );
              })}
            </Flex>
            <Box backgroundColor="#1B1B21" padding={10} borderRadius={30} onClick={() => {
                if (currentIndex < 6) {
                    setCurrentIndex(currentIndex + 1);
                }
            }}>
                <Link iconSrc={rightArrowSvg} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CarouselSlider;
