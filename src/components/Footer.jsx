import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} px={'4'} w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
            Subscribe to get Updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderRight={['none', '1px solid white']}
          borderLeft={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights reserved 2024</Text>
        </VStack>
        <VStack w={'full'}>
            <Heading size={"md"} textTransform={"uppercase"}>
                Social Media
            </Heading>
            <Button variant={"link"} colorScheme='purple'>
              <a target={'blank'}href="https://youtube.com">
              Youtube</a>
            </Button>
            <Button variant={"link"} colorScheme='purple'>
              <a target='blank' href="https://instagram.com">
              Instagram</a>
            </Button>
            <Button variant={"link"} colorScheme='purple'>
              <a target='blank' href="https://github.com">
              Github</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
