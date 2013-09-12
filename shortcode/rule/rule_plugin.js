(function() {
    tinymce.create('tinymce.plugins.oscitasRule', {
        init: function(ed, url) {
            ed.addButton('oscitasrule', {
                title: 'Horizontal Rule Shortcode',
                image: url + '/icon.png',
                onclick: function() {
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'Horizontal Rule Shortcode',
                        'href' : '#oscitas-form-rule',
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
        createControl: function(n, cm) {
            return null;
        },
        getInfo: function() {
            return {
                longname: "Horizontal Rule Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "1.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitasrule', tinymce.plugins.oscitasRule);
})();

jQuery(function() {
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-rule"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-rule-style">Style:</label></th>\
				<td><select name="type" id="oscitas-rule-style">\
					<option value="rule-dotted">Dotted</option>\
					<option value="rule-line">Line</option>\
					<option value="rule-thick">Thick</option>\
					<option value="rule-thin">Thin</option>\
				</select><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-rule-submit" class="button-primary" value="Insert Horizontal Rule" name="submit" />\
		</p>\
		</div>');

    var table = form.find('table');
    form.appendTo('body').hide();
    var colors = ['color', 'bgcolor'];
    jQuery.each(colors, function(index, color) {

        jQuery('#oscitas-form-rule').find('#oscitas-rule-' + color).after('<div id="bg-' + color + '" style="height:25px;width:25px;"></div>');
        var defaultcolor = jQuery('#oscitas-rule-' + color).val();
        jQuery('#oscitas-form-rule').find('#bg-' + color).css('backgroundColor', '#' + defaultcolor);
        jQuery('#oscitas-form-rule').find('#oscitas-rule-' + color).ColorPicker({
            color: '#0000ff',
            onShow: function(colpkr) {
                jQuery(colpkr).fadeIn(500);
                return false;
            },
            onHide: function(colpkr) {
                jQuery(colpkr).fadeOut(500);
                return false;
            },
            onChange: function(hsb, hex, rgb) {
                //jQuery('#oscitas-bgcolor').css('backgroundColor', '#' + hex);
                jQuery('#oscitas-rule-' + color).val('#' + hex);
                jQuery('#bg-' + color).css('backgroundColor', '#' + hex)

            }
        });

    });






    // handles the click event of the submit button
    form.find('#oscitas-rule-submit').click(function() {
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless

        var shortcode = '[rule';

        shortcode += ' class="' + table.find('#oscitas-rule-style').val();

        shortcode += '" ';
        //shortcode += ' btntag="'+table.find('#oscitas-button-type').val()+'" ';



        shortcode += ']';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        jQuery.fancybox.close();
    });
});

