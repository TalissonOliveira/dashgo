import type { NextPage } from 'next'
import Link from 'next/link'
import * as Yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'
import { useMutation } from 'react-query'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'
import { useRouter } from 'next/router'

interface CreateUserFormData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = Yup.object({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: Yup.string().oneOf([
    null,
    Yup.ref('password')
  ], 'As senhas devem ser iguais')
})

const CreateUser: NextPage = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: {
    isSubmitting,
    errors
  } } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('/users', {
      user: {
        ...user,
        created_at: new Date()
      }
    })

    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values)
    router.push('/users')
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box
          as={"form"}
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          bg="gray.800"
          p={["6", "8"]}
          borderRadius={8}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack>
            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]}>
              <Input
                label="Nome completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]}>
              <Input
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />
              <Input
                type="password"
                label="Confirmação da senha"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href={"/users"} passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" isLoading={isSubmitting} colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser
