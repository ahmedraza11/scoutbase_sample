import React from 'react';
import { Header } from '../../Utils';


const routes = [
	{
		name: 'Home',
		link: '/'
	}, {
		name: 'Countries',
		link: '/countries'
	}
]

export const Navigation = () => {
	return (
		<Header routes={routes} />
	)
}