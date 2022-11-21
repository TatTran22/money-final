import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  Grid,
  GridItem,
  HStack,
  Flex,
  ModalFooter,
  Button,
  Image,
  Text,
} from '@chakra-ui/react'
import { useRef, useState, ChangeEventHandler } from 'react'
import currency from '@/data/currency.json'
const SelectCurrencyModal = ({
  onClose,
  isOpen,
  onSave,
}: {
  onClose: () => void
  isOpen: boolean
  onSave: (code: string) => void
}) => {
  const initialRef = useRef<HTMLInputElement>(null)
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [inputCurrency, setInputCurrency] = useState('USD')
  const getImageUrl = (imagePath: string) => {
    return new URL(imagePath, import.meta.url).href
  }
  const [currencyList, setCurrencyList] = useState(currency)
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const result = currency.filter((item) => {
      return Object.values(item).some((val) => typeof val === 'string' && val.includes(e.currentTarget.value))
    })
    setInputCurrency(e.currentTarget.value)
    setCurrencyList(result)
  }
  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        size="lg"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select currency</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <Input ref={initialRef} value={inputCurrency} onChange={handleInputChange} />
            </FormControl>
            <Grid w="full" gap={3} templateColumns="1fr 1fr" as="ul" listStyleType="none">
              {currencyList.map((c) => (
                <GridItem
                  as="li"
                  key={c.id}
                  p={1}
                  rounded="lg"
                  shadow={c.currency_code === selectedCurrency ? 'md' : 'xs'}
                  color={c.currency_code === selectedCurrency ? 'gray.800' : 'gray.600'}
                  fontWeight={c.currency_code === selectedCurrency ? 'semibold' : ''}
                  bgColor={c.currency_code === selectedCurrency ? 'green.200' : ''}
                  _hover={{ cursor: 'pointer', color: 'gray.800', fontWeight: 'semibold' }}
                  borderWidth={c.currency_code === selectedCurrency ? 2 : 1}
                  //   borderRadius="sm"
                  overflow="hidden"
                  onClick={() => {
                    setInputCurrency(c.currency_code)
                    setSelectedCurrency(c.currency_code)
                  }}
                >
                  <HStack>
                    <Image
                      src={getImageUrl(`./../../assets/images/country-flag/${c.currency_image_name}`)}
                      alt="usa"
                      h="10"
                    />
                    <Flex direction="column">
                      <Text>{c.currency_name}</Text>
                      <Text fontWeight="semibold">{`${c.currency_code} - ${c.currency_symbol}`}</Text>
                    </Flex>
                  </HStack>
                </GridItem>
              ))}
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                onSave(selectedCurrency)
                onClose()
              }}
              variant="primary"
            >
              <Text as="span">{`Select ${selectedCurrency}`}</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SelectCurrencyModal
