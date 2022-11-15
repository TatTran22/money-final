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
  useDisclosure,
  SlideFade,
  //   useToast,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { DarkModeSwitch } from '@/Components/Layout/DarkModeSwitch'
import { Logo } from '../Auth/Logo'
import { navItems } from '@/data/layout'
import { Link as InertiaLink, useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { FiLogOut } from 'react-icons/fi'
import { MouseEventHandler, useState } from 'react'

export default function NavBar({ user, navChildren, title }: { user: User; navChildren?: JSX.Element; title: string }) {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const [hoverItem, setHoverItem] = useState<string | null>(null)
  const { isOpen, onToggle } = useDisclosure()
  const { post, processing } = useForm()
  const onEnterNavItem: MouseEventHandler = (e) => {
    setHoverItem(e.currentTarget.getAttribute('data-key'))
    onToggle()
  }

  const onLeaveNavItem: MouseEventHandler<HTMLButtonElement> = () => {
    setHoverItem(null)
    onToggle()
  }
  return (
    <Box as="section" minH="fit-content">
      <Box as="nav" bg="bg-surface">
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <Flex justify="space-between" flex="1" alignItems="center">
                <ButtonGroup variant="link" spacing="8">
                  {navItems.map((item, index) => (
                    <Box key={index} position="relative">
                      <InertiaLink href={item.href}>
                        <Button
                          textTransform="uppercase"
                          onMouseEnter={onEnterNavItem}
                          onMouseLeave={onLeaveNavItem}
                          data-key={index}
                          fontWeight={route().current(item.href) ? 'bold' : 'medium'}
                        >
                          {item.title}
                        </Button>
                      </InertiaLink>
                      <SlideFade
                        in={(isOpen && index === Number(hoverItem)) || route().current(item.href)}
                        offsetY="10px"
                      >
                        <Box bg="teal.400" rounded="md" w="full" h="0.5" position="absolute" />
                      </SlideFade>
                    </Box>
                  ))}
                </ButtonGroup>
                <HStack>
                  <DarkModeSwitch />
                  <Spacer></Spacer>
                  <Menu autoSelect={false}>
                    <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                      <Avatar size="md" name={`${user.first_name} ${user.last_name}`} />
                    </MenuButton>
                    <MenuList alignItems={'center'} px="4" maxW="xs">
                      <Center py="2">
                        <Avatar size={'xl'} name={`${user.first_name} ${user.last_name}`} />
                      </Center>
                      <Center width="full">
                        <Text
                          fontSize="lg"
                          fontWeight="semibold"
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >{`${user.first_name} ${user.last_name}`}</Text>
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
      <Box bgColor={useColorModeValue('gray.100', 'gray.900')}>
        <Container py={{ base: '2', lg: '3' }}>
          <Heading size="sm" color="success" fontWeight="bold">
            {title}
          </Heading>
        </Container>
      </Box>
    </Box>
  )
}
