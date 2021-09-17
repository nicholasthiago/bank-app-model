import React from 'react';
import './bank-user.styles.scss';

import { useMasked } from 'hooks/hooks';


const BankUser = ({ user }) => {

	const [ balance, maskedBalance, setBalance ] = useMasked( user.user_balance, /\d(?=(\d{3})+\.)/g ) // eslint-disable-line

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
					<h2> { `R$ ${ maskedBalance }` } </h2>
					<h3> { `${ new Date(user.user_birth).toLocaleString('pt-BR', dateTimeConfig ) }` } </h3>
				</span>

			</span>
		);

	} else { return null };
};

export default BankUser;