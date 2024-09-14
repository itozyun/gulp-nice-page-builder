# html.json と

1. TEMPLETE + slot
   * ~~`srcRootPath` は TEMPLETE, MIXINS の解決だけに使用する~~ (?)
   * ~~nest する TEMPLETE、MIXIN も~~ ✓
2. html2json で json 化の前に実行する関数
   * ~~jsdom 使用可能(-> parse5 + TynyTemplete)~~
     * table + ol
       * ページ内リンク追加
3. html2json で json 化の後に実行する関数
   * ~~`[ { ...meta }, ...htmlJSON ]` メタ情報を Array の先頭に追加~~ ✓
4. json2json の前に
   * ~~TEMPLETE を辿る, MIXINS の最終値~~ ✓
4. json2json, json2html で node に出会う度に実行する関数
   1. `function( currentHTMLJson, [ parentHTMLJSON, .... ] )`
   2. json2json 用
      * json2html.steream に適さないものをここで実施
      * TOC
        * `<a name=>` 追加
        * `1.1` 追加
        * page-options に toc を追加
   3. json2html.steream 用
      * URL 最適化 `[href]`, `[src]`
        * 相対パスのものはそのまま、但し ./ を削除
        * 常に相対パス(URL)
        * 常にルート相対パス(URL)
        * どちらか短い方
      * `rel="nofollow" target=_blank` 追加
      * table の IE6 以下対応
        * `table class=border-1`
