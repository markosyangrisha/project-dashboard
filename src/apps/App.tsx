import { useEffect } from 'react';
import { useAppDispatch } from '../redux/redux';
import AppRoutes from '../routes/AppRoutes';
import { fetchCoins } from '../redux/slices/coins/actions';

const App = () => {
	const dispatch = useAppDispatch() 	

	useEffect(() => {
		dispatch(fetchCoins())
	}, [dispatch])

	return (
		<div className='app  h-screen'>
			<AppRoutes />
		</div>
	)
}

export default App
