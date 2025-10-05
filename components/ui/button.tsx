import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import React from "react";
import { cn } from '@/lib/utils';

export type ButtonProps = React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}

const buttonVariants = cva('bg-charcoal dark:text-charcoal-black px-3 py-2 text-white duration-75 dark:bg-white',
  {
  variants: {
   size: {
    default: "hover:bg-charcoal/90 dark:hover:bg-white/90",
    lg: 'w-[210px] text-center text-[15px] font-medium tracking-tighter hover:bg-charcoal/90 dark:hover:bg-white/90',
		sm: 'text-[12px] px-2 py-1 text-charcoal-black'
   }
  },
  defaultVariants: {
			size: 'default',
			
		},
  }
)

const Button = ({
  className,
	size,
	asChild = false,
	...props}: ButtonProps) => {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			data-slot="button"
			data-sr-button=""
			className={cn(buttonVariants({ size, className }))}
			{...props}
		/>
	)
};

export default Button;
