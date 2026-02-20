import React from 'react'

const Input = React.forwardRef(({ label, name, type = "text", ...props }, ref) => {
	return (
		<div className="w-full">
			{label && (
				<label htmlFor={name} className="block text-sm font-medium mb-2">
					{label}
				</label>
			)}
			<input
				id={name}
				name={name}
				type={type}
				ref={ref}
				className="w-full px-4 py-3 border rounded-xl outline-none focus:border-pink-400 transition-colors"
				{...props}
			/>
		</div>
	)
})

Input.displayName = 'Input'

export default Input