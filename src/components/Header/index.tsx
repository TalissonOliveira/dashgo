import { RiMenuLine } from 'react-icons/ri'
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { NotificationsNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { Profile } from './Profile'
import { Logo } from './Logo'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} verticalAlign="middle" />}
          variant="unstyled"
          fontSize="24"
          mr="2"
          onClick={onOpen}
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
