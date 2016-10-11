import React, {Component} from 'react';
import {render} from 'react-dom';
import {App} from './app.jsx';
import {Foo} from './foo.jsx';

// cssifyによるグローバル領域へのCSS適用
// CSSのコードはbundleファイルへ埋め込まれる
// リセットCSSをここへ
require('./css/reset.css');
// アプリ用CSSもここへ
require('./css/global-style.css');

// cssifyでHMRを有効にするおまじない
// NOTE : これが無いとglobal-style.cssの変更でHMRが働かない、内部の仕組み的に必要?(ソース読んでないので推測)
class Hoge extends Component {
	render() {
		return (
			<App />
		);
	}
}

render(
	(
		<div className="root">
			<App />
			<Foo />
		</div>
	),
	document.getElementById('main')
);
