# kanban0
## 概要
webアプリ用看板システム
練習で作ってるので適当です。遊び程度でお願いします
Ajax

## 使用方法
使用したいhtmlファイル内で
```<script src="../lib/kanban0.js"></script>```
で読み込みます
使用したい場所に
```
<div class="kanban-area">
    <!--使用したい個数分かく -->
    <div class="kanban" data-kanbanid="0" data-disabled="0">
    <div class="kanban" data-kanbanid="1" data-disabled="0,1,2">
    <div class="kanban" data-kanbanid="2" data-disabled="">
    <div class="kanban" data-kanbanid="3" data-disabled="0,2">
</div>
```
    
と記述します
data-disabledには特定の看板からのドロップ禁止が指定できます。指定はkanbanidで指定します
data-kanbanに看板のidを割振れます

各種設定は(英語苦手なので説明は無理です)

```
<script>
    var kanban_0 = new kanban0({
        thema_type   : 0,            //you can change kanban thema color . thema_type : 0: nomal-thema-color, 1: for deuteranopia-color, 2:dark-thema-color -1: custom-thema-color (you need set thema-color by API).if you want to choose another thema-color ,you can use kanban API.
        ajax_mode    : false,        //if you want to use ajax, change ajax_mode: true
        ajax_host    : "https://example.com"
        form_mode    : false,
        form_action  : "/end_point"
        form_method  : "post"
    });
</script>
```

で行えます。コンストラクタでできる設定は最低限なので各種メゾットを呼び出して自分で設定してください。
以下にAPIを載せておきます


| Method           | Arguments                                                                           | desc                                    |
|------------------|-------------------------------------------------------------------------------------|-----------------------------------------|
| setKanbanBakCol  | kanbanid,<br> color,<br> constant                                                   | constant:<br>HEADER,<br>BODY,<br>BORDER |
| setkanbanFontCol | kanbanid,<br> color,<br> constant                                                   | constant:<br>HEADER,<br>BODY            |
| addKanban        | title, <br>header-color,<br> back-color, <br>font-header-color, <br>font-body-color | fixed                                   |
| addKanbanItem    | itemid<br>content, <br>font-color                                                   | fixed                                   |
| setEventItem     | itemid<br>eventName,<br> eventHander                                                | eventName:<br>drop <br>click            |

    
