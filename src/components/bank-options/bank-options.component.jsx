import React from 'react';
import './bank-options.styles.scss';
import ref from './bank-options.reference';


const Option = ({ opt }) => {
	return (
		<div className={'bank-option'}>
			<span className={'icon-wrapper'}></span>
			<h3> { opt.label } </h3>
		</div>
	);
};


const BankOptions = () => {

	return (
		<div className={'bank-options-component'}>
		{	( ref ).map( (opt,i) => {
				return (
					<Option opt={ opt } key={i} />
				);
			})
		}
		</div>
	);
};

export default BankOptions;