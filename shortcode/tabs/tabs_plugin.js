(function() {
    tinymce.create('tinymce.plugins.oscitasTabs', {
        init : function(ed, url) {
            ed.addButton('oscitastabs', {
                title : 'Tabs Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    ed.selection.setContent('[tabs class="yourcustomclass"]<br/>[tab title="Tab number 1" active="active"]Tab 1 content goes here.[/tab]<br/>[tab title="Tab number 2"]Tab 2 content goes here.[/tab]<br/>[tab title="Tab number 3"]Tab 3 content goes here.[/tab]<br/>[tab title="Tab number 4"]Tab 4 content goes here.[/tab]<br/>[/tabs]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : "Tabs Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "2.0.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitastabs', tinymce.plugins.oscitasTabs);
})();
