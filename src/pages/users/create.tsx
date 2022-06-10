import type { NextPage } from 'next'
import Link from 'next/link'
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'

const CreateUser: NextPage = () => {
  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" bg="gray.800" p={["6", "8"]} borderRadius={8}>
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack>
            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]}>
              <Input name="name" label="Nome completo" />
              <Input name="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]}>
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password" label="Confirmação da senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href={"/users"} passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser
