# gulp-nice-page-builder

![](https://4.bp.blogspot.com/-_jS4oD7mDQ8/WJFq8Z7sZ-I/AAAAAAAARP0/SJJHoRWJ37cwdBuO2pvuHQ_rY3GI1nIHQCLcB/s800/NicePageBuilder_package.jpg '')

[html.json](https://github.com/itozyun/html.json) をラップして使用する Static Site Generator. 通常 gulp プラグイン版を使う．

---

## Overview 概要

1. Generate HTML from template
2. Separate common data shared by multiple pages into external files
3. Site developers can freely add and call functions that return HTML strings
4. Rewrite pages or add new pages based on aggregation of pages
5. Rewrite pages or add new pages based on JSON files

---

1. テンプレートから HTML を生成します
   * テンプレートは入れ子にできます
2. 複数ページで共通するデータを JSON ファイルに分離する(mixin)
3. [html.json](https://github.com/itozyun/html.json) と併せて使用する
   1. nicePageBuilder.html2json
      * *.html ファイルを *.html.json ファイルに変換する．
      * 併せて参照されているテンプレートと Mixin をまとめたファイルを作成する．
   2. nicePageBuilder.generator
      * *.html.json をテンプレートに埋め込んで、Mixin をコピーする
   3. nicePageBuilder.json2json
      * 動的ページのリストを出力する
   4. nicePageBuilder.json2html
      * *.html.json を .html に変換する．この際に `<? ?>` 動的属性(`<a :href="">`) を置き換える
      * `onEnterNode()` のコールバックで VDOM を使った文書ツリーの変更ができる

## Install

~~~sh
npm install gulp-nice-page-builder
git submodule update --init --force --recursive --depth=2
git submodule foreach git pull origin master
~~~

## Build and test

~~~sh
gulp dist
gulp test
~~~

## gulp plugin の使用例

~~~js
gulp.task('html', function(){
    const nicePageBuilder = require('gulp-nice-page-builder').gulp({srcRootPath: 'src'});

    return gulp.src(
                   ['./src/**/*.html', './src/**/*.htm', './src/**/*.php', './src/**/*.json']
              ).pipe(
                   nicePageBuilder.html2json({trimWhitespaces: 'aggressive' })
              ).pipe(
                   nicePageBuilder.generator()
              ).pipe(
                   nicePageBuilder.json2html()
              ).pipe(
                   gulp.dest('./public')
              );
});
~~~

## 名称

| 名称                     | 説明                                                                                                 |
|:-------------------------|:-----------------------------------------------------------------------------------------------------|
| メタ情報 *1              | `<script type="application/json">{...}</script>` に書いておく                                        |
| コンテンツ(.html) *2     | コンテンツとメタ情報だけが書かれた HTML                                                              |
| テンプレート(.html/.php) | コンテンツ HTML、Mixin から参照される．必ず単一の `<slot></slot>` を持つこと                         |
| Mixin(.json) *3          | 複数ページで共通のメタ情報を記述した json ファイル．コンテンツ HTML, テンプレート HTMLから参照される |

1. メタ情報の各プロパティの優先度は、コンテンツ > コンテンツの MIXINS\[0] > コンテンツの MIXINS\[z] > テンプレート > テンプレートの MIXINS\[0] > テンプレートの MIXINS\[z] の順番です．
2. テンプレート、メタ情報、Mixin を使用せず完全なドキュメントだけのプロジェクトも可能だが、その場合 [html.json](https://github.com/itozyun/html.json) だけで事足りる．
3. Mixin は MIXINS プロパティを持つことが出来ません！

## メタ情報の定義積みプロパティ

| 名称        | 型               | 説明                                      |
|:------------|:-----------------|:------------------------------------------|
| TEMPLETE    | `string`         | テンプレート(.html) へのパス              |
| MIXINS      | `Array.<string>` | Mixin(.json) はこのプロパティを持てません |
| FILE_PATH   | `string`         | `"/contact/index.html"`                   |
| FILE_NAME   | `string`         | `"index.html"`                            |
| FOLDER_PATH | `string`         | `"/contact"`                              |
| URL         | `string`         | `"/contact/"`                             |
| CREATED_AT  | `number`         |  `file.stat.birthtimeMs`                  |
| MODIFIED_AT | `number`         |  `file.stat.ctimeMs`                      |
| UPDATED_AT  | `number`         | コンテンツとそれが参照する Mixin, テンプレートの MODIFIED_AT の内の最大の値、但しメタ情報が上書きされなかった場合は除外される |

### コンテンツ(.html)の例

`src/index.html`

メタ情報は一番最初に書くことを推奨

~~~html
<script type="application/json">
{
     TEMPLETE : "/templete.html"
}
</script>
<p>Hello, World!
~~~

### テンプレートの例

`src/templete.html`

`<slot>` 要素を持つファイルはテンプレートとして扱われます．テンプレートにひとつです．

`<? ?>` PROCESSING_INSTRUCTION を使う場合、コードハイライトの効く .php などの適当なファイル拡張子にするのが良い、その場合 `gulp.src()` に `"src/**/*.php"` を加えること．

~~~html
<!DOCTYPE html>
<html>
<body>
<main>
     <slot></slot>
</main>
~~~

## html.json と nice-page-builder の .json データの比較

### html.json のドキュメント

先頭が数値(9: DOCUMENT または 11: DOCUMENT_FRAGMENT)で始まります．

~~~json
[9, "<!DOCTYPE html>", ["HTML"]]
~~~

### nice-page-builder のメタ情報付き

先頭にメタ情報 `{}` のある配列です．nicePageBuilder.generator() を通すと html.json 形式になります．

~~~json
[{"FILE_PATH":"/contact/index.html"}, 9, "<!DOCTYPE html>", ["HTML"]]
~~~


## Links

* [github](https://github.com/itozyun/gulp-nice-page-builder)
* [npm](https://www.npmjs.com/package/gulp-nice-page-builder)
* [html.json](https://github.com/itozyun/html.json)

## History

0.4.x までは html.json を使っていませんでした．

0.1.x までは Visual Studio Code エクステンションでした．[Visual Studio Marketplace > Nice Page Builder](https://marketplace.visualstudio.com/items?itemName=itozyun.nice-page-builder)

**Enjoy!**

## License

[gulp-nice-page-builder](https://github.com/itozyun/gulp-nice-page-builder) is licensed under MIT license.

(C) 2024 [itozyun](https://github.com/itozyun)([blog](//outcloud.blogspot.com/))