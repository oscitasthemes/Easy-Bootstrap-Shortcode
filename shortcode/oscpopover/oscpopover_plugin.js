var oscpopover={
    title:"Popover Shortcode",
    id :'oscitas-form-popover',
    pluginName: 'oscpopover'
};
(function() {
    _create_tinyMCE_options(oscpopover);
})();

function ebs_return_html_oscpopover(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-popover-style">Popover Style:</label></th>\
				<td><select name="oscitas-popover-style" id="oscitas-popover-style">\
					<option value="top">Top</option>\
					<option value="bottom">Bottom</option>\
					<option value="left">Left</option>\
					<option value="right">Right</option>\
                                        <option value="auto">Auto</option>\
                                    </select><br />\
				</td>\
			</tr>\
<tr>\
				<th><label for="oscitas-popover-title">Popover Title Text:</label></th>\
				<td><input type="text" name="popover-title" id="oscitas-popover-title" value="A title"/><br />\
				</td>\
			</tr>\
                        </tr>\
<tr>\
				<th><label for="oscitas-popover-content">Popover Title Text:</label></th>\
				<td><textarea " name="popover-content" id="oscitas-popover-content">Your Content</textarea><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-pbutton-trigger">Trigger Popover On:</label></th>\
				<td><select name="tigger" id="oscitas-pbutton-trigger">\
                                         <option value="click">Click</option>\
                                        <option value="hover">Hover</option>\
					</select><br />\
				</td>\
			</tr >\
                        <tr>\
				<th><label for="oscitas-pbutton-size">Button Size:</label></th>\
				<td><select name="size" id="oscitas-pbutton-size">\
                                         <option value="">Default</option>\
                                        <option value="btn-lg">Large</option>\
                                        <option value="btn-sm">Small</option>\
                                        <option value="btn-xs">X-Small</option>\
					</select><br />\
				</td>\
			</tr >\
                        <tr>\
				<th><label for="oscitas-pbutton-type">Button Type:</label></th>\
				<td><select name="type" id="oscitas-pbutton-type">\
                                         <option value="btn-default">Default</option>\
                                        <option value="btn-primary">Primary</option>\
                                        <option value="btn-success">Success</option>\
                                        <option value="btn-info">Info</option>\
                                        <option value="btn-warning">Warning</option>\
                                        <option value="btn-danger">Danger</option>\
                                        <option value="btn-link">Link</option>\
					</select><br />\
				</td>\
			</tr >\
<tr>\
				<th><label for="oscitas-popover-button-text">Button Text:</label></th>\
				<td><input type="text" name="link-text" id="oscitas-popover-button-text" value="Popover"/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-popover-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-popover-class" value=""/><br />\
				</td>\
			</tr>\
</table>\
		<p class="submit">\
			<input type="button" id="oscitas-popover-submit" class="button-primary" value="Insert Popover" name="submit" />\
		</p>\
		</div>');
    return form;
}
function create_oscitas_oscpopover(pluginObj){
   var form=jQuery(pluginObj.hashId);


    var table = form.find('table');

    var colors = ['color', 'bgcolor'];
    jQuery('#oscitas-table tr:visible:even').css('background', '#ffffff');
    jQuery('#oscitas-table tr:visible:odd').css('background', '#efefef');
    

    // handles the click event of the submit button
    form.find('#oscitas-popover-submit').click(function() {
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var cusclass='';
        if(table.find('#oscitas-popover-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-popover-class').val()+'"';
        }
        var shortcode = '['+$ebs_prefix+'popovernew'+cusclass;
        shortcode += ' title="' + table.find('#oscitas-popover-title').val();

        shortcode += '" ';
        
        shortcode += ' button_text="' + table.find('#oscitas-popover-button-text').val();

        shortcode += '" ';
        shortcode += ' trigger="' + table.find('#oscitas-pbutton-trigger').val();

        shortcode += '" ';
        shortcode += ' style="' + table.find('#oscitas-popover-style').val();

        shortcode += '" ';
        shortcode += ' size="' + table.find('#oscitas-pbutton-size').val();

        shortcode += '" ';
        shortcode += ' type="' + table.find('#oscitas-pbutton-type').val();

        shortcode += '" ';
        //shortcode += ' btntag="'+table.find('#oscitas-button-type').val()+'" ';



        shortcode += ']';
        shortcode+= table.find('#oscitas-popover-content').val();
        shortcode+='[/'+$ebs_prefix+'popovernew]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });
}

