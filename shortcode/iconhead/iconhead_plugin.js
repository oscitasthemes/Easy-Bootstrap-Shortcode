var iconhead={
    title:"Icon Heading Shortcode",
    id :'oscitas-form-iconhead',
    pluginName: 'iconhead'
};
(function() {
    _create_tinyMCE_options(iconhead, 800);
})();

function ebs_return_html_iconhead(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-heading-icon">'+ebsjstrans.select+' '+ebsjstrans.icon+':</label></th>\
				<td><div id="click_icon_list" class="oscitas-icon-div"><span id="osc_show_icon"></span><span class="show-drop"></span></div><input type="hidden" id="osc_icon_class_val" value="">\
                    <div id="osc_show_iconlist" class="oscitas-icon" style="display:none;width:100%">'+font_awesome_include('oscitas-heading-icon')+'</div>\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-iconhead-iconcolor">'+ebsjstrans.icon+' '+ebsjstrans.color+':</label></th>\
				<td><input type="text" name="label" id="oscitas-iconhead-iconcolor" class="color" value="" /><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-iconhead-headingtype">'+ebsjstrans.heading+' '+ebsjstrans.type+':</label></th>\
				<td><select name="oscitas-iconhead-headingtype" id="oscitas-iconhead-headingtype">\
                                <option value="h1">H1</option>\
                                <option value="h2">H2</option>\
                                <option value="h3">H3</option>\
                                <option value="h4">H4</option>\
                                <option value="h5">H5</option>\
                                <option value="h6">H6</option>\
                                </select><br />\
				</td>\
			</tr>\
	        <tr>\
				<th><label for="oscitas-iconhead-heading">'+ebsjstrans.heading+':</label></th>\
				<td><input type="text" name="oscitas-iconhead-heading" id="oscitas-iconhead-heading" value="'+ebsjstrans.heading+'"/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-iconhead-class">'+ebsjstrans.customclass+':</label></th>\
				<td><input type="text" name="line" id="oscitas-iconhead-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-iconhead-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.icon+' '+ebsjstrans.heading+'" name="submit" />\
		</p>\
		</div>');
return form;
}
function create_oscitas_iconhead(pluginObj){
   var form=jQuery(pluginObj.hashId);
    var table = form.find('table');
    jQuery('.glyphicon').css('display','inline');

    form.find('.color').wpColorPicker();
    table.find('#click_icon_list').click(function(){
        if(!jQuery(this).hasClass('osc_icon_showing')){
            jQuery(this).addClass('osc_icon_showing')
            jQuery('#osc_show_iconlist').show();
        } else{
            jQuery(this).removeClass('osc_icon_showing')
            jQuery('#osc_show_iconlist').hide();
        }
    });
    table.find('.oscitas-heading-icon li').click(function(){
        var val=jQuery(this).attr('data-value');
        var type=jQuery(this).attr('type');
        table.find('.oscitas-heading-icon li').removeClass('osc_icon_selected');
        jQuery(this).addClass('osc_icon_selected');
        jQuery('#osc_show_iconlist').hide();
        jQuery('#osc_show_icon').removeClass().addClass(type).addClass(val);
        jQuery('#osc_icon_class_val').val(type+' '+val);
    })
    //    // handles the click event of the submit button
    form.find('#oscitas-iconhead-submit').click(function() {
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var type=jQuery('#oscitas-iconhead-headingtype').val();
        var cusclass='',style='';
        if(table.find('#osc_icon_class_val').val()!=''){
            style=' style="' + table.find('#osc_icon_class_val').val()+'"' ;
        }
        if(table.find('#oscitas-iconhead-iconcolor').val()!=''){
            cusclass+= ' color="'+table.find('#oscitas-iconhead-iconcolor').val()+'"';
        }
        if(table.find('#oscitas-iconhead-class').val()!=''){
            cusclass+= ' class="'+table.find('#oscitas-iconhead-class').val()+'"';
        }
        var shortcode = '['+$ebs_prefix+'iconheading type="'+type+'"';
        
        shortcode += style+cusclass ;
        
        shortcode += ']'+table.find('#oscitas-iconhead-heading').val()+'[/'+$ebs_prefix+'iconheading]' ;

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent',0 , shortcode);

        close_dialogue(pluginObj.hashId);
    });
}

