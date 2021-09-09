import React from 'react';
import './bank-user.styles.scss';

import * as t from 'utils/tools/tools.js';

const BankUser = ({ user }) => {

	console.log( user );

	const dateConfig = {
		day		: 'numeric'	,
		month	: 'short'	,
		year	: 'numeric'	,
		hour	: 'numeric'	,
		hour12	: 'false'	,
		minute	: 'numeric'	,
	};

	return (
		<span className={'bank-user'} key={Math.random()}>

			<h2> { `${user.user_name}` } </h2>

			<span className={'owner-info'}>
				<h2> { `R$ ${ t.dataMask(user.user_balance) }` } </h2>
				<h3> { `${ new Date(user.user_birth).toLocaleString('pt-BR', dateConfig) }` } </h3>
			</span>

		</span>
	);
};

export default BankUser;