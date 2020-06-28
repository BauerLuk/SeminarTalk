define(["require","exports","tslib","react-redux","react","modules/clean/react/retrieval_success_banner/constants","modules/clean/react/retrieval_success_banner/data/store","modules/clean/react/retrieval_success_banner/data/selectors","modules/clean/react/retrieval_success_banner/browse_success_banner","modules/clean/react/retrieval_success_banner/search_success_banner","modules/clean/react/retrieval_success_banner/util","modules/clean/react/retrieval_success_banner/data/action_creators"],(function(e,a,r,n,t,s,c,i,o,u,l,S){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t=r.__importDefault(t),i=r.__importStar(i);var d={initialStoreByLocalStorage:(S=r.__importStar(S)).initialStoreByLocalStorage},B=(function(e){function a(a){var r=e.call(this,a)||this;return r.updateBannerVariant=function(){var e=r.props,a=e.expSearchSuccessBanner,n=e.searchBarAbandoned,t=e.searchSuccessBannerShouldShow,c=e.browseSuccessBannerCounterComplete,i=e.browseSuccessBannerShouldShow;l.userIsOptedOutOfRetrievalSuccessBanner()?r.setState({bannerVariant:s.BannerVariant.NONE}):!!a&&!l.userIsOptedOutOfRetrievalSuccessBanner()&&(n||t)?r.setState({bannerVariant:s.BannerVariant.SSB}):c||i?r.setState({bannerVariant:s.BannerVariant.BSB}):r.setState({bannerVariant:s.BannerVariant.NONE})},r.state={bannerVariant:s.BannerVariant.NONE},r}return r.__extends(a,e),a.prototype.componentDidMount=function(){(0,this.props.initialStoreByLocalStorage)(),this.updateBannerVariant()},a.prototype.componentDidUpdate=function(){this.updateBannerVariant()},a.prototype.render=function(){var e=this.props,a=e.user,r=e.displayContext,n=this.state.bannerVariant;return n===s.BannerVariant.SSB?t.default.createElement(u.SearchSuccessBanner,{user:a,displayContext:r}):n===s.BannerVariant.BSB?t.default.createElement(o.BrowseSuccessBanner,{displayContext:r}):null},a.defaultProps={displayContext:s.SearchSuccessDisplayContext.IN_EMBEDDED_APP},a})(t.default.PureComponent);a.RetrievalSuccessHomeBannerComponent=B;var p=n.connect((function(e,a){var n=i.isBrowseSuccessBannerCounterComplete,t=i.isBrowseSuccessBannerVisible,s=i.isRetrievalSuccessBannerVisible,c=i.isSearchSuccessBannerVisible,o=i.isSearchBarAbandoned,u=i.isSearchResultActionClicked,l=i.isSearchSuccessBannerDismissed;return r.__assign({browseSuccessBannerCounterComplete:n(e),browseSuccessBannerShouldShow:t(e),retrievalSuccessBannerShouldShow:s(e),searchSuccessBannerShouldShow:c(e),searchBarAbandoned:o(e),searchResultActionClicked:u(e),searchSuccessBannerDismissed:l(e)},a)}),d)(B),_=c.getStoreForSuccessBanner();a.RetrievalSuccessHomeBannerWithProvider=function(e){return t.default.createElement(n.Provider,{store:_},t.default.createElement(p,r.__assign({},e)))}}));
//# sourceMappingURL=retrieval_success_home_component.min.js-vflI5uBHs.map