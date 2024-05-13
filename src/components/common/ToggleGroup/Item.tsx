'use client'

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import React from 'react'

export interface ToggleGroupItemProps
  extends ToggleGroupPrimitive.ToggleGroupItemProps {}

const ToggleGroupItem = ({ children, ...props }: ToggleGroupItemProps) => {
  return (
    <ToggleGroupPrimitive.Item {...props}>{children}</ToggleGroupPrimitive.Item>
  )
}

export default ToggleGroupItem
