"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{92700:function(q,Z,y){y.r(Z),y.d(Z,{default:function(){return Y}});var U=y(15009),u=y.n(U),P=y(99289),T=y.n(P),$=y(37918),G=y.n($),H=JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"ChangePrice","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"string","name":"uri","type":"string"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"receivers","type":"address[]"},{"indexed":false,"internalType":"string[]","name":"uris","type":"string[]"}],"name":"MintOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"_CUR_TOKENID_","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"maxCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"uris","type":"string[]"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"queryUserTokens","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"tokenUrl","type":"string"}],"internalType":"struct PeopleTang.Token[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address[]","name":"receivers","type":"address[]"},{"internalType":"string[]","name":"uris","type":"string[]"}],"name":"mintOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"changePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),M="0x59548FB3CDEA24d9C8eF860d6243B3b28184dF01",g,O=function(d,t,a,s){var n=function(){var b=T()(u()().mark(function p(){var r,j,m,f,x,i,h,k;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return r=A.getContract(),j=r.methods[a],console.log(s),m=j.apply({},s).encodeABI(),v.next=6,g.eth.estimateGas({to:M,data:m,from:t,value:d});case 6:return f=v.sent,v.next=9,g.eth.getChainId();case 9:return x=v.sent,v.next=12,g.eth.getGasPrice();case 12:return i=v.sent,v.next=15,g.eth.getTransactionCount(t);case 15:return h=v.sent,k={from:t,to:M,nonce:h,gasPrice:i,gas:f*2,value:d,data:m,chainId:x},v.abrupt("return",k);case 18:case"end":return v.stop()}},p)}));return function(){return b.apply(this,arguments)}}();return new Promise(function(){var b=T()(u()().mark(function p(r,j){var m,f;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,n();case 3:return m=i.sent,i.next=6,g.eth.sendTransaction(m);case 6:f=i.sent,console.log("txHash:",f),r(f.transactionHash),i.next=14;break;case 11:i.prev=11,i.t0=i.catch(0),j(i.t0);case 14:case"end":return i.stop()}},p,null,[[0,11]])}));return function(p,r){return b.apply(this,arguments)}}())},A={addTestNetword:function(){var o=T()(u()().mark(function t(){return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:case"end":return s.stop()}},t)}));function d(){return o.apply(this,arguments)}return d}(),switchToMumbai:function(){var o=T()(u()().mark(function t(){return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(window.ethereum){s.next=2;break}throw"\u672A\u5B89\u88C5\u94B1\u5305, \u8BF7\u5B89\u88C5\u94B1\u5305\u540E\u91CD\u8BD5";case 2:return s.next=4,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x"+80001 .toString(16),chainName:"Mumbai",nativeCurrency:{name:"Mumbai",symbol:"MATIC",decimals:18},rpcUrls:["https://matic-mumbai.chainstacklabs.com"],blockExplorerUrls:["https://mumbai.polygonscan.com/"]}]});case 4:case"end":return s.stop()}},t)}));function d(){return o.apply(this,arguments)}return d}(),getLoginAccountQuiet:function(){var o=T()(u()().mark(function t(){var a;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.eth.getAccounts();case 2:return a=n.sent,n.abrupt("return",a[0]);case 4:case"end":return n.stop()}},t)}));function d(){return o.apply(this,arguments)}return d}(),login:function(){var o=T()(u()().mark(function t(){var a;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.switchToMumbai();case 2:return A.instance(),n.next=5,g.eth.getAccounts();case 5:if(a=n.sent,a.length!=0){n.next=12;break}return n.next=9,window.ethereum.enable();case 9:return n.next=11,g.eth.getAccounts();case 11:a=n.sent;case 12:return n.abrupt("return",a[0]);case 13:case"end":return n.stop()}},t)}));function d(){return o.apply(this,arguments)}return d}(),instance:function(){if(g)return g;if(!window.ethereum)throw"\u672A\u5B89\u88C5\u94B1\u5305, \u8BF7\u5B89\u88C5\u94B1\u5305\u540E\u91CD\u8BD5";return g=new(G())(window.ethereum),g},getContract:function(){var d=A.instance().eth.Contract,t=new d(H.Mt,M);return t},read:function(){var o=T()(u()().mark(function t(a,s){var n,b;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=A.getContract(),b=n.methods[a],r.next=4,b.apply({},s).call();case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}},t)}));function d(t,a){return o.apply(this,arguments)}return d}(),mint:function(){var o=T()(u()().mark(function t(a,s){var n,b;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g.eth.getAccounts();case 2:return n=r.sent,r.next=5,O(a,n[0],"mint",[s]);case 5:return b=r.sent,r.abrupt("return",b);case 7:case"end":return r.stop()}},t)}));function d(t,a){return o.apply(this,arguments)}return d}(),createStdERC20:function(){var o=T()(u()().mark(function t(a){var s,n;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,g.eth.getAccounts();case 2:return s=p.sent,p.next=5,O("0",s[0],"createStdERC20",[a._erc20_template_,a.totalSupply,a.name,a.symbol,0]);case 5:return n=p.sent,p.abrupt("return",n);case 7:case"end":return p.stop()}},t)}));function d(t){return o.apply(this,arguments)}return d}()},E=A,I=y(26105),L=y(5574),D=y.n(L),Q=y(43181),S=y(82466),B=y(67294),e=y(85893),W=E.instance();function K(o){var d=(0,B.useState)(1),t=D()(d,2),a=t[0],s=t[1],n=(0,B.useState)(!1),b=D()(n,2),p=b[0],r=b[1],j=(0,B.useState)({_CUR_TOKENID_:"0",maxCount:"1",price:""}),m=D()(j,2),f=m[0],x=m[1];return(0,B.useEffect)(function(){var i=function(){var k=T()(u()().mark(function c(){var v,w,F,N,R;return u()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:v={},w=["_CUR_TOKENID_","maxCount","price"],F=0;case 3:if(!(F<w.length)){C.next=12;break}return N=w[F],C.next=7,E.read(N);case 7:R=C.sent,v[N]=R;case 9:F++,C.next=3;break;case 12:x(v);case 13:case"end":return C.stop()}},c)}));return function(){return k.apply(this,arguments)}}();i();var h=setInterval(i,5e3);return function(){clearInterval(h)}},[]),(0,e.jsx)("div",{className:"flex flex-col",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex flex-row",children:[(0,e.jsx)(Q.Z,{min:1,max:100,value:a,onChange:function(h){h&&s(h)}}),(0,e.jsx)(S.ZP,{className:"ml-2",type:"primary",loading:p,onClick:T()(u()().mark(function i(){var h;return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,r(!0),c.next=4,E.login();case 4:return c.next=6,E.mint(f.price,["https://s2.coinmarketcap.com/static/img/coins/64x64/".concat(parseInt(f._CUR_TOKENID_)+1,".png")]);case 6:h=c.sent,h&&alert("\u4EA4\u6613\u6210\u529F\uFF0CHash:"+h),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(0),console.error(c.t0),alert("\u51FA\u9519, \u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u68C0\u67E5");case 14:return c.prev=14,r(!1),c.finish(14);case 17:case"end":return c.stop()}},i,null,[[0,10,14,17]])})),children:function(){return p?"\u6D4B\u8BD5\u7F51\u6709\u65F6\u6BD4\u8F83\u6162":W.utils.fromWei(f.price,"ether")+" ETH \u8D2D\u4E70"}()})]}),(0,e.jsxs)("div",{className:"text-sm text-gray-600",children:["\u9650\u8D2D\u6570\u91CF: (",(0,e.jsx)("span",{className:"text-red-700",children:f._CUR_TOKENID_}),"/",f.maxCount,")"]})]})})}var z=y(36107),_=E.instance();function J(o){var d=(0,B.useState)([]),t=D()(d,2),a=t[0],s=t[1],n=(0,B.useState)(""),b=D()(n,2),p=b[0],r=b[1];(0,B.useEffect)(function(){var m=function(){var x=T()(u()().mark(function i(){var h,k,c;return u()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,E.getLoginAccountQuiet();case 2:if(h=w.sent,!h){w.next=13;break}return w.next=6,E.read("queryUserTokens",[h]);case 6:k=w.sent,c=[],k.forEach(function(F){c.push({id:F.tokenId,url:F.tokenUrl})}),s(c),r(h),w.next=14;break;case 13:r(h);case 14:case"end":return w.stop()}},i)}));return function(){return x.apply(this,arguments)}}();m();var f=setInterval(m,5e3);return function(){clearInterval(f)}},[]);var j=(0,e.jsxs)("div",{className:"text-sm py-2",children:["\u5F53\u524D\u8D26\u53F7: ",p]});return p?a.length==0?(0,e.jsxs)("div",{children:[j,(0,e.jsx)("div",{children:"\u6682\u65E0\u8D2D\u4E70 NFT"})]}):(0,e.jsxs)("div",{children:[j,(0,e.jsx)("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:a.map(function(m,f){return(0,e.jsx)("div",{className:"py-4 shadow-md",children:(0,e.jsxs)("div",{className:"flex flex-col items-center",children:[(0,e.jsx)(z.Z,{src:m.url}),(0,e.jsx)("div",{className:"mt-2",children:m.id})]})},f)})})]}):(0,e.jsx)("div",{children:(0,e.jsx)(S.ZP,{className:"ml-2",type:"primary",onClick:T()(u()().mark(function m(){return u()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,E.login();case 2:case"end":return x.stop()}},m)})),children:"\u767B\u5F55\u67E5\u8BE2"})})}var ee=E.instance();function V(o){return(0,e.jsxs)("div",{children:[(0,e.jsxs)(I.Z,{title:"\u8BF4\u660E",className:"",children:[(0,e.jsx)(K,{}),(0,e.jsxs)("div",{className:"border-0 border-l-8 border-solid border-gray-400 bg-gray-200 px-2 py-4 my-2 flex flex-col",children:[(0,e.jsxs)("div",{className:"",children:["\u6D4B\u8BD5\u5E01(\u767B\u5F55\u8D26\u53F7\u6BCF\u5929\u53EF\u9886\u53D6 1 \u4E2A):"," ",(0,e.jsx)("a",{href:"https://mumbaifaucet.com/",target:"_blank",children:"https://mumbaifaucet.com/"})]}),(0,e.jsxs)("div",{className:"",children:["\u5408\u7EA6\u5730\u5740(\u5DF2\u5F00\u6E90):"," ",(0,e.jsx)("a",{href:"https://mumbai.polygonscan.com/address/0x59548fb3cdea24d9c8ef860d6243b3b28184df01#code",target:"_blank",children:"0x59548fb3cdea24d9c8ef860d6243b3b28184df01"})]})]})]}),(0,e.jsx)(I.Z,{title:"\u8D2D\u4E70\u8BB0\u5F55",className:"mt-4",children:(0,e.jsx)(J,{})})]})}var l=y(63232),ne=E.instance();function X(o){return(0,e.jsxs)(I.Z,{title:"Todo",className:"",children:[(0,e.jsxs)("div",{className:"",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(l.Z,{checked:!0,children:"\u5408\u7EA6\u7F16\u5199 (\u57FA\u4E8E\u5F00\u6E90 openzeppelin \u5065\u58EE)"}),(0,e.jsxs)("div",{className:"border-0 border-l-8 border-solid border-gray-400 bg-gray-200 px-2 py-4 my-2 flex flex-col",children:[(0,e.jsx)(l.Z,{checked:!0,children:"ERC721"}),(0,e.jsx)(l.Z,{checked:!0,children:"\u7528\u6237\u4E00\u6B21\u8D2D\u4E70\u591A\u4E2A"}),(0,e.jsx)(l.Z,{checked:!0,children:"Owner \u6279\u91CF mint"}),(0,e.jsx)(l.Z,{checked:!0,children:"Owner \u63D0\u6B3E"}),(0,e.jsx)(l.Z,{checked:!0,children:"Owner \u4FEE\u6539\u5B9A\u4EF7"}),(0,e.jsx)(l.Z,{checked:!0,children:"\u67E5\u8BE2\u7528\u6237\u62E5\u6709\u7684 NFT"}),(0,e.jsx)(l.Z,{checked:!0,children:"\u65E5\u5FD7(emit Event)\uFF0C\u4F9B thegraph \u68C0\u7D22"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(l.Z,{checked:!0,children:"Web \u7248\u672C"}),(0,e.jsxs)("div",{className:"border-0 border-l-8 border-solid border-gray-400 bg-gray-200 px-2 py-4 my-2 flex flex-col",children:[(0,e.jsx)(l.Z,{checked:!1,children:"\u4EFF lxDAO \u5341\u5468\u5E74 NFT(\u6570\u5B57\u6EA2\u51FA\u6F0F\u6D1E)"}),(0,e.jsx)(l.Z,{checked:!0,children:"\u7528\u6237\u94B1\u5305\u68C0\u6D4B"}),(0,e.jsx)(l.Z,{checked:!0,children:"\u7528\u6237\u94B1\u5305\u5207\u6362\u5230\u6D4B\u8BD5\u7F51/\u4E3B\u7F51"}),(0,e.jsx)(l.Z,{checked:!0,children:"\u552E\u4EF7/\u9500\u552E\u6570/\u603B\u6570\u91CF \u4ECE\u5408\u7EA6\u8BFB\u53D6"}),(0,e.jsx)(l.Z,{checked:!0,children:"\u8D2D\u4E70"}),(0,e.jsx)(l.Z,{checked:!0,children:"\u7F51\u9875\u5C55\u793A\u62E5\u6709 NFT"}),(0,e.jsx)(l.Z,{checked:!1,children:"\u6279\u91CF\u8D2D\u4E70"}),(0,e.jsx)(l.Z,{checked:!1,children:"\u94B1\u5305\u586B\u52A0\u5408\u7EA6\u8D44\u4EA7"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(l.Z,{checked:!1,children:"thegraph.com \u5BF9\u63A5"}),(0,e.jsxs)("div",{className:"border-0 border-l-8 border-solid border-gray-400 bg-gray-200 px-2 py-4 my-2 flex flex-col",children:[(0,e.jsx)(l.Z,{checked:!1,children:"\u5BF9\u63A5\u65E5\u5FD7"}),(0,e.jsx)(l.Z,{checked:!1,children:"\u5176\u5B83\u529F\u80FD\u9700\u6C42\uFF0C\u4E0D\u6E05\u6670"})]})]}),(0,e.jsx)("div",{children:(0,e.jsx)(l.Z,{checked:!1,children:"opensea.io \u5BF9\u63A5"})}),(0,e.jsx)("div",{children:(0,e.jsx)(l.Z,{checked:!1,children:"ipfs \u4E34\u65F6\u5B58\u50A8\u5BF9\u63A5"})}),(0,e.jsx)("div",{children:(0,e.jsx)(l.Z,{checked:!1,children:"Arweave \u6C38\u4E45\u5B58\u50A8\u5BF9\u63A5"})})]}),(0,e.jsx)("div",{className:""})]})}function Y(){return window.ethereum?(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[(0,e.jsx)(V,{}),(0,e.jsx)(X,{})]})}):(0,e.jsx)("div",{children:"\u672A\u5B89\u88C5\u94B1\u5305, \u8BF7\u5B89\u88C5\u94B1\u5305\u540E\u91CD\u8BD5"})}}}]);