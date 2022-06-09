import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
import { HStack, Icon } from '@chakra-ui/react'

export function NotificationsNav() {
  return (
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
  )
}
