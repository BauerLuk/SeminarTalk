define(["require","exports","tslib","modules/clean/teams/admin/pages/activity/activity_api"],(function(e,t,i,n){"use strict";function r(e){return e.map(s)}function a(e){return r(e.categories)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=r,t.createCategories=a,t.getCategories=function(){return i.__awaiter(this,void 0,Promise,(function(){var e;return i.__generator(this,(function(t){switch(t.label){case 0:return e=a,[4,n.fetchCategories()];case 1:return[2,e.apply(void 0,[t.sent()])]}}))}))};var c=0;function s(e){return{id:e.category[".tag"],label:e.description,checked:!1,highlighted:0==c++,activities:e.events.map(o)}}function o(e){return{id:e.event_type[".tag"],label:e.description,checked:!1,event_type:e.event_type,quick_actions_list:e.quick_actions_list||[]}}}));
//# sourceMappingURL=data_parser.min.js-vflMA9Ufs.map