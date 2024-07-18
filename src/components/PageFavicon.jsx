import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageFavicon = ({ favicon }) => {
	const location = useLocation();

	useEffect(() => {
		let link = document.createElement('link');
		link.href = favicon;
	}, [location, favicon]);

	return null;
};

export default PageFavicon;