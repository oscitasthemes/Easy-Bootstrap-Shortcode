(function() {
    tinymce.create('tinymce.plugins.oscitasLists', {
        init : function(ed, url) {
            ed.addButton('oscitaslists', {
                title : 'Create lists',
                image : url+'/icon.png',
                onclick : function() {
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'List Shortcode',
                        'href' : '#oscitas-form-lists',
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
                longname : "List Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "1.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitaslists', tinymce.plugins.oscitasLists);
})();

jQuery(function(){
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-lists"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-type">Lists style</label></th>\
				<td><select name="type" id="oscitas-type">\
					<option value="arrow-list">Arrow</option>\
					<option value="check-list">Check</option>\
                    <option value="x-list">x-Style</option>\
					<option value="plus-list">Plus</option>\
                    <option value="minus-list">Minus</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-line">No of List Item</label></th>\
				<td><input type="oscitas-list-item" name="line" id="oscitas-list-item"/><br /><small>Enter a numeric value</small>\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-submit" class="button-primary" value="Insert List" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();
		
    // handles the click event of the submit button
    form.find('#oscitas-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var options = { 
            'type'       : 'arrow'
        },list=0;
        var shortcode = '[list';
        var list_item=jQuery('#oscitas-list-item').val();
        if(isNaN(list_item)==false){
            list=list_item;
        } else{
            list=3;
        }	
        for( var index in options) {
            var value = table.find('#oscitas-' + index).val();
				
            // attaches the attribute to the shortcode only if it's different from the default value
            //if ( value !== options[index] )
            shortcode += ' ' + index + '="' + value + '"';
        }

        shortcode += ']<br/>';
        for(var i=1;i<=list;i++){
            shortcode +='[li]your list content[/li]<br/>' 
        }
        shortcode +='[/list]';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        jQuery.fancybox.close();
    });
});

