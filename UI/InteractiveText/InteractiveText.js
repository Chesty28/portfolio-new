import React from 'react';

import s from './InteractiveText.module.css';

const InteractiveText = (props) => {
	if (props.type === 'header') {
		return (
			<div>
				<span className={[s.span, s.an1].join(' ')}>H</span>
				<span className={[s.span, s.an2].join(' ')}>i</span>
				<span className={[s.span, s.an1].join(' ')}>, </span>
				<span> </span>
				<span className={[s.span, s.an1].join(' ')}>I</span>
				<span className={[s.span, s.an2].join(' ')}>'</span>
				<span className={[s.span, s.an2].join(' ')}>m</span>
				<br />
				<span className={[s.span, s.an2].join(' ')}>P</span>
				<span className={[s.span, s.an3].join(' ')}>e</span>
				<span className={[s.span, s.an1].join(' ')}>t</span>
				<span className={[s.span, s.an2].join(' ')}>r</span>
				<span> </span>
				<span className={[s.span, s.an2].join(' ')}>Š</span>
				<span className={[s.span, s.an3].join(' ')}>u</span>
				<span className={[s.span, s.an2].join(' ')}>d</span>
				<span className={[s.span, s.an1].join(' ')}>o</span>
				<span className={[s.span, s.an2].join(' ')}>m</span>
				<span className={[s.span, s.an1].join(' ')}>a</span>
			</div>
		);
	} else if (props.type === 'meHeader') {
		return (
			<div>
				<span className={[s.span, s.an1].join(' ')}>A</span>
				<span className={[s.span, s.an2].join(' ')}>b</span>
				<span className={[s.span, s.an3].join(' ')}>o</span>
				<span className={[s.span, s.an2].join(' ')}>u</span>
				<span className={[s.span, s.an1].join(' ')}>t</span>
				<span> </span>
				<span className={[s.span, s.an2].join(' ')}>m</span>
				<span className={[s.span, s.an3].join(' ')}>e</span>
			</div>
		);
	}
};

export default InteractiveText;
