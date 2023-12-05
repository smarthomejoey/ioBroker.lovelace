/*! For license information please see 65666.FOBv3YNvKSk.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[65666],{65666:function(e,t,n){var i,o=n(33368),r=n(71650),a=n(69205),s=n(70906),l=n(43204),u=n(95260),d=n(99312),c=n(81043),m=n(88962),p=n(34541),f=n(47838),h=(n(80641),n(73855),n(56308),n(22481),n(76843),n(61641),n(99608),{MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"}),I={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},E={FOCUS_ROOT_INDEX:-1};!function(e){e[e.NONE=0]="NONE",e[e.LIST_ROOT=1]="LIST_ROOT",e[e.FIRST_ITEM=2]="FIRST_ITEM",e[e.LAST_ITEM=3]="LAST_ITEM"}(i||(i={}));n(51467);var _,y,v,A=n(72774),C=n(74015),S=n(6945),b=function(e){function t(n){var o=e.call(this,(0,l.__assign)((0,l.__assign)({},t.defaultAdapter),n))||this;return o.closeAnimationEndTimerId=0,o.defaultFocusState=i.LIST_ROOT,o.selectedIndex=-1,o}return(0,l.__extends)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},t.prototype.handleKeydown=function(e){var t=e.key,n=e.keyCode;("Tab"===t||9===n)&&this.adapter.closeSurface(!0)},t.prototype.handleItemAction=function(e){var t=this,n=this.adapter.getElementIndex(e);if(!(n<0)){this.adapter.notifySelected({index:n});var i="true"===this.adapter.getAttributeFromElementAtIndex(n,I.SKIP_RESTORE_FOCUS);this.adapter.closeSurface(i),this.closeAnimationEndTimerId=setTimeout((function(){var n=t.adapter.getElementIndex(e);n>=0&&t.adapter.isSelectableItemAtIndex(n)&&t.setSelectedIndex(n)}),S.k.numbers.TRANSITION_CLOSE_DURATION)}},t.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case i.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case i.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case i.NONE:break;default:this.adapter.focusListRoot()}},t.prototype.setDefaultFocusState=function(e){this.defaultFocusState=e},t.prototype.getSelectedIndex=function(){return this.selectedIndex},t.prototype.setSelectedIndex=function(e){if(this.validatedIndex(e),!this.adapter.isSelectableItemAtIndex(e))throw new Error("MDCMenuFoundation: No selection group at specified index.");var t=this.adapter.getSelectedSiblingOfItemAtIndex(e);t>=0&&(this.adapter.removeAttributeFromElementAtIndex(t,I.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(t,h.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(e,h.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(e,I.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=e},t.prototype.setEnabled=function(e,t){this.validatedIndex(e),t?(this.adapter.removeClassFromElementAtIndex(e,C.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(e,I.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(e,C.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(e,I.ARIA_DISABLED_ATTR,"true"))},t.prototype.validatedIndex=function(e){var t=this.adapter.getMenuItemCount();if(!(e>=0&&e<t))throw new Error("MDCMenuFoundation: No list item at specified index.")},t}(A.K),T=n(78220),x=n(14114),g=n(68144),O=n(83448),k=(n(23104),function(e){(0,a.Z)(l,e);var t,n,i=(0,s.Z)(l);function l(){var e;return(0,r.Z)(this,l),(e=i.apply(this,arguments)).mdcFoundationClass=b,e.listElement_=null,e.anchor=null,e.open=!1,e.quick=!1,e.wrapFocus=!1,e.innerRole="menu",e.innerAriaLabel=null,e.corner="TOP_START",e.x=null,e.y=null,e.absolute=!1,e.multi=!1,e.activatable=!1,e.fixed=!1,e.forceGroupSelection=!1,e.fullwidth=!1,e.menuCorner="START",e.stayOpenOnBodyClick=!1,e.defaultFocus="LIST_ROOT",e._listUpdateComplete=null,e}return(0,o.Z)(l,[{key:"listElement",get:function(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}},{key:"items",get:function(){var e=this.listElement;return e?e.items:[]}},{key:"index",get:function(){var e=this.listElement;return e?e.index:-1}},{key:"selected",get:function(){var e=this.listElement;return e?e.selected:null}},{key:"render",value:function(){return this.renderSurface()}},{key:"renderSurface",value:function(){var e=this.getSurfaceClasses();return(0,g.dy)(_||(_=(0,m.Z)([' <mwc-menu-surface ?hidden="','" .anchor="','" .open="','" .quick="','" .corner="','" .x="','" .y="','" .absolute="','" .fixed="','" .fullwidth="','" .menuCorner="','" ?stayOpenOnBodyClick="','" class="','" @closed="','" @opened="','" @keydown="','"> '," </mwc-menu-surface>"])),!this.open,this.anchor,this.open,this.quick,this.corner,this.x,this.y,this.absolute,this.fixed,this.fullwidth,this.menuCorner,this.stayOpenOnBodyClick,(0,O.$)(e),this.onClosed,this.onOpened,this.onKeydown,this.renderList())}},{key:"getSurfaceClasses",value:function(){return{"mdc-menu":!0,"mdc-menu-surface":!0}}},{key:"renderList",value:function(){var e="menu"===this.innerRole?"menuitem":"option",t=this.renderListClasses();return(0,g.dy)(y||(y=(0,m.Z)([' <mwc-list rootTabbable .innerAriaLabel="','" .innerRole="','" .multi="','" class="','" .itemRoles="','" .wrapFocus="','" .activatable="','" @action="','"> <slot></slot> </mwc-list>'])),this.innerAriaLabel,this.innerRole,this.multi,(0,O.$)(t),e,this.wrapFocus,this.activatable,this.onAction)}},{key:"renderListClasses",value:function(){return{"mdc-deprecated-list":!0}}},{key:"createAdapter",value:function(){var e=this;return{addClassToElementAtIndex:function(t,n){var i=e.listElement;if(i){var o=i.items[t];o&&("mdc-menu-item--selected"===n?e.forceGroupSelection&&!o.selected&&i.toggle(t,!0):o.classList.add(n))}},removeClassFromElementAtIndex:function(t,n){var i=e.listElement;if(i){var o=i.items[t];o&&("mdc-menu-item--selected"===n?o.selected&&i.toggle(t,!1):o.classList.remove(n))}},addAttributeToElementAtIndex:function(t,n,i){var o=e.listElement;if(o){var r=o.items[t];r&&r.setAttribute(n,i)}},removeAttributeFromElementAtIndex:function(t,n){var i=e.listElement;if(i){var o=i.items[t];o&&o.removeAttribute(n)}},getAttributeFromElementAtIndex:function(t,n){var i=e.listElement;if(!i)return null;var o=i.items[t];return o?o.getAttribute(n):null},elementContainsClass:function(e,t){return e.classList.contains(t)},closeSurface:function(){e.open=!1},getElementIndex:function(t){var n=e.listElement;return n?n.items.indexOf(t):-1},notifySelected:function(){},getMenuItemCount:function(){var t=e.listElement;return t?t.items.length:0},focusItemAtIndex:function(t){var n=e.listElement;if(n){var i=n.items[t];i&&i.focus()}},focusListRoot:function(){e.listElement&&e.listElement.focus()},getSelectedSiblingOfItemAtIndex:function(t){var n=e.listElement;if(!n)return-1;var i=n.items[t];if(!i||!i.group)return-1;for(var o=0;o<n.items.length;o++)if(o!==t){var r=n.items[o];if(r.selected&&r.group===i.group)return o}return-1},isSelectableItemAtIndex:function(t){var n=e.listElement;if(!n)return!1;var i=n.items[t];return!!i&&i.hasAttribute("group")}}}},{key:"onKeydown",value:function(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}},{key:"onAction",value:function(e){var t=this.listElement;if(this.mdcFoundation&&t){var n=e.detail.index,i=t.items[n];i&&this.mdcFoundation.handleItemAction(i)}}},{key:"onOpened",value:function(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}},{key:"onClosed",value:function(){this.open=!1}},{key:"getUpdateComplete",value:(n=(0,c.Z)((0,d.Z)().mark((function e(){var t;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._listUpdateComplete;case 2:return e.next=4,(0,p.Z)((0,f.Z)(l.prototype),"getUpdateComplete",this).call(this);case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"firstUpdated",value:(t=(0,c.Z)((0,d.Z)().mark((function e(){var t;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.Z)((0,f.Z)(l.prototype),"firstUpdated",this).call(this),!(t=this.listElement)){e.next=6;break}return this._listUpdateComplete=t.updateComplete,e.next=6,this._listUpdateComplete;case 6:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"select",value:function(e){var t=this.listElement;t&&t.select(e)}},{key:"close",value:function(){this.open=!1}},{key:"show",value:function(){this.open=!0}},{key:"getFocusedItemIndex",value:function(){var e=this.listElement;return e?e.getFocusedItemIndex():-1}},{key:"focusItemAtIndex",value:function(e){var t=this.listElement;t&&t.focusItemAtIndex(e)}},{key:"layout",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.listElement;t&&t.layout(e)}}]),l}(T.H));(0,l.__decorate)([(0,u.IO)(".mdc-menu")],k.prototype,"mdcRoot",void 0),(0,l.__decorate)([(0,u.IO)("slot")],k.prototype,"slotElement",void 0),(0,l.__decorate)([(0,u.Cb)({type:Object})],k.prototype,"anchor",void 0),(0,l.__decorate)([(0,u.Cb)({type:Boolean,reflect:!0})],k.prototype,"open",void 0),(0,l.__decorate)([(0,u.Cb)({type:Boolean})],k.prototype,"quick",void 0),(0,l.__decorate)([(0,u.Cb)({type:Boolean})],k.prototype,"wrapFocus",void 0),(0,l.__decorate)([(0,u.Cb)({type:String})],k.prototype,"innerRole",void 0),(0,l.__decorate)([(0,u.Cb)({type:String})],k.prototype,"innerAriaLabel",void 0),(0,l.__decorate)([(0,u.Cb)({type:String})],k.prototype,"corner",void 0),(0,l.__decorate)([(0,u.Cb)({type:Number})],k.prototype,"x",void 0),(0,l.__decorate)([(0,u.Cb)({type:Number})],k.prototype,"y",void 0),(0,l.__decorate)([(0,u.Cb)({type:Boolean})],k.prototype,"absolute",void 0),(0,l.__decorate)([(0,u.Cb)({type:Boolean})],k.prototype,"multi",void 0),(0,l.__decorate)([(0,u.Cb)({type:Boolean})],k.prototype,"activatable",void 0),(0,l.__decorate)([(0,u.Cb)({type:Boolean})],k.prototype,"fixed",void 0),(0,l.__decorate)([(0,u.Cb)({type:Boolean})],k.prototype,"forceGroupSelection",void 0),(0,l.__decorate)([(0,u.Cb)({type:Boolean})],k.prototype,"fullwidth",void 0),(0,l.__decorate)([(0,u.Cb)({type:String})],k.prototype,"menuCorner",void 0),(0,l.__decorate)([(0,u.Cb)({type:Boolean})],k.prototype,"stayOpenOnBodyClick",void 0),(0,l.__decorate)([(0,u.Cb)({type:String}),(0,x.P)((function(e){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(i[e])}))],k.prototype,"defaultFocus",void 0);var R=(0,g.iv)(v||(v=(0,m.Z)(["mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height,48px)}"]))),L=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n)}(k);L.styles=[R],L=(0,l.__decorate)([(0,u.Mo)("mwc-menu")],L)}}]);
//# sourceMappingURL=65666.FOBv3YNvKSk.js.map