import React, { useState } from 'react'; // eslint-disable-line
import './header.styles.scss';

import { useToggle } from 'hooks/hooks';

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
	// const [ display, setDisplay ] = useState( false );
	const [ display, toggleDisplay	] = useToggle( false );

	// Redux State
	const dispatch = useDispatch();
	const userList = useSelector( state => state.user.userList );
	const userActive = useSelector( state => state.user.userActive );

	// Functions
	function handle_UserChange ( user ) {

		dispatch( userAction.setActive( user ));

		toggleDisplay();

		return console.log( user );
	};


	return (
		<header className={'app-header-wrapper'}>

			<div className={'app-header'}>

				<h1 className={'app-logo'}> {'AWS'} </h1>

				<Avatar className={'user-avatar'}
					onMouseDown={() => toggleDisplay()}
				>	{ userActive ? userActive.user_name.charAt(0) : 'U' }
				</Avatar>

				<Popover className={'user-change-dropdown'}
					open={ display }
					onClose={ () => toggleDisplay( false ) }
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