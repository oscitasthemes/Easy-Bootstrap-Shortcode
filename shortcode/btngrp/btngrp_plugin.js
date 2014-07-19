var btngrp={
    title:"Button Group Shortcode",
    id :'oscitas-form-btngrp',
    pluginName: 'btngrp'
};

(function() {
    _create_tinyMCE_options(btngrp);
})();

function ebs_return_html_btngrp(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th class="main_dp_th"><label for="oscitas-btngrp-heading" >Button Group Features</label></th>\
				<td>\
                    <table class="tb_multiple_column_upper">\
                            <thead>\
                                <tr><th>Size</th><th>Style</th></tr>\
                            </thead>\
                            <tbody>\
                                <tr>\
                                    <td><select name="type" id="oscitas-btngrp-size">\
                                            <option value="">Default</option>\
                                            <option value="btn-lg">Large</option>\
                                            <option value="btn-sm">Small</option>\
                                            <option value="btn-xs">Ex-small</option>\
                                        </select></td>\
                                    <td>\
                                   <select name="type" id="oscitas-btngrp-style">\
                                            <option value="">Default</option>\
                                            <option value="vertical">Vertical</option>\
                                            <option value="justified">Justified</option>\
                                        </select>\
                                    </td>\
                                </tr>\
                            </tbody>\
                    </table>\
                </td>\
			</tr>\
			<tr>\
				<th class="main_dp_th"><label for="oscitas-line">Button Group Items</label></th>\
				<td>\
				    <table class="tb_multiple_column">\
                        <thead>\
                            <tr><th>Style</th><th>Type</th><th>Link</th><th>Open in New Window</th><th>Title</th><th>Option</th></tr>\
                        </thead>\
                        <tbody id="oscitas-append-btngrpitem">\
                            <tr class="osc_btngrp_list_item">\
                                <td>\
                                    <select name="type" class="oscitas-btngrpitem-style">\
                                        <option value="btn-default">Simple</option>\
                                        <option value="btn-primary">Primary</option>\
                                        <option value="btn-success">Success</option>\
                                        <option value="btn-info">Information</option>\
                                        <option value="btn-warning">Warning</option>\
                                        <option value="btn-danger">Danger</option>\
                                        <option value="btn-link">Link</option>\
                                    </select>\
				                </td>\
                                <td class="osc_btg_type_change">\
                                    <select name="type"  class="oscitas-btngrpitem-type">\
                                        <option value="link">Link</option>\
                                        <option value="button">Button</option>\
				                    </select>\
                                </td>\
				                <td class="osc_btg_hide">\
				                    <input type="text" name="link" class="oscitas-btngrpitem-link" value="#" />\
                                </td>\
				                <td class="osc_btg_hide">\
				                    <input type="checkbox" class="oscitas-btngrpitem-target" value="true">\
				                </td>\
                                <td>\
                                    <input type="text" name="title" class="oscitas-btngrpitem-title" value="Button"/>\
                                </td>\
                                <td></td>\
                            </tr>\
                        </tbody>\
                        <tfoot>\
                            <tr>\
                                <td colspan="8">\
                                    <a id="osc_add_new_dditem" href="javascript:;" style="text-decoration:none;"><i class="glyphicon glyphicon-plus-sign"></i> Add New Item</a>\
                                </td>\
                            </tr>\
                        </tfoot>\
                    </table>\
                </td>\
			</tr>\
            <tr>\
				<th>\
				    <label for="oscitas-btngrp-class">Custom Class</label>\
                </th>\
				<td>\
				    <input type="text" name="line" id="oscitas-btngrp-class" value=""/>\
				</td>\
			</tr>\
    </table>\
		<p class="submit">\
			<input type="button" id="oscitas-btngrp-submit" class="button-primary" value="Insert Button Group" name="submit" />\
		</p>\
		</div>');
    return form;
}
function create_oscitas_btngrp(pluginObj){


    var form=jQuery(pluginObj.hashId);
    var table = form.find('table');
    form.find('#osc_add_new_dditem').click(function(){
        var item='<tr class="osc_btngrp_list_item">' +
            '<td><select name="type" class="oscitas-btngrpitem-style">'+
            '<option value="btn-default">Simple</option>'+
            '<option value="btn-primary">Primary</option>'+
            '<option value="btn-success">Success</option>'+
            '<option value="btn-info">Information</option>'+
            '<option value="btn-warning">Warning</option>'+
            '<option value="btn-danger">Danger</option>'+
            '<option value="btn-link">Link</option>'+
            '</select>'+
            '</td>'+
            '<td class="osc_btg_type_change">'+
            '<select name="type" class="oscitas-btngrpitem-type">'+
            '<option value="link">Link</option>'+
            '<option value="button">Button</option>'+
            '</select>'+
            '</td>'+
            '<td class="osc_btg_hide">'+
            '<input type="text" name="link" class="oscitas-btngrpitem-link" value="#" />'+
            '</td>'+
            '<td class="osc_btg_hide">'+
            '<input type="checkbox" class="oscitas-btngrpitem-target" value="true">'+
            '</td>'+
            '<td>'+
            '<input type="text" name="title" class="oscitas-btngrpitem-title" value="Button"/>'+
            '</td>'+
            '<td><a class="osc_remove_btgitem" href="javascript:;" style="text-decoration:none;"><i class="glyphicon  glyphicon-remove"></i></a></td>'+
            '</tr>';
        form.find('#oscitas-append-btngrpitem').append(item);

    });
    jQuery('.osc_remove_btgitem').live('click',function(){
        jQuery(this).parent().parent().remove();
    })
    jQuery('.osc_btg_type_change').live('change',function(){
        var $this=jQuery(this);
        var par=jQuery(this).parent();
        var item=jQuery(this);
        var val=item.find('.oscitas-btngrpitem-type').val();
        if(val=='button'){
            jQuery(par).find('.osc_btg_hide').hide();
            item.attr('colspan',3);
        } else{
            jQuery(par).find('.osc_hide').show();
            item.attr('colspan',0);
        }
    });

//    dialog('close');
    // handles the click event of the submit button
    form.find('#oscitas-btngrp-submit').click(function(){


        var cusclass='',style='';
        if(table.find('#oscitas-btngrp-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-btngrp-class').val()+'"';
        }
        if(table.find('#oscitas-btngrp-style').val()!=''){
            style= ' style="'+table.find('#oscitas-btngrp-style').val()+'"';
        }
        var shortcode='['+$ebs_prefix+'buttongroup'+cusclass+style;
        shortcode+=']';
       var type='',title='',link='';
        jQuery('tr.osc_btngrp_list_item').each(function(){
            type = jQuery(this).find('.oscitas-btngrpitem-type').val();
            title = jQuery(this).find('.oscitas-btngrpitem-title').val();
            link = jQuery(this).find('.oscitas-btngrpitem-link').val();

            shortcode+='['+$ebs_prefix+'button';
            shortcode += ' style="'+jQuery(this).find('.oscitas-btngrpitem-style').val();
            shortcode += ' '+jQuery('#oscitas-btngrp-size').val();
            shortcode += '"';
            shortcode += ' type="'+type+'" ';
            if(type!='button'){
                shortcode += ' target="'+(jQuery(this).find('.oscitas-btngrpitem-target').prop('checked')? 'true': 'false')+ '" ';
                shortcode += ' link="'+link+'" ';
            }
            shortcode += ' title="'+title+'" ';
            shortcode+=']<br/>';
        });
        shortcode+='[/'+$ebs_prefix+'buttongroup]';



        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        close_dialogue(pluginObj.hashId);
    });
}

