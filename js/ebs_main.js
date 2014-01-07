/**
 * Created by vijay on 19/12/13.
 */

var gBtnVar={};
function open_dialogue(dialogueid,width,height){
    if(typeof(width)==='undefined') width = 'auto';
    if(typeof(height)==='undefined') height = 'auto';
    jQuery( dialogueid ).dialog({
        dialogClass : 'wp-dialog osc-dialog',
        autoOpen: true,
        height: height,
        width: width,
        modal: true
    });

}

function close_dialogue(dialogueid){
    jQuery( dialogueid ).dialog('close');
}

var plugininfo={
    longname : 'shortcodename',
    author : 'Oscitas Themes',
    authorurl : 'http://www.oscitasthemes.com/',
    infourl : 'http://www.oscitasthemes.com/',
    version : "1.0.0"
}

function _create_tinyMCE_options(pluginObj, width) {
    if(typeof(width)==='undefined') width = 'auto';
    var pluginName = 'oscitas'+pluginObj.pluginName.substr(0, 1).toUpperCase() + pluginObj.pluginName.substr(1);
    pluginObj.hashId = '#'+pluginObj.id;
    var options = {
        init : function(ed, url) {
            ed.addButton('oscitas'+pluginObj.pluginName, {
                title : pluginObj.title,
                image : url+'/icon.png',
                onclick : function() {
                    eval('create_oscitas_'+pluginObj.pluginName+'(pluginObj);open_dialogue("'+pluginObj.hashId+'","'+width+'")');
                    if (pluginObj.setRowColors) {
                        jQuery(pluginObj.hashId+' table tr:visible:even').css('background', '#F0F0F0');
                        jQuery(pluginObj.hashId+' table tr:visible:odd').css('background', '#DADADD');
                    }
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            plugininfo.longname=pluginObj.title;
            return plugininfo;
        }
    };
    tinymce.create('tinymce.plugins.'+pluginName, options);
    options = eval('tinymce.plugins.'+pluginName);
    //return options;
    tinymce.PluginManager.add('oscitas'+pluginObj.pluginName, tinymce.plugins[pluginName]);
}

function _create_tinyMCE_dropdown(pluginObj,width,height) {
    if(typeof(width)==='undefined') width = 'auto';
    if(typeof(height)==='undefined') height = 'auto';
    pluginObj.hashId = '#'+pluginObj.id;
    eval('create_oscitas_'+pluginObj.pluginName+'(pluginObj);open_dialogue("'+pluginObj.hashId+'","'+width+'","'+height+'")');
    if (pluginObj.setRowColors) {
        jQuery(pluginObj.hashId+' table tr:visible:even').css('background', '#F0F0F0');
        jQuery(pluginObj.hashId+' table tr:visible:odd').css('background', '#DADADD');
    }
}


//tinymce.PluginManager.add('oscitasdeslist', tinymce.plugins.oscitasDeslist);
