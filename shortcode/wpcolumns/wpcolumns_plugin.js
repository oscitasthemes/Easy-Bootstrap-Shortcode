(function() {
    tinymce.create('tinymce.plugins.oscitasWpcolumns', {
        init : function(ed, url) {
            ed.addButton('oscitaswpcolumns', {
                title : 'Columns Shortcodes',
                image : url+'/icon.png',
                onclick : function() {
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'Columns Shortcode',
                        'minHeight': 410,
                        'href' : '#oscitas-form-wpcolumns',
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
                longname : "Columns Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "1.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitaswpcolumns', tinymce.plugins.oscitasWpcolumns);
})();

jQuery(function(){
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-wpcolumns">\
                <table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-no-of-wpcolumns">Number of columns</label></th>\
				<td><select name="type" id="oscitas-no-of-wpcolumns">\
					<option value="1" selected="selected">One column</option>\
					<option value="2">Two columns</option>\
					<option value="3">Three columns</option>\
                    <option value="4">Four columns</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr id="wptwo" style="display:none;">\
				<th><label for="oscitas-two-columns">2 column division</label></th>\
				<td><select name="type" id="oscitas-two-columns">\
					<option value="one_half$one_half_last">1/2-1/2</option>\
					<option value="one_third$two_third_last">1/3-2/3</option>\
                    <option value="two_third$one_third_last">2/3-1/3</option>\
                    <option value="one_fourth$three_fourth_last">1/4-3/4</option>\
                    <option value="three_fourth$one_fourth_last">3/4-1/4</option>\
				</select> For Large Screen<br />\
				</td>\
			</tr>\
			<tr id="wpthree" style="display:none;">\
				<th><label for="oscitas-three-columns">3 column division</label></th>\
				<td><select name="type" id="oscitas-three-columns">\
					<option value="one_fourth$one_half_second$one_fourth_last">1/4-2/4-1/4</option>\
					<option value="one_fourth$one_fourth_second$one_half_last">1/4-1/4-2/4</option>\
                    <option value="one_half$one_fourth_second$one_fourth_last">2/4-1/4-1/4</option>\
                    <option value="one_third$one_third_second$one_third_last">1/3-1/3-1/3</option>\
				</select> For Large Screen<br />\
			</tr>\
                        <tr id="">\
                        <th><label for="append_column_table">Column Specification</label></th>\
                        <td id="append_column_table"></td>\
                        </tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-submit-wp_column" class="button-primary" value="Insert Columns" name="submit" /><small><br/>if you select four column it will 1/4 each</small>\
		</p>\
		</div>');
    var table = form.find('table');
    form.appendTo('body').hide();
  
    function show_table(){
        
        var ele='',e=0,sm,md,off,xs,sel;
        var col= jQuery('#oscitas-no-of-wpcolumns').val();
        ele = '<i>You can select different column style for different screens such as medium, small(e.g 480px), x-small(e.g 320px)</i><br/>';
        ele+= '<table id="appended" class="tb_multiple_column"><thead><tr><th>Column</th><th>Medium Screen</th><th>Small Screen</th><th>x-small Screen</th><th>Large Screen Offset</th></tr></thead>';
        for(var i=1;i<=col;i++){
            sm='<select name="sm['+i+']" id="sm'+i+'">';
            for( e=1;e<=12;e++){
                if(e==12){
                    sel='selected=selected'
                }
                sm+='<option value="'+e+'" '+sel+'>'+e+'</option>';
            }
            sm+='</select>';
        
        
            md='<select name="md['+i+']" id="md'+i+'">';
            for( e=1;e<=12;e++){
                if(e==12){
                    sel='selected=selected'
                }
                md+='<option value="'+e+'" '+sel+'>'+e+'</option>';
            }
            md+='</select>';
        
            xs='<select name="xs['+i+']" id="xs'+i+'">';
            for( e=1;e<=12;e++){
                if(e==12){
                    sel='selected=selected'
                }
                xs+='<option value="'+e+'" '+sel+'>'+e+'</option>';
            }
            xs+='</select>';
        
            off='<select name="off['+i+']" id="off'+i+'">';
            for( e=0;e<=12;e++){
                
                off+='<option value="'+e+'">'+e+'</option>';
            }
            off+='</select>';
            ele+='<tr><td>'+i+'</td><td>'+md+'</td><td>'+sm+'</td><td>'+xs+'</td><td>'+off+'</td></tr>';
        }
        ele +='</table>';
        table.find('#append_column_table').html(ele);
        
        jQuery('#oscitas-form-wpcolumns table tr:visible:even').css('background', '#F0F0F0');
        jQuery('#oscitas-form-wpcolumns table tr:visible:odd').css('background', '#DADADD');
    }
    
    show_table();
    jQuery('#oscitas-no-of-wpcolumns').change(function(){
      
        var noOfColumns = jQuery(this).val();
      
        if(2 == noOfColumns){
       
            jQuery("#wpthree").hide();
            jQuery("#wptwo").show();
        }
        else if(3 == noOfColumns){
            jQuery("#wptwo").hide();
            jQuery("#wpthree").show();
        }
        else{
            jQuery("#wptwo").hide();
            jQuery("#wpthree").hide();

        }
        show_table();
       
        
    
    });


    // handles the click event of the submit button
    form.find('#oscitas-submit-wp_column').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var a_md=[],a_sm=[],a_xs=[],a_off=[],j=0;
        var options = {
            'title'       : 'Insert Columns',
            'link'        : '',
            'description' : '100%',
            'width'       : '180px',
            'height'      : '350px',
            'version'     : '',
            'position'    : '',
            'bgcolor'     : '',
            'color'       : ''
        };
        var noOfColumns = jQuery('#oscitas-no-of-wpcolumns').val();
        for(var i=1;i<=parseInt(noOfColumns);i++){
            j=i-1;
            a_md[j] = jQuery('#md'+i).val();
            a_sm[j] = jQuery('#sm'+i).val();
            a_xs[j] = jQuery('#xs'+i).val();
            a_off[j] = jQuery('#off'+i).val();
        }
       
        var shortcode = '';

        if(1==noOfColumns){
            shortcode ='[row]<br/>[one_column md="'+a_md[0]+'" sm="'+a_sm[0]+'" xs="'+a_xs[0]+'" off="'+a_off[0]+'"]<br/>text<br/>[/one_column]<br/>[/row]';
        }else if(2==noOfColumns){
            var value = jQuery('#oscitas-two-columns').val();
            var selected = value.split("$");
            shortcode ='[row]<br/>['+selected[0]+' md="'+a_md[0]+'" sm="'+a_sm[0]+'" xs="'+a_xs[0]+'" off="'+a_off[0]+'"]<br/>text<br/>[/'+selected[0]+']<br/>['+selected[1]+' md="'+a_md[1]+'" sm="'+a_sm[1]+'" xs="'+a_xs[1]+'" off="'+a_off[1]+'"]<br/>text<br/>[/'+selected[1]+']<br/>[/row]';
        }else if(3==noOfColumns){
            var value = jQuery('#oscitas-three-columns').val();
            var selected = value.split("$");
            shortcode = '[row]<br/>['+selected[0]+' md="'+a_md[0]+'" sm="'+a_sm[0]+'" xs="'+a_xs[0]+'" off="'+a_off[0]+'"]<br/>text<br/>[/'+selected[0]+']<br/>['+selected[1]+' md="'+a_md[1]+'" sm="'+a_sm[1]+'" xs="'+a_xs[1]+'" off="'+a_off[1]+'"]<br/>text<br/>[/'+selected[1]+']<br/>['+selected[2]+' md="'+a_md[2]+'" sm="'+a_sm[2]+'" xs="'+a_xs[2]+'" off="'+a_off[2]+'"]<br/>text<br/>[/'+selected[2]+']<br/>[/row]';
        }else if(4==noOfColumns){
            shortcode = '[row]<br/>[one_fourth md="'+a_md[0]+'" sm="'+a_sm[0]+'" xs="'+a_xs[0]+'" off="'+a_off[0]+'"]<br/>text<br/>[/one_fourth]<br/>[one_fourth_second md="'+a_md[1]+'" sm="'+a_sm[1]+'" xs="'+a_xs[1]+'" off="'+a_off[1]+'"]<br/>text<br/>[/one_fourth_second]<br/>[one_fourth_third md="'+a_md[1]+'" sm="'+a_sm[1]+'" xs="'+a_xs[1]+'" off="'+a_off[1]+'"]<br/>text<br/>[/one_fourth_third]<br/>[one_fourth_last md="'+a_md[1]+'" sm="'+a_sm[1]+'" xs="'+a_xs[1]+'" off="'+a_off[1]+'"]<br/>text<br/>[/one_fourth_last]<br/>[/row]';

        }
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
        // closes Thickbox
        jQuery.fancybox.close();
    });
});

