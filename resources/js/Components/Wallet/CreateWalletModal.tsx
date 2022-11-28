import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Modal,
  Button,
  FormControl,
  FormLabel,
  Input,
  HStack,
  VStack,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberInput,
  NumberIncrementStepper,
  useDisclosure,
  Textarea,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  SelectField,
  Flex,
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { useForm } from '@inertiajs/inertia-react'
// import { currencyList } from '@/data/currency'
import { EditIcon } from '@chakra-ui/icons'
import route from 'ziggy-js'
import SelectCurrencyModal from './SelectCurrencyModal'
import { assets, bank, cash, credit_card, investment } from '@/assets/images/wallet-types/color'

export default function CreateWalletModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const initialRef = useRef<HTMLInputElement>(null)
  const amountInputRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const currencyModal = useDisclosure()

  const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
    name: '',
    currency: 'USD',
    type: 'cash',
    description: '',
    amount: 0,
    icon_url: '',
  })

  const walletType = [
    {
      title: 'Assets',
      value: 'assets',
      icon: assets,
    },
    {
      title: 'Bank',
      value: 'bank',
      icon: bank,
    },
    {
      title: 'Cash',
      value: 'cash',
      icon: cash,
    },
    {
      title: 'Credit card',
      value: 'credit_card',
      icon: credit_card,
    },
    {
      title: 'Investment',
      value: 'investment',
      icon: investment,
    },
  ]

  const onSaveWallet = () => {
    console.log(data)
    post(route('wallets.create'), {
      onSuccess: () => onClose(),
    })
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    console.log(errors)
  }, [errors])

  useEffect(() => {
    clearErrors()
    reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} closeOnOverlayClick={false} initialFocusRef={initialRef} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Flex w="full" justify="between" align="center">
                <FormControl isDisabled={processing} isRequired isInvalid={!!errors.name}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    ref={initialRef}
                    value={data.name}
                    onChange={(e) => {
                      if (errors.name) {
                        clearErrors('name')
                      }
                      setData({
                        ...data,
                        name: e.currentTarget.value,
                      })
                    }}
                  />
                  {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                </FormControl>
                <FormControl isDisabled={processing} isRequired isInvalid={!!errors.type} p="2" ml={2}>
                  <FormLabel>Type</FormLabel>
                  <SelectField
                    value={data.type}
                    onChange={(e) => {
                      console.log(e.currentTarget.value)
                      if (errors.type) {
                        clearErrors('type')
                      }
                      setData({
                        ...data,
                        type: e.currentTarget.value,
                      })
                      if (initialRef.current && initialRef.current.value.trim() === '') {
                        initialRef.current.focus()
                      } else if (amountInputRef.current) {
                        amountInputRef.current.focus()
                      }
                    }}
                  >
                    {walletType.map((type, index) => (
                      <option key={index} value={type.value}>
                        {type.title}
                      </option>
                    ))}
                  </SelectField>
                  {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                </FormControl>
              </Flex>
              <HStack align="start">
                <FormControl isDisabled={processing} isInvalid={!!errors.amount}>
                  <FormLabel>
                    Amount available:{' '}
                    {new Intl.NumberFormat(navigator.language, {
                      style: 'currency',
                      currency: data.currency,
                    }).format(data.amount)}
                  </FormLabel>
                  <NumberInput allowMouseWheel min={0}>
                    <NumberInputField
                      value={data.amount}
                      ref={amountInputRef}
                      placeholder="0"
                      onChange={(e) => {
                        setData({
                          ...data,
                          amount: Number(e.currentTarget.value),
                        })
                      }}
                    />
                  </NumberInput>
                  <FormErrorMessage>{errors.amount}</FormErrorMessage>
                </FormControl>
                <FormControl isDisabled={processing}>
                  <FormLabel>Currency</FormLabel>
                  <InputGroup size="md">
                    <Input readOnly value={data.currency} />
                    <InputRightElement textAlign="center">
                      <Button variant="secondary" rightIcon={<EditIcon />} onClick={currencyModal.onOpen} />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </HStack>
              <FormControl isDisabled={processing}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  ref={descriptionRef}
                  value={data.description}
                  onChange={(e) => {
                    setData({
                      ...data,
                      description: e.currentTarget.value,
                    })
                  }}
                  size="sm"
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={4}>
              <Button onClick={onSaveWallet} variant="primary">
                Save
              </Button>
              <Button onClick={onClose} variant="secondary">
                Close
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
        <SelectCurrencyModal
          isOpen={currencyModal.isOpen}
          onClose={currencyModal.onClose}
          onSave={(code) =>
            setData({
              ...data,
              currency: code,
            })
          }
        />
      </Modal>
    </>
  )
}
