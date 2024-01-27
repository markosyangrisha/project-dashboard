import { useEffect, RefObject } from 'react'

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void): void => {
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent): void => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				callback()
			}
		}
		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [ref, callback])
}
