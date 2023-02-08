import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubHeading = ({ title }) => {
	return (
		<div style={{ marginTop: '10rem' }}>
			<p className='p__cormorant'>{ title }</p>
			<i className="fa-solid fa-spoon spoon__img"></i>
		</div>
	)
};

export default SubHeading;
