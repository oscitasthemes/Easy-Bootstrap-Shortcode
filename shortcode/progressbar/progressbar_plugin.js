var progressbar={
    title:"Progressbar Shortcode",
    id :'oscitas-form-progressbar',
    pluginName: 'progressbar',
    setRowColors: true
};
(function() {
    _create_tinyMCE_options(progressbar, 800);
})();

function ebs_return_html_progressbar(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-progressbar-style">Progress Bar Type:</label></th>\
				<td><select name="type" id="oscitas-progressbar-style">\
					<option value="">Default</option>\
					<option value="progress-bar-success">Success</option>\
					<option value="progress-bar-info">Information</option>\
					<option value="progress-bar-warning">Warning</option>\
					<option value="progress-bar-danger">Danger</option>\
				</select><br />\
				</td>\
			</tr>\
			 <tr>\
				<th><label for="oscitas-progressbar-label">Progressbar Label:</label></th>\
				<td><input type="text" name="title" id="oscitas-progressbar-label" value=""/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-progressbar-progress">Progress Value:</label></th>\
				<td><input type="text" name="title" id="oscitas-progressbar-progress" value="50"/><br />\
                                <small>Enter a numeric value between 0 to 100, Default value is 50</small>\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-progressbar-stripped">Stripped Progress Bar:</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-progressbar-stripped">\
				</td>\
			</tr>\
                        <tr id="osc_progress_animate" style="display: none;">\
				<th><label for="oscitas-progressbar-animated">Animated Progress Bar:</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-progressbar-animated">\
				</td>\
			</tr>\
                         <tr>\
				<th><label for="oscitas-progressbar-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-progressbar-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-progressbar-submit" class="button-primary" value="Insert Button" name="submit" />\
		</p>\
		</div>');
    return form;
}
function create_oscitas_progressbar(pluginObj){
    var form=jQuery(pluginObj.hashId);

    var table = form.find('table');

    jQuery('#oscitas-form-progressbar table tr:visible:even').css('background', '#ffffff');
    jQuery('#oscitas-form-progressbar table tr:visible:odd').css('background', '#efefef');
    table.find('#oscitas-progressbar-stripped').click(function(){
        if(jQuery(this).prop('checked')){
            jQuery('#osc_progress_animate').show();
        } else{
            jQuery('#osc_progress_animate').hide();
        }
        jQuery('#oscitas-form-progressbar table tr:visible:even').css('background', '#ffffff');
        jQuery('#oscitas-form-progressbar table tr:visible:odd').css('background', '#efefef');
    })





    // handles the click event of the submit button
    form.find('#oscitas-progressbar-submit').click(function(){

        var cusclass='',type='',value='',stripped='',label='';
        if(jQuery('#oscitas-progressbar-stripped').prop('checked')){
            stripped=' barstyle="progress-striped';
            if(jQuery('#oscitas-progressbar-animated').prop('checked')){
                stripped +=' active';
            }
            stripped +='"';
        }
        if(table.find('#oscitas-progressbar-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-progressbar-class').val()+'"';
        }
        if(table.find('#oscitas-progressbar-style').val()!=''){
            type= ' bartype="'+table.find('#oscitas-progressbar-style').val()+'"';
        }
        if(table.find('#oscitas-progressbar-progress').val()!=''){
            value= ' value="'+table.find('#oscitas-progressbar-progress').val()+'"';
        }
        if(table.find('#oscitas-progressbar-label').val()!=''){
            label= ' label="'+table.find('#oscitas-progressbar-label').val()+'"';
        }
        var shortcode = '['+$ebs_prefix+'progressbar'+value+cusclass+type+stripped+label;

        shortcode += ']';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });
}

