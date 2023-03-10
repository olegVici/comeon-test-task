import { FC } from 'react';

// Styles
import './title.scss';

interface TitleProps {
	title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
	return <div className="title">{title}</div>;
};

export default Title;
