import{d as e,o as t,c as a,a as s,F as l,r,t as o,f as i,D as m}from"./vendor.28fcb284.js";var n=e({name:"DataTable",props:{customClass:{type:String,default:""},fields:{type:Array,default:()=>[]},items:{type:Array,required:!0}},emits:["rowClick"],computed:{formattedHeaders(){return this.fields.length?this.fields.map((e=>"string"==typeof e?{key:e,label:e}:{key:e.key,label:e.label||e.key,formatter:e.formatter})):this.items.length?Object.keys(this.items[0]).map((e=>({key:e,label:e}))):[]}},methods:{formatItem(e){return this.formattedHeaders.map((t=>{let a=e[t.key];return t.formatter&&(a||(a=""),a="string"==typeof t.formatter?this.$formatDate(a,t.formatter):t.formatter(a)),{header:t.key,value:a}}))}}});const c={class:"table-responsive"},d={key:0},y={key:1},f={key:0};n.render=function(e,n,u,k,b,h){return t(),a("div",c,[s("table",{class:["table table-hover mb-0",e.customClass]},[s("thead",null,[s("tr",null,[(t(!0),a(l,null,r(e.formattedHeaders,(e=>(t(),a("th",{key:e.key},o(e.label),1)))),128)),e.$slots.actions?(t(),a("th",d," Actions ")):i("",!0)])]),s("tbody",null,[(t(!0),a(l,null,r(e.items,((s,n)=>(t(),a("tr",{key:"item-"+n,class:{"row-clickable":s.clickable},onClick:t=>e.$emit("rowClick",s)},[(t(!0),a(l,null,r(e.formatItem(s),((l,r)=>(t(),a("td",{key:"value-"+r},[e.$slots["cell-"+l.header]?m(e.$slots,"cell-"+l.header,{key:0,value:l.value,item:s,index:n}):(t(),a("span",y,o(l.value),1))])))),128)),e.$slots.actions?(t(),a("td",f,[m(e.$slots,"actions",{item:s})])):i("",!0)],10,["onClick"])))),128)),m(e.$slots,"custom-rows")])],2)])};export{n as _};
