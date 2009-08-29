function yui_editor_bidi() {
  for (var e in YAHOO.Drupal.editors) {
    var myEditor = YAHOO.Drupal.editors[e].editor;
    var config = YAHOO.Drupal.editors[e].config;
    var id = YAHOO.Drupal.editors[e].id;

    if (config.bidi == 1) {
      myEditor.on('toolbarLoaded', function () {
        var bidiConfig = {
          type: 'push', label: 'Switch to Right-to-Left', value: 'bidi'
        };
        myEditor.toolbar.addButtonToGroup(bidiConfig, 'plugins');

        myEditor.toolbar.on('bidiClick', function(ev) {
          var rtlHTML ='im inserted here';
          var sel =  this._getSelection();
          myEditor.execCommand('inserthtml', '<p dir="rtl">'+sel+'</p>');
        }, myEditor, true);
      });
    }
  }
}
YAHOO.Drupal.yui_editor_load.subscribe(yui_editor_bidi);;// $Id: resize.js,v 1.1.2.1.2.1 2008/11/21 22:54:27 jeffcd Exp $

function yui_editor_resize() {
  for (var e in YAHOO.Drupal.editors) {
    var myEditor = YAHOO.Drupal.editors[e].editor;
    var config = YAHOO.Drupal.editors[e].config;

    if (config.resize == 1) {
      myEditor.on('editorContentLoaded', function() {
        resize = new YAHOO.util.Resize(myEditor.get('element_cont').get('element'), {
          handles: ['br'],
          autoRatio: true,
          status: true,
          proxy: true
        });
        resize.on('startResize', function() {
          this.hide();
          this.set('disabled', true);
        }, myEditor, true);
        resize.on('resize', function(args) {
          var h = args.height;
          var th = (this.toolbar.get('element').clientHeight + 2); //It has a 1px border..
          var dh = (this.dompath.clientHeight + 1); //It has a 1px top border..
          var newH = (h - th - dh);
          this.set('width', args.width + 'px');
          this.set('height', newH + 'px');
          this.set('disabled', false);
          this.show();
        }, myEditor, true);
      });
    }
  }
}
YAHOO.Drupal.yui_editor_load.subscribe(yui_editor_resize);
;// $Id: table.js,v 1.1.2.2 2008/11/21 22:54:27 jeffcd Exp $

function yui_editor_table() {
  for (var e in YAHOO.Drupal.editors) {
    var myEditor = YAHOO.Drupal.editors[e].editor;
    var config = YAHOO.Drupal.editors[e].config;
    var id = YAHOO.Drupal.editors[e].id;

    if (config.table == 1) {
      myEditor.on('toolbarLoaded', function () {
        var tableConfig = {
          type: 'push', label: 'Create Table', value: 'table'
        };
        myEditor.toolbar.addButtonToGroup(tableConfig, 'plugins');
        myEditor.win = null;

        myEditor.createTableHTML =
          '<table><tbody>' +
          '<tr><td>Rows:</td><td><input type="text" size="1" id="tableRows' + id + '" value="3"></td><td>Columns:</td><td><input type="text" size="1" id="tableColumns' + id + '" value="3"></td></tr>' +
          '<tr><td>Width:</td><td><input type="text" size="1" id="tableWidth' + id + '" value=""></td><td>Height:</td><td><input type="text" size="1" id="tableHeight' + id + '" value=""></td></tr>' +
          '<tr><td><br />Border Size:</td><td colspan="3"><br /><input type="text" size="1" id="tableBorderSize' + id + '" value="1"></td></tr>' +
          '<tr><td>Cell Spacing:</td><td colspan="3"><input type="text" size="1" id="tableCellspacing' + id + '" value="0"></td></tr>' +
          '<tr><td>Cell Padding:</td><td colspan="3"><input type="text" size="1" id="tableCellpadding' + id + '" value="0"></td></tr>' +
          '<tr><td colspan="4"><div align="right"><input type="button" id="tableCreate' + id + '" value="Create"></div></td></tr>' +
          '</tbody></table>';

        myEditor.toolbar.on('tableClick', function(ev) {
          if (this.win !== null) {
            this.win.setBody(myEditor.createTableHTML);
            this.win.show();
          }
          else {
            this.win = new YAHOO.widget.Panel('test', {
              modal: true,
              fixedcenter: true,
              draggable: false,
              width: '350px'
            });
            this.win.setHeader('Create Table');
            this.win.setBody(myEditor.createTableHTML);
            this.win.render(document.body);
            this.win.hideEvent.subscribe(function() {
              //Just to make sure we didn't loose it
              this._setDesignMode('on');
              this._focusWindow();
            }, myEditor, true);
          }

          var tableCreateButton = new YAHOO.widget.Button('tableCreate' + id);
          tableCreateButton.on('click', function() {
            var rows =
              document.getElementById('tableRows' + id).value.match('[0-9]+') ? document.getElementById('tableRows' + id).value : 3;
            var columns =
              document.getElementById('tableColumns' + id).value.match('[0-9]+') ? document.getElementById('tableColumns' + id).value : 3;
            var borderSize =
              document.getElementById('tableBorderSize' + id).value.match('[0-9]+') ? document.getElementById('tableBorderSize' + id).value : 1;
            var cellspacing =
              document.getElementById('tableCellspacing' + id).value.match('[0-9]+') ? document.getElementById('tableCellspacing' + id).value : 0;
            var cellpadding =
              document.getElementById('tableCellpadding' + id).value.match('[0-9]+') ? document.getElementById('tableCellpadding' + id).value : 0;
            var width =
              document.getElementById('tableWidth' + id).value.match('[0-9]+') ? document.getElementById('tableWidth' + id).value : 0;
            var height =
              document.getElementById('tableHeight' + id).value.match('[0-9]+') ? document.getElementById('tableHeight' + id).value : 0;
            var tableHTML =
              '<table border="' + borderSize + '" cellspacing="' + cellspacing + '" cellpadding="' + cellpadding + '" height="' + height + '" width="' + width + '"><tbody>';

            // Build table
            for (var i = 0;i < rows;i++) {
              tableHTML += '<tr>\n';

              for (var j = 0;j < columns;j++) {
                tableHTML += '<td>&nbsp;</td>\n';
              }

              tableHTML += '</tr>\n';
            }
            tableHTML += '</tbody></table>';
            myEditor.execCommand('inserthtml', tableHTML);
            createTablePanel.hide();
          });

	      return false;
	    }, myEditor, true);
      });
    }
  }
}
YAHOO.Drupal.yui_editor_load.subscribe(yui_editor_table);;// $Id: plaintext.js,v 1.1.2.3.2.1 2008/11/21 22:54:27 jeffcd Exp $

