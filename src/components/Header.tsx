import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" color="pink.500" ml={0.5}>.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="4"
        ml="6"
        bg="gray.800"
        color="gray.200"
        maxWidth={400}
        alignSelf="center"
        position="relative"
        borderRadius="full"
      >
        <Input
          variant="unstyled"
          px="4"
          mr="4"
          color="gray.50"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400'}}
        />
        <Icon as={RiSearchLine} fontSize="20" alignSelf="center" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderColor="gray.700"
          borderRightWidth={1}
        >
          <Icon as={RiNotificationLine} fontSize="20" cursor="pointer" />
          <Icon as={RiUserAddLine} fontSize="20" cursor="pointer" />
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Jane Doe</Text>
            <Text color="gray.300" fontSize="small">
              janedoe@mail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Jane Doe"
            src="https://ik.imagekit.io/imagens/30274736.jpg"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
