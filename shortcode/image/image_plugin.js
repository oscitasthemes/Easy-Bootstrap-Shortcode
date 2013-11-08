(function() {
    tinymce.create('tinymce.plugins.oscitasImage', {
        init : function(ed, url) {
            ed.addButton('oscitasimage', {
                title : 'Image Effects Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    create_oscitas_image();
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'Image Effects Shortcode',
                        'href' : '#oscitas-form-image',
                        helpers:  {
                            title : {
                                type : 'over',
                                position:'top'
                            }
                        }
                        
                    });
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : "Image Effects Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "2.0.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitasimage', tinymce.plugins.oscitasImage);
})();

function create_oscitas_image(){
    if(jQuery('#oscitas-form-image').length){
        jQuery('#oscitas-form-image').remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-image" class="oscitas-container"><table id="oscitas-table" class="form-table">\
				<th><label for="oscitas-label-content">Upload Image:</label></th>\
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
    
    var table = form.find('table');
    form.appendTo('body').hide();

    
    form.find('.upload_image_button').click(function() {
        jQuery('.fancybox-overlay').css('z-index',100);
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
            jQuery('html').removeClass('Image');

        } else {
            window.original_send_to_editor(html);
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
             shortcode = '[image'+cusclass+' src="'+form.find('#oscitas-image-src').val()+'" shape="'+shape+'"]';
        }
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        // closes fancybox
        jQuery.fancybox.close();
    });
}

