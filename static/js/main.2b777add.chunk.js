(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1137:function(e,t){},1196:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),o=n.n(c),i=(n(511),n(266)),l=n.n(i),s=n(60),u=n(61),m=n(63),d=n(62),f=n(64),h=(n(567),n(568),n(498)),p=n.n(h),g=(n(190),n(106)),E=n.n(g),b=(n(577),n(133)),v=n.n(b),y=(n(284),n(81)),x=n.n(y),k=(n(582),n(172)),w=n.n(k),O=(n(587),n(267)),j=n.n(O),S=n(271),C=n(43),D=n.n(C),T=n(108),R=n(268),I=n.n(R),z=(n(595),n(500)),F=n.n(z),A=function(e){var t=e.type,n=e.text,a=e.onClick;return r.a.createElement("span",{onClick:a},r.a.createElement("i",{class:"iconfont "+t,style:{marginRight:8}}),n)},B=function(e){F.a.info(e,1)},P=n(173),L=n(505),_=n(270),H=n(503),J="https",N="api.jungle.alohaeos.com",Y=443,K="e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473",M=new H.JsSignatureProvider(["5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"]),W=J+"://"+N+":"+Y,X=new _.JsonRpc(W,{fetch:fetch}),Z=(new _.Api({rpc:X,signatureProvider:M,chainId:K,textDecoder:new TextDecoder,textEncoder:new TextEncoder}),function(){var e=Object(T.a)(D.a.mark(function e(t,n){var a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get_table_rows(Object(L.a)({json:!0,code:"weiwendapps2",scope:"weiwendapps2",table:t,limit:9999,reverse:!0,key_type:"i64",index_position:1},n));case 2:return a=e.sent,e.abrupt("return",a.rows);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()),U=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).onRefresh=Object(T.a)(D.a.mark(function e(){var t;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({refreshing:!0,isLoading:!0}),e.next=3,Z("posttable");case 3:t=e.sent,n.setState({data:t}),n.rData=n.genOnePageData(),n.setState({dataSource:n.state.dataSource.cloneWithRows(n.rData),refreshing:!1,isLoading:!1}),n.pageIndex=0;case 8:case"end":return e.stop()}},e)})),n.onEndReached=function(e){n.state.isLoading||(n.setState({isLoading:!0}),setTimeout(function(){n.rData=[].concat(Object(S.a)(n.rData),Object(S.a)(n.genOnePageData(++n.pageIndex))),n.setState({dataSource:n.state.dataSource.cloneWithRows(n.rData),isLoading:!1})},600))},n.pageIndex=0;var a=new j.a.DataSource({rowHasChanged:function(e,t){return e!==t}});return n.state={data:[],dataSource:a,refreshing:!0,isLoading:!0},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"genOnePageData",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=[],n=0;n<10;n++){var a=this.state.data[10*e+n];void 0!==a&&t.push(a)}return t}},{key:"componentDidMount",value:function(){var e=Object(T.a)(D.a.mark(function e(){var t;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z("posttable");case 2:t=e.sent,this.setState({data:t}),this.rData=this.genOnePageData(),this.setState({dataSource:this.state.dataSource.cloneWithRows(this.rData),refreshing:!1,isLoading:!1});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderAttachment",value:function(e,t){return 1===e?r.a.createElement("a",{href:t},r.a.createElement(A,{type:"icon-link",text:t})):2===e?r.a.createElement("a",{href:P.a(t)},r.a.createElement(A,{type:"icon-link",text:t})):3===e?r.a.createElement("a",{href:P.a(t),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:P.a(t),alt:"",style:{width:230,height:100}})):""}},{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement(E.a,{mode:"dark",rightContent:"\u53d1\u5e03"},"\u5fae\u6587"),r.a.createElement(j.a,{dataSource:this.state.dataSource,renderRow:function(t,n,a){var c=t;return r.a.createElement("div",{key:a,style:{padding:"0 15px"}},r.a.createElement(w.a,{full:!0},r.a.createElement(w.a.Header,{title:c.author,thumb:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",extra:r.a.createElement("span",{style:{fontSize:"14px"}},I()(I()(c.time).valueOf()+288e5).format("YYYY-MM-DD HH:mm"))}),r.a.createElement(w.a.Body,null,r.a.createElement(x.a,{size:"xs"}),r.a.createElement("div",{className:"item-content"},c.content),r.a.createElement(x.a,{size:"lg"}),c.attachtype?r.a.createElement("div",{className:"item-attach"},e.renderAttachment(c.attachtype,c.attachment)):"",r.a.createElement(x.a,{size:"lg"}),r.a.createElement(v.a,{style:{color:"rgba(0,0,0,.45)",fontSize:"14px"}},r.a.createElement(v.a.Item,null,r.a.createElement(A,{type:"icon-money",text:parseFloat(c.balance).toFixed(2)})),r.a.createElement(v.a.Item,null,r.a.createElement(A,{type:"icon-dianzan",text:c.like_num,onClick:function(){console.log("like:"+c.id)}})),r.a.createElement(v.a.Item,null,r.a.createElement(A,{type:"icon-comment",text:c.comment_num,onClick:function(){console.log("comment:"+c.id)}}))))))},renderSeparator:function(e,t){return r.a.createElement("div",{key:t,style:{backgroundColor:"#F5F5F9",height:8,borderTop:"1px solid #ECECED",borderBottom:"1px solid #ECECED"}})},renderFooter:function(){return r.a.createElement("div",{style:{padding:10,textAlign:"center"}},e.state.isLoading?"\u52a0\u8f7d\u4e2d...":"\u52a0\u8f7d\u5b8c\u6210")},style:{height:document.documentElement.clientHeight},pullToRefresh:r.a.createElement(p.a,{refreshing:this.state.refreshing,onRefresh:this.onRefresh}),onEndReached:this.onEndReached,pageSize:5}))}}]),t}(a.Component),V=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(E.a,{mode:"dark"},"\u6d88\u606f"),"\u6d88\u606f")}}]),t}(a.Component),q=(n(1182),n(504)),G=n.n(q),Q=n(171),$=n(1184),ee=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={balance:""},n.onBtnClick=n.onBtnClick.bind(Object(Q.a)(n)),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"onBtnClick",value:function(){var e=this;$.isConnected()||B("\u672a\u8fde\u63a5\u5230 TokenPocket"),$.getEosBalance({account:"songguo12345",contract:"eosio.token",symbol:"EOS"}).then(function(t){e.setState({balance:t.data.balance})}).catch(function(e){B(e)})}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(E.a,{mode:"dark"},"\u6211\u7684"),r.a.createElement(x.a,{size:"lg"}),r.a.createElement(G.a,{onClick:this.onBtnClick},"getEosBalance"),r.a.createElement(x.a,{size:"lg"}),r.a.createElement("div",{style:{textAlign:"center"}},this.state.balance))}}]),t}(a.Component),te=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={selectedTab:"home"},n.createTabItem=function(e,t,a,c,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return r.a.createElement(l.a.Item,{title:e,key:t,icon:r.a.createElement("i",{class:"iconfont "+a}),selectedIcon:r.a.createElement("i",{class:"iconfont "+c}),selected:n.state.selectedTab===t,onPress:function(){n.setState({selectedTab:t})},badge:i},r.a.createElement("div",{style:{height:document.documentElement.clientHeight-50}},o))},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(l.a,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white"},this.createTabItem("\u9996\u9875","home","icon-home","icon-home1",r.a.createElement(U,null)),this.createTabItem("\u6d88\u606f","msg","icon-xiaoxi-control","icon-xiaoxi-control1",r.a.createElement(V,null),1),this.createTabItem("\u6211\u7684","my","icon-geren","icon-geren-copy",r.a.createElement(ee,null)))}}]),t}(a.Component);o.a.render(r.a.createElement(te,null),document.getElementById("root"))},173:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return c});var a=n(502),r=n.n(a),c=(n(269),r()("ipfs.infura.io","5001",{protocol:"https"}),function(e){return"https://ipfs.io/ipfs/"+e})}).call(this,n(1).Buffer)},378:function(e,t){},415:function(e,t){},456:function(e,t){},506:function(e,t,n){e.exports=n(1196)},567:function(e,t,n){},611:function(e,t){},613:function(e,t){},619:function(e,t){},621:function(e,t){},652:function(e,t){},653:function(e,t){},683:function(e,t){},896:function(e,t){},906:function(e,t){},979:function(e,t){}},[[506,1,2]]]);
//# sourceMappingURL=main.2b777add.chunk.js.map