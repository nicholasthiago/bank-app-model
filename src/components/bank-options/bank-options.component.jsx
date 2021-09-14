import React from 'react';
import './bank-options.styles.scss';
import ref from './bank-options.reference';

import * as Icon from '@material-ui/icons';


const Option = ({ opt }) => {

	const IconSelector = ( icon ) => {

		switch( icon ) {

			case 'Loop'			:	return <Icon.Loop		 />
			case 'Adjust'		:	return <Icon.Adjust		 />
			case 'ThumbUp'		:	return <Icon.ThumbUp	 />
			case 'PersonAdd'	:	return <Icon.PersonAdd	 />
			case 'CreditCard'	:	return <Icon.CreditCard	 />
			case 'AttachMoney'	:	return <Icon.AttachMoney />

			default: return null;
		};
	};

	return (
		<div className={'bank-option'}>
			<span className={'icon-wrapper'}>
				{ IconSelector( opt.icon ) }
			</span>
			<h3> { opt.label } </h3>
		</div>
	);
};


const BankOptions = () => {

	return (
		<div className={'bank-options-component'}>
			<div className={'bank-options-flow'}>
			{	( ref ).map( ( opt,i ) => {
					return (
						<Option opt={ opt } key={ i } />
					);
				})
			}
			</div>
		</div>
	);
};

export default BankOptions;