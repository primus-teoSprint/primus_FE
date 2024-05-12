'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'

const DialogTrigger = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogTriggerProps) => {
  return (
    <DialogPrimitive.Trigger className={className} {...props}>
      {children}
    </DialogPrimitive.Trigger>
  )
}

export default DialogTrigger
