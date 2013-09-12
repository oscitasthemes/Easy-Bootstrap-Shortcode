(function() {
    tinymce.create('tinymce.plugins.oscitasToggles', {
        init : function(ed, url) {
            ed.addButton('oscitastoggles', {
                title : 'Toggles Shortcodes',
                image : url+'/icon.png',
                onclick : function() {
                    ed.selection.setContent('[toggles]<br/>[toggle title="Accordion number 1"]Toggle 1 content goes here.[/toggle]<br/>[toggle title="Accordion number 2"]Toggle 2 content goes here.[/toggle]<br/>[toggle title="Accordion number 3"]Toggle 3 content goes here.[/toggle]<br/>[toggle title="Accordion number 4"]Toggle 4 content goes here.[/toggle]<br/>[/toggles]');					        
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : "Toggles Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "1.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitastoggles', tinymce.plugins.oscitasToggles);
})();
