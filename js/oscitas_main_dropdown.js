if(ebs_editor_opt=='dropdown'){
    (function(){
        tinymce.create('tinymce.plugins.oscitas_main_dropdown', {
            init: function(ed, url){},
            createControl: function(button, e){


                if(button == "oscitas_main_dropdown_button"){
                    var current_object = this;
                    var button = e.createSplitButton('osc_ebsp_d_button', {
                        title: "EBS Shortcode",
                        image: ebs_url+'images/icon_dropdown.png',
                        icons: true,
                        role: 'presentation',
                        "class": "osc_ebsp_dropdown",
                        onclick:function(){

                        }
                    });
                    button.onRenderMenu.add(function(c, b){
                        var prefix='oscitas';
                        //Design Elements
                        c = b.addMenu({title:"Basic Elements", icon_src: ebs_url+'images/elements.png'});
                        current_object.osc_element_call(c, "Button", prefix+"buttons");
                        current_object.osc_element_call(c, "Button Group", prefix+"btngrp",1200);
                        current_object.osc_element_call(c, "Button Group Toolbar", prefix+"btngrptool");
                        current_object.osc_element_call(c, "Notifications", prefix+"notifications");
                        current_object.osc_element_call(c, "Tooltip", prefix+"tooltip");
                        current_object.osc_element_call(c, "Popover", prefix+"oscpopover");
                        current_object.osc_element_call(c, "Button Dropdown", prefix+"dropdown");
                        current_object.osc_element_call(c, "Progress Bar", prefix+"progressbar",800);
                        //Advanced
                        c = b.addMenu({title:"Interactive", icon_src: ebs_url+'images/interaction.png'});
                        current_object.osc_element_call(c, "Accordion", prefix+"toggles");
                        current_object.osc_element_call(c, "Tabs", prefix+"tabs");
                        current_object.osc_element_call(c, "Tables", prefix+"tables");
                        current_object.osc_element_call(c, "Panel", prefix+"panel");
                        current_object.osc_element_call(c, "Slider", prefix+"slider",1100);
                        //Content
                        c = b.addMenu({title:"Content", icon_src: ebs_url+'images/content.png'});
                        current_object.osc_element_call(c, "List", prefix+"lists");
                        current_object.osc_element_call(c, "Icon Heading", prefix+"iconhead",800);
                        current_object.osc_element_call(c, "Label", prefix+"labels");
                        current_object.osc_element_call(c, "Well", prefix+"well");
                        current_object.osc_element_call(c, "Servicebox", prefix+"servicebox",800);
                        current_object.osc_element_call(c, "Description List", prefix+"deslist");
                        c = b.addMenu({title:" Miscellaneous", icon_src: ebs_url+'images/misc.png'});
                        current_object.osc_element_call(c, "Responsive Image", prefix+"thumbnail");
                        current_object.osc_element_call(c, "Icon", prefix+"icon",800);
                        current_object.osc_element_call(c, "Image Effects", prefix+"image");

                        current_object.osc_element_call(b, "Columns", prefix+"wpcolumns",1094);

                    });
                    return button;
                }
                return null;
            },
            osc_element_call: function(ed, title, value,width,height){
                var classt = 'osc_ebsp_dropdown_item';
                if(typeof(width)==='undefined') width = 'auto';
                if(typeof(height)==='undefined') height = 'auto';
                var prefix='oscitas';
                var func = value.replace(prefix, '');
                ed.add({
                    title: title,
                    class:classt,
                    icons: true,
                    icon_src: ebs_url+'shortcode/'+func+'/icon.png',
                    role: 'presentation',
                    onclick: function (){

                        //Retrieve selected content
                        var selected_content = tinyMCE.activeEditor.selection.getContent();
                        if(!selected_content)
                            var selected_content = 'Your Content';
                        //Design Elements

                        if(value == prefix+"btngrptool"){
                            selected_content='Insert Buttons Groups'
                            tinyMCE.activeEditor.selection.setContent('[btngrptoolbar class="yourcustomclass"][/btngrptoolbar]');
                        }
                        else if(value == prefix+"toggles"){
                            tinyMCE.activeEditor.selection.setContent('[toggles class="yourcustomclass"]<br/>[toggle title="Accordion number 1"]Toggle 1 content goes here.[/toggle]<br/>[toggle title="Accordion number 2"]Toggle 2 content goes here.[/toggle]<br/>[toggle title="Accordion number 3"]Toggle 3 content goes here.[/toggle]<br/>[toggle title="Accordion number 4"]Toggle 4 content goes here.[/toggle]<br/>[/toggles]');
                        }
                        else if(value == prefix+"tabs"){
                            tinyMCE.activeEditor.selection.setContent('[tabs class="yourcustomclass"]<br/>[tab title="Tab number 1" active="active"]Tab 1 content goes here.[/tab]<br/>[tab title="Tab number 2"]Tab 2 content goes here.[/tab]<br/>[tab title="Tab number 3"]Tab 3 content goes here.[/tab]<br/>[tab title="Tab number 4"]Tab 4 content goes here.[/tab]<br/>[/tabs]');
                        }
                        else{

                            eval('_create_tinyMCE_dropdown('+func+',"'+width+'","'+height+'")');
                        }
                        return false;
                    }
                })
            }

        });
        tinymce.PluginManager.add("oscitas_main_dropdown", tinymce.plugins.oscitas_main_dropdown);
    })();
}

//var func = value.replace(prefix, '');
//eval('create_oscitas_'+func+'(); open_dialogue(g'+func+');');
