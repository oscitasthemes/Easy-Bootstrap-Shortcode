var panel={
    title:"Panel Shortcode",
    id :'oscitas-form-panel',
    pluginName: 'panel'
};
(function() {
    _create_tinyMCE_options(panel);
})();

function create_oscitas_panel(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-type">Style</label></th>\
				<td><select name="type" id="oscitas-panel-type">\
					<option value="panel-default">Simple</option>\
					<option value="panel-primary">Primary</option>\
					<option value="panel-warning">Warning</option>\
					<option value="panel-success">Success</option>\
					<option value="panel-info">Information</option>\
					<option value="panel-danger">Danger</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-line">Show footer</label></th>\
				<td><input type="checkbox" id="oscitas-panel-footer"/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-panel-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-panel-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-submit" class="button-primary" value="Insert Panel" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();
		
    // handles the click event of the submit button
    form.find('#oscitas-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var cusclass='';
        if(table.find('#oscitas-panel-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-panel-class').val()+'"';
        }
        var shortcode = '[panel style="'+table.find('#oscitas-panel-type').val()+ '"'+cusclass+']';
        shortcode += '<br/>[panel-header]<br/>Heading goes here<br/>[/panel-header]';
        //shortcode += (table.find('#oscitas-panel-header').prop('checked')? '[panel-header]<br/>Heading goes here<br/>[/panel-header]': '');
        shortcode += '<br/>[panel-content]<br/>Content goes here<br/>[/panel-content]';
        shortcode += (table.find('#oscitas-panel-footer').prop('checked')? '<br/>[panel-footer]<br/>Footer goes here<br/>[/panel-footer]': '');
        shortcode += '<br/>[/panel]';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        close_dialogue(pluginObj.hashId);
    });
}

