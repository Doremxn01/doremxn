(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const h="todorandomkey",x=t=>{const i=e=>e.split("").map(s=>s.charCodeAt(0)),n=e=>("0"+Number(e).toString(16)).substr(-2),r=e=>i(t).reduce((s,o)=>s^o,e);return e=>e.split("").map(i).map(r).map(n).join("")},E=t=>{const i=r=>r.split("").map(e=>e.charCodeAt(0)),n=r=>i(t).reduce((e,s)=>e^s,r);return r=>{var e;return((e=r.match(/.{1,2}/g))==null?void 0:e.map(s=>parseInt(s,16)).map(n).map(s=>String.fromCharCode(s)).join(""))||""}};function S(t){for(var i=t+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var e=n[r];e.charAt(0)==" ";)e=e.substring(1,e.length);if(e.indexOf(i)==0)return e.substring(i.length,e.length)}return null}function b(t,i,n){var r="",e=new Date;n||(n=1e3),e.setTime(e.getTime()+n*60*1e3),r="; expires="+e.toUTCString(),document.cookie=t+"="+(i||"")+r+"; path=/"}function X(t,i=!1){var e;const n=window;if((e=n==null?void 0:n._shareustag)!=null&&e.backfillSetup&&!i)return;const r=document.getElementById(t);if(r!=null&&r.parentNode){const s=r.parentElement;setTimeout(()=>{if(s.offsetHeight<90){if(S("shrs_bf")==="false"){s.style.display="none";return}s.replaceChild(document.createRange().createContextualFragment(`
  <a target="_blank" href="https://bit.ly/44JmOtJ">
  <img style="width:300px;height:250px" src="https://i.ibb.co/YBctBBV/Backfillshareus-min.jpg" alt="Backfillshareus-min" border="0">
      </a>
    `),s.querySelector(".adsterra-ad"))}},3e3),r.parentNode.replaceChild(document.createRange().createContextualFragment(Y()),r);return}}function J(t,i){return Math.floor(Math.random()*(i-t+1))+t}function Y(){return`
<style>
.iframe-container {
  width: 300px;
  height: 250px;
}
</style>
<div class="iframe-container">
<iframe src="https://securepubads.shareusads.com/ads_iframe/${J(1,10)}" id="myIframe" width="300" height="250" frameborder="0" style="border: none;">
</iframe>
</div>
`}function R(){try{let i=function(){var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/Arlina-Design/quasar@master/arlinablock.js",document.body.appendChild(e)};const n=window._shareustag;if(n.antiAdblockEnabled)return;n.antiAdblockEnabled=!0,window._shareustag=n;var t=document.createElement("style");t.type="text/css",t.innerHTML=`
@keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}100%{opacity:1;transform:translateY(0)}}
@keyframes rubberBand{from{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,0.75,1)}40%{transform:scale3d(0.75,1.25,1)}50%{transform:scale3d(1.15,0.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scale3d(1,1,1)}}
/* Say Hi to Adblock */
#arlinablock{background:rgba(0,0,0,0.65);position:fixed;margin:auto;left:0;right:0;top:0;bottom:0;overflow:auto;z-index:999999;animation:fadeInDown 1s}
#arlinablock .header{margin:0 0 15px 0}
#arlinablock .inner{background:#e3482d;color:#fff;box-shadow:0 5px 20px rgba(0,0,0,0.1);text-align:center;width:600px;padding:40px;border-radius:5px;margin:7% auto 2% auto;animation:rubberBand 1s}
#arlinablock button{padding:10px 20px;border:0;background:rgba(0,0,0,0.15);color:#fff;margin:20px 5px;cursor:pointer;transition:all .3s}
#arlinablock button:hover{background:rgba(0,0,0,0.35);color:#fff;outline:none}
#arlinablock button.active,#arlinablock button:hover.active{background:#fff;color:#222;outline:none}
#arlinablock .fixblock{background:#fff;text-align:left;color:#000;padding:20px;height:250px;overflow:auto;line-height:30px}
#arlinablock .fixblock div{display:none}
#arlinablock .fixblock div.active{display:block}
#arlinablock ol{margin-left:20px}
@media(max-width:768px){#arlinablock .inner{width:calc(100% - 20px);margin:10px auto;padding:15px}}
`,document.head.appendChild(t);const r=window;window.addEventListener?window.addEventListener("load",i,!1):r.attachEvent?r.attachEvent("onload",i):window.onload=i}catch(i){console.log(i)}}const N=E(h),C=x(h),L=N("1408080c0f4653531d0c15520e191a190e0f141d0e19090f52040506531d180f4318411813111d15122315185a1d411d18091215082315185a0c410c1d1b1923090e105a0e410e191a190e0e190e"),U=[""];function z(t,i,n){let{domain_id:r,adunit_id:e,adunit_name:s}=k(t);if(U.includes(e))return;U.push(e),s=s.replace(" ",""),s=s.replace(" ",""),s=s.replace(" ",""),s=s.replace(" ",""),s=s.replace(" ",""),s=s.replace(" ",""),s=s.replace(" ","");let o=L;o=o.replace("domain_id",C(r)),o=o.replace("adunit_id",C(e));const a=window.location.href||"null",l=document.referrer||"null";o=o.replace("referrer",C(l)),o=o.replace("page_url",C(a)),document.getElementById(n)||console.log("Element with ID not found."),V(n,i),fetch(o,{headers:{Origin:"origin"}}).then(p=>{p.ok&&p.text().then(d=>{let u=JSON.parse(N(d));u!=null&&u.result&&(u=u.result),u!=null&&u.enable_anti_adblock&&R(),u!=null&&u.disable_shareus_banner&&b("shrs_bf","false",1e4),u!=null&&u.disable_adsterra_backfill&&b("shrs_ab","false",1e4),u!=null&&u.cc&&b("user_ip",u==null?void 0:u.cc,1e3),W(u,n,i,s)})})}function W(t,i,n,r){var l;try{P()}catch(c){console.log(c)}const e=window;if(!((l=e==null?void 0:e.googletag)!=null&&l.apiReady)){const c=document.createElement("script");c.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js",c.async=!0,document.body.appendChild(c)}const s=`/${t.id}/${t.parent}/${r}`;e.googletag=e.googletag||{cmd:[]};const o=e.googletag,a=M(n,i);o.cmd.push(function(){const c=o.defineSlot(s,a,i).addService(o.pubads());o.pubads().enableLazyLoad({fetchMarginPercent:150,renderMarginPercent:50,mobileScaling:1}),o.pubads().addEventListener("slotRenderEnded",p=>{var d;if(p.slot===c){const u=(d=document.getElementById(i))==null?void 0:d.querySelector(".shrs-loading-container");u&&(u.style.display="none")}}),o.pubads().set("page_url",t.domain),o.enableServices(),o.display(i)})}function V(t,i){var p,d;const n=document.createElement("style");n.type="text/css",n.innerHTML=Z,document.head.appendChild(n);const r=document.getElementById(t);if(!r)return;const e=document.createElement("div");e.classList.add("shr-ads-container");const s=document.createElement("div");s.innerHTML=`
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAUCAYAAAAXxsqQAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT3SURBVHgB7VhbbJVFEP4OSiuKNxQMiOGAAkExaghqvNZqAl7wQUOtRtPTB+9GwfTFGE1jogE06oPGC4koJkITjaY+aFBTX4wYtSIGjXjpOSIR6wXEcKf9ma87m3/O9r+UQ3ih/ZIv/bszO7s7Ozs7e4ARHBYUcGgYI9yFYYRSqXwbItyZJt+1+591HR1zFh+dIDtZOEl4onC3cLOwVxgZnVHCF4V3Cd8TLhT2YxigWJyyutxTuUQ+70+SFzRWrWOPFXInHhROM+1/C9cIHxWWjS6dSQdfJTxBuA3DAO3thf6Ghq5F04pTK/2IirGkcKmE3nmhfh2c86IM/gQXzcTxcA5n+1bhSRjmaGnpebbUUo6ab+nu4v8+YhcIr9Hvn+GO97/C6cJ5cKnhNOFxcI4cQQ68Yy9HfJExHXxqdOhUOn6D8PcUOwXV41FgXv4WbmOScJRwqvBM4X7hWuEOuKivF/6ZYHeb6kwUni/8TedjcYpwhnA83Gn6HoPTE1NXg/AXYSWQ8U6ZK1wPd6dYcNyz4QKL89uIIQbYc4iP/FIdJAs2FXDynXAL9zb4/RicEy1mC7+Ac77X3SJcIuzRfncb/ReEe+Gc8JDqRtr/JtVhZbJC+BeqUxc3dhncfeDxjMq2C4vB3N5W2Y/CU7VtLNzp3RHY/k+4Sv0wgNbWcluppdLnU4HHtcJ9piOdtVx4j/DCYHJAtWPT2CdsM33OEv6R0yfSCXt8nqH3MFzO/9i00WFbgrW8BhepRKdpn2/Gobyi7Xt1zcQrOXNd4A20t0ejJM8+1dz09SfG7kBkLUnpzDLqM+HVSHcsv5+EK0HWm3YeGZ9uVqI6mnhKHggWm+VYzmONLna18AzhIiNnO9PLeJ3rOuOouTU4lmloJ+JAu114o67xO7h0N8nYGHBuU9Pa6xCAhs4Vvir8QRdiF7wd8U6Gjl1o7MxCfHT+14USPUa/0eiPFr6DfMcuV12LL83c7hWWDN81fe9Q/YON2K1G/w04p/I+Ys6tR41gbXoz4p0n31JZmGNtucXSbTPiXDhR2/cjdnb44rsV+Y6dH/Sx4+SlpBu0z8E69pEUm9R5Gi6/J8If02OEE+Buff+CYhQwknjZbNK2GQk2ouD/fiS/wiIzJhfSZ2R5lyXRmyHjQl8X7kkY81fhB6gNTFesLrjxc+ACiNUHT06b2n4pywCFjChG50xUR1Qj4p3q0rasBwIdtwmDI3Yjqi8eD16M3ciP2AswGF7O1JO06Rcp/XpWGXtLTfsUxOmLv33M1nbmcV5QY1WXc201NjqQAjqBF9cV+pd1KPPrN8Kv4MoOm4w/Qu14U/iEfi9TuxyLD5DpqA0rhBfDLZj59mW4GpWO4HueJRlPBmtf1r2sIJq1LyOOtSlP6fWIKx9GKB9JTIXccPqAp/dDuIpjlhl/D3IwD3GNmEYepzrVryVixyG7fArzOJAfsRxrZY49lnhFM++uDF068DLV5Zp2Zugysq/EEDAZLiXwVeMrAv5lUr8P1XmQObJT5XR4+BDwtzzzs03wjCQW6b1mgtyExdpGe61Gn+UYj2g30vNwvfbZEMyb9p4XnhPoczMeh6tSvD7rXlYRMwNdXmLvw13QkdFl+dmIGsBF8BeucRk6zDmno/oXMgvKRqfIuDGM5Mmmjc/FCSnjDBWMyLx5W/Ai4vO6LkfPP62pOwYjGMERhwNiGvBdPwkJewAAAABJRU5ErkJggg==">
<div> Advertisement </div>
`,s.classList.add("shr-ads-tag"),s.addEventListener("click",()=>{window.open("https://bit.ly/4beUp1m","_blank")});const o=(p=document.getElementById(t))==null?void 0:p.parentElement;setTimeout(()=>{o&&o.offsetHeight<50&&(e.style.display="none")},4e3),e.appendChild(s),(d=r.parentNode)==null||d.insertBefore(e,r),e.appendChild(r);const a=document.getElementById(t);a.innerHTML='<p class="shrs-loading-icon">Ad</p>';const l=M(i,t)[0];a.style.minWidth=l[0]+"px",a.style.minHeight=l[1]+"px";const c=document.body.offsetWidth;if(c<600){e.style.width=c+"px";const u=e.getBoundingClientRect();console.log(u);const B=u.x;e.style.marginLeft="-"+B+"px"}}function T(t){const i=t.split("-");return{provider:i[0],domain_id:i[1],adunit_id:i[2]}}function k(t){const i=t.split("/");return{provider:i[1],domain_id:i[2],adunit_id:i[3],adunit_name:i[4]}}const Q=[[300,250],[250,250],[336,280],[360,300],[320,280],[728,90],[468,60],[970,90]];function M(t,i){if(!(t!=null&&t.length)||!i)return t;for(let n=0;n<t.length;n++){const r=t[n];if(typeof r=="string"&&r.toLowerCase()==="responsive")return K(Q,i)}return t}function K(t,i){const n=document.getElementById(i).parentElement;if(!n)return t;n.style.width="100%";const r=n.offsetWidth+0;if(n.style.width="fit-content",r){const e=[[300,250]];for(let s=0;s<t.length;s++){const o=t[s];o[0]<=r&&e.push(o)}return e}return t}const Z=`
.shr-ads-container{
position: relative;
width:fit-content;
height: fit-content;
display:flex;
flex-direction:column;
border:1px solid #dadce0;
background:#F2F2F2;
align-items:center;
padding-bottom:4px;
border-radius:4px 4px 0px 0px;
}
.shr-ads-tag img{
height:12px
}
.shr-ads-tag{
width:100%;
min-width:20px;
display:flex;
align-items:center;
justify-content:space-between;
cursor:pointer;
height: 20px;
z-index:1000;
font-size:8px;
background:#F2F2F2;
color:#555555;
padding:0px 6px;
border-radius:4px 4px 0px 0px;
border-bottom:none;
whitespace:nowrap;
}
.shr-ads-bottom-tag{
display:flex;
width:100%;
height:11px;
background:white;
}
.shr-ads-bottom-img{
height:100%;
}

*{box-sizing:border-box;}
p{margin:0;padding:0;}
p{line-height:1.7;}
*,:after,:before{box-sizing:border-box;}
p.shrs-loading-icon {
color:black;
margin: 0;
padding: 0;
}
.shrs-loading-icon {
line-height: 1.7;
}
.shrs-loading-icon {
border: 1px solid rgba(36, 39, 44, 0.5);
border-radius: 4px;
bottom: 0;
display: flex;
align-items:center;
justify-content:center;
font-size: 10px !important;
height: 18px;
left: 0;
line-height: 1 !important;
margin-bottom: 5px;
margin: auto !important;
padding: 0 6px !important;
position: absolute;
right: 0;
text-indent: unset;
top: 0;
width: 26px;
}
.shrs-loading-icon:before {
animation: spin 2s linear infinite;
border: 2px solid rgba(36, 39, 44, 0.1);
border-radius: 50%;
border-top-color: rgba(36, 39, 44, 0.3);
content: "";
height: 50px;
left: -13px;
position: absolute;
top: -17px;
width: 50px;
}
/*! CSS Used keyframes */
@keyframes spin {
to {
transform: rotate(1turn);
}
}`,m=x(h),_=E(h),A=_("1408080c0f4653531d0c15520e191a190e0f141d0e19090f52040506");function P(){const t=window;t.googletag=t.googletag||{cmd:[]};const i=t._shareustag||{cmd:[]};(i==null?void 0:i.listeners)!==!0&&(window.addEventListener("blur",function(){window.setTimeout(function(){var r,e;const n=(e=(r=document.activeElement)==null?void 0:r.parentElement)==null?void 0:e.parentElement;if(n!=null&&n.id.includes("shareusadx")){try{document.activeElement.blur()}catch(l){console.log(l)}let{adunit_id:s,domain_id:o,provider:a}=T(n.id);if(o&&s&&a){o=m(o),s=m(s);const l=A+`/google/ads?d=${o}&a=${s}&ac=${m("clicks")}`,c=new XMLHttpRequest;c.open("GET",l,!0),c.setRequestHeader("Content-Type","application/json"),c.send()}}},0)}),i.listeners=!0,t._shareustag=i,t.googletag=t.googletag||{cmd:[]},t.googletag.cmd.push(function(){const n=t.googletag;n.pubads().addEventListener("slotRenderEnded",r=>{const s=r.slot.getSlotElementId();if(!s)return;let{adunit_id:o,domain_id:a,provider:l}=T(s);if(l!=="shareusadx"||r.lineItemId)return;if(a=m(a),o=m(o),r.isEmpty){X(s);return}const c=A+`/adview?d=${a}&a=${o}&ac=${m("impressions")}`,p=new XMLHttpRequest;p.open("GET",c,!0),p.setRequestHeader("Content-Type","application/json"),p.send()}),n.pubads().addEventListener("slotRequested",r=>{const s=r.slot.getSlotElementId();if(!s)return;let{adunit_id:o,domain_id:a,provider:l}=T(s);if(l!=="shareusadx")return;a=m(a),o=m(o);const c=A+`/google/ads?d=${a}&a=${o}&ac=${m("requests")}`,p=new XMLHttpRequest;p.open("GET",c,!0),p.setRequestHeader("Content-Type","application/json"),p.send()}),n.pubads().addEventListener("impressionViewable",r=>{const s=r.slot.getSlotElementId();if(!s)return;let{adunit_id:o,domain_id:a,provider:l}=T(s);if(l!=="shareusadx")return;a=m(a),o=m(o);const c=A+`/activeview?d=${a}&a=${o}&ac=${m("viewable_impressions")}`,p=new XMLHttpRequest;p.open("GET",c,!0),p.setRequestHeader("Content-Type","application/json"),p.send()})}))}function ee(){try{if(document.location.href.indexOf("chilevision.cl")>-1){const t=document.createElement("style");t.type="text/css",t.appendChild(document.createTextNode(`
.shr-ads-tag{
display:none !important;
}
`)),document.head.appendChild(t)}}catch(t){console.log(t)}}ee();const te=E(h),y=x(h);function oe(t){let{adunit_id:i,adunit_name:n,domain_id:r}=k(t);n=n.replace(" ",""),n=n.replace(" ",""),n=n.replace(" ",""),n=n.replace(" ",""),n=n.replace(" ",""),n=n.replace(" ",""),n=n.replace(" ","");let e=L;e=e.replace("domain_id",y(r)),e=e.replace("adunit_id",y(i));const s=window.location.href||"null",o=document.referrer||"null";e=e.replace("referrer",y(o)),e=e.replace("page_url",y(s)),fetch(e,{headers:{Origin:"origin"}}).then(a=>{a.ok&&a.text().then(l=>{const c=JSON.parse(te(l)),p=c.result;p!=null&&p.enable_anti_adblock&&R();const d=c.auto_ads_settings;re(d,p,{adunit_name:n,adunit_id:i,domain_id:r}),ne(d,p,{adunit_name:n,adunit_id:i,domain_id:r})})})}function ne(t,i,{adunit_name:n,adunit_id:r,domain_id:e}){if(!(!(t!=null&&t.left_rail_enabled)&&!(t!=null&&t.right_rail_enabled))){if(t!=null&&t.left_rail_enabled){const s=window;s.googletag=s.googletag||{cmd:[]};const o=s.googletag;o.cmd.push(()=>{var l;const a=(l=o.defineOutOfPageSlot(`/${i.id}/${i.parent}/${n}`,o.enums.OutOfPageFormat.LEFT_SIDE_RAIL))==null?void 0:l.addService(o.pubads());o.pubads().set("page_url",i.domain),o.enableServices(),a&&o.display(a),o.pubads().addEventListener("slotRenderEnded",c=>{c.slot===a&&(c.isEmpty||g({adunit_id:r,domain_id:e,action:"impressions"}))}),o.pubads().addEventListener("slotRequested",c=>{c.slot===a&&g({adunit_id:r,domain_id:e,action:"requests"})}),o.pubads().addEventListener("impressionViewable",c=>{c.slot===a&&g({adunit_id:r,domain_id:e,action:"viewable_impressions"})})})}if(t!=null&&t.right_rail_enabled){const s=window;s.googletag=s.googletag||{cmd:[]};const o=s.googletag;o.cmd.push(()=>{var l;const a=(l=o.defineOutOfPageSlot(`/${i.id}/${i.parent}/${n}`,o.enums.OutOfPageFormat.RIGHT_SIDE_RAIL))==null?void 0:l.addService(o.pubads());o.pubads().set("page_url",i.domain),o.enableServices(),a&&o.display(a),o.pubads().addEventListener("slotRenderEnded",c=>{c.slot===a&&(c.isEmpty||g({adunit_id:r,domain_id:e,action:"impressions"}))}),o.pubads().addEventListener("slotRequested",c=>{c.slot===a&&g({adunit_id:r,domain_id:e,action:"requests"})}),o.pubads().addEventListener("impressionViewable",c=>{c.slot===a&&g({adunit_id:r,domain_id:e,action:"viewable_impressions"})})})}}}function re(t,i,{adunit_name:n,adunit_id:r,domain_id:e}){if(!(!(t!=null&&t.bottom_anchor_enabled)&&!(t!=null&&t.bottom_sticky_enabled))){if(t!=null&&t.bottom_sticky_enabled,t!=null&&t.bottom_anchor_enabled){const s=window;s.googletag=s.googletag||{cmd:[]};const o=s.googletag;o.cmd.push(()=>{const a=o.defineOutOfPageSlot(`/${i.id}/${i.parent}/${n}`,o.enums.OutOfPageFormat.BOTTOM_ANCHOR).addService(o.pubads());o.pubads().set("page_url",i.domain),o.enableServices(),o.display(a),o.pubads().addEventListener("slotRenderEnded",l=>{l.slot===a&&(l.isEmpty||g({adunit_id:r,domain_id:e,action:"impressions"}))}),o.pubads().addEventListener("slotRequested",l=>{l.slot===a&&g({adunit_id:r,domain_id:e,action:"requests"})}),o.pubads().addEventListener("impressionViewable",l=>{l.slot===a&&g({adunit_id:r,domain_id:e,action:"viewable_impressions"})})})}if(t.bottom_sticky_enabled){const s=document.createElement("style");s.type="text/css",s.innerHTML=ie,document.head.appendChild(s);const o=`
<div class="shrs-bottom-sticky-container">
<div id="shareusadx-${e}-${r}">
<script>
window._shareustag = window._shareustag || {cmd:[]};
_shareustag.cmd.push(function() {
var slot1 = _shareustag.defineSlot('/shareusadx/${e}/${r}/shareus_bottom_sticky', [[300,250]],'shareusadx-${e}-${r}');
});
<\/script>
</div> 
<div id="bottom-sticky-close-icon">
Close Ad
</div>
</div>
`;document.body.appendChild(document.createRange().createContextualFragment(o));const a=document.querySelector("#bottom-sticky-close-icon");a&&a.addEventListener("click",function(){document.querySelector(".shrs-bottom-sticky-container").remove()})}}}function g({adunit_id:t,domain_id:i,action:n}){i=y(i),t=y(t);const r=y(n),e=A+`/google/ads?d=${i}&a=${t}&ac=${r}`,s=new XMLHttpRequest;s.open("GET",e,!0),s.setRequestHeader("Content-Type","application/json"),s.send()}const ie=`
.shrs-bottom-sticky-container{
position:fixed;
bottom:0;
left:50%;
transform:translate(-50%);
z-index:1000;

}
#bottom-sticky-close-icon{
position:absolute;
top:-23px;
right:0;
background-color:#6c38e3;
color:white;
font-size:13px;
border-radius:5px 5px 0 0;
padding:2px 8px;
}
`,q=x(h);function se(t){let{domain_id:i,adunit_id:n}=k(t),r=L;r=r.replace("domain_id",q(i)),r=r.replace("adunit_id",q(n));const e=window.location.href||"null",s=document.referrer||"null";r=r.replace("referrer",q(s)),r=r.replace("page_url",q(e))}const ae=E(h),v=x(h);function ce(t){const{adunit_id:i,adunit_name:n,domain_id:r}=k(t);let e=L;const s=window.location.href||"null",o=document.referrer||"null";e=e.replace("referrer",v(o)),e=e.replace("page_url",v(s)),e=e.replace("domain_id",v(r)),e=e.replace("adunit_id",v(i)),fetch(e,{headers:{Origin:"origin"}}).then(a=>{a.ok&&a.text().then(l=>{const c=JSON.parse(ae(l));c!=null&&c.enable_anti_adblock&&R(),le({setup:c,adunit_name:n,adunit_id:i,domain_id:r})})})}function le({adunit_name:t,setup:i,adunit_id:n,domain_id:r}){var a;try{t=t.replace(" ",""),t=t.replace(" ",""),t=t.replace(" ",""),t=t.replace(" ",""),t=t.replace(" ",""),t=t.replace(" ",""),t=t.replace(" ",""),P()}catch{}const e=window;if(!((a=e==null?void 0:e.googletag)!=null&&a.apiReady)){const l=document.createElement("script");l.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js",l.async=!0,document.body.appendChild(l)}const s=`/${i.id}/${i.parent}/${t}`;e.googletag=e.googletag||{cmd:[]};const o=e.googletag;o.cmd.push(function(){const l=o.defineOutOfPageSlot(s,o.enums.OutOfPageFormat.INTERSTITIAL);l.addService(o.pubads()),o.pubads().set("page_url",i.domain),o.enableServices(),o.display(l),o.pubads().addEventListener("slotRenderEnded",c=>{c.slot===l&&H({event:c,eventName:"slotRenderEnded",adunit_id:n,domain_id:r})}),o.pubads().addEventListener("slotRequested",c=>{c.slot===l&&H({event:c,eventName:"slotRequested",adunit_id:n,domain_id:r})}),o.pubads().addEventListener("impressionViewable",c=>{c.slot===l&&H({event:c,eventName:"impressionViewable",adunit_id:n,domain_id:r})})})}function H({event:t,eventName:i,domain_id:n,adunit_id:r}){if(i==="slotRenderEnded"&&t.isEmpty)return;let e="";i==="slotRenderEnded"&&(e="impressions"),i==="slotRequested"&&(e="requests"),i==="impressionViewable"&&(e="viewable_impressions"),n=v(n),r=v(r),e=v(e);const s=A+`/google/ads?d=${n}&a=${r}&ac=${e}`,o=new XMLHttpRequest;o.open("GET",s,!0),o.setRequestHeader("Content-Type","application/json"),o.send()}const de=E(h),I=x(h);function pe(t){let{adunit_id:i,adunit_name:n,domain_id:r}=k(t);n=n.replace(" ",""),n=n.replace(" ",""),n=n.replace(" ",""),n=n.replace(" ",""),n=n.replace(" ",""),n=n.replace(" ",""),n=n.replace(" ","");let e=L;e=e.replace("domain_id",I(r)),e=e.replace("adunit_id",I(i));const s=window.location.href||"null",o=document.referrer||"null";e=e.replace("referrer",I(o)),e=e.replace("page_url",I(s)),fetch(e,{headers:{Origin:"origin"}}).then(a=>{a.ok&&a.text().then(l=>{const c=JSON.parse(de(l)),p=c.result;p.enable_anti_adblock&&R();const d=c.reward_ads_settings;if(!d)return;d.interval===0&&(d.interval=300),d.interval<300&&(d.interval=300);const u=new Date().getTime(),B=parseInt(S("shr_ad_t")||"0"),$=(u-B)/1e3;let O=!1;$>=(d==null?void 0:d.interval)&&(d==null?void 0:d.interval)!==0&&$!==0&&(O=!0,b("shr_ad_t",""+u,1e3)),d.initial_delay<10&&(d.initial_delay=10),console.log("showads = "+O),O&&setTimeout(()=>{D(d,p,{adunit_name:n,adunit_id:i,domain_id:r})},(d==null?void 0:d.initial_delay)*1e3),(d==null?void 0:d.interval)<300&&(d.interval=300);let j=4;O&&(d!=null&&d.interval)&&(d==null?void 0:d.interval)>0&&setInterval(()=>{j--,j!==0&&(console.log("loading through interval"),D(d,p,{adunit_name:n,adunit_id:i,domain_id:r}))},(d==null?void 0:d.interval)*1e3)})})}function D(t,i,{adunit_name:n,adunit_id:r,domain_id:e}){if(!(t!=null&&t.reward_ads_enabled))return;const s=window;s.googletag=s.googletag||{cmd:[]};const o=s.googletag;o.cmd.push(()=>{const a=o.defineOutOfPageSlot(`/${i.id}/${i.parent}/${n}`,o.enums.OutOfPageFormat.REWARDED).addService(o.pubads());o.pubads().set("page_url",i.domain),o.enableServices(),o.display(a),o.pubads().addEventListener("rewardedSlotReady",function(l){l.makeRewardedVisible()}),o.pubads().addEventListener("rewardedSlotGranted",function(){}),o.pubads().addEventListener("rewardedSlotClosed",function(){o.destroySlots([a])}),o.pubads().addEventListener("slotRenderEnded",l=>{l.slot===a&&(l.isEmpty?b("shr_ad_t","0",1e3):g({adunit_id:r,domain_id:e,action:"impressions"}))}),o.pubads().addEventListener("slotRequested",l=>{l.slot===a&&g({adunit_id:r,domain_id:e,action:"requests"})}),o.pubads().addEventListener("impressionViewable",l=>{l.slot===a&&g({adunit_id:r,domain_id:e,action:"viewable_impressions"})})})}function ue(){function t(){const r=document.querySelector("#google_pubconsole_console");r&&r.remove()}const i={childList:!0,subtree:!0};new MutationObserver(function(){t()}).observe(document.body,i)}P();function F(){const t=E("todorandomkey"),i=x("todorandomkey");if(S("shr_ad"))return!1;const n=window.location.href,r=new URL(n),e=new URLSearchParams(r.search);if(e.has(t("151d111d18111512")))return b("shr_ad",i(new Date().getTime()+""),100),!1;if(S("shr_ac"))return!0;if(e.has(t("19121d1e101918190a")))return b("shr_ac",i(new Date().getTime()+""),100),!0;let s=!1;return document.querySelectorAll("script").forEach(a=>{a.src.includes("securepubads.shareusads.com")&&a.hasAttribute("enable-dev")&&(s=!0)}),!!s}const w=window,f=w._shareustag||{cmd:[],isReady:!1};if(f.isReady)console.log("tried to load shareusgpt multiple times");else{try{try{ue()}catch(n){console.log(n)}me(),w.googletag=w.googletag||{cmd:[]};const i=w.googletag;i.cmd.push(function(){i.enableServices()})}catch(i){console.log(i)}console.log("starting sgpt");const t=f.cmd;f.defineSlot=z,f.defineBackfillSlot=se,f.defineOutOfPageSlot=ce,f.defineRewardAdSlot=pe,f.defineAutoAdSlot=oe,f.addAntiAdblock=R,f.antiAdblockEnabled=!1,f.isReady=!0,w._shareustag=f,t.forEach(i=>{F()===!1&&i()}),f.cmd=new Proxy(t,{set:function(i,n,r){return i[n]=r,isNaN(n)||F()===!1&&r(),!0}}),window._shareustag=f,fe()}var G;if(!((G=w==null?void 0:w.googletag)!=null&&G.apiReady)){const t=document.createElement("script");t.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js",t.async=!0,document.body.appendChild(t)}function fe(){document.addEventListener("DOMContentLoaded",function(){let t="G-6QNHEDWNPV",n="G-8NRSTTTPSH";const r=document.querySelectorAll('div[id*="shareusadx-"]');r&&r.length>0&&(n=t);try{const e=window.location.hostname;if(!(e==="cookad.net"||e==="pmkisnalists.in")){let s=function(...l){a.dataLayer.push(arguments)};const o=document.createElement("script");o.src="https://www.googletagmanager.com/gtag/js?id="+n,o.async=!0,document.head.appendChild(o);const a=window;a.dataLayer=a.dataLayer||[],s("js",new Date),s("config",n)}}catch{}})}function me(){const t=E("todorandomkey"),i=x("todorandomkey"),n=t("520b191e521d0c0c");if(document.referrer.indexOf(n)>-1){b("shr_ac",i(new Date().getTime()+""),5);return}if(S("shr_ac"))return;const e=window.location.href,s=new URL(e);if(new URLSearchParams(s.search).has(t("19121d1e101918190a"))){b("shr_ac",i(new Date().getTime()+""),100);return}let a=!1;if(document.querySelectorAll("script").forEach(p=>{p.src.includes("securepubads.shareusads.com")&&p.hasAttribute("enable-dev")&&(a=!0)}),!a){var c=document.createElement("script");c.src="https://cdn.jsdelivr.net/npm/disable-devtool",c.setAttribute("disable-devtool-auto",""),c.setAttribute("disable-menu","false"),document.head.appendChild(c)}}
