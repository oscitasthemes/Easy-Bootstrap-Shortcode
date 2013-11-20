(function() {
    tinymce.create('tinymce.plugins.oscitasProgressbar', {
        init : function(ed, url) {
            ed.addButton('oscitasprogressbar', {
                title : 'Progressbar Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    create_oscitas_progressbar();
                    jQuery.fancybox({
                        'autoSize':false,
                        'autoWidth':false,
                        'fitToView':false,
                        'height':'auto',
                        'topRatio':0.1,
                        'width':800,
                        'type' : 'inline',
                        'title' : 'Progressbar Shortcode',
                        'href' : '#oscitas-form-progressbar',
                        helpers:  {
                            title : {
                                type : 'over',
                                position:'top'
                            }
                        }
                    });
                    jQuery('#oscitas-form-progressbar table tr:visible:even').css('background', '#F0F0F0');
                    jQuery('#oscitas-form-progressbar table tr:visible:odd').css('background', '#DADADD');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : "Progressbar Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "2.0.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitasprogressbar', tinymce.plugins.oscitasProgressbar);
})();

function create_oscitas_progressbar(){
    if(jQuery('#oscitas-form-progressbar').length){
        jQuery('#oscitas-form-progressbar').remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-progressbar" class="oscitas-container"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-progressbar-style">Progress Bar Type:</label></th>\
				<td><select name="type" id="oscitas-progressbar-style">\
					<option value="">Default</option>\
					<option value="progress-bar-success">Success</option>\
					<option value="progress-bar-info">Information</option>\
					<option value="progress-bar-warning">Warning</option>\
					<option value="progress-bar-danger">Danger</option>\
				</select><br />\
				</td>\
			</tr>\
			 <tr>\
				<th><label for="oscitas-progressbar-label">Progressbar Label:</label></th>\
				<td><input type="text" name="title" id="oscitas-progressbar-label" value=""/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-progressbar-progress">Progress Value:</label></th>\
				<td><input type="text" name="title" id="oscitas-progressbar-progress" value="50"/><br />\
                                <small>Enter a numeric value between 0 to 100, Default value is 50</small>\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-progressbar-stripped">Stripped Progress Bar:</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-progressbar-stripped">\
				</td>\
			</tr>\
                        <tr id="osc_progress_animate" style="display: none;">\
				<th><label for="oscitas-progressbar-animated">Animated Progress Bar:</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-progressbar-animated">\
				</td>\
			</tr>\
                         <tr>\
				<th><label for="oscitas-progressbar-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-progressbar-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-progressbar-submit" class="button-primary" value="Insert Button" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();
    jQuery('#oscitas-form-progressbar table tr:visible:even').css('background', '#F0F0F0');
    jQuery('#oscitas-form-progressbar table tr:visible:odd').css('background', '#DADADD');
    table.find('#oscitas-progressbar-stripped').click(function(){
        if(jQuery(this).prop('checked')){
            jQuery('#osc_progress_animate').show();
        } else{
            jQuery('#osc_progress_animate').hide();
        }
        jQuery('#oscitas-form-progressbar table tr:visible:even').css('background', '#F0F0F0');
        jQuery('#oscitas-form-progressbar table tr:visible:odd').css('background', '#DADADD');
    })

   

        
		
    // handles the click event of the submit button
    form.find('#oscitas-progressbar-submit').click(function(){
       
        var cusclass='',type='',value='',stripped='',label='';
        if(jQuery('#oscitas-progressbar-stripped').prop('checked')){
            stripped=' barstyle="progress-striped'; 
            if(jQuery('#oscitas-progressbar-animated').prop('checked')){
                stripped +=' active';
            }
            stripped +='"';
        }
        if(table.find('#oscitas-progressbar-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-progressbar-class').val()+'"';
        }
        if(table.find('#oscitas-progressbar-style').val()!=''){
            type= ' bartype="'+table.find('#oscitas-progressbar-style').val()+'"';
        }
        if(table.find('#oscitas-progressbar-progress').val()!=''){
            value= ' value="'+table.find('#oscitas-progressbar-progress').val()+'"';
        }
        if(table.find('#oscitas-progressbar-label').val()!=''){
            label= ' label="'+table.find('#oscitas-progressbar-label').val()+'"';
        }
        var shortcode = '[progressbar'+value+cusclass+type+stripped+label;
       
        shortcode += ']';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        // closes fancybox
        jQuery.fancybox.close();
    });
}

