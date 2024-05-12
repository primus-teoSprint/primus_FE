'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'

const DialogClose = ({
  children,
  ...props
}: DialogPrimitive.DialogCloseProps) => {
  return <DialogPrimitive.Close {...props}>{children}</DialogPrimitive.Close>
}

export default DialogClose
