import{_ as s}from"./DataTable.0edba146.js";import{D as a}from"./index.ddf63b3b.js";import{d as t,b as e,o,c as i,a as d}from"./vendor.8d251a54.js";var l=t({name:"StaffLogs",components:{DataTable:s},data:()=>({logs:[],page:1,fields:["text","type",{key:"createdAt",label:"Date",formatter:a.Locale}]}),async created(){const{data:s}=await this.$http.get("/api/staff/logs");this.logs=s},methods:{async showMore(){this.page++;const{data:s}=await this.$http.get("/api/staff/logs?page="+this.page);s.length?this.logs.push(...s):this.$store.dispatch("addToastMessage",{type:"info",message:"No more data"})}}});const r={class:"container"},n={class:"row mb-2"},c={class:"col-sm"},f={class:"row"},m={class:"col"};l.render=function(s,a,t,l,p,h){const g=e("data-table");return o(),i("div",r,[d("div",n,[d("div",c,[d(g,{items:s.logs,fields:s.fields},null,8,["items","fields"])])]),d("div",f,[d("div",m,[d("button",{class:"btn btn-primary w-100",onClick:a[1]||(a[1]=(...a)=>s.showMore&&s.showMore(...a))}," show more ")])])])};export default l;
