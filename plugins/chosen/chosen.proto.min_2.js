// Chosen, a Select Box Enhancer for jQuery and Protoype
// by Patrick Filler for Harvest, http://getharvest.com
// 
// Version 0.9.7
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `cake build`, do not edit it by hand.
((function(){var a;a=function(){function a(){this.options_index=0,this.parsed=[]}return a.prototype.add_node=function(a){return a.nodeName==="OPTGROUP"?this.add_group(a):this.add_option(a)},a.prototype.add_group=function(a){var b,c,d,e,f,g;b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:a.label,children:0,disabled:a.disabled}),f=a.childNodes,g=[];for(d=0,e=f.length;d<e;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},a.prototype.add_option=function(a,b,c){if(a.nodeName==="OPTION")return a.text!==""?(b!=null&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},a}(),a.select_to_array=function(b){var c,d,e,f,g;d=new a,g=b.childNodes;for(e=0,f=g.length;e<f;e++)c=g[e],d.add_node(c);return d.parsed},this.SelectParser=a})).call(this),function(){var a,b;b=this,a=function(){function a(a,b){this.form_field=a,this.options=b!=null?b:{},this.set_default_values(),this.is_multiple=this.form_field.multiple,this.default_text_default=this.is_multiple?"Select Some Options":"Select an Option",this.setup(),this.set_up_html(),this.register_observers(),this.finish_setup()}return a.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=this.options.allow_single_deselect!=null&&this.form_field.options[0]!=null&&this.form_field.options[0].text===""?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.choices=0,this.results_none_found=this.options.no_results_text||"No results match"},a.prototype.mouse_enter=function(){return this.mouse_on_container=!0},a.prototype.mouse_leave=function(){return this.mouse_on_container=!1},a.prototype.input_focus=function(a){var b=this;if(!this.active_field)return setTimeout(function(){return b.container_mousedown()},50)},a.prototype.input_blur=function(a){var b=this;if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(){return b.blur_test()},100)},a.prototype.result_add_option=function(a){var b,c;return a.disabled?"":(a.dom_id=this.container_id+"_o_"+a.array_index,b=a.selected&&this.is_multiple?[]:["active-result"],a.selected&&b.push("result-selected"),a.group_array_index!=null&&b.push("group-option"),a.classes!==""&&b.push(a.classes),c=a.style.cssText!==""?' style="'+a.style+'"':"",'<li id="'+a.dom_id+'" class="'+b.join(" ")+'"'+c+">"+a.html+"</li>")},a.prototype.results_update_field=function(){return this.result_clear_highlight(),this.result_single_selected=null,this.results_build()},a.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},a.prototype.results_search=function(a){return this.results_showing?this.winnow_results():this.results_show()},a.prototype.keyup_checker=function(a){var b,c;b=(c=a.which)!=null?c:a.keyCode,this.search_field_scale();switch(b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:a.preventDefault();if(this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},a.prototype.generate_field_id=function(){var a;return a=this.generate_random_id(),this.form_field.id=a,a},a.prototype.generate_random_char=function(){var a,b,c;return a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ",c=Math.floor(Math.random()*a.length),b=a.substring(c,c+1)},a}(),b.AbstractChosen=a}.call(this),function(){var a,b,c,d=Object.prototype.hasOwnProperty,e=function(a,b){function e(){this.constructor=a}for(var c in b)d.call(b,c)&&(a[c]=b[c]);return e.prototype=b.prototype,a.prototype=new e,a.__super__=b.prototype,a};c=this,a=function(a){function d(){d.__super__.constructor.apply(this,arguments)}return e(d,a),d.prototype.setup=function(){return this.is_rtl=this.form_field.hasClassName("chzn-rtl")},d.prototype.finish_setup=function(){return this.form_field.addClassName("chzn-done")},d.prototype.set_default_values=function(){return d.__super__.set_default_values.call(this),this.single_temp=new Template('<a href="javascript:void(0)" class="chzn-single"><span>#{default}</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'),this.multi_temp=new Template('<ul class="chzn-choices"><li class="search-field"><input type="text" value="#{default}" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>'),this.choice_temp=new Template('<li class="search-choice" id="#{id}"><span>#{choice}</span><a href="javascript:void(0)" class="search-choice-close" rel="#{position}"></a></li>'),this.no_results_temp=new Template('<li class="no-results">'+this.results_none_found+' "<span>#{terms}</span>"</li>')},d.prototype.set_up_html=function(){var a,c,d,e,f;return this.container_id=this.form_field.identify().replace(/(:|\.)/g,"_")+"_chzn",this.f_width=this.form_field.getStyle("width")?parseInt(this.form_field.getStyle("width"),10):this.form_field.getWidth(),c={id:this.container_id,"class":"chzn-container"+(this.is_rtl?" chzn-rtl":""),style:"width: "+this.f_width+"px"},this.default_text=this.form_field.readAttribute("data-placeholder")?this.form_field.readAttribute("data-placeholder"):this.default_text_default,a=this.is_multiple?(new Element("div",c)).update(this.multi_temp.evaluate({"default":this.default_text})):(new Element("div",c)).update(this.single_temp.evaluate({"default":this.default_text})),this.form_field.hide().insert({after:a}),this.container=$(this.container_id),this.container.addClassName("chzn-container-"+(this.is_multiple?"multi":"single")),this.dropdown=this.container.down("div.chzn-drop"),d=this.container.getHeight(),e=this.f_width-b(this.dropdown),this.dropdown.setStyle({width:e+"px",top:d+"px"}),this.search_field=this.container.down("input"),this.search_results=this.container.down("ul.chzn-results"),this.search_field_scale(),this.search_no_results=this.container.down("li.no-results"),this.is_multiple?(this.search_choices=this.container.down("ul.chzn-choices"),this.search_container=this.container.down("li.search-field")):(this.search_container=this.container.down("div.chzn-search"),this.selected_item=this.container.down(".chzn-single"),f=e-b(this.search_container)-b(this.search_field),this.search_field.setStyle({width:f+"px"})),this.results_build(),this.set_tab_index(),this.form_field.fire("liszt:ready",{chosen:this})},d.prototype.register_observers=function(){var a=this;return this.container.observe("mousedown",function(b){return a.container_mousedown(b)}),this.container.observe("mouseup",function(b){return a.container_mouseup(b)}),this.container.observe("mouseenter",function(b){return a.mouse_enter(b)}),this.container.observe("mouseleave",function(b){return a.mouse_leave(b)}),this.search_results.observe("mouseup",function(b){return a.search_results_mouseup(b)}),this.search_results.observe("mouseover",function(b){return a.search_results_mouseover(b)}),this.search_results.observe("mouseout",function(b){return a.search_results_mouseout(b)}),this.form_field.observe("liszt:updated",function(b){return a.results_update_field(b)}),this.search_field.observe("blur",function(b){return a.input_blur(b)}),this.search_field.observe("keyup",function(b){return a.keyup_checker(b)}),this.search_field.observe("keydown",function(b){return a.keydown_checker(b)}),this.is_multiple?(this.search_choices.observe("click",function(b){return a.choices_click(b)}),this.search_field.observe("focus",function(b){return a.input_focus(b)})):this.container.observe("click",function(a){return a.preventDefault()})},d.prototype.search_field_disabled=function(){this.is_disabled=this.form_field.disabled;if(this.is_disabled)return this.container.addClassName("chzn-disabled"),this.search_field.disabled=!0,this.is_multiple||this.selected_item.stopObserving("focus",this.activate_action),this.close_field();this.container.removeClassName("chzn-disabled"),this.search_field.disabled=!1;if(!this.is_multiple)return this.selected_item.observe("focus",this.activate_action)},d.prototype.container_mousedown=function(a){var b;if(!this.is_disabled)return b=a!=null?a.target.hasClassName("search-choice-close"):!1,a&&a.type==="mousedown"&&a.stop(),!this.pending_destroy_click&&!b?(this.active_field?!this.is_multiple&&a&&(a.target===this.selected_item||a.target.up("a.chzn-single"))&&this.results_toggle():(this.is_multiple&&this.search_field.clear(),document.observe("click",this.click_test_action),this.results_show()),this.activate_field()):this.pending_destroy_click=!1},d.prototype.container_mouseup=function(a){if(a.target.nodeName==="ABBR")return this.results_reset(a)},d.prototype.blur_test=function(a){if(!this.active_field&&this.container.hasClassName("chzn-container-active"))return this.close_field()},d.prototype.close_field=function(){return document.stopObserving("click",this.click_test_action),this.is_multiple||(this.selected_item.tabIndex=this.search_field.tabIndex,this.search_field.tabIndex=-1),this.active_field=!1,this.results_hide(),this.container.removeClassName("chzn-container-active"),this.winnow_results_clear(),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},d.prototype.activate_field=function(){return!this.is_multiple&&!this.active_field&&(this.search_field.tabIndex=this.selected_item.tabIndex,this.selected_item.tabIndex=-1),this.container.addClassName("chzn-container-active"),this.active_field=!0,this.search_field.value=this.search_field.value,this.search_field.focus()},d.prototype.test_active_click=function(a){return a.target.up("#"+this.container_id)?this.active_field=!0:this.close_field()},d.prototype.results_build=function(){var a,b,d,e,f;this.parsing=!0,this.results_data=c.SelectParser.select_to_array(this.form_field),this.is_multiple&&this.choices>0?(this.search_choices.select("li.search-choice").invoke("remove"),this.choices=0):this.is_multiple||(this.selected_item.down("span").update(this.default_text),this.form_field.options.length<=this.disable_search_threshold?this.container.addClassName("chzn-container-single-nosearch"):this.container.removeClassName("chzn-container-single-nosearch")),a="",f=this.results_data;for(d=0,e=f.length;d<e;d++)b=f[d],b.group?a+=this.result_add_group(b):b.empty||(a+=this.result_add_option(b),b.selected&&this.is_multiple?this.choice_build(b):b.selected&&!this.is_multiple&&(this.selected_item.down("span").update(b.html),this.allow_single_deselect&&this.single_deselect_control_build()));return this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.search_results.update(a),this.parsing=!1},d.prototype.result_add_group=function(a){return a.disabled?"":(a.dom_id=this.container_id+"_g_"+a.array_index,'<li id="'+a.dom_id+'" class="group-result">'+a.label.escapeHTML()+"</li>")},d.prototype.result_do_highlight=function(a){var b,c,d,e,f;this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClassName("highlighted"),d=parseInt(this.search_results.getStyle("maxHeight"),10),f=this.search_results.scrollTop,e=d+f,c=this.result_highlight.positionedOffset().top,b=c+this.result_highlight.getHeight();if(b>=e)return this.search_results.scrollTop=b-d>0?b-d:0;if(c<f)return this.search_results.scrollTop=c},d.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClassName("highlighted"),this.result_highlight=null},d.prototype.results_show=function(){var a;return this.is_multiple||(this.selected_item.addClassName("chzn-single-with-drop"),this.result_single_selected&&this.result_do_highlight(this.result_single_selected)),a=this.is_multiple?this.container.getHeight():this.container.getHeight()-1,this.dropdown.setStyle({top:a+"px",left:0}),this.results_showing=!0,this.search_field.focus(),this.search_field.value=this.search_field.value,this.winnow_results()},d.prototype.results_hide=function(){return this.is_multiple||this.selected_item.removeClassName("chzn-single-with-drop"),this.result_clear_highlight(),this.dropdown.setStyle({left:"-9000px"}),this.results_showing=!1},d.prototype.set_tab_index=function(a){var b;if(this.form_field.tabIndex)return b=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.is_multiple?this.search_field.tabIndex=b:(this.selected_item.tabIndex=b,this.search_field.tabIndex=-1)},d.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices<1&&!this.active_field?(this.search_field.value=this.default_text,this.search_field.addClassName("default")):(this.search_field.value="",this.search_field.removeClassName("default"))},d.prototype.search_results_mouseup=function(a){var b;b=a.target.hasClassName("active-result")?a.target:a.target.up(".active-result");if(b)return this.result_highlight=b,this.result_select(a)},d.prototype.search_results_mouseover=function(a){var b;b=a.target.hasClassName("active-result")?a.target:a.target.up(".active-result");if(b)return this.result_do_highlight(b)},d.prototype.search_results_mouseout=function(a){if(a.target.hasClassName("active-result")||a.target.up(".active-result"))return this.result_clear_highlight()},d.prototype.choices_click=function(a){a.preventDefault();if(this.active_field&&!a.target.hasClassName("search-choice")&&!a.target.up(".search-choice")&&!this.results_showing)return this.results_show()},d.prototype.choice_build=function(a){var b,c,d=this;return b=this.container_id+"_c_"+a.array_index,this.choices+=1,this.search_container.insert({before:this.choice_temp.evaluate({id:b,choice:a.html,position:a.array_index})}),c=$(b).down("a"),c.observe("click",function(a){return d.choice_destroy_link_click(a)})},d.prototype.choice_destroy_link_click=function(a){a.preventDefault();if(!this.is_disabled)return this.pending_destroy_click=!0,this.choice_destroy(a.target)},d.prototype.choice_destroy=function(a){return this.choices-=1,this.show_search_field_default(),this.is_multiple&&this.choices>0&&this.search_field.value.length<1&&this.results_hide(),this.result_deselect(a.readAttribute("rel")),a.up("li").remove()},d.prototype.results_reset=function(a){this.form_field.options[0].selected=!0,this.selected_item.down("span").update(this.default_text),this.show_search_field_default(),a.target.remove(),typeof Event.simulate=="function"&&this.form_field.simulate("change");if(this.active_field)return this.results_hide()},d.prototype.result_select=function(a){var b,c,d;if(this.result_highlight)return b=this.result_highlight,this.result_clear_highlight(),this.is_multiple?this.result_deactivate(b):(this.search_results.descendants(".result-selected").invoke("removeClassName","result-selected"),this.result_single_selected=b),b.addClassName("result-selected"),d=b.id.substr(b.id.lastIndexOf("_")+1),c=this.results_data[d],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.is_multiple?this.choice_build(c):(this.selected_item.down("span").update(c.html),this.allow_single_deselect&&this.single_deselect_control_build()),(!a.metaKey||!this.is_multiple)&&this.results_hide(),this.search_field.value="",typeof Event.simulate=="function"&&this.form_field.simulate("change"),this.search_field_scale()},d.prototype.result_activate=function(a){return a.addClassName("active-result")},d.prototype.result_deactivate=function(a){return a.removeClassName("active-result")},d.prototype.result_deselect=function(a){var b,c;return c=this.results_data[a],c.selected=!1,this.form_field.options[c.options_index].selected=!1,b=$(this.container_id+"_o_"+a),b.removeClassName("result-selected").addClassName("active-result").show(),this.result_clear_highlight(),this.winnow_results(),typeof Event.simulate=="function"&&this.form_field.simulate("change"),this.search_field_scale()},d.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect&&!this.selected_item.down("abbr"))return this.selected_item.down("span").insert({after:'<abbr class="search-choice-close"></abbr>'})},d.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;this.no_results_clear(),g=0,h=this.search_field.value===this.default_text?"":this.search_field.value.strip().escapeHTML(),e=new RegExp("^"+h.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),k=new RegExp(h.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),p=this.results_data;for(l=0,n=p.length;l<n;l++){b=p[l];if(!b.disabled&&!b.empty)if(b.group)$(b.dom_id).hide();else if(!this.is_multiple||!b.selected){a=!1,f=b.dom_id;if(e.test(b.html))a=!0,g+=1;else if(b.html.indexOf(" ")>=0||b.html.indexOf("[")===0){d=b.html.replace(/\[|\]/g,"").split(" ");if(d.length)for(m=0,o=d.length;m<o;m++)c=d[m],e.test(c)&&(a=!0,g+=1)}a?(h.length?(i=b.html.search(k),j=b.html.substr(0,i+h.length)+"</em>"+b.html.substr(i+h.length),j=j.substr(0,i)+"<em>"+j.substr(i)):j=b.html,$(f).innerHTML!==j&&$(f).update(j),this.result_activate($(f)),b.group_array_index!=null&&$(this.results_data[b.group_array_index].dom_id).setStyle({display:"list-item"})):($(f)===this.result_highlight&&this.result_clear_highlight(),this.result_deactivate($(f)))}}return g<1&&h.length?this.no_results(h):this.winnow_results_set_highlight()},d.prototype.winnow_results_clear=function(){var a,b,c,d,e;this.search_field.clear(),b=this.search_results.select("li"),e=[];for(c=0,d=b.length;c<d;c++)a=b[c],a.hasClassName("group-result")?e.push(a.show()):!this.is_multiple||!a.hasClassName("result-selected")?e.push(this.result_activate(a)):e.push(void 0);return e},d.prototype.winnow_results_set_highlight=function(){var a;if(!this.result_highlight){this.is_multiple||(a=this.search_results.down(".result-selected.active-result")),a==null&&(a=this.search_results.down(".active-result"));if(a!=null)return this.result_do_highlight(a)}},d.prototype.no_results=function(a){return this.search_results.insert(this.no_results_temp.evaluate({terms:a}))},d.prototype.no_results_clear=function(){var a,b;a=null,b=[];while(a=this.search_results.down(".no-results"))b.push(a.remove());return b},d.prototype.keydown_arrow=function(){var a,b,c;a=this.search_results.select("li.active-result");if(a.length){this.result_highlight?this.results_showing&&(c=this.result_highlight.nextSiblings(),b=c.intersect(a),b.length&&this.result_do_highlight(b.first())):this.result_do_highlight(a.first());if(!this.results_showing)return this.results_show()}},d.prototype.keyup_arrow=function(){var a,b,c;if(!this.results_showing&&!this.is_multiple)return this.results_show();if(this.result_highlight)return c=this.result_highlight.previousSiblings(),a=this.search_results.select("li.active-result"),b=c.intersect(a),b.length?this.result_do_highlight(b.first()):(this.choices>0&&this.results_hide(),this.result_clear_highlight())},d.prototype.keydown_backstroke=function(){return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.down("a")),this.clear_backstroke()):(this.pending_backstroke=this.search_container.siblings("li.search-choice").last(),this.pending_backstroke.addClassName("search-choice-focus"))},d.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClassName("search-choice-focus"),this.pending_backstroke=null},d.prototype.keydown_checker=function(a){var b,c;b=(c=a.which)!=null?c:a.keyCode,this.search_field_scale(),b!==8&&this.pending_backstroke&&this.clear_backstroke();switch(b){case 8:this.backstroke_length=this.search_field.value.length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:this.keydown_arrow()}},d.prototype.search_field_scale=function(){var a,b,c,d,e,f,g,h,i;if(this.is_multiple){c=0,g=0,e="position:absolute; left: -1000px; top: -1000px; display:none;",f=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];for(h=0,i=f.length;h<i;h++)d=f[h],e+=d+":"+this.search_field.getStyle(d)+";";return b=(new Element("div",{style:e})).update(this.search_field.value.escapeHTML()),document.body.appendChild(b),g=Element.measure(b,"width")+25,b.remove(),g>this.f_width-10&&(g=this.f_width-10),this.search_field.setStyle({width:g+"px"}),a=this.container.getHeight(),this.dropdown.setStyle({top:a+"px"})}},d}(AbstractChosen),c.Chosen=a,Prototype.Browser.IE&&/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&(Prototype.BrowserFeatures.Version=new Number(RegExp.$1)),b=function(a){var b,c;return b=new Element.Layout(a),c=b.get("border-left")+b.get("border-right")+b.get("padding-left")+b.get("padding-right")},c.get_side_border_padding=b}.call(this)