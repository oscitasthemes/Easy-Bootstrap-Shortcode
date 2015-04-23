var badge={
    title:"Badge Shortcode",
    id :'oscitas-form-badge',
    pluginName: 'badge'
};
(function() {
    _create_tinyMCE_options(badge);
})();

function ebs_return_html_badge(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			 <tr>\
        <th><label for="oscitas-badge-bgcolor">\Background Color</label></th>\
        <td><input type="text" class="color" name="bgcolor" id="oscitas-badge-bgcolor" value="">\
            </td>\
        </tr>\
        <tr>\
        <th><label for="oscitas-badge-color">Color</label></th>\
        <td><input type="text" class="color" name="color" id="oscitas-badge-color" value="">\
      </td>\
    </tr>\
    <tr>\
        <th><label for="oscitas-badge-value">Content</label></th>\
        <td><input type="text" name="value" id="oscitas-badge-value" value="">\
        </tr>\
        <tr>\
            <th><label for="oscitas-badge-float_right">Float Right</label></th>\
            <td><input type="checkbox" name="float_right" id="oscitas-badge-float_right" value="true">\
          </td>\
        </tr>\
        <tr>\
            <th><label for="oscitas-badge-class">Custom Class</label></th>\
            <td><input type="text" name="class" id="oscitas-badge-class" value=""/>\
           </td>\
        </tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-badge-submit" class="button-primary" value="Insert Badge" name="submit" />\
		</p>\
		</div>');
    return form;

}

function create_oscitas_badge(pluginObj){

    var form = jQuery(pluginObj.hashId);

    var table = form.find('table');

    ebs_color_picker(form.find('.color'));

    // handles the click event of the submit button
    form.find('#oscitas-badge-submit').click(function(){
        var cusclass='';
        if(table.find('#oscitas-badge-class').val()!=''){
            cusclass+= ' class="'+table.find('#oscitas-badge-class').val()+'"';
        }
        if(table.find('#oscitas-badge-color').val()!=''){
            cusclass+= ' color="'+table.find('#oscitas-badge-color').val()+'"';
        } if(table.find('#oscitas-badge-bgcolor').val()!=''){
            cusclass+= ' bgcolor="'+table.find('#oscitas-badge-bgcolor').val()+'"';
        }if(table.find('#oscitas-badge-value').val()!=''){
            cusclass+= ' value="'+table.find('#oscitas-badge-value').val()+'"';
        }  if(table.find('#oscitas-badge-float_right').prop('checked')){
            cusclass+= ' float_right="true"';
        }
        var shortcode = '['+$ebs_prefix+'badge'+cusclass+']';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });
}

