var labels={
    title:"Label Shortcode",
    id :'oscitas-form-label',
    pluginName: 'labels'
};
(function() {
    _create_tinyMCE_options(labels);
})();

function ebs_return_html_labels(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-label-type">'+ebsjstrans.label+' '+ebsjstrans.type+':</label></th>\
				<td>\
					<select name="type" id="oscitas-label-type">\
						<option value="label-default">'+ebsjstrans.simple+'</option>\
						<option value="label-primary">'+ebsjstrans.primary+'</option>\
						<option value="label-success">'+ebsjstrans.success+'</option>\
						<option value="label-info">'+ebsjstrans.information+'</option>\
						<option value="label-warning">'+ebsjstrans.warning+'</option>\
						<option value="label-danger">'+ebsjstrans.danger+'</option>\
					</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-label-content">'+ebsjstrans.label+' '+ebsjstrans.content+':</label></th>\
				<td><input type="text" name="label" id="oscitas-label-content" value="Label"/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-label-class">'+ebsjstrans.customclass+':</label></th>\
				<td><input type="text" name="line" id="oscitas-label-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-label-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.label+'" name="submit" />\
		</p>\
		</div>');
    return form;

}
function create_oscitas_labels(pluginObj){
    var form=jQuery(pluginObj.hashId);

    var table = form.find('table');

    // handles the click event of the submit button
    form.find('#oscitas-label-submit').click(function(){
        var cusclass='';
        if(table.find('#oscitas-label-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-label-class').val()+'"';
        }
        var shortcode = '['+$ebs_prefix+'label type="'+jQuery('#oscitas-label-type').val()+'"'+cusclass+']<br/>';
        shortcode += jQuery('#oscitas-label-content').val()+'<br/>';
        shortcode += '[/'+$ebs_prefix+'label]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });
}

