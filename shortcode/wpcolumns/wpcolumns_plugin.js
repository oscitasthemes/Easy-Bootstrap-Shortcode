var wpcolumns={
    title:"Columns Shortcode",
    id :'oscitas-form-wpcolumns',
    pluginName: 'wpcolumns'
};
(function() {
    _create_tinyMCE_options(wpcolumns, 1094);
})();

function ebs_return_html_wpcolumns(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
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
				<td><select name="type" id="oscitas-two-columns" class="osc-change-col">\
					<option value="6$6">1/2-1/2</option>\
					<option value="4$8">1/3-2/3</option>\
                                        <option value="8$3">2/3-1/3</option>\
                                        <option value="3$9">1/4-3/4</option>\
                                        <option value="9$3">3/4-1/4</option>\
				</select> For Large Screen<br />\
				</td>\
			</tr>\
			<tr id="wpthree" style="display:none;">\
				<th><label for="oscitas-three-columns">3 column division</label></th>\
				<td><select name="type" id="oscitas-three-columns" class="osc-change-col">\
                                        <option value="4$4$4">1/3-1/3-1/3</option>\
					<option value="3$6$3">1/4-2/4-1/4</option>\
					<option value="3$3$6">1/4-1/4-2/4</option>\
                                        <option value="6$3$3">2/4-1/4-1/4</option>\
				</select> For Large Screen<br />\
			</tr>\
                        <tr id="">\
                        <th><label for="append_column_table">Column Specification</label></th>\
                        <td id="append_column_table"></td>\
                        </tr>\
                        <tr>\
				<th><label for="oscitas-column-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-column-class" value=""/>\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-submit-wp_column" class="button-primary" value="Insert Columns" name="submit" />\
		</p>\
		</div>');

    return form;
}
function create_oscitas_wpcolumns(pluginObj){
   var form=jQuery(pluginObj.hashId);


    var table = form.find('table');


    function show_table(){

        var ele='',e=0,sm,smoff,md,mdoff,lg,lgoff,xs,xsoff,sel,val=0,selcol,hidecol;
        var col= form.find('#oscitas-no-of-wpcolumns').val();
        ele = '<i>You can select different column style for different screens such as medium, small(e.g < 992px), x-small(e.g < 768px)</i><br/>';

        var option={
            'lg':'Large Screen',
            'md': 'Medium Screen',
            'sm': 'Small Screen',
            'xs':'X-small Screen'
        }
        ele+= '<table id="appended" class="tb_multiple_column"><thead><tr><th>Screen</th><th style="min-width:50px;max-width:50px">Hide Row</th>';

        for(i=1;i<=col;i++){
            ele+='<th><div class="head_division head_division_check">Clear Left</div><div class="head_division">Column</div><div class="head_division">Offset</div><div class="head_division head_division_check right">Hide</div></th>';

        }
        ele+= '</tr></thead><tbody class="column_tbody">';
        jQuery.each(option,function(index,val){
            ele+='<tr><th class="column_td_first">'+val+'</th><td style="min-width:50px;max-width:50px"><input type="checkbox"  name="'+index+'rowhide" id="'+index+'rowhide" value="yes"></td>';
            for(var i=1;i<=col;i++){
                sm='<select name="'+index+'['+i+']" id="'+index+i+'">';
                for( e=1;e<=12;e++){
                    if(index=='lg'){

                        selcol=12/col;
                        if(e==selcol){
                            sel='selected=selected'
                        }
                        else{
                            sel='';
                        }
                    } else{
                        if(e==12){
                            sel='selected=selected'
                        }
                        else{
                            sel='';
                        }
                    }
                    sm+='<option value="'+e+'" '+sel+'>'+e+'</option>';
                }
                sm+='</select>';
                smoff='<select name="'+index+'off['+i+']" id="'+index+'off'+i+'">';
                for( e=0;e<12;e++){

                    smoff+='<option value="'+e+'">'+e+'</option>';
                }
                smoff+='</select>';

                clearleft='<input type="checkbox"  name="'+index+'clear['+i+']" id="'+index+'clear'+i+'" value="yes">';

                hidecol='<input type="checkbox"  name="'+index+'hide['+i+']" id="'+index+'hide'+i+'" value="yes">';

                
                ele+='<td><div class="head_division head_division_check">'+clearleft+'</div><div class="head_division">'+sm+'</div><div class="head_division">'+smoff+'</div><div class="head_division head_division_check right">'+hidecol+'</div></td>';


                
            }
            ele+='</tr>';
        });
        ele +='</tbody></table>';
        table.find('#append_column_table').html(ele);
        jQuery("#oscitas-table tr:not(#appended tr):visible:even").css('background-color', '#ffffff');
        jQuery("#oscitas-table tr:not(#appended tr):visible:odd").css('background-color', '#efefef');
    }
    function chnage_col_value(){

        var col= form.find('#oscitas-no-of-wpcolumns').val(),str,arr=[],i=0;
        if(col==2 || col==3){
            if(col==2){
                str=form.find('#oscitas-two-columns').val();
            } else if(col==3){
                str=form.find('#oscitas-three-columns').val();
            }
            arr=str.split('$');
            jQuery.each(arr,function(index,val){
                i=parseInt(index)+1;
                jQuery('#lg'+i).val(val);
            })

        }
        jQuery("#oscitas-table tr:not(#appended tr):visible:even").css('background-color', '#FFFFFF');
        jQuery("#oscitas-table tr:not(#appended tr):visible:odd").css('background-color', '#efefef');
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
        chnage_col_value();


    });
    form.find('.osc-change-col').change(function(){
        chnage_col_value();
    })
    var arr={
        1:'lg',
        2: 'md',
        3:'sm',
        4:'xs'
    };


    var value1 =0,valueoff=0,lastSel,previous;
    jQuery.each(arr,function(i,valuenum){
        jQuery.each(arr,function(tt,index){

            jQuery('#'+index+i).live('focus',function(){
                previous = this.value;
            }).live('change',function(){
                    value1= parseInt(jQuery(this).val());
                    valueoff =parseInt(jQuery('#'+index+'off'+i).val());
                    value1=value1+valueoff;
                    if(value1<=12){
                        previous = this.value;
                    }
                    else{
                        jQuery('#'+index+i).val(previous);
                        alert('Can\'t Change, exceeds the limit');
                    }
                });

            jQuery('#'+index+'off'+i).live('focus',function(){
                previous = this.value;
            }).live('change',function(){
                    value1= parseInt(jQuery(this).val());
                    valueoff = parseInt(jQuery('#'+index+i).val());
                    value1=value1+valueoff;
                    if(value1<=12){
                        previous = this.value;
                    }
                    else{
                        jQuery('#'+index+'off'+i).val(previous);
                        alert('Can\'t Change, exceeds the limit');
                    }
                })
        })
    });

    // handles the click event of the submit button
    form.find('#oscitas-submit-wp_column').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var a_md=[],a_sm=[],a_xs=[],a_lg=[],j=0,a_md_off=[],a_sm_off=[],a_xs_off=[],a_lg_off=[],a_md_hide=[],a_sm_hide=[],a_xs_hide=[],a_lg_hide=[],sm='',md='',xs='',smoff='',mdoff='',xsoff='',lgoff='',smhide='',mdhide='',xshide='',lghide='',smclear='',mdclear='',xsclear='',lgclear='';


        var noOfColumns = jQuery('#oscitas-no-of-wpcolumns').val();
        var shortcode = '';
        var cusclass='';
        if(table.find('#oscitas-column-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-column-class').val()+'"';
        }
        shortcode ='['+$ebs_prefix+'row'+cusclass+']';
        for(var i=1;i<=parseInt(noOfColumns);i++){

            a_md[i] = jQuery('#md'+i).val();
            a_sm[i] = jQuery('#sm'+i).val();
            a_xs[i] = jQuery('#xs'+i).val();
            a_lg[i] = jQuery('#lg'+i).val();
            a_md_off[i] = jQuery('#mdoff'+i).val();
            a_sm_off[i] = jQuery('#smoff'+i).val();
            a_xs_off[i] = jQuery('#xsoff'+i).val();
            a_lg_off[i] = jQuery('#lgoff'+i).val();

            //if(a_md[i]!=12){
            md=' md="'+a_md[i]+'"';
            //} else{
            //    md='';
            //}
            //if(a_sm[i]!=12){
            sm=' sm="'+a_sm[i]+'"';
            //} else{
            //    sm='';
            //}
            //if(a_xs[i]!=12){
            xs=' xs="'+a_xs[i]+'"';
            //} else{
            //    xs='';
            //}
            if(a_md_off[i]!=0){
                mdoff=' mdoff="'+a_md_off[i]+'"';
            }
            else{
                mdoff='';
            }
            if(a_sm_off[i]!=0){
                smoff=' smoff="'+a_sm_off[i]+'"';
            }
            else{
                smoff='';
            }
            if(a_xs_off[i]!=0){
                xsoff=' xsoff="'+a_xs_off[i]+'"';
            }
            else{
                xsoff='';
            }
            if(a_lg_off[i]!=0){
                lgoff=' lgoff="'+a_lg_off[i]+'"';
            }
            else{
                lgoff='';
            }

            if(jQuery('#mdrowhide').is(':checked') || jQuery('#mdhide'+i).is(':checked')){
                mdhide=' mdhide="yes"';
            }
            else{
                mdhide='';
            }
            if(jQuery('#smrowhide').is(':checked') ||jQuery('#smhide'+i).is(':checked')){
                smhide=' smhide="yes"';
            }
            else{
                smhide='';
            }
            if(jQuery('#xsrowhide').is(':checked') ||jQuery('#xshide'+i).is(':checked')){
                xshide=' xshide="yes"';
            }
            else{
                xshide='';
            }
            if(jQuery('#lgrowhide').is(':checked') ||jQuery('#lghide'+i).is(':checked')){
                lghide=' lghide="yes"';
            }
            else{
                lghide='';
            }
            
            if(jQuery('#mdclear'+i).is(':checked')){
                mdclear=' mdclear="yes"';
            }
            else{
                mdclear='';
            }
            if(jQuery('#smclear'+i).is(':checked')){
                smclear=' smclear="yes"';
            }
            else{
                smclear='';
            }
            if(jQuery('#xsclear'+i).is(':checked')){
                xsclear=' xsclear="yes"';
            }
            else{
                xsclear='';
            }
            if(jQuery('#lgclear'+i).is(':checked')){
                lgclear=' lgclear="yes"';
            }
            else{
                lgclear='';
            }

            shortcode += '<br/>['+$ebs_prefix+'column lg="'+a_lg[i]+'"'+md+sm+xs+mdoff+smoff+xsoff+lgoff+mdhide+smhide+xshide+lghide+mdclear+smclear+xsclear+lgclear+' ]<br/>text<br/>[/'+$ebs_prefix+'column]';
        }

        shortcode += '<br/>[/'+$ebs_prefix+'row]';
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
        // closes Thickbox
        close_dialogue(pluginObj.hashId);
    });
}
