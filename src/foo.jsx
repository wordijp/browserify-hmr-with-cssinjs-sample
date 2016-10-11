import React, {Component} from 'react';

// CSS-in-JSライブラリによるスタイル適用
import {StyleSheet, css} from 'aphrodite';
const style = StyleSheet.create({
	gray: {
		color: 'gray',
		'font-style': 'italic',
	}
});

export class Foo extends Component {
	render() {
		return (
			<div className="foo">
				{/* 従来のCSSによるスタイル適用 */}
				<p>Say: <font className="message blue">Foo!</font></p>
				{/* CSS-in-JSによるスタイル適用 */}
				<p>From <font className={css(style.gray)}> Aphrodite</font></p>
			</div>
		);
	}
}

