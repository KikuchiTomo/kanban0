# kanban0
## 概要
webアプリ用看板システム

練習で作ってるので適当です。遊び程度でお願いします

Ajaxとformに対応指定ます

まだバグだらけなのでコミットしません

## 使用方法
### include
使用したいhtmlファイル内で
```html
<link rel="stylesheet" href="../lib/css/kanban0.css">
<script src="../lib/kanban0.js"></script>
```
で読み込みます
使用したい場所に
```html
<div class="kanban-area">
    <!--使用したい個数分かく -->
    <div class="kanban" data-kanbanid="0" data-disabled="0"     data-title="kanban0"></div>
    <div class="kanban" data-kanbanid="1" data-disabled="0,1,2" data-title="kanban1"></div>
    <div class="kanban" data-kanbanid="2" data-disabled=""      data-title="kanban2"></div>
    <div class="kanban" data-kanbanid="3" data-disabled="0,2"   data-title="kanban3"></div>
</div>
```
    
と記述します

data-disabledには特定の看板からのドロップ禁止が指定できます。指定はkanbanidで使用します

また、data-kanbanに看板のidを割振れます。APIから看板を増やす場合は場合は一番おおきいid+1のidが割り振られます

htmlでのidは各看板に`id="kanban-%d-%d"`で割り振られます

### config

各種設定は(英語苦手なので説明は無理です)

```html
<script>
    var kanban_0 = new kanban0({
        ajax_mode    : false,                 //Ajaxで非同期通信する場合はtrue
        ajax_host    : "https://example.com"  //Ajaxでのpost先
        form_mode    : false,                 //formを使うか
        form_action  : "/end_point"           //formのaction指定
        form_method  : "post"                 //formのmethot指定
    });
</script>
```

で行えます。コンストラクタでできる設定は最低限なので各種メゾットを呼び出して自分で設定してください。

基本的な色の設定は`lib/css`直下の`color.css`にまとめて書いてあります
全体的なthema-colorの設定を変えたい場合はcolor.cssに色の記述を直接いじることも可能です。

### API 
以下にAPIを載せておきます


| Method         | Arguments                            | desc                                                                                    |
|----------------|--------------------------------------|-----------------------------------------------------------------------------------------|
| setEventItem   | itemid<br>eventName,<br> eventHander | アイテムにイベントハンドラを追加します<br>drop,dragS,dragE,clickが指定できます          |
| addKanban      | title                                | Kanbanを生成します。タイトルとその他の色を指定します。                                  |
| addItem        | kanbanid,<br>content, <br>font-color | itemを追加します。追加先のkanbanidと内容を指定します                                    |
| getKanbanId    | itemid                               | itemidに対する親要素のIDを取得します                                                    |
| getItemId      | kanbanid                             | kanbanidに対する子要素のIDを取得します。配列を返します                                  |
| getAllItemId   |                                      | 全てのitemのIDを取得します                                                              |
| getAllKanbanId |                                      | 全てのkanbanのIDを取得します                                                            |
| removeKanban   | kanbanid                             | 指定したIDのkanbanを削除します                                                          |
| removeItem     | itemid                               | 指定したIDのitemを削除します                                                            |
| sendHttpReq    |                                      | 呼び出したタイミングでAjaxでpostします<br>コンストラクタでfalseにしていると動作しません |
| formSubmit     |                                      | 呼び出したタイミングでFormをpostします<br>コンストラクタでfalseにしていると動作しません |






    
