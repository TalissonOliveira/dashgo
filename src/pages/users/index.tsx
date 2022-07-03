import type { NextPage } from 'next'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { useUsers } from '../../services/hooks/useUsers'
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
  Spinner,
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
  const { data, isLoading, isFetching, error } = useUsers()

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
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>
            <Link href={"/users/create"} passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                bg="pink.500"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
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
                  {data?.map((user: any) => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="small" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
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
                  ))}
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={200}
                currentPage={5}
                onPagechange={() => {}}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList
