import { Dialog, Transition } from '@headlessui/react'
import React, { Dispatch, Fragment, SetStateAction } from 'react'

interface DialogI {
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
  title?: string
}

export function Dialogs(props: React.PropsWithChildren<DialogI>): JSX.Element {
  function closeModal() {
    props.setState(false)
  }
  return (
    <Transition appear show={props.state} as={Fragment}>
      <Dialog
        onClose={closeModal}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="min-h-screen px-4 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-4 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded">
              {props.title ? (
                <Dialog.Title
                  as="h3"
                  className="text-xl text-gray-900 select-none"
                >
                  {props.title}
                </Dialog.Title>
              ) : null}
              {props.children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
