define(["require","exports","tslib","reselect","external/lodash","rondo/v1/metadata","rondo/v1/invariant"],(function(e,t,n,r,o,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=n.__importStar(o),t.SELECTOR_FIELD_TYPE="selector",t.isReselector=function(e){return e.hasOwnProperty("recomputations")&&e.hasOwnProperty("resetRecomputations")},t.createSelector=function(){for(var e,n=[],c=0;c<arguments.length;c++)n[c]=arguments[c];var u=function(){return a.invariant(void 0!==e,"Selector is not fully initialize, check that you are in a behavior context"),e},l=o.flatten(n),s=l.pop();0===l.length&&l.push((function(){return u().getState()})),l=l.map((function(e){return t.isReselector(e)?e:function(){return e(u().getState())}}));var f=r.createSelector(l,s),p=function(){return f(u().getFullState())};return p[i.ENTRY_FIELD_TYPE]=t.SELECTOR_FIELD_TYPE,p.init=function(t){e=t,p.init=function(e){},Object.freeze(p)},p}}));
//# sourceMappingURL=selector.min.js-vfln1GJIy.map