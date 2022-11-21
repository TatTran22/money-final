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
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { useForm } from '@inertiajs/inertia-react'
// import { currencyList } from '@/data/currency'
import { EditIcon } from '@chakra-ui/icons'
import SelectCurrencyModal from './SelectCurrencyModal'
import route from 'ziggy-js'

export default function CreateWalletModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const initialRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const currencyModal = useDisclosure()

  const { data, setData, post, processing, errors, clearErrors } = useForm({
    name: '',
    currency: 'USD',
    type: 'bank',
    description: '',
    amount: 10000,
    icon_url: '',
  })

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

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} closeOnOverlayClick={false} initialFocusRef={initialRef} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <FormControl isDisabled={processing} isRequired isInvalid={!!errors.name}>
                <FormLabel>Wallet name</FormLabel>
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
