'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'

const DialogPortal = ({
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => {
  return <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>
}

export default DialogPortal
