Browserify HMR with CSS-in-JS サンプル
=========================

# 概要

BrowserifyでwebpackのHot Module Replacement(HMR)を使うサンプルプロジェクトです、CSSもHMRの対象となっています。  
CSSは、JSでスタイルを書き、それをローカル変数として適用する方法と(CSS-in-JS)、  
もう一つ、CSSでスタイルを書き、グローバール領域へと適用するHTMLとCSS時代から馴染みのある方法の2種類を用意してます。


CSS-in-JSにはAphroditeを、CSSファイルからの適用にはcssifyを利用しています。

詳しくは[Qiitaの記事](http://qiita.com/wordijp/items/8cbcf7560a958043c302)に書いています。

# usage

```
npm install
npm run watch
```

# license

MIT
