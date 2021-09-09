import 'app/App.scss';
import React, {
	useState	,
	useEffect	,
} from 'react';

import { connect } from 'react-redux';

import NewUser from 'components/new-user/new-user.component';
import BankUser from 'components/bank-user/bank-user.component';

const App = () => {

	const [ data, setData ] = useState( [] );
	const [ loaded, setLoaded ] = useState( false );

	useEffect( () => {
		async function fetchData () {
			const config = { method:'GET' };

			const response = await fetch('http://localhost:5000/users', config ).then( r => r.json() );

			console.log( response );
			await setData( response );
			await setLoaded( true );
		};

		fetchData();
	}, [] );

	if ( loaded ) {
		return (
			<div className="bank-application">
	
				<header className={'app-title'}>
					<h1> AWS Bank Application </h1>
				</header>
	
				<section className={'bank-user-list'}>
					{ (data.users).map( user => <BankUser user={user} /> )}
				</section>

				<NewUser />

			</div>
		);
	} else { return null };
};

export default connect(
)( App );