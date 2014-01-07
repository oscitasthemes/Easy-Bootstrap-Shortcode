var tables={
    title:"Progressbar Shortcode",
    id :'oscitas-form-table',
    pluginName: 'tables'
};
(function() {
    _create_tinyMCE_options(tables);
})();

function create_oscitas_tables(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-table-width">Table Width</label></th>\
				<td><input type="text" name="icontag" id="oscitas-table-width" value="100%" /><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-table-columns">Columns</label></th>\
				<td><input type="text" name="link" id="oscitas-table-columns" value="4" /><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-table-rows">Rows</label></th>\
				<td><input type="text" name="title" id="oscitas-table-rows" value="4" /><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-table-rows">Table style</label></th>\
				<td>\
				    <select name="tablestyle" id="oscitas-table-style">\
                        <option value="">Simple</option>\
                        <option value="table-striped">Striped</option>\
                        <option value="table-bordered">Bordered</option>\
                        <option value="table-striped table-bordered">Striped + Bordered</option>\
				    </select>\
                    <br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-table-rows">Show hover effect</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-table-hover" value="table-hover">\
                    <br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-table-rows">Responsive</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-table-scroll" value="table-responsive">\
                    <br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-table-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-table-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-submit" class="button-primary" value="Insert Table" name="submit" />\
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
        if(table.find('#oscitas-table-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-table-class').val()+'"';
        }
        var columns = table.find('#oscitas-table-columns').val();
        var rows = table.find('#oscitas-table-rows').val();
        var value = table.find('#oscitas-table-width').val();
        var osStyle = table.find('#oscitas-table-style').val();

        var osHover = table.find('#oscitas-table-hover').prop('checked') ? ' table-hover' : '' ;
        var osScroll = table.find('#oscitas-table-scroll').prop('checked')? 'true': 'false';
        //creating table
        var shortcode = '[table ';
        shortcode += 'width ="' + value + '"';
        shortcode += ' style ="' + osStyle +osHover+ '"';
        shortcode += ' responsive ="' +osScroll+ '"'+cusclass;

        shortcode += ']<br/>[table_head]<br/>';
        for (var i=1;i<=columns;i++)
        {
            shortcode += '[th_column]Heading-'+i+'[/th_column]<br/>';
        }
        shortcode += '[/table_head]<br/>[table_body]<br/>';
        
        for (var j=1;j<=rows;j++)
        {
            shortcode += '[table_row]<br/>';
            for (var i=1;i<=columns;i++)
            {
                shortcode += '[row_column]value-'+i+'[/row_column]<br/>';
            }
            
            shortcode += '[/table_row]<br/>';
        }
        shortcode += '[/table_body]<br/>[/table]';
                        
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });
}

