import React, { useState } from "react";

import { Box, Flex, Text } from "../atoms";

const Switch = ({}) => {
  const [switchValue, setSwitchValue] = useState<"Standard" | "Instant">(
    "Standard"
  );

  return (
    <Box
      className="organism-switch"
      backgroundColor="#1B1B21"
      borderRadius={30}
      onClick={() => {
        setSwitchValue(switchValue === "Standard" ? "Instant" : "Standard");
      }}
    >
      <Box
        borderRadius={30}
        borderColor="#0000"
        padding={20}
        position="relative"
      >
        <Flex gap={20}>
          <Flex flex={1} justifyContent="center">
            <Text>Standard</Text>
          </Flex>
          <Flex flex={1} justifyContent="center">
            <Text>Instant</Text>
          </Flex>
        </Flex>
        <Box
          borderRadius={30}
          borderColor="#16CEB9 !important"
          backgroundColor="#10988750"
          position="absolute"
          width="50%"
          height="95%"
          top={0}
          left={switchValue === "Standard" ? 0 : "50%"}
        ></Box>
      </Box>
    </Box>
  );
};

export default Switch;
