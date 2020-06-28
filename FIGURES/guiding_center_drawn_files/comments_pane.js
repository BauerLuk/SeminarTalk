define(["require","exports","tslib","react","react-redux","modules/clean/account/email","modules/clean/account/email_verify_reasons","modules/clean/react/comments2/data/api","modules/clean/react/css","classnames","modules/core/i18n","modules/clean/auth/login_or_register/types","external/lodash","comments2/components/comment","comments2/components/comment_editor","comments2/components/comment_stream","comments2/components/comment_stream/comment_stream_error","comments2/components/coachmark_location","comments2/components/utils/guest_utils","modules/clean/react/comments2/actions_adapters/index","modules/clean/react/comments2/components/coachmark","modules/clean/react/comments2/components/sidebar_listener","modules/clean/react/comments2/components/util","modules/clean/react/comments2/util","modules/clean/react/comments2/data/logger","modules/clean/react/comments2/data/types","modules/clean/react/comments2/transforms","modules/clean/react/comments2/data/actions","modules/clean/react/file_viewer/data/selectors","modules/clean/react/comments2/data/selectors","modules/clean/react/comments2/data/perf_util","modules/clean/redux/types","modules/clean/react/comments2/data/mentions_api","modules/clean/previews/constants","modules/clean/react/comments2/components/comments_translations","modules/clean/react/comments2/components/tooltips","modules/clean/sharing/actions/sharing_actions"],(function(e,t,n,o,r,a,s,i,m,c,l,d,u,p,g,f,h,_,v,C,b,w,y,E,T,M,S,P,I,A,O,k,D,N,R,x,V){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=n.__importDefault(o),r=n.__importStar(r),s=n.__importStar(s),c=n.__importDefault(c),u=n.__importStar(u),T=n.__importStar(T),A=n.__importStar(A),O=n.__importStar(O);var U=["image_preview_surface","document_preview_surface","how_to_at_mention_comments_pane_surface"];function F(e,t){return void 0===t&&(t=1),e===N.PreviewType.SsrDoc?{type:"document",regionType:"rectangle",regions:[n.__assign({page:t},E.createFullRectangle())]}:{type:"image",region:E.createFullRectangle()}}function L(e){var t=e.currentPageIndex,r=void 0===t?0:t,a=e.disabledTimeCodeTooltipComponent,s=e.playerCurrentTime,i=void 0===s?0:s,m=e.pendingNumberedAnnotation,c=e.previewType;if(c===N.PreviewType.Audio||c===N.PreviewType.Video){var l=c===N.PreviewType.Audio?"audio":"video";return o.default.createElement(g.TimeCodedCommentEditor,n.__assign({},e,{pendingAnnotation:{type:l,time:i},tooltipComponent:a}))}return c===N.PreviewType.SsrDoc||c===N.PreviewType.Image?o.default.createElement(g.NumberedCommentEditor,n.__assign({},e,{defaultAnnotation:F(c,r+1),pendingAnnotation:m})):o.default.createElement(g.CommentEditor,n.__assign({},e))}t.createDefaultNumberedAnnotation=F;var q=(function(r){function i(t){var i=r.call(this,t)||this;return i.mentionsQueryId=0,i.onCommentStreamRef=function(e){return i.commentStream=e},i.updateMentionsMatches=function(e){i.setState({mentionsMatches:e})},i.logMentionsQueryCompletedPerf=function(e){var t=O.mentionsQueryCompleted();i.props.dispatch(P.Actions.logPerfEvent(t,e))},i.reloadComments=function(){i.props.dispatch(P.Actions.listComments(!0))},i.onMentionsQueryUpdated=function(e){if(e){var t=++i.mentionsQueryId;i.mentionsApi.query(e,i.updateMentionsMatches,O.withTiming(i.updateMentionsMatches,(function(e){i.mentionsQueryId===t&&i.logMentionsQueryCompletedPerf(e)})))}else""===e&&i.updateMentionsMatches(i.mentionsApi.getMatchesWithStarterSuggestions());i.props.dispatch(P.Actions.markOnboardedIfUnmarked("how_to_at_mention_comments_pane_surface"))},i.onPostSuccess=function(e,t){e.metadata&&e.metadata.some((function(e){return"mention"===e.type}))&&V.SharingActions.listMembers({user:t,contentId:i.props.stream.id,isFolder:!1,url:i.props.stream.linkUrl,includeSeenState:!1})},i.showEmailVerifyModal=function(e){if(!i.props.hasShownAnyModalVariant||e!==M.ShowModalReason.EditorFocus){i.props.dispatch(P.Actions.markModalVariantShown(M.ModalVariant.EmailVerifyModal)),T.logEvent("email_verify_modal_shown",{stream:i.props.stream});a.EmailVerification.get_for_user(i.props.viewer).show_verify_modal((function(){T.logEvent("email_verify_flow_completed",{stream:i.props.stream})}),s.ADD_COMMENT)}},i.showSignUpModal=function(t){if(!i.props.hasShownAnyModalVariant||t!==M.ShowModalReason.EditorFocus){i.props.dispatch(P.Actions.markModalVariantShown(M.ModalVariant.SignUpModal)),n.__awaiter(i,void 0,void 0,(function(){var t,r,a,s,i=this;return n.__generator(this,(function(m){switch(m.label){case 0:return[4,Promise.all([new Promise((function(t,n){e(["modules/clean/react/modal"],t,n)})).then(n.__importStar),new Promise((function(t,n){e(["modules/clean/auth/login_or_register/modal"],t,n)})).then(n.__importStar),new Promise((function(t,n){e(["modules/core/browser"],t,n)})).then(n.__importStar)])];case 1:return t=m.sent(),r=t[0].Modal,a=t[1].LoginOrRegisterModal,s=t[2],T.logEvent("sign_up_modal_shown",{stream:this.props.stream}),r.showInstance(o.default.createElement(a,{commentParams:{stream:this.props.stream,variant:d.CommentTextVariant.POST},downloadAction:null,id:"shared-link-default-comments-signup-modal",kind:d.LoginOrRegisterKind.COMMENT,onAuthenticateSuccess:function(){return s.reload()},onCancel:function(){return T.logEvent("sign_up_modal_dismissed",{stream:i.props.stream})},signup_tag:"comments_shmodel_modal_register",encryptionOptions:this.props.encryptionOptions})),[2]}}))}))}},i.dismissImagePreviewSurfaceOnboarding=function(){i.dismissOnboarding(),i.markOnboarded("image_preview_surface")},i.dismissDocumentPreviewSurfaceOnboarding=function(){i.dismissOnboarding(),i.markOnboarded("document_preview_surface")},i.dismissHowToAtMentionOnoarding=function(){i.dismissOnboarding(),i.markOnboarded("how_to_at_mention_comments_pane_surface")},i.createComment=function(e){switch(i.props.previewType){case N.PreviewType.Video:case N.PreviewType.Audio:return o.default.createElement(p.TimeCodedComment,n.__assign({},e,{playerIntegrationEnabled:i.props.playerIntegrationEnabled}));case N.PreviewType.Image:case N.PreviewType.SsrDoc:return o.default.createElement(p.NumberedComment,n.__assign({},e));default:return o.default.createElement(p.Comment,n.__assign({},e))}},i.createEditor=function(e){var t=i.props,r=t.currentPageIndex,a=t.pendingNumberedAnnotation,s=t.playerCurrentTime,m=t.playerIntegrationEnabled,c=t.previewType,l=m?"target-annotation":"target-mention";return o.default.createElement(g.CoachMarkContainer,{className:l},o.default.createElement(L,n.__assign({},e,{disabledTimeCodeTooltipComponent:m?void 0:i.createDisabledTimeCodeTooltip,pendingNumberedAnnotation:a,currentPageIndex:r,playerIntegrationEnabled:m,playerCurrentTime:s,previewType:c})))},i.createDisabledTimeCodeTooltip=function(e){return o.default.createElement(x.DisabledTimeCodeTooltip,n.__assign({},e,{onClick:i.onDisabledTooltipLearnMoreClick,onShow:i.onDisabledTooltipShow}))},i.onDisabledTooltipLearnMoreClick=function(){return T.logEvent("time_based_tooltip_learn_more_click",{stream:i.props.stream})},i.onDisabledTooltipShow=function(){return T.logEvent("time_based_tooltip_learn_more_view",{stream:i.props.stream})},i.markOnboarded=function(e){i.props.dispatch(P.Actions.markOnboarded(e))},i.dismissOnboarding=function(){i.props.dispatch(P.Actions.dismissOnboarding(null))},i.mentionsApi=D.mentionsApi(t.viewer),i.state={mentionsMatches:i.mentionsApi.cache},i}return n.__extends(i,r),i.prototype.componentDidMount=function(){var e=this.props,t=e.dispatch,n=e.showOnboarding,o=e.perfEvents,r=e.stream,a=+new Date;T.logEvent("show_comments",{stream:r}),t(P.Actions.logSimplePerfEvent("stream_displayed_ms",a-(o.listCompleteTime||0))),t(P.Actions.logSimplePerfEvent("comment_editor_tti_ms",a-(o.setContextTime||0))),n&&T.logEvent("sidebar_onboarding_shown",{stream:r})},i.prototype.componentDidUpdate=function(e){var t=e.requestEditorFocus,n=e.showOnboarding,o=this.props,r=o.showOnboarding,a=o.dispatch,s=o.requestEditorFocus,i=o.stream;!n&&r&&T.logEvent("sidebar_onboarding_shown",{stream:i}),!t&&s&&(this.commentStream.focusPrimaryEditor(),a(P.Actions.fulfillEditorFocusRequest()))},Object.defineProperty(i.prototype,"onboardingKeysToMarkOnThreadCreation",{get:function(){return u.difference(this.props.relevantOnboardingKeys,U)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"imagePdfCoachmarkData",{get:function(){var e=this,t=this.props,r=t.showOnboarding,a=t.relevantOnboardingKeys,s=l.intl.formatMessage({id:"RcMKbk",defaultMessage:"Animation of annotating a file"}),i=r&&u.head(u.intersection(U,a)),m={title:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o.default.createElement("h2",{className:"sc-coachmark-title"},e)},body:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o.default.createElement("p",null,e)}};switch(i){case"document_preview_surface":return{location:_.CoachmarkLocations.BELOW_COMMENT_STREAM,component:function(t){return o.default.createElement(b.CommentsCoachmark,n.__assign({},t,{overrideArrowPlacement:"left",onClose:e.dismissDocumentPreviewSurfaceOnboarding}),o.default.createElement(y.Comments2OnboardingImage,{fileNamePrefix:"02_Comments2_PDFComments","aria-label":s}),l.intl.formatMessage({id:"W4E6Ua",defaultMessage:"<title>Call it out</title> <body>Select an area on the file to highlight and comment.</body>"},m))}};case"image_preview_surface":return{location:_.CoachmarkLocations.BELOW_COMMENT_STREAM,component:function(t){return o.default.createElement(b.CommentsCoachmark,n.__assign({},t,{overrideArrowPlacement:"left",onClose:e.dismissImagePreviewSurfaceOnboarding}),o.default.createElement(y.Comments2OnboardingImage,{fileNamePrefix:"01_Comments2_ImageComment","aria-label":s}),l.intl.formatMessage({id:"mTb5Iy",defaultMessage:"<title>Call it out</title> <body>Select an area on the image to highlight and comment.</body>"},m))}};case"how_to_at_mention_comments_pane_surface":return{location:_.CoachmarkLocations.ABOVE_COMMENT_STREAM,target:_.CoachmarkTargets.MAIN_EDITOR_MENTION_BUTTON,component:function(t){return o.default.createElement(b.CommentsCoachmark,n.__assign({},t,{onClose:e.dismissHowToAtMentionOnoarding}),o.default.createElement(y.Comments2OnboardingImage,{fileNamePrefix:"03_Comments_AtMentions_v1","aria-label":l.intl.formatMessage({id:"x9iEdt",defaultMessage:"Animation of mentioning a user"})}),l.intl.formatMessage({id:"lNHbI1",defaultMessage:"<title>Get the feedback you need</title> <body>Tag someone to work together on this file.</body>"},m))}};default:return}},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"actionsAdapter",{get:function(){var e=this.props.fileSidebarDispatch;return C.createActionsAdapter(this.props,e,this.onboardingKeysToMarkOnThreadCreation,this.onMentionsQueryUpdated,this.onPostSuccess,this.showSignUpModal,this.showEmailVerifyModal)},enumerable:!0,configurable:!0}),i.prototype.stickerSetsToStickerPacks=function(e){return e.map((function(e){return{url:e.url,stickers:e.stickers,description:e.description,name:e.name,id:e.set_id}}))},i.prototype.render=function(){var e,n=this.props,r=n.activeThreadId,a=n.collapsed,s=n.dispatch,i=n.editorIsEmpty,m=n.focusedThreadId,d=n.hoverThreadId,u=n.isMobile,p=n.showResolved,g=n.showCommentsError,_=n.showCommentsErrorIsPermissionsProblem,C=n.stream.id,b=n.thirdPartySource,y=n.threads,T=n.viewer,M=n.previewType,P=n.streamSettings,I=n.stickers,A=n.upsellTooltipVariant,O=n.suggestedComments,k=y.filter((function(e){return p||!e.resolvedInfo}));e=T?S.dbxUserToIUser(T):v.getGuestIUser();var D=M===N.PreviewType.Image||M===N.PreviewType.SsrDoc,x=g&&(_?o.default.createElement(h.CommentStreamPermissionsError,{intl:l.intl}):o.default.createElement(h.CommentStreamError,{intl:l.intl,onClickRetry:this.reloadComments}));return o.default.createElement("div",{className:c.default("comments-pane-wrapper",{"no-comment":u&&0===k.length,"comments-pane-wrapper-show-resolved":p,"comments-pane-wrapper-hide-resolved":!p,"comments-pane-wrapper-all-changes-saved":!y.some((function(e){return!!e.pending})),"comments-upsell-eligible":!!A,"comments-upsell-ineligible":!A})},u&&o.default.createElement(t.MobileCommentsTitle,{commentCount:k.length}),x,o.default.createElement(f.CommentStream,{ref:this.onCommentStreamRef,id:C,actionsAdapter:this.actionsAdapter,commentComponent:this.createComment,editorComponent:this.createEditor,enabled:!0,isMobile:u,mentionsMatches:this.state.mentionsMatches,settings:P,threads:k,user:e,activeThreadID:r,focusedThreadID:m,hoverThreadID:d,showUnreadPill:E.canShowUnreadPill(),localization:R.commentsMasterLocalization,collapsed:a,coachmarkData:this.imagePdfCoachmarkData,showRevisionInfo:D,stickerPacks:I&&this.stickerSetsToStickerPacks(I),thirdPartySource:b,suggestedComments:O}),o.default.createElement(w.SidebarListener,{dispatch:s,editorIsEmpty:i,stream:this.props.stream}))},i})(o.default.Component);t.CommentsPaneComponent=q,t.MobileCommentsTitle=function(e){return o.default.createElement("div",{className:"comments-pane-wrapper__mobile-comments-title"},l.intl.formatMessage({id:"tcjpY3",defaultMessage:"Comments · {count}"},{count:e.commentCount}))};var K=r.connect((function(e){var t=A.getContext(e),n=t.stream,o=t.viewer,r=A.getData(e),a=r.perfEvents,s=r.upsellTooltipVariant,m=A.getListCommentsError(e),c=m instanceof i.Comments2Error&&m.code===i.ErrorCode.PERMISSION_DENIED;return{activeThreadId:A.getActivatedThreadId(e),editorIsEmpty:A.getEditorIsEmpty(e),focusedThreadId:A.getFocusedThreadId(e),hasShownAnyModalVariant:A.getHasShownAnyModalVariant(e),hoverThreadId:A.getHoverThreadId(e),playerCurrentTime:A.getPlayerCurrentTime(e),playerIntegrationEnabled:A.getIsPlayerIntegrationEnabled(e),relevantOnboardingKeys:A.getUnmarkedOnboardingKeysRelevantToCurrentFile(e),showOnboarding:A.getShowOnboardingOnCommentsPane(e),showResolved:A.getShowResolved(e),pendingNumberedAnnotation:A.getPendingNumberedAnnotation(e),previewType:A.getPreviewTypeForCurrentFile(e),currentPageIndex:I.getCurrentPageIndex(e),showCommentsError:A.getStatuses(e)[P.ActionTypes.ListComments.name]===k.ApiClientStatus.Error,showCommentsErrorIsPermissionsProblem:c,stream:n,thirdPartySource:A.getThirdPartySource(e),threads:A.getThreads(e),viewer:o,upsellTooltipVariant:s,perfEvents:a,requestEditorFocus:A.getIsEditorFocusRequested(e),streamSettings:A.getStreamSettings(e),stickers:A.getStickers(e)}}))(q);t.CommentsPane=m.requireCssWithComponent(K,["/static/js/comments2/index.web-vflS3-E6r.css","/static/css/comments2-vflmLfLER.css","/static/css/snackbar-vfl8chDI1.css"])}));
//# sourceMappingURL=comments_pane.min.js-vflZTqYXr.map