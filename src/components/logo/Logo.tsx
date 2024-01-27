import { FC } from 'react'
import siteLogo from '../../assets/svg/eos-crypto-cryptocurrency-svgrepo-com (1).svg'
import { TypeSize } from '../../models/types'

import classes from './Logo.module.css'

const Logo: FC<TypeSize> = ({ size }) => {
	return (
		<div className={classes['logo']}>
			<img src={siteLogo} alt={'logo'} />
			<span
				className={`${
					size ? 'absolute opacity-0 max-md:opacity-100' : 'max-md:opacity-0'
				} ${classes['logo-name']}`}
			>
				Cryptoverse
			</span>
		</div>
	)
}

export default Logo
