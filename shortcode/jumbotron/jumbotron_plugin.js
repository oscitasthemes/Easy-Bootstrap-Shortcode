var jumbotron={
    title:"Jumbotron Shortcode",
    id :'oscitas-form-jumbotron',
    pluginName: 'jumbotron'
};
(function() {
    _create_tinyMCE_options(jumbotron);
})();

function ebs_return_html_jumbotron(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			   <tr>\
        <th><label for="oscitas-jumbotron-bgcolor">'+ebsjstrans.bgcolor+'</label></th>\
        <td><input type="text" class="color" name="bgcolor" id="oscitas-jumbotron-bgcolor" value="">\
        </tr>\
        <tr>\
            <th><label for="oscitas-jumbotron-class">'+ebsjstrans.customclass+'</label></th>\
            <td><input type="text" name="class" id="oscitas-jumbotron-class" value=""/>\
           </td>\
        </tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-jumbotron-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.jumbotron+'" name="submit" />\
		</p>\
		</div>');
    return form;

}

function create_oscitas_jumbotron(pluginObj){

    var form = jQuery(pluginObj.hashId);

    var table = form.find('table');

    ebs_color_picker(form.find('.color'));
    // handles the click event of the submit button
    form.find('#oscitas-jumbotron-submit').click(function(){
        var cusclass='';
        if(table.find('#oscitas-jumbotron-class').val()!=''){
            cusclass+= ' class="'+table.find('#oscitas-jumbotron-class').val()+'"';
        }
        if(table.find('#oscitas-jumbotron-bgcolor').val()!=''){
            cusclass+= ' bgcolor="'+table.find('#oscitas-jumbotron-bgcolor').val()+'"';
        }
        var selected_content = tinyMCE.activeEditor.selection.getContent();
        if(!selected_content)
            var selected_content = 'Your Content';
        var shortcode = '['+$ebs_prefix+'jumbotron'+cusclass+']<br class="osc"/>';
        shortcode +=selected_content+'<br class="osc"/>';
        shortcode += '[/'+$ebs_prefix+'jumbotron]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });
}
