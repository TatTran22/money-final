/* eslint-disable import/extensions */
// import { ReactNode } from 'react'
import {
  //   Avatar,
  Box,
  //   Button,
  //   Center,
  Flex,
  Link,
  //   Menu,
  //   MenuButton,
  //   MenuDivider,
  //   MenuItem,
  //   MenuList,
  Stack,
  useColorModeValue,
  //   useToast,
} from '@chakra-ui/react'

import { DarkModeSwitch } from '@/Components/Layout/DarkModeSwitch'

export default function NavBar() {
  //   const toast = useToast()
  return (
    <Box bg={useColorModeValue('gray.200', 'gray.800')} px={4} position="sticky" top={0} zIndex={1} h="fit-content">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link href="/">
          <Box>Logo</Box>
        </Link>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <DarkModeSwitch />
            {/* {user ? (
                <Menu>
                  <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                    <Avatar size={'sm'} name={`${user.first_name} ${user.last_name}`} />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar size={'2xl'} name={`${user.first_name} ${user.last_name}`} />
                    </Center>
                    <br />
                    <Center>
                      <Link href={`/profile/${user.nickname}`}>
                        <p>{user.nickname}</p>
                      </Link>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem onClick={onLogout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : ( */}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
