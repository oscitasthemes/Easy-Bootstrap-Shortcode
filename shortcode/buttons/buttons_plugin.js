(function() {
    tinymce.create('tinymce.plugins.oscitasButtons', {
        init : function(ed, url) {
            ed.addButton('oscitasbuttons', {
                title : 'Button Shortcode',
                image : url+'/icon.png',
                onclick : function() {
                    create_oscitas_button();
                    jQuery.fancybox({
                        'autoSize':false,
                        'autoWidth':false,
                        'fitToView':false,
                        'height':'auto',
                        'topRatio':0.1,
                        'width':800,
                        'type' : 'inline',
                        'title' : 'Button Shortcode',
                        'href' : '#oscitas-form-button',
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
                longname : "Button Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "2.0.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitasbuttons', tinymce.plugins.oscitasButtons);
})();

function create_oscitas_button(){
    if(jQuery('#oscitas-form-button').length){
        jQuery('#oscitas-form-button').remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-button" class="oscitas-container"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-button-style">Style:</label></th>\
				<td><select name="type" id="oscitas-button-style">\
					<option value="btn-default">Simple</option>\
					<option value="btn-primary">Primary</option>\
					<option value="btn-success">Success</option>\
					<option value="btn-info">Information</option>\
					<option value="btn-warning">Warning</option>\
					<option value="btn-danger">Danger</option>\
					<option value="btn-link">Link</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-button-size">Size:</label></th>\
				<td><select name="type" id="oscitas-button-size">\
					<option value="btn-lg">Large</option>\
					<option value="btn-sm">Small</option>\
					<option value="btn-xs">Ex-small</option>\
				</select><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-button-type">Type:</label></th>\
				<td><select name="type" id="oscitas-button-type">\
					<option value="link">Link</option>\
					<option value="button">Button</option>\
				</select><br />\
				</td>\
			</tr>\
                        <tr>\
                        <th><label for="oscitas-heading-icon">Select Icon:</label></th>\
				<td><div id="click_icon_list_button" class="oscitas-icon-div"><span id="osc_show_icon_button"></span><span class="show-drop"></span></div><input type="hidden" id="osc_icon_class_val_button" value="">\
                    <div id="osc_show_iconlist_button" class="oscitas-icon" style="display:none;width:100%"><ul name="oscitas-heading-icon_button" id="oscitas-heading-icon_button" class="oscitas-icon-ul">\
                    <li data-value="glyphicon-adjust" class="glyphicon glyphicon-adjust"> </li>\
                    <li data-value="glyphicon-align-center" class="glyphicon glyphicon-align-center"> </li>\
                    <li data-value="glyphicon-align-justify" class="glyphicon glyphicon-align-justify"> </li>\
                    <li data-value="glyphicon-align-left" class="glyphicon glyphicon-align-left"> </li>\
                    <li data-value="glyphicon-align-right" class="glyphicon glyphicon-align-right"> </li>\
                    <li data-value="glyphicon-arrow-down"  class="glyphicon glyphicon-arrow-down"> </li>\
                    <li data-value="glyphicon-arrow-left"  class="glyphicon glyphicon-arrow-left"> </li>\
                    <li data-value="glyphicon-arrow-right"  class="glyphicon glyphicon-arrow-right"> </li>\
                    <li data-value="glyphicon-arrow-up"  class="glyphicon glyphicon-arrow-up"> </li>\
                    <li data-value="glyphicon-asterisk"  class="glyphicon glyphicon-asterisk"> </li>\
                    <li data-value="glyphicon-backward"  class="glyphicon glyphicon-backward"> </li>\
                    <li data-value="glyphicon-ban-circle"  class="glyphicon glyphicon-ban-circle"> </li>\
                    <li data-value="glyphicon-barcode"  class="glyphicon glyphicon-barcode"> </li>\
                    <li data-value="glyphicon-bell"  class="glyphicon glyphicon-bell"> </li>\
                    <li data-value="glyphicon-bold"  class="glyphicon glyphicon-bold"> </li>\
                    <li data-value="glyphicon-book"  class="glyphicon glyphicon-book"> </li>\
                    <li data-value="glyphicon-bookmark"  class="glyphicon glyphicon-bookmark"> </li>\
                    <li data-value="glyphicon-briefcase"  class="glyphicon glyphicon-briefcase"> </li>\
                    <li data-value="glyphicon-bullhorn"  class="glyphicon glyphicon-bullhorn"> </li>\
                    <li data-value="glyphicon-calendar"  class="glyphicon glyphicon-calendar"> </li>\
                    <li data-value="glyphicon-camera"  class="glyphicon glyphicon-camera"> </li>\
                    <li data-value="glyphicon-certificate"  class="glyphicon glyphicon-certificate"> </li>\
                    <li data-value="glyphicon-check"  class="glyphicon glyphicon-check"> </li>\
                    <li data-value="glyphicon-chevron-down"  class="glyphicon glyphicon-chevron-down"> </li>\
                    <li data-value="glyphicon-chevron-left"  class="glyphicon glyphicon-chevron-left"> </li>\
                    <li data-value="glyphicon-chevron-right"  class="glyphicon glyphicon-chevron-right"> </li>\
                    <li data-value="glyphicon-chevron-up"  class="glyphicon glyphicon-chevron-up"> </li>\
                    <li data-value="glyphicon-circle-arrow-down"  class="glyphicon glyphicon-circle-arrow-down"> </li>\
                    <li data-value="glyphicon-circle-arrow-left"  class="glyphicon glyphicon-circle-arrow-left"> </li>\
                    <li data-value="glyphicon-circle-arrow-right"  class="glyphicon glyphicon-circle-arrow-right"> </li>\
                    <li data-value="glyphicon-circle-arrow-up"  class="glyphicon glyphicon-circle-arrow-up"> </li>\
                    <li data-value="glyphicon-cloud"  class="glyphicon glyphicon-cloud"> </li>\
                    <li data-value="glyphicon-cloud-download"  class="glyphicon glyphicon-cloud-download"> </li>\
                    <li data-value="glyphicon-cloud-upload"  class="glyphicon glyphicon-cloud-upload"> </li>\
                    <li data-value="glyphicon-cog"  class="glyphicon glyphicon-cog"> </li>\
                    <li data-value="glyphicon-collapse-down"  class="glyphicon glyphicon-collapse-down"> </li>\
                    <li data-value="glyphicon-collapse-up"  class="glyphicon glyphicon-collapse-up"> </li>\
                    <li data-value="glyphicon-comment"  class="glyphicon glyphicon-comment"> </li>\
                    <li data-value="glyphicon-compressed"  class="glyphicon glyphicon-compressed"> </li>\
                    <li data-value="glyphicon-copyright-mark"  class="glyphicon glyphicon-copyright-mark"> </li>\
                    <li data-value="glyphicon-credit-card"  class="glyphicon glyphicon-credit-card"> </li>\
                    <li data-value="glyphicon-cutlery"  class="glyphicon glyphicon-cutlery"> </li>\
                    <li data-value="glyphicon-dashboard"  class="glyphicon glyphicon-dashboard"> </li>\
                    <li data-value="glyphicon-download"  class="glyphicon glyphicon-download"> </li>\
                    <li data-value="glyphicon-download-alt"  class="glyphicon glyphicon-download-alt"> </li>\
                    <li data-value="glyphicon-earphone"  class="glyphicon glyphicon-earphone"> </li>\
                    <li data-value="glyphicon-edit"  class="glyphicon glyphicon-edit"> </li>\
                    <li data-value="glyphicon-eject"  class="glyphicon glyphicon-eject"> </li>\
                    <li data-value="glyphicon-envelope"  class="glyphicon glyphicon-envelope"> </li>\
                    <li data-value="glyphicon-euro"  class="glyphicon glyphicon-euro"> </li>\
                    <li data-value="glyphicon-exclamation-sign"  class="glyphicon glyphicon-exclamation-sign"> </li>\
                    <li data-value="glyphicon-exclamation-sign"  class="glyphicon glyphicon-exclamation-sign"> </li>\
                    <li data-value="glyphicon-expand"  class="glyphicon glyphicon-expand"> </li>\
                    <li data-value="glyphicon-export"  class="glyphicon glyphicon-export"> </li>\
                    <li data-value="glyphicon-eye-close"  class="glyphicon glyphicon-eye-close"> </li>\
                    <li data-value="glyphicon-eye-open"  class="glyphicon glyphicon-eye-open"> </li>\
                    <li data-value="glyphicon-facetime-video"  class="glyphicon glyphicon-facetime-video"> </li>\
                    <li data-value="glyphicon-fast-backward"  class="glyphicon glyphicon-fast-backward"> </li>\
                    <li data-value="glyphicon-fast-forward"  class="glyphicon glyphicon-fast-forward"> </li>\
                    <li data-value="glyphicon-file"  class="glyphicon glyphicon-file"> </li>\
                    <li data-value="glyphicon-film"  class="glyphicon glyphicon-film"> </li>\
                    <li data-value="glyphicon-filter"  class="glyphicon glyphicon-filter"> </li>\
                    <li data-value="glyphicon-fire"  class="glyphicon glyphicon-fire"> </li>\
                    <li data-value="glyphicon-flag"  class="glyphicon glyphicon-flag"> </li>\
                    <li data-value="glyphicon-floppy-disk"  class="glyphicon glyphicon-floppy-disk"> </li>\
                    <li data-value="glyphicon-floppy-open"  class="glyphicon glyphicon-floppy-open"> </li>\
                    <li data-value="glyphicon-floppy-remove"  class="glyphicon glyphicon-floppy-remove"> </li>\
                    <li data-value="glyphicon-floppy-save"  class="glyphicon glyphicon-floppy-save"> </li>\
                    <li data-value="glyphicon-floppy-saved"  class="glyphicon glyphicon-floppy-saved"> </li>\
                    <li data-value="glyphicon-folder-close"  class="glyphicon glyphicon-folder-close"> </li>\
                    <li data-value="glyphicon-folder-open"  class="glyphicon glyphicon-folder-open"> </li>\
                    <li data-value="glyphicon-font"  class="glyphicon glyphicon-font"> </li>\
                    <li data-value="glyphicon-forward"  class="glyphicon glyphicon-forward"> </li>\
                    <li data-value="glyphicon-fullscreen"  class="glyphicon glyphicon-fullscreen"> </li>\
                    <li data-value="glyphicon-gbp"  class="glyphicon glyphicon-gbp"> </li>\
                    <li data-value="glyphicon-gift"  class="glyphicon glyphicon-gift"> </li>\
                    <li data-value="glyphicon-glass"  class="glyphicon glyphicon-glass"> </li>\
                    <li data-value="glyphicon-globe"  class="glyphicon glyphicon-globe"> </li>\
                    <li data-value="glyphicon-hand-down"  class="glyphicon glyphicon-hand-down"> </li>\
                    <li data-value="glyphicon-hand-left"  class="glyphicon glyphicon-hand-left"> </li>\
                    <li data-value="glyphicon-hand-right"  class="glyphicon glyphicon-hand-right"> </li>\
                    <li data-value="glyphicon-hand-up"  class="glyphicon glyphicon-hand-up"> </li>\
                    <li data-value="glyphicon-hd-video"  class="glyphicon glyphicon-hd-video"> </li>\
                    <li data-value="glyphicon-hdd"  class="glyphicon glyphicon-hdd"> </li>\
                    <li data-value="glyphicon-header"  class="glyphicon glyphicon-header"> </li>\
                    <li data-value="glyphicon-headphones"  class="glyphicon glyphicon-headphones"> </li>\
                    <li data-value="glyphicon-heart"  class="glyphicon glyphicon-heart"> </li>\
                    <li data-value="glyphicon-heart-empty"  class="glyphicon glyphicon-heart-empty"> </li>\
                    <li data-value="glyphicon-home"  class="glyphicon glyphicon-home"> </li>\
                    <li data-value="glyphicon-import"  class="glyphicon glyphicon-import"> </li>\
                    <li data-value="glyphicon-inbox"  class="glyphicon glyphicon-inbox"> </li>\
                    <li data-value="glyphicon-indent-left"  class="glyphicon glyphicon-indent-left"> </li>\
                    <li data-value="glyphicon-indent-right"  class="glyphicon glyphicon-indent-right"> </li>\
                    <li data-value="glyphicon-info-sign"  class="glyphicon glyphicon-info-sign"> </li>\
                    <li data-value="glyphicon-italic"  class="glyphicon glyphicon-italic"> </li>\
                    <li data-value="glyphicon-leaf"  class="glyphicon glyphicon-leaf"> </li>\
                    <li data-value="glyphicon-link"  class="glyphicon glyphicon-link"> </li>\
                    <li data-value="glyphicon-list"  class="glyphicon glyphicon-list"> </li>\
                    <li data-value="glyphicon-list-alt"  class="glyphicon glyphicon-list-alt"> </li>\
                    <li data-value="glyphicon-lock"  class="glyphicon glyphicon-lock"> </li>\
                    <li data-value="glyphicon-log-in"  class="glyphicon glyphicon-log-in"> </li>\
                    <li data-value="glyphicon-log-out"  class="glyphicon glyphicon-log-out"> </li>\
                    <li data-value="glyphicon-magnet"  class="glyphicon glyphicon-magnet"> </li>\
                    <li data-value="glyphicon-map-marker"  class="glyphicon glyphicon-map-marker"> </li>\
                    <li data-value="glyphicon-minus"  class="glyphicon glyphicon-minus"> </li>\
                    <li data-value="glyphicon-minus-sign"  class="glyphicon glyphicon-minus-sign"> </li>\
                    <li data-value="glyphicon-move"  class="glyphicon glyphicon-move"> </li>\
                    <li data-value="glyphicon-music"  class="glyphicon glyphicon-music"> </li>\
                    <li data-value="glyphicon-new-window"  class="glyphicon glyphicon-new-window"> </li>\
                    <li data-value="glyphicon-off"  class="glyphicon glyphicon-off"> </li>\
                    <li data-value="glyphicon-ok"  class="glyphicon glyphicon-ok"> </li>\
                    <li data-value="glyphicon-ok-circle"  class="glyphicon glyphicon-ok-circle"> </li>\
                    <li data-value="glyphicon-ok-sign"  class="glyphicon glyphicon-ok-sign"> </li>\
                    <li data-value="glyphicon-open"  class="glyphicon glyphicon-open"> </li>\
                    <li data-value="glyphicon-paperclip"  class="glyphicon glyphicon-paperclip"> </li>\
                    <li data-value="glyphicon-pause"  class="glyphicon glyphicon-pause"> </li>\
                    <li data-value="glyphicon-pencil"  class="glyphicon glyphicon-pencil"> </li>\
                    <li data-value="glyphicon-phone"  class="glyphicon glyphicon-phone"> </li>\
                    <li data-value="glyphicon-phone-alt"  class="glyphicon glyphicon-phone-alt"> </li>\
                    <li data-value="glyphicon-picture"  class="glyphicon glyphicon-picture"> </li>\
                    <li data-value="glyphicon-plane"  class="glyphicon glyphicon-plane"> </li>\
                    <li data-value="glyphicon-play"  class="glyphicon glyphicon-play"> </li>\
                    <li data-value="glyphicon-play-circle"  class="glyphicon glyphicon-play-circle"> </li>\
                    <li data-value="glyphicon-plus"  class="glyphicon glyphicon-plus"> </li>\
                    <li data-value="glyphicon-plus-sign"  class="glyphicon glyphicon-plus-sign"> </li>\
                    <li data-value="glyphicon-print"  class="glyphicon glyphicon-print"> </li>\
                    <li data-value="glyphicon-pushpin"  class="glyphicon glyphicon-pushpin"> </li>\
                    <li data-value="glyphicon-qrcode"  class="glyphicon glyphicon-qrcode"> </li>\
                    <li data-value="glyphicon-question-sign"  class="glyphicon glyphicon-question-sign"> </li>\
                    <li data-value="glyphicon-random"  class="glyphicon glyphicon-random"> </li>\
                    <li data-value="glyphicon-record"  class="glyphicon glyphicon-record"> </li>\
                    <li data-value="glyphicon-refresh"  class="glyphicon glyphicon-refresh"> </li>\
                    <li data-value="glyphicon-registration-mark"  class="glyphicon glyphicon-registration-mark"> </li>\
                    <li data-value="glyphicon-remove"  class="glyphicon glyphicon-remove"> </li>\
                    <li data-value="glyphicon-remove-circle"  class="glyphicon glyphicon-remove-circle"> </li>\
                    <li data-value="glyphicon-remove-sign"  class="glyphicon glyphicon-remove-sign"> </li>\
                    <li data-value="glyphicon-repeat"  class="glyphicon glyphicon-repeat"> </li>\
                    <li data-value="glyphicon-resize-full"  class="glyphicon glyphicon-resize-full"> </li>\
                    <li data-value="glyphicon-resize-horizontal"  class="glyphicon glyphicon-resize-horizontal"> </li>\
                    <li data-value="glyphicon-resize-small"  class="glyphicon glyphicon-resize-small"> </li>\
                    <li data-value="glyphicon-resize-vertical"  class="glyphicon glyphicon-resize-vertical"> </li>\
                    <li data-value="glyphicon-retweet"  class="glyphicon glyphicon-retweet"> </li>\
                    <li data-value="glyphicon-road"  class="glyphicon glyphicon-road"> </li>\
                    <li data-value="glyphicon-save"  class="glyphicon glyphicon-save"> </li>\
                    <li data-value="glyphicon-saved"  class="glyphicon glyphicon-saved"> </li>\
                    <li data-value="glyphicon-screenshot"  class="glyphicon glyphicon-screenshot"> </li>\
                    <li data-value="glyphicon-sd-video"  class="glyphicon glyphicon-sd-video"> </li>\
                    <li data-value="glyphicon-search"  class="glyphicon glyphicon-search"> </li>\
                    <li data-value="glyphicon-send"  class="glyphicon glyphicon-send"> </li>\
                    <li data-value="glyphicon-share"  class="glyphicon glyphicon-share"> </li>\
                    <li data-value="glyphicon-share-alt"  class="glyphicon glyphicon-share-alt"> </li>\
                    <li data-value="glyphicon-shopping-cart"  class="glyphicon glyphicon-shopping-cart"> </li>\
                    <li data-value="glyphicon-signal"  class="glyphicon glyphicon-signal"> </li>\
                    <li data-value="glyphicon-sort"  class="glyphicon glyphicon-sort"> </li>\
                    <li data-value="glyphicon-sort-by-alphabet"  class="glyphicon glyphicon-sort-by-alphabet"> </li>\
                    <li data-value="glyphicon-sort-by-alphabet-alt"  class="glyphicon glyphicon-sort-by-alphabet-alt"> </li>\
                    <li data-value="glyphicon-sort-by-attributes"  class="glyphicon glyphicon-sort-by-attributes"> </li>\
                    <li data-value="glyphicon-sort-by-attributes-alt"  class="glyphicon glyphicon-sort-by-attributes-alt"> </li>\
                    <li data-value="glyphicon-sort-by-order"  class="glyphicon glyphicon-sort-by-order"> </li>\
                    <li data-value="glyphicon-sort-by-order-alt"  class="glyphicon glyphicon-sort-by-order-alt"> </li>\
                    <li data-value="glyphicon-sound--"  class="glyphicon glyphicon-sound-5-1"> </li>\
                    <li data-value="glyphicon-sound--"  class="glyphicon glyphicon-sound-6-1"> </li>\
                    <li data-value="glyphicon-sound--"  class="glyphicon glyphicon-sound-7-1"> </li>\
                    <li data-value="glyphicon-sound-dolby"  class="glyphicon glyphicon-sound-dolby"> </li>\
                    <li data-value="glyphicon-sound-stereo"  class="glyphicon glyphicon-sound-stereo"> </li>\
                    <li data-value="glyphicon-star"  class="glyphicon glyphicon-star"> </li>\
                    <li data-value="glyphicon-star-empty"  class="glyphicon glyphicon-star-empty"> </li>\
                    <li data-value="glyphicon-stats"  class="glyphicon glyphicon-stats"> </li>\
                    <li data-value="glyphicon-step-backward"  class="glyphicon glyphicon-step-backward"> </li>\
                    <li data-value="glyphicon-step-forward"  class="glyphicon glyphicon-step-forward"> </li>\
                    <li data-value="glyphicon-stop"  class="glyphicon glyphicon-stop"> </li>\
                    <li data-value="glyphicon-subtitles"  class="glyphicon glyphicon-subtitles"> </li>\
                    <li data-value="glyphicon-tag"  class="glyphicon glyphicon-tag"> </li>\
                    <li data-value="glyphicon-tags"  class="glyphicon glyphicon-tags"> </li>\
                    <li data-value="glyphicon-tasks"  class="glyphicon glyphicon-tasks"> </li>\
                    <li data-value="glyphicon-text-height"  class="glyphicon glyphicon-text-height"> </li>\
                    <li data-value="glyphicon-text-width"  class="glyphicon glyphicon-text-width"> </li>\
                    <li data-value="glyphicon-th"  class="glyphicon glyphicon-th"> </li>\
                    <li data-value="glyphicon-th-large"  class="glyphicon glyphicon-th-large"> </li>\
                    <li data-value="glyphicon-th-list"  class="glyphicon glyphicon-th-list"> </li>\
                    <li data-value="glyphicon-thumbs-down"  class="glyphicon glyphicon-thumbs-down"> </li>\
                    <li data-value="glyphicon-thumbs-up"  class="glyphicon glyphicon-thumbs-up"> </li>\
                    <li data-value="glyphicon-time"  class="glyphicon glyphicon-time"> </li>\
                    <li data-value="glyphicon-tint"  class="glyphicon glyphicon-tint"> </li>\
                    <li data-value="glyphicon-tower"  class="glyphicon glyphicon-tower"> </li>\
                    <li data-value="glyphicon-transfer"  class="glyphicon glyphicon-transfer"> </li>\
                    <li data-value="glyphicon-trash"  class="glyphicon glyphicon-trash"> </li>\
                    <li data-value="glyphicon-tree-conifer"  class="glyphicon glyphicon-tree-conifer"> </li>\
                    <li data-value="glyphicon-tree-deciduous"  class="glyphicon glyphicon-tree-deciduous"> </li>\
                    <li data-value="glyphicon-unchecked"  class="glyphicon glyphicon-unchecked"> </li>\
                    <li data-value="glyphicon-upload"  class="glyphicon glyphicon-upload"> </li>\
                    <li data-value="glyphicon-usd"  class="glyphicon glyphicon-usd"> </li>\
                    <li data-value="glyphicon-user"  class="glyphicon glyphicon-user"> </li>\
                    <li data-value="glyphicon-volume-down"  class="glyphicon glyphicon-volume-down"> </li>\
                    <li data-value="glyphicon-volume-off"  class="glyphicon glyphicon-volume-off"> </li>\
                    <li data-value="glyphicon-volume-up"  class="glyphicon glyphicon-volume-up"> </li>\
                    <li data-value="glyphicon-warning-sign"  class="glyphicon glyphicon-warning-sign"> </li>\
                    <li data-value="glyphicon-wrench"  class="glyphicon glyphicon-wrench"> </li>\
                    <li data-value="glyphicon-zoom-in"  class="glyphicon glyphicon-zoom-in"> </li>\
                    <li data-value="glyphicon-zoom-out"  class="glyphicon glyphicon-zoom-out"> </li>\
        </ul></div>\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-button-iconalign">Icon Alignment:</label></th>\
				<td><select name="type" id="oscitas-button-iconalign">\
					<option value="left">Left</option>\
					<option value="right">Right</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-table-rows">Make block</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-button-block">\
                    <br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-button-title">Title:</label></th>\
				<td><input type="text" name="title" id="oscitas-button-title" value="Button"/><br />\
				</td>\
			</tr>\
			<tr id="tr-button-link">\
				<th><label for="oscitas-button-link">Link</label></th>\
				<td><input type="text" name="link" id="oscitas-button-link" value="#" /><br />\
				</td>\
			</tr>\
			<tr id="tr-button-newwindow">\
				<th><label for="oscitas-table-rows">Open in new window</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-button-target">\
                    <br />\
				</td>\
			</tr>\
                         <tr>\
				<th><label for="oscitas-button-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-button-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-button-submit" class="button-primary" value="Insert Button" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    jQuery('.glyphicon').css('display','inline');
    form.appendTo('body').hide();
    table.find('#click_icon_list_button').click(function(){
        if(!jQuery(this).hasClass('osc_icon_showing_button')){
            jQuery(this).addClass('osc_icon_showing_button')
            table.find('#osc_show_iconlist_button').show();
        } else{
            jQuery(this).removeClass('osc_icon_showing_button')
            table.find('#osc_show_iconlist_button').hide();
        }
    });
    table.find('#oscitas-heading-icon_button li').click(function(){
        var val=jQuery(this).attr('data-value');
        table.find('#oscitas-heading-icon_button li').removeClass('osc_icon_selected_button');
        jQuery(this).addClass('osc_icon_selected_button');
        table.find('#osc_show_iconlist_button').hide();
        table.find('#osc_show_icon_button').removeClass().addClass('glyphicon').addClass(val);
        table.find('#osc_icon_class_val_button').val(val);
    })

    table.find('#oscitas-button-type').change(function(){
        var abc = jQuery(this).val();
        if('link' == abc){
            jQuery("#tr-button-link").show();
            jQuery("#tr-button-newwindow").show();
        }else{
            jQuery("#tr-button-link").hide();
            jQuery("#tr-button-newwindow").hide();
        }
        jQuery('#oscitas-form-button table tr:visible:even').css('background', '#F0F0F0');
        jQuery('#oscitas-form-button table tr:visible:odd').css('background', '#DADADD');
    });
        

        
		
    // handles the click event of the submit button
    form.find('#oscitas-button-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var options;
        var type = table.find('#oscitas-button-type').val();
        if(type=='button'){
            options = { 
                'title'       : 'osCitas'
            };
        }
        else{
            options = { 
                'title'       : 'osCitas',
                'link'        : ''
            };
        }
        var cusclass='',icon='';
        if(table.find('#oscitas-button-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-button-class').val()+'"';
        }
        if(table.find('#osc_icon_class_val_button').val()!=''){
            icon= ' icon="'+table.find('#osc_icon_class_val_button').val()+'" ';
        }
       
        var shortcode = '[button'+cusclass;
        
        shortcode += ' style="'+table.find('#oscitas-button-style').val();
        shortcode += ' '+table.find('#oscitas-button-size').val();
        shortcode += table.find('#oscitas-button-block').prop('checked')? ' btn-block': '';
        shortcode += '" ';
        shortcode += icon;
        shortcode += ' align="'+table.find('#oscitas-button-iconalign').val()+'" ';
        shortcode += ' type="'+type+'" ';
        if(type!='button'){
            shortcode += ' target="'+(table.find('#oscitas-button-target').prop('checked')? 'true': 'false')+ '" ';
        }
        for( var index in options) {
            var value = table.find('#oscitas-button-' + index).val();
            //            var value = table.find('#oscitas-button-' + index).val();
            shortcode += ' ' + index + '="' + value + '"';
        }
			
        shortcode += ']';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
        // closes fancybox
        jQuery.fancybox.close();
    });
}

