var thumbnail={
    title:"Responsive Image Shortcode",
    id :'oscitas-form-thumbnail',
    pluginName: 'thumbnail'
};
(function() {
    _create_tinyMCE_options(thumbnail);
})();

function ebs_return_html_thumbnail(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
				<th><label for="oscitas-label-content">Upload Image:</label></th>\
				<td id="osc_thumbnail_upload"><input id="oscitas-thumbnail-src" type="hidden" name="oscitas-thumbnail-src"  value="" />\
                                <input id="_btn" class="upload_image_button" type="button" value="Upload Image" />\
				</td>\
			</tr>\
            <tr>\
				<th><label for="oscitas-thumbnail-link">Alternate Text :</label></th>\
				<td><input type="text" name="oscitas-alt-txt" id="oscitas-alt-txt" value=""/><br />\
				</td>\
			</tr>\
            <tr>\
				<th><label for="oscitas-thumbnail-link">Link:</label></th>\
				<td><input type="text" name="oscitas-thumbnail-link" id="oscitas-thumbnail-link" value=""/><br />\
				</td>\
			</tr>\
            <tr>\
				<th><label for="oscitas-thumbnail-link">Target:</label></th>\
				<td><select name="oscitas-thumbnail-link-target" id="oscitas-thumbnail-link-target"><option value="_self">Self</option><option value="_blank">New Window</option></select><br />\
				</td>\
			</tr>\
            <tr>\
				<th><label for="oscitas-thumbnail-link">Show Border:</label></th>\
				<td><input type="checkbox" name="oscitas-thumbnail-border" id="oscitas-thumbnail-border" value="1"/><br />\
				</td>\
			</tr>\
            <tr>\
				<th><label for="oscitas-thumbnail-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-thumbnail-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-thumbnail-submit" class="button-primary" value="Insert Thumbnail" name="submit" />\
		</p>\
		</div>');

    return form;
}

function create_oscitas_thumbnail(pluginObj){
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
            form.find('#osc_thumbnail_upload img').remove();
            form.find('#osc_thumbnail_upload').append('<img src="'+fileurl+'">');
            jQuery('body').removeClass('ebs_plugin_shown_now');
            jQuery('html').removeClass('Image');

        } else {
            window.original_send_to_editor(html);
            jQuery('body').removeClass('ebs_plugin_shown_now');
        }

    };
        
		
    // handles the click event of the submit button
    form.find('#oscitas-thumbnail-submit').click(function(){
        var shortcode='';
        var cusclass='',link='', border='',tget='', alt='';
        if(table.find('#oscitas-thumbnail-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-thumbnail-class').val()+'"';
        }
        if(table.find('#oscitas-thumbnail-link').val()!=''){
            link= ' link="'+form.find('#oscitas-thumbnail-link').val()+'"';
        }

        if(table.find('#oscitas-alt-txt').val()!=''){
            alt= ' alt="'+form.find('#oscitas-alt-txt').val()+'"';
        }

        if(table.find('#oscitas-thumbnail-link-target').val()!=''){
            tget= ' target="'+form.find('#oscitas-thumbnail-link-target').val()+'"';
        }

        if(table.find('#oscitas-thumbnail-border').is(':checked')){
            border= ' border="1"';
        }

        if(form.find('#oscitas-thumbnail-src').val()!=''){
            shortcode = '['+$ebs_prefix+'thumbnail'+link+cusclass+border+tget+alt+' src="'+form.find('#oscitas-thumbnail-src').val()+'"]';
        }
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}