function yui_editor_plaintext() {
  for (var e in YAHOO.Drupal.editors) {
    var myEditor = YAHOO.Drupal.editors[e].editor;
    var config = YAHOO.Drupal.editors[e].config;
    var id = YAHOO.Drupal.editors[e].id;

    myEditor.plaintextState = 'off';
    if (config.plaintext == 1) {
      $("#"+id).after("<button id=\"toggleEditor-"+id+"\">"+ Drupal.t('Switch to Plain Editor') +"</button>");
      var _button = new YAHOO.widget.Button('toggleEditor-'+id);
      _button.addClass('toggleEditor');

      _button.on('click', function(ev, myEditor) {
        var Event = YAHOO.util.Event;
        var Dom = YAHOO.util.Dom;

        Event.stopEvent(ev);
        if (myEditor.plaintextState == 'off') {
          myEditor.plaintextState = 'on';
          myEditor.saveHTML();
          Dom.setStyle(myEditor.get('element_cont').get('firstChild'), 'position', 'absolute');
          Dom.setStyle(myEditor.get('element_cont').get('firstChild'), 'top', '-9999px');
          Dom.setStyle(myEditor.get('element_cont').get('firstChild'), 'left', '-9999px');
          myEditor.get('element_cont').removeClass('yui-editor-container');
          Dom.setStyle(myEditor.get('element'), 'visibility', 'visible');
          Dom.setStyle(myEditor.get('element'), 'top', '');
          Dom.setStyle(myEditor.get('element'), 'left', '');
          Dom.setStyle(myEditor.get('element'), 'position', 'static');
          _button.set("label", Drupal.t('Switch to Rich Text Editor'));
          $(".grippie").show();
          $(".teaser-checkbox").show();
        }
        else {
          myEditor.plaintextState = 'off';
          Dom.setStyle(myEditor.get('element_cont').get('firstChild'), 'position', 'static');
          Dom.setStyle(myEditor.get('element_cont').get('firstChild'), 'top', '0');
          Dom.setStyle(myEditor.get('element_cont').get('firstChild'), 'left', '0');
          Dom.setStyle(myEditor.get('element'), 'visibility', 'hidden');
          Dom.setStyle(myEditor.get('element'), 'top', '-9999px');
          Dom.setStyle(myEditor.get('element'), 'left', '-9999px');
          Dom.setStyle(myEditor.get('element'), 'position', 'absolute');
          myEditor.get('element_cont').addClass('yui-editor-container');
          myEditor._setDesignMode('on');
          myEditor.setEditorHTML(myEditor.get('textarea').value);
          _button.set("label", Drupal.t('Switch to Plain Editor'));
          $(".grippie").hide();
          $(".teaser-checkbox").hide();
        }
      }, myEditor);
    }

    var toggle = 'off';
    $('#toggleEditor-'+id).bind('click', function () { toggle = 'on'; });
    $('form').bind('submit', function (e) {
      if (toggle == 'on') {
        toggle = 'off';
        return false;
      }
      else if (myEditor.plaintextState == 'on') {
        myEditor.setEditorHTML(myEditor.get('textarea').value);
      }
      else {
        myEditor.saveHTML();
      }
    });
  }
}
YAHOO.Drupal.yui_editor_load.subscribe(yui_editor_plaintext);
;// $Id: flickr.js,v 1.1.2.3.2.2 2008/11/21 23:25:30 jeffcd Exp $

function yui_editor_flickr() {
  for (var e in YAHOO.Drupal.editors) {
    var myEditor = YAHOO.Drupal.editors[e].editor;
    var config = YAHOO.Drupal.editors[e].config;

    if (config.flickr == 1) {
      var gutter = null;
      myEditor.on('toolbarLoaded', function() {
        gutter = new YAHOO.gutter();
        var flickrConfig = {
          type: 'push',
          label: 'Insert Flickr Image',
          value: 'flickr'
        }

        myEditor.toolbar.addButtonToGroup(flickrConfig, 'plugins');

        myEditor.toolbar.on('flickrClick', function(ev) {
          myEditor._focusWindow();
          if (ev && ev.img) {
            var html = '<a href="' + ev.url + '"><img src="' + ev.img + '" title="' + ev.title + '"></a>';
            myEditor.execCommand('inserthtml', html);
          }

          gutter.toggle();
        });
        gutter.createGutter();
      });

      YAHOO.util.Event.onAvailable('flickr_search', function() {
        YAHOO.util.Event.on('flickr_results', 'click', function(ev) {
          var tar = YAHOO.util.Event.getTarget(ev);
          if (tar.tagName.toLowerCase() == 'img') {
            if (tar.getAttribute('fullimage', 2)) {
              var img = tar.getAttribute('fullimage', 2),
                  title = tar.getAttribute('fulltitle'),
                  owner = tar.getAttribute('fullowner'),
                  url = tar.getAttribute('fullurl');
              myEditor.toolbar.fireEvent('flickrClick', {
                type: 'flickrClick',
                img: img,
                title: title,
                owner: owner,
                url: url
              });
            }
          }
        });

        oACDS = new YAHOO.widget.DS_XHR("",
          ["photo", "title", "id", "owner", "secret", "server"]);
        oACDS.scriptQueryParam = "tags";
        oACDS.responseType = YAHOO.widget.DS_XHR.TYPE_XML;
        oACDS.maxCacheEntries = 0;
        oACDS.scriptQueryAppend = "q=yui_editor/flickr" + '&flickr_api_key=' + config.flickr_api_key;

        oAutoComp = new YAHOO.widget.AutoComplete('flickr_search','flickr_results', oACDS);
        oAutoComp.autoHighlight = false;
        oAutoComp.alwaysShowContainer = true;
        oAutoComp.formatResult = function(oResultItem, sQuery) {
          var sTitle = oResultItem[0];
          var sId = oResultItem[1];
          var sOwner = oResultItem[2];
          var sSecret = oResultItem[3];
          var sServer = oResultItem[4];
          var urlPart = 'http:/'+'/static.flickr.com/' + sServer + '/' + sId + '_' + sSecret;
          var sUrl = urlPart + '_s.jpg';
          var lUrl = urlPart + '_m.jpg';
          var fUrl = 'http:/'+'/www.flickr.com/photos/' + sOwner + '/' + sId;
          var sMarkup = '<img src="' + sUrl + '" fullimage="' + lUrl + '" fulltitle="' + sTitle + '" fullid="' +
            sOwner + '" fullurl="' + fUrl + '" class="yui-ac-flickrImg" title="Click to add this image to the editor"><br>';

          return (sMarkup);
        };
      });
    }

    (function() {
      var Dom = YAHOO.util.Dom,
          Event = YAHOO.util.Event;

      YAHOO.gutter = function() {
        return {
          status: false,
          gutter: null,
          createGutter: function() {
            this.gutter = new YAHOO.widget.Overlay('gutter1', {
              height: '425px',
              width: '300px',
              context: [
                myEditor.get('element'),
                'tl',
                'tr'
              ],
              position: 'absolute',
              visible: false
            });
            this.gutter.hideEvent.subscribe(function() {
              myEditor.toolbar.deselectButton('flickr');
              Dom.setStyle('gutter1', 'visibility', 'visible');
              var anim = new YAHOO.util.Anim('gutter1', {
                width: {
                  from: 300,
                  to: 0
                },
                opacity: {
                  from: 1,
                  to: 0
                }
              }, 1);
              anim.onComplete.subscribe(function() {
                Dom.setStyle('gutter1', 'visibility', 'hidden');
              });
              anim.animate();
            }, this, true);
            this.gutter.showEvent.subscribe(function() {
              myEditor.toolbar.selectButton('flickr');
              Dom.setStyle(this.gutter.element, 'width', '0px');
              var anim = new YAHOO.util.Anim('gutter1', {
                width: {
                  from: 0,
                  to: 300
                },
                opacity: {
                  from: 0,
                  to: 1
                }
              }, 1);
              anim.animate();
            }, this, true);

            var warn = '';
            if (myEditor.browser.webkit || myEditor.browser.opera) {
              warn = myEditor.STR_IMAGE_COPY;
            }
            this.gutter.setBody('<h2>Flickr Image Search</h2><label for="flikr_search">Tag:</label>' +
              '<input type="text" value="" id="flickr_search">&nbsp;<div id="flickr_results">' +
              '<p>Enter flickr tags into the box above, separated by commas. Be patient.<p></div>' + warn);
              this.gutter.render(document.body);
            },
            open: function() {
              Dom.get('flickr_search').value = '';
              this.gutter.show();
              this.status = true;
            },
            close: function() {
              this.gutter.hide();
              this.status = false;
            },
            toggle: function() {
              if (this.status) {
                this.close();
              }
              else {
                this.open();
              }
            }
          }
        }
      })
    ();
  }
}
YAHOO.Drupal.yui_editor_load.subscribe(yui_editor_flickr);
;// $Id: img_upload.2.6.js,v 1.1.2.1 2008/11/21 23:12:43 jeffcd Exp $

function yui_editor_img_upload() {
  for (var e in YAHOO.Drupal.editors) {
    var myEditor = YAHOO.Drupal.editors[e].editor;
    var config = YAHOO.Drupal.editors[e].config;

    if (config.img_upload == 1) {
      yui_img_uploader(myEditor, config.base_path + '?q=/yui_editor/image_upload', 'files[upload]', config.base_path, YAHOO.Drupal.editors[e].id);
    }
  }
}

function yui_img_uploader(rte, upload_url, upload_image_name, base_path, id) {
  rte.addListener('toolbarLoaded', function() {
    rte.toolbar.addListener('insertimageClick', function(o) {
      try {
        var imgPanel = new YAHOO.util.Element(id+'-panel');
        imgPanel.on ('contentReady', function() {
          try {
            var Dom = YAHOO.util.Dom;
            if(!document.getElementById('insertimage_upload')) {
              var label = document.createElement('label');
              label.innerHTML = '<strong>Upload:</strong>' +
              '<input type="file" id="insertimage_upload" name="' + upload_image_name +
              '" size="10" style="width: 20%"/>' +
              '<a href="#"  id="insertimage_upload_btn" style="width: 20%; margin-left: 10em;">Upload Image</a>' +
              '</label>';

              var img_elem=Dom.get(id+'_insertimage_url');
              Dom.getAncestorByTagName(img_elem, 'form').encoding = 'multipart/form-data';
              if (Dom.get(id+'_insertimage_url')) {
                Dom.insertAfter(label, img_elem.parentNode);
              }
            }

            YAHOO.util.Event.on('insertimage_upload_btn', 'click', function(ev) {
              YAHOO.util.Event.stopEvent(ev); // no default click action
              YAHOO.util.Connect.setForm(img_elem.form, true, true);
              var c = YAHOO.util.Connect.asyncRequest('POST', upload_url, { upload:
			    function(r) {
                  try {
                    resp = r.responseText.replace( /<hints .*/i, '');
                    var o = eval('('+resp+')');
                    if (o.status == 'UPLOADED') {
                      Dom.get('insertimage_upload').value = '';
                      Dom.get(id+'_insertimage_url').value = base_path + o.image_url;
                      Dom.get(id+'_insertimage_url').focus();
                      Dom.get('insertimage_upload').focus();
                    }
                    else {
                      alert ("Upload Failed: " + o.status);
                    }
                  }
                  catch (eee) {
                    YAHOO.log(eee.message, 'error');
                  }
                }
              });

              return false;
            });
          }
          catch (ee) {
            YAHOO.log(ee.message, 'error');
          }
        });
      }
      catch (e) {
        YAHOO.log(e.message, 'error');
      }
    });
  });
}
YAHOO.Drupal.yui_editor_load.subscribe(yui_editor_img_upload);
;