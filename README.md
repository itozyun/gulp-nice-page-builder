# Nice Page builder

![](https://4.bp.blogspot.com/-_jS4oD7mDQ8/WJFq8Z7sZ-I/AAAAAAAARP0/SJJHoRWJ37cwdBuO2pvuHQ_rY3GI1nIHQCLcB/s800/NicePageBuilder_package.jpg '')

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
               .pipe( nicePageBuilder( {
                    rootPath : './src',
                    json     : {
                        comments : 'json/comments.json',
                        tweets   : 'jsons/tweets.json'
                    }
                }) )
                .pipe( cleanHTML() )
                .pipe( gulp.dest( './public' ) );
);
~~~

TODO csv

## tutorial

~~~
npm install
~~~

[gulpfile.js](./gulpfile.js) を確認します。

MIXIN と TEMPLETE はソ―スのルート下に置く。

json はその制限がない


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

### 6. `page.getJSON()` の活用

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

VS Code エクステンションの静的サイトジェネレータでした。

[Visual Studio Marketplace > Nice Page Builder](https://marketplace.visualstudio.com/items?itemName=itozyun.nice-page-builder)

**Enjoy!**