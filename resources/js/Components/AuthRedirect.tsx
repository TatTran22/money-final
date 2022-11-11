import { Box, Flex, Spacer, Text, Divider } from '@chakra-ui/react'
import { Link } from '@inertiajs/inertia-react'

type AuthRedirectProps = {
  text: string
  hrefText: string
  href: string
}

const AuthRedirect: React.FC<AuthRedirectProps> = ({ text, hrefText, href }) => {
  return (
    <Box>
      <Flex flexDir="column" marginTop={4}>
        <Divider orientation="horizontal" />
        <Flex flexDir="row" marginTop={4} justify="center">
          <Text>
            {`${text} `}
            <Link href={href}>
              <Text color="brand.400" as="u">
                {hrefText}
              </Text>
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default AuthRedirect
