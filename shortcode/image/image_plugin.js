var image={
    title:"Image Effects Shortcode",
    id :'oscitas-form-image',
    pluginName: 'image'
};
(function() {
    _create_tinyMCE_options(image);
})();

function ebs_return_html_image(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
				<tr><th><label for="oscitas-label-content">Upload Image:</label></th>\
				<td id="osc_image_upload"><input id="oscitas-image-src" type="hidden" name="oscitas-thumbnail-src"  value="" />\
                                <input id="_btn" class="upload_image_button" type="button" value="Upload Image" />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-image-shape">Image Shape:</label></th>\
				<td><select name="oscitas-image-shape" id="oscitas-image-shape">\
                                <option value="img-rounded">Rounded</option>\
                                <option value="img-circle">Circle</option>\
                                <option value="img-thumbnail">Thumbnail</option>\
                                </select>\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-image-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-image-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-image-submit" class="button-primary" value="Insert Image" name="submit" />\
		</p>\
		</div>');
    return form;
}
function create_oscitas_image(pluginObj){

    var form=jQuery(pluginObj.hashId);

    var table = form.find('table');



    form.find('.upload_image_button').click(function() {
        jQuery('body').addClass('ebs_plugin_shown_now');
        jQuery('.ui-widget-overlay, .ui-dialog').css('z-index',100);
        jQuery('html').addClass('Image');
        formfield = jQuery(this).prev().attr('id');
        tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
        return false;
    });

    window.original_send_to_editor = window.send_to_editor;

    window.send_to_editor = function(html) {
        if (formfield) {
            if (jQuery(html).find('img').length) {
                fileurl = jQuery('img', html).attr('src');
            } else if (jQuery(html).attr('src')) {
                fileurl = jQuery(html).attr('src');
            }
            jQuery('#' + formfield).val(fileurl);
            tb_remove();
            form.find('#osc_image_upload img').remove();
            form.find('#osc_image_upload').append('<img src="'+fileurl+'">')
            jQuery('body').removeClass('ebs_plugin_shown_now');
            jQuery('html').removeClass('Image');

        } else {
            window.original_send_to_editor(html);
            jQuery('body').removeClass('ebs_plugin_shown_now');
        }

    };


    // handles the click event of the submit button
    form.find('#oscitas-image-submit').click(function(){
        var shortcode='';
        var shape=form.find('#oscitas-image-shape').val();
        var cusclass='';
        if(table.find('#oscitas-image-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-image-class').val()+'"';
        }
        if(form.find('#oscitas-image-src').val()!=''){
            shortcode = '['+$ebs_prefix+'image'+cusclass+' src="'+form.find('#oscitas-image-src').val()+'" shape="'+shape+'"]';
        }
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}

