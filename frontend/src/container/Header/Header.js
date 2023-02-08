import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => {
	return (
		<div className='app__header__wrapper__section__padding' id='home'>
			<div className='app__wrapper__info'>
				<SubHeading title='Chase the new flavor'/>
				<h1 className='app__header-h1'>The Key to Fine Dining</h1>
			</div>
			
		<div className='app__wrapper__img'>
			</div>
		</div>
	)
};

export default Header;
