import React, {
	useState,
} from 'react';
import './new-user.styles.scss';

import { useSelector, useDispatch } from 'react-redux'; // eslint-disable-line
import * as dataAction from 'redux/data/data.actions';

const NewUser = () => {

	// Component State
	const [ data, setData ] = useState( {} );

	// Redux State
	const dispatch = useDispatch();


	function handle_Input ( input ) {
		let _data = data;
		_data[input.className] = input.value;

		return setData( _data );
	};

	async function handle_Submit ( data ) {

		let _data = data;

		if ( Object.values(data).length === 2) {

			_data['user_birth'] = new Date(Date.now()).toLocaleString();

			console.log( _data );

			const config = {
				headers	: {'Accept':'application/json','Content-Type':'application/json'},
				method	: 'POST'	,
				body	: JSON.stringify( _data ),
			};

			let response = await fetch('http://localhost:5000/users', config );

			await dispatch( dataAction.setUpdated() );

			return response;

		} else { return null };
	};

	return (
		<div className={'new-user-component'}>

			<h2> {'New User Form'} </h2>

			<div className={'new-user-form'}>

				<input className={'user_name'}
					type={'text'}
					placeholder={'name'}
					onInput={ e => handle_Input( e.target ) }
				/>

				<input className={'user_balance'}
					step={'0.01'}
					type={'number'}
					placeholder={'actual balance'}
					onInput={ e => handle_Input( e.target ) }
				/>

				<button onMouseDown={ () => handle_Submit( data ) }>
					{'Create user'}
				</button>

			</div>

		</div>
	);
};

export default NewUser;