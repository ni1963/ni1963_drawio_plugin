/**
* A draw.io plugin for inserting a custom text (or ellipse) element,
* either by keyboard Ctrl+Shift+T (or Ctrl+Shift+Q) or by menu
*/
Draw.loadPlugin(function(ui) {
    /* Finding assigned keys:
    
      * Open javascript console
      * Draw.valueOf()
      * Traverse to: Object > loadPlugin > <function scope> 
                    > ui > keyHandler > controlShiftKeys
      * The number here is ASCII character code 
    */
    
    // Adds resources for actions
    mxResources.parse('myInsertText=Insert text element');
    mxResources.parse('myInsertEllipse=Insert ellipse');
    mxResources.parse('test=test');
    
    // Adds action : myInsertEllipse
    ui.actions.addAction('myInsertEllipse', function() {
        var theGraph = ui.editor.graph;
        console.log ( ui.editor.graph );
        if(theGraph.isEnabled() && !theGraph.isCellLocked(theGraph.getDefaultParent())){
          var pos=theGraph.getInsertPoint();
          console.log(pos);
          var newElement=new mxCell("",
                    new mxGeometry(pos.x, pos.y, 10, 10),
                    "ellipse;whiteSpace=wrap;html=1;");
        
          newElement.vertex=!0;
          theGraph.setSelectionCell(theGraph.addCell(newElement))
        }
    }, null, null, "Ctrl+Shift+Q");
    
    ui.keyHandler.bindAction(81, !0, "myInsertEllipse", !0);
    
    ui.actions.addAction('myInsertText', function() {
        var theGraph = ui.editor.graph;
        if(theGraph.isEnabled() && !theGraph.isCellLocked(theGraph.getDefaultParent())){
          var pos=theGraph.getInsertPoint();
          var newElement=new mxCell("test_text",
                    new mxGeometry(pos.x, pos.y, 80, 80),
                    "text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;whiteSpace=wrap;overflow=auto");
        
          newElement.vertex=!0;
          theGraph.setSelectionCell(theGraph.addCell(newElement))
        }
    }, null, null, "Ctrl+Shift+T");
    
    ui.keyHandler.bindAction(84, !0, "myInsertText", !0);
    
    
    //test
    ui.actions.addAction('test', function() {
        // Check for the various File API support.
		if (window.File && window.FileReader && window.FileList && window.Blob) {
		  // Great success! All the File APIs are supported.
		  alert('success');
		} else {
		  alert('The File APIs are not fully supported in this browser.');
		}
		
		window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
		
		function onError () { console.log ('Error : ', arguments); }

		navigator.webkitPersistentStorage.requestQuota (1024*1024*1024, function(grantedBytes) {
		  console.log ('requestQuota: ', arguments);
		  requestFS(grantedBytes);
		}, onError);

		function requestFS(grantedBytes) {
		  window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes, onInitFs, onError);
		}

		function onInitFs(fs) {
		  // getFile の第2引数で「create: true」を付けるとファイルを新規作成する。
		  fs.root.getFile('log.txt', {create: true, exclusive: true}, function(fileEntry) {
		    console.log(fileEntry.isFile); // true
		    console.log(fileEntry.name); // log.txt 
		    console.log(fileEntry.fullPath); // /log.txt 
		    
		  }, onError);
		  
		  
		  fs.root.getFile('log.txt', {}, function(fileEntry) {

		    // Get a File object representing the file,
		    // then use FileReader to read its contents.
		    fileEntry.file(function(file) {
		       console.log(file);
		       var reader = new FileReader();

		       reader.onloadend = function(e) {
		         var txtArea = document.createElement('textarea');
		         txtArea.value = this.result;
		         document.body.appendChild(txtArea);
		       };
		       reader.readAsText(file);
		    }, onError);

		  }, onError);
			  
			  
		  fs.root.getFile('log.txt', {create: true}, function(fileEntry) {

		    // Create a FileWriter object for our FileEntry (log.txt).
		    fileEntry.createWriter(function(fileWriter) {

		      fileWriter.onwriteend = function(e) {
		        console.log('Write completed.');
		      };

		      fileWriter.onerror = function(e) {
		        console.log('Write failed: ' + e.toString());
		      };

		      // Create a new Blob and write it to log.txt.
		      var bb = new Blob(['Lorem Ipsum']);
		      fileWriter.write(bb);
		    }, onError);
		  }, onError);
		}
		
		
		
    }, null, null, "Ctrl+Shift+E");
    ui.keyHandler.bindAction(69, !0, "test", !0);
    
    // Adds menu
    ui.menubar.addMenu('My Menu', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'myInsertText');
        ui.menus.addMenuItem(menu, 'myInsertEllipse');
        ui.menus.addMenuItem(menu, 'test');
    });

    // Reorders menubar
    ui.menubar.container
      .insertBefore(ui.menubar.container.lastChild,
                    ui.menubar.container.lastChild.previousSibling.previousSibling);
});
