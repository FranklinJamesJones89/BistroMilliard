import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => {
	return (
		<div className='app__header__wrapper__section__padding' id='home'>
			<div className='app__wrapper__info'>
				<SubHeading />
			</div>
			<div className='app__wrapper__img'>
			</div>
		</div>
	)
};

export default Header;
