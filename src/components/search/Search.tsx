import { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from '../../hooks/debounce'
import { useInput } from '../../hooks/input'
import { useOutsideClick } from '../../hooks/outsideClick'
import { useAppDispatch, useAppSelector } from '../../redux/redux'
import { searchServerCoin } from '../../redux/slices/coinSearchSlice/actions'
import { toggleText } from '../../redux/slices/coinSearchSlice/coinSearchSlice'
import DropDown from '../dropDown/DropDown'
import classes from './Search.module.css'

const Search = () => {
	const [isOpen, setOpen] = useState<boolean>(false)
	const searchRef = useRef(null)
	const input = useInput()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const { filteredCoin, noResult } = useAppSelector(
		state => state.coinSearchReducer
	)

	useOutsideClick(searchRef, () => setOpen(false))
	const debounced = useDebounce(input.value, 250)

	useEffect(() => {
		dispatch(searchServerCoin())
		dispatch(toggleText(input.value))

		debounced.length
			? dispatch(searchServerCoin()).then(() => setOpen(true))
			: setOpen(false)
	}, [debounced, dispatch, input.value])

	const handlerToCoinCard = (id: string): void => {
		navigate(`/crypto/${id}`)
		input.onChange(id)
	}

	return (
		<div className=' bg-white p-5'>
			<div
				ref={searchRef}
				onClick={() => setOpen(true)}
				className='max-w-[475px] relative'
			>
				<input
					type='text'
					{...input}
					placeholder='Search for Cryptocurrencies ??'
					className={classes.input}
				/>
				{isOpen ? (
					<IoIosSearch className={classes['search-icons']} />
				) : (
					<IoIosArrowDown className={classes['search-icons']} />
				)}
				{
					<DropDown
						coins={filteredCoin}
						noResult={noResult}
						isOpen={isOpen}
						handlerToCoinCard={handlerToCoinCard}
					/>
				}
			</div>
		</div>
	)
}

export default Search
