define(["require","exports","tslib","react","modules/clean/datetime","modules/clean/teams/admin/pages/activity/filters/types","modules/core/i18n","spectrum/checkbox","spectrum/label","rondo-modal/v1","modules/clean/teams/admin/pages/activity/filters/filters"],(function(e,t,a,l,s,i,r,n,c,d,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),l=a.__importDefault(l);var o=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.accept=function(){var e=t.props,a=e.actionCreateReport,l=e.excludeFileEvents;a({fields:e.filterValues,excludeFileEvents:l})},t}return a.__extends(t,e),t.prototype.render=function(){var e,t=this.props,o=t.date,m=t.members,u=t.file,v=t.activities,p=t.filterValues,E=t.showExcludeFileEvents,g=t.excludeFileEvents,M=t.actionExcludeFileEvents,y=t.participants,k=t.isFederation,N=a.__rest(t,["date","members","file","activities","filterValues","showExcludeFileEvents","excludeFileEvents","actionExcludeFileEvents","participants","isFederation"]),h=(function(e){return e?s.format_date(new Date(e.from),s.localized_date_format)+" ― "+s.format_date(new Date(e.to),s.localized_date_format):""})(o),b=(function(e){return e?e.map((function(e){return e.content.name?e.content.name:e.content.email})).join(", "):""})(m),x=(function(e){return e?e.map((function(e){return e.label})).join(", "):""})(v),F=k?p&&p.teams&&p.teams[0]?p.teams.map((function(e){return e.content})).map((function(e){return e.name})).join(", "):r.intl.formatMessage({id:"519UDU",defaultMessage:"All teams"}):"",_=0!==(e=y)?e===i.InvolveNoneTeamMembers.YES?f.Participants[i.InvolveNoneTeamMembers.YES]:f.Participants[i.InvolveNoneTeamMembers.NO]:"";return l.default.createElement(d.UtilityModal,a.__assign({},N,{actionAccept:this.accept,primaryAction:r.intl.formatMessage({id:"E1Zecc",defaultMessage:"Create report"}),secondaryAction:r.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"}),title:r.intl.formatMessage({id:"3eet8m",defaultMessage:"Create activity report"}),ariaLabel:r.intl.formatMessage({id:"3eet8m",defaultMessage:"Create activity report"}),className:"report"}),l.default.createElement("div",null,r.intl.formatMessage({id:"25Cg8v",defaultMessage:"The report will be saved as a CSV in a folder called Dropbox Business reports. We’ll email you when the report is ready."})),l.default.createElement("div",{className:"report-info"},l.default.createElement("div",{className:"report-info-title"},r.intl.formatMessage({id:"phqFAm",defaultMessage:"The report includes the following:"})),l.default.createElement("div",{className:"filters"},""!==h&&[l.default.createElement("div",{className:"filter-key",key:"1"},r.intl.formatMessage({id:"gbfS6k",defaultMessage:"Date:"})),l.default.createElement("div",{className:"filter-value",key:"11"},h)],""!==b&&[l.default.createElement("div",{className:"filter-key",key:"2"},r.intl.formatMessage({id:"HQHg/u",defaultMessage:"Members:"})),l.default.createElement("div",{className:"filter-value",key:"21"},b)],u&&[l.default.createElement("div",{className:"filter-key",key:"3"},r.intl.formatMessage({id:"JFlgO7",defaultMessage:"Content:"})),l.default.createElement("div",{className:"filter-value",key:"31"},u)],""!==x&&[l.default.createElement("div",{className:"filter-key",key:"4"},r.intl.formatMessage({id:"kE7BEY",defaultMessage:"Activities:"})),l.default.createElement("div",{className:"filter-value",key:"41"},x)],""!==F&&[l.default.createElement("div",{className:"filter-key"},r.intl.formatMessage({id:"0vFUP0",defaultMessage:"Teams:"})),l.default.createElement("div",{className:"filter-value"},F)],""!==_&&[l.default.createElement("div",{className:"filter-key",key:"6"},r.intl.formatMessage({id:"MX2YRH",defaultMessage:"Participants:"})),l.default.createElement("div",{className:"filter-value",key:"61"},_)])),E&&l.default.createElement(c.Label,{htmlFor:"exclude-file-events",className:"exclude-file-events-label"},l.default.createElement(n.Checkbox,{"aria-checked":!0,id:"exclude-file-events",checked:g?"checked":"unchecked",onChange:M}),l.default.createElement("div",{className:"exclude-file-events-label-parts"},l.default.createElement("div",{className:"exclude-file-events-label-primary"},r.intl.formatMessage({id:"VRnHfF",defaultMessage:"Exclude activities in File operations"})),l.default.createElement("div",{className:"exclude-file-events-label-secondary"},r.intl.formatMessage({id:"aU7KBh",defaultMessage:"This creates the report faster"})))))},t})(l.default.Component);t.ReportModal=o}));
//# sourceMappingURL=report_modal.min.js-vflK1DvDM.map