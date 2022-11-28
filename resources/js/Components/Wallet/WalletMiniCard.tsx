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
  Icon,
  ScaleFade,
} from '@chakra-ui/react'
// import { assets, bank, cash, credit_card, investment } from '@/assets/images/wallet-types/color'
import { RiArrowUpCircleFill, RiArrowDownCircleFill } from 'react-icons/ri'
import { BankIcon, AssetsIcon, CashIcon, CreditCardIcon, InvestmentIcon } from '../Icons'

export default function WalletMiniCard({ wallet }: { wallet: Wallet }) {
  const { name, amount, description, type, currency, icon_url, user_id } = wallet
  const convertedAmount = new Intl.NumberFormat(navigator.language, { style: 'currency', currency: currency }).format(
    amount,
  )
  const images = {
    assets: <AssetsIcon width="24pt" height="24pt" />,
    bank: <BankIcon width="24pt" height="24pt" />,
    cash: <CashIcon width="24pt" height="24pt" />,
    credit_card: <CreditCardIcon width="24pt" height="24pt" />,
    investment: <InvestmentIcon width="24pt" height="24pt" />,
  }

  return (
    <Grid rounded="lg" gap={4} boxShadow="lg" borderWidth="thin" w="full" templateColumns="repeat(3, 1fr)" padding={1}>
      <GridItem as={Center}>{images[type]}</GridItem>
      <GridItem as={Flex} placeItems="start" flexDirection="column" justifyContent="center">
        <Tooltip label={name} aria-label={name} fontSize="md" hasArrow placement="auto">
          <Text fontSize="sm" noOfLines={1} fontWeight="light">
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
          fontSize="md"
          noOfLines={1}
          fontWeight="medium"
          textAlign="start"
          // textColor={useColorModeValue('green.600', 'green.400')}
        >
          {convertedAmount}
        </Text>
      </GridItem>
      <GridItem as={Grid} placeItems="center">
        <Flex direction="column" justify="center" align="center">
          <Icon as={RiArrowUpCircleFill} color="green.400" />
          <Text>Up</Text>
        </Flex>
      </GridItem>
    </Grid>
  )
}
