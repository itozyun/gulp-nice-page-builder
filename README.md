# gulp-nice-page-builder

![](https://4.bp.blogspot.com/-_jS4oD7mDQ8/WJFq8Z7sZ-I/AAAAAAAARP0/SJJHoRWJ37cwdBuO2pvuHQ_rY3GI1nIHQCLcB/s800/NicePageBuilder_package.jpg '')

[html.json](https://github.com/itozyun/html.json) をラップして使用する Static Site Generator. 通常 gulp プラグイン版を使う．

Streaming SSR が可能です．

---

## Overview 概要

![](nice-page-builder.drawio.png)

[Edit on draw.io](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22%E3%83%9A%E3%83%BC%E3%82%B81%22%20id%3D%22hWPulbVjfiungVMZC6j8%22%3E7VxNW6M6FP4ts%2BhyfCBACkttHWcxM%2Fpc73w4O4TYohQqTW17f%2F1NgBQSagu1B6m6UXKABN73zcnJSWjPGEyWF4k7HX%2BPfRL2kOYve8awhxDWHfaXG1aZod%2FXM8MoCfzMVDJcB%2F%2BR3Kjl1nngk5l0IY3jkAZT2ejFUUQ8KtncJIkX8mV3cSi3OnVHpGK49tywav0d%2BHScWW1NK%2BxfSTAaU%2BXExBXX5obZ2PXjRclknPeMQRLHNDuaLAck5NAJWLL7vjxzdv1cCYlonRt%2B2b8mF%2FokPvvr24%2F3%2FqV576DPG2rJTTO6EhCwJ5%2Fywyim7N%2FZYhxQcj11PW5bMNKZbUwnISvp7PDW9R5GSTyP%2FMs5DYOI5HbfTR4u2V0B5UrQTjQrNc7GxM%2BvyBp%2BcsN53nBuIAkly9LD5e93QeIJocmKXTIuMaALBhZlujJTXothW1l5JWvNzbUyWtdc4MkOckgbwIveJ7x9GV4EBa%2FxPuHFMrwGFLzmu4TXsltSL64Db4pVCoK2G93DYISrEKG%2BJjtMywICxakDCnsbKr%2B5GwajiB177C6SMAN%2F54CN4qf5iUng%2B%2BFzApVBvosjmschSNuMKg55%2B37wxA5H%2FJCSyTR0KTlJnyk%2FzwAoXbIXF0aVi7WERYSl6BVDUaPXCha6x43LWwtfgxpktkVNo0DDcxN%2FtzN5rcFN9jRwo5veKHroNGaKd0YmGGaNQoJOY2YrmFlgmFkfbnOH27QUbjTZbfbhfECtGOwY9GypeobzAccQov0IPHLljsjZPAh9kqQiRvezODqUZisRcR8KbzH%2F6DTeu0Likwz7Nr0INmSGDLAesSkX1%2BpEuTUvYzoyphhO9Y0i2qPGVPHc2AbD9LXzZe1hqnhn7IBhWisi7mYWx4BT2pHGvGrYcJv9hx24KrQ4UGkCdMQpR6yBibX%2FNsTKQywEP1urEKODydVuMl7Vm5292hBkwoVKtSZkXYVJiX5MsDFJSPk4YVICbxMsoDE6mOXflVLB7oRXkjq9WRhTjoAwHtT37VgqtBEUKbVmQ62RotsNSZnKdHxlrxz30EAMVLeJ9CL4cc43xaQtfp6lTZ6yC3R7ukybEufFyPY7TkL%2FExDH6mo7nH%2FKZxLEr2xIqpIezxOPbKlMJOlK6iCRf8r3Q%2FX41I7P02QGlQzmlUuZYqLUgjSDdyyaxA%2FrPVCoog%2ByDOifvAZ%2BfMPtJ1ZeGi5Llw1XeWGj%2F9zOmMjyJCR0afAkQ1WicVs%2BP2%2FhKg4YrgXTluJj1Soy1PO7CrYrFfWVMU23lQiJusmI0EpFqWzWr%2F0CJVkNlLRNICVNKFxH7An%2FFATz4o3gnhcKutPSqly6IknAXpH7o5IIMky2SdrslFospKhF3URWVy2mplSkTnSg1YLfpFrwh1pA1GK%2FVC1e6M5mgbdNMG%2BTukpFuGXqnAN19I%2B4QeIVKdtdTc05sfaTSN%2FeWRWwSMQi2YdIYEWC0cFEsqEqaJF0MEewge2tW1peYUV6%2FZ2B2KOhzgsOt3O7W%2FmCYyHIUAiyEBhBxkvd7NGFUfraSwl01RzmvoEUbjmQMptkat4EeYbjSIjr6o68facvla8roKl7cWrk2KjDyFT63d7kYaR8GaNWBE1ereXrTmXBrVK6OluZWCevreGhhrFdW0HhwowOrpw3IGTaBhuVjeZwbNRaLn%2BejZDc0cN1DlyHCyddBNKkJZ3SstHwsukSEX5miejfm6tzTl22O6K8Mng44rHSDSGCyfk%2F9uLnw%2FyvZ9HRz9n424%2F7x6jeR9ztuUW0m3mJ5U%2BM5oyfgmoR55dmCJp43oLdJOWjQvYGlmGnEbrCPJajJcsAIr5bs7x6xG8lNHVBFT7XjuI5fai0igoKZYmev655AEZ%2B5cMiqG5fazdvW%2B4ejvsh8HY2S6FP%2Bbh%2Bj9%2BGYMXiZz2y4Lf4aRTj%2FH8%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

1. Generate HTML from template
2. Separate common data shared by multiple pages into external files
3. Site developers can freely add and call functions that return html(.json)

---

1. テンプレートとメタ情報から完全な HTML 文書を生成します
   * SSG, Streaming SSR が可能です
2. 複数ページで共通するメタ情報を JSON ファイルに分離する(Mixin)
3. [html.json](https://github.com/itozyun/html.json) をラップしています
   1. nicePageBuilder.html2json
      * *.html ファイルを *.html.json ファイルに変換する
        * メタ情報を `Array` の先頭に追加した `HTMLJsonWithMetadata` 形式の .json ファイルです
      * 参照されているテンプレートと Mixin をまとめたファイルを作成する
   2. nicePageBuilder.json2json
      * 動的ページのリストを出力する
      * `<? ?>` と動的属性(`<a :href="">`) を置き換える
      * `onEnterNode(currentVNode)` で VDOM を使った文書ツリーの変更ができる
      * `onDocumentReady(rootVNode)` で VDOM を使った文書ツリーの変更ができる
   3. nicePageBuilder.builder
      * 参照する Mixin とテンプレートのメタ情報をページのメタ情報にコピーする
      * *.html.json をテンプレートに埋め込んで完全な html.json 文書にする
   4. nicePageBuilder.json2html
      * *.html.json(`HTMLJsonWithMetadata` 形式) を *.html に変換する
      * `<? ?>` と動的属性(`<a :href="">`) を置き換える
      * `onEnterNode(currentVNode)` で VDOM を使った文書ツリーの変更ができる
   5. nicePageBuilder.builder.stream
      * Streaming SSR
   6. nicePageBuilder.json2html.stream
      * Streaming SSR
   7. nicePageBuilder.dest
      * gulp plugin only
      * json ファイルを gulp の出力に加えます
        * NicePageBuilder.DEST_TARGET.ALL_MIXINS
        * NicePageBuilder.DEST_TARGET.ALL_TEMPLATES
        * NicePageBuilder.DEST_TARGET.ALL_PAGE_METADATA
        * NicePageBuilder.DEST_TARGET.ALL_ADDITIONAL_JSONS
        * NicePageBuilder.DEST_TARGET.ALL_PAGES

## Install

~~~sh
npm install gulp-nice-page-builder
git submodule update --init --force --recursive --depth=2
git submodule foreach git pull origin main
~~~

## Build and test

~~~sh
gulp dist
gulp tutorial
npm run test
~~~

## gulp plugin の使用例

~~~js
gulp.task('html', function(){
    const nicePageBuilder = require('gulp-nice-page-builder').gulp({srcRootPath: 'src', urlOrigin: '//example.com/'});

    return gulp.src(
                   ['./src/**/*.html', './src/**/*.htm', './src/**/*.xhtml', './src/**/*.php', './src/**/*.json']
              ).pipe(
                   nicePageBuilder.html2json(null, {trimWhitespaces: 'aggressive'})
              ).pipe(
                   nicePageBuilder.builder()
              ).pipe(
                   nicePageBuilder.json2html()
              ).pipe(
                   gulp.dest('./public')
              );
});
~~~

## 用語解説

| 名称            | 拡張子                    | 説明                                                                                                       |
|:----------------|:--------------------------|:-----------------------------------------------------------------------------------------------------------|
| メタ情報 *1     |                           | ページ、テンプレート内 `<script type="application/json">{...}</script>` または Mixin に書いておく          |
| ページ *2       | .html, .htm, .xhtml, .php | コンテンツとメタ情報だけが書かれた HTML                                                                    |
| テンプレート    | .html, .htm, .xhtml, .php | ページ、Mixin から参照される．必ず単一の `<slot></slot>` を持つ．テンプレートは入れ子にできます．          |
| Mixin           | .json                     | 複数ページで共通のメタ情報を記述した json ファイル．ページ(.html), テンプレート, 他の Mixin から参照される |

1. メタ情報の各プロパティの優先度
   1. ページ
   2. ページの MIXINS\[0]
      * ページの MIXINS\[0] の MIXINS\[0] ~ MIXINS\[z] (MIXIN は入れ子にできる)
   3. ページの MIXINS\[z]
   4. テンプレート
   5. テンプレートの MIXINS\[0]
      * テンプレートの MIXINS\[0] の MIXINS\[0] ~ MIXINS\[z] (MIXIN は入れ子にできる)
   6. テンプレートの MIXINS\[z]
2. テンプレート、メタ情報、Mixin を使用しないプロジェクトも可能だが、その場合 [html.json](https://github.com/itozyun/html.json) だけで事足りる．

## メタ情報の定義積みプロパティ

| 名称        | 型               | 説明                         | ページ(.html)     | テンプレート | Mixin |
|:------------|:-----------------|:-----------------------------|:------------------|:-------------|:------|
| TEMPLATE    | `string`         | テンプレート(.html) へのパス | ✓                | ✓           | ✓    |
| MIXINS      | `Array.<string>` |                              | ✓                | ✓           | ✓    |
| URL         | `string`         | `"/contact/"`                | ✓                | -            | -     |
| CREATED_AT  | `number`         |  `file.stat.birthtimeMs`     | ✓                | -            | -     |
| MODIFIED_AT | `number`         |  `file.stat.ctimeMs`         | ✓                | -            | -     |
| UPDATED_AT  | `number`         | ページとそれが参照する Mixin 及びテンプレートの MODIFIED_AT の内の最大の値．*1 | ✓ | - | - |

1. Mixin のメタ情報がページ(.html)にコピーされなかった場合、ページ(.html)の UPDATED_AT は更新されません．

これ以外のプロパティは Web 開発者が任意に定義します。ページのメタ情報は `pageContext.getMetadata()`, `pageContext.getMetadataOf(path)` で取得できます。

### ページの例

`src/index.html`

メタ情報は一番最初に書くことを推奨

~~~html
<script type="application/json">
{
     "TEMPLATE" : "/template.html"
}
</script>
<p>Hello, World!
~~~

### テンプレートの例

`src/template.html`

`<slot>` 要素を持つファイルはテンプレートとして扱われます．テンプレートにひとつです．

`<? ?>` PROCESSING_INSTRUCTION を使う場合、ファイル拡張子をコードハイライトの効く .php にするのが良い、その場合 `gulp.src()` に `"src/**/*.php"` を加えること．

~~~html
<!DOCTYPE html>
<script type="application/json">
{
     "MIXINS" : [ "/common.json" ]
}
</script>
<html>
<body>
<main>
     <slot></slot>
</main>
~~~

## html.json と nice-page-builder の .json データの比較

### html.json のドキュメント

先頭が数値(9: `DOCUMENT` または 11: `DOCUMENT_FRAGMENT`)で始まります．

~~~json
[
   9, "<!DOCTYPE html>", ["html"]
]
~~~

### nice-page-builder のメタ情報付き html.json のドキュメント

先頭にメタ情報 `{}` のある配列です．

~~~json
[
   {"URL":"/"},
   9, "<!DOCTYPE html>", ["html"]
]
~~~

メタ情報が `TEMPLATE` を持つ場合、`nicePageBuilder.builder()` を通すとテンプレートが適用されます．

~~~json
[
   {"URL":"/contact/", "TEMPLATE":"/base.html"},
   11, ["p", "Hello, world."]
]
~~~

## Links

* [github](https://github.com/itozyun/gulp-nice-page-builder)
* [npm](https://www.npmjs.com/package/gulp-nice-page-builder)
* [html.json](https://github.com/itozyun/html.json)
* [MemoryReadableStream](https://outcloud.blogspot.com/2025/10/memory-readable-stream.html) 「Node.js でメモリ上のデータから stream を作る」

## History

0.4.x までは html.json を使っていませんでした．

0.1.x までは Visual Studio Code エクステンションでした．[Visual Studio Marketplace > Nice Page Builder](https://marketplace.visualstudio.com/items?itemName=itozyun.nice-page-builder)

**Enjoy!**

## License

[gulp-nice-page-builder](https://github.com/itozyun/gulp-nice-page-builder) is licensed under MIT license.

(C) 2024-2026 [itozyun](https://github.com/itozyun)([blog](//outcloud.blogspot.com/))