(function() {
    tinymce.create('tinymce.plugins.oscitasNotifications', {
        init : function(ed, url) {
            ed.addButton('oscitasnotifications', {
                title : 'Notifications Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    create_oscitas_notification();
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'Notifications Shortcode',
                        'href' : '#oscitas-form-notifications',
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
                longname : "Notifications Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "2.0.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitasnotifications', tinymce.plugins.oscitasNotifications);
})();

function create_oscitas_notification(){
    if(jQuery('#oscitas-form-notifications').length){
        jQuery('#oscitas-form-notifications').remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-notifications"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-type">VideoServer</label></th>\
				<td><select name="type" id="oscitas-type">\
					<option value="alert-warning">Warning</option>\
					<option value="alert-success">Success</option>\
					<option value="alert-info">Information</option>\
					<option value="alert-danger">Danger</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-line">Close link</label></th>\
				<td><input type="checkbox" id="oscitas-close"/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-note-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-note-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-submit" class="button-primary" value="Insert Notification" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();
		
    // handles the click event of the submit button
    form.find('#oscitas-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var options = { 
            'type'       : 'error'
        };
        var cusclass='';
        if(table.find('#oscitas-note-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-note-class').val()+'"';
        }
        var shortcode = '[notification';
			
        for( var index in options) {
            var value = table.find('#oscitas-' + index).val();
				
            // attaches the attribute to the shortcode only if it's different from the default value
            //if ( value !== options[index] )
            shortcode += ' ' + index + '="' + value + '"';
        }
        shortcode += ' close="'+(table.find('#oscitas-close').prop('checked')? 'true': 'false')+ '" ';
			
        shortcode += cusclass+']Title: Lorem ipsum dolor sit amet...[/notification]';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        jQuery.fancybox.close();
    });
}

