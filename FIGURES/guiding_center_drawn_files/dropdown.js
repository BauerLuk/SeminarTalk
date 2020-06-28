define(["require","exports","tslib","classnames","react","spectrum/button","spectrum/colorized_icon","spectrum/icon_action","spectrum/icon_content","spectrum/icon_global","spectrum/toggle","modules/clean/browse_interface","modules/clean/em_string","modules/clean/filename_highlights","modules/clean/filepath","modules/clean/paper_formatting_utils","modules/clean/react/browse/models","modules/clean/react/files_view/star","modules/clean/react/icon/file_folder_icon","modules/clean/react/title_bubble","modules/clean/search/constants","modules/clean/search/logger","modules/clean/search/models","modules/clean/search/search_bar/chips","modules/clean/search/search_bar/preview","modules/clean/search/search_bar/query_suggestions_table","modules/clean/search/types","modules/clean/search/search_helpers","modules/clean/react/retrieval_success_banner/util","modules/core/browser","modules/core/i18n","modules/core/accessible_announce","spectrum/file_icon"],(function(e,t,r,a,n,o,s,i,l,c,u,p,h,d,_,f,m,g,w,b,y,M,S,C,E,v,D,x,H,R,O,k,I){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importDefault(a),n=r.__importDefault(n),d=r.__importStar(d),_=r.__importStar(_),f=r.__importStar(f),M=r.__importStar(M),C=r.__importStar(C),x=r.__importStar(x),R=r.__importStar(R);var P=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._announceLoading=function(){k.AccessibleAnnounce.polite(O.intl.formatMessage({id:"Twn9lv",defaultMessage:"Loading search…"}))},t._ignoreMouseDown=function(e){e.stopPropagation(),e.preventDefault()},t._onClearAllHistoryMouseDown=function(e){e.stopPropagation(),e.preventDefault(),t.props.onHistoryClearAllClick&&x.shouldHandleClick(e)&&t.props.onHistoryClearAllClick()},t._renderHistoryHeader=function(){var e=O.intl.formatMessage({id:"O9dNgg",defaultMessage:"RECENT SEARCHES"}),r=O.intl.formatMessage({id:"AMbVJu",defaultMessage:"CLEAR ALL"});return n.default.createElement(z,{className:"search-bar__history-header search-bar__dropdown-item--border-top",id:"search-dropdown-history-header",onMouseDown:t._ignoreMouseDown,"aria-label":e,"aria-selected":!1},n.default.createElement("div",null,e),n.default.createElement(o.Button,{tagName:"a",variant:"styleless",onClick:t._onClearAllHistoryMouseDown},r))},t}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.props.searchBarLoading&&this._announceLoading(),this._shouldShowRecentHistory(this.props)&&M.logRecentHistoryDisplayed({searchSessionId:this.props.searchSessionId,user:this.props.user,history:this.props.searchHistory})},t.prototype.componentWillReceiveProps=function(e){this._willShowRecentHistoryOnPropsChange(e)&&M.logRecentHistoryDisplayed({searchSessionId:e.searchSessionId,user:e.user,history:e.searchHistory})},t.prototype.componentDidUpdate=function(e){var t=this.props,r=t.searchBarLoading,a=t.normalizedQuery,n=t.searchResults,o=t.onDropdownTTI;r&&!e.searchBarLoading&&this._announceLoading(),a&&e.searchBarLoading&&!r&&(k.AccessibleAnnounce.polite(O.intl.formatMessage({id:"16jUYw",defaultMessage:"{count, plural, one{Found {count} search result} other{Found {count} search results}}"},{count:n.length})),o&&o())},t.prototype._shouldShowRecentHistory=function(e){return e.isOpen&&!e.normalizedQuery&&e.searchHistory.length>0},t.prototype._shouldShowPosteriorQuerySuggestions=function(e){var t=e.isOpen,r=e.normalizedQuery,a=e.areQuerySuggestionsLoaded;return t&&!!r&&!!a},t.prototype._willShowRecentHistoryOnPropsChange=function(e){return this._shouldShowRecentHistory(e)&&(this.props.normalizedQuery!==e.normalizedQuery||0===this.props.searchHistory.length&&e.searchHistory.length>0||!this.props.isOpen&&e.isOpen)},t.prototype._renderPosteriorQuerySuggestions=function(){var e=this.props,t=e.querySuggestions,r=e.onQuerySuggestionsClick,a=e.highlightedRow,o=e.onHighlightDropdownItem;if(t&&r){return n.default.createElement(v.QuerySuggestionsTable,{querySuggestions:t,onQuerySuggestionsClick:r,indexOffset:1,highlightedRow:a,onHighlightDropdownItem:o})}return null},t.prototype.renderScopeChipDropdown=function(e){var t=this.props,r=t.searchBarExperiments,a=t.highlightedRow,o=t.onHighlightDropdownItem,s=t.browseScope,i=t.scopeChip,l=t.onSearchChipInteraction,c=_.child_dir(s),u=h.Emstring.em_snippet(c,16,.6),p=O.intl.formatMessage({id:"9hKn1S",defaultMessage:"Filter to <strong>{folder_name}</strong>"},{folder_name:u,strong:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("strong",{key:"title"},e)}}),d=u!==c;return n.default.createElement(T,{row:e,searchBarExperiments:r,highlightedRow:a,onHighlightDropdownItem:o,isOn:C.isValidPathForChip(i),text:n.default.createElement("span",null,p),headerText:O.intl.formatMessage({id:"ilfKLu",defaultMessage:"Filter to {folder_name}"},{folder_name:u}),tooltip:d?c:void 0,onInteraction:l,className:"search-bar__dropdown_chip-toggle--scope"})},t.prototype.render=function(){var e,t=[],o=this._shouldShowRecentHistory(this.props),s=this.props.dropdownHeaderItems,i=s.length,l=D.SearchBarDropdownHeaderItemType.SEARCH_ALL,c=this.props.showLinkToResultsPage&&!o&&-1!==s.indexOf(l),u=D.SearchBarDropdownHeaderItemType.SCOPE_CHIPS,p=this.props.scopeChip&&-1!==s.indexOf(u),h=this.props,d={highlightedRow:h.highlightedRow,onHighlightDropdownItem:h.onHighlightDropdownItem,searchPath:h.searchPath,searchSessionId:h.searchSessionId,user:h.user};if(o)for(var _=0;_<this.props.searchHistory.length;_++){var f=this.props.searchHistory[_];t.push(n.default.createElement(q,r.__assign({},d,{indexOffset:i,key:f.rawQuery,onClick:this.props.onHistoryItemClick,onContextMenuCapture:this.props.onRecentSearchContextMenuCapture,query:f,row:_+i})))}else{var g=Math.min(y.MaxResults.MAX_SEARCH_SUGGESTIONS,this.props.searchResults.length);for(_=0;_<g;_++){var w=this.props.searchResults[_],b=r.__assign(r.__assign({},this.props),{row:_+i,indexOffset:i,resultCount:g});w instanceof S.SlimFileSearchResult||w instanceof m.File?t.push(n.default.createElement(Q,r.__assign({},b,{resultObject:w,key:w.fq_path}))):w instanceof m.Paper?t.push(n.default.createElement(L,r.__assign({},b,{resultObject:w,key:w.pad_id}))):w instanceof m.PaperFolder?t.push(n.default.createElement(B,r.__assign({},b,{resultObject:w,key:w.folder_id}))):w instanceof m.FileSharedWithMe&&t.push(n.default.createElement(F,r.__assign({},b,{resultObject:w,key:w.file_id})))}}var M,C=((e={"search-bar__dropdown":!0,"is-expanded":this.props.isOpen})[this.props.className||""]=!0,e);M="function"==typeof this.props.children?this.props.children():n.default.createElement("noscript",null);var E=this._shouldShowPosteriorQuerySuggestions(this.props);return n.default.createElement("div",{className:a.default(C),"aria-hidden":!this.props.isOpen},n.default.createElement("ol",{className:a.default({"search-bar__dropdown-items":!0}),id:"search-bar__dropdown-items",role:"listbox","aria-label":O.intl.formatMessage({id:"I9eb8i",defaultMessage:"search dropdown"})},c&&n.default.createElement(N,r.__assign({},this.props)),p&&this.renderScopeChipDropdown(s.indexOf(u)),E&&this._renderPosteriorQuerySuggestions(),o&&this._renderHistoryHeader(),t,M),this.props.searchBarLoading&&n.default.createElement("div",{className:"search-bar__loading"},n.default.createElement("span",{className:"ax-visually-hidden"},O.intl.formatMessage({id:"x5SpE7",defaultMessage:"Loading search..."}))))},t.defaultProps={showLinkToResultsPage:!0},t})(n.default.Component);t.SearchBarDropdown=P;var T=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._onMouseEnter=function(){return t.props.onHighlightDropdownItem(t.props.row)},t._onMouseDown=function(e){e.stopPropagation(),e.preventDefault(),x.shouldHandleClick(e)&&t.props.onInteraction&&t.props.onInteraction(!t.props.isOn)},t._onToggleClick=function(e){e.stopPropagation(),e.preventDefault()},t}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.row,r=e.highlightedRow,o=e.isOn,l=e.text,c=e.tooltip,p=e.className,h=e.headerText,d=this.props.row===r,_={"search-bar__dropdown-item":!0,"search-bar__dropdown-item--border-top":!0,"search-bar__full_search_suggestion":!0,"search-bar__dropdown_chip-toggle":!0,"search-bar__dropdown-item--is-highlighted":d};p&&(_[p]=!0);var f=o?O.intl.formatMessage({id:"4ASaZl",defaultMessage:"On"}):O.intl.formatMessage({id:"495asM",defaultMessage:"Off"}),m=O.intl.formatMessage({id:"zigZlp",defaultMessage:"{header_text}: {toggle_description}"},{header_text:h,toggle_description:f});return n.default.createElement(z,{id:"search-dropdown-item"+t,className:a.default(_),onMouseEnter:this._onMouseEnter,onMouseDown:this._onMouseDown,"aria-selected":d,"aria-label":m},n.default.createElement("div",{className:"mc-media-cell-icon search-bar__dropdown-item-cell-icon"},n.default.createElement(s.ColorizedIcon,{color:"#6A7C8F"},n.default.createElement(i.IconAction,{name:"sort",className:"search-bar__chip-icon--sort"}))),n.default.createElement("div",{className:"search-bar__header-text"},c?n.default.createElement(b.TitleBubble,{content:c,position:b.TitleBubble.POSITIONS.BOTTOM},l):l),n.default.createElement("div",{className:"search-bar__chip_toggle"},n.default.createElement(u.Toggle,{onClick:this._onToggleClick,interactive:!1,labelContent:f,ariaLabel:f,checked:o})))},t})(n.default.Component),N=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._renderTitle=function(){var e=t.props.searchPath;return _.paths_are_equal(e,"/")?O.intl.formatMessage({id:"Zmr3dn",defaultMessage:"View all results for “{query}”"},{query:t.props.normalizedQuery,strong:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("strong",{key:"title"},e)}}):O.intl.formatMessage({id:"417qVe",defaultMessage:"View all results for <span>“{query}”</span> in <strong>{current_path}</strong>"},{current_path:_.filename(e),query:t.props.normalizedQuery,span:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("span",{key:"title"},e)},strong:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("strong",{key:"path"},e)}})},t._renderTitleText=function(){var e=t.props.searchPath;return _.paths_are_equal(e,"/")?O.intl.formatMessage({id:"Zmr3dn",defaultMessage:"View all results for “{query}”"},{query:t.props.normalizedQuery}):O.intl.formatMessage({id:"wl+tit",defaultMessage:"View all results for “{query}” in {current_path}"},{query:t.props.normalizedQuery,current_path:_.filename(e)})},t._onMouseDown=function(e){e.stopPropagation(),e.preventDefault(),x.shouldHandleClick(e)&&t.props.onSearch(t.props.normalizedQuery)},t._onMouseEnter=function(){return t.props.onHighlightDropdownItem(0)},t}return r.__extends(t,e),t.prototype.render=function(){var e=0===this.props.highlightedRow,t={"search-bar__dropdown-item":!0,"search-bar__dropdown-item--border-top":!0,"search-bar__dropdown-item--header":!0,"search-bar__dropdown-item--is-highlighted":e,"search-bar__full_search_suggestion":!0,"js-search-bar__view-all-results":!0};return n.default.createElement(z,{className:a.default(t),id:"search-dropdown-item0",onMouseDown:this._onMouseDown,onMouseEnter:this._onMouseEnter,"aria-selected":e,"aria-label":this._renderTitleText()},n.default.createElement("div",{className:"mc-media-cell-icon search-bar__dropdown-item-cell-icon"},n.default.createElement(s.ColorizedIcon,{color:"#6A7C8F"},n.default.createElement(c.IconGlobal,{name:"search-small",className:"search-bar__dropdown-item-icon--search"}))),n.default.createElement("div",{className:"search-bar__header-text"},this._renderTitle()))},t})(n.default.Component),L=(function(e){function t(t){var r=e.call(this,t)||this;return r.state=r._calcState(t),r}return r.__extends(t,e),t.prototype._calcState=function(e){return{titleParts:f.getPaperDocTitleParts(e.resultObject,"search-bar__dropdown-item-icon","search-bar__dropdown-item-icon-emoji")}},t.prototype.componentWillReceiveProps=function(e){if(this.props.resultObject.title!==e.resultObject.title){var t=this._calcState(e);this.setState(t)}},t.prototype.render=function(){var e=this.state.titleParts,t=e.highlightedTitle,a=e.title,o=e.icon;return(n.default.createElement(j,r.__assign({},this.props,{icon:o,title:t,ariaTitle:a,location:"Paper"})))},t})(n.default.Component),B=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.props.resultObject,t=n.default.createElement(l.IconContent,{name:"folder-small",className:"search-bar__dropdown-item-icon"}),a=e.highlight_spans&&e.highlight_spans.length>0?d.highlightReactFromHighlightSpans(e.name,e.highlight_spans):n.default.createElement("span",null,e.name);return n.default.createElement(j,r.__assign({},this.props,{icon:t,title:a,ariaTitle:e.name,location:"Paper"}))},t})(n.default.Component),F=function(e){var t=e.resultObject,a=n.default.createElement(I.FileIcon,{path:t.filename}),o=t.highlight_spans&&t.highlight_spans.length>0?d.highlightReactFromHighlightSpans(t.filename,t.highlight_spans):n.default.createElement("span",null,t.filename);return n.default.createElement(j,r.__assign({},e,{icon:a,title:o,ariaTitle:t.filename,location:O.intl.formatMessage({id:"cvKw36",defaultMessage:"Shared with you"})}))},Q=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.props.resultObject,t=_.filename(e.fq_path),a=_.parent_dir(e.fq_path),o="Dropbox",s=a.split("/");s.shift(),e.is_unmounted&&s.length>0&&(o=s.shift());var i=s[s.length-1];s.length>=2&&(o+="/..."),i&&i.length&&(o+="/"+i);var l,c=r.__assign({isDeleted:e.is_unmounted},e);return l=e.highlight_spans?d.highlightReactFromHighlightSpans(t,e.highlight_spans):d.highlightMatchReact(t,e.filename_highlights),n.default.createElement(j,r.__assign({},this.props,{icon:n.default.createElement(w.FileOrFolderIcon,{className:"search-bar__dropdown-item-icon",file:c}),title:l,ariaTitle:t,location:o,isUnmounted:e.is_unmounted,parentFolderUrl:p.browse_uri_for_fq_path(this.props.user,a).toString()}))},t})(n.default.Component);function q(e){var t=e.query,a=e.searchPath,o=e.searchSessionId,i=e.user,l=O.intl.formatMessage({id:"ZFZrNG",defaultMessage:"Search for {query}"},{query:t.rawQuery}),u=n.default.createElement("div",{className:"mc-media-cell-icon search-bar__dropdown-item-cell-icon"},n.default.createElement(s.ColorizedIcon,{color:"#6A7C8F"},n.default.createElement(c.IconGlobal,{name:"search-small",className:"search-bar__recent_search-icon--search"}))),p=x.buildSearchURL({user:i,searchPath:a,normalizedQuery:t.normalizedQuery,searchSessionId:o,searchToken:x.getSearchCsrfToken()}).toString(),h=A;return n.default.createElement(h,r.__assign({},e,{data:t,titleText:t.rawQuery,ariaLabel:l,classes:{"search-bar__recent_search":!0},icon:u,href:p,noTopBorder:!0}))}var A=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._onMouseDown=function(e){e.stopPropagation(),e.preventDefault(),t.props.onClick&&x.shouldHandleClick(e)&&t.props.onClick(t.props.data,t.props.row)},t._onContextMenuCapture=function(){t.props.onContextMenuCapture&&t.props.onContextMenuCapture(t.props.data,t.props.row)},t._onMouseEnter=function(){return t.props.onHighlightDropdownItem(t.props.row)},t}return r.__extends(t,e),t._onClick=function(e){x.shouldHandleClick(e)&&(e.stopPropagation(),e.preventDefault())},t.prototype.render=function(){var e=this.props,o=e.ariaLabel,s=e.highlightRanges,i=e.highlightedRow,l=e.href,c=e.icon,u=e.indexOffset,p=e.noTopBorder,h=e.row,_=e.titleText,f=h===i,m=d.highlightReactFromHighlightSpans(_,s),g=h-u,w=r.__assign(r.__assign({},this.props.classes),{"search-bar__dropdown-item--is-highlighted":f,"search-bar__dropdown-item--border-top":!p&&0===g});return n.default.createElement(z,{className:a.default(w),id:"search-dropdown-item"+h,onMouseDown:this._onMouseDown,onMouseEnter:this._onMouseEnter,onClick:t._onClick,"aria-selected":f,"aria-label":o},c,n.default.createElement("a",{href:l,onContextMenuCapture:this._onContextMenuCapture},n.default.createElement("div",{className:"search-bar__row-name"},m)))},t.defaultProps={noTopBorder:!1},t})(n.default.Component),j=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._onMouseDown=function(e){e.stopPropagation(),e.preventDefault(),x.shouldHandleClick(e)&&t.props.onSearchResultOpen(t.props.resultObject)},t._onPathLinkClick=function(e){var r=t.props.searchBarExperiments;e.stopPropagation(),e.preventDefault(),r.expSearchSuccessBanner&&"/h"===R.get_pathname()&&H.setSearchSuccessBannerVisibleFromHome(),x.shouldHandleClick(e)&&t.props.onResultObjectPathClick(t.props.resultObject)},t._onMouseEnter=function(){return t.props.onHighlightDropdownItem(t.props.row)},t._onContextMenuCapture=function(){var e=t.props,r=e.onContextMenuCapture,a=e.resultObject;r&&r(a)},t._getSearchBarDropdownResultVariant=function(){var e,r=t.props,a=r.isUnmounted,o=r.location,s=r.resultObject,i=r.user,l=r.title,c=r.parentFolderUrl;e=a?O.intl.formatMessage({id:"lYaw9D",defaultMessage:"not added yet, in <locationSpan>{location}</locationSpan>"},{location:o,locationSpan:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("span",{key:"location",title:o},e)}}):O.intl.formatMessage({id:"ul4QwY",defaultMessage:"<locationSpan>in {location}</locationSpan>"},{location:o,locationSpan:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("span",{key:"location",title:o},e)}});var u=x.resultObjectToUrl(s,i),p=n.default.createElement(g.StarContainer,{item:s,user:i,key:"dropdownStar",className:"search-bar__search-result-star",isReadOnly:!0});return n.default.createElement("div",null,n.default.createElement(E.SearchBarDropdownPreview,{result:s,visible:t.props.row===t.props.highlightedRow,user:i,searchSessionId:t.props.searchSessionId,position:t.ref?window.innerHeight-t.ref.getBoundingClientRect().bottom:void 0}),n.default.createElement("a",{href:u,onContextMenuCapture:t._onContextMenuCapture},n.default.createElement("div",{className:"search-bar__search-result-name-star-group"},n.default.createElement("div",{className:"search-bar__search-result-name"},l),p)),n.default.createElement("div",{className:"search-bar__search-result-desc"},c?n.default.createElement("a",{href:c,onMouseDown:t._onPathLinkClick,onContextMenuCapture:t._onContextMenuCapture,className:"search-bar__search-result-desc-link"},e):n.default.createElement("span",null,e)))},t.setRef=function(e){t.ref=e},t}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.highlightedRow,r=e.indexOffset,o=e.row,s=e.resultCount,i=e.icon,l=e.ariaTitle,c=e.location,u=o===t,p=o-r,h={"search-bar__dropdown-item":!0,"search-bar__result":!0,"search-bar__dropdown-item--is-highlighted":u,"search-bar__dropdown-item--border-top":0===p},d=O.intl.formatMessage({id:"FtiJRA",defaultMessage:"Search Result {index} of {result}: {aria_title} in {location}"},{index:p+1,result:s,aria_title:l,location:c});return n.default.createElement(z,{className:a.default(h),id:"search-dropdown-item"+o,onMouseDown:this._onMouseDown,onMouseEnter:this._onMouseEnter,"aria-selected":u,_ref:this.setRef,"aria-label":d},n.default.createElement("div",{className:"mc-media-cell-icon search-bar__dropdown-item-cell-icon"},i),this._getSearchBarDropdownResultVariant())},t})(n.default.Component),z=function(e){var t=e._ref,a=r.__rest(e,["_ref"]);return n.default.createElement("li",r.__assign({role:"option","aria-label":e["aria-label"],"aria-selected":e["aria-selected"],tabIndex:0,ref:t},a))}}));
//# sourceMappingURL=dropdown.min.js-vflEAoPqM.map