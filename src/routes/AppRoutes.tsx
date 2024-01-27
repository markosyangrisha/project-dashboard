import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Homepage from '../pages/home/Homepage'
import { Paths } from './routePaths'

const AppRoutes = () => {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo({ top: 0 })
	}, [location])

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					{Paths.map(path => {
						return (
							<Route
								key={path.path}
								path={path.path}
								element={<path.component />}
							/>
						)
					})}
				</Route>
			</Routes>
		</>
	)
}

export default AppRoutes
