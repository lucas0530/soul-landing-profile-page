import React, { HTMLAttributes } from 'react'
import { Span } from './Text.style'

const Text = ({
  children,
  ...props
}: React.PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => (
  <Span {...props}>{children}</Span>
)

export default Text
