define(["require","exports","tslib","react","dig-components/layer","dig-components/menu","dig-components/buttons","classnames"],(function(e,t,n,a,r,l,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),i=n.__importDefault(i);t.InviteModalRoleDropdown=function(e){var t=e.options,s=e.triggerLabel,u=e.selectedId,d=e.onSelection,c=e.className,m=void 0===c?"":c,f=e.isEmptyRow,p=void 0===f||f,g=i.default(m+"-trigger","js-role-trigger","imm-dark-grey-text"),v=a.default.createElement(o.Button,{className:g,variant:"transparent",size:"small",hasNoUnderline:!0,withDropdownIcon:!0,disabled:!0},s);return!p&&t&&d&&(v=a.default.createElement(r.LayerContext.Provider,{value:12},a.default.createElement(l.Menu.Wrapper,{onSelection:function(e){return d(e)}},(function(e){var r=e.getContentProps,i=e.getTriggerProps;return a.default.createElement(a.default.Fragment,null,a.default.createElement(o.Button,n.__assign({},i(),{className:g,variant:"transparent",size:"small",hasNoUnderline:!0,withDropdownIcon:!0}),s),a.default.createElement(l.Menu.Content,n.__assign({},r()),a.default.createElement(l.Menu.Segment,null,t.map((function(e){var t=e.id,n=e.label,r=e.description;return a.default.createElement(l.Menu.SelectItem,{key:t,value:t,withSubtitle:r,selected:t===u},n)})))))})))),a.default.createElement("div",{className:m},v)}}));
//# sourceMappingURL=invite_modal_role_dropdown.min.js-vfl8NaiKw.map