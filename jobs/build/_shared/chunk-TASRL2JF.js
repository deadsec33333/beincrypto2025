import{c as O,f as j,k as u}from"/jobs/build/_shared/chunk-OTKXJQRY.js";var x=O(p=>{"use strict";u();Object.defineProperty(p,"__esModule",{value:!0});p.FormatMoney=void 0;var y=class{constructor(a){this.options=a,this.version="1.6.3",this.defaults={grouping:!0,separator:",",decimalPoint:".",decimals:0,symbol:"",append:!1,leadZeros:!0},this.from=(e,f={},c=!1)=>{let t=Object.assign(Object.assign({},this.options),f);if(typeof e!="number"||Number.isNaN(e))return;let l=e<0?"-":"",n,r,i,d="",b="";n=Math.abs(e).toFixed(t.decimals),(parseFloat(n)===0||n==="0")&&(l=""),t.leadZeros||(n=parseFloat(n).toString());let m=n.split(".");[r]=m;let g=m.length>1?t.decimalPoint+m[1]:"";if(t.grouping){i="";for(let s=0,h=r.length;s<h;s+=1)s!==0&&s%3===0&&(i=t.separator+i),i=r[h-s-1]+i;r=i}return t.append?b=t.symbol:d=t.symbol,c?{source:e,negative:e<0,fullAmount:r+g,amount:r,decimals:g,symbol:t.symbol}:l+d+r+g+b},this.un=(e,f)=>{let c=Object.assign(Object.assign({},this.options),f);if(typeof e=="number")return e;if(typeof e!="string")return;let t=new RegExp(`[^0-9-${c.decimalPoint}]`,"g"),l=parseFloat(e.replace(/\((?=\d+)(.*)\)/,"-$1").replace(t,"").replace(`${c.decimalPoint}`,"."));return Number.isNaN(l)?0:l},this.options=Object.assign(Object.assign({},this.defaults),a)}};p.FormatMoney=y});u();var F=j(x()),$=new F.FormatMoney({decimals:0});function S(o=""){return o.split(" ").map(function(a){return`${a.charAt(0).toUpperCase()}${a.slice(1)}`}).join(" ")}function A(o){return o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function P(o){return $.from(o,{symbol:"$"})}function C(o){return Math.round(o/1e3).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"K"}export{S as a,A as b,P as c,C as d};
/*!
 * format-money-js v1.6.3
 * (c) 2020-2023 Yurii Derevych
 * URL: https://github.com/dejurin/format-money-js
 * Sponsored:
 * https://cr.today/
 * https://currencyrate.today/
 * Released under the BSD-2-Clause License.
 */
