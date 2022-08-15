import React, { HTMLAttributes } from 'react'
import { Span } from './Text.style'

export type TextProps = React.PropsWithChildren<
  {
    bold?: boolean
  } & HTMLAttributes<HTMLSpanElement>
>

const Text = ({ children, ...props }: TextProps) => (
  <Span {...props}>{children}</Span>
)

export default Text
