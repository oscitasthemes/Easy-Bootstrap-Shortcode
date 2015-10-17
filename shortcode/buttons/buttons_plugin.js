var buttons={
    title:"Button Shortcode",
    id :'oscitas-form-button',
    pluginName: 'buttons'

};
(function() {
    _create_tinyMCE_options(buttons, 800);
})();

function ebs_return_html_buttons(pluginObj){

    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-button-style">Style:</label></th>\
				<td><select name="type" id="oscitas-button-style">\
                    <option value="btn-default">'+ebsjstrans.simple+'</option>\
                    <option value="btn-primary">'+ebsjstrans.primary+'</option>\
                    <option value="btn-success">'+ebsjstrans.success+'</option>\
                    <option value="btn-info">'+ebsjstrans.information+'</option>\
                    <option value="btn-warning">'+ebsjstrans.warning+'</option>\
                    <option value="btn-danger">'+ebsjstrans.danger+'</option>\
                    <option value="btn-link">'+ebsjstrans.link+'</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-button-size">Size:</label></th>\
				<td><select name="type" id="oscitas-button-size">\
                        <option value="btn-lg">'+ebsjstrans.large+'</option>\
                        <option value="btn-sm">'+ebsjstrans.Small+'</option>\
                        <option value="btn-xs">'+ebsjstrans.exsmall+'</option>\
				</select><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-button-type">Type:</label></th>\
				<td><select name="type" id="oscitas-button-type">\
                            <option value="link">'+ebsjstrans.link+'</option>\
                            <option value="button">'+ebsjstrans.button+'</option>\
				</select><br />\
				</td>\
			</tr>\
                        <tr>\
                        <th><label for="oscitas-heading-icon">'+ebsjstrans.select+' '+ebsjstrans.icon+':</label></th>\
				<td><div id="click_icon_list_button" class="oscitas-icon-div"><span id="osc_show_icon_button"></span><span class="show-drop"></span></div><input type="hidden" id="osc_icon_class_val_button" value="">\
                    <div id="osc_show_iconlist_button" class="oscitas-icon" style="display:none;width:100%">'+font_awesome_include('oscitas-heading-icon_button')+'</div>\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-button-iconalign">'+ebsjstrans.icon+' '+ebsjstrans.alignment+':</label></th>\
				<td><select name="type" id="oscitas-button-iconalign">\
					<option value="left">'+ebsjstrans.left+'</option>\
					<option value="right">'+ebsjstrans.right+'</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-button-iconcolor">'+ebsjstrans.iconcolor+':</label></th>\
				<td><input type="text" name="label" id="oscitas-button-iconcolor" class="color" value="" /><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-table-rows">'+ebsjstrans.makeblock+'</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-button-block">\
                    <br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-button-title">'+ebsjstrans.title+':</label></th>\
				<td><input type="text" name="title" id="oscitas-button-title" value="Button"/><br />\
				</td>\
			</tr>\
			<tr class="tr-button-link">\
				<th><label for="oscitas-button-link">'+ebsjstrans.link+'</label></th>\
				<td><input type="text" name="link" id="oscitas-button-link" value="#" /><br />\
				</td>\
			</tr>\
			<tr class="tr-button-link">\
				<th><label for="oscitas-button-link">'+ebsjstrans.rel+'</label></th>\
				<td><input type="text" name="rel" id="oscitas-button-linkrel" value="" /><br />\
				</td>\
			</tr>\
			<tr id="tr-button-newwindow">\
				<th><label for="oscitas-table-rows">'+ebsjstrans.newtarget+'</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-button-target">\
                    <br />\
				</td>\
			</tr>\
                         <tr>\
				<th><label for="oscitas-button-class">'+ebsjstrans.customclass+':</label></th>\
				<td><input type="text" name="line" id="oscitas-button-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-button-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.button+'" name="submit" />\
		</p>\
		</div>');
    return form;
}
function create_oscitas_buttons(pluginObj){
    var form= jQuery(pluginObj.hashId)
    var table = form.find('table');
    jQuery('.glyphicon').css('display','inline');

    form.find('.color').wpColorPicker();
    table.find('#click_icon_list_button').click(function(){
        if(!jQuery(this).hasClass('osc_icon_showing_button')){
            jQuery(this).addClass('osc_icon_showing_button')
            table.find('#osc_show_iconlist_button').show();
        } else{
            jQuery(this).removeClass('osc_icon_showing_button')
            table.find('#osc_show_iconlist_button').hide();
        }
    });
    table.find('.oscitas-heading-icon_button li').click(function(){
        var val=jQuery(this).attr('data-value');
        var type=jQuery(this).attr('type');
        table.find('.oscitas-heading-icon_button li').removeClass('osc_icon_selected_button');
        jQuery(this).addClass('osc_icon_selected_button');
        table.find('#osc_show_iconlist_button').hide();
        table.find('#osc_show_icon_button').removeClass().addClass(type).addClass(val);
        table.find('#osc_icon_class_val_button').val(type+' '+val);
    })

    table.find('#oscitas-button-type').change(function(){
        var abc = jQuery(this).val();
        if('link' == abc){
            jQuery(".tr-button-link").show();
            jQuery("#tr-button-newwindow").show();
        }else{
            jQuery(".tr-button-link").hide();
            jQuery("#tr-button-newwindow").hide();
        }
        jQuery('#oscitas-form-button table tr:visible:even').css('background', '#ffffff');
        jQuery('#oscitas-form-button table tr:visible:odd').css('background', '#efefef');
    });




    // handles the click event of the submit button
    form.find('#oscitas-button-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var options;
        var type = table.find('#oscitas-button-type').val();
        if(type=='button'){
            options = {
                'title'       : 'osCitas'
            };
        }
        else{
            options = {
                'title'       : 'osCitas',
                'link'        : '',
                'linkrel'        : ''
            };
        }
        var cusclass='',icon='';
        if(table.find('#oscitas-button-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-button-class').val()+'"';
        }
        if(table.find('#osc_icon_class_val_button').val()!=''){
            icon= ' icon="'+table.find('#osc_icon_class_val_button').val()+'" ';
            icon += ' align="'+table.find('#oscitas-button-iconalign').val()+'" ';
            if(table.find('#oscitas-button-iconcolor').val()!=''){
                icon+= ' iconcolor="'+table.find('#oscitas-button-iconcolor').val()+'" ';
            }
        }

        var shortcode = '['+$ebs_prefix+'button'+cusclass;

        shortcode += ' style="'+table.find('#oscitas-button-style').val();
        shortcode += ' '+table.find('#oscitas-button-size').val();
        shortcode += table.find('#oscitas-button-block').prop('checked')? ' btn-block': '';
        shortcode += '" ';
        shortcode += icon;
        shortcode += ' type="'+type+'" ';
        if(type!='button'){
            shortcode += ' target="'+(table.find('#oscitas-button-target').prop('checked')? 'true': 'false')+ '" ';
        }
        for( var index in options) {
            var value = table.find('#oscitas-button-' + index).val();
            //            var value = table.find('#oscitas-button-' + index).val();
            shortcode += ' ' + index + '="' + value + '"';
        }

        shortcode += ']';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });
}

