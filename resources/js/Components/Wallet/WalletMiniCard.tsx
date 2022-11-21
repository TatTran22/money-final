import {
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  Tooltip,
  Badge,
  Center,
  HStack,
  Grid,
  GridItem,
} from '@chakra-ui/react'

export default function WalletMiniCard({ wallet }: { wallet: Wallet }) {
  const { name, amount, description, type, currency, icon_url, user_id } = wallet
  const convertedAmount = new Intl.NumberFormat(navigator.language, { style: 'currency', currency: currency }).format(
    amount,
  )
  return (
    <Grid rounded="lg" gap={4} boxShadow="lg" borderWidth="thin" w="full" templateColumns="repeat(3, 1fr)" padding={1}>
      <GridItem>
        <Center>
          <Image borderRadius="full" objectFit="cover" h="50px" src="" alt="Dan Abramov" />
        </Center>
      </GridItem>
      <GridItem>
        <Tooltip label={name} aria-label={name} fontSize="md" hasArrow placement="auto">
          <Text fontSize="sm" noOfLines={1} fontWeight="bold">
            {name}
          </Text>
        </Tooltip>
        {/* <Badge
          colorScheme="teal"
          pos="absolute"
          variant="solid"
          textTransform="capitalize"
          fontWeight="semibold"
          top={-5}
          right={-2.5}
        >
          New
        </Badge> */}
        <Text
          fontSize="lg"
          noOfLines={1}
          fontWeight="semibold"
          textAlign="start"
          // textColor={useColorModeValue('green.600', 'green.400')}
        >
          {convertedAmount}
        </Text>
      </GridItem>
    </Grid>
  )
}
