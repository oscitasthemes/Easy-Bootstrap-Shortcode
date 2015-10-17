var icon={
    title:"Icon Shortcode",
    id :'oscitas-form-icon',
    pluginName: 'icon'
};
(function() {
    _create_tinyMCE_options(icon, 800);
})();

function ebs_return_html_icon(pluginObj){

    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
                        <tr>\
                        <th><label for="oscitas-heading-icon">'+ebsjstrans.select+' '+ebsjstrans.icon+':</label></th>\
				<td><div id="click_icon_list_icon" class="oscitas-icon-div"><span id="osc_show_icon_icon"></span><span class="show-drop"></span></div><input type="hidden" id="osc_icon_class_val_icon" value="glyphicon-adjust">\
                    <div id="osc_show_iconlist_icon" class="oscitas-icon" style="display:none;width:100%">'+font_awesome_include('oscitas-heading-icon_icon')+'</div>\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-icon-iconcolor">'+ebsjstrans.icon+' '+ebsjstrans.color+':</label></th>\
				<td><input type="text" name="label" id="oscitas-icon-iconcolor" class="color" value="" /><br />\
				</td>\
			</tr>\
			 <tr>\
				<th><label for="oscitas-icon-fontsize">'+ebsjstrans.icon+' '+ebsjstrans.font+' '+ebsjstrans.size+':</label></th>\
				<td><input type="text" name="line" id="oscitas-icon-fontsize" value=""/>px\
				</td>\
			</tr>\
                         <tr>\
				<th><label for="oscitas-icon-class">'+ebsjstrans.customclass+':</label></th>\
				<td><input type="text" name="line" id="oscitas-icon-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-icon-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.icon+'" name="submit" />\
		</p>\
		</div>');

    return form;

}
function create_oscitas_icon(pluginObj){
    var form=jQuery(pluginObj.hashId);
    var table = form.find('table');
    jQuery('.glyphicon').css('display','inline');

    form.find('.color').wpColorPicker();
    var t= table.find('#osc_icon_class_val_icon').val();
    table.find('#osc_show_icon_icon').removeClass().addClass('glyphicon').addClass(t);
    table.find('#click_icon_list_icon').click(function(){
        if(!jQuery(this).hasClass('osc_icon_showing_icon')){
            jQuery(this).addClass('osc_icon_showing_icon')
            table.find('#osc_show_iconlist_icon').show();
        } else{
            jQuery(this).removeClass('osc_icon_showing_icon')
            table.find('#osc_show_iconlist_icon').hide();
        }
    });
    table.find('.oscitas-heading-icon_icon li').click(function(){
        var val=jQuery(this).attr('data-value');
        var type=jQuery(this).attr('type');
        table.find('.oscitas-heading-icon_icon li').removeClass('osc_icon_selected_button');
        jQuery(this).addClass('osc_icon_selected_button');
        table.find('#osc_show_iconlist_icon').hide();
        table.find('#osc_show_icon_icon').removeClass().addClass(type).addClass(val);
        table.find('#osc_icon_class_val_icon').val(type+' '+val);
    })






    // handles the click event of the submit button
    form.find('#oscitas-icon-submit').click(function(){
        var cusclass='';
        if(table.find('#oscitas-icon-iconcolor').val()!=''){
            cusclass+= ' color="'+table.find('#oscitas-icon-iconcolor').val()+'"';
        }if(table.find('#oscitas-icon-fontsize').val()!=''){
            cusclass+= ' fontsize="'+table.find('#oscitas-icon-fontsize').val()+'"';
        }
        if(table.find('#oscitas-icon-class').val()!=''){
            cusclass+= ' class="'+table.find('#oscitas-icon-class').val()+'"';
        }
        var icon = table.find('#osc_icon_class_val_icon').val();
        var  shortcode='';
        shortcode='['+$ebs_prefix+'icon type="'+icon+'"'+cusclass+']'

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });
}

