import React, { useState } from 'react';
import './header.styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import * as userAction from 'redux/user/user.actions';

import {
	Fade		,
	Avatar		,
	Popover		,
	MenuItem	,
} from '@material-ui/core';


const Header = () => {

	// Component State
	const [ display, setDisplay ] = useState( false );

	// Redux State
	const dispatch = useDispatch();
	const userList = useSelector( state => state.user.userList );
	const userActive = useSelector( state => state.user.userActive );

	// Functions
	function handle_UserChange ( user ) {

		dispatch( userAction.setActive( user ));

		setDisplay( !display );

		return console.log( user );
	};


	return (
		<header className={'app-header-wrapper'}>

			<div className={'app-header'}>

				<h1 className={'app-logo'}> {'AWS'} </h1>

				<Avatar className={'user-avatar'}
					onMouseDown={() => setDisplay( !display )}
				>	{ userActive ? userActive.user_name.charAt(0) : 'U' }
				</Avatar>

				<Popover className={'user-change-dropdown'}
					open={ display }
					onClose={ () => setDisplay( !display) }
					anchorEl={ document.querySelector('.user-avatar') }
					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					transformOrigin={{ vertical: 'top', horizontal: 'right' }}
					TransitionComponent={ Fade }
				>	{	(userList).map( (u,i) =>
							<MenuItem key={i}
								onMouseDown={() => handle_UserChange( u )}
							>	{ u.user_name }
							</MenuItem>
						)
					}
				</Popover>

			</div>

		</header>
	);
};

export default Header;