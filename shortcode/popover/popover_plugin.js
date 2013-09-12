(function() {
    tinymce.create('tinymce.plugins.oscitasPopover', {
        init: function(ed, url) {
            ed.addButton('oscitaspopover', {
                title: 'Popover Shortcode',
                image: url + '/icon.png',
                onclick: function() {
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'Popover Shortcode',
                        'href' : '#oscitas-form-popover',
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
                longname: "Popover Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "1.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitaspopover', tinymce.plugins.oscitasPopover);
})();

jQuery(function() {
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-popover"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-popover-style">Popover Style:</label></th>\
				<td><select name="oscitas-popover-style" id="oscitas-popover-style">\
					<option value="top">Top</option>\
					<option value="bottom">Bottom</option>\
					<option value="left">Left</option>\
					<option value="right">Right</option>\
                                        <option value="auto">Auto</option>\
                                    </select><br />\
				</td>\
			</tr>\
<tr>\
				<th><label for="oscitas-popover-title">Popover Title Text:</label></th>\
				<td><input type="text" name="popover-title" id="oscitas-popover-title" value="A title"/><br />\
				</td>\
			</tr>\
                        </tr>\
<tr>\
				<th><label for="oscitas-popover-content">Popover Title Text:</label></th>\
				<td><textarea " name="popover-content" id="oscitas-popover-content">Your Content</textarea><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-pbutton-trigger">Trigger Popover On:</label></th>\
				<td><select name="tigger" id="oscitas-pbutton-trigger">\
                                         <option value="click">Click</option>\
                                        <option value="hover">Hover</option>\
					</select><br />\
				</td>\
			</tr >\
                        <tr>\
				<th><label for="oscitas-pbutton-size">Button Size:</label></th>\
				<td><select name="size" id="oscitas-pbutton-size">\
                                         <option value="">Default</option>\
                                        <option value="btn-lg">Large</option>\
                                        <option value="btn-sm">Small</option>\
                                        <option value="btn-xs">X-Small</option>\
					</select><br />\
				</td>\
			</tr >\
                        <tr>\
				<th><label for="oscitas-pbutton-type">Button Type:</label></th>\
				<td><select name="type" id="oscitas-pbutton-type">\
                                         <option value="btn-default">Default</option>\
                                        <option value="btn-primary">Primary</option>\
                                        <option value="btn-success">Success</option>\
                                        <option value="btn-info">Info</option>\
                                        <option value="btn-warning">Warning</option>\
                                        <option value="btn-danger">Danger</option>\\n\
                                        <option value="btn-link">Link</option>\
					</select><br />\
				</td>\
			</tr >\
<tr>\
				<th><label for="oscitas-popover-button-text">Button Text:</label></th>\
				<td><input type="text" name="link-text" id="oscitas-popover-button-text" value="Popover"/><br />\
				</td>\
			</tr>\
</table>\
		<p class="submit">\
			<input type="button" id="oscitas-popover-submit" class="button-primary" value="Insert Popover" name="submit" />\
		</p>\
		</div>');

    var table = form.find('table');
    form.appendTo('body').hide();
    var colors = ['color', 'bgcolor'];
    jQuery('table tr:visible:even').css('background', '#F0F0F0');
    jQuery('table tr:visible:odd').css('background', '#DADADD');
    

    // handles the click event of the submit button
    form.find('#oscitas-popover-submit').click(function() {
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless

        var shortcode = '[popover';
        shortcode += ' title="' + table.find('#oscitas-popover-title').val();

        shortcode += '" ';
        
        shortcode += ' pop_content="' + table.find('#oscitas-popover-content').val();

        shortcode += '" ';
        shortcode += ' trigger="' + table.find('#oscitas-pbutton-trigger').val();

        shortcode += '" ';
        shortcode += ' style="' + table.find('#oscitas-popover-style').val();

        shortcode += '" ';
        shortcode += ' size="' + table.find('#oscitas-pbutton-size').val();

        shortcode += '" ';
        shortcode += ' type="' + table.find('#oscitas-pbutton-type').val();

        shortcode += '" ';
        //shortcode += ' btntag="'+table.find('#oscitas-button-type').val()+'" ';



        shortcode += ']';
        shortcode+= table.find('#oscitas-popover-button-text').val();
        shortcode+='[/popover]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        jQuery.fancybox.close();
    });
});

