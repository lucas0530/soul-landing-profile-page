import React, { HTMLAttributes } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'

export type TextProps = React.PropsWithChildren<
  {
    bold?: boolean
  } & HTMLMotionProps<'span'>
>

const Text = ({ children, bold, ...props }: TextProps) => (
  <motion.span
    css={{
      fontWeight: bold ? 'bold' : 'normal',
    }}
    {...props}
  >
    {children}
  </motion.span>
)

export default Text
