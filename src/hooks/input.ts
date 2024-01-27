import { ChangeEvent, useState } from 'react'

type ReturnValue = {
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement> | string) => void
}

export const useInput = (initialState: string = ''): ReturnValue => {
	const [value, setValue] = useState(initialState)

	const onChange = (event: ChangeEvent<HTMLInputElement> | string) => {
		if (typeof event === 'string') {
			setValue(event)
		} else {
			setValue(event.target.value)
		}
	}

	return {
		value,
		onChange,
	}
}