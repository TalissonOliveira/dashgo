import Link from 'next/link'
import { ElementType } from 'react'
import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  href: string
  children: string
}

export function NavLink({ icon, href, children, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}
