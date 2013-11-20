(function() {
    tinymce.create('tinymce.plugins.oscitasDeslist', {
        init : function(ed, url) {
            ed.addButton('oscitasdeslist', {
                title : 'List Group Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    create_oscitas_deslists();
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'Description List Shortcode',
                        'href' : '#oscitas-form-deslists',
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
                longname : "Description List Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "2.0.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitasdeslist', tinymce.plugins.oscitasDeslist);
})();

function create_oscitas_deslists(){
    if(jQuery('#oscitas-form-deslists').length){
        jQuery('#oscitas-form-deslists').remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-deslists"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-line">No of List Item</label></th>\
				<td><input type="text" name="line" id="oscitas-deslist-item" value="3"/><br /><small>Enter a numeric value</small>\
				</td>\
			</tr>\
                <tr>\
                    <th><label for="oscitas-deslist-style">List style</label></th>\
                    <td><select name="type" id="oscitas-deslist-style">\
                        <option value="">Default</option>\
                        <option value="dl-horizontal">Horizontal</option>\
                    </select><br />\
                    </td>\
                </tr>\
                        <tr>\
				<th><label for="oscitas-deslist-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-deslist-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-deslist-submit" class="button-primary" value="Insert List" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();
		
    // handles the click event of the submit button
    form.find('#oscitas-deslist-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var options = { 
            'type'       : 'arrow'
        },deslist=0,deslist_type;
        var cusclass='',style='';
        if(table.find('#oscitas-deslist-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-deslist-class').val()+'"';
        }
        if(table.find('#oscitas-deslist-style').val()!=''){
            style= ' style="'+table.find('#oscitas-deslist-style').val()+'"';
        }
        var shortcode = '[dl'+cusclass+style;
        var deslist_item=jQuery('#oscitas-deslist-item').val();
        if(isNaN(deslist_item)==false){
            deslist=deslist_item;
        } else{
            deslist=3;
        }	
     

        shortcode += ']<br/>';
        for(var i=1;i<=deslist;i++){
            shortcode +='[dlitem heading="Heading '+i+'"]Description '+i+'[/dlitem]<br/>'
        }
        shortcode +='[/dl]';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        jQuery.fancybox.close();
    });
}

