import { RiSearchLine } from 'react-icons/ri'
import { Flex, Icon, Input } from '@chakra-ui/react'

export function SearchBox() {
  return (
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
  )
}
