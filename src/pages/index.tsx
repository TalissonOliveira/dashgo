import type { NextPage } from 'next'
import * as Yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

interface SignInFormData {
  email: string
  password: string
}

const signInFormSchema = Yup.object({
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória')
})

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState: {
    isSubmitting,
    errors
  } } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

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
            {...register('email')}
          />

          <Input
            label="Senha"
            type="password"
            error={errors.password}
            {...register('password')}
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
