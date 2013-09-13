(function() {
    tinymce.create('tinymce.plugins.oscitasButtons', {
        init : function(ed, url) {
            ed.addButton('oscitasbuttons', {
                title : 'Buttons Shortcodes',
                image : url+'/icon.png',
                onclick : function() {
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'Button Shortcode',
                        'href' : '#oscitas-form-button',
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
                longname : "Button Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "1.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitasbuttons', tinymce.plugins.oscitasButtons);
})();

jQuery(function(){
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-button"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-button-style">Style:</label></th>\
				<td><select name="type" id="oscitas-button-style">\
					<option value="btn-default">Simple</option>\
					<option value="btn-primary">Primary</option>\
					<option value="btn-success">Success</option>\
					<option value="btn-info">Information</option>\
					<option value="btn-warning">Warning</option>\
					<option value="btn-danger">Danger</option>\
					<option value="btn-link">Link</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-button-size">Size:</label></th>\
				<td><select name="type" id="oscitas-button-size">\
					<option value="btn-lg">Large</option>\
					<option value="btn-sm">Small</option>\
					<option value="btn-xs">Ex-small</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-table-rows">Make block</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-button-block">\
                    <br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-button-title">Title:</label></th>\
				<td><input type="text" name="title" id="oscitas-button-title" value="Button"/><br />\
				</td>\
			</tr>\
			<tr id="tr-button-link">\
				<th><label for="oscitas-button-link">Link</label></th>\
				<td><input type="text" name="link" id="oscitas-button-link" value="www.yoursitename.com" /><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-table-rows">Open in new window</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-button-target">\
                    <br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-button-submit" class="button-primary" value="Insert Button" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();
    var colors = ['color','bgcolor'];
    jQuery.each(colors,function(index,color){
        
        jQuery('#oscitas-form-button').find('#oscitas-button-'+color).after('<div id="bg-'+color+'" style="height:25px;width:25px;"></div>');
        var defaultcolor = jQuery('#oscitas-button-'+color).val();
        jQuery('#oscitas-form-button').find('#bg-'+color).css('backgroundColor', '#'+defaultcolor );
        jQuery('#oscitas-form-button').find('#oscitas-button-'+color).ColorPicker({
            color: '#0000ff',
            onShow: function (colpkr) {
                jQuery(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                jQuery(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                //jQuery('#oscitas-bgcolor').css('backgroundColor', '#' + hex);
                jQuery('#oscitas-button-'+color).val('#' + hex);
                jQuery('#bg-'+color).css('backgroundColor', '#' + hex)
                
            }
        });

    });

    jQuery('#oscitas-button-type').change(function(){
        var abc = jQuery(this).val();
        if('button-link' == abc){
            jQuery("#tr-button-link").fadeIn();
            jQuery("#tr-modalname").fadeOut();
        }else{
            jQuery("#tr-button-link").fadeOut();
            jQuery("#tr-modalname").fadeIn();
        }
    });
        

        
		
    // handles the click event of the submit button
    form.find('#oscitas-button-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var options = { 
            'title'       : 'osCitas',
            'link'        : ''
        };
        var type = jQuery('#oscitas-button-type').val();
        var shortcode = '[button';

        shortcode += ' class="'+table.find('#oscitas-button-style').val();
        shortcode += ' '+table.find('#oscitas-button-size').val();
        shortcode += table.find('#oscitas-button-block').prop('checked')? ' btn-block': '';
        shortcode += '" ';
        //shortcode += ' btntag="'+table.find('#oscitas-button-type').val()+'" ';
        shortcode += ' target="'+(table.find('#oscitas-button-block').prop('checked')? 'true': 'false')+ '" ';

        for( var index in options) {
            var value = table.find('#oscitas-button-' + index).val();
            var value = table.find('#oscitas-button-' + index).val();
            shortcode += ' ' + index + '="' + value + '"';
        }
			
        shortcode += ']';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        // closes fancybox
        jQuery.fancybox.close();
    });
});

