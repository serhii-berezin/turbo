import { Button as RadixButton, type ButtonProps as RadixButtonProps } from '@radix-ui/themes'

// comment to trigger project-a and project-b
export type ButtonProps = RadixButtonProps
export const Button = (props: ButtonProps) => {
  return (
    <RadixButton {...props} />
  )
}