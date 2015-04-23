var rule={
    title:"Horizontal Rule Shortcode",
    id :'oscitas-form-rule',
    pluginName: 'rule',
    setRowColors:false
};
(function() {
    _create_tinyMCE_options(rule);
})();

function create_oscitas_rule(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-rule-style">Style:</label></th>\
				<td><select name="type" id="oscitas-rule-style">\
					<option value="rule-dotted">Dotted</option>\
					<option value="rule-dashed">Dashed</option>\
					<option value="rule-double">Double</option>\
					<option value="rule-double-thick-thin">Double Thick Thin</option>\
					<option value="rule-fadecorder">Fade Corner</option>\
					<option value="rule-double-fadecorder">Double Fade Corner</option>\
					<option value="rule-shadow">Shadow</option>\
					<option value="rule-diagonal">Diagonal</option>\
					<option value="rule-wave">Wave</option>\
					<option value="rule-thick">Thick</option>\
					<option value="rule-thin">Thin</option>\
				</select><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-rule-margin">Margin:</label></th>\
				<td><input type="text" name="line" id="oscitas-rule-margin" value=""/><br />\
                                <small>Enter a numeric value Ex. 20</small>\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-rule-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-rule-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-rule-submit" class="button-primary" value="Insert Horizontal Rule" name="submit" />\
		</p>\
		</div>');

    var table = form.find('table');
    form.appendTo('body').hide();







    // handles the click event of the submit button
    form.find('#oscitas-rule-submit').click(function() {
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var cusclass='',margin='';
        if(table.find('#oscitas-rule-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-rule-class').val()+'"';
        }
        if(table.find('#oscitas-rule-margin').val()!=''){
            margin= ' margin="'+table.find('#oscitas-rule-margin').val()+'"';
        }
        var shortcode = '[rule'+cusclass+margin;

        shortcode += ' style="' + table.find('#oscitas-rule-style').val();

        shortcode += '" ';
        //shortcode += ' btntag="'+table.find('#oscitas-button-type').val()+'" ';



        shortcode += ']';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}

