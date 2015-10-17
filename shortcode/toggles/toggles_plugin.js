(function() {
    tinymce.create('tinymce.plugins.oscitasToggles', {
        init : function(ed, url) {
            ed.addButton('oscitastoggles', {
                title : 'Toggle/Accordion Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    ed.selection.setContent('['+$ebs_prefix+'toggles class="yourcustomclass"]<br/>['+$ebs_prefix+'toggle title="'+ebsjstrans.accordionnumber+' 1" class="in"]'+ebsjstrans.toggle+' 1 '+ebsjstrans.content+' '+ebsjstrans.goes+' '+ebsjstrans.here+'.[/'+$ebs_prefix+'toggle]<br/>['+$ebs_prefix+'toggle title="'+ebsjstrans.accordionnumber+' 2"]'+ebsjstrans.toggle+' 2 '+ebsjstrans.content+' '+ebsjstrans.goes+' '+ebsjstrans.here+'.[/'+$ebs_prefix+'toggle]<br/>['+$ebs_prefix+'toggle title="'+ebsjstrans.accordionnumber+' 3"]'+ebsjstrans.toggle+' 3 '+ebsjstrans.content+' '+ebsjstrans.goes+' '+ebsjstrans.here+'.[/'+$ebs_prefix+'toggle]<br/>['+$ebs_prefix+'toggle title="'+ebsjstrans.accordionnumber+' 4"]'+ebsjstrans.toggle+' 4 '+ebsjstrans.content+' '+ebsjstrans.goes+' '+ebsjstrans.here+'.[/'+$ebs_prefix+'toggle]<br/>[/'+$ebs_prefix+'toggles]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : "Toggle Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "2.0.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitastoggles', tinymce.plugins.oscitasToggles);
})();
