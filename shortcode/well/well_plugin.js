(function() {
    tinymce.create('tinymce.plugins.oscitasWell', {
        init : function(ed, url) {
            ed.addButton('oscitaswell', {
                title : 'Well Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    create_oscitas_well();
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'Well Shortcode',
                        'href' : '#oscitas-form-well',
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
                longname : "Well Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "2.0.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitaswell', tinymce.plugins.oscitasWell);
})();

function create_oscitas_well(){
    if(jQuery('#oscitas-form-well').length){
        jQuery('#oscitas-form-well').remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-well"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-well-type">Well Type:</label></th>\
				<td><select name="type" id="oscitas-well-type">\
					<option value="">Default</option>\
					<option value="well-lg">Large</option>\
					<option value="well-sm">Small</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-well-content">Well Content:</label></th>\
				<td><textarea name="well" id="oscitas-well-content">Your Content</textarea><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-well-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-well-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-well-submit" class="button-primary" value="Insert Well" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();
   

        
		
    // handles the click event of the submit button
    form.find('#oscitas-well-submit').click(function(){
        var cusclass='';
        if(table.find('#oscitas-well-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-well-class').val()+'"';
        }
        var shortcode = '[well type="'+jQuery('#oscitas-well-type').val()+'"'+cusclass+']<br class="osc"/>';
        shortcode += jQuery('#oscitas-well-content').val()+'<br class="osc"/>';
        shortcode += '[/well]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        // closes fancybox
        jQuery.fancybox.close();
    });
}

