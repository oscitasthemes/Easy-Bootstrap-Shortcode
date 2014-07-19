var servicebox={
    title:"Service Box Shortcode",
    id :'oscitas-form-servicebox',
    pluginName: 'servicebox',
    setRowColors:true
};

(function() {
    _create_tinyMCE_options(servicebox,800);
})();

function slider_render(ele,val,mini,max){
    jQuery('#slider_rander_'+ele).slider({

        range:'min',
        min: mini,
        max: max,
        value: val,
        animate: true,
        slide: function( event, ui ) {
            jQuery(this).parent('td').find('input[type="text"]').val( ui.value );
            if(ele=='icon_bg'){
                jQuery('#icon_bg_preview').css({
                    'height':ui.value+'px',
                    'width':ui.value+'px',
                    'line-height':parseInt(ui.value)+'px'
                });
            } else if(ele=='icon'){
                jQuery('#icon_bg_preview').css({
                    'font-size':ui.value+'px'
                });
            }else if(ele=='icon_bg_radius'){
                jQuery('#icon_bg_preview').css({
                    'border-radius':ui.value+'%'
                });
            }
        }
    });
}
function ebs_return_html_servicebox(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'">\
        <span id="icon_bg_preview" class="iconcircle glyphicon glyphicon-cog"></span>\
    <div id="osc-servicebox-scroll"><table id="oscitas-table" class="form-table">\
                        <tr class="show_boxtype_icon">\
                        <th><label for="oscitas-heading-icon">Select Icon:</label></th>\
				<td><div id="click_icon_list_servicebox" class="oscitas-icon-div"><span id="osc_show_icon_servicebox"></span><span class="show-drop"></span></div><input type="hidden" id="oscitas-servicebox-icon" value=""><input type="hidden" id="oscitas-servicebox-icontype" value="">\
                    <div id="osc_show_iconlist_servicebox" class="oscitas-icon" style="display:none;">'+font_awesome_include('oscitas-heading-icon_servicebox')+'</div>\
				</td>\
			</tr>\
            <tr>\
				<th><label>Icon Size:</label></th>\
				<td><input type="text" name="label" class="slider_input" id="oscitas-servicebox-icon_size" value="40"/>\
				<div class="slider_render" id="slider_rander_icon"></div>\
				</td>\
			</tr>\
			<tr>\
				<th><label>Icon Background Size:</label></th>\
				<td><input type="text" name="label" class="slider_input" id="oscitas-servicebox-iconbg_size" value="100"/>\
				<div class="slider_render" id="slider_rander_icon_bg"></div>\
				</td>\
			</tr>\
			<tr>\
				<th><label>Border Radius:</label></th>\
				<td><input type="text" name="label" class="slider_input" id="oscitas-servicebox-iconbg_radius" value="50"/>\
				<div class="slider_render" id="slider_rander_icon_bg_radius"></div>\
				</td>\
			</tr>\
			<tr>\
				<th><label>Margin Top:</label></th>\
				<td><input type="text" name="label" id="oscitas-servicebox-margin_top" value="30"/> <small>px</small>\
				</td>\
			</tr><tr>\
				<th><label>Margin Bottom:</label></th>\
				<td><input type="text" name="label" id="oscitas-servicebox-margin_bottom" value="30"/> <small>px</small>\
				</td>\
			</tr>\
            <tr class="show_boxtype_icon">\
				<th><label for="oscitas-servicebox-iconcolor">Icon Color:</label></th>\
				<td><input type="text" name="label" id="oscitas-servicebox-iconcolor" data-type="icon"  data-attr="color" class="color" value="#777777" data-default-color="#777777"/><br />\
				</td>\
			</tr>\
                <tr class="show_boxtype_icon">\
                    <th><label for="oscitas-servicebox-iconbgcolor">Icon Background Color:</label></th>\
                    <td><input type="text" name="label" id="oscitas-servicebox-iconbgcolor" data-type="icon_bg"  data-attr="background" class="color" value="#FFFFFF" data-default-color="#FFFFFF"/><br />\
                    </td>\
                </tr>\
            <tr>\
				<th><label >Read More:</label></th>\
				<td><input type="checkbox" name="oscitas-servicebox-readmore" id="oscitas-servicebox-readmore" class="show_sub has_sub" value="true" data="readmore"/><label for="oscitas-servicebox-readmore">Include Read More Link</label>\
				</td>\
			</tr>\
			<tr class="oscitas-servicebox-readmore" style="display:none">\
				<th><label for="oscitas-servicebox-readmore_link">Link:</label></th>\
				<td><input type="text" name="label" id="oscitas-servicebox-readmore_link" value="#"/><br />\
				</td>\
			</tr>\
                <tr class="oscitas-servicebox-readmore" style="display:none">\
				<th><label for="oscitas-servicebox-readmore_text">Text:</label></th>\
				<td><input type="text" name="label" id="oscitas-servicebox-readmore_text" value="Read More"/><br />\
				</td>\
			</tr>\
                <tr class="oscitas-servicebox-readmore" style="display:none">\
				<th><label for="oscitas-servicebox-readmore_type">Button Type:</label></th>\
				<td><select name="label" id="oscitas-servicebox-readmore_type">\
                    <option value="">Default</option>\
                    <option value="btn-lg">Large</option>\
					<option value="btn-sm">Small</option>\
					<option value="btn-xs">Ex-small</option>\
				    </select>\
				</td>\
			</tr>\
			<tr class="oscitas-servicebox-readmore" style="display:none">\
				<th><label>Read More Style:</label></th>\
				<td><input type="radio" name="oscitas-servicebox-readmorestyle" id="oscitas-servicebox-readmorestyle-default" class="show_sub" value="default" checked="checked" data="readmorestyle"/><label for="oscitas-servicebox-readmorestyle-default">Default</label><input type="radio" class="show_sub has_sub" name="oscitas-servicebox-readmorestyle" id="oscitas-servicebox-readmorestyle-custom" value="custom" data="readmorestyle"/><label for="oscitas-servicebox-readmorestyle-custom">Custom</label><br />\
				</td>\
			</tr>\
			<tr class="oscitas-servicebox-readmorestyle" style="display:none">\
				<th><label for="oscitas-servicebox-readmore_bgcolor">Link Background Color:</label></th>\
				<td><input type="text" name="label" id="oscitas-servicebox-readmore_bgcolor" class="color" value="#FFFFFF" data-default-color="#FFFFFF"/><br />\
				</td>\
			</tr>\
                <tr class="oscitas-servicebox-readmorestyle" style="display:none">\
				<th><label for="oscitas-servicebox-readmore_fgcolor">Link Foreground Color:</label></th>\
				<td><input type="text" name="label" id="oscitas-servicebox-readmore_fgcolor" class="color" value="#777777" data-default-color="#777777"/><br />\
				</td>\
			</tr>\
            <tr >\
				<th><label for="oscitas-servicebox-headingtype">Heading Type:</label></th>\
				<td><select name="oscitas-servicebox-headingtype" id="oscitas-servicebox-headingtype">\
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
				<th><label for="oscitas-servicebox-heading">Heading:</label></th>\
				<td><input type="text" name="line" id="oscitas-servicebox-heading" value=""/><br />\
				</td>\
			</tr>\
            <tr>\
				<th><label for="oscitas-servicebox-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-servicebox-class" value=""/><br />\
				</td>\
			</tr>\
		</table></div>\
		<p class="submit">\
			<input type="button" id="oscitas-servicebox-submit" class="button-primary" value="Insert Service Box" name="submit" />\
		</p>\
		</div>');
    return form;
}
function create_oscitas_servicebox(pluginObj){
   var form=jQuery(pluginObj.hashId);

    var table = form.find('table');

    jQuery('.glyphicon').css('display','inline');

    table.find('#click_icon_list_servicebox').click(function(){
        if(!jQuery(this).hasClass('osc_icon_showing_servicebox')){
            jQuery(this).addClass('osc_icon_showing_servicebox')
            table.find('#osc_show_iconlist_servicebox').show();
        } else{
            jQuery(this).removeClass('osc_icon_showing_servicebox')
            table.find('#osc_show_iconlist_servicebox').hide();
        }
    });
    table.find('.oscitas-heading-icon_servicebox li').click(function(){
        var val=jQuery(this).attr('data-value');
        var type=jQuery(this).attr('type');
        table.find('.oscitas-heading-icon_servicebox li').removeClass('osc_icon_selected');
        jQuery(this).addClass('osc_icon_selected');
        table.find('#click_icon_list_servicebox').removeClass('osc_icon_showing_servicebox');
        table.find('#osc_show_iconlist_servicebox').hide();
        table.find('#osc_show_icon_servicebox').removeClass().addClass(type).addClass(val);
        form.find('#icon_bg_preview').removeClass().addClass('iconcircle').addClass(type).addClass(val);
        table.find('#oscitas-servicebox-icon').val(val);
        table.find('#oscitas-servicebox-icontype').val(type);
    })
    var slider={
        icon:[40,20,140],
        icon_bg:[100,50,150],
        icon_bg_radius:[50,0,50]
    }
    jQuery.each(slider,function(ind,val){
        slider_render(ind,val[0],val[1],val[2])
    })

    jQuery( "#esb-boxsize" ).val( jQuery( "#esb-boxsize-slider" ).slider( "value" ) );
    form.find('.color').wpColorPicker({
        change:function(event, ui){
            var type= jQuery(this).attr('data-type');
            console.log(typeof type)
            if(typeof type!='undefined'){

                var attr= jQuery(this).attr('data-attr');
                var sel_color=ui.color.toString();
                jQuery(form).find('#icon_bg_preview').css(attr,sel_color);
            }
        }
    });
    jQuery('.show_sub').click(function(){
        var name=jQuery(this).attr('name');
        if(jQuery(this).hasClass('has_sub') && jQuery(this).prop('checked')){
            jQuery('.'+name).show();
            if(name=='oscitas-servicebox-readmore'){

                if(!jQuery('.oscitas-servicebox-readmorestyle').hasClass(name)){
                    jQuery('.oscitas-servicebox-readmorestyle').addClass(name)
                }
            }
        } else{
            jQuery('.'+name).hide();
        }
        jQuery(pluginObj.hashId).find('table tr:visible:even').css('background', '#ffffff');
        jQuery(pluginObj.hashId).find('table tr:visible:odd').css('background', '#efefef');
    })

    // handles the click event of the submit servicebox
    form.find('#oscitas-servicebox-submit').click(function(){
        var colorobj='', element='',data='',element2='', options='';

        colorobj={
            'readmore':{
                'readmore_link':'',
                'readmore_text':'',
                'readmore_type':''
            },
            'readmorestyle-default':'',
            'readmorestyle-custom':{
                'readmore_bgcolor':'',
                'readmore_fgcolor':''
            }
        }
        options= ['icon','icontype','icon_size','iconbg_size','iconbg_radius','margin_bottom','margin_top','iconbgcolor','iconcolor','headingtype','heading','class'];

        var shortcodeattr='';
        jQuery(options).each(function(ind,val){
            if(jQuery('#oscitas-servicebox-'+val).val()!=''){
                shortcodeattr+=' '+val+'="'+jQuery('#oscitas-servicebox-'+val).val()+'"';
            }
        })
        jQuery.each(colorobj,function(ind,val){
            element=jQuery('#oscitas-servicebox-'+ind);
            if(element.prop('checked')){

                data=element.attr('data');
                shortcodeattr+=' '+data+'="'+element.val()+'"';
                if(typeof val=='object'){
                    jQuery.each(val,function(ind1,val1){
                        if(jQuery('#oscitas-servicebox-'+ind1).val()!=''){
                            shortcodeattr+=' '+ind1+'="'+jQuery('#oscitas-servicebox-'+ind1).val()+'"';
                        }

                    });
                }
            }
        });
        var selected_content = tinyMCE.activeEditor.selection.getContent();
        if(!selected_content)
            var selected_content = 'Your Content';
        var shortcode = '['+$ebs_prefix+'servicebox '+shortcodeattr+']'+selected_content+'[/servicebox]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.selection.setContent(shortcode);

        // closes dialogue box
        close_dialogue(pluginObj.hashId);
    });
}


