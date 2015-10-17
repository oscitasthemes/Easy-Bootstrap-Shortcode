var panel={
    title:"Panel Shortcode",
    id :'oscitas-form-panel',
    pluginName: 'panel'
};
(function() {
    _create_tinyMCE_options(panel);
})();

function ebs_return_html_panel(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-type">'+ebsjstrans.style+':</label></th>\
				<td><select name="type" id="oscitas-panel-type">\
						<option value="panel-default">'+ebsjstrans.simple+'</option>\
						<option value="panel-primary">'+ebsjstrans.primary+'</option>\
						<option value="panel-success">'+ebsjstrans.success+'</option>\
						<option value="panel-info">'+ebsjstrans.information+'</option>\
						<option value="panel-warning">'+ebsjstrans.warning+'</option>\
						<option value="panel-danger">'+ebsjstrans.danger+'</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-line">'+ebsjstrans.show+' '+ebsjstrans.footer+':</label></th>\
				<td><input type="checkbox" id="oscitas-panel-footer"/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-panel-class">'+ebsjstrans.customclass+':</label></th>\
				<td><input type="text" name="line" id="oscitas-panel-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.panel+'" name="submit" />\
		</p>\
		</div>');
return form;
}
function create_oscitas_panel(pluginObj){
   var form=jQuery(pluginObj.hashId);

    var table = form.find('table');

		
    // handles the click event of the submit button
    form.find('#oscitas-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var cusclass='';
        if(table.find('#oscitas-panel-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-panel-class').val()+'"';
        }
        var shortcode = '['+$ebs_prefix+'panel style="'+table.find('#oscitas-panel-type').val()+ '"'+cusclass+']';
        shortcode += '<br/>['+$ebs_prefix+'panel-header]<br/>'+ebsjstrans.heading+' '+ebsjstrans.goes+' '+ebsjstrans.here+'<br/>[/'+$ebs_prefix+'panel-header]';
        //shortcode += (table.find('#oscitas-panel-header').prop('checked')? '[panel-header]<br/>Heading goes here<br/>[/panel-header]': '');
        shortcode += '<br/>['+$ebs_prefix+'panel-content]<br/>'+ebsjstrans.content+' '+ebsjstrans.goes+' '+ebsjstrans.here+'<br/>[/'+$ebs_prefix+'panel-content]';
        shortcode += (table.find('#oscitas-panel-footer').prop('checked')? '<br/>['+$ebs_prefix+'panel-footer]<br/>Footer goes here<br/>[/'+$ebs_prefix+'panel-footer]': '');
        shortcode += '<br/>[/'+$ebs_prefix+'panel]';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        close_dialogue(pluginObj.hashId);
    });
}

