import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Hero from './hero';
import Achievements from './Achievements';
import Footer from './footer';

const Layout = ({ children }) => (
	<div style={{maxWidth: `1520px`, margin: `auto`}}>
		<Helmet />
		<Hero />
		<Achievements />
		<Footer />
	</div>
);

export default Layout;
