import Main from '../components/main/Main'
import ControlPanel from './ControlPanel'

const LayoutContent = () => {
	return (
		<div className='flex'>
			<ControlPanel />
			<Main />
		</div>
	)
}

export default LayoutContent
