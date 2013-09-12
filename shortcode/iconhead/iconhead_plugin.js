(function() {
    tinymce.create('tinymce.plugins.oscitasIconhead', {
        init: function(ed, url) {
            ed.addButton('oscitasiconhead', {
                title: 'Icon Heading Shortcode',
                image: url + '/icon.png',
                onclick: function() {
                    jQuery.fancybox({
                        'type' : 'inline',
                        'title' : 'Icon Heading Shortcode',
                        'href' : '#oscitas-form-iconhead',
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
        createControl: function(n, cm) {
            return null;
        },
        getInfo: function() {
            return {
                longname: "Icon Heading Shortcode",
                author : 'Oscitas Themes',
                authorurl : 'http://www.oscitasthemes.com/',
                infourl : 'http://www.oscitasthemes.com/',
                version : "1.0"
            };
        }
    });
    tinymce.PluginManager.add('oscitasiconhead', tinymce.plugins.oscitasIconhead);
})();

jQuery(function() {
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="oscitas-form-iconhead"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-heading-icon">Select Icon:</label></th>\
				<td><select name="oscitas-heading-icon" id="oscitas-heading-icon">\
					<option value="glyphicon-adjust" class="glyphicon glyphicon-adjust"> 1</option>\
					<option value="glyphicon-align-center" class="glyphicon glyphicon-align-center"> 2</option>\
                    <option value="glyphicon-align-justify" class="glyphicon glyphicon-align-justify"> 3</option>\
                    <option value="glyphicon-align-left" class="glyphicon glyphicon-align-left"> 4</option>\
                    <option value="glyphicon-align-right" class="glyphicon glyphicon-align-right"> 5</option>\
                    <option value="glyphicon-arrow-down"  class="glyphicon glyphicon-arrow-down"> 6</option>\
                    <option value="glyphicon-arrow-left"  class="glyphicon glyphicon-arrow-left"> 7</option>\
                    <option value="glyphicon-arrow-right"  class="glyphicon glyphicon-arrow-right"> 8</option>\
                    <option value="glyphicon-arrow-up"  class="glyphicon glyphicon-arrow-up"> 9</option>\
                    <option value="glyphicon-asterisk"  class="glyphicon glyphicon-asterisk"> 10</option>\
                    <option value="glyphicon-backward"  class="glyphicon glyphicon-backward"> 11</option>\
                    <option value="glyphicon-ban-circle"  class="glyphicon glyphicon-ban-circle"> 12</option>\
                    <option value="glyphicon-barcode"  class="glyphicon glyphicon-barcode"> 13</option>\
                    <option value="glyphicon-bell"  class="glyphicon glyphicon-bell"> 14</option>\
                    <option value="glyphicon-bold"  class="glyphicon glyphicon-bold"> 15</option>\
                    <option value="glyphicon-book"  class="glyphicon glyphicon-book"> 16</option>\
                    <option value="glyphicon-bookmark"  class="glyphicon glyphicon-bookmark"> 17</option>\
                    <option value="glyphicon-briefcase"  class="glyphicon glyphicon-briefcase"> 18</option>\
                    <option value="glyphicon-bullhorn"  class="glyphicon glyphicon-bullhorn"> 19</option>\
                    <option value="glyphicon-calendar"  class="glyphicon glyphicon-calendar"> 20</option>\
                    <option value="glyphicon-camera"  class="glyphicon glyphicon-camera"> 21</option>\
                    <option value="glyphicon-certificate"  class="glyphicon glyphicon-certificate"> 22</option>\
                    <option value="glyphicon-check"  class="glyphicon glyphicon-check"> 23</option>\
                    <option value="glyphicon-chevron-down"  class="glyphicon glyphicon-chevron-down"> 23</option>\
                    <option value="glyphicon-chevron-left"  class="glyphicon glyphicon-chevron-left"> 24</option>\
                    <option value="glyphicon-chevron-right"  class="glyphicon glyphicon-chevron-right"> 25</option>\
                    <option value="glyphicon-chevron-up"  class="glyphicon glyphicon-chevron-up"> 26</option>\
                    <option value="glyphicon-circle-arrow-down"  class="glyphicon glyphicon-circle-arrow-down"> 27</option>\
                    <option value="glyphicon-circle-arrow-left"  class="glyphicon glyphicon-circle-arrow-left"> 28</option>\
                    <option value="glyphicon-circle-arrow-right"  class="glyphicon glyphicon-circle-arrow-right"> 29</option>\
                    <option value="glyphicon-circle-arrow-up"  class="glyphicon glyphicon-circle-arrow-up"> 30</option>\
                    <option value="glyphicon-cloud"  class="glyphicon glyphicon-cloud"> 31</option>\
                    <option value="glyphicon-cloud-download"  class="glyphicon glyphicon-cloud-download"> 32</option>\
                    <option value="glyphicon-cloud-upload"  class="glyphicon glyphicon-cloud-upload"> 33</option>\
                    <option value="glyphicon-cog"  class="glyphicon glyphicon-cog"> 33</option>\
                    <option value="glyphicon-collapse-down"  class="glyphicon glyphicon-collapse-down"> 34</option>\
                    <option value="glyphicon-collapse-up"  class="glyphicon glyphicon-collapse-up"> 35</option>\
                    <option value="glyphicon-comment"  class="glyphicon glyphicon-comment"> 36</option>\
                    <option value="glyphicon-compressed"  class="glyphicon glyphicon-compressed"> 37</option>\
                    <option value="glyphicon-copyright-mark"  class="glyphicon glyphicon-copyright-mark"> 38</option>\
                    <option value="glyphicon-credit-card"  class="glyphicon glyphicon-credit-card"> 39</option>\
                    <option value="glyphicon-cutlery"  class="glyphicon glyphicon-cutlery"> 40</option>\
                    <option value="glyphicon-dashboard"  class="glyphicon glyphicon-dashboard"> 41</option>\
                    <option value="glyphicon-download"  class="glyphicon glyphicon-download"> 42</option>\
                    <option value="glyphicon-download-alt"  class="glyphicon glyphicon-download-alt"> 43</option>\
                    <option value="glyphicon-earphone"  class="glyphicon glyphicon-earphone"> 43</option>\
                    <option value="glyphicon-edit"  class="glyphicon glyphicon-edit"> 44</option>\
                    <option value="glyphicon-eject"  class="glyphicon glyphicon-eject"> 45</option>\
                    <option value="glyphicon-envelope"  class="glyphicon glyphicon-envelope"> 46</option>\
                    <option value="glyphicon-euro"  class="glyphicon glyphicon-euro"> 47</option>\
                    <option value="glyphicon-exclamation-sign"  class="glyphicon glyphicon-exclamation-sign"> 48</option>\
                    <option value="glyphicon-exclamation-sign"  class="glyphicon glyphicon-exclamation-sign"> 49</option>\
                    <option value="glyphicon-expand"  class="glyphicon glyphicon-expand"> 50</option>\
                    <option value="glyphicon-export"  class="glyphicon glyphicon-export"> 51</option>\
                    <option value="glyphicon-eye-close"  class="glyphicon glyphicon-eye-close"> 52</option>\
                    <option value="glyphicon-eye-open"  class="glyphicon glyphicon-eye-open"> 53</option>\
                    <option value="glyphicon-facetime-video"  class="glyphicon glyphicon-facetime-video"> 54</option>\
                    <option value="glyphicon-fast-backward"  class="glyphicon glyphicon-fast-backward"> 55</option>\
                    <option value="glyphicon-fast-forward"  class="glyphicon glyphicon-fast-forward"> 56</option>\
                    <option value="glyphicon-file"  class="glyphicon glyphicon-file"> 57</option>\
                    <option value="glyphicon-film"  class="glyphicon glyphicon-film"> 58</option>\
                    <option value="glyphicon-filter"  class="glyphicon glyphicon-filter"> 59</option>\
                    <option value="glyphicon-fire"  class="glyphicon glyphicon-fire"> 60</option>\
                    <option value="glyphicon-flag"  class="glyphicon glyphicon-flag"> 61</option>\
                    <option value="glyphicon-floppy-disk"  class="glyphicon glyphicon-floppy-disk"> 62</option>\
                    <option value="glyphicon-floppy-open"  class="glyphicon glyphicon-floppy-open"> 63</option>\
                    <option value="glyphicon-floppy-remove"  class="glyphicon glyphicon-floppy-remove"> 64</option>\
                    <option value="glyphicon-floppy-save"  class="glyphicon glyphicon-floppy-save"> 65</option>\
                    <option value="glyphicon-floppy-saved"  class="glyphicon glyphicon-floppy-saved"> 66</option>\
                    <option value="glyphicon-folder-close"  class="glyphicon glyphicon-folder-close"> 67</option>\
                    <option value="glyphicon-folder-open"  class="glyphicon glyphicon-folder-open"> 68</option>\
                    <option value="glyphicon-font"  class="glyphicon glyphicon-font"> 69</option>\
                    <option value="glyphicon-forward"  class="glyphicon glyphicon-forward"> 70</option>\
                    <option value="glyphicon-fullscreen"  class="glyphicon glyphicon-fullscreen"> 71</option>\
                    <option value="glyphicon-gbp"  class="glyphicon glyphicon-gbp"> 72</option>\
                    <option value="glyphicon-gift"  class="glyphicon glyphicon-gift"> 73</option>\
                    <option value="glyphicon-glass"  class="glyphicon glyphicon-glass"> 74</option>\
                    <option value="glyphicon-globe"  class="glyphicon glyphicon-globe"> 75</option>\
                    <option value="glyphicon-hand-down"  class="glyphicon glyphicon-hand-down"> 76</option>\
                    <option value="glyphicon-hand-left"  class="glyphicon glyphicon-hand-left"> 77</option>\
                    <option value="glyphicon-hand-right"  class="glyphicon glyphicon-hand-right"> 78</option>\
                    <option value="glyphicon-hand-up"  class="glyphicon glyphicon-hand-up"> 79</option>\
                    <option value="glyphicon-hd-video"  class="glyphicon glyphicon-hd-video"> 80</option>\
                    <option value="glyphicon-hdd"  class="glyphicon glyphicon-hdd"> 81</option>\
                    <option value="glyphicon-header"  class="glyphicon glyphicon-header"> 82</option>\
                    <option value="glyphicon-headphones"  class="glyphicon glyphicon-headphones"> 83</option>\
                    <option value="glyphicon-heart"  class="glyphicon glyphicon-heart"> 84</option>\
                    <option value="glyphicon-heart-empty"  class="glyphicon glyphicon-heart-empty"> 85</option>\
                    <option value="glyphicon-home"  class="glyphicon glyphicon-home"> 86</option>\
                    <option value="glyphicon-import"  class="glyphicon glyphicon-import"> 87</option>\
                    <option value="glyphicon-inbox"  class="glyphicon glyphicon-inbox"> 88</option>\
                    <option value="glyphicon-indent-left"  class="glyphicon glyphicon-indent-left"> 89</option>\
                    <option value="glyphicon-indent-right"  class="glyphicon glyphicon-indent-right"> 90</option>\
                    <option value="glyphicon-info-sign"  class="glyphicon glyphicon-info-sign"> 91</option>\
                    <option value="glyphicon-italic"  class="glyphicon glyphicon-italic"> 92</option>\
                    <option value="glyphicon-leaf"  class="glyphicon glyphicon-leaf"> 93</option>\
                    <option value="glyphicon-link"  class="glyphicon glyphicon-link"> 94</option>\
                    <option value="glyphicon-list"  class="glyphicon glyphicon-list"> 95</option>\
                    <option value="glyphicon-list-alt"  class="glyphicon glyphicon-list-alt"> 96</option>\
                    <option value="glyphicon-lock"  class="glyphicon glyphicon-lock"> 97</option>\
                    <option value="glyphicon-log-in"  class="glyphicon glyphicon-log-in"> 98</option>\
                    <option value="glyphicon-log-out"  class="glyphicon glyphicon-log-out"> 99</option>\
                    <option value="glyphicon-magnet"  class="glyphicon glyphicon-magnet"> 100</option>\
                    <option value="glyphicon-map-marker"  class="glyphicon glyphicon-map-marker"> 101</option>\
                    <option value="glyphicon-minus"  class="glyphicon glyphicon-minus"> 102</option>\
                    <option value="glyphicon-minus-sign"  class="glyphicon glyphicon-minus-sign"> 103</option>\
                    <option value="glyphicon-move"  class="glyphicon glyphicon-move"> 104</option>\
                    <option value="glyphicon-music"  class="glyphicon glyphicon-music"> 105</option>\
                    <option value="glyphicon-new-window"  class="glyphicon glyphicon-new-window"> 106</option>\
                    <option value="glyphicon-off"  class="glyphicon glyphicon-off"> 107</option>\
                    <option value="glyphicon-ok"  class="glyphicon glyphicon-ok"> 108</option>\
                    <option value="glyphicon-ok-circle"  class="glyphicon glyphicon-ok-circle"> 109</option>\
                    <option value="glyphicon-ok-sign"  class="glyphicon glyphicon-ok-sign"> 110</option>\
                    <option value="glyphicon-open"  class="glyphicon glyphicon-open"> 111</option>\
                    <option value="glyphicon-paperclip"  class="glyphicon glyphicon-paperclip"> 112</option>\
                    <option value="glyphicon-pause"  class="glyphicon glyphicon-pause"> 113</option>\
                    <option value="glyphicon-pencil"  class="glyphicon glyphicon-pencil"> 114</option>\
                    <option value="glyphicon-phone"  class="glyphicon glyphicon-phone"> 115</option>\
                    <option value="glyphicon-phone-alt"  class="glyphicon glyphicon-phone-alt"> 116</option>\
                    <option value="glyphicon-picture"  class="glyphicon glyphicon-picture"> 117</option>\
                    <option value="glyphicon-plane"  class="glyphicon glyphicon-plane"> 118</option>\
                    <option value="glyphicon-play"  class="glyphicon glyphicon-play"> 119</option>\
                    <option value="glyphicon-play-circle"  class="glyphicon glyphicon-play-circle"> 120</option>\
                    <option value="glyphicon-plus"  class="glyphicon glyphicon-plus"> 121</option>\
                    <option value="glyphicon-plus-sign"  class="glyphicon glyphicon-plus-sign"> 122</option>\
                    <option value="glyphicon-print"  class="glyphicon glyphicon-print"> 123</option>\
                    <option value="glyphicon-pushpin"  class="glyphicon glyphicon-pushpin"> 124</option>\
                    <option value="glyphicon-qrcode"  class="glyphicon glyphicon-qrcode"> 125</option>\
                    <option value="glyphicon-question-sign"  class="glyphicon glyphicon-question-sign"> 126</option>\
                    <option value="glyphicon-random"  class="glyphicon glyphicon-random"> 127</option>\
                    <option value="glyphicon-record"  class="glyphicon glyphicon-record"> 128</option>\
                    <option value="glyphicon-refresh"  class="glyphicon glyphicon-refresh"> 129</option>\
                    <option value="glyphicon-registration-mark"  class="glyphicon glyphicon-registration-mark"> 130</option>\
                    <option value="glyphicon-remove"  class="glyphicon glyphicon-remove"> 131</option>\
                    <option value="glyphicon-remove-circle"  class="glyphicon glyphicon-remove-circle"> 132</option>\
                    <option value="glyphicon-remove-sign"  class="glyphicon glyphicon-remove-sign"> 133</option>\
                    <option value="glyphicon-repeat"  class="glyphicon glyphicon-repeat"> 134</option>\
                    <option value="glyphicon-resize-full"  class="glyphicon glyphicon-resize-full"> 135</option>\
                    <option value="glyphicon-resize-horizontal"  class="glyphicon glyphicon-resize-horizontal"> 136</option>\
                    <option value="glyphicon-resize-small"  class="glyphicon glyphicon-resize-small"> 137</option>\
                    <option value="glyphicon-resize-vertical"  class="glyphicon glyphicon-resize-vertical"> 138</option>\
                    <option value="glyphicon-retweet"  class="glyphicon glyphicon-retweet"> 139</option>\
                    <option value="glyphicon-road"  class="glyphicon glyphicon-road"> 140</option>\
                    <option value="glyphicon-save"  class="glyphicon glyphicon-save"> 141</option>\
                    <option value="glyphicon-saved"  class="glyphicon glyphicon-saved"> 142</option>\
                    <option value="glyphicon-screenshot"  class="glyphicon glyphicon-screenshot"> 143</option>\
                    <option value="glyphicon-sd-video"  class="glyphicon glyphicon-sd-video"> 144</option>\
                    <option value="glyphicon-search"  class="glyphicon glyphicon-search"> 145</option>\
                    <option value="glyphicon-send"  class="glyphicon glyphicon-send"> 146</option>\
                    <option value="glyphicon-share"  class="glyphicon glyphicon-share"> 147</option>\
                    <option value="glyphicon-share-alt"  class="glyphicon glyphicon-share-alt"> 148</option>\
                    <option value="glyphicon-shopping-cart"  class="glyphicon glyphicon-shopping-cart"> 149</option>\
                    <option value="glyphicon-signal"  class="glyphicon glyphicon-signal"> 150</option>\
                    <option value="glyphicon-sort"  class="glyphicon glyphicon-sort"> 151</option>\
                    <option value="glyphicon-sort-by-alphabet"  class="glyphicon glyphicon-sort-by-alphabet"> 152</option>\
                    <option value="glyphicon-sort-by-alphabet-alt"  class="glyphicon glyphicon-sort-by-alphabet-alt"> 153</option>\
                    <option value="glyphicon-sort-by-attributes"  class="glyphicon glyphicon-sort-by-attributes"> 154</option>\
                    <option value="glyphicon-sort-by-attributes-alt"  class="glyphicon glyphicon-sort-by-attributes-alt"> 156</option>\
                    <option value="glyphicon-sort-by-order"  class="glyphicon glyphicon-sort-by-order"> 157</option>\
                    <option value="glyphicon-sort-by-order-alt"  class="glyphicon glyphicon-sort-by-order-alt"> 158</option>\
                    <option value="glyphicon-sound-5-1"  class="glyphicon glyphicon-sound-5-1"> 159</option>\
                    <option value="glyphicon-sound-6-1"  class="glyphicon glyphicon-sound-6-1"> 160</option>\
                    <option value="glyphicon-sound-7-1"  class="glyphicon glyphicon-sound-7-1"> 161</option>\
                    <option value="glyphicon-sound-dolby"  class="glyphicon glyphicon-sound-dolby"> 162</option>\
                    <option value="glyphicon-sound-stereo"  class="glyphicon glyphicon-sound-stereo"> 163</option>\
                    <option value="glyphicon-star"  class="glyphicon glyphicon-star"> 164</option>\
                    <option value="glyphicon-star-empty"  class="glyphicon glyphicon-star-empty"> 165</option>\
                    <option value="glyphicon-stats"  class="glyphicon glyphicon-stats"> 166</option>\
                    <option value="glyphicon-step-backward"  class="glyphicon glyphicon-step-backward"> 167</option>\
                    <option value="glyphicon-step-forward"  class="glyphicon glyphicon-step-forward"> 168</option>\
                    <option value="glyphicon-stop"  class="glyphicon glyphicon-stop"> 169</option>\
                    <option value="glyphicon-subtitles"  class="glyphicon glyphicon-subtitles"> 170</option>\
                    <option value="glyphicon-tag"  class="glyphicon glyphicon-tag"> 171</option>\
                    <option value="glyphicon-tags"  class="glyphicon glyphicon-tags"> 172</option>\
                    <option value="glyphicon-tasks"  class="glyphicon glyphicon-tasks"> 173</option>\
                    \<option value="glyphicon-text-height"  class="glyphicon glyphicon-text-height"> 174</option>\
                    <option value="glyphicon-text-width"  class="glyphicon glyphicon-text-width"> 175</option>\
                    <option value="glyphicon-th"  class="glyphicon glyphicon-th"> 176</option>\
                    <option value="glyphicon-th-large"  class="glyphicon glyphicon-th-large"> 177</option>\
                    <option value="glyphicon-th-list"  class="glyphicon glyphicon-th-list"> 178</option>\
                    <option value="glyphicon-thumbs-down"  class="glyphicon glyphicon-thumbs-down"> 179</option>\
                    <option value="glyphicon-thumbs-up"  class="glyphicon glyphicon-thumbs-up"> 180</option>\
                    <option value="glyphicon-time"  class="glyphicon glyphicon-time"> 181</option>\
                    <option value="glyphicon-tint"  class="glyphicon glyphicon-tint"> 182</option>\
                    <option value="glyphicon-tower"  class="glyphicon glyphicon-tower"> 183</option>\
                    <option value="glyphicon-transfer"  class="glyphicon glyphicon-transfer"> 184</option>\
                    <option value="glyphicon-trash"  class="glyphicon glyphicon-trash"> 185</option>\
                    <option value="glyphicon-tree-conifer"  class="glyphicon glyphicon-tree-conifer"> 186</option>\
                    <option value="glyphicon-tree-deciduous"  class="glyphicon glyphicon-tree-deciduous"> 187</option>\
                    <option value="glyphicon-unchecked"  class="glyphicon glyphicon-unchecked"> 188</option>\
                    <option value="glyphicon-upload"  class="glyphicon glyphicon-upload"> 189</option>\
                    <option value="glyphicon-usd"  class="glyphicon glyphicon-usd"> 190</option>\
                    <option value="glyphicon-user"  class="glyphicon glyphicon-user"> 191</option>\
                    <option value="glyphicon-volume-down"  class="glyphicon glyphicon-volume-down"> 192</option>\
                    <option value="glyphicon-volume-off"  class="glyphicon glyphicon-volume-off"> 193</option>\
                    <option value="glyphicon-volume-up"  class="glyphicon glyphicon-volume-up"> 194</option>\
                    <option value="glyphicon-warning-sign"  class="glyphicon glyphicon-warning-sign"> 195</option>\
                    <option value="glyphicon-wrench"  class="glyphicon glyphicon-wrench"> 196</option>\
                    <option value="glyphicon-zoom-in"  class="glyphicon glyphicon-zoom-in"> 197</option>\
                    <option value="glyphicon-zoom-out"  class="glyphicon glyphicon-zoom-out"> 198</option>\
        </select> <span id="icon_show" class="glyphicon"></span><br />\
				</td>\
			</tr>\
	        <tr>\
				<th><label for="oscitas-iconhead-heading">Heading:</label></th>\
				<td><input type="text" name="oscitas-iconhead-heading" id="oscitas-iconhead-heading" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-iconhead-submit" class="button-primary" value="Insert Icon Heading" name="submit" />\
		</p>\
		</div>');

    var table = form.find('table');
    jQuery('.glyphicon').css('display','inline');
    form.appendTo('body').hide();
    function show_se_icon(){
        jQuery('#icon_show').removeClass()
        jQuery('#icon_show').addClass('glyphicon');
        jQuery('#icon_show').addClass(table.find('#oscitas-heading-icon').val());
    }
    show_se_icon();
    table.find('#oscitas-heading-icon').change(function(){
        show_se_icon();
    });
    //    // handles the click event of the submit button
    form.find('#oscitas-iconhead-submit').click(function() {
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless

        var shortcode = '[iconheading';

        shortcode += ' class="' + table.find('#oscitas-heading-icon').val();

        shortcode += '" ';
        //shortcode += ' btntag="'+table.find('#oscitas-button-type').val()+'" ';



        shortcode += ']'+table.find('#oscitas-iconhead-heading').val()+'[/iconheading]' ;

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        jQuery.fancybox.close();
    });
});

