(function() {
    tinymce.create('tinymce.plugins.oscitasLists', {
        init : function(ed, url) {
            ed.addButton('oscitaslists', {
                title : 'List Group Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    create_oscitas_lists();
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'List Group Shortcode',
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
                longname : "List Group Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "2.0.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitaslists', tinymce.plugins.oscitasLists);
})();

function create_oscitas_lists(){
    if(jQuery('#oscitas-form-lists').length){
        jQuery('#oscitas-form-lists').remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-lists" class="oscitas-container"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-type">Lists style</label></th>\
				<td><select name="type" id="oscitas-type">\
                                        <option value="">None</option>\
					<option value="glyphicon-arrow-right">Arrow</option>\
					<option value="glyphicon-ok">Check</option>\
					<option value="glyphicon-plus">Plus</option>\
                    <option value="glyphicon-minus">Minus</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-line">No of List Item</label></th>\
				<td><input type="text" name="line" id="oscitas-list-item" value="3"/><br /><small>Enter a numeric value</small>\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-list-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-list-class" value=""/><br />\
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
        },list=0,list_type;
        var cusclass='';
        if(table.find('#oscitas-list-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-list-class').val()+'"';
        }
        var shortcode = '[list'+cusclass;
        var list_item=jQuery('#oscitas-list-item').val();
        if(isNaN(list_item)==false){
            list=list_item;
        } else{
            list=3;
        }	
     

        shortcode += ']<br/>';
        if(table.find('#oscitas-type').val()!=''){
            list_type=' type="'+table.find('#oscitas-type').val()+'"';
        }
        else{
            list_type='';
        }
        for(var i=1;i<=list;i++){
            shortcode +='[li'+list_type+']your list content[/li]<br/>' 
        }
        shortcode +='[/list]';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        jQuery.fancybox.close();
    });
}

