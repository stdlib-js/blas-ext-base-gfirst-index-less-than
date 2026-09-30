"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=q(function(A,g){
function P(e,r,a,i,s,v,f){var n,u,o,c,t,y,x;for(n=r.data,u=s.data,o=r.accessors[0],c=s.accessors[0],t=i,y=f,x=0;x<e;x++){if(o(n,t)<c(u,y))return x;t+=a,y+=v}return-1}g.exports=P
});var d=q(function(B,b){
var p=require('@stdlib/array-base-arraylike2object/dist'),j=l();function k(e,r,a,i,s,v,f){var n,u,o,c,t;if(e<=0)return-1;if(o=p(r),c=p(s),o.accessorProtocol||c.accessorProtocol)return j(e,o,a,i,c,v,f);for(n=i,u=f,t=0;t<e;t++){if(r[n]<s[u])return t;n+=a,u+=v}return-1}b.exports=k
});var L=q(function(C,I){
var h=require('@stdlib/strided-base-stride2offset/dist'),m=d();function O(e,r,a,i,s){return m(e,r,a,h(e,a),i,s,h(e,s))}I.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=L(),w=d();R(T,"ndarray",w);module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
