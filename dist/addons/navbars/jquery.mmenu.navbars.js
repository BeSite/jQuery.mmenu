Mmenu.addons.navbars=function(){var m=this,v=this.opts.navbars,d=this.conf.navbars;if(void 0!==v){v instanceof Array||(v=[v]);var b={},u={};v.length&&(jQuery.each(v,function(n){var a=v[n];"boolean"==typeof a&&a&&(a={}),"object"!=typeof a&&(a={}),void 0===a.content&&(a.content=["prev","title"]),a.content instanceof Array||(a.content=[a.content]),a=jQuery.extend(!0,{},m.opts.navbar,a);var e=jQuery('<div class="mm-navbar" />'),t=a.height;"number"!=typeof t?t=1:1<(t=Math.min(4,Math.max(1,t)))&&e.addClass("mm-navbar_size-"+t);var r=a.position;switch(r){case"bottom":break;default:r="top"}b[r]||(b[r]=0),b[r]+=t,u[r]||(u[r]=jQuery('<div class="mm-navbars_'+r+'" />')),u[r].append(e);for(var s=0,o=a.content.length;s<o;s++){var i=Mmenu.addons.navbars[a.content[s]]||null;i?i.call(m,e,a,d):((i=a.content[s])instanceof jQuery||(i=jQuery(a.content[s])),e.append(i))}var c=Mmenu.addons.navbars[a.type]||null;c&&c.call(m,e,a,d),e.children(".mm-btn").length&&e.addClass("mm-navbar_has-btns")}),this.bind("initMenu:after",function(){for(var n in b)this.node.$menu.addClass("mm-menu_navbar_"+n+"-"+b[n]),this.node.$menu["bottom"==n?"append":"prepend"](u[n])}))}},Mmenu.configs.navbars={breadcrumbs:{separator:"/",removeFirst:!1}},Mmenu.configs.classNames.navbars={};