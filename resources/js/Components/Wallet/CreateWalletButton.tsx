import { AddIcon } from '@chakra-ui/icons'
import { Center, Button } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

export default function CreateWalletButton({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <Button rounded="md" p="2" boxShadow="lg" borderWidth="2px" variant="primary" mb={4} w="full" onClick={onClick}>
      <Center>
        <AddIcon h="30px" mr={2} />
        Add a wallet
      </Center>
    </Button>
  )
}
