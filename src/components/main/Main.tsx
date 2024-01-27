import { FC, useCallback, useEffect, useState } from 'react'
import { LuArrowUpToLine } from 'react-icons/lu'
import { Outlet } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import Search from '../search/Search'
import classes from './Main.module.css'

const Main: FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const handleScroll = useCallback(() => {
		if (window.scrollY >= 200 && !isVisible) {
			setIsVisible(true)
		} else if (window.scrollY <= 200 && isVisible) {
			setIsVisible(false)
		}
	}, [isVisible])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	const scrollToTop = () => {
		scroll.scrollToTop({
			duration: 500,
			smooth: 'easeInOutQuart',
		})
	}

	return (
		<>
			<main className={classes['main']}>
				<Search />
				<section className='p-5'>
					<Outlet />
				</section>
				<button
					onClick={scrollToTop}
					className={`${classes['scroll-btn']} ${
						isVisible ? 'opacity-100' : ''
					}`}
				>
					<LuArrowUpToLine className='m-auto text-md' />
				</button>
			</main>
		</>
	)
}

export default Main
