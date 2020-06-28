define(["require","exports","tslib","react","spectrum/button","spectrum/modal","modules/clean/ajax","modules/clean/teams/constants","modules/clean/analytics","modules/clean/components/loading_indicator","modules/clean/contacts/contact","modules/clean/contacts/tokenizer","modules/clean/contacts/types","modules/clean/dbmodal_stack","react-modal","modules/clean/loggers/join_flow_logger","modules/clean/react/payments/update_individual_billing/update_individual_store_creator","modules/clean/payments/skus/subscription_diff","modules/clean/payments/skus/subscription_service","modules/clean/payments/skus/subscription_status","modules/clean/teams/admin/widgets/update_billing_modal/update_billing_modal_loader","modules/clean/react/css","modules/clean/react/invite/invite_and_buy_text","modules/clean/react/modal","modules/clean/stormcrow/experiment","modules/clean/viewer","modules/core/browser","modules/core/browser_detection","modules/core/html","modules/core/i18n","modules/core/notify","modules/clean/user_education/user_education_client","external/lodash","dig-components/typography","modules/clean/ux_analytics_modal_tracking","modules/clean/ux_analytics_utils","modules/clean/react/payments/common/adapters/setup_cash","modules/clean/teams/admin/widgets/invite_modal/invite_link","modules/clean/teams/admin/api/admin_console_api_client","modules/clean/teams/admin/widgets/invite_modal/invite_modal_first_task/invite_modal_first_task","modules/clean/teams/admin/widgets/invite_modal/invite_modal_groups","modules/clean/react/member_sidebar_actions","modules/clean/teams/admin/widgets/invite_modal/invite_modal_member_data","modules/clean/react/table","modules/clean/growth/smb_funnel/smb_funnel_logger","modules/clean/react/admin/teams/onboarding/web/constants","modules/clean/api_v2/user_client","modules/clean/teams/admin/widgets/invite_modal/suggested_members","modules/clean/teams/admin/widgets/member_send_invite/member_invite_disclosure","modules/core/uri"],(function(e,t,i,n,s,a,o,r,l,m,u,c,d,g,_,p,v,f,h,b,S,M,L,I,y,A,w,k,E,T,C,x,P,N,O,F,R,D,B,W,V,q,j,z,U,G,Y,J,K,X){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=i.__importDefault(n),o=i.__importStar(o),d=i.__importDefault(d),_=i.__importDefault(_),w=i.__importStar(w),k=i.__importStar(k),P=i.__importStar(P),B=i.__importDefault(B),_.default.setAppElement(document.body);var Q=(function(e){function _(a){var _=e.call(this,a)||this;if(_.closeModal=function(e){var t=_.props.onDismiss;window.setTimeout((function(){x.UEClient.sendEvent("InviteModal","Hide")}),2500),t?null==t||t(_.state.memberList):I.Modal.close(),e&&e(_.state.memberList)},_.onBillingClick=function(e){e.stopPropagation(),e.preventDefault();var s=_.state,a=s.emails,o=s.inviteMessage,r=function(){I.Modal.showInstance(n.default.createElement(t.InviteModal,i.__assign({},_.props,{emails:a,inviteMessage:o,onDismiss:void 0}))),g.DBModalStack.unregister(v.BILLING_INFO_UPDATED,r)};_.closeModal(),g.DBModalStack.register(v.BILLING_INFO_UPDATED,r),S.UpdateBillingModalLoader.showInstance(r)},_.onSubServiceResponse=function(e,t,i,n){_.setState({emails:t,isMakingTransitionInfoRequest:!1,isPreparingForSubmit:!1,numRemainingLicenses:i-n-t.length,subChangePlan:e})},_.onContactsChanged=function(e,t){var i=_.state,n=i.isReseller,s=i.isSelfServe,a=i.numProvisionedLicenses,o=i.isLoading,r=i.emails,l=i.sentEmails;if(!o){_.setState({isEmailTextInputted:e.length>0||t.length>0});var m=e.map((function(e){return e.email})).filter((function(e){return void 0!==e})),u={emails:m,isPreparingForSubmit:!1,numRemainingLicenses:_.totalLicenses-a-m.length-l.length};!n&&s&&m.length!==r.length&&m.length+a>_.totalLicenses?_.updateSubChangePlan(m.length+a,u):_.setState(u)}},_.onMessageChanged=function(e){_.setState({inviteMessage:e.target.value})},_.sendInviteAction=function(){if(_.contactsTokenizer){var e=_.state.emails,t=_.contactsTokenizer.getContacts();e.length!==t.length?_.setState({isPreparingForSubmit:!0},(function(){_.contactsTokenizer.tokenizeAll()})):_.sendMemberInvites()}else _.sendMemberInvites()},_.onPrimaryActionClick=function(){!_.props.shouldShowInviteLink||_.growthActSmbFirstTask.isActive?_.sendInviteAction():_.shouldRenderSendInviteAction?_.sendInviteAction():_.closeModal()},_.onSecondaryActionClick=function(){var e=_.props.showSuggestionsInImm,t=_.state,n=t.emails,s=t.suggestedMembers,a=t.suggestedMembersSuggestId,o=t.numRemainingLicenses,r={};if(e&&s){var m=P.filter(s,(function(e){return-1!==n.indexOf(e.email)}));r.total_recommendations=s.length,r.num_selected_recommendations=m.length,r.suggest_id=a,r.num_licenses_available=o}l.TeamsWebActionsLogger.log("invite_member_open_cancel",i.__assign(i.__assign(i.__assign({},_.defaultLoggingExtras),r),{added_message:_.hasInviteMessage,invite_count:_.inviteCount,invite_or_buy:_.inviteOrBuyText})),_.closeModal()},_.logSmbFunnel=function(e,t){void 0===t&&(t={}),U.SMBFunnelLogger.log(e,i.__assign(i.__assign({},t),{first_task:String(_.growthActSmbFirstTask.isActive),groups_first:String(_.growthActSmbGroupsFirst.isActive),mv_invites:String(_.growthActSmbMWInvites.isActive)}))},_.sendMemberInvites=function(){var e=_.state,t=e.emails,n=e.groupIds,s=e.inviteMessage,a=e.numRemainingLicenses,m=e.subChangePlan,u=e.sentEmails,c=e.memberList,d=e.suggestedMembers,g=_.props.showSuggestionsInImm,v=a<0?-1*a:0,f={charge_for_new_licenses:!0,custom_message:s,emails:t,groups:n,expected_overage:String(v),expected_price:"0",extra:JSON.stringify(i.__assign({},_.defaultLoggingExtras)),url:w.get_uri().path,invite_source:p.InviteSource.IMM_WEB,platform:p.Platform.WEB};if(m&&m.tvm&&(f.expected_price=m.tvm.transition.expected_price),l.TeamsWebActionsLogger.log("invite_member_open_invite_click",i.__assign(i.__assign({},_.defaultLoggingExtras),{added_message:_.hasInviteMessage,expected_price:f.expected_price,invite_count:_.inviteCount,invite_or_buy:_.inviteOrBuyText,licenses_to_add:v})),0===t.length)return C.Notify.error(T.intl.formatMessage({id:"E/vNT2",defaultMessage:"You haven’t included anyone to invite! Please invite at least one person."})),void l.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},_.defaultLoggingExtras),{client:!0,error_reason:"no_invites",invite_or_buy:_.inviteOrBuyText}));for(var h=0,b=t;h<b.length;h++){var S=b[h].toLowerCase().split("@",2)[1];if(-1!==["getdropbox.com","dropboxmail.com"].indexOf(S))return C.Notify.error(T.intl.formatMessage({id:"ffW3Dm",defaultMessage:"You are not allowed to invite a member with a {domain} email."},{domain:S})),void l.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},_.defaultLoggingExtras),{client:!0,error_reason:"invite with dropbox domain",invite_or_buy:_.inviteOrBuyText}))}_.props.shouldNotToastOnSuccess||C.Notify.success(T.intl.formatMessage({id:"uBRRiV",defaultMessage:"Submitting..."})),_.setState({isSubmitting:!0},(function(){var e=Date.now(),n=A.Viewer.get_viewer().work_user;o.FormWebRequest({url:"/account/team/add_users",data:f,subject_user:n,success:function(n){var s=JSON.parse(n);if(C.Notify.clear(),_.setState({isSubmitting:!1}),l.TeamsWebActionsLogger.log("team_admin_add_member_submit_time",i.__assign(i.__assign({},_.defaultLoggingExtras),{time_ms:Date.now()-e})),s){var m=s.users,p=Object.keys(m),v=p.length,f=p.map((function(e){return m[e].email})),h=t.filter((function(e){return-1===f.indexOf(e)}));if(c.length&&(_.growthActSmbGroupsFirst.isActive||_.growthActSmbFirstTask.isActive)){var b=c[0],S=c.slice(1),M=p.map((function(e){return{admin_role:r.ADMIN_ROLE.NONE,initials:m[e].email[0].toUpperCase(),photo_url:null,display_name:m[e].email,email:m[e].email,team_join_state:q.JoinState.PENDING,user_id:m[e].id}}));_.setState({numRemainingLicenses:a-u.length,sentEmails:u.concat(M),emails:[],memberList:i.__spreadArrays([b],M,S)},(function(){_.growthActSmbGroupsFirst.isActive?_.closeModal():_.growthActSmbFirstTask.isActive&&_.loadMemberActionsData()}))}else _.closeModal((function(){_.props.onInviteSuccess&&_.props.onInviteSuccess(s.num_invited,a<0?-1*a:0)}));if(l.TeamsWebActionsLogger.log("invite_member_open_invite_success",i.__assign(i.__assign({},_.defaultLoggingExtras),{added_message:_.hasInviteMessage,invite_count:_.inviteCount,invite_or_buy:_.inviteOrBuyText,members_length:c.length})),_.logSmbFunnel(G.AMPMetrics.ACTIVATION_IMM_ADD_MEMBERS,{success:"true",numInvited:String(v),membersLength:String(c.length)}),g&&d)for(var L=0,I=P.filter(d,(function(e){return-1!==t.indexOf(e.email)}));L<I.length;L++){var y=I[L];l.TeamsWebActionsLogger.log("admin_invite_recommended_contact",{user_id:y.user_id,team_type:y.team_type,prediction_id:y.prediction_id,num_licenses_available:a,origin:"imm_recommendation",inviteModal:!0})}_.props.shouldNotToastOnSuccess||(1===v?C.Notify.success(T.intl.formatMessage({id:"klqzm6",defaultMessage:"Invited {user_email}."},{user_email:m[p[0]].email})):v>1?C.Notify.success(T.intl.formatMessage({id:"A+luT2",defaultMessage:"Invited {user_count} people."},{user_count:v})):C.Notify.error(T.intl.formatMessage({id:"9fLrh/",defaultMessage:"{count, plural, one{Skipped {count} person who is already a member of the team.} other{Skipped {count} people who are already members of the team.}}"},{count:h.length}))),o.SilentBackgroundRequest({url:"/account/team/ajax_log_invites",data:{invitations:v}})}else _.props.onInviteError&&_.props.onInviteError(),C.Notify.error(T.intl.formatMessage({id:"bLA3rA",defaultMessage:"There was a problem completing this request."})),_.logSmbFunnel(G.AMPMetrics.ACTIVATION_IMM_ADD_MEMBERS,{success:"false",errorReason:"response_empty"})},error:function(t,n,s){C.Notify.clear(),_.setState({isSubmitting:!1}),l.TeamsWebActionsLogger.log("team_admin_add_member_submit_time",i.__assign(i.__assign({},_.defaultLoggingExtras),{time_ms:Date.now()-e,error:!0})),_.logSmbFunnel(G.AMPMetrics.ACTIVATION_IMM_ADD_MEMBERS,{success:"false",errorReason:"request_error"});var a=T.intl.formatMessage({id:"/GekxI",defaultMessage:"There was a problem completing this request."});if(s)try{var o=JSON.parse(s).emails,r=void 0===o?{}:o;r.message_text&&(a=r.message_text,l.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},_.defaultLoggingExtras),{client:!0,error_reason:"form_input_invalid",invite_or_buy:_.inviteOrBuyText})))}catch(e){a=s}else l.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},_.defaultLoggingExtras),{client:!0,error_reason:"problem_request",invite_or_buy:_.inviteOrBuyText}));_.props.onInviteError&&_.props.onInviteError(),C.Notify.error(new E.HTML(a))}})}))},_.renderPrimaryAction=function(e,t){var i=_.state,a=i.isReseller,o=i.numRemainingLicenses,r=i.isSubmitting,l=i.isSelfServe,u=i.memberList,c=_.props.isRequestSuggestion,d=_.isInviteButtonDisabled,g=T.intl.formatMessage({id:"yzFoXG",defaultMessage:"Send invites"});return o<0&&!a&&!_.isNCCT&&l&&!u.length&&(g=T.intl.formatMessage({id:"dljqTf",defaultMessage:"Invite and buy"})),!0===c&&(g=T.intl.formatMessage({id:"597Ndb",defaultMessage:"Confirm"})),!_.props.shouldShowInviteLink||_.shouldRenderSendInviteAction||_.growthActSmbFirstTask.isActive||(g=T.intl.formatMessage({id:"XEaqiT",defaultMessage:"Done"}),d=!1),n.default.createElement(s.Button,{className:"invite-modal__send-invites",ref:t,variant:"primary",disabled:d,onClick:e},n.default.createElement("span",{className:"modal-button-wrapper"},g,r&&n.default.createElement("span",{className:"loading-indicator"},n.default.createElement(m.LoadingIndicator,{style:m.LoadingIndicator.LoadingIndicatorStyle.SPINNER}))))},_.renderSecondaryAction=function(e){var t=T.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"});return n.default.createElement(s.Button,{variant:"secondary",onClick:e},t)},_.contactFilter=function(e){return e.type===d.default.EMAIL},_.renderContactsTokenizer=function(e,t,i){if(void 0===t&&(t=T.intl.formatMessage({id:"Le5Iez",defaultMessage:"Name or email"})),void 0===i&&(i=8),e){var s,a=_.state,o=a.isLoading;return s=a.emails.map((function(e){return new u.Contact({name:e,email:e,type:d.default.EMAIL,invalid:!1,on_team:!1,pending:!0,query:e})})),n.default.createElement("div",{className:"invite-modal__tokenizer"},n.default.createElement(c.ContactsTokenizer,{customClass:o?"disabled":"",customContactFilter:_.contactFilter,disabled:o,onContentsChange:_.onContactsChanged,placeholder:t,populatedInputData:{tokens:s,value:""},ref:function(e){_.contactsTokenizer=e},showContactImport:!1,tokenSpacing:i,user:e,listHeight:81,tokenizeOnOutOfFocus:!0}))}},_.checkboxCallback=function(e,t){var i=_.state,n=i.emails,s=i.isReseller,a=i.numProvisionedLicenses,o=i.sentEmails,r=i.suggestedMembers,m=i.numRemainingLicenses,u=P.find(r,(function(e){return e.email===t})),c=n.slice();e?(c.push(t),l.TeamsWebActionsLogger.log("admin_select_recommended_contact",{user_id:u.user_id,team_type:u.team_type,prediction_id:u.prediction_id,num_licenses_available:m,origin:"imm_recommendation"})):(c=c.filter((function(e){return e!==t})),l.TeamsWebActionsLogger.log("admin_deselect_recommended_contact",{user_id:u.user_id,team_type:u.team_type,prediction_id:u.prediction_id,num_licenses_available:m,origin:"imm_recommendation"}));var d={emails:c,isPreparingForSubmit:!1,numRemainingLicenses:_.totalLicenses-a-c.length-o.length};!s&&c.length+a>_.totalLicenses?_.updateSubChangePlan(c.length+a,d):_.setState(d)},_.closeAndOpenCSVImportModal=function(){var e=_.props,t=e.onCSVImport,i=e.onDismiss;l.TeamsWebActionsLogger.log("import_csv_modal_open",_.defaultLoggingExtras),t&&(_.closeModal(i),t())},_.subService=new h.SubscriptionService,_.apiClient=new B.default,_.state={emails:a.emails||[],groupIds:[],inviteMessage:a.inviteMessage||"",isEmailTextInputted:!!a.emails&&a.emails.length>0||!1,isLoading:!0,isMakingTransitionInfoRequest:!1,isPreparingForSubmit:!1,isSubmitting:!1,numProvisionedLicenses:0,numRemainingLicenses:0,showInviteLink:!1,showSidebar:!!a.memberList&&1===a.memberList.length&&!_.growthActSmbMWInvites.isActive,memberList:a.memberList||[],sentEmails:[]},_.growthActSmbFirstTask.isActive&&a.memberList&&_.loadMemberActionsData(),_.defaultLoggingExtras={is_client:!1,origin:_.props.origin},_.props.actionTrigger){_.defaultLoggingExtras.action_trigger=_.props.actionTrigger,_.defaultLoggingExtras.module_name="first_task_imm",_.defaultLoggingExtras.framework="team_setup_essential",_.defaultLoggingExtras.mobile_web=k.is_supported_mobile_browser();var f=_.defaultLoggingExtras.mobile_web?U.Platform.MOBILE_WEB:U.Platform.WEB;U.SMBFunnelLogger.setCommonTags({platform:f})}return _}return i.__extends(_,e),Object.defineProperty(_.prototype,"isInviteButtonDisabled",{get:function(){var e=this.state,t=e.emails,i=e.isLoading,n=e.isMakingTransitionInfoRequest,s=e.isReseller,a=e.isSelfServe,o=e.isSubmitting,r=e.numRemainingLicenses;return i||n||o||s&&r<0||!a&&r<0||0===t.length&&this.contactsTokenizer&&0===this.contactsTokenizer.getInputValue().length},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"hasInviteMessage",{get:function(){return Boolean(this.state.inviteMessage)},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"inviteCount",{get:function(){return this.state.emails.length},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"inviteOrBuyText",{get:function(){return this.state.numRemainingLicenses<0?"invite_buy":"send_invites"},enumerable:!0,configurable:!0}),_.prototype.relaunchFirstTaskModal=function(e){var t=this.props.onDismiss;t&&t(e,!0)},_.prototype.loadMemberActionsData=function(){var e=this,t=this.props.evhMaxDays,n=this.state.memberList,s={is_current:!0,limit:n.length,offset:0,sort_column:"user_type",sort_direction:z.TableSortDir.ASC};o.WebRequest({url:"/team/admin/members/list_v2",data:s,subject_user:A.Viewer.get_viewer().work_user,success:function(s){var a=new Date((new Date).setDate(t||0)).toLocaleDateString(),o=JSON.parse(s).members,r={};o.forEach((function(t){var s=t.user_id;r[s]=i.__assign(i.__assign({},j.getMemberInviteActionsProperties(t,a)),{onClose:function(){e.relaunchFirstTaskModal(n)},deleteCallback:function(){for(var t=0;t<n.length&&n[t].user_id!==s;t++);n.splice(t,1),e.relaunchFirstTaskModal(n)},roleUpdateCallback:function(t){for(var a=0;a<n.length;a++)if(n[a].user_id===s){var o=i.__assign({},n[a]);o.admin_role=t,n[a]=o}e.setState({memberList:n})}})}),{}),e.setState({memberActionsData:r})}})},_.prototype.componentDidUpdate=function(e,t){var i=this.state,n=i.emails,s=i.isPreparingForSubmit;i.numRemainingLicenses>=n.length&&t.isPreparingForSubmit&&!s&&this.sendMemberInvites()},_.prototype.componentWillUnmount=function(){F.dispatchModalClosed()},_.prototype.componentDidMount=function(){var e=this,t=this.props,n=t.onDismiss,s=t.showSuggestionsInImm;o.WebRequest({url:"/team/admin/members/invite_members_modal_view_model",subject_user:A.Viewer.get_viewer().work_user,success:function(t){var n,a,o=JSON.parse(t),r=o.isReseller,m=o.numActiveTeamMembers,u=o.provisionedLicenses,c=o.currencyToFormatMap,d=o.localeNumberFormat,g=o.showMemberInviteDisclaimer,_=void 0===o.isSelfServe||o.isSelfServe;if(r){var p=o.resellerContact,v=o.serializedResellerSubSkuSet;n=(a=v.licenseSkus[0].quantity)-u,e.setState({isLoading:!1,isReseller:r,isSelfServe:_,numActiveTeamMembers:m,numProvisionedLicenses:u,numRemainingLicenses:n,resellerContact:p,serializedResellerSubSkuSet:v,showMemberInviteDisclaimer:g},(function(){var t;e.props.shouldShowInviteLink&&(t=e.props.inviteLinkUrl?"ON":"OFF"),l.TeamsWebActionsLogger.log("invite_member_open",i.__assign(i.__assign({},e.defaultLoggingExtras),{invite_or_buy:e.inviteOrBuyText,license_limit:a,num_team_members:m,provisioned_licenses:u,url:w.get_uri().path,link_status:t})),e.setInitialSubChangePlan()}))}else{var f=b.SubscriptionStatus.deserialize(o.serializedSubStatus);n=(a=f.subState.totalLicenses)-u-e.state.emails.length-e.state.sentEmails.length,s&&e.fetchSuggestions(),e.setState({isReseller:r,isSelfServe:_,numActiveTeamMembers:m,numProvisionedLicenses:u,numRemainingLicenses:n,subStatus:f,showMemberInviteDisclaimer:g},(function(){var t;e.props.shouldShowInviteLink&&(t=e.props.inviteLinkUrl?"ON":"OFF"),l.TeamsWebActionsLogger.log("invite_member_open",i.__assign(i.__assign({},e.defaultLoggingExtras),{invite_or_buy:e.inviteOrBuyText,license_limit:a,num_team_members:m,provisioned_licenses:u,url:w.get_uri().path,link_status:t})),e.setInitialSubChangePlan()}))}R.setupCash(d,c),F.dispatchModalOpened()},error:function(t){C.Notify.error(T.intl.formatMessage({id:"C2BKnZ",defaultMessage:"Failed to load modal."})),e.closeModal(n)}})},Object.defineProperty(_.prototype,"totalLicenses",{get:function(){var e=this.state,t=e.isReseller,i=e.serializedResellerSubSkuSet,n=e.subStatus;return t?i.licenseSkus[0].quantity:n?n.subState.totalLicenses:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"viewer",{get:function(){return A.Viewer.get_viewer()},enumerable:!0,configurable:!0}),_.prototype.setInitialSubChangePlan=function(){var e=this.props.emails,t=this.state.numProvisionedLicenses;if(!e)return this.setState({isLoading:!1});e.length+t>this.totalLicenses?this.updateSubChangePlan(e.length+t,{emails:e,numProvisionedLicenses:t,totalLicenses:this.totalLicenses},{isLoading:!1}):this.setState({isLoading:!1})},_.prototype.updateSubChangePlan=function(e,t,n){var s=this;void 0===n&&(n={});var a=f.SubscriptionDiff.fromSubscriptionStatus(this.state.subStatus);a.setTotalLicenses(e),this.setState({isMakingTransitionInfoRequest:!0},(function(){var e=Date.now();s.subService.price(a).then((function(a){var o=t.emails,r=t.totalLicenses,m=t.numProvisionedLicenses;s.onSubServiceResponse(a,o,r,m),P.isEmpty(n)||s.setState(n),l.TeamsWebActionsLogger.log("invite_member_billing_load_time_new_imm",i.__assign(i.__assign({},s.defaultLoggingExtras),{time_ms:Date.now()-e}))}))}))},Object.defineProperty(_.prototype,"shouldRenderSendInviteAction",{get:function(){return this.state.isEmailTextInputted},enumerable:!0,configurable:!0}),_.prototype.renderAltAction=function(e){var t=this.state.numRemainingLicenses;return!this.isNCCT&&t&&t<0?this.renderPricingInformation():null},_.prototype.renderForm=function(){var e=this.state,t=e.inviteMessage,i=e.isLoading,s=e.isEmailTextInputted,a=e.emails,o=e.suggestedMembers,r=this.props,l=r.shouldShowInviteLink,m=r.showSuggestionsInImm,u=m&&o,c=!u&&(!l||s),d=u?T.intl.formatMessage({id:"kO71v2",defaultMessage:"Invite with an email"}):T.intl.formatMessage({id:"KM5lP0",defaultMessage:"Or invite with an email"});return n.default.createElement("form",{className:"invite-modal__form"},l&&n.default.createElement("p",{className:"invite-modal__form_title"},d),this.renderContactsTokenizer(this.viewer.work_user),c&&n.default.createElement("div",null,n.default.createElement("textarea",{className:"invite-modal__message-input",disabled:i,id:"message-input",onChange:this.onMessageChanged,placeholder:T.intl.formatMessage({id:"D4+6Xw",defaultMessage:"Add an optional message"}),value:t}),n.default.createElement("label",{className:"message-input-label",htmlFor:"message-input"},T.intl.formatMessage({id:"N6BsJQ",defaultMessage:"Invite message"}))),m&&n.default.createElement(J.SuggestedMembersCheckboxes,{emails:a,toggleCheckboxCallback:this.checkboxCallback,suggestions:o||[]}))},_.prototype.renderLicensesRemainingText=function(){var e,t=this.state,i=t.emails,s=t.isLoading,a=t.isReseller,o=t.numRemainingLicenses,r=t.resellerContact,l=t.isSelfServe,u=i.length,c=this.props.shouldShowInviteLink;if(s)return n.default.createElement(m.LoadingIndicator,{className:"loading-indicator__licenses",style:m.LoadingIndicator.LoadingIndicatorStyle.SPINNER});if(this.isNCCT)return null;if(0===u)return 0===o?(e=T.intl.formatMessage({id:"Jdo+KG",defaultMessage:"You have no remaining licenses."}),c&&(e=T.intl.formatMessage({id:"ztOAKn",defaultMessage:"You have no licenses available"}))):(e=T.intl.formatMessage({id:"kPEGPd",defaultMessage:"{count, plural, one{You have {count} remaining license.} other{You have {count} remaining licenses.}}"},{count:o}),c&&(e=T.intl.formatMessage({id:"1wqEdn",defaultMessage:"{count, plural, one{You have {count} available license.} other{You have {count} available licenses.}}"},{count:o}))),e;if(o<0)return e=a&&r?r.name&&r.phone?T.intl.formatMessage({id:"MahXPc",defaultMessage:"{count, plural, one{You need more licenses for this invitation. Contact {name} at {phone} to add more.} other{You need more licenses for these invitations. Contact {name} at {phone} to add more.}}"},{count:u,name:r.name,phone:r.phone}):T.intl.formatMessage({id:"MeCUMG",defaultMessage:"{count, plural, one{You need more licenses for this invitation. Contact your reseller to add more.} other{You need more licenses for these invitations. Contact your reseller to add more.}}"},{count:u}):l?T.intl.formatMessage({id:"bSWJau",defaultMessage:"{count, plural, one{You need more licenses for this invitation.} other{You need more licenses for these invitations.}}"},{count:u}):T.intl.formatMessage({id:"PYe+Gn",defaultMessage:"{count, plural, one{You need more licenses for this invitation. Please contact your account executive to purchase licenses.} other{You need more licenses for these invitations. Please contact your account executive to purchase licenses.}}"},{count:u});var d=T.intl.formatMessage({id:"TyEk+t",defaultMessage:"{count, plural, one{After this invitation} other{After these invitations}}"},{count:u});return e=0===o?T.intl.formatMessage({id:"WOvbOS",defaultMessage:"{invitation_msg}, you’ll have no remaining licenses."},{invitation_msg:d}):T.intl.formatMessage({id:"gTZ9A1",defaultMessage:"{count, plural, one{{invitation_msg}, you’ll have {count} remaining license.} other{{invitation_msg}, you’ll have {count} remaining licenses.}}"},{invitation_msg:d,count:o})},_.prototype.renderPricingInformation=function(){var e=this.state,t=e.numRemainingLicenses,i=e.subChangePlan,s=e.subStatus,a=e.isMakingTransitionInfoRequest,o=this.props.isRequestSuggestion;return s&&i&&i.finalSubState.billingSchedule?a?n.default.createElement("div",{className:!0===o?"invite-modal__invite-and-buy--request-suggestion":"invite-modal__invite-and-buy--email-invite"},n.default.createElement(m.LoadingIndicator,{style:m.LoadingIndicator.LoadingIndicatorStyle.SPINNER})):i.tvm?n.default.createElement("div",{className:!0===o?"invite-modal__invite-and-buy--request-suggestion":"invite-modal__invite-and-buy--email-invite"},n.default.createElement(L.InviteAndBuyText,{className:"invite-modal__invite-and-buy-text u-font-meta",additionalLicenses:-1*t,isTrial:s.isOnTrial,nextBillingDate:s.formattedNextBillingDate,subChangePlan:i}),n.default.createElement("a",{href:"#",className:"invite-modal__update-billing-link",onClick:this.onBillingClick},T.intl.formatMessage({id:"tbFeQQ",defaultMessage:"Update billing"}))):null:null},Object.defineProperty(_.prototype,"isNCCT",{get:function(){var e=this.state.subStatus;return!!e&&(e.isOnTrial&&y.Experiment(this.props.ncctVariant).variantIn("V1","V2","V3","V4","V5","V6","V7","V8","V9","V10","V11","V12","V13"))},enumerable:!0,configurable:!0}),_.prototype.fetchSuggestions=function(){var e=this,t=A.Viewer.get_viewer().work_user;t&&(new Y.UserApiV2Client).ns("team_experience").rpc("teammate_suggestions/list",void 0,{subjectUserId:t.id}).then((function(t){var i=t.recommended_members.members.slice(0,2);l.TeamsWebActionsLogger.log("admin_recommendations_shown_imm",{num_recommendations:i.length,suggest_id:t.suggest_id});for(var n=0,s=i;n<s.length;n++){var a=s[n];l.TeamsWebActionsLogger.log("admin_display_recommended_contact",{user_id:a.user_id,team_type:a.team_type,prediction_id:a.prediction_id,origin:"imm_recommendation"})}e.setState({suggestedMembers:i,suggestedMembersSuggestId:t.suggest_id})}))},Object.defineProperty(_.prototype,"growthActSmbFirstTask",{get:function(){return y.Experiment(this.props.experiments.growthActSmbFirstTask)},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"growthActSmbGroupsFirst",{get:function(){return y.Experiment(this.props.experiments.growthActSmbGroupsFirst)},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"growthActSmbMWInvites",{get:function(){return y.Experiment(this.props.experiments.growthActSmbMWInvites)},enumerable:!0,configurable:!0}),_.prototype.sendGroupInvites=function(e,t){this.setState({emails:e,groupIds:t},this.sendMemberInvites)},_.prototype.render=function(){var e=this,t=this.props,i=t.isOpen,s=t.customClass,o=t.shouldShowInviteLink,r=t.inviteLinkUrl,l=t.inviteLinkExpiredTs,m=t.inviteToken,u=t.nextInviteLinkUrl,c=t.csvImportLabel,d=t.onCSVImport,g=t.tieredAdmin,_=t.width,p=void 0===_?699:_,v=t.ncctNoBillingInfo,f=t.isInviteLinkEnabled,h=t.isRequestSuggestion,b=t.showSuggestionsInImm,S=this.state,M=S.numRemainingLicenses,L=S.emails,I=S.isSubmitting,y=S.memberList,A=S.showSidebar,k=S.sentEmails,E=S.memberActionsData,C=S.suggestedMembers,x=S.showMemberInviteDisclaimer,F=!0===h?T.intl.formatMessage({id:"v0b6+E",defaultMessage:"Confirm License Purchase"}):T.intl.formatMessage({id:"/KqWDm",defaultMessage:"Invite members to your team"}),R=this.shouldRenderSendInviteAction||!o;if(this.growthActSmbGroupsFirst.isActive)return n.default.createElement(V.GroupsInviteModal,{open:!!i,isSubmitting:I,memberList:y,handleOnClose:this.closeModal,handleCSVImport:this.closeAndOpenCSVImportModal,sendInvites:function(t,i){return e.sendGroupInvites(t,i)}});if(this.growthActSmbFirstTask.isActive&&y.length){return n.default.createElement(W.FirstTaskInviteModal,{open:!!i,tieredAdmin:g,memberList:y,memberActionsData:E,showSidebar:A,emails:L,sentEmails:k,handleOnClose:this.closeModal,onCSVImport:d,handleOnSubmit:this.onPrimaryActionClick,handleCSVImport:this.closeAndOpenCSVImportModal,renderInputForm:this.renderContactsTokenizer,renderSubmitBtn:this.renderPrimaryAction,loggingExtras:this.defaultLoggingExtras,showImportCSV:!1,growthActSmbMWInvitesActive:this.growthActSmbMWInvites.isActive,isInviteLinkEnabled:f})}var B=null;!0===h&&1===L.length&&(B=n.default.createElement(N.Text,{isBold:!0},T.intl.formatMessage({id:"s8Jlo1",defaultMessage:"Approving membership request for {email}"},{email:L[0]})));var q=o?n.default.createElement(D.InviteLink,{numRemainingLicenses:M,inviteLinkUrl:r,inviteLinkExpiredTs:l,inviteToken:m,nextInviteLinkUrl:u,teamRoutes:this.apiClient.teamRoutes(),emails:L,onInviteLinkCreateStart:this.props.onInviteLinkCreateStart,onInviteLinkCreateEnd:this.props.onInviteLinkCreateEnd,onInviteLinkDelete:this.props.onInviteLinkDelete,onUpdateModal:this.props.onUpdateModal,isTrial:P.get(this.state.subStatus,"isOnTrial"),showAddLicenses:this.props.showAddLicenses,isLoadingNumRemainingLicenses:this.state.isLoading,isNcct:this.isNCCT&&(null==v||v)}):null,j=n.default.createElement("hr",{className:"invite-modal__invite_link_divider"}),z=b&&C?n.default.createElement(n.default.Fragment,null,!0===h&&null!==B?B:this.renderForm(),o&&n.default.createElement(n.default.Fragment,null,j,q),this.renderAltAction()):n.default.createElement(n.default.Fragment,null,o&&n.default.createElement(n.default.Fragment,null,q,j),!0===h&&null!==B?B:this.renderForm(),this.renderAltAction()),U=X.URI.parse(w.get_href()).getQuery().role;return n.default.createElement(a.UtilityModal,{ariaLabel:T.intl.formatMessage({id:"TuViF7",defaultMessage:"Invite Members"}),className:"invite-modal "+s,onPrimaryAction:this.onPrimaryActionClick,onSecondaryAction:this.onSecondaryActionClick,open:!0,overlayClickClose:!0,primaryAction:this.renderPrimaryAction,secondaryAction:R?this.renderSecondaryAction:void 0,title:F,width:p+"px",link:c,onLink:d?this.closeAndOpenCSVImportModal:void 0,overlayClassName:"file-viewer-modal-overlay"},n.default.createElement(O.UXAnalyticsModalTracking,{id:"invite-modal"}),n.default.createElement("div",{className:"invite-modal__content"},!0===h?null:n.default.createElement("p",{id:"invite-modal__form-license-msg"},this.renderLicensesRemainingText()),z,x&&n.default.createElement(K.MemberInviteDisclosure,{role:U})))},_.defaultProps={experiments:{growthActSmbFirstTask:"OFF",growthActSmbGroupsFirst:"OFF",growthActSmbMWInvites:"OFF"},inviteMessage:"",emails:[]},_})(n.default.Component);t.InviteModalView=Q,t.InviteModal=M.requireCssWithComponent(Q,["/static/css/spectrum/index.web-vflTq87Ea.css","/static/js/spectrum-sharing/index.web-vflYg_mGf.css","/static/css/teams/admin/widgets/invite_modal/invite_modal-vflEjn3FY.css"])}));
//# sourceMappingURL=invite_modal.min.js-vfll1WnyT.map