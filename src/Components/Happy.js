import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react'

function Happy(props) {
	const isHappy = props.value < 428.82;
	if (isHappy) {
		return (
			<div class="icons">
				<Icon fitted name='smile' size='massive' color='green' />
				<br />
				<h1>You're doing a great job, keep it up!</h1>
			</div>
		)
	} else {
		return (
			<div class="icons">
				<Icon fitted name='frown' size='massive' color='red' />
				<br />
				<h1>sucks</h1>
			</div>
		)
	}
}


export default Happy;