<div class="ebs_page_settings">
    <h1>Easy Bootstrap Shortcodes Settings for js/css files</h1><form name="ebs_setting" id="ebs_setting" method="post" action="">
        <div class="ebs_details">
            <label class="ebs_setting_label">bootstrap.js file</label>
            <p>
                <input type="radio" name="b_js" id="b_js_plugin" class="check_cdn" value="1" <?php echo ($js == 1) ? 'checked=checked' : '' ?>>
                <label for="b_js_plugin">Use from EBS Plugin</label>
                <input type="radio" name="b_js" id="b_js_theme" class="check_cdn" value="2" <?php echo ($js == 2) ? 'checked=checked' : '' ?>><label for="b_js_theme">Use from theme or any other plugin</label>
                <input type="radio" name="b_js" class="check_cdn" id="b_js_cdn" <?php echo ($js == 3) ? 'checked=checked' : '' ?> value="3"><label for="b_js_cdn">Load from CDN</label>
        </div>
        <div class="ebs_details show_cdn" ><label class="ebs_setting_label">bootstrap.js CDN Path</label><input type="text" name="cdn_path" id="cdn_path" value="<?php echo $cdn; ?>">
            </p>
        </div>
		<div class="ebs_details">
			<label class="ebs_setting_label">respond.js file</label>
			<p>
				<input type="radio" name="respond_js" id="respond_js_plugin" class="respond_cdn" value="1" <?php echo ($respond == 1) ? 'checked=checked' : '' ?>>
				<label for="respond_js_plugin">Use from EBS Plugin</label>
				<input type="radio" name="respond_js" id="respond_js_theme" class="respond_cdn" value="2" <?php echo ($respond == 2) ? 'checked=checked' : '' ?>><label for="respond_js_theme">Use from theme or any other plugin</label>
				<input type="radio" name="respond_js" class="respond_cdn" id="respond_js_cdn" <?php echo ($respond == 3) ? 'checked=checked' : '' ?> value="3"><label for="respond_js_cdn">Load from CDN</label>
		</div>
		<div class="ebs_details respond_show_cdn" ><label class="ebs_setting_label">respond.js CDN Path</label><input type="text" name="respond_cdn_path" id="respond_cdn_path" value="<?php echo $respondcdn; ?>">
			</p>
		</div>
        <div class="ebs_details">

            <label class="ebs_setting_label">bootstrap.css file</label>
            <p><input type="radio" name="b_css" id="b_css_plugin" value="1" <?php echo ($css == 1) ? 'checked=checked' : '' ?>>
                <label for="b_css_plugin" >Use from EBS Plugin</label>
                <input type="radio" name="b_css" id="b_css_theme" value="2" <?php echo ($css == 2) ? 'checked=checked' : '' ?>><label for="b_css_theme">Use from theme or any other plugin</label>
            </p>
        </div>
        <div class="ebs_btn"><input type="submit" name="ebs_submit" value="Update Settings"></div>
        <div style="clear: both;"></div>
        <br /><br /><br />
        <b>CDN Links for bootstrap.js, you can use any of these</b>
        <ul>
            <li>
                //netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js
            </li>
            <li>
                //cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/js/bootstrap.min.js
            </li>
        </ul>
		<br/>
		<b>CDN Links for respond.js, you can use any of these</b>
		<ul>
			<li>
				//cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.min.js
			</li>
		</ul>

    </form>
</div>
<script type="text/javascript">
	function show_cdn(){
		if(jQuery('#b_js_cdn').prop('checked')){
			jQuery('.show_cdn').show();
		} else{
			jQuery('.show_cdn').hide();
		}
	}
	function show_respond_cdn(){
		if(jQuery('#respond_js_cdn').prop('checked')){
			jQuery('.respond_show_cdn').show();
		} else{
			jQuery('.respond_show_cdn').hide();
		}
	}
	jQuery(document).ready(function(){
		show_cdn();
		show_respond_cdn();
		jQuery('.check_cdn').click(function(){
			show_cdn();
		})
		jQuery('.respond_cdn').click(function(){
			show_respond_cdn();
		})
	})
</script>