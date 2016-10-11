import React, {Component} from 'react';

// ここはHMRの対象になる
var app_tmpl = require('./app-template.rjade');

export class App extends Component {
	// XXX : コンストラクタのrequireは、そのままではHMRで置き換わらない、置き換え処理が追加で必要になる
	//constructor(props) {
	//	super(props);
	//	this.construct_tmpl = require('./app-template.rjade');
	//}

	render() {
		return app_tmpl();

		// 書き方が気にならないならrender内の方がスコープが一番狭いので良い、
		// requireは取得だけなのでパフォーマンスも問題ないはず
		//return require('./app-template.rjade')();
	}
}

