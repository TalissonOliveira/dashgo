import type { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState: {
    isSubmitting,
    errors
  } } = useForm<SignInFormData>()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            label="E-mail"
            type="email"
            error={errors.email}
            {...register('email', { required: 'Erro no email' })}
          />

          <Input
            label="Senha"
            type="password"
            error={errors.password}
            {...register('password', { required: 'Erro no password' })}
          />
        </Stack>

        <Button
          type="submit"
          mt={6}
          colorScheme="pink"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn
