# gulp-nice-page-builder

![](https://4.bp.blogspot.com/-_jS4oD7mDQ8/WJFq8Z7sZ-I/AAAAAAAARP0/SJJHoRWJ37cwdBuO2pvuHQ_rY3GI1nIHQCLcB/s800/NicePageBuilder_package.jpg '')

Gulp plugin of Static Site Generator.

---

## Overview 概要

1. Generate HTML from template
2. Separate common data shared by multiple pages into external files
3. Site developers can freely add and call functions that return HTML strings
4. Rewrite pages or add new pages based on aggregation of pages
5. Rewrite pages or add new pages based on JSON files

---

1. テンプレートから HTML を生成します
2. 複数のページで共有される共通データを外部ファイルに分ける
3. サイト開発者が HTML 文字列を返す関数を自由に追加して呼ぶことができます
4. ページの集計を元にしてページを書き換えたり新しいページを追加する
5. JSON ファイルを元にしてページを書き換えたり新しいページを追加する

## gulpfile.js

~~~js
gulp.task( 'html', function(){
    return gulp.src( './src/**/*.html' )
               .pipe(
                   nicePageBuilder(
                        {
                            srcRootPath : './src',
                            json : {
                                comments : 'json/comments.json',
                                tweets   : 'jsons/tweets.json'
                            }
                        }
                   )
                ) // .pipe( cleanHTML() )
                .pipe( gulp.dest( './public' ) );
);
~~~

<!-- TODO csv -->

## 名称

| 名称 |　説明 |
|:--|:--|
| コンテンツ HTML | コンテンツと拡張タグだけが書かれた HTML |
| テンプレート HTML | コンテンツ HTML、ミックスインから参照される。必ずインラインスクリプト `{$$ this.CONTENTS $$}}` を持つこと |
| ミックスイン | json 形式、または js のオブジェクト |
| 拡張タグ ページのプロパティ | `<script type="nice-page-builder/object" for="page-option">` |
| 拡張タグ `beforeBuild` スクリプト | `<script type="nice-page-builder/js" for="beforeBuild">` |
| 拡張表記 インラインスクリプト | `{$$ $$}` |
| 拡張表記 ソースのルート相対パスを相対パスへ | `($$ $$)` |

MIXIN と TEMPLETE はソ―スのルート下に置く。コンテンツ HTML 等からルート相対パスで参照するため。

json にはその制限がありません。

## 実行フロー

1. コンテンツだけの HTML、このページのプロパティで関連付けられたテンプレートファイルとミックスインファイルの読み込み
2. `"json"` に記述された json ファイルの読み込み
3. HTML に拡張タグ内に記述された `beforeBuild` スクリプトの実行
4. 書き出し 


## 拡張タグ

[Nice Page Builderのマニュアル &gt; 5. HTML の拡張タグ](https://outcloud.blogspot.com/2016/12/npb-manual.html?m=0#nice_page_builder_5_1)


~~~html
<script type="nice-page-builder/object" for="page-option">
{
　TEMPLETE : '/Templetes/templete.html',
　MIXINS   : ['/Mixin/top.json'],
　title    : '俺のサイトにようこそ！'
}
</script>
~~~

~~~html
<script type="nice-page-builder/js" for="beforeBuild">
// 全ページから label を回収
var labels = {}, path, label;
for( path in pages ){
    if( pages[path].label ) labels[ label ] = true;
};
// ラベルリストを書きだすメソッドの追加
Page.prototype.ALL_LABELS = labels;
Page.prototype.createLabelList = function(){
    var html = [], label;
    for( label in this.ALL_LABELS ){
        html.push('<b>' + label + '</b>');
    };
    return html.join(',');
};
</script>
~~~

## 拡張表記

[Nice Page Builderのマニュアル &gt; 6. HTML の拡張表記](https://outcloud.blogspot.com/2016/12/npb-manual.html?m=0#nice_page_builder_6_1)

~~~html
<main>{$$ this.CONTENT $$}</main>
~~~

~~~html
<link href="($$ /campany/about.html $$)">
↓
<link href="about.html">
~~~

## Page クラス

[Nice Page Builderのマニュアル &gt; 7. Page クラス](outcloud.blogspot.com/2016/12/npb-manual.html?m=0#nice_page_builder_7_1)

## Tutorials

~~~
npm install
~~~

[gulpfile.js](./gulpfile.js) を確認します。

### 1. テンプレート、拡張タグ、インラインスクリプトについて

[tutorial/1/source](./tutorial/1/source) フォルダの [index.html](./tutorial/1/source/index.html) と [templete.html](./tutorial/1/source/templete.html) を確認したら、次の gulp タスクを実行します。

~~~
gulp tutorial_1
~~~

`tutorial/1/output` フォルダに生成された [output/index.html](./tutorial/1/output/index.html) を確認します。

[source/index.html](./tutorial/1/source/index.html) の拡張タグ(`<script type="nice-page-builder/object" for="page-option">`)内で定義されている `TEMPLETE:'/templete.html'` がテンプレートを呼び出していること。

[source/templete.html](./tutorial/1/source/templete.html) のインラインスクリプト(`{$$ this.CONTENT $$}`)が [source/index.html](./tutorial/1/source/index.html) の本文(`<p>Hello, World!`)に置き換わったことを確認します。

### 2. 任意のプロパティを追加してみる

[tutorial/2/source](./tutorial/2/source) フォルダの [index.html](./tutorial/2/source/index.html) の拡張タグに `title` が追加されていることを確認します。

[templete.html](./tutorial/2/source/templete.html) には `<title>{$$ this.title $$}</title>` と `<h1>{$$ this.title $$}</h1>` が追加されています。確認の後に次の gulp タスクを実行します。

~~~
gulp tutorial_2
~~~

`title` は Web サイト開発者が定義したプロパティになります。

[index.html](./tutorial/2/source/index.html) の `title` を削除した場合は、[templete.html](./tutorial/2/source/templete.html) の拡張タグの `title` プロパティの値 `'No Title!'` が使用されます。

### 3. 複数ページの制作、`MIXINS` で各ページで共通する値を別ファイルに分離する

~~~
gulp tutorial_3
~~~

### 4. “ソースのルート相対リンク”から“相対リンク”へ変換

~~~
gulp tutorial_4
~~~

### 5. `beforeBuild` コールバックと `Page` クラスの拡張

~~~
gulp tutorial_5
~~~

### 6. `page.getJSON()` を使う

~~~
gulp tutorial_6
~~~

## Links

* [github]
* [npm]

## For more information

* [Nice Page Builderをブログ書きながらテストしていったよ](http://outcloud.blogspot.jp/2016/12/npb-test.html)
* [Nice Page Builderのマニュアル](http://outcloud.blogspot.jp/2016/12/npb-manual.html)

## History

0.1.x までは Visual Studio Code エクステンションでした。

[Visual Studio Marketplace > Nice Page Builder](https://marketplace.visualstudio.com/items?itemName=itozyun.nice-page-builder)

**Enjoy!**