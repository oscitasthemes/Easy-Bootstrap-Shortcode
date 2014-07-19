var dropdown={
    title:"Button Dropdown Shortcode",
    id :'oscitas-form-dropdown',
    pluginName: 'dropdown'
};
(function() {
    _create_tinyMCE_options(dropdown);
})();

function ebs_return_html_dropdown(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th class="main_dp_th"><label for="oscitas-dropdown-heading" >Dropdown Button Features</label></th>\
				<td><table class="tb_multiple_column_upper">\
                                <thead>\
                                    <tr><th>Text</th><th>Size</th><th>Style</th><th>Split</th><th>Dropup</th></tr>\
                                </thead>\
                                <tbody>\
                                <tr>\
                                    <td><input type="text" name="dropdown-heading" id="oscitas-dropdown-heading" value="Dropdown"/></td>\
                                    <td><select name="type" id="oscitas-dropdown-size">\
                                        <option value="">Default</option>\
					<option value="btn-lg">Large</option>\
					<option value="btn-sm">Small</option>\
					<option value="btn-xs">Ex-small</option>\
                                        </select><br /></td>\
                                    <td><select name="type" id="oscitas-dropdown-style">\
					<option value="btn-default">Simple</option>\
					<option value="btn-primary">Primary</option>\
					<option value="btn-success">Success</option>\
					<option value="btn-info">Information</option>\
					<option value="btn-warning">Warning</option>\
					<option value="btn-danger">Danger</option>\
					<option value="btn-link">Link</option>\
                                        </select><br /></td>\
                                    <td><input type="checkbox" name="dropdown-split" id="oscitas-dropdown-split" value="split"/></td>\
                                    <td><select name="type" id="oscitas-dropdown-dropup">\
                                        <option value="dropdown">Drop Down</option>\
					<option value="dropup">Drop Up</option>\
                                        </select></td>\
                                </tr>\
                                </tbody>\
                                </table></td>\
			</tr>\
			<tr>\
				<th class="main_dp_th"><label for="oscitas-line">Dropdown Items</label></th>\
				<td><table class="tb_multiple_column">\
                                <thead>\
                                    <tr><th>Type</th><th>Link</th><th>Title</th><th>Disabled</th><th>Option</th></tr>\
                                </thead>\
                                <tbody id="oscitas-append-dropdownitem">\
                                <tr class="osc_dropdown_list_item">\
                                    <td><input type="hidden"  class="oscitas-dropdownitem-type" value="menuitem"><span>Menu Item</span></td>\
                                    <td><input type="text" name="dropdown-item-link[]" class="oscitas-dropdownitem-link" value="#"/></td>\
                                    <td><input type="text" name="dropdown-item-title[]" class="oscitas-dropdownitem-title" value="Dropdown Item"/></td>\
                                    <td><input type="checkbox" name="dropdown-item-disabled[]" class="oscitas-dropdownitem-disabled" value="disabled"/></td><td></td>\
                                </tr>\
                                </tbody>\
                                <tfoot>\
                                    <tr><td colspan="5"><a id="osc_add_new_dditem" href="javascript:;" style="text-decoration:none;"><i class="glyphicon glyphicon-plus-sign"></i> Add New Item</a></td></tr>\
                                </tfoot>\
                                </table></td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-dropdown-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-dropdown-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-dropdown-submit" class="button-primary" value="Insert Dropdown" name="submit" />\
		</p>\
		</div>');
    return form;
}
function create_oscitas_dropdown(pluginObj){

        var form=jQuery(pluginObj.hashId);

    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this

			
    var table = form.find('table');

    form.find('#osc_add_new_dditem').click(function(){
        var item='<tr class="osc_dropdown_list_item"><td class="osc_type_change"><select name="dropdown-item-type[]"  class="oscitas-dropdownitem-type"><option value="menuitem">Menu Item</option><option value="divider">Divider</option></select></td><td class="osc_hide"><input type="text" name="dropdown-item-link[]" class="oscitas-dropdownitem-link" value="#"/></td><td class="osc_hide"><input type="text" name="dropdown-item-title[]" class="oscitas-dropdownitem-title" value="Dropdown Item"/></td><td class="osc_hide"><input type="checkbox" name="dropdown-item-disabled[]" class="oscitas-dropdownitem-disabled" value="disabled"/></td><td><a class="osc_remove_dditem" href="javascript:;" style="text-decoration:none;"><i class="glyphicon  glyphicon-remove"></i></a></td></tr>';
        form.find('#oscitas-append-dropdownitem').append(item);
                    
    });
    jQuery('.osc_remove_dditem').live('click',function(){
        jQuery(this).parent().parent().remove();
    })
    jQuery('.osc_type_change').live('change',function(){
        var par=jQuery(this).parent();
        var item=jQuery(this);
        var val=item.find('.oscitas-dropdownitem-type').val();
        if(val=='divider'){
            jQuery(par).find('.osc_hide').hide();
            item.attr('colspan',4);
        } else{
            jQuery(par).find('.osc_hide').show();
            item.attr('colspan',0);
        }
    })
    // handles the click event of the submit button
    form.find('#oscitas-dropdown-submit').click(function(){
        var split,dropup;
        var type,link,title,disabled;
        var heading= jQuery('#oscitas-dropdown-heading').val();
       
        if(jQuery('#oscitas-dropdown-split').is(":checked")==true){
            split= jQuery('#oscitas-dropdown-split').val();
        } else{
            split='';
        }
        var size= jQuery('#oscitas-dropdown-size').val();
        var style= jQuery('#oscitas-dropdown-style').val();
        dropup= 'dropup="'+jQuery('#oscitas-dropdown-dropup').val()+'"';
       
        var cusclass;
        if(table.find('#oscitas-dropdown-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-dropdown-class').val()+'"';
        }
        else{
            cusclass='';
        }
        var shortcode='';
        shortcode ='['+$ebs_prefix+'dropdown '+dropup+cusclass+']<br/>';
        shortcode +='['+$ebs_prefix+'dropdownhead style="'+style+'" size="'+size+'" split="'+split+'"]<br/>';
        shortcode += heading+'<br/>';
        shortcode +='[/'+$ebs_prefix+'dropdownhead]<br/>';
        shortcode +='['+$ebs_prefix+'dropdownbody]<br/>';
       
        jQuery('tr.osc_dropdown_list_item').each(function(index){
            
            type = jQuery(this).find('.oscitas-dropdownitem-type').val();
            link = jQuery(this).find('.oscitas-dropdownitem-link').val();
            title = jQuery(this).find('.oscitas-dropdownitem-title').val();
           
            if(jQuery(this).find('.oscitas-dropdownitem-disabled').is(":checked")==true){
                disabled='disabled="'+jQuery(this).find('.oscitas-dropdownitem-disabled').val()+'"'; 
            } else{
                disabled='';
            }
            if(type=='divider'){
                shortcode +='['+$ebs_prefix+'dropdownitem type="'+type+'"][/'+$ebs_prefix+'dropdownitem]<br/>';
            } else if(type=='menuitem'){
                shortcode +='['+$ebs_prefix+'dropdownitem type="'+type+'" link="'+link+'" '+disabled+']'+title+'[/'+$ebs_prefix+'dropdownitem]<br/>';
            }
            
        });
        
        shortcode +='[/'+$ebs_prefix+'dropdownbody]<br/>';
        shortcode +='[/'+$ebs_prefix+'dropdown]';
        
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        close_dialogue(pluginObj.hashId);
    });
}

