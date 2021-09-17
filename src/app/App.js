import 'app/App.scss';
import React, {
	useState	,
	useEffect	,
} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as userAction from 'redux/user/user.actions';

import Header from 'components/header/header.component';
import NewUser from 'components/new-user/new-user.component';
import BankUser from 'components/bank-user/bank-user.component';
import BankOptions from 'components/bank-options/bank-options.component';

const App = () => {

	// State
	const [ loaded, setLoaded ] = useState( false );

	// Redux State
	const dispatch = useDispatch();
	const userActive = useSelector( state => state.user.userActive );
	const dataUpdated = useSelector( state => state.data.dataUpdated );

	// Functions
	async function fetchData () {
		const config = { method:'GET' };

		const response = await fetch(`http://${window.location.hostname}:5000/users`, config ).then( r => r.json() );

		console.log( response );
		await dispatch( userAction.setList( response.users ) );
		await dispatch( userAction.setActive( response.users[0] ) );
		await setLoaded( true );

		return response;
	};


	useEffect( () => fetchData(), [ dataUpdated ] ); // eslint-disable-line

	if ( loaded ) {
		return (
			<div className="bank-application">

				<Header />
		
				<BankUser user={ userActive } />

				<BankOptions />

				<NewUser />

			</div>
		);
	} else { return null };
};

export default App;