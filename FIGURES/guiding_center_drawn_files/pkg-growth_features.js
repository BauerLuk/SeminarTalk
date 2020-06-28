define("modules/clean/server_side_client_view_bridge",["require","exports","tslib"],(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ResultSuccess=0;t.ResultNoConnection=404;t.ResultInvalidRequest=-32600;t.ResultParseError=-32700;t.ResultNoTransport=-32999;var o=function(e){setTimeout((function(){throw new Error(e)}),0)};t.OverrideReportInitErrorForTest=function(e){o=e};var r=(function(){function e(){this.onEventFromDesktopClient=this.onEventFromDesktopClient.bind(this),this.resolvePromiseFromDesktopClient=this.resolvePromiseFromDesktopClient.bind(this),this.messageCounter=0,this.receiveListeners=[],this.callbackMap={},this.deferredInvokeQueue=[],this.hasEstablishedSession=!1,this.hasTransport=!1,this.desktopClientInfo=null,this.desktopClientExportsInfo=null,this.requestHandlers={onEventFromDesktopClient:this.onEventFromDesktopClient,resolvePromiseFromDesktopClient:this.resolvePromiseFromDesktopClient},this.eventHandlers={},this.View={},this.View.PromisedData={},this.sendMessage=function(){},this.close=function(){},"undefined"!=typeof _clientBridge&&null!==_clientBridge&&_clientBridge.enabled?(this.sendMessage=_clientBridge._SendMessageToDesktopClient,this.close=_clientBridge._Close,this.hasTransport=!0,_clientBridge._RegisterConnection(this)):o("During server side client view initialization, _clientBridge is undefined. This is not a new issue, but was previously not reported.")}return e.prototype.onOpen=function(){var e=this;this.hasEstablishedSession=!0,this._ensureDesktopClientInfo().then((function(){for(var t=0,n=Array.from(e.deferredInvokeQueue);t<n.length;t++){(0,n[t])()}return e.deferredInvokeQueue=[]}))},e.prototype.onClose=function(){this.close();for(var e=0,t=Object.keys(this.callbackMap||{});e<t.length;e++){var n=t[e];(0,this.callbackMap[n])({error:404})}this.callbackMap={}},e.prototype.onMessage=function(e){var t=JSON.parse(e);if("2.0"!==t.jsonrpc)throw Error("Invalid JSON RPC message. JSONRPC field is not 2.0");if(t.hasOwnProperty("method"))this.onRequest(t);else{if(!t.hasOwnProperty("error")&&!t.hasOwnProperty("result"))throw Error("Invalid JSON RPC message. None of {method, result, error} field present.");this.onResponse(t)}},e.prototype.onRequest=function(e){if(!e.hasOwnProperty("params"))throw Error("Invalid JSON RPC request: missing 'params' field.");if(!e.params.hasOwnProperty("name"))throw Error("Invalid JSON RPC request: missing 'params.name' field.");return this.requestHandlers[e.method].apply(void 0,n.__spreadArrays([e.params.name],Array.from(e.params.args)))},e.prototype.onResponse=function(e){if("number"!=typeof e.id)throw Error("Invalid JSON RPC message. Id field is not a number.");if("function"!=typeof this.callbackMap[e.id]&&void 0!==this.callbackMap[e.id])throw Error("Invalid JSON RPC response. Id is not recognized.");var t=this.callbackMap[e.id];delete this.callbackMap[e.id],void 0===t&&(t=function(){}),e.hasOwnProperty("error")?t({error:e.error,succeeded:!1}):e.hasOwnProperty("result")&&t({result:e.result,succeeded:!0})},e.prototype.subscribeEvent=function(e,t){var n=this;if(null==t||"function"!=typeof t)throw TypeError("Event subscription must have valid callback.");return i.invokeRemoteMethod("_validate_global_event_name",(function(o){if(o.succeeded)return n.eventHandlers.hasOwnProperty(e)||(n.eventHandlers[e]={}),n.eventHandlers[e][t]=t;throw Error("Invalid event name: "+e)}),[e])},e.prototype.unsubscribeEvent=function(e,t){if(this.eventHandlers.hasOwnProperty(e)&&this.eventHandlers[e].hasOwnProperty(t))return delete this.eventHandlers[e][t]},e.prototype.onEventFromDesktopClient=function(e){for(var t=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(this.eventHandlers.hasOwnProperty(e))return(function(){var o=[];for(var r in t.eventHandlers[e]){var i=t.eventHandlers[e][r];o.push(i.apply(void 0,Array.from(n||[])))}return o})()},e.prototype.getPromiseForPromisedDataFromDesktopClient=function(e){var t=this;this.View.PromisedData.hasOwnProperty(e)||(this.View.PromisedData[e]={}),this.View.PromisedData[e]._promise=new Promise((function(n,o){return t.View.PromisedData[e]._resolve=n,t.View.PromisedData[e]._reject=o}));return i.invokeRemoteMethod("_validate_promise_name",(function(n){if(n.succeeded)return t._tryResolvePromise(e);throw Error("Invalid promise name: "+e)}),[e]),this.View.PromisedData[e]._promise},e.prototype.resolvePromiseFromDesktopClient=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return this.View.PromisedData.hasOwnProperty(e)||(this.View.PromisedData[e]={}),this.View.PromisedData[e]._data=t,this._tryResolvePromise(e)},e.prototype._tryResolvePromise=function(e){var t;if(null!=this.View.PromisedData[e]._data&&null!=this.View.PromisedData[e]._resolve)return(t=this.View.PromisedData[e])._resolve.apply(t,Array.from(this.View.PromisedData[e]._data||[]))},e.prototype.formatFunctionId=function(e){return"com.dropbox.client.bridge-v1."+e},e.prototype.invokeRemoteMethod=function(e,t,n){if(this.hasTransport){if("function"!=typeof t&&void 0!==t)throw TypeError("Remote call must have valid completion callback, if specified.");if(this.hasEstablishedSession){var o={jsonrpc:"2.0",method:e=this.formatFunctionId(e),id:this.messageCounter};void 0!==n&&(o.params=n);var r=JSON.stringify(o),i=this.sendMessage(r);0===i?this.callbackMap[this.messageCounter++]=t:void 0!==t&&t({error:i})}else this.deferredInvokeQueue.push(this.invokeRemoteMethod.bind(self,e,t,n))}else void 0!==t&&t({error:-32999})},e.prototype.invokeRemoteMethodPromise=function(e,t){var n=this;return new Promise((function(o,r){return n.invokeRemoteMethod(e,(function(e){return null!=e.error?r(e.error):o(e.result)}),t)}))},e.prototype.isBridgeFunctionSupported=function(e){var t=this;return e=this.formatFunctionId(e),new Promise((function(n,o){return t._ensureDesktopClientInfo().then((function(){return null!=t.desktopClientInfo?n(t.desktopClientInfo.supportedFunctions.indexOf(e)>-1):o()}))}))},e.prototype._ensureDesktopClientInfo=function(){var e=this;return new Promise((function(t,n){return null!=e.desktopClientExportsInfo?t():e.invokeRemoteMethodPromise("_getDesktopClientInfo").then((function(n){return e.desktopClientInfo=n,e.desktopClientExportsInfo=!0,t()}),(function(n){return e.desktopClientExportsInfo=!1,t()}))}))},e})(),i=null;t.SubscribeEvent=function(e,t){return i.subscribeEvent(e,t)};t.UnsubscribeEvent=function(e,t){return i.unsubscribeEvent(e,t)};t.GetNamedPromise=function(e){return i.getPromiseForPromisedDataFromDesktopClient(e)};var a=function(e){return i.isBridgeFunctionSupported(e)};t.IsBridgeFunctionSupported=a;t.init=function(){if(null===i)return i=new r};t.GetClientVersion=function(){var e,t=null===(e=null==i?void 0:i.desktopClientInfo)||void 0===e?void 0:e.build_version;if(!t)return null;var n=t.split("-");return(t=n.pop()).split(".").map((function(e){return parseInt(e)}))};t.GetPlatform=function(){if(i&&i.desktopClientInfo)return i.desktopClientInfo.platform};t.RefreshForInfinite=function(e){return i.invokeRemoteMethodPromise("refreshForInfinite",e)};t.ShouldDoKextOnboardingForPlatform=function(e,t){return i.invokeRemoteMethod("shouldDoKextOnboardingForPlatform",t,[e])};t.OpenUncredentialedBrowserWithAbsoluteURL=function(e,t){return i.invokeRemoteMethod("openUncredentialedBrowserWithAbsoluteURL",t,[e])};t.OpenUncredentialedBrowserWithDropboxURL=function(e,t){return i.invokeRemoteMethod("openUncredentialedBrowserWithDropboxURL",t,[e])};t.OpenUncredentialedBrowser=function(e,t){return i.invokeRemoteMethod("openUncredentialedBrowser",t,[e])};t.OpenCredentialedBrowser=function(e,t,n){return i.invokeRemoteMethod("openCredentialedBrowser",n,[e,t])};var s=function(e,t){return i.invokeRemoteMethod("openPreferencesPane",t,[e])};t.OpenPreferencesPane=s;t.ListDirs=function(e,t,n){return i.invokeRemoteMethod("listDirs",n,[e,t])};t.GetSyncStatus=function(e,t,n){return i.invokeRemoteMethod("getSyncStatus",n,[e,t])};t.EvictSmartSyncFiles=function(e,t,n){return i.invokeRemoteMethod("evictSmartSyncFiles",n,[e,t])};t.RecallSmartSyncFiles=function(e,t,n){return i.invokeRemoteMethod("recallSmartSyncFiles",n,[e,t])};t.OpenContentIngest=function(e,t,n,o,r){return i.invokeRemoteMethod("openContentIngest",r,[e,t,n,o])};t.ContentIngestUpdateQuota=function(e,t){return i.invokeRemoteMethod("contentIngestUpdateQuota",t,[e])};t.HideTray=function(){return i.invokeRemoteMethod("hideTray")};t.CopyShmodelToClipboard=function(e,t,n,o){return i.invokeRemoteMethod("copyShmodelToClipboard",o,[e,t,n])};t.GetClipboardText=function(e){return i.invokeRemoteMethod("getClipboardText",e)};t.OpenDropboxFolderForRole=function(e,t){return i.invokeRemoteMethod("openDropboxFolderForRole",t,[e])};t.ReportEvent=function(e,t,n){return i.invokeRemoteMethod("reportEvent",n,[e,t])};t.ReportMetrics=function(e){return i.invokeRemoteMethodPromise("reportMetrics",e)};t.SaveConfig=function(e,t,n){return i.invokeRemoteMethod("saveConfig",e,[t,n])};t.ForegroundServerView=function(e){return i.invokeRemoteMethod("foregroundServerView",e)};t.SetIsTopmostViewLevel=function(e,t){return i.invokeRemoteMethod("setIsTopmostViewLevel",t,[e])};t.CDOShowTrayOnboarding=function(e){return i.invokeRemoteMethod("CDO.ShowTrayOnboarding",e)};t.CDOHideTrayOnboarding=function(e){return i.invokeRemoteMethod("CDO.HideTrayOnboarding",e)};t.CDOSetOnboardingHeight=function(e,t){return i.invokeRemoteMethod("CDO.SetOnboardingHeight",t,[e])};t.CDOOpenDropboxFolder=function(e){return i.invokeRemoteMethod("CDO.OpenDropboxFolder",e)};t.CDOPinTrayPopup=function(e){return i.invokeRemoteMethod("CDO.PinTrayPopup",e)};t.CDOUnpinTrayPopup=function(e){return i.invokeRemoteMethod("CDO.UnpinTrayPopup",e)};t.CDOOpenUserFolder=function(e,t){return i.invokeRemoteMethod("CDO.OpenUserFolder",t,[e])};t.CDOStartEventMonitoring=function(e){return i.invokeRemoteMethod("CDO.StartEventMonitoring",e)};t.CDOStopEventMonitoring=function(e){return i.invokeRemoteMethod("CDO.StopEventMonitoring",e)};t.CDOGetAndClearEvents=function(e){return i.invokeRemoteMethod("CDO.GetAndClearEvents",e)};var u=function(e){return i.invokeRemoteMethod("CDO.ClearShowTrayConfig",e)};t.CDOClearShowTrayConfig=u,t.CDOClearShowTrayConfig=u=function(e){return i.invokeRemoteMethod("CDO.ClearShowTrayConfig",e)};t.KextShowAlertOrInstallAsync=function(){return i.invokeRemoteMethodPromise("InfiniteKextInstall.ShowAlertOrInstallAsync")};t.KextShowPrefsAndInstallAsync=function(){return i.invokeRemoteMethodPromise("InfiniteKextInstall.ShowPrefsAndInstallAsync")};t.KextShowPrefsAsync=function(){return i.invokeRemoteMethodPromise("InfiniteKextInstall.ShowPrefsAsync")};t.KextGetApprovalAsync=function(){return i.invokeRemoteMethodPromise("InfiniteKextInstall.GetApprovalAsync")};t.KextGetPrefsShownAsync=function(){return i.invokeRemoteMethodPromise("InfiniteKextInstall.GetPrefsShownAsync")};t.KextShowSelSyncAsync=function(){return i.invokeRemoteMethodPromise("InfiniteKextInstall.ShowSelSyncAsync")};t.SetupWizardReportEvent=function(e,t,n){null==t&&(t={}),i.invokeRemoteMethod("SetupWizard.SetupWizardReportEvent",n,[e,t])};t.SetupWizardOpenSelSyncPrefsASync=function(){return i.invokeRemoteMethodPromise("SetupWizard.OpenSelSyncPrefsASync")};t.SetupWizardOpenLocationPrefsAsync2=function(){return i.invokeRemoteMethodPromise("SetupWizard.OpenLocationPrefsAsync2")};t.SetupWizardLoginFinishedASync=function(e){return i.invokeRemoteMethodPromise("SetupWizard.LoginFinishedASync",[e])};t.SetupWizardFinished=function(e,t){return i.invokeRemoteMethod("SetupWizard.SetupFinished",t,[e])};t.SetupWizardPollForLink=function(e){return i.invokeRemoteMethod("SetupWizard.PollForLink",e)};t.SetupWizardFetchNewNonce=function(){return i.invokeRemoteMethodPromise("SetupWizard.FetchNewNonce")};t.SetupWizardGetAndResetShowInfiniteHardDowngradeMsg=function(e,t){return i.invokeRemoteMethod("SetupWizard.GetAndResetShowInfiniteHardDowngradeMsg",t,[e])};t.SetupWizardGetDropboxPath=function(e){return i.invokeRemoteMethod("SetupWizard.GetDropboxPath",e)};t.SetupWizardSetContentStartsOnlineOnly=function(e,t){return i.invokeRemoteMethod("SetupWizard.SetContentStartsOnlineOnly",t,[e])};t.SetupWizardGetClientInfoAndTag=function(e){return i.invokeRemoteMethod("SetupWizard.GetClientInfoAndTag",e)};t.TrayPopupContentReady=function(e){return i.invokeRemoteMethod("TrayPopupContent.Ready",e)};t.TrayPopupContentPong=function(e){return i.invokeRemoteMethod("TrayPopupContent.Pong",e)};t.TrayPopupContentUIStrings=function(e){return i.invokeRemoteMethod("TrayPopupContent.UIStrings",e)};t.TrayPopupContentReportRender=function(e,t){return i.invokeRemoteMethod("TrayPopupContent.ReportRender",t,[e])};t.TrayPopupContentReportRenderV2=function(e,t,n){return i.invokeRemoteMethod("TrayPopupContent.ReportRenderV2",n,[e,t])};t.TrayPopupContentReportRefreshed=function(e,t){return i.invokeRemoteMethod("TrayPopupContent.ReportRefreshed",t,[e])};t.TrayPopupContentRenderBadAssumption=function(e,t,n){return i.invokeRemoteMethod("TrayPopupContent.RenderBadAssumption",n,[e,t])};t.TrayPopupContentDismissPaperCallout=function(e){return i.invokeRemoteMethod("TrayPopupContent.DismissPaperCallout",e)};t.TrayPopupContentDownloadThumbnail=function(e,t){return i.invokeRemoteMethod("TrayPopupContent.DownloadThumbnail",t,[e])};t.TrayPopupContentPerformStickyAction=function(e,t,n){return i.invokeRemoteMethod("TrayPopupContent.PerformStickyAction",n,[e,t])};t.TrayPopupContentPerformNotificationAction=function(e,t,n,o){return i.invokeRemoteMethod("TrayPopupContent.PerformNotificationAction",o,[e,t,n])};t.TrayPopupContentPerformNotificationMarkAllRead=function(e,t){return i.invokeRemoteMethod("TrayPopupContent.PerformNotificationMarkAllRead",t,[e])};t.TrayPopupContentPerformNotificationMarkRead=function(e,t){return i.invokeRemoteMethod("TrayPopupContent.PerformNotificationMarkRead",t,[e])};t.TrayPopupContentPerformNotificationMarkSpam=function(e,t){return i.invokeRemoteMethod("TrayPopupContent.PerformNotificationMarkSpam",t,[e])};t.TrayPopupContentPerformFileAction=function(e,t,n){return i.invokeRemoteMethod("TrayPopupContent.PerformFileAction",n,[e,t])};t.TrayPopupContentPerformRecallAction=function(e,t,n){return i.invokeRemoteMethod("TrayPopupContent.PerformRecallAction",n,[e,t])};t.TrayPopupContentLinkClient=function(e){return i.invokeRemoteMethod("TrayPopupContent.LinkClient",e)};t.TrayPopupContentShowOtherAccountView=function(e,t){return i.invokeRemoteMethod("TrayPopupContent.ShowOtherAccountView",t,[e])};t.TrayPopupContentShowMoreNotifications=function(e,t){return i.invokeRemoteMethod("TrayPopupContent.ShowMoreNotifications",t,[e])};t.TrayPopupOpenSearch=function(e,t){return i.invokeRemoteMethod("SurfacePrototype.OpenSearchResults",t,[e])};t.TwoAccountPromoExitPromo=function(e,t){return i.invokeRemoteMethod("TwoAccountPromo.exit_promo",t,[e])};t.HomeOpenFileOrFolder=function(e,t,n){return i.invokeRemoteMethod("Home.openFileOrFolder",n,[e,t])};t.BugReporterGetReportDictionary=function(e){return i.invokeRemoteMethod("bugreporter.getReportDictionary",e)};t.TestDeferral=function(e,t,n){return i.invokeRemoteMethodPromise("DEBUG.testDeferral",[e,t,n])};t.PaywallDeviceLimitUnlinkOthersSuccess=function(e){return i.invokeRemoteMethod("PaywallDeviceLimit.unlinkOthersSuccess",e)};t.OpenUpgradePageForPaywallDeviceLimit=function(e){return i.invokeRemoteMethod("PaywallDeviceLimit.openUpgradePage",e)};t.Mountain=function(e){return i.invokeRemoteMethod("Mountain.mountain",e)};t.AcknowledgePromptOnTray=function(e,t){return i.invokeRemoteMethod("DesktopPrompt.acknowledgePromptOnTray",t,[e])};t.SetPromptCampaignOnTray=function(e,t){return i.invokeRemoteMethod("DesktopPrompt.setPromptCampaignOnTray",t,[e])};t.ViewManagementShow=function(){return i.invokeRemoteMethodPromise("view_management.show")};t.ViewManagementClose=function(){return i.invokeRemoteMethodPromise("view_management.close")};t.ViewManagementHide=function(){return i.invokeRemoteMethodPromise("view_management.hide")};t.ViewManagementSetPosition=function(e,t,n,o){return i.invokeRemoteMethodPromise("view_management.set_position",[e,t,n,o])};t.ViewManagementMove=function(e,t){return i.invokeRemoteMethodPromise("view_management.move",[e,t])};t.ViewManagementResize=function(e,t){return i.invokeRemoteMethodPromise("view_management.resize",[e,t])};t.ViewManagementGetTitle=function(){return i.invokeRemoteMethodPromise("view_management.get_title")};t.ViewManagementSetTitle=function(e){return i.invokeRemoteMethodPromise("view_management.set_title",[e])};t.ViewManagementGetCurrentDisplay=function(){return i.invokeRemoteMethodPromise("view_management.get_current_display")};t.ViewManagementGetMainDisplay=function(){return i.invokeRemoteMethodPromise("view_management.get_main_display")};t.ViewManagementGetAllDisplays=function(){return i.invokeRemoteMethodPromise("view_management.get_all_displays")};t.InviteMemberModalHandleInviteSuccess=function(e){return i.invokeRemoteMethodPromise("InviteMembersModal.HandleInviteSuccess",[e])};t.HandleTeamNameChange=function(e,t){var n="EssentialSetup.TeamInfo.handleTeamNameChange";a(n)&&i.invokeRemoteMethodPromise(n,[e,t])};t.LaunchSyncEverythingOnboarding=function(e){var t="launch_sync_everything_onboarding";return a(t).then((function(n){return n?i.invokeRemoteMethodPromise(t,[e]):s("import")}))}})),define("modules/clean/react/growth/features/types",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(function(e){e.NEON_GREEN="neon-green",e.STONE_FORTY="stone-forty",e.SQUASH="squash",e.PINK="pink",e.WHITE="white"})(t.BadgeColor||(t.BadgeColor={})),(function(e){e.RIGHT_OF_QUOTA="right-of-quota",e.RIGHT_OF_MENU_ITEM="right-of-menu-item",e.UNDER_ACCOUNT_PHOTO="under-account-photo"})(t.BadgePosition||(t.BadgePosition={})),(function(e){e.FEATURE_TOUR_MODAL="feature_tour_modal"})(t.ModalType||(t.ModalType={})),(function(e){e.OPEN_TAB_TO_APPLE_SUBSCRIPTION_HELP_PAGE="open_tab_to_apple_subscription_help_page",e.SHOW_FEATURE_TOUR_MODAL="show_feature_tour_modal"})(t.OnClickType||(t.OnClickType={})),(function(e){e.NCCT_PLUS_TRIALS="ncct_plus_trials",e.NCCT_PLUS_TRIALS_ENABLE_AUTO_CONVERT="ncct_plus_trials_enable_auto_convert",e.PLATFORM_PLUS_TRIALS_30D="platform_plus_trials_30d",e.POT_OF_GOLD="pot_of_gold",e.WEB_FAMILY_DIRECT="web_family_direct",e.WEB_PLUS_DIRECT="web_plus_direct",e.WEB_PLUS_TRIALS="web_plus_trials"})(t.ProjectType||(t.ProjectType={}))})),define("modules/clean/react/growth/logging_util",["require","exports","tslib","modules/core/browser","modules/clean/analytics"],(function(e,t,n,o,r){"use strict";var i;function a(e,t,i,a,s){var u="growth_"+t+"_"+i,d={path:o.get_href(),project:e};return r.ProEventsLogger.log(u,n.__assign(n.__assign({},a),d),s,!1,e)}Object.defineProperty(t,"__esModule",{value:!0}),o=n.__importStar(o),(function(e){e.AJAX_ERROR="ajax_error",e.AJAX_SUCCESS="ajax_success",e.COMPLETED="completed",e.CTA_CLICKED="cta_clicked",e.DISMISSED="dismissed",e.DISPLAYED="displayed",e.RENDER_ERROR="render_error",e.TASK_COMPLETED="task_completed",e.TASK_EXPANDED="task_expanded"})(i||(i={})),(function(e){e.AUTO_RENEW_TERMS="auto_renew_terms",e.AVATAR_MENU="avatar_menu",e.CANCEL_TRIAL_BIZ_INVITE="cancel_trial_biz_invite_modal",e.CANCEL_TRIAL_EXPECTATIONS="cancel_trial_expectations_modal",e.CANCEL_TRIAL_SURVEY="cancel_trial_survey_modal",e.DIRECT_PURCHASE_MODAL="direct_purchase_modal",e.FEATURE_TOUR_MODAL="feature_tour_modal",e.ONBOARDING_SIDEBAR="onboarding_sidebar",e.START_TRIAL_MODAL="start_trial_modal",e.TRIAL_BANNER="trial_banner",e.TRIAL_ENABLE_AUTO_CONVERT_MODAL="trial_enable_auto_convert_modal"})(t.ComponentName||(t.ComponentName={})),(function(e){e.CONFIRM="confirm",e.CONTINUE="continue",e.OPEN_EXTERNAL_LINK="open_external_link",e.OPEN_MODAL="open_modal"})(t.CtaType||(t.CtaType={})),(function(e){e.HELP="help",e.ORGANIZING="organizing",e.SHARING="sharing",e.UPLOAD="upload"})(t.FeatureType||(t.FeatureType={})),(function(e){e.CANCEL_TRIAL="cancel_trial",e.START_TRIAL="start_trial",e.TRANSITION_PLAN="transition_plan",e.UPGRADE_TRIAL="upgrade_trial",e.GET_PRICE_CONVERSIONS_FOR_SCHEDULE="get_price_conversions_for_schedule",e.ENABLE_AUTO_CONVERT="enable_auto_convert"})(t.RequestType||(t.RequestType={})),t.logAjaxError=function(e,t,o,r,s){var u=n.__assign(n.__assign({},r),{requestType:o});return a(e,t,i.AJAX_ERROR,u,s)},t.logAjaxSuccess=function(e,t,o,r,s){var u=n.__assign(n.__assign({},r),{requestType:o});return a(e,t,i.AJAX_SUCCESS,u,s)},t.logCtaClick=function(e,t,o,r,s){var u=n.__assign(n.__assign({},r),{cta:o});return a(e,t,i.CTA_CLICKED,u,s)},t.logDismiss=function(e,t,n,o){return a(e,t,i.DISMISSED,n,o)},t.logDisplay=function(e,t,n,o){return a(e,t,i.DISPLAYED,n,o)},t.logCompleted=function(e,t,o,r){return a(e,t,i.COMPLETED,n.__assign({},o),r)},t.logRenderError=function(e,t,n,o){return a(e,t,i.RENDER_ERROR,n,o)},t.logTaskCompleted=function(e,t,o,r,s){return a(e,t,i.TASK_COMPLETED,n.__assign(n.__assign({},r),{task:o}),s)},t.logTaskExpanded=function(e,t,o,r,s){return a(e,t,i.TASK_EXPANDED,n.__assign(n.__assign({},r),{task:o}),s)}}));
//# sourceMappingURL=pkg-growth_features.min.js-vfl6HUau0.map