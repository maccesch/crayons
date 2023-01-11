var __awaiter=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(t){r(t)}}function s(e){try{l(o["throw"](e))}catch(t){r(t)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,n,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(i)try{if(o=1,n&&(r=a[0]&2?n["return"]:a[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;if(n=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;n=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(a[0]===6&&i.label<r[1]){i.label=r[1];r=a;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(a);break}if(r[2])i.ops.pop();i.trys.pop();continue}a=t.call(e,i)}catch(s){a=[6,s];n=0}finally{o=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var i=0,o=t.length,n=e.length;i<o;i++,n++)e[n]=t[i];return e};System.register(["./p-6d102d56.system.js","./p-d9705044.system.js","./p-849e1c37.system.js"],(function(e){"use strict";var t,i,o,n,r,a,s,l,c;return{setters:[function(e){t=e.r;i=e.h;o=e.c;n=e.e;r=e.i},function(e){a=e.h;s=e.r;l=e.p},function(e){c=e.c}],execute:function(){var h=':host{font-family:var(--fw-font-family, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;--size:3rem}.avatar{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:calc(var(--size) * 0.5);font-weight:400;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle}.avatar__initials{line-height:1;font-weight:600;font-size:32px;text-align:center;text-transform:uppercase}.avatar__image{position:absolute;inset-block-start:0;inset-inline-start:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar--dark{background-color:#527fa5;color:#fff}.avatar--dark--initials{border:2px solid rgba(18, 52, 77, 0.16)}.avatar--light{background-color:#dff0ff;color:#12344d}.avatar--light--initials{border:2px solid #bedbf5}.avatar--circle{border-radius:50%}.avatar--rounded{border-radius:4px}.avatar--square{border-radius:0}.avatar--xxlarge{width:96px;height:96px}.avatar--xxlarge .avatar__initials{font-size:32px}.avatar--xlarge{width:72px;height:72px}.avatar--xlarge .avatar__initials{font-size:24px}.avatar--large{width:56px;height:56px}.avatar--large .avatar__initials{font-size:20px}.avatar--medium{width:40px;height:40px}.avatar--medium .avatar__initials{font-size:16px}.avatar--small{width:32px;height:32px}.avatar--small .avatar__initials{font-size:14px}.avatar--xsmall{width:24px;height:24px}.avatar--xsmall .avatar__initials{font-size:12px}.avatar--xxsmall{width:20px;height:20px}.avatar--xxsmall .avatar__initials{font-size:10px}';var d=e("fw_avatar",function(){function e(e){t(this,e);this.shape="circle";this.name="";this.size="large";this.mode="dark"}e.prototype.getInitials=function(){var e="";if(this.initials){e=this.initials}else if(this.name.trim().length>0){var t=this.name.trim().split(" ");if(t.length===1){e=t.shift().charAt(0)}else if(t.length>1){e=t.shift().charAt(0)+t.pop().charAt(0)}}return e};e.prototype.render=function(){var e="avatar \n    avatar--"+this.shape+"\n    avatar--"+this.size+"\n    avatar--"+this.mode+"\n    ";if(!this.image){e+=" avatar--"+this.mode+"--initials"}return i("div",{class:e,"aria-label":this.alt},this.image?i("img",{part:"image",class:"avatar__image",src:this.image,alt:this.alt}):i("div",{part:"initials",class:"avatar__initials"},this.getInitials()))};return e}());d.style=h;var p=':host{font-family:var(--fw-font-family, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:"*";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host{display:inline-block;position:relative}:host(:focus){outline:none}:host(:focus) input[type=checkbox]+label::before{border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}:host(:focus) input[type=checkbox]:checked+label::before{border:1px solid #ffffff}:host(:focus) input[type=checkbox][disabled]+label::before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}:host(:hover) input[type=checkbox]+label::before{border-color:#cfd7df;-webkit-box-shadow:0 0 0 5px #ebeff3;box-shadow:0 0 0 5px #ebeff3}:host(:hover) input[type=checkbox]:checked+label::before{border-color:#2c5cc5}:host(:hover) input[type=checkbox][disabled]+label{cursor:not-allowed}:host(:hover) input[type=checkbox][disabled]+label::before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}.checkbox-container{cursor:pointer}.checkbox-container.disabled{cursor:not-allowed}#description{font-size:12px;color:#475867;letter-spacing:0;line-height:20px;position:relative;font-weight:400;word-wrap:break-word;-webkit-padding-start:22px;padding-inline-start:22px}input[type=checkbox]{display:none}input[type=checkbox]+label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-margin-after:0;margin-block-end:0;vertical-align:middle;font-size:14px;color:#12344d;line-height:20px;font-weight:400;cursor:inherit}input[type=checkbox]+label .with-description{font-weight:600}input[type=checkbox]+label #label{-webkit-padding-start:22px;padding-inline-start:22px;box-decoration-break:clone;-webkit-box-decoration-break:clone}input[type=checkbox]+label #label.required::after{content:"*";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}@media screen and (prefers-reduced-motion: reduce){input[type=checkbox]+label::before{-webkit-transition:none;transition:none}}input[type=checkbox]+label::before{position:absolute;inset-inline-start:0;inset-block-start:4px;display:block;content:"";border:1px solid #475867;height:14px;width:14px;background-color:#fff;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px}@media screen and (prefers-reduced-motion: reduce){input[type=checkbox]+label.error::before{-webkit-transition:none;transition:none}}input[type=checkbox]+label.error::before{position:absolute;inset-inline-start:0;inset-block-start:4px;display:block;content:"";border:1px solid #d72d30;height:14px;width:14px;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px;-webkit-transition:all 0.2s ease;transition:all 0.2s ease}@media screen and (prefers-reduced-motion: reduce){input[type=checkbox]+label .after{-webkit-transition:none;transition:none}}input[type=checkbox]+label .after{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;content:"";inset-inline-start:3px;inset-block-start:7px;width:8px;height:8px;opacity:0;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box}input[type=checkbox]:checked+label::before{background:#2c5cc5;border-color:#2c5cc5;-webkit-box-shadow:none;box-shadow:none}input[type=checkbox]:checked+label .after{opacity:1}input[type=checkbox]:checked:hover+label::before{border-color:#2c5cc5;-webkit-box-shadow:0 0 0 5px #ebeff3;box-shadow:0 0 0 5px #ebeff3}input[type=checkbox]:checked:hover+label .after{opacity:1}input[type=checkbox]:checked:focus+label::before{background:#2c5cc5;border-color:#fff;-webkit-box-shadow:0 0 0 1px #2c5cc5;box-shadow:0 0 0 1px #2c5cc5}input[type=checkbox]:checked:focus+label .after{opacity:1}input[type=checkbox][disabled]+label{color:#92a2b1}input[type=checkbox][disabled]+label .label-field{color:#92a2b1}input[type=checkbox][disabled]+label::before{border-color:#dadfe3;background-color:#ebeff3}input[type=checkbox][disabled]:checked+label{color:#92a2b1}input[type=checkbox][disabled]:checked+label::before{background-color:#ebeff3;border-color:#dadfe3}';var b=e("fw_checkbox",function(){function e(e){var i=this;t(this,e);this.fwChange=o(this,"fwChange",7);this.fwFocus=o(this,"fwFocus",7);this.fwBlur=o(this,"fwBlur",7);this.checked=false;this.disabled=false;this.description="";this.label="";this.name="";this.value="";this.required=false;this.state="normal";this.hintText="";this.warningText="";this.errorText="";this.hasHintTextSlot=false;this.hasWarningTextSlot=false;this.hasErrorTextSlot=false;this.onFocus=function(){i.fwFocus.emit()};this.onBlur=function(e){i.fwBlur.emit({event:e,name:i.name})};this.toggle=function(e){if(!i.disabled){i.checked=!i.checked;i.fwChange.emit({event:e,value:i.value,name:i.name,meta:{checked:i.checked}})}}}e.prototype.componentDidLoad=function(){this.checkbox.checked=this.checked;this.checkbox.disabled=this.disabled};e.prototype.checkChanged=function(e){this.checkbox.checked=e};e.prototype.componentWillLoad=function(){this.checkSlotContent()};e.prototype.checkSlotContent=function(){this.hasHintTextSlot=a(this.host,"hint-text");this.hasWarningTextSlot=a(this.host,"warning-text");this.hasErrorTextSlot=a(this.host,"error-text")};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){(e=this.host)===null||e===void 0?void 0:e.focus();return[2]}))}))};e.prototype.disabledChanged=function(e){this.checkbox.disabled=e};e.prototype.handleKeydown=function(e){if(e.code==="Space"){e.preventDefault()}};e.prototype.handleKeyup=function(e){if(e.code==="Space"){this.toggle(e)}};e.prototype.getAriaDescribedBy=function(){if(this.state==="normal")return"hint-"+this.name;else if(this.state==="error")return"error-"+this.name;else if(this.state==="warning")return"warning-"+this.name;return null};e.prototype.render=function(){var e=this;var t=this,o=t.host,r=t.name,a=t.value;if(this.checked){s(o,r,a)}var l=this.hintText?true:this.hasHintTextSlot;var c=this.errorText?true:this.hasErrorTextSlot;var h=this.warningText?true:this.hasWarningTextSlot;var d=this.state==="normal"?true:false;var p=this.state==="error"?true:false;var b=this.state==="warning"?true:false;var f="hint-"+this.name;var u="warning-"+this.name;var x="error-"+this.name;return i(n,{role:"checkbox",tabIndex:"0","aria-disabled":this.disabled?"true":"false","aria-checked":this.checked?"true":"false","aria-labelledby":"label","aria-describedby":"description "+this.getAriaDescribedBy(),onClick:this.toggle,onFocus:this.onFocus,onBlur:this.onBlur,"aria-invalid":this.state==="error"},i("div",{class:{"checkbox-container":true,disabled:this.disabled}},i("input",{type:"checkbox",ref:function(t){return e.checkbox=t},required:this.required,name:this.name,id:this.name}),i("label",{class:{error:this.state==="error"}},i("span",{id:"label",class:{"with-description":this.description!=="",required:this.required}},i("slot",null)),this.description!==""||this.label!==""?i("div",{id:"description"},this.description?this.description:this.label):"",this.checked&&i("span",{class:"after"},i("fw-icon",{name:"check",color:this.disabled?"#92A2B1":"#ffffff",size:8})))),d&&l&&i("div",{id:f,class:"field-control-hint-text","aria-hidden":l?"false":"true"},i("slot",{name:"hint-text"},this.hintText)),p&&c&&i("div",{id:x,class:"field-control-error-text","aria-hidden":c?"false":"true"},i("slot",{name:"error-text"},this.errorText)),b&&h&&i("div",{id:u,class:"field-control-warning-text","aria-hidden":h?"false":"true"},i("slot",{name:"warning-text"},this.warningText)))};Object.defineProperty(e.prototype,"host",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return e}());b.style=p;var f=':host{font-family:var(--fw-font-family, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.popper-content{display:none;z-index:99;min-width:var(--fw-popover-min-width);max-width:var(--fw-popover-max-width);min-height:var(--fw-popover-min-height, 10px);max-height:var(--fw-popover-max-height, 400px);overflow-y:auto;overflow-x:hidden;overscroll-behavior-y:contain;margin:0px;border-radius:var(--fw-popover-border-radius, 8px);border:1px solid #ebeff3;position:absolute;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0.01);transform:scale(0.01);-webkit-transition:150ms color, 150ms border, 150ms -webkit-box-shadow;transition:150ms color, 150ms border, 150ms -webkit-box-shadow;transition:150ms color, 150ms border, 150ms box-shadow;transition:150ms color, 150ms border, 150ms box-shadow, 150ms -webkit-box-shadow;will-change:auto}:host(:not([dir="rtl"])) .popper-content,:host([dir="ltr"]) .popper-content{-webkit-box-shadow:-15px 20px 40px rgba(0, 0, 0, 0.04);box-shadow:-15px 20px 40px rgba(0, 0, 0, 0.04)}:host([dir="rtl"]) .popper-content{-webkit-box-shadow:15px 20px 40px rgba(0, 0, 0, 0.04);box-shadow:15px 20px 40px rgba(0, 0, 0, 0.04)}.popper-content.no-border{border:0px}.popper-content.no-transition{-webkit-transition:none;transition:none}.popper-content[data-show]{display:block}.overlay{width:100%;height:100%;display:none;position:fixed;inset-block-start:0;inset-inline-start:0;z-index:95;background-color:transparent}@media screen and (prefers-reduced-motion: reduce){.popper-content{-webkit-transition:none;transition:none}}';var u=e("fw_popover",function(){function e(e){t(this,e);this.fwShow=o(this,"fwShow",7);this.fwHide=o(this,"fwHide",7);this.triggerRefSlot=null;this.isOpen=false;this.placement="bottom";this.fallbackPlacements=["top"];this.skidding="0";this.distance="0";this.variant="select";this.sameWidth=true;this.trigger="click";this.hasBorder=true;this.hoist=false;this.disableTransition=false;this.autoFocusOnContent=false;this.hideOnTab=true}e.prototype.onKeyDown=function(e){switch(e.key){case"Tab":this.hideOnTab&&this.hide();break;case"Escape":this.hide();break}};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,i,o;return __generator(this,(function(n){if(!this.isOpen){this.sameWidth&&(this.popperDiv.style.width=String(this.triggerRef.getBoundingClientRect().width)+"px");!this.popperInstance&&this.createPopperInstance();this.popperDiv.setAttribute("data-show","");this.popperInstance.setOptions((function(e){return Object.assign(Object.assign({},e),{modifiers:__spreadArray(__spreadArray([],e.modifiers),[{name:"eventListeners",enabled:true}])})}));this.popperInstance.update();if(this.trigger!=="hover"){this.overlay.style.display="block"}this.isOpen=!this.isOpen;if(((e=this.contentRef)===null||e===void 0?void 0:e.tagName)==="FW-LIST-OPTIONS"){o=this.contentRef;o.scrollToLastSelected()}this.autoFocusOnContent&&(this.contentRef.setFocus?this.contentRef.setFocus():(i=(t=this.contentRef).focus)===null||i===void 0?void 0:i.call(t));this.fwShow.emit()}return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,i,o;return __generator(this,(function(n){if(this.isOpen){this.popperDiv.removeAttribute("data-show");this.popperInstance.setOptions((function(e){return Object.assign(Object.assign({},e),{modifiers:__spreadArray(__spreadArray([],e.modifiers),[{name:"eventListeners",enabled:false}])})}));if(this.trigger!=="hover"){this.overlay.style.display="none"}this.isOpen=!this.isOpen;if(((e=this.contentRef)===null||e===void 0?void 0:e.tagName)==="FW-LIST-OPTIONS"){o=this.contentRef;o.clearFilter()}this.autoFocusOnContent&&(this.triggerRef.setFocus?this.triggerRef.setFocus():(i=(t=this.triggerRef).focus)===null||i===void 0?void 0:i.call(t));this.fwHide.emit()}return[2]}))}))};e.prototype.componentWillLoad=function(){var e=this;this.contentRef=this.host.querySelector('[slot="popover-content"]');this.triggerRef=this.host.querySelector('[slot="popover-trigger"]');if(this.triggerRef.nodeName==="SLOT"){var t=this.triggerRef.assignedElements();if(t.length){this.triggerRefSlot=t[0]}}if(this.trigger==="click"){this.triggerRef.addEventListener(this.trigger,(function(){if(e.isOpen){e.hide()}else{e.show()}}))}else if(this.trigger==="hover"){var i=this.triggerRefSlot||this.triggerRef;i.addEventListener("focus",this.show.bind(this));i.addEventListener("blur",this.hide.bind(this));i.addEventListener("mouseenter",this.show.bind(this));this.host.addEventListener("mouseleave",(function(t){var i=t.path?t.path:t.composedPath();var o=i.filter((function(e){return e.nodeName==="FW-TOOLTIP"}))[0];if(o){var n=function(){var t=document.querySelectorAll(":hover");var i=[].indexOf.call(t,o);if(i<0){e.hide()}}.bind(e);setTimeout(n,200)}else{e.hide()}}))}this.popperOptions={placement:this.placement,strategy:this.hoist?"fixed":"absolute",modifiers:[{name:"flip",options:{fallbackPlacements:this.fallbackPlacements}},{name:"preventOverflow",options:{boundary:this.boundary||"clippingParents"}},{name:"offset",options:{offset:[Number(this.skidding),Number(this.distance)]}},l]}};e.prototype.disconnectedCallback=function(){var e;(e=this.popperInstance)===null||e===void 0?void 0:e.destroy()};e.prototype.createPopperInstance=function(){var e=this.triggerRefSlot||this.triggerRef;this.popperInstance=c(e,this.popperDiv,this.popperOptions)};e.prototype.render=function(){var e=this;return[i("slot",{name:"popover-trigger"}),i("div",{class:{"popper-content":true,"no-border":!this.hasBorder,"no-transition":this.disableTransition},ref:function(t){return e.popperDiv=t}},i("slot",{name:"popover-content"})),this.trigger!=="hover"&&i("div",{"aria-hidden":"true",class:"overlay",ref:function(t){return e.overlay=t},onClick:function(){return e.hide()}})]};Object.defineProperty(e.prototype,"host",{get:function(){return r(this)},enumerable:false,configurable:true});return e}());u.style=f}}}));