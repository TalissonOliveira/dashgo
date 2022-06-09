import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jane Doe</Text>
          <Text color="gray.300" fontSize="small">
            janedoe@mail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Jane Doe"
        src="https://ik.imagekit.io/imagens/30274736.jpg"
      />
    </Flex>
  )
}
