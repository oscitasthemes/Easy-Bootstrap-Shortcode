var tooltip={
    title:"Tooltip Image Shortcode",
    id :'oscitas-form-tooltip',
    pluginName: 'tooltip'
};
(function() {
    _create_tinyMCE_options(tooltip);
})();

function ebs_return_html_tooltip(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-tooltip-style">'+ebsjstrans.tooltip+' '+ebsjstrans.style+':</label></th>\
				<td>\
                    <select name="type" id="oscitas-tooltip-style">\
                        <option value="top">'+ebsjstrans.top+'</option>\
                        <option value="bottom">'+ebsjstrans.bottom+'</option>\
                        <option value="left">'+ebsjstrans.left+'</option>\
                        <option value="right">'+ebsjstrans.right+'</option>\
                        <option value="auto">'+ebsjstrans.auto+'</option>\
                    </select><br />\
				</td>\
			</tr>\
<tr>\
				<th><label for="oscitas-tooltip-text">'+ebsjstrans.tooltip+' '+ebsjstrans.text+':</label></th>\
				<td><input type="text" name="tooltip-text" id="oscitas-tooltip-text" value="Tooltip"/><br />\
				</td>\
			</tr>\
<tr>\
				<th><label for="oscitas-tooltip-type">'+ebsjstrans.type+'Type:</label></th>\
				<td><select name="type" id="oscitas-tooltip-type">\
                                         <option value="link">'+ebsjstrans.link+'</option>\
                                        <option value="button">'+ebsjstrans.button+'</option>\
					</select><br />\
				</td>\
			</tr >\
  <tr class="oscitas-tooltip-link-tr">\
				<th><label for="oscitas-tooltip-link">'+ebsjstrans.link+':</label></th>\
				<td><input type="text" name="tooltip-link" id="oscitas-tooltip-link" value="#"/><br />\
				</td>\
			</tr>\
  <tr class="oscitas-tooltip-link-tr">\
				<th><label for="oscitas-tooltip-link">'+ebsjstrans.newtarget+':</label></th>\
				<td><input type="checkbox" id="oscitas-tooltip-link-target" value="_blank"/><br />\
				</td>\
			</tr>\
<tr>\
				<th><label for="oscitas-tooltip-link-text">'+ebsjstrans.value+':</label></th>\
				<td><input type="text" name="link-text" id="oscitas-tooltip-link-text" value="'+ebsjstrans.hover+' '+ebsjstrans.me+'"/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-tooltip-class">'+ebsjstrans.customclasse+':</label></th>\
				<td><input type="text" name="line" id="oscitas-tooltip-class" value=""/><br />\
				</td>\
			</tr>\
</table>\
		<p class="submit">\
			<input type="button" id="oscitas-tooltip-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.tooltip+'" name="submit" />\
		</p>\
		</div>');

    return form;
}
function create_oscitas_tooltip(pluginObj){
    var form=jQuery(pluginObj.hashId);

    var table = form.find('table');

    var colors = ['color', 'bgcolor'];

    form.find('#oscitas-tooltip-type').change(function(){
        if(jQuery(this).val()=='link'){
            table.find('.oscitas-tooltip-link-tr').show();
            table.find('#oscitas-tooltip-link').val('#');
        } else{
            table.find('.oscitas-tooltip-link-tr').hide();
            table.find('#oscitas-tooltip-link').val('');
        }
        jQuery(this).parents('#oscitas-table').find('tr:visible:even').css('background', '#ffffff');
        jQuery(this).parents('#oscitas-table').find('tr:visible:odd').css('background', '#efefef');
    })

    // handles the click event of the submit button
    form.find('#oscitas-tooltip-submit').click(function() {
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var cusclass='';
        if(table.find('#oscitas-tooltip-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-tooltip-class').val()+'"';
        }
        var shortcode = '['+$ebs_prefix+'tooltip';
        shortcode += ' type="' + table.find('#oscitas-tooltip-type').val();

        shortcode += '" ';

        shortcode += ' link="' + table.find('#oscitas-tooltip-link').val()+'"';

        shortcode += ' target="' + (table.find('#oscitas-tooltip-link-target').is(':checked') ? '_blank' : '_self');

        shortcode += '" ';
        shortcode += ' tooltip="' + table.find('#oscitas-tooltip-text').val();

        shortcode += '" ';
        shortcode += ' style="' + table.find('#oscitas-tooltip-style').val();

        shortcode += '" ';

        shortcode += cusclass;

        shortcode += ']';
        shortcode+= table.find('#oscitas-tooltip-link-text').val();
        shortcode+='[/'+$ebs_prefix+'tooltip]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });
}

