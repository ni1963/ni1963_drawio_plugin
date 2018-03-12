# ni1963_drawio_plugin

作業メモ
とりあえず、コード内にconsole.log(object)を記述してobjectの中身をChromeのデベロッパー　ツール(Ctrl + Shift + I)のConsoleから見るといろいろわかることも多い。

プラグインは
Draw.loadPlugin(function(ui) {//中身 }
と書いてui経由でいろいろ操作する感じで作る

基本中の基本
1. theGraph = ui.editor.graphでGraphオブジェクト取得 
2. theGraph.model.cellsにdraw.ioで配置されている図形のデータが格納されている（こいつらをいじれば既存の図形をいじれる）
3. theGraph.selectionModel.cellsに現在選択中の図形のデータが格納されている（選択した図形にアクセスできる）