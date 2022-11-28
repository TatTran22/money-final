import WalletMiniCard from '@/Components/Wallet/WalletMiniCard'
import { Link, useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import AuthLayout from '@/Layouts/AuthLayout'
import { Box, Container, Flex, Text, useDisclosure, VStack } from '@chakra-ui/react'
import CreateWalletButton from '@/Components/Wallet/CreateWalletButton'
import CreateWalletModal from '@/Components/Wallet/CreateWalletModal'
import { useEffect } from 'react'

export default function WalletIndex({
  auth,
  errors,
  userWallets,
}: {
  auth: {
    user: User
  }
  errors: any
  userWallets: Wallet[]
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    console.log(userWallets)
  }, [])
  return (
    <AuthLayout auth={auth} errors={errors} title="Wallets">
      <Container flex={1} py="2">
        <Flex w="full" h="full">
          <VStack w="xs" bg="bg-surface" rounded="lg" mr={4} p={2}>
            <CreateWalletButton onClick={onOpen} />
            {userWallets.map((wallet, index) => (
              <WalletMiniCard key={index} wallet={wallet} />
            ))}
          </VStack>
          <Box flex="1">b</Box>
        </Flex>
        <CreateWalletModal isOpen={isOpen} onClose={onClose} />
      </Container>
    </AuthLayout>
  )
}
