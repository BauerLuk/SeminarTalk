define(["require","exports","tslib","react","modules/core/i18n","spectrum/modal","modules/clean/static_urls","spectrum/button","deep-integrations/text/text","modules/clean/ux_analytics_modal_tracking","modules/clean/react/css","modules/clean/react/modal","react-modal","external/lodash","deep-integrations/search_input/search_input","deep-integrations/search_input/clear_input_button","spectrum/colorized_icon","deep-integrations/icons/icon_cancel","modules/clean/react/extensions/common","modules/clean/react/extensions/data/helpers","modules/clean/react/extensions/data/selectors","modules/clean/react/app_actions/redirect","modules/clean/react/file_viewer/open_button/types","modules/clean/react/extensions/cloud_docs_compat","dig-components/typography"],(function(e,t,a,n,s,o,r,i,l,c,d,u,m,p,f,g,_,h,y,x,E,v,C,M,S){"use strict";function N(){return n.default.createElement("div",{className:"extensions-scaling-modal__directory-entry-point"},n.default.createElement(S.Text,{isBold:!0},n.default.createElement(S.Link,{href:"/apps",hasNoUnderline:!0},s.intl.formatMessage({id:"LbLi52",defaultMessage:"View all apps"}))))}Object.defineProperty(t,"__esModule",{value:!0}),n=a.__importDefault(n),p=a.__importStar(p),t.AppDirectoryEntryPoint=N;var A=(function(e){function t(t){var a=e.call(this,t)||this;return a.hasUsedSearchBar=!1,a.createClickHandler=function(e){return function(){u.Modal.close();var t=a.props,n=t.user,s=t.file,o=t.featureFlags,r=t.currentSession,i=t.telemetryContext,l=t.updateLinkState,c=t.onProfileServiceAuth;if(v.redirectToActionOrShowAuth(n,s,e,o,i,l,c),"redirect"===e.handler[".tag"])y.logEvent(r,"select_action",y.getAppActionExtras(e));else if("cloud_editor"===e.handler[".tag"]){var d=M.isWopiAction(e)?C.OpenButtonAction.OPEN_WITH:C.OpenButtonAction.OPEN_WITH_CLOUD_DOC;y.logEvent(a.props.currentSession,"select_legacy_action",{type:d})}}},a.handleQueryChange=function(e){a.setState({searchKey:e}),a.hasUsedSearchBar||(y.logEvent(a.props.currentSession,"start_searching",{}),a.hasUsedSearchBar=!0)},a.filterActions=function(){var e=a.props,t=e.appActions,n=e.categoryIdToInfos,s=a.state.searchKey.trim().toLowerCase(),o=t.map((function(e){return e.category})).map((function(e){return n[e]})).filter((function(e){return-1!==e.display_name.toLowerCase().indexOf(s)})).map((function(e){return e.id}));return t.filter((function(e){return-1!==e.description.toLowerCase().indexOf(s)||o.includes(e.category)}))},a.renderExtensionItem=function(e){var t=e.icon,o=t.is_static?r.static_url("/static/images/generic_app_icon-vflIPYT1H.png"):t.url,l=e.app_copy,c=y.isLinked(e),d=c?"primary":"secondary",u=c?E.isShareAction(e)?s.intl.formatMessage({id:"NoV3Co",defaultMessage:"Share"}):s.intl.formatMessage({id:"CNPdm5",defaultMessage:"Open"}):s.intl.formatMessage({id:"vV9l+M",defaultMessage:"Connect"});return n.default.createElement("div",{className:"extension-section",key:e.description},n.default.createElement("div",{className:"extension-tile"},n.default.createElement("img",{src:o,className:"extensions-icon",alt:""}),n.default.createElement("div",{className:"extensions-description"},n.default.createElement("div",{className:"extensions-app-name"},e.description)),n.default.createElement(i.Button,{variant:d,className:"extensions-scaling-modal__redirect_button",onClick:a.createClickHandler(e)},u)),n.default.createElement("div",{className:"extensions-scaling-modal__app-description"},l&&l.map((function(e,t){return n.default.createElement("p",{key:t,className:"extensions-scaling-modal__app-description-line"},"• "+e)}))))},a.renderEmptySearch=function(){return n.default.createElement("div",{className:"extensions-scaling-modal__empty-search"},n.default.createElement("img",{className:"extensions-scaling-modal__empty-search-image",src:r.static_url("/static/images/empty_states/search-vflHMNVT9.png"),srcSet:r.static_url("/static/images/empty_states/search@2x-vfly2B3kk.png")+" 2x",alt:""}),n.default.createElement(l.Text,{size:"medium"},s.intl.formatMessage({id:"9KI80J",defaultMessage:"<bold>Looking for something?</bold>"},{bold:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement(l.Text,{fontWeight:"medium",size:"large"},e)}})),n.default.createElement(l.Text,{size:"medium"},s.intl.formatMessage({id:"v6+J7C",defaultMessage:"Check spelling or try again."})))},a.state={searchKey:""},a}return a.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.onRequestClose,r=t.featureFlags,i=t.modalTitle,d=this.filterActions().sort(x.actionCompareFn),u="ON"===r.appDirectory;return n.default.createElement(o.Modal,{ariaLabel:s.intl.formatMessage({id:"wjwJvt",defaultMessage:"App actions"}),className:"extensions-scaling-modal",displayCloseButton:!0,open:!0,overlayClassName:"file-viewer-modal-overlay",overlayFixed:!1,onRequestClose:function(){return a()}},n.default.createElement("div",{className:"extensions-scaling-modal__body-wrapper"},n.default.createElement("div",{className:"extensions-scaling-modal__title"},n.default.createElement(l.Text,{size:"large"},i)),n.default.createElement("div",{className:"extensions-scaling-modal__search-bar"},n.default.createElement(f.SearchInput,{clearButtonRenderer:function(e){var t=e.handleClick,a=e.handleKeyDown,s=e.handleMouseDown;return n.default.createElement(g.ClearInputButton,{icon:n.default.createElement(_.ColorizedIcon,{color:"#707781"},n.default.createElement(h.IconCancel,null)),onClick:t,onKeyDown:a,onMouseDown:s})},keyboardShortcut:"",placeholder:s.intl.formatMessage({id:"+enW1p",defaultMessage:"Search by action or app name"}),value:this.state.searchKey,onChange:this.handleQueryChange})),n.default.createElement("div",{className:"extensions-container"},d.length>0?d.map((function(t){return e.renderExtensionItem(t)})):this.renderEmptySearch()),u&&n.default.createElement(N,null)),n.default.createElement(c.UXAnalyticsModalTracking,{id:"extensions-scaling-modal"}))},t})(n.default.Component);t.ExtensionsScalingModal=d.requireCssWithComponent(A,["/static/js/deep-integrations/index.web-vflaKPXS_.css","/static/css/app_actions/index-vflL7QoxZ.css"]);var w=p.once((function(){m.setAppElement(document.body)}));t.showExtensionsScalingModal=function(e,a,s,o,r,i,l,c,d,m){w(),u.Modal.showInstance(n.default.createElement(t.ExtensionsScalingModal,{modalTitle:e,user:a,file:s,onRequestClose:u.Modal.close,appActions:o,categoryIdToInfos:r,featureFlags:i,updateLinkState:l,telemetryContext:c,currentSession:d,onProfileServiceAuth:m}));var p=y.partitionActionsByLinkStatus(o),f=p.connected_apps,g=p.unconnected_apps;y.logEvent(d,"view_scaling_modal",{connected_apps:f,unconnected_apps:g})}}));
//# sourceMappingURL=extensions_scaling_modal.min.js-vflbvE2Fc.map