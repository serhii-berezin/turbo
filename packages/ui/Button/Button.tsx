import { Button as RadixButton, type ButtonProps as RadixButtonProps } from '@radix-ui/themes'

export type ButtonProps = RadixButtonProps
export const Button = (props: ButtonProps) => {
  return (
    <RadixButton {...props} />
  )
}