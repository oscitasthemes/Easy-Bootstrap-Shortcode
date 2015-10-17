var notifications={
    title:"Notifications Shortcode",
    id :'oscitas-form-notifications',
    pluginName: 'notifications'
};
(function() {
    _create_tinyMCE_options(notifications);
})();

function ebs_return_html_notifications(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-type">'+ebsjstrans.style+' :</label></th>\
				<td><select name="type" id="oscitas-type">\
						<option value="alert-success">'+ebsjstrans.success+'</option>\
						<option value="alert-info">'+ebsjstrans.information+'</option>\
						<option value="alert-warning">'+ebsjstrans.warning+'</option>\
						<option value="alert-danger">'+ebsjstrans.danger+'</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-line">'+ebsjstrans.close+' '+ebsjstrans.link+'</label></th>\
				<td><input type="checkbox" id="oscitas-close"/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-note-class">'+ebsjstrans.customclass+':</label></th>\
				<td><input type="text" name="line" id="oscitas-note-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.notification+'" name="submit" />\
		</p>\
		</div>');
    return form;
}
function create_oscitas_notifications(pluginObj){
    var form=jQuery(pluginObj.hashId);
    var table = form.find('table');


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
        var shortcode = '['+$ebs_prefix+'notification';

        for( var index in options) {
            var value = table.find('#oscitas-' + index).val();

            // attaches the attribute to the shortcode only if it's different from the default value
            //if ( value !== options[index] )
            shortcode += ' ' + index + '="' + value + '"';
        }

        var selected_content = tinyMCE.activeEditor.selection.getContent();
        if(!selected_content) var selected_content = ebsjstrans.your+' '+ebsjstrans.notification; //'Your notification';
        shortcode += ' close="'+(table.find('#oscitas-close').prop('checked')? 'true': 'false')+ '" ';

        shortcode += cusclass+']'+selected_content+'[/'+$ebs_prefix+'notification]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        close_dialogue(pluginObj.hashId);
    });
}

