import { FC, useEffect } from 'react';
import Pagination from '../../components/pagination/Pagination';
import Reference from '../../components/reference/Reference';
import { useAppDispatch, useAppSelector } from '../../redux/redux';
import { referenceFetchServer } from '../../redux/slices/reference/actions';
import classes from './ReferenceCurrencies.module.css';
import { setPage } from '../../redux/slices/reference/referenceSlice';

const ITEMS_PAR_PAGE = 5;

const ReferenceCurrencies: FC = () => {
	const { referenceCoins, error, page } = useAppSelector(state => state.referenceReducer);
	const { coins } = useAppSelector(state => state.coinReducer);
	const dispatch = useAppDispatch();

	const changePageHandler = ({ selected }: { selected: number }) => {
		dispatch(setPage(selected + 1));
	};

	const pageCount = Math.ceil(coins.length / ITEMS_PAR_PAGE);

	useEffect(() => {
		dispatch(referenceFetchServer(page));
	}, [dispatch, page]);

	return (
		<>
			<h2 className='text-2xl mb-5 font-medium text-[#242425]'>Coin Reference Currencies</h2>
			<table className={classes.table}>
				<thead className={classes.thead}>
					<tr className='text-[13px] h-[50px]'>
						<th className={`${classes.primary_th}`}>#</th>
						<th className={`${classes.primary_th}`}>Avatar</th>
						<th className={`${classes.primary_th}`}>Name</th>
						<th className={`${classes.secondary_th}`}>Price</th>
						<th className={`${classes.secondary_th}`}>Market Cap</th>
					</tr>
				</thead>
				{error && <p>{error}</p>}
				<tbody className='border-b bg-white shadow-sm'>
					{referenceCoins.map((coin, index: number) => {
						return <Reference key={coin.id} {...coin} index={index + 1} />;
					})}
				</tbody>
			</table>
			<Pagination current={page} changePageHandler={changePageHandler} pageCount={pageCount} />
		</>
	);
};

export default ReferenceCurrencies;
