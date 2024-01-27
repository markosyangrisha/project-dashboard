import { FC, useState } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import Logo from '../components/logo/Logo'
import Navigation from './Navigation'

const ControlPanel: FC = () => {
	const [size, setSize] = useState<boolean>(false)

	const sizeController = () => {
		setSize(!size)
	}

	return (
		<aside
			className={`bg-[#001529] text-white min-w-[250px] min-h-screen justify-between transition-all duration-300 flex flex-col
				${size ? 'min-w-[80px] max-md:min-w-[250px]' : 'max-md:min-w-[80px]'} `}
		>
			<div className=' h-full'>
				<Logo size={size} />
				<Navigation size={size} />
			</div>

			<button
				onClick={sizeController}
				className='sticky left-0 bottom-0 w-full py-5 bg-[#002140] border-red'
			>
				{size ? (
					<MdOutlineArrowForwardIos className='text-center w-full' />
				) : (
					<MdOutlineArrowBackIos className='text-center w-full' />
				)}
			</button>
		</aside>
	)
}

export default ControlPanel
