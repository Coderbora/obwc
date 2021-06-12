var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;import{d as o,m as l,c as d,a as c,w as u,F as m,r as p,b as g,o as f,t as v,e as b,T as h,f as T,g as A,h as E,i as _,j as w,k as S,l as y,n as I,C as D,p as x,q as C,s as k,u as P,v as O}from"./vendor.8d251a54.js";const N="UPDATE_ROUNDS",R="UPDATE_TEAMS";var j=o({name:"ProfilePopup",emits:["navigate"],computed:l({user:e=>e.loggedInUser}),methods:{async accept(e){await this.$http.post(`/api/teams/${e}/acceptInvitation`),await this.$store.dispatch("SET_INITIAL_DATA")}}});const U={class:"card card-body small position-absolute profile text-start me-sm-3 pt-4 bg-dark border-2 border-primary"},L={class:"d-flex align-items-center justify-content-between"},M=c("div",null,"FOR TEAM CREATION, CLICK HERE",-1),G=c("i",{class:"fas fa-arrow-right mx-2"},null,-1),F=b(" CREATE A TEAM "),B=c("div",{class:"border-bottom my-3"}," ANY TEAM INVITATIONS WILL APPEAR BELOW ",-1),J={class:"mx-4"};j.render=function(e,t,s,a,n,i){const r=g("router-link");return f(),d("div",U,[c("div",L,[M,G,c(r,{to:{name:"team-creation"},class:"btn btn-sm btn-outline-yellow",onClick:t[1]||(t[1]=t=>e.$emit("navigate"))},{default:u((()=>[F])),_:1})]),B,(f(!0),d(m,null,p(e.user.invitations,(t=>(f(),d("div",{key:t.id,class:"card card-body flex-column flex-sm-row align-items-center bg-yellow text-dark py-2 px-3 my-2"},[c("div",{class:"avatar",style:`background-image: url(https://a.ppy.sh/${t.captain.osuId})`},null,4),c("div",J,[c("div",null,v(t.captain.username)+" INVITES YOU TO JOIN ",1),c("div",null,v(t.name),1)]),c("button",{class:"btn btn-sm btn-dark text-yellow",disabled:Boolean(e.user.teamId),onClick:s=>e.accept(t.id)},v(e.user.teamId===t.id?"ACCEPTED":"ACCEPT"),9,["disabled","onClick"])])))),128))])};var V=o({computed:l({toastMessages:e=>e.toasts.toastMessages}),methods:{getToastTypeClass:e=>"success"===e.type?"bg-success":"info"===e.type?"bg-info":"bg-danger"}});const H={class:"position-fixed bottom-0 w-100",style:{"z-index":"1090"}},q={class:"position-relative"},z={class:"toast-container position-absolute bottom-0 start-50 translate-middle-x p-3"},$={class:"toast-body"};V.render=function(e,t,s,a,n,i){return f(),d("div",H,[c("div",q,[c("div",z,[c(h,{name:"component-fade"},{default:u((()=>[(f(!0),d(m,null,p(e.toastMessages,((t,s)=>(f(),d("div",{key:s,class:["toast show d-flex align-items-center",e.getToastTypeClass(t)],"data-bs-autohide":"true"},[c("div",$,v(t.message),1)],2)))),128))])),_:1})])])])};var Y,W,Z=o({name:"App",components:{ToastMessages:V,ProfilePopup:j},data:()=>({showProfilePopup:!1}),computed:(Y=((e,t)=>{for(var s in t||(t={}))n.call(t,s)&&r(e,s,t[s]);if(a)for(var s of a(t))i.call(t,s)&&r(e,s,t[s]);return e})({},l({user:e=>e.loggedInUser})),W={standardContest(){return this.$store.getters.standardContest},isValidCaptain(){var e,t;return(null==(t=null==(e=this.user)?void 0:e.captainFor)?void 0:t.wasConfirmed)||!1},isRegistrationOpen(){return!!this.standardContest&&new Date>=new Date(this.standardContest.registrationStartedAt)&&new Date<new Date(this.standardContest.registrationEndedAt)}},t(Y,s(W)))});const Q={class:"nav navbar navbar-expand-md navbar-dark bg-dark navbar-custom"},K=c("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTarget"},[c("span",{class:"navbar-toggler-icon"})],-1),X={id:"navbarTarget",class:"collapse navbar-collapse px-3"},ee={class:"navbar-nav me-auto"},te={class:"nav-item"},se=b(" MAIN "),ae={class:"nav-item"},ne=b(" INFO "),ie={key:0,class:"nav-item"},re=b(" TEAMS "),oe={class:"nav-item"},le=b(" SUBMISSIONS "),de={key:1,class:"nav-item"},ce=b(" TEAM CREATION "),ue={key:2,class:"nav-item dropdown"},me=c("a",{id:"navbarDropdown",class:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown"}," MANAGEMENT ",-1),pe={class:"dropdown-menu"},ge=b(" Contests "),fe=b(" Teams "),ve=b(" Logs "),be={class:"navbar-nav flex-row"},he={key:0,class:"nav-item"},Te=c("a",{class:"nav-link",href:"/api/login"}," LOGIN ",-1),Ae={class:"nav-item"},Ee={key:0,class:"fas fa-exclamation-circle text-danger"},_e={key:1,class:"py-2 px-3 cursor-default"},we=c("li",{class:"nav-item px-2"},[c("a",{class:"nav-link",href:"/api/logout"}," LOGOUT ")],-1),Se=_('<footer class="footer mt-auto bg-dark"><div class="d-flex justify-content-between align-items-center pe-3"><div class="d-flex w-100 align-items-center"><a href="https://2020.obwc.net" target="_blank" class="me-4"><div class="footer__obwc-img"></div></a><a href="https://discord.gg/CZp4bNx" target="_blank" class="footer__link"><i class="fab fa-discord fa-2x me-4"></i></a><a href="https://twitter.com/osubwc" target="_blank" class="footer__link"><i class="fab fa-twitter fa-2x me-4"></i></a><a href="https://www.twitch.tv/osubwc" target="_blank" class="footer__link"><i class="fab fa-twitch fa-2x"></i></a></div><div class="d-none d-sm-block w-100 text-end"> osu! Beatmapping World Championship </div></div></footer>',1);Z.render=function(e,t,s,a,n,i){var r;const o=g("router-link"),l=g("profile-popup"),p=g("router-view"),h=g("toast-messages");return f(),d(m,null,[c("nav",Q,[K,c("div",X,[c("ul",ee,[c("li",te,[c(o,{class:"nav-link",to:{name:"home"}},{default:u((()=>[se])),_:1})]),c("li",ae,[c(o,{class:"nav-link",to:"/info"},{default:u((()=>[ne])),_:1})]),e.isRegistrationOpen?T("",!0):(f(),d("li",ie,[c(o,{class:"nav-link",to:{name:"teams"}},{default:u((()=>[re])),_:1})])),c("li",oe,[e.isValidCaptain?(f(),d(o,{key:0,class:"nav-link",to:{name:"submissions"}},{default:u((()=>[le])),_:1})):T("",!0)]),e.user&&!e.user.team&&e.isRegistrationOpen?(f(),d("li",de,[c(o,{class:"nav-link",to:{name:"team-creation"}},{default:u((()=>[ce])),_:1})])):T("",!0),(null==(r=e.user)?void 0:r.isStaff)?(f(),d("li",ue,[me,c("ul",pe,[c("li",null,[c(o,{class:"dropdown-item",to:{name:"staff-contests"}},{default:u((()=>[ge])),_:1})]),c("li",null,[c(o,{class:"dropdown-item",to:{name:"staff-teams"}},{default:u((()=>[fe])),_:1})]),c("li",null,[c(o,{class:"dropdown-item",to:{name:"staff-logs"}},{default:u((()=>[ve])),_:1})])])])):T("",!0)])]),c("ul",be,[e.user?(f(),d(m,{key:1},[c("li",Ae,[e.isRegistrationOpen?(f(),d("a",{key:0,class:"nav-link px-2",href:"#",onClick:t[1]||(t[1]=A((t=>e.showProfilePopup=!e.showProfilePopup),["prevent"]))},[e.user.teamId||e.user.captainFor?T("",!0):(f(),d("i",Ee)),b(" "+v(e.user.username),1)])):(f(),d("div",_e,v(e.user.username),1))]),we],64)):(f(),d("li",he,[Te]))]),c(E,{name:"component-fade"},{default:u((()=>[e.showProfilePopup?(f(),d(l,{key:0,onNavigate:t[2]||(t[2]=t=>e.showProfilePopup=!1)})):T("",!0)])),_:1})]),c(p,null,{default:u((({Component:e})=>[c(E,{name:"component-fade",mode:"out-in"},{default:u((()=>[(f(),d(w(e),{class:"pt-4 px-sm-4",style:{"padding-bottom":"calc(1.5rem + 40px)"}}))])),_:2},1024)])),_:1}),Se,c(h)],64)};const ye={mounted(e,t){new S(e,{title:t.value||"",placement:t.arg||"top",trigger:"hover"})}};let Ie;const De={},xe=function(e,t){if(!t)return e();if(void 0===Ie){const e=document.createElement("link").relList;Ie=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in De)return;De[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":Ie,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};var Ce=o({name:"HomeInfo",computed:{schedule(){return this.$store.getters.schedule}},methods:{formatDate:e=>e?new Date(e).toLocaleString("en-US",{month:"short",day:"2-digit"}):"--"}});const ke={class:"card card-section h-100"},Pe={class:"card-body d-flex flex-column justify-content-between"},Oe=c("div",{class:"home-logo"},null,-1),Ne={class:"px-2"},Re={key:0,class:"bg-white text-dark rounded-pill p-1 text-center text-uppercase fw-bold my-2"},je=c("a",{class:"box-link",href:"https://osu.ppy.sh/community/forums/topics/1312490",target:"_blank"},null,-1);Ce.render=function(e,t,s,a,n,i){return f(),d("div",ke,[c("div",Pe,[Oe,c("div",Ne,[e.schedule?(f(),d("div",Re,v(e.formatDate(e.schedule.announcement))+" - "+v(e.formatDate(e.schedule.results)),1)):T("",!0),je])])])};var Ue=o({name:"HomePrizes",data:()=>({prizes:[{supporter:8,bg:"background-color: #facb5b",text:"text-dark",sup:"st"},{supporter:6,bg:"background-color: #75b6e5",text:"text-white",sup:"nd"},{supporter:4,bg:"background-color: #5c5c5c",text:"text-white",sup:"rd"},{supporter:2,bg:"background-color: #9188c2",text:"text-white"}],badges:["/assets/badge_1.468f6cc3.png","/assets/badge_2.dd7fc265.png","/assets/badge_3.3a707122.png","/assets/badge_4.69e5db5f.png"]}),methods:{getImgSrc(e){return this.badges[e]}}});const Le={class:"card card-section h-100"},Me=_('<div class="card-header"><div class="card-header-back"> Prizes </div><div class="card-header-sub"><div class="card-header-title"> PRIZES </div><div class="card-header-subtitle"> SUPPORTER TAGS ARE FOR EACH MEMBER </div></div></div>',1),Ge={class:"card-body d-flex"},Fe={class:"row row-cols-1 row-cols-xxl-2 g-4"},Be={class:"row align-items-center g-0"},Je={key:0,class:"prize__place"},Ve={class:"fs-1"},He={class:"fs-3"},qe=c("div",null,"PLACE",-1),ze={key:1,class:"prize__players text-start fs-1"},$e=c("div",null," PLAYERS' ",-1),Ye=c("div",null,"PICK",-1),We={class:"col-8"},Ze={class:"prize__detail w-100"},Qe=c("div",{class:"my-2"},[c("i",{class:"fas fa-plus fa-2x"})],-1),Ke=c("div",null,"OSU!SUPPORTER",-1);var Xe,et;function tt(e){return e<10?"0"+e:e}Ue.render=function(e,t,s,a,n,i){return f(),d("div",Le,[Me,c("div",Ge,[c("div",Fe,[(f(!0),d(m,null,p(e.prizes,((t,s)=>(f(),d("div",{key:s,class:"col"},[c("div",{class:["card card-body text-dark text-center py-4 px-0 rounded-3 prize fw-bold h-100 justify-content-around",t.text],style:t.bg},[c("div",Be,[c("div",{class:["col-4 border-2 border-end h-100 d-flex justify-content-center align-items-center",0===s?"border-dark":"border-white"]},[s<3?(f(),d("div",Je,[c("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAYAAAA3WXuFAAACHElEQVRYhe2Xv2sUQRTHP3uXu9xCYnGaIFhZSFLEJmdhq6KkuCKGUzTBFAGLIAipBBFEbESCoCmCNhZamCKQVPkD7ip/gWARiCCBQBQECwOKRZQnb4+5Yff2xy23Qe5b7c7Oe/PZ77ydmXXK5TIp6BgwAzzsNFUuDRrgAXAPON5pojSATqs7JWAxayCJXwIcvZ8CzmQJNAucstqeAH1JE+Zd160AuwliDwFrwIDVPgx8Ad4myFkRh24BEwmC7wBHA57dBw7HzHceuC1A7/RNqzGCTwA32zwXmLsx8okh68B7AaoD/cAqMBkxwSONaad5YCxCrqrCuMKS07n+CRSBFaAWkuBCRDelsB+H9LmoRsjYv4HXOe9CO8iDV8CVgASFCIOYOtvG9ZoaUNT7N8Av77OvGx3zwEvgmk+SG8BoDCB0ektW21V98YLR1sBYhxpWgEA9B+aMtqGYhepJtpMF417Wrhc6hql/pnib6yDw3afTHy3Op8Az4HoCINGeOjuhuexx9oEjwuCtqD+AD8C41VG2hGVgxHIrrmTx3NCvzvGJ/aiGtGwd9YBBHLXcfqu4OhkAg1kyUYC6IV8gu7C7qaYZJtBXYCsDmM/Ajh8QGU1by8zYQFlMW4sJB96hTwkPa0n1Ddg0Y/2OmrKsn+sS0LbuBk2l9V+WmtL6L/t/gewamo5xjE1Tl4OAZAO8lAFQU70aClMPKEwHCwj4CwqNUGta1tKrAAAAAElFTkSuQmCC",class:"img-fluid",style:[{"max-height":"28px"},0!==s?"filter: invert(1)":""]},null,4),c("div",Ve,[b(v(s+1),1),c("sup",He,v(t.sup),1)]),qe])):(f(),d("div",ze,[$e,Ye]))],2),c("div",We,[c("div",Ze,[c("div",{class:"prize__badge",style:{"background-image":"url("+e.getImgSrc(s)+")"}},null,4),Qe,c("div",null,v(t.supporter)+" MONTHS",1),Ke])])])],6)])))),128))])])])},(et=Xe||(Xe={})).Date="DATE",et.Input="INPUT",et.Locale="LOCALE";var st=o({name:"TimeString",props:{timestamp:{type:[String,Date],required:!0},div:{type:Boolean},format:{type:String,default:Xe.Date}},computed:{tooltipDate(){return new Date(this.timestamp).toLocaleString("en-US",{timeZoneName:"short"})}},methods:{shortDateTimeString(e){return e?this.$formatDate(e,this.format):""}}});st.render=function(e,t,s,a,n,i){const r=I("bs-tooltip");return e.div?y((f(),d("div",{key:0},v(e.shortDateTimeString(e.timestamp)),513)),[[r,e.tooltipDate]]):y((f(),d("span",{key:1},v(e.shortDateTimeString(e.timestamp)),513)),[[r,e.tooltipDate]])};var at=o({name:"HomeSchedule",components:{TimeString:st},computed:{standardContest(){return this.$store.getters.standardContest},schedule(){return this.$store.getters.schedule}},async created(){this.standardContest&&await this.$store.dispatch("UPDATE_ROUNDS",this.standardContest.id)}});const nt={class:"card card-section h-100"},it=_('<div class="card-header"><div class="card-header-back"> Schedule </div><div class="card-header-sub"><div class="card-header-title"> SCHEDULE </div><div class="card-header-subtitle"> DATES ARE IN YOUR LOCAL TIMEZONE </div></div></div>',1),rt={key:0,class:"card-body"},ot={class:"d-flex justify-content-between align-items-center fs-sm mb-2 px-3 py-0"},lt=c("div",null,"OBWC ANNOUNCEMENT",-1),dt={class:"d-flex justify-content-between align-items-center fs-sm border border-yellow rounded-3 mb-2 px-3 py-0"},ct=c("div",null,"REGISTRATION PHASE",-1),ut={class:"d-flex justify-content-between align-items-center "},mt=c("div",{class:"fs-xs text-yellow"}," START ",-1),pt={class:"ms-3"},gt={class:"d-flex justify-content-between align-items-center "},ft=c("div",{class:"fs-xs text-yellow"}," END ",-1),vt={class:"ms-3"},bt={class:"card-header text-center bg-yellow text-dark p-0 fw-bold"},ht={class:"card-body d-flex flex-column px-3 py-0"},Tt={class:"d-flex justify-content-between align-items-center border-yellow border-bottom-dashed"},At=c("div",null,"MAPPING PHASE",-1),Et={class:"d-flex justify-content-between align-items-center "},_t=c("div",{class:"fs-xs text-yellow"}," START ",-1),wt={class:"ms-3"},St={class:"d-flex justify-content-between align-items-center "},yt=c("div",{class:"fs-xs text-yellow"}," END ",-1),It={class:"ms-3"},Dt={class:"card-body d-flex flex-column px-3 py-0"},xt={class:"d-flex justify-content-between align-items-center border-yellow"},Ct=c("div",null,"JUDGING PHASE",-1),kt={class:"d-flex justify-content-between align-items-center "},Pt=c("div",{class:"fs-xs text-yellow"}," START ",-1),Ot={class:"ms-3"},Nt={class:"d-flex justify-content-between align-items-center "},Rt=c("div",{class:"fs-xs text-yellow"}," END ",-1),jt={class:"ms-3"},Ut={key:0,class:"d-flex justify-content-between align-items-center fs-sm mb-2 px-3 py-0"},Lt=c("div",null,"RESULTS ANNOUNCEMENT + LIVESTREAM",-1);at.render=function(e,t,s,a,n,i){const r=g("time-string");return f(),d("div",nt,[it,e.schedule?(f(),d("div",rt,[c("div",ot,[lt,c(r,{div:"",timestamp:e.schedule.announcement},null,8,["timestamp"])]),c("div",dt,[ct,c("div",null,[c("div",ut,[mt,c("div",pt,[c(r,{div:"",timestamp:e.schedule.registration[0]},null,8,["timestamp"])])]),c("div",gt,[ft,c("div",vt,[c(r,{div:"",timestamp:e.schedule.registration[1]},null,8,["timestamp"])])])])]),(f(!0),d(m,null,p(e.schedule.rounds,((e,t)=>(f(),d("div",{key:t,class:"card fs-sm border border-yellow mb-2 card-schedule"},[c("div",bt,v(e.title),1),c("div",ht,[c("div",Tt,[At,c("div",null,[c("div",Et,[_t,c("div",wt,[c(r,{div:"",timestamp:e.mapping[0]},null,8,["timestamp"])])]),c("div",St,[yt,c("div",It,[c(r,{div:"",timestamp:e.mapping[1]},null,8,["timestamp"])])])])])]),c("div",Dt,[c("div",xt,[Ct,c("div",null,[c("div",kt,[Pt,c("div",Ot,[c(r,{div:"",timestamp:e.judging[0]},null,8,["timestamp"])])]),c("div",Nt,[Rt,c("div",jt,[c(r,{div:"",timestamp:e.judging[1]},null,8,["timestamp"])])])])])])])))),128)),e.schedule.results?(f(),d("div",Ut,[Lt,c(r,{div:"",timestamp:e.schedule.results},null,8,["timestamp"])])):T("",!0)])):T("",!0)])};var Mt=o({name:"Home",components:{HomeInfo:Ce,HomePrizes:Ue,HomeSchedule:at}});const Gt={class:"container-fluid"},Ft={class:"row gy-2"},Bt={class:"col-md-6 col-xl-3"},Jt={class:"col-md-6 col-xl-5"},Vt={class:"col-md-12 col-xl-4"};Mt.render=function(e,t,s,a,n,i){const r=g("home-info"),o=g("home-prizes"),l=g("home-schedule");return f(),d("div",Gt,[c("div",Ft,[c("div",Bt,[c(r)]),c("div",Jt,[c(o)]),c("div",Vt,[c(l)])])])};const Ht=[{path:"/",component:Mt,alias:"/main",name:"home"},{path:"/info",component:()=>xe((()=>import("./Info.e465b2a9.js")),["/assets/Info.e465b2a9.js","/assets/vendor.8d251a54.js"]),name:"info",meta:{title:"Info | o!bwc"}},{path:"/teams",component:()=>xe((()=>import("./Teams.2f3573e9.js")),["/assets/Teams.2f3573e9.js","/assets/Teams.2c19252b.css","/assets/vendor.8d251a54.js"]),name:"teams",meta:{title:"Teams | o!bwc"}},{path:"/results/:id",component:()=>xe((()=>import("./Results.658353a3.js")),["/assets/Results.658353a3.js","/assets/Leaderboard.7ff820c1.js","/assets/Leaderboard.e978966c.css","/assets/vendor.8d251a54.js"]),name:"results",meta:{title:"Results | o!bwc"}},{path:"/teams/create",component:()=>xe((()=>import("./TeamCreation.8c1ec3ae.js")),["/assets/TeamCreation.8c1ec3ae.js","/assets/TeamCreation.74bd9c59.css","/assets/vendor.8d251a54.js"]),name:"team-creation",meta:{title:"Team Creation | o!bwc",requiresAuth:!0}},{path:"/judging",component:()=>xe((()=>import("./Judging.29105ee9.js")),["/assets/Judging.29105ee9.js","/assets/vendor.8d251a54.js"]),name:"judging",meta:{title:"Judging | o!bwc",requiresAuth:!0}},{path:"/submissions",component:()=>xe((()=>import("./Submissions.9015f0ca.js")),["/assets/Submissions.9015f0ca.js","/assets/vendor.8d251a54.js","/assets/DataTable.0edba146.js"]),name:"submissions",meta:{title:"Submissions | o!bwc",requiresAuth:!0}},{path:"/staff/contests/:id?/teams",alias:"/staff/teams",component:()=>xe((()=>import("./StaffTeams.09a62899.js")),["/assets/StaffTeams.09a62899.js","/assets/DataTable.0edba146.js","/assets/vendor.8d251a54.js"]),name:"staff-teams",meta:{title:"Teams - Staff",requiresStaff:!0}},{path:"/staff/contests",component:()=>xe((()=>import("./StaffContests.e0ca5e61.js")),["/assets/StaffContests.e0ca5e61.js","/assets/DataTable.0edba146.js","/assets/vendor.8d251a54.js"]),name:"staff-contests",meta:{title:"Contests - Staff",requiresStaff:!0}},{path:"/staff/contests/:id/rounds",component:()=>xe((()=>import("./StaffRounds.3ca41c13.js")),["/assets/StaffRounds.3ca41c13.js","/assets/DataTable.0edba146.js","/assets/vendor.8d251a54.js"]),name:"staff-rounds",meta:{title:"Rounds - Staff",requiresStaff:!0}},{path:"/staff/rounds/:id/submissions",component:()=>xe((()=>import("./StaffSubmissions.8880bb0d.js")),["/assets/StaffSubmissions.8880bb0d.js","/assets/DataTable.0edba146.js","/assets/vendor.8d251a54.js"]),name:"staff-submissions",meta:{title:"Rounds - Staff",requiresStaff:!0}},{path:"/staff/rounds/:id/judging",component:()=>xe((()=>import("./StaffJudging.fb241982.js")),["/assets/StaffJudging.fb241982.js","/assets/DataTable.0edba146.js","/assets/vendor.8d251a54.js","/assets/Leaderboard.7ff820c1.js","/assets/Leaderboard.e978966c.css"]),name:"staff-judging",meta:{title:"Judging - Staff",requiresStaff:!0}},{path:"/staff/logs",component:()=>xe((()=>import("./StaffLogs.689231c2.js")),["/assets/StaffLogs.689231c2.js","/assets/DataTable.0edba146.js","/assets/vendor.8d251a54.js"]),name:"staff-logs",meta:{title:"Logs - Staff",requiresStaff:!0}},{path:"/login",component:()=>xe((()=>import("./Login.04f1385b.js")),["/assets/Login.04f1385b.js","/assets/vendor.8d251a54.js"]),name:"401",meta:{title:"Login to continue"}},{path:"/:pathMatch(.*)*",component:()=>xe((()=>import("./NotFound.85a970fe.js")),["/assets/NotFound.85a970fe.js","/assets/vendor.8d251a54.js"]),name:"404",meta:{title:"Oops"}}];var qt,zt,$t,Yt;(zt=qt||(qt={}))[zt.Mappers=1]="Mappers",zt[zt.Players=2]="Players",(Yt=$t||($t={}))[Yt.Standard=1]="Standard",Yt[Yt.Taiko=2]="Taiko",Yt[Yt.Catch=3]="Catch",Yt[Yt.Mania=4]="Mania";const Wt=D.create();Wt.interceptors.response.use((e=>("get"!==e.config.method&&"GET"!==e.config.method&&ts.dispatch("addToastMessage",{message:e.data.success||e.statusText,type:"success"}),e)),(e=>{let t="Something went wrong!";if(e.response)switch(e.response.status){case 400:t=e.response.data.error||"Invalid request";break;case 401:t="May need to log in first";break;case 403:t="Unauthorized"}else t="Something went really wrong";return ts.dispatch("addToastMessage",t),Promise.reject(t)}));const Zt="INIT_DATA",Qt="SET_NEW_JUDGING",Kt="SELECT_FOR_EDITING",Xt="SAVE";function es(e){switch(e){case 1:return"FIRST";case 2:return"SECOND";case 3:return"THIRD";case 4:return"FOURTH";case 5:return"FIFTH";default:return e.toString()}}const ts=x({modules:{judging:{namespaced:!0,state:{currentRound:null,criterias:[],judgingDone:[],originalJudging:null,newJudging:null},mutations:{INIT_DATA(e,t){e.currentRound=t.currentRound||null,e.criterias=t.criterias||[],e.judgingDone=t.judgingDone||[]},SET_ORIGINAL_JUDGING(e,t){e.originalJudging=t},SET_NEW_JUDGING(e,t){e.newJudging=t}},getters:{getJudgingToCriterias:e=>t=>{const s=e.judgingDone.find((e=>e.submissionId===t.submissionId));if(!s)return null;const a=s.judgingToCriterias.find((e=>e.criteriaId===t.criteriaId));return a||null},getJudgingForEditing:e=>t=>{const s={judging:{submission:t.submission,comment:""},judgingToCriteria:{criteria:t.criteria,score:1,comment:""}},a=e.judgingDone.find((e=>e.submissionId===t.submission.id));if(!a)return s;s.judging.comment=a.comment;const n=a.judgingToCriterias.find((e=>e.criteriaId===t.criteria.id));return n?(s.judgingToCriteria.score=n.score,s.judgingToCriteria.comment=n.comment,s):s}},actions:{async INIT_DATA({commit:e}){const{data:t}=await Wt.get("/api/judging");e("INIT_DATA",t)},SELECT_FOR_EDITING({commit:e,getters:t},s){const a=t.getJudgingForEditing({submission:s.submission,criteria:s.criteria});e("SET_NEW_JUDGING",a),e("SET_ORIGINAL_JUDGING",a)},async SAVE({dispatch:e,state:t}){t.newJudging&&(await Wt.post("/api/judging",t.newJudging),await e("INIT_DATA"),e("SELECT_FOR_EDITING",{submission:t.newJudging.judging.submission,criteria:t.newJudging.judgingToCriteria.criteria}))}}},toasts:{namespaced:!1,state:{toastMessages:[]},mutations:{addToastMessage(e,t){e.toastMessages.push(t)},removeFirstToastMessage(e){e.toastMessages.splice(0,1)}},actions:{addToastMessage({commit:e},t){"string"==typeof t&&(t={message:t}),e("addToastMessage",t),setTimeout((()=>{e("removeFirstToastMessage")}),4e3)}}}},state:{initialized:!1,loggedInUser:null,contests:[],rounds:[],teams:[]},mutations:{SET_INITIALIZED(e){e.initialized=!0},UPDATE_USER(e,t){e.loggedInUser=t||null},UPDATE_CONTESTS(e,t){e.contests=t},UPDATE_ROUNDS(e,t){e.rounds=t||[]},UPDATE_TEAMS(e,t){e.teams=t}},getters:{standardContest:e=>e.contests.find((e=>e.id===$t.Standard)),schedule(e,t){if(!t.standardContest)return;const s={announcement:t.standardContest.announcementAt,registration:[t.standardContest.registrationStartedAt,t.standardContest.registrationEndedAt],rounds:[],results:null};return e.rounds.length&&(s.rounds=e.rounds.map((e=>({title:es(e.id)+" ROUND",mapping:[e.submissionsStartedAt,e.submissionsEndedAt],judging:[e.judgingStartedAt,e.judgingEndedAt]}))),s.results=e.rounds[e.rounds.length-1].resultsAt),s},currentSubmissionRound:e=>e.rounds.find((e=>new Date>=new Date(e.submissionsStartedAt)&&new Date<new Date(e.submissionsEndedAt)))},actions:{async SET_INITIAL_DATA({commit:e,dispatch:t}){await Promise.all([t("UPDATE_USER"),t("UPDATE_CONTESTS")]),e("SET_INITIALIZED")},async UPDATE_USER({commit:e}){const{data:t}=await Wt.get("/api/users/me");e("UPDATE_USER",t)},async UPDATE_CONTESTS({commit:e}){const{data:t}=await Wt.get("/api/contests");e("UPDATE_CONTESTS",t)},async UPDATE_ROUNDS({commit:e},t){const{data:s}=await Wt.get(`/api/contests/${t}/rounds`);e("UPDATE_ROUNDS",s)},async UPDATE_TEAMS({commit:e}){const{data:t}=await Wt.get("/api/teams");e("UPDATE_TEAMS",t)}},strict:!1}),ss=C({history:k(),routes:Ht,linkActiveClass:"active"});ss.beforeEach((async(e,t,s)=>{var a;return document.title=e.meta.title||"osu! Beatmapping World Championship",ts.state.initialized||await ts.dispatch("SET_INITIAL_DATA"),e.meta.requiresAuth&&!ts.state.loggedInUser?s({name:"401",query:{redirect:e.path}}):e.meta.requiresStaff&&!(null==(a=ts.state.loggedInUser)?void 0:a.isStaff)?s({name:"404"}):void s()}));const as=new P;let ns=as.renderer.rules.link_open||function(e,t,s,a,n){return n.renderToken(e,t,s)};as.renderer.rules.link_open=function(e,t,s,a,n){const i=e[t].attrIndex("target");if(i<0)e[t].attrPush(["target","_blank"]);else{const s=e[t].attrs;s&&(s[i][1]="_blank")}return ns(e,t,s,a,n)},ns=as.renderer.rules.table_open||function(e,t,s,a,n){return n.renderToken(e,t,s)},as.renderer.rules.table_open=function(e,t,s,a,n){return e[t].attrPush(["class","table table-dark w-auto mx-auto table-hover"]),ns(e,t,s,a,n)},ns=as.renderer.rules.heading_open||function(e,t,s,a,n){return n.renderToken(e,t,s)},as.renderer.rules.heading_open=function(e,t,s,a,n){return e[t].attrPush(["class","border-bottom mb-4"]),ns(e,t,s,a,n)};const is=O(Z);is.use(ss),is.use(ts),is.config.globalProperties.$http=Wt,is.config.globalProperties.$md=as,is.config.globalProperties.$formatDate=function(e,t=Xe.Input){const s=new Date(e),a=tt(s.getMonth()+1),n=tt(s.getDate()),i=tt(s.getHours()),r=tt(s.getMinutes());return t===Xe.Input?`${s.getFullYear()}-${a}-${n}T${i}:${r}`:t===Xe.Date?`${s.getFullYear()}-${a}-${n}`:t===Xe.Locale?s.toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric"}):s.toLocaleString()},is.directive("bs-tooltip",ye),is.mount("#app");export{$t as C,Xe as D,Zt as I,qt as J,Qt as S,R as U,st as _,N as a,Xt as b,Kt as c};
