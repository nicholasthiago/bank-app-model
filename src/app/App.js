import 'app/App.scss';
import React, {
	useState	,
	useEffect	,
} from 'react';

import { connect } from 'react-redux';

import * as ref from 'app/App.reference'; // eslint-disable-line

const BankUser = repo => {
	return (
		<span className={'bank-user'} id={repo.id}>

			<h2> { `${repo.name}` } </h2>

			<h3> { `updated: ${new Date(repo.updated_at).toLocaleString()}` } </h3>

			<span className={'owner-info'}>
				<img src={repo.owner.avatar_url} alt={`${repo.name}-owner-avatar`} />
				<h2> { `${repo.owner.login}` } </h2>
			</span>

		</span>
	);
};

const App = () => {

	const [ data, setData ] = useState( [] );

	useEffect( () => {
		async function fetchData () {
			const response = await fetch('https://api.github.com/users/nkxavis2907/repos').then( r => (r.ok) ? r.json() : null );

			console.log( response )
			await setData( response );
		};

		fetchData();
	}, [] );

	return (
		<div className="bank-application">

			<header className="App-header">
				<p> AWS Bank Application </p>
			</header>

			<section className={'bank-user-list'}>
				{ Object.values(data).map( repo => BankUser( repo ) )}
			</section>

		</div>
	);
};

export default connect(
)( App );