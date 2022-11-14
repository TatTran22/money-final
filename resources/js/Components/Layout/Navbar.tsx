import {
  Box,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Icon,
  Avatar,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Heading,
  Text,
  //   useToast,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { DarkModeSwitch } from '@/Components/Layout/DarkModeSwitch'
import { Logo } from '../Auth/Logo'
import { navItems } from '@/data/layout'
import { Link as InertiaLink, useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { FiLogOut } from 'react-icons/fi'

export default function NavBar({ user, navChildren }: { user: User; navChildren?: JSX.Element | string }) {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  const { post, processing } = useForm()

  return (
    <Box as="section" pb={{ base: '4', md: '6' }}>
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <Flex justify="space-between" flex="1" alignItems="center">
                <ButtonGroup variant="link" spacing="8">
                  {navItems.map((item, index) => (
                    <InertiaLink href={item.href} key={index}>
                      <Button>{item.title}</Button>
                    </InertiaLink>
                  ))}
                </ButtonGroup>
                <HStack>
                  <DarkModeSwitch />
                  <Spacer></Spacer>
                  <Menu autoSelect={false}>
                    <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                      <Avatar size="md" name={`${user.first_name} ${user.last_name}`} />
                    </MenuButton>
                    <MenuList alignItems={'center'} px="4">
                      <Center py="2">
                        <Avatar size={'xl'} name={`${user.first_name} ${user.last_name}`} />
                      </Center>
                      <Center>
                        <Text fontSize="lg" fontWeight="semibold">{`${user.first_name} ${user.last_name}`}</Text>
                      </Center>
                      <MenuDivider />
                      <MenuItem
                        onClick={() => {
                          post(route('logout'))
                        }}
                        isDisabled={processing}
                        icon={<Icon as={FiLogOut} />}
                      >
                        Log Out
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              </Flex>
            ) : (
              <IconButton variant="ghost" icon={<FiMenu fontSize="1.25rem" />} aria-label="Open Menu" />
            )}
          </HStack>
        </Container>
      </Box>
      <Box bgColor={useColorModeValue('gray.100', 'gray.800')}>
        <Container py={{ base: '4', lg: '5' }}>
          <Heading size="sm" color="brand.500" fontWeight="bold">
            {typeof navChildren === 'string' ? navChildren : <Box as="div">{navChildren}</Box>}
          </Heading>
        </Container>
      </Box>
    </Box>
  )
}
