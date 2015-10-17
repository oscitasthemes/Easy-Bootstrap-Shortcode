var lists={
    title:"List Group Shortcode",
    id :'oscitas-form-lists',
    pluginName: 'lists'
};
(function() {
    _create_tinyMCE_options(lists);
})();

function ebs_return_html_lists(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-type">'+ebsjstrans.list+' '+ebsjstrans.style+'</label></th>\
				<td><select name="type" id="oscitas-type">\
                    <option value="">None</option>\
					<option value="glyphicon-arrow-right">'+ebsjstrans.arrow+'</option>\
					<option value="glyphicon-ok">'+ebsjstrans.check+'</option>\
					<option value="glyphicon-plus">'+ebsjstrans.plus+'</option>\
                    <option value="glyphicon-minus">'+ebsjstrans.minus+'</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-line">'+ebsjstrans.noof+' '+ebsjstrans.list+' '+ebsjstrans.item+'</label></th>\
				<td><input type="text" name="line" id="oscitas-list-item" value="3"/><br /><small>'+ebsjstrans.enternumval+'</small>\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-list-class">'+ebsjstrans.customclass+':</label></th>\
				<td><input type="text" name="line" id="oscitas-list-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.list+'" name="submit" />\
		</p>\
		</div>');
    return form;
}
function create_oscitas_lists(pluginObj){

    var form=jQuery(pluginObj.hashId);

    var table = form.find('table');


    // handles the click event of the submit button
    form.find('#oscitas-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var options = {
            'type'       : 'arrow'
        },list=0,list_type;
        var cusclass='';
        if(table.find('#oscitas-list-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-list-class').val()+'"';
        }
        var shortcode = '['+$ebs_prefix+'list'+cusclass;
        var list_item=jQuery('#oscitas-list-item').val();
        if(isNaN(list_item)==false){
            list=list_item;
        } else{
            list=3;
        }


        shortcode += ']<br/>';
        if(table.find('#oscitas-type').val()!=''){
            list_type=' type="'+table.find('#oscitas-type').val()+'"';
        }
        else{
            list_type='';
        }
        for(var i=1;i<=list;i++){
            shortcode +='['+$ebs_prefix+'li'+list_type+']your list content[/'+$ebs_prefix+'li]<br/>'
        }
        shortcode +='[/'+$ebs_prefix+'list]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        close_dialogue(pluginObj.hashId);
    });
}

