(function() {
    tinymce.create('tinymce.plugins.oscitasTabs', {
        init : function(ed, url) {
            ed.addButton('oscitastabs', {
                title : 'Tabs Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    ed.selection.setContent('['+$ebs_prefix+'tabs class="yourcustomclass"]<br/>['+$ebs_prefix+'tab title="'+ebsjstrans.tabnum+' 1" active="active"]'+ebsjstrans.tab+' 1 '+ebsjstrans.content+' '+ebsjstrans.goes+' '+ebsjstrans.here+'.[/'+$ebs_prefix+'tab]<br/>['+$ebs_prefix+'tab title="'+ebsjstrans.tabnum+' 2"]'+ebsjstrans.tab+' 2 '+ebsjstrans.content+' '+ebsjstrans.goes+' '+ebsjstrans.here+'.[/'+$ebs_prefix+'tab]<br/>['+$ebs_prefix+'tab title="'+ebsjstrans.tabnum+' 3"]'+ebsjstrans.tab+' 3 '+ebsjstrans.content+' '+ebsjstrans.goes+' '+ebsjstrans.here+'.[/'+$ebs_prefix+'tab]<br/>['+$ebs_prefix+'tab title="'+ebsjstrans.tabnum+' 4"]'+ebsjstrans.tab+' 4 '+ebsjstrans.content+' '+ebsjstrans.goes+' '+ebsjstrans.here+'.[/'+$ebs_prefix+'tab]<br/>[/'+$ebs_prefix+'tabs]');
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
