import React, { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react'
import { Button, Modal } from 'flowbite-react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import WalletMiniCard from '@/Components/WalletMiniCard'
import { Link, useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import TextArea from '@/Components/TextArea'

const Header = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold leading-tight text-gray-800">Wallets</h2>
    </div>
  )
}

const WalletFormModal = () => {
  const [showWalletForm, setShowWalletForm] = useState(false)
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    type: '',
    description: '',
    amount: '',
    currency: '',
    icon_url: '',
  })
  const onClick = () => {
    setShowWalletForm((prv) => !prv)
  }
  const onClose = () => {
    setShowWalletForm(false)
  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    post(route(''))
  }

  const onHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // @ts-ignore
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
  }
  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  return (
    <>
      <Button onClick={onClick}>Toggle modal</Button>
      <Modal show={showWalletForm} onClose={onClose}>
        <form onSubmit={submit}>
          <Modal.Header>New wallet</Modal.Header>
          <Modal.Body>
            <div className="mt-4">
              <InputLabel forInput="description" value="Name" />
              <TextInput
                type="text"
                name="name"
                value={data.name}
                className="block w-full mt-1"
                isFocused={true}
                handleChange={onHandleChange}
              />
              <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel forInput="description" value="Description" />
              <TextArea rows={4} name="description" className="block w-full mt-1" handleChange={onHandleChange} />
              <InputError message={errors.name} className="mt-2" />
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-end">
            <PrimaryButton type="submit" processing={processing}>
              Create
            </PrimaryButton>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default function WalletIndex({
  auth,
  errors,
}: {
  auth: {
    user: User
  }
  errors: any
}) {
  const imgUrls = new URL('@/assets/images/bank.png', import.meta.url).href
  return (
    <AuthenticatedLayout auth={auth} errors={errors} header={<Header />} title="Dashboard">
      <div className="py-6">
        <WalletFormModal />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="flex flex-row p-6 border-b">
              <div className="mr-4 bg-gray-100 rounded-lg w-72">
                <div>
                  <WalletMiniCard name="TPBank" src={imgUrls} />
                </div>
              </div>
              <div className="bg-indigo-200 grow">b</div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
