import React from 'react';
import './bank-user.styles.scss';

import * as t from 'utils/tools/tools.js';

const BankUser = ({ user }) => {

	const dateTimeConfig = {
		day		: 'numeric'	,
		month	: 'short'	,
		year	: 'numeric'	,
		hour	: 'numeric'	,
		hour12	: 'false'	,
		minute	: 'numeric'	,
	};

	if ( user ) {

		return (
			<span className={'bank-user'} key={Math.random()}>

				<span className={'owner-welcome'}>
					<h3> { 'Welcome,' } </h3>
					<h2> { `${user.user_name}` } </h2>
				</span>

				<span className={'owner-info'}>
					<h2> { `R$ ${ t.dataMask(user.user_balance) }` } </h2>
					<h3> { `${ new Date(user.user_birth).toLocaleString('pt-BR', dateTimeConfig ) }` } </h3>
				</span>

			</span>
		);

	} else { return null };
};

export default BankUser;