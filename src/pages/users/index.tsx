import type { NextPage } from 'next'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react'

const UserList: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" bg="gray.800" p="8" borderRadius={8}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              bg="pink.500"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} width="8" color="gray.300">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                  {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Jane Doe</Text>
                    <Text fontSize="small" color="gray.300">janedoe@mail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>06 de Junho, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    bg="purple.500"
                    leftIcon={isWideVersion ? <Icon as={RiPencilLine} fontSize="16" /> : undefined}
                  >
                    {isWideVersion ? 'Editar' : <Icon as={RiPencilLine} fontSize="16" />}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Jane Doe</Text>
                    <Text fontSize="small" color="gray.300">janedoe@mail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>06 de Junho, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    bg="purple.500"
                    leftIcon={isWideVersion ? <Icon as={RiPencilLine} fontSize="16" /> : undefined}
                  >
                    {isWideVersion ? 'Editar' : <Icon as={RiPencilLine} fontSize="16" />}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Jane Doe</Text>
                    <Text fontSize="small" color="gray.300">janedoe@mail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>06 de Junho, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    bg="purple.500"
                    leftIcon={isWideVersion ? <Icon as={RiPencilLine} fontSize="16" /> : undefined}
                  >
                    {isWideVersion ? 'Editar' : <Icon as={RiPencilLine} fontSize="16" />}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList
