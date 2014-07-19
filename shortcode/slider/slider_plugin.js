var slider={
    title:"Slider Shortcode",
    id :'oscitas-form-slider',
    pluginName: 'slider',
    setRowColors:false
};

(function() {
    _create_tinyMCE_options(slider,1100);
})();

function __slider_show_image_upload_icon(parent,ele){
    parent.find(ele).on('click',function(){
        jQuery('body').addClass('ebs_plugin_shown_now');
        jQuery('.ui-widget-overlay, .ui-dialog').css('z-index',100);
        jQuery('html').addClass('Image');
        formfield = jQuery(this).prev();
        imgparent= jQuery(this).parent('td');
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
            jQuery(formfield).val(fileurl);
            tb_remove();
            imgparent.find('.image_preview').html('<img src="'+fileurl+'">')
            jQuery('html').removeClass('Image');
            jQuery('body').removeClass('ebs_plugin_shown_now');

        } else {
            jQuery('body').removeClass('ebs_plugin_shown_now');
            window.original_send_to_editor(html);
        }

    };
}
function ebs_return_html_slider(pluginObj){

    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table" style="margin-top: 0px;">\
    <tr>\
				<th><label for="oscitas-slider-class">Slider Interval</label></th>\
				<td><input type="text" name="line" id="oscitas-slider-interval" value=""/><br />\
				</td>\
			</tr>\
        <tr>\
				<th><label for="oscitas-slider-class">Show Navigation Controls</label></th>\
				<td><input type="checkbox" name="line" id="oscitas-slider-controls" value="true"/><br />\
				</td>\
			</tr>\
        <tr>\
				<th><label for="oscitas-slider-class">Show Navigation Bullets</label></th>\
				<td><input type="checkbox" name="line" id="oscitas-slider-bullets" value="true"/><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-slider-class">Pause On Hover</label></th>\
				<td><input type="checkbox" name="line" id="oscitas-slider-pause" value="hover"/><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-slider-class">Cyclic</label></th>\
				<td><input type="checkbox" name="line" id="oscitas-slider-wrap" value="true"/><br />\
				</td>\
			</tr>\
			 <tr>\
				<th><label for="oscitas-slider-class">Caption Color</label></th>\
				<td><input type="text" name="line" id="oscitas-slider-captioncolor" class="color" value=""/>\
				</td>\
			</tr>\
				<tr>\
				<th><label for="oscitas-slider-class">Navigation Color</label></th>\
				<td><input type="text" name="line" id="oscitas-slider-navcolor" class="color" value=""/>\
				</td>\
			</tr>\
				<tr>\
				<th class="main_dp_th"><label for="oscitas-line">Add Slides</label></th>\
				<td>\
				<table class="tb_multiple_column">\
                                <thead>\
                                    <tr><th class="enhanced">Title</th><th class="enhanced">Image</th><th class="enhanced">Image Caption</th><th>Active</th><th>Option</th></tr>\
                                </thead>\
                                <tbody id="oscitas-append-slideritem">\
                                <tr class="osc_dropdown_list_item">\
                                    <td class="enhanced"><input type="text" name="oscitas-itemslider-title[]" class="oscitas-itemslider-title" value="Title"/></td>\
                                    <td class="enhanced"><input class="oscitas-itemslider-image" type="hidden" name="oscitas-itemslider-image[]"  value="" />\
                                <input id="_btn" class="upload_image_button" type="button" value="Upload Image" /><div class="image_preview"></div></td>\
                                    <td class="enhanced"><textarea name="oscitas-itemslider-caption[]" class="oscitas-itemslider-caption"></textarea></td>\
                                   <td><input type="radio" name="oscitas-itemslider-active" class="oscitas-itemslider-active" value="active" checked="checked"/></td>\
                                  <td></td>\
                                </tr>\
                                </tbody>\
                                <tfoot>\
                                    <tr><td colspan="5"><a id="osc_add_new_dditem" href="javascript:;" style="text-decoration:none;"><i class="glyphicon glyphicon-plus-sign"></i> Add New Item</a></td></tr>\
                                </tfoot>\
                                </table></td>\
			</tr>\
                    <tr>\
                        <th><label for="oscitas-slider-class">Custom Class</label></th>\
                        <td><input type="text" name="line" id="oscitas-slider-class" value=""/><br />\
                        </td>\
                    </tr>\
		</table>\
		<p class="submit" style="padding-right: 10px;text-align: right;">\
			<input type="button" id="oscitas-slider-submit" class="button-primary" value="Insert slider" name="submit" />\
		</p>\
		</div>');
    return form;
}
function create_oscitas_slider(pluginObj){
   var form=jQuery(pluginObj.hashId);


    var table = form.find('table');

    form.find('#osc_add_new_dditem').click(function(){
        var item='<tr class="osc_dropdown_list_item"><td class="enhanced"><input type="text" name="scitas-itemslider-title[]" class="oscitas-itemslider-title" value="Title"/></td><td class="enhanced"><input class="oscitas-itemslider-image" type="hidden" name="oscitas-itemslider-image[]"  value="" /><input id="_btn" class="upload_image_button" type="button" value="Upload Image" /><div class="image_preview"></div></td><td class="enhanced"><textarea name="oscitas-itemslider-caption[]" class="oscitas-itemslider-caption"></textarea></td><td><input type="radio" name="oscitas-itemslider-active" class="oscitas-itemslider-active" value=""/></td><td><a class="osc_remove_dditem" href="javascript:;" style="text-decoration:none;"><i class="glyphicon  glyphicon-remove"></i></a></td></tr>';
        form.find('#oscitas-append-slideritem').append(item);
        __slider_show_image_upload_icon(form,jQuery('#oscitas-append-slideritem').find('tr:last').find('.upload_image_button'));


    });
    jQuery('.osc_remove_dditem').live('click',function(){
        jQuery(this).parent().parent().remove();
    })

    form.find('.color').wpColorPicker();

    jQuery('.upload_image_button').each(function(){
        __slider_show_image_upload_icon(form,jQuery(this));
    })

    form.find('#oscitas-slider-submit').click(function(){

        var  shortattr='';
        var valueattr=['class','interval','captioncolor','navcolor']
        var checkattr=['controls','bullets','pause','wrap']

        jQuery(valueattr).each(function(ind,val){
            if(table.find('#oscitas-slider-'+val).val()!=''){
                shortattr+= ' '+val+'="'+table.find('#oscitas-slider-'+val).val()+'"';
            }
        });
        jQuery(checkattr).each(function(ind,val){
            if(table.find('#oscitas-slider-'+val).prop('checked')){
                shortattr+= ' '+val+'="'+table.find('#oscitas-slider-'+val).val()+'"';
            }
        })

        var shortcode = '['+$ebs_prefix+'slider'+shortattr;
        shortcode += ']';
        var row_attr={
            title:'',
            image:'',
            caption:''
        }

        form.find('tr.osc_dropdown_list_item').each(function(index){
            var $this=jQuery(this);
            var attr='';

            jQuery.each(row_attr,function(ind,val){
                if($this.find('.oscitas-itemslider-'+ind).val()!=''){
                    attr+=' '+ind+'="'+$this.find('.oscitas-itemslider-'+ind).val()+'"';
                }
            });
            if(jQuery(this).find('.oscitas-itemslider-active').is(":checked")==true){
                attr+=' active="active"';
            }

            shortcode+='<br/>['+$ebs_prefix+'slide'+attr+'/]';


        });

        shortcode += '<br/>[/'+$ebs_prefix+'slider]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes dialog box
        close_dialogue(pluginObj.hashId);

    });
}
