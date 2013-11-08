(function() {
    tinymce.create('tinymce.plugins.oscitasLabels', {
        init : function(ed, url) {
            ed.addButton('oscitaslabels', {
                title : 'Label Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    create_oscitas_label();
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'Label Shortcode',
                        'href' : '#oscitas-form-label',
                        helpers:  {
                            title : {
                                type : 'over',
                                position:'top'
                            }
                        }
                    });
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : "Label Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "2.0.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitaslabels', tinymce.plugins.oscitasLabels);
})();

function create_oscitas_label(){
    if(jQuery('#oscitas-form-label').length){
        jQuery('#oscitas-form-label').remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-label" class="oscitas-container"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-label-type">Label Type:</label></th>\
				<td><select name="type" id="oscitas-label-type">\
					<option value="label-default">Default</option>\
					<option value="label-primary">Primary</option>\
					<option value="label-success">Success</option>\
					<option value="label-info">Information</option>\
					<option value="label-warning">Warning</option>\
					<option value="label-danger">Danger</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-label-content">Label Content:</label></th>\
				<td><input type="text" name="label" id="oscitas-label-content" value="Label"/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-label-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-label-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-label-submit" class="button-primary" value="Insert Label" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();
   

        
		
    // handles the click event of the submit button
    form.find('#oscitas-label-submit').click(function(){
        var cusclass='';
        if(table.find('#oscitas-label-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-label-class').val()+'"';
        }
        var shortcode = '[label type="'+jQuery('#oscitas-label-type').val()+'"'+cusclass+']<br/>';
        shortcode += jQuery('#oscitas-label-content').val()+'<br/>';
        shortcode += '[/label]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        // closes fancybox
        jQuery.fancybox.close();
    });
}

