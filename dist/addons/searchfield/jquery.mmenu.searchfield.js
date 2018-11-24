Mmenu.addons.searchfield=function(){var l=this.opts.searchfield;this.conf.searchfield;"boolean"==typeof l&&(l={add:l}),"object"!=typeof l&&(l={}),"boolean"==typeof l.panel&&(l.panel={add:l.panel}),"object"!=typeof l.panel&&(l.panel={}),l.add&&("panel"==l.addTo&&(l.panel.add=!0),l.panel.add&&(l.showSubPanels=!1,l.panel.splash&&(l.cancel=!0)),l=this.opts.searchfield=jQuery.extend(!0,{},Mmenu.options.searchfield,l),this.bind("close:start",function(){this.node.$menu.find(".mm-searchfield").children("input").blur()}),this.bind("initPanels:after",function(e){var n,a=this,s=jQuery();switch(l.panel.add&&(s=this._initSearchPanel(e)),l.addTo){case"panels":n=e;break;case"panel":n=s;break;default:n=this.node.$menu.find(l.addTo)}(n.each(function(e,n){var s=a._initSearchfield(jQuery(n));l.search&&s.length&&a._initSearching(s)}),l.noResults)&&(l.panel.add?s:e).each(function(e,n){a._initNoResultsMsg(jQuery(n))})}),this.clck.push(function(e,n){if(n.inMenu&&e.hasClass("mm-searchfield__btn")){if(e.hasClass("mm-btn_close")){var s=e.closest(".mm-searchfield").find("input");return s.val(""),this.search(s),!0}if(e.hasClass("mm-btn_next"))return e.closest(".mm-searchfield").submit(),!0}}))},Mmenu.options.searchfield={add:!1,addTo:"panels",noResults:"No results found.",placeholder:"Search",panel:{add:!1,dividers:!0,fx:"none",id:null,splash:null,title:"Search"},search:!0,showTextItems:!1,showSubPanels:!0},Mmenu.configs.searchfield={clear:!1,form:!1,input:!1,submit:!1},Mmenu.prototype._initSearchPanel=function(e){var n=this.opts.searchfield;this.conf.searchfield;if(this.node.$pnls.children(".mm-panel_search").length)return jQuery();var s=jQuery('<div class="mm-panel_search " />').append("<ul />").appendTo(this.node.$pnls);switch(n.panel.id&&s.attr("id",n.panel.id),n.panel.title&&s.attr("data-mm-title",n.panel.title),n.panel.fx){case!1:break;case"none":s.addClass("mm-panel_noanimation");break;default:s.addClass("mm-panel_fx-"+n.panel.fx)}return n.panel.splash&&s.append('<div class="mm-panel__searchsplash">'+n.panel.splash+"</div>"),this._initPanels(s),s},Mmenu.prototype._initSearchfield=function(e){var n=this.opts.searchfield,s=this.conf.searchfield;if(e.parent(".mm-listitem_vertical").length)return jQuery();if(e.find(".mm-searchfield").length)return e.find(".mm-searchfield");var a=jQuery("<"+(s.form?"form":"div")+' class="mm-searchfield" />'),l=jQuery('<div class="mm-searchfield__input" />'),i=jQuery('<input placeholder="'+this.i18n(n.placeholder)+'" type="text" autocomplete="off" />');function t(e,n){if(n)for(var s in n)e.attr(s,n[s])}return l.append(i).appendTo(a),e.prepend(a),e.hasClass("mm-panel")&&e.addClass("mm-panel_has-searchfield"),t(i,s.input),s.clear&&jQuery('<a class="mm-btn mm-btn_close mm-searchfield__btn" href="#" />').appendTo(l),t(a,s.form),s.form&&s.submit&&!s.clear&&jQuery('<a class="mm-btn mm-btn_next mm-searchfield__btn" href="#" />').appendTo(l),n.cancel&&jQuery('<a href="#" class="mm-searchfield__cancel">'+this.i18n("cancel")+"</a>").appendTo(a),a},Mmenu.prototype._initSearching=function(e){var n=this,s=this.opts.searchfield,a=(this.conf.searchfield,{});e.closest(".mm-panel_search").length?(a.$pnls=this.node.$pnls.find(".mm-panel"),a.$nrsp=e.closest(".mm-panel")):e.closest(".mm-panel").length?(a.$pnls=e.closest(".mm-panel"),a.$nrsp=a.$pnls):(a.$pnls=this.node.$pnls.find(".mm-panel"),a.$nrsp=this.node.$menu),a.$pnls=a.$pnls.not(function(){return jQuery(this).parent(".mm-listitem_vertical").length}),s.panel.add&&(a.$pnls=a.$pnls.not(".mm-panel_search"));var l=e.find("input"),i=e.find(".mm-searchfield__cancel"),t=this.node.$pnls.children(".mm-panel_search"),m=a.$pnls.find(".mm-listitem");a.$itms=m.not(".mm-listitem_divider"),a.$dvdr=m.filter(".mm-listitem_divider"),s.panel.add&&s.panel.splash&&l.off("focus.mm-searchfield-splash").on("focus.mm-searchfield-splash",function(e){n.openPanel(t)}),s.cancel&&(l.off("focus.mm-searchfield-cancel").on("focus.mm-searchfield-cancel",function(e){i.addClass("mm-searchfield__cancel-active")}),i.off("click.mm-searchfield-splash").on("click.mm-searchfield-splash",function(e){e.preventDefault(),i.removeClass("mm-searchfield__cancel-active"),t.hasClass("mm-panel_opened")&&n.openPanel(n.node.$pnls.children(".mm-panel_opened-parent").last())})),s.panel.add&&"panel"==s.addTo&&this.bind("openPanel:finish",function(e){e[0]===t[0]&&l.focus()}),l.data("mm-searchfield",a).off("input.mm-searchfield").on("input.mm-searchfield",function(e){switch(e.keyCode){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:break;default:n.search(l)}}),this.search(l)},Mmenu.prototype._initNoResultsMsg=function(e){var n=this.opts.searchfield;this.conf.searchfield;if(e.closest(".mm-panel").length||(e=this.node.$pnls.children(".mm-panel").first()),!e.children(".mm-panel__noresultsmsg").length){var s=e.children(".mm-listview").first(),a=jQuery('<div class="mm-panel__noresultsmsg mm-hidden" />').append(this.i18n(n.noResults));s.length?a.insertAfter(s):a.prependTo(e)}},Mmenu.prototype.search=function(l,i){var t=this,m=this.opts.searchfield;this.conf.searchfield;l=l||this.node.$menu.find(".mm-searchfield").chidren("input").first(),i=(i=i||""+l.val()).toLowerCase().trim();var e=l.data("mm-searchfield"),n=l.closest(".mm-searchfield").find(".mm-btn"),s=this.node.$pnls.children(".mm-panel_search"),a=e.$pnls,d=e.$itms,r=e.$dvdr,h=e.$nrsp;if(d.removeClass("mm-listitem_nosubitems").find(".mm-btn_fullwidth-search").removeClass("mm-btn_fullwidth-search mm-btn_fullwidth"),s.children(".mm-listview").empty(),a.scrollTop(0),i.length){if(d.add(r).addClass("mm-hidden"),d.each(function(e,n){var s=jQuery(n),a="a";(m.showTextItems||m.showSubPanels&&s.find(".mm-btn_next"))&&(a="a, span"),-1<s.children(a).not(".mm-btn_next").text().toLowerCase().indexOf(i)&&s.removeClass("mm-hidden")}),m.panel.add){var c=jQuery();a.each(function(e,n){var s=jQuery(n),a=Mmenu.filterListItems(s.find(".mm-listitem")).clone(!0);a.length&&(m.panel.dividers&&(c=c.add('<li class="mm-listitem mm-listitem_divider">'+s.find(".mm-navbar__title").text()+"</li>")),c=c.add(a))}),c.find(".mm-toggle, .mm-check, .mm-btn").remove(),s.children(".mm-listview").append(c),this.openPanel(s)}else m.showSubPanels&&a.each(function(e,n){var s=jQuery(n);Mmenu.filterListItems(s.find(".mm-listitem")).each(function(e,n){var s=jQuery(n).data("mm-child");s&&s.find(".mm-listview").children().removeClass("mm-hidden")})}),jQuery(a.get().reverse()).each(function(e,n){var s=jQuery(n),a=s.data("mm-parent");a&&(Mmenu.filterListItems(s.find(".mm-listitem")).length?a.hasClass("mm-hidden")&&a.removeClass("mm-hidden").children(".mm-btn_next").not(".mm-btn_fullwidth").addClass("mm-btn_fullwidth").addClass("mm-btn_fullwidth-search"):l.closest(".mm-panel").length||((s.hasClass("mm-panel_opened")||s.hasClass("mm-panel_opened-parent"))&&setTimeout(function(){t.openPanel(a.closest(".mm-panel"))},(e+1)*(1.5*t.conf.openingInterval)),a.addClass("mm-listitem_nosubitems")))}),Mmenu.filterListItems(a.find(".mm-listitem")).each(function(e,n){jQuery(n).prevAll(".mm-listitem_divider").first().removeClass("mm-hidden")});n.removeClass("mm-hidden"),h.find(".mm-panel__noresultsmsg")[d.not(".mm-hidden").length?"addClass":"removeClass"]("mm-hidden"),m.panel.add&&(m.panel.splash&&s.find(".mm-panel__searchsplash").addClass("mm-hidden"),d.add(r).removeClass("mm-hidden"))}else d.add(r).removeClass("mm-hidden"),n.addClass("mm-hidden"),h.find(".mm-panel__noresultsmsg").addClass("mm-hidden"),m.panel.add&&(m.panel.splash?s.find(".mm-panel__searchsplash").removeClass("mm-hidden"):l.closest(".mm-panel_search").length||this.openPanel(this.node.$pnls.children(".mm-panel_opened-parent").last()));this.trigger("updateListview")};