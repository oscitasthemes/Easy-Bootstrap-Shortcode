(function() {
    tinymce.create('tinymce.plugins.oscitasBtngrptool', {
        init : function(ed, url) {
            ed.addButton('oscitasbtngrptool', {
                title : 'Button Group Toolbar Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    ed.selection.setContent('[btngrptoolbar class="yourcustomclass"][/btngrptoolbar]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : "Button Group Toolbar Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "2.0.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitasbtngrptool', tinymce.plugins.oscitasBtngrptool);
})();
