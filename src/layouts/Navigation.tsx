import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { TypeSize } from '../models/types'
import { navPath } from './navPath'

export const Navigation: FC<TypeSize> = ({ size }) => {
	return (
		<nav>
			<ul
				className={`flex flex-col min-h-full gap-2 font-sans text-gray-400 px-1`}
			>
				{navPath?.map(path => {
					return (
						<li key={path.to}>
							<NavLink
								style={({ isActive }) => ({
									backgroundColor: isActive ? '#1677ff' : '',
									color: isActive ? 'white' : '',
								})}
								className={`relative flex items-center gap-2 text-nowrap pl-6 text-[16px] w-full h-10 py-2.5 hover:text-gray-300 transition-all duration-200 rounded-lg max-md:pl-0 ${
									size ? 'max-md:pl-6' : 'max-md:justify-center'
								}`}
								to={path.to}
							>
								{
									<path.icon
										className={`transition-all duration-300 max-md:ml-0 ${
											size ? 'text-lg' : ''
										} max-md:text-lg`}
									/>
								}
								<span
									className={`absolute ml-[30px] text-[14px] duration-200 ${
										size ? 'opacity-0 ml-[15px]' : ''
									}  ${
										!size ? 'max-md:opacity-0' : 'max-md:opacity-100'
									} max-md:ml-[30px]`}
								>
									{path.label}
								</span>
							</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Navigation
