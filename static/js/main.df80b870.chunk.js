(this.webpackJsonpdemocart54=this.webpackJsonpdemocart54||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},105:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"resetApp",(function(){return D})),a.d(r,"initialSetup",(function(){return w})),a.d(r,"addProductToCart",(function(){return z})),a.d(r,"updateProdcutList",(function(){return A})),a.d(r,"updateCartProdcutList",(function(){return L})),a.d(r,"loadProdcutList",(function(){return F}));var n=a(0),c=a.n(n),l=a(10),i=a.n(l),o=(a(103),a(104),a(105),a(25)),s=a(26),m=a(27),u=a(28),d=a(41),p=a(63),E=(a(110),a(34)),g=a(44),f=a(85),h=a(56),b={addedCartProduct:[],selectedItem:0,allProducts:h.items},C=Object(E.b)({adminReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.assign(h,b),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT_TO_CART":var a=[].concat(Object(f.a)(e.addedCartProduct),[t.data]);return Object(g.a)({},e,{addedCartProduct:a});case"REMOVE_PRODUCT_TO_CART":return Object(g.a)({},e,{removedProduct:t.data});case"UPDATE_PRODUCT_LIST":var r=t.data,n=r.selectedItem,c=r.items;return Object(g.a)({},e,{items:c,selectedItem:n});case"UPDATE_CART_PRODUCT_LIST":return Object(g.a)({},e,{addedCartProduct:t.data});default:return e}}});var y=a(37),v=a(171),P=a(185),N=a(173),x=a(65),k=a(189),S=(a(111),[{value:100,label:"$100"},{value:5e4,label:"$50000"}]);function O(e){return"$".concat(e)}var T=function(e){var t=e.handleFilterPrice,a=n.useState([1e3,1e4]),r=Object(x.a)(a,2),c=r[0],l=r[1];return n.createElement("div",{className:""},n.createElement(k.a,{min:100,max:5e4,value:c,onChange:function(e,a){t(a),l(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:O,marks:S}),n.createElement("p",{id:"range-slider"},"Price"))};a(112);var j=function(e){var t=e.sortByPrice,a=e.selectedItem;return n.createElement(n.Fragment,null,n.createElement("ul",{className:"sort-by-block"},n.createElement("li",{className:"sort-by-title"},"Sort By"),n.createElement("li",{className:1===a?"sort-by-block-slt":"",onClick:function(){return t(1)}}," Price -- High Low "),n.createElement("li",{className:2===a?"sort-by-block-slt":"",onClick:function(){return t(2)}}," Price -- Low High "),n.createElement("li",{className:3===a?"sort-by-block-slt":"",onClick:function(){return t(3)}}," Discount ")))};a(113);function D(e){return{type:"ACTION_RESET_APP",data:e}}function w(e){return{type:"ASSIGN_INITIAL_DATA",data:e}}function z(e){return{type:"ADD_PRODUCT_TO_CART",data:e}}function A(e){return{type:"UPDATE_PRODUCT_LIST",data:e}}function L(e){return{type:"UPDATE_CART_PRODUCT_LIST",data:e}}function F(e){return{type:"ALL_PRODUCT_LIST",data:e}}var I=Object(p.b)((function(e){var t=e.adminReducer;return{initialText:"Hello",listProducts:t.items,addedCartProduct:t.addedCartProduct,selectedItem:t.selectedItem,allProducts:t.allProducts}}),(function(e){return Object(E.a)(Object(g.a)({},r),e)})),q=a(168),_=a(169),B=a(172),R=a(170),M=a(13),U=a(14);a(117);var J=function(e){var t=e.product,a=e.addProductToCart,r=t.name,c=t.image,l=t.price,i=t.discount;return n.createElement(n.Fragment,null,n.createElement(q.a,null,n.createElement(_.a,null,n.createElement("picture",null,n.createElement("img",{alt:"test",className:"product-img",src:c})),n.createElement(R.a,null,n.createElement(v.a,{container:!0},n.createElement(v.a,{item:!0,xs:12,sm:12},n.createElement("p",{className:"product-title"},r)),n.createElement(v.a,{item:!0,xs:12,sm:12},n.createElement("div",{className:"product-price-block"},n.createElement("div",{className:"new-price"},n.createElement("button",{className:"price-symbol"},n.createElement(M.a,{icon:U.e})),l.actual),n.createElement("div",{className:"old-price"},n.createElement("button",{className:"price-symbol"},n.createElement(M.a,{icon:U.e})),l.display),n.createElement("div",{className:"price-offer"},i,"% off")))))),n.createElement(B.a,{className:"add-to-cart-section"},n.createElement(N.a,{onClick:function(){return a(t)},className:"add-to-cart-btn",size:"small",color:"primary"},"Add To Cart"))))},H=a(186),V=a(184);function $(e){return n.createElement(V.a,Object.assign({elevation:6,variant:"filled"},e))}function G(e){return n.createElement(n.Fragment,null,n.createElement(H.a,{open:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"}},n.createElement($,{severity:"success"},e.message)))}var K=a(180),W=a(177),Q=a(178),X=a(176),Y=a(125),Z=a(60),ee=a.n(Z),te=a(187),ae=a(188),re=a(179),ne=a(183);function ce(e){return n.createElement(ee.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]'},n.createElement(Y.a,e))}function le(e){var t=e.sortByPrice,a=e.selectedItem,r=e.handleClose,c=n.useState(a),l=Object(x.a)(c,2),i=l[0],o=l[1];return console.info("value",i),n.createElement("div",null,n.createElement(te.a,{open:!0,onClose:function(){return r()},PaperComponent:ce,"aria-labelledby":"draggable-dialog-title"},n.createElement(X.a,{style:{cursor:"move"},id:"draggable-dialog-title"},"Sort Options"),n.createElement(W.a,null,n.createElement(Q.a,null,n.createElement(ae.a,{"aria-label":"quiz",name:"quiz",value:i,onChange:function(e){o(e.target.value)}},n.createElement(re.a,{value:"1",control:n.createElement(ne.a,null),label:"Price -- High Low"}),n.createElement(re.a,{value:"2",control:n.createElement(ne.a,null),label:"Price -- Low High"}),n.createElement(re.a,{value:"3",control:n.createElement(ne.a,null),label:"Discount"})))),n.createElement(K.a,{className:"sort-mb-btn"},n.createElement(N.a,{className:"sort-mb-btn-lt",autoFocus:!0,onClick:function(){return r()},color:"primary"},"Cancel"),n.createElement(N.a,{className:"sort-mb-btn-rt",onClick:function(){return t(i)},color:"primary"},"Apply"))))}function ie(e){return n.createElement(ee.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]'},n.createElement(Y.a,e))}function oe(e){var t=e.handleFilterPrice,a=e.handleClose,r=e.filterByPrice;return n.createElement("div",null,n.createElement(te.a,{open:!0,onClose:function(){return a()},PaperComponent:ie,"aria-labelledby":"draggable-dialog-title"},n.createElement(X.a,{style:{cursor:"move"},id:"draggable-dialog-title"},"Filters"),n.createElement(W.a,null,n.createElement(Q.a,null,n.createElement(T,{handleFilterPrice:t}))),n.createElement(K.a,{className:"sort-mb-btn"},n.createElement(N.a,{className:"sort-mb-btn-lt",autoFocus:!0,onClick:function(){return a()},color:"primary"},"Cancel"),n.createElement(N.a,{className:"sort-mb-btn-rt",onClick:function(){return r()},color:"primary"},"Apply"))))}var se=I(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={openMessgeContainer:!1,message:"",fromPrice:1e3,toPrice:1e4,isShow:!1,isShowFilter:!1},e.addProductToCart=function(t){e.triggerMsg(t.name+" successfully added into Cart"),(0,e.props.addProductToCart)(t)},e.sortByPrice=function(t){var a=e.props.listProducts,r=[];r=1===t?a.sort((function(e,t){return t.price.actual-e.price.actual})):2===t?a.sort((function(e,t){return e.price.actual-t.price.actual})):a.sort((function(e,t){return t.discount-e.discount})),(0,e.props.updateProdcutList)({selectedItem:t,items:r}),e.setState({isShow:!1})},e.filterByPrice=function(){var t=e.state,a=t.fromPrice,r=t.toPrice,n=e.props,c=n.allProducts;(0,n.updateProdcutList)({selectedItem:0,items:c.filter((function(e){return e.price.actual>a&&e.price.actual<r}))}),e.setState({isShowFilter:!1})},e.handleFilterPrice=function(t){e.setState({fromPrice:t[0],toPrice:t[1]})},e.triggerMsg=function(t){e.setState({openMessgeContainer:!0,open:!1,message:t}),setTimeout((function(){e.setState({openMessgeContainer:!1})}),5e3)},e.isOpenSortBy=function(){e.setState({isShow:!0})},e.handleClose=function(){e.setState({isShow:!1,isShowFilter:!1})},e.isOpenFilterBy=function(){e.setState({isShowFilter:!0})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.listProducts,r=t.selectedItem,c=this.state,l=c.openMessgeContainer,i=c.message,o=c.isShow,s=c.isShowFilter;return n.createElement(v.a,{container:!0,className:"list-page"},n.createElement(P.a,{only:["sm","xs"]},n.createElement(v.a,{container:!0,item:!0,lg:2,xl:2},n.createElement(v.a,{className:"filter-block",item:!0,lg:!0,xl:!0},n.createElement("p",{className:"filter-title"}," Filters "),n.createElement(T,{handleFilterPrice:this.handleFilterPrice}),n.createElement(N.a,{className:"filter-apply-btn",variant:"contained",color:"primary",onClick:function(){return e.filterByPrice()}}," Apply ")))),n.createElement(P.a,{only:["md","lg"]},n.createElement(v.a,{className:"filter-mb",container:!0,item:!0,xs:12,sm:12},n.createElement(v.a,{className:"sort-txt cursor-pt",item:!0,xs:6,sm:6},n.createElement("span",{onClick:function(){return e.isOpenSortBy()}},"Sort ")),n.createElement(v.a,{className:"filter-txt cursor-pt",item:!0,xs:6,sm:6},n.createElement("span",{onClick:function(){return e.isOpenFilterBy()}},"Filter ")))),n.createElement(v.a,{container:!0,spacing:3,item:!0,lg:10,sm:12,xs:12,xl:10},n.createElement(P.a,{only:["sm","xs"]},n.createElement(v.a,{item:!0,lg:10},n.createElement(j,{sortByPrice:this.sortByPrice,selectedItem:r}))),a.length>0?a.map((function(t,a){return n.createElement(v.a,{item:!0,lg:3,xl:3,xs:6,sm:6},n.createElement(J,{addProductToCart:e.addProductToCart,product:t}))})):n.createElement(v.a,{item:!0,lg:3,xl:3,xs:6,sm:6,className:"no-data-found"}," ",n.createElement("div",null,"No Data Found "))),l&&n.createElement(G,{open:l,message:i}),o&&n.createElement(le,{handleClose:this.handleClose,sortByPrice:this.sortByPrice,selectedItem:r}),s&&n.createElement(oe,{handleClose:this.handleClose,handleFilterPrice:this.handleFilterPrice,filterByPrice:this.filterByPrice}))}}]),a}(n.Component)),me=a(66);a(79);var ue=function(e){var t=e.product,a=e.handleCartCount,r=e.uniqueDataCount,c=t.name,l=t.image,i=t.price,o=t.discount,s=r(t);return n.createElement(v.a,{className:"cart-prod-items",container:!0},n.createElement(v.a,{item:!0,className:"new-price",xl:3,lg:3},n.createElement("picture",null,n.createElement("img",{alt:"test",className:"product-img",src:l}))),n.createElement(v.a,{item:!0,className:"new-price ca-product-price-st",xl:4,lg:4},n.createElement("p",{className:"product-title ca-product-title"},c),n.createElement("p",null,n.createElement(v.a,{className:"product-price-block ca-product-price",container:!0},n.createElement(v.a,{item:!0,className:"new-price",xs:4},n.createElement("button",{className:"price-symbol"},n.createElement(M.a,{icon:U.e})),i.actual),n.createElement(v.a,{item:!0,className:"old-price",xs:4},n.createElement("button",{className:"price-symbol"},n.createElement(M.a,{icon:U.e})),i.display),n.createElement(v.a,{className:"price-offer",item:!0,xs:4},o,"% off")))),n.createElement(v.a,{item:!0,className:"new-price ca-product-count",xl:3,lg:3},n.createElement(v.a,{className:"ca-product-count-sub",container:!0},n.createElement(v.a,{item:!0,className:""},n.createElement("button",{onClick:function(){return a(t,0)},className:"cart-decrease cursor-pt"},n.createElement(M.a,{icon:U.b}))),n.createElement(v.a,{item:!0,className:"ca-product-count-input"},n.createElement("input",{type:"text",size:3,value:s,style:{textAlign:"center",border:"1px solid darkgray"}})),n.createElement(v.a,{item:!0,className:""},n.createElement("button",{onClick:function(){return a(t,1)},className:"cart-increase cursor-pt"},n.createElement(M.a,{icon:U.d}))))),n.createElement(v.a,{item:!0,className:"cp-remove-cart-btn",xl:2,lg:2},n.createElement(N.a,{className:"remove-cart-btn",size:"small",color:"default",onClick:function(){return a(t,-1)}}," Remove ")))};var de=function(e){var t=e.product,a=e.handleCartCount,r=e.uniqueDataCount,c=t.name,l=t.image,i=t.price,o=t.discount,s=r(t);return n.createElement(v.a,{className:"cart-prod-items",container:!0},n.createElement(v.a,{item:!0,className:"new-price",xs:4,sm:4},n.createElement("picture",null,n.createElement("img",{alt:"test",className:"product-img",src:l}))),n.createElement(v.a,{item:!0,className:"new-price",xs:8,sm:8},n.createElement(v.a,{container:!0},n.createElement(v.a,{item:!0},c)),n.createElement("p",null,n.createElement("div",{className:"product-price-block"},n.createElement("div",{className:"new-price"},n.createElement("button",{className:"price-symbol"},n.createElement(M.a,{icon:U.e})),i.actual),n.createElement("div",{className:"old-price"},n.createElement("button",{className:"price-symbol"},n.createElement(M.a,{icon:U.e})),i.display),n.createElement("div",{className:"price-offer"},o,"% off"))),n.createElement(v.a,{container:!0},n.createElement(v.a,{item:!0},n.createElement("button",{onClick:function(){return a(t,0)},className:"cart-decrease cursor-pt"},n.createElement(M.a,{icon:U.a})),n.createElement("input",{type:"text",className:"inputsize",value:s,size:3,style:{border:"1px solid darkgray",textAlign:"center"}}),n.createElement("button",{onClick:function(){return a(t,1)},className:"cart-increase cursor-pt"},n.createElement(M.a,{icon:U.c})))),n.createElement(N.a,{className:"cart-remove-label",size:"small",color:"default",onClick:function(){return a(t,-1)}}," Remove ")))};a(118);var pe=function(e){var t=e.cartProduct,a=e.cartPriceData,r=a.cartCount,c=a.cartDiscountCount,l=a.totalPrice;return n.createElement(v.a,{className:"cart-prod-right",container:!0},n.createElement(v.a,{className:"cart-pd-title",item:!0,xl:12,lg:12},"PRICE DETAILS"),n.createElement(v.a,{className:"cart-pd-content",item:!0,xl:12,lg:12,xs:12,sm:12},n.createElement(v.a,{container:!0,className:"cart-pd-content-it",item:!0,xl:12,lg:12,xs:12,sm:12},n.createElement(v.a,{xl:4,lg:4,xs:6,sm:6,item:!0,className:"cart-pd-total-lt"}," Price ( ",t.length," item ) "),n.createElement(v.a,{xl:4,lg:4,xs:2,sm:2,item:!0},":"),n.createElement(v.a,{xl:4,lg:4,xs:4,sm:4,item:!0,className:"cart-pd-total-rt"},n.createElement("button",{className:"price-symbol"},n.createElement(M.a,{icon:U.e}))," ",r)),n.createElement(v.a,{container:!0,className:"cart-pd-content-it",item:!0,xl:12,lg:12},n.createElement(v.a,{xl:4,lg:4,xs:6,sm:6,item:!0,className:"cart-pd-total-lt"}," Discount "),n.createElement(v.a,{xl:4,lg:4,xs:2,sm:2,item:!0},":"),n.createElement(v.a,{xl:4,lg:4,xs:4,sm:4,item:!0,className:"cart-pd-total-rt"},n.createElement("button",{className:"price-symbol"},n.createElement(M.a,{icon:U.e}))," ",c))),n.createElement(v.a,{className:"cart-pd-total",item:!0,xl:12,lg:12},n.createElement("span",{className:"cart-pd-total-lt-txt"}," Total Payable ")," ",n.createElement("span",{className:"cart-pd-total-rt"},n.createElement("button",{className:"price-symbol"},n.createElement(M.a,{icon:U.e}))," ",l)))},Ee=(a(119),[{path:"/ListPage",component:se},{path:"/CartPage",component:I(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={openMessgeContainer:!1,message:""},e.handleCartCount=function(t,a){var r=e.props,n=r.addProductToCart,c=r.addedCartProduct,l=r.updateCartProdcutList;if(1===a)e.triggerMsg(t.name+" successfully added into Cart"),n(t);else if(0===a){var i=0;l(c.filter((function(e){return JSON.stringify(e)!==JSON.stringify(t)||0!==i||(i=1,!1)}))),e.triggerMsg(t.name+" successfully removed 1 item from Cart")}else e.triggerMsg(t.name+" successfully removed from Cart"),l(c.filter((function(e){return JSON.stringify(e)!==JSON.stringify(t)})))},e.uniqueData=function(){var t,a=e.props.addedCartProduct,r=[],n={},c=Object(me.a)(a);try{for(c.s();!(t=c.n()).done;){var l=t.value,i=JSON.stringify(l);n[i]||(r.push(l),n[i]=!0)}}catch(o){c.e(o)}finally{c.f()}return r},e.uniqueDataCount=function(t){var a,r=e.props.addedCartProduct,n=0,c=Object(me.a)(r);try{for(c.s();!(a=c.n()).done;){var l=a.value;JSON.stringify(t)===JSON.stringify(l)&&n++}}catch(i){c.e(i)}finally{c.f()}return n},e.getPercentage=function(e,t){var a=e/100*t;return Math.ceil(a)},e.totalPriceCount=function(){var t,a=e.props.addedCartProduct,r=0,n=0,c=Object(me.a)(a);try{for(c.s();!(t=c.n()).done;){var l=t.value;r+=l.price.actual,n+=e.getPercentage(l.price.actual,l.discount)}}catch(i){c.e(i)}finally{c.f()}return{cartCount:r,cartDiscountCount:n,totalPrice:r-n}},e.triggerMsg=function(t){e.setState({openMessgeContainer:!0,open:!1,message:t}),setTimeout((function(){e.setState({openMessgeContainer:!1})}),5e3)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.addedCartProduct,a=this.state,r=a.openMessgeContainer,c=a.message,l=this.uniqueData(),i=this.totalPriceCount();return n.createElement(v.a,{container:!0,spacing:2,className:"cart-page"},n.createElement(v.a,{item:!0,xl:8,lg:8,xs:12,sm:12,className:"cart-page-lt"},n.createElement(P.a,{only:["xs","sm"]},l.length>0?l.map((function(t,a){return n.createElement(ue,{uniqueDataCount:e.uniqueDataCount,handleCartCount:e.handleCartCount,product:t})})):n.createElement(v.a,{item:!0}," No Product Found ")),n.createElement(P.a,{only:["md","lg"]},l.length>0?l.map((function(t,a){return n.createElement(de,{uniqueDataCount:e.uniqueDataCount,handleCartCount:e.handleCartCount,product:t})})):n.createElement(v.a,{item:!0}," No Product Found "))),n.createElement(v.a,{item:!0,xl:4,lg:4,xs:12,sm:12,className:"cart-page-rt"},n.createElement(pe,{cartProduct:t,cartPriceData:i})),r&&n.createElement(G,{open:r,message:c}))}}]),a}(n.Component))}]);a(120);var ge=function(e){var t=e.cartCount;return n.createElement(n.Fragment,null,n.createElement(d.b,{to:"/CartPage"},n.createElement("button",{className:"cart-icon cursor-pt"},n.createElement(M.a,{icon:U.g}),n.createElement("sup",{className:"cart-count"},t))))},fe=a(181);var he,be=function(e){var t=e.isSearch,a=e.updateProdcutList,r=e.allProducts,c=e.toggleSearchBar;return n.createElement(n.Fragment,null,t?n.createElement(v.a,{className:"search-box-mb",item:!0},n.createElement(fe.a,{onKeyPress:function(e){var t=r.filter((function(t){return t.name.toLowerCase().includes(e.target.value)}));a({selectedItem:0,items:t})}}),n.createElement("button",{onClick:function(){return c()},className:"search-icon cursor-pt"},n.createElement(M.a,{icon:U.f}))):n.createElement(v.a,{item:!0},n.createElement("button",{onClick:function(){return c()},className:"search-icon cursor-pt"},n.createElement(M.a,{icon:U.f}))))},Ce=(a(122),I(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isSearch:!1,searchStr:"",isShow:!0},e.toggleSearchBar=function(){var t=e.props,a=t.allProducts,r=t.updateProdcutList;e.state.isSearch?(r({selectedItem:0,items:a}),e.setState({isSearch:!1})):e.setState({isSearch:!0})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSearch,a=e.isShow,r=this.props,c=r.addedCartProduct,l=r.updateProdcutList,i=r.allProducts;return n.createElement(v.a,{id:"header",className:"header",container:!0},n.createElement(v.a,{item:!0,sm:2,xs:2},n.createElement(v.a,{container:!0,alignItems:"flex-start"},n.createElement(v.a,{item:!0},n.createElement(d.b,{to:"/ListPage"},n.createElement("button",{className:"logo-icon cursor-pt"},n.createElement(M.a,{icon:U.h})))))),n.createElement(v.a,{item:!0,xs:10,sm:10},a&&n.createElement(v.a,{container:!0,alignItems:"flex-end",direction:"row",justify:"flex-end",spacing:2},n.createElement(be,{isSearch:t,updateProdcutList:l,toggleSearchBar:this.toggleSearchBar,allProducts:i}),n.createElement(v.a,{item:!0},n.createElement(ge,{cartCount:c.length})))))}}]),a}(n.Component))),ye=(a(123),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.createElement("footer",{className:"footer"},n.createElement("div",{className:"container"},n.createElement("span",{className:"text-muted"},"@copyright")))}}]),a}(n.Component)),ve=function(e){var t=Ee;return n.createElement(v.a,{container:!0},n.createElement(Ce,null),n.createElement(y.d,null,t.map((function(e,t){return n.createElement(y.b,{exact:!0,key:t,path:e.path,component:e.component})})),n.createElement(y.a,{from:"/*",to:"/ListPage"})),n.createElement(ye,null))},Pe=(he={},Object(E.c)(C,he)),Ne=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.createElement(p.a,{store:Pe},n.createElement(d.a,null,n.createElement(ve,null)))}}]),a}(n.Component);var xe=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(Ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e){e.exports=JSON.parse('{"items":[{"name":"Samsung Series 4","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":13999,"display":22500},"discount":37},{"name":"Samsung Super 6","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":35999,"display":66900},"discount":46},{"name":"Samsung The Frame","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":84999,"display":133900},"discount":36},{"name":"Thomson B9 Pro","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":9999,"display":16999},"discount":41},{"name":"LG Ultra HD","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":39990,"display":79990},"discount":50},{"name":"Vu Ready LED TV","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":7999,"display":17000},"discount":52},{"name":"Koryo Android TV","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":55999,"display":199990},"discount":71},{"name":"Micromax LED Smart","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":9999,"display":27990},"discount":64}]}')},79:function(e,t,a){},98:function(e,t,a){e.exports=a(124)}},[[98,1,2]]]);
//# sourceMappingURL=main.df80b870.chunk.js.map