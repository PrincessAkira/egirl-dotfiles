"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[289],{90110:(e,t,a)=>{a.d(t,{q:()=>O,o:()=>S});var l=a(67294),n=a.n(l),r=a(69518),i=a.n(r),s=a(50020),o=a(96895),c=a(24656),u=a(69010),m=a(94184),d=a.n(m);const g="l_MW0G9qeeCKlVJwBykT",E="BKsbV2Xl786X9a09XROH",p="HbKLiGoYM4dpuK8L4TMX",y="_APVWqivXc4YqgsnpFkP",b="VmwiDoU6RpqyzK_n7XRO",f="rEx3EYgBzS8SoY7dmC6x",h="z3zia5snl987x676qe5w";var v=a(6116),w=a(20657),C=a(40080),P=a(38209);var k=a(80946),N=a(83692);let O;!function(e){e[e.sm=24]="sm",e[e.md=32]="md"}(O||(O={}));const x=e=>{const{currentTarget:t,detail:a}=e;a>0&&t&&t.blur()},S=({uri:e,isFollowing:t,onFollow:a,size:r=O.sm,className:m,onClick:S=(()=>{})})=>{const L={"--size":`${r}px`},{useDownloading:D,useDownloadCapability:I}=(0,l.useContext)(c.I),[A,_]=(0,l.useState)(!1),[R,M]=I(i().isEpisode(e)),[z,T]=(0,l.useState)(!1),{currentAvailability:$,progress:Y,beginDownload:U,clearDownload:q}=D(e);((e,t)=>{const a=(0,P.r)(),n=(0,l.useRef)(!1);(0,l.useEffect)((()=>{e===u.V8.DOWNLOADING&&!1===n.current&&(n.current=!0,a.say(w.ag.get("download.downloading",t.totalItems)))}),[a,e,t]);const r=(0,C.D)(e);(0,l.useEffect)((()=>{r===u.V8.DOWNLOADING&&e===u.V8.YES&&(n.current=!1,a.say(w.ag.get("download.complete")))}),[a,r,e])})($,Y);const j=(0,l.useCallback)((e=>{M===u.v$.DOWNLOADING_NOT_ALLOWED?T(!0):!1===t?(a(),_(!0)):U(),S(e),x(e)}),[U,M,t,S,a]),F=(0,l.useCallback)((e=>{q(),x(e),S(e)}),[q,S]);return(0,l.useEffect)((()=>{!0===A&&!0===t&&(U(),_(!1))}),[t,A,U]),R===u.PQ.NO_DOWNLOAD_CAPABILITY?null:M===u.v$.DOWNLOADING_NOT_ALLOWED?n().createElement("div",{className:E},n().createElement(N.w,{label:w.ag.get("download.download")},n().createElement("button",{className:d()(p,m),role:"switch",onClick:j,"aria-label":w.ag.get("download.download"),"aria-checked":!1},n().createElement(s.a,{iconSize:r}))),z&&n().createElement("div",{className:h},n().createElement(k.E,{withTopLeftPointer:!0,horizontal:!0,onClose:()=>{T(!1)}},w.ag.get("download.upsell")))):$===u.V8.YES?n().createElement(N.w,{label:w.ag.get("download.remove")},n().createElement("button",{className:d()(p,m,y),role:"switch",onClick:F,"aria-label":w.ag.get("download.remove"),"aria-checked":!0},n().createElement(o.C,{iconSize:r}))):$===u.V8.NO?n().createElement(N.w,{label:w.ag.get("download.download")},n().createElement("button",{className:d()(p,m),role:"switch",onClick:j,"aria-label":w.ag.get("download.download"),"aria-checked":!1},n().createElement(s.a,{iconSize:r}))):n().createElement("div",{className:d()(b,m),role:"switch","aria-checked":!0},n().createElement(N.w,{label:w.ag.get("download.cancel")},n().createElement("button",{style:L,className:d()(p,g,m),onClick:F,"aria-label":w.ag.get("download.cancel")})),n().createElement("span",{style:L,className:d()(f,g)},n().createElement(v.e,{"aria-valuetext":w.ag.get("progress.downloading-tracks"),percentage:Y.percentage,size:r})))}},37483:(e,t,a)=>{a.d(t,{p:()=>m,q:()=>i.q});var l=a(67294),n=a.n(l),r=a(65858),i=a(90110),s=a(56802),o=a(8475),c=a(4383);const u=n().memo((({uri:e,size:t=i.q.md,className:a})=>{const[u,m]=(0,c.Z)(e),d=(0,r.I0)(),g=(0,s.o)(),E=(0,l.useCallback)((()=>{g({targetUri:e,intent:u?"remove-from-library":"add-to-library",type:"click"}),m(!u),d(u?(0,o.SS)():(0,o.kK)())}),[g,e,u,m,d]);return n().createElement(i.o,{className:a,isFollowing:u,onFollow:E,uri:e,size:t})})),m=n().memo((e=>n().createElement(u,e)))},14590:(e,t,a)=>{a.d(t,{Q:()=>s,$:()=>o});var l=a(67294),n=a.n(l),r=a(22583),i=a(5292);const s=(0,l.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:i.oT.ADDED_AT}),o=n().memo((function({uri:e,children:t,defaultSortOption:a}){return n().createElement(r.r,{uri:e,defaultState:a,sortContext:s},t)}))},88852:(e,t,a)=>{a.d(t,{E:()=>d});var l=a(67294),n=a.n(l),r=a(45342);const i="QhF9ZR7YOiJeFiEnfkOr";var s=a(61048),o=a(95289),c=a(5292),u=a(14590);const m=n().memo((({sortOptions:e})=>{const{sortState:t,setSortState:a}=(0,l.useContext)(u.Q),r=(0,l.useCallback)((e=>{a(c.ei[e])}),[a]),i=e.map((e=>c.MY[e])),s=c.MY[t];return n().createElement(o.A,{options:i,onSelect:r,selected:s})})),d=n().memo((({filterPlaceholder:e,sortOptions:t})=>{const a=(0,l.useContext)(r.H);return n().createElement("div",{className:i},null!=a&&a.getCapabilities().canFilter?n().createElement(l.Suspense,{fallback:null},n().createElement(s.K,{placeholder:e})):null,null!=a&&a.getCapabilities().canSort?n().createElement(m,{sortOptions:t}):null)}))},72831:(e,t,a)=>{a.r(t),a.d(t,{YourEpisodes:()=>se,YourEpisodesContainer:()=>oe,default:()=>ce});var l=a(67294),n=a.n(l),r=a(9296),i=a(20657),s=a(45342),o=a(1663),c=a(42273),u=a(59482),m=a(72907),d=a(30947),g=a(55120),E=a(55911),p=a(56347),y=a(53646),b=a(59713),f=a.n(b),h=a(42922),v=a(37763),w=a.n(v),C=a(15212),P=a(21127),k=a(87257),N=a(56802),O=a(18261),x=a(25988),S=a(37630),L=a(95661),D=a(20246),I=a(95806),A=a(4383),_=a(24656),R=a(84242),M=a(4236),z=a(42781),T=a(8341),$=a(84788),Y=a(75016),U=a(5944),q=a(22423),j=a(78920),F=a(16783),W=a(57978);const G={small:64,standard:300,large:640,xlarge:1024},Z=n().memo((({index:e,contextUri:t,episode:a,onRemove:r,usePlayContextItem:s})=>{var o,c,u,m;const d=(0,l.useRef)(a.duration.milliseconds-a.timeLeft.milliseconds),g=a.uri,[E,p]=(0,l.useState)(0===a.timeLeft.milliseconds),{filter:y}=(0,l.useContext)(q.fo),b=(0,j.P)(),f=(0,C.O1)(),v=(0,S.jh)(),Z=(0,N.o)(),[B]=(0,A.Z)(g,!0),{useCurrentAvailability:K}=(0,l.useContext)(_.I),[V]=K(g),X=(0,M.k)(),Q=(0,T.Y)((e=>{var t;if((null==e||null===(t=e.item)||void 0===t?void 0:t.uri)===a.uri){var l;const t=null!==(l=(0,U.k)(e))&&void 0!==l?l:0;return d.current=t,t}return 0})),{isPlaying:H,isActive:J,togglePlay:ee}=s({uri:g,index:e}),{isPlaying:te,isActive:ae,togglePlay:le}=(0,R.n)({uri:g,pages:[{items:[{type:z.p.EPISODE,uri:g,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,l.useEffect)((()=>{B||r()}),[B,r]),(0,l.useEffect)((()=>{H||a.duration.milliseconds<=d.current&&p(!0)}),[H,a.duration.milliseconds]);const ne=(0,l.useCallback)((e=>{e||(d.current=0),p(e)}),[]),re=(0,l.useCallback)((()=>{Z({type:"click",targetUri:g,intent:"navigate"})}),[g,Z]),ie=(0,l.useCallback)((()=>{X?(Z({type:"click",intent:H?"pause":"play"}),ee()):(Z({type:"click",intent:te?"pause":"play"}),le())}),[X,H,te,Z,ee,le]),se=(0,l.useCallback)((e=>n().createElement(w(),{searchWords:[y],textToHighlight:e,findChunks:b,highlightClassName:F.Z.filterHighlight})),[y,b]),oe=null!==(o=null===(c=a.podcastSubscription)||void 0===c?void 0:c.isPaywalled)&&void 0!==o&&o,ce=null!==(u=null===(m=a.podcastSubscription)||void 0===m?void 0:m.isUserSubscribed)&&void 0!==u&&u,{badges:ue}=(0,$.r)({isExplicit:a.isExplicit,isMOGEFRestricted:a.is19PlusOnly,isPaywalled:oe});let me=!1;return(J||!X&&ae)&&(me=!0),B?n().createElement(h.ZP,{value:"row",index:e},n().createElement(O._,{menu:n().createElement(x.k,{uri:g,showUri:a.show.uri,isPlayed:E,onMarkAsPlayed:ne})},n().createElement(P.X,{index:e,uri:g,uid:g,size:v,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?G[e.label]:null),height:e.height||(e.label?G[e.label]:null)}))),isPaywalled:oe,isUserSubscribed:ce,name:a.name,highlightText:se,showName:a.show.name,showUri:a.show.uri,description:a.description,isPlayable:a.isPlayable&&V,fullyPlayed:E,durationMs:a.duration.milliseconds,releaseDate:a.release.date.toString()||"",resumePositionMs:d.current,handleDragStart:e=>{if(e.target!==e.currentTarget)return;const l=`${a.name} · ${a.show.name}`;f(e,[g],l,t)},handlePlaybackClick:ie,handleClick:re,isCurrentlyPlaying:me,isPlaying:X?H:te,position:me?Q:void 0,episodeSharingInfo:null,onMarkAsPlayed:ne,badges:n().createElement(n().Fragment,null,ue.explicit&&n().createElement(k.N,null),ue.paid&&n().createElement(Y.g,null),ue.nineteen&&n().createElement(W.X,{size:16})),playButtonWrapper:e=>n().createElement(I.l,{enabled:oe&&!ce,showUri:a.show.uri},e),topActionButtons:n().createElement(D.y,{menu:n().createElement(x.k,{uri:g,showUri:a.show.uri,isPlayed:E,onMarkAsPlayed:ne})},n().createElement(L.z,{size:L.q.sm,label:i.ag.get("more.label.context",a.name)}))}))):null}));var B=a(5292),K=a(14590),V=a(33241);const X="ybohLfAC_k3fYjRJHzKA",Q="rQL2Hxclr2PkKkrBfr8T";function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){f()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const ee=n().memo((({contextUri:e,usePlayContextItem:t})=>{const a=(0,l.useContext)(s.H),{sortState:r}=(0,l.useContext)(K.Q),[i,o]=(0,l.useState)({totalLength:0,offset:0,items:[],limit:50}),c=(0,l.useRef)(!1),u=(0,l.useRef)(0),m=(0,l.useRef)(0),{filter:d}=(0,l.useContext)(q.fo),g=(0,l.useCallback)((()=>{m.current++}),[]),{ref:E,breakpoint:p}=(0,S.Db)({[S.Uo.MEDIUM]:0,[S.Uo.LARGE]:600}),y=(0,l.useCallback)(((e=!1)=>{const t=u.current;null!==t&&(c.current||(c.current=!0,(async e=>{const t=await a.getEpisodes({offset:e-m.current,limit:50,sort:(0,B.sv)(r),filter:d});return m.current=0,t})(Number(t)).then((a=>{o((l=>{const n=Number(a.offset)+a.items.length,r=e?[]:[...l.items];return r.splice(Number(t),a.items.length,...a.items),u.current=n<a.totalLength?n:null,J(J({},a),{},{items:r})})),c.current=!1}))))}),[d,a,r]);return(0,l.useEffect)((()=>{u.current=0,y(!0)}),[y]),n().createElement(S.ZU.Provider,{value:p},n().createElement(h.ZP,{value:"track-list"},n().createElement("div",{ref:E},n().createElement(V.C,{onReachBottom:y,triggerOnInitialLoad:!0},i.items.map(((a,l)=>n().createElement("div",{className:Q,key:`${l}${a.uri}`},n().createElement("hr",{className:X,"aria-hidden":!0}),n().createElement(Z,{key:`${a.uri}/${l}`,index:l,episode:a,contextUri:e,onRemove:g,usePlayContextItem:t}))))))))}));var te=a(99995),ae=a(44887),le=a(64624),ne=a(88852),re=a(19565),ie=a(36132);const se=({metadata:e,canSort:t})=>{const a=(0,y.Y5)("#006450"),{sortState:s}=(0,l.useContext)(K.Q),{filter:o}=(0,l.useContext)(q.fo),p=(0,M.k)(),{isPlaying:b,togglePlay:f,usePlayContextItem:h}=(0,R.n)({uri:e.uri,metadata:{[te.sb.SORTING_CRITERIA]:(0,B._s)(s),[te.sb.FILTERING_PREDICATE]:(0,ie.aK)(o)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"}),v=()=>f(),{uri:w,name:C,images:P,totalLength:k,owner:N}=e,O=(0,l.useMemo)((()=>({id:N.username,uri:N.uri,name:N.username,displayName:N.displayName||void 0,images:N.images||[]})),[N]),x=e.totalLength>0;return n().createElement("section",{className:F.Z.yourEpisodes,"data-testid":"your-episodes-page"},n().createElement(c.gF,{backgroundColor:a},n().createElement(u.W,null,n().createElement(g.$,{size:E.qE.sm,onClick:v,isPlaying:b,uri:w,disabled:!p,ariaPlayLabel:i.ag.get("playlist.a11y.play",C),ariaPauseLabel:i.ag.get("playlist.a11y.pause",C)}),n().createElement(m.i,{text:C})),n().createElement(c.Oz,{images:P,name:C,shape:ae.K.ROUNDED_CORNERS,renderImage:()=>n().createElement(le.$,null)}),n().createElement(c.sP,null,n().createElement(c.dy,{small:!0,uppercase:!0},i.ag.get("playlist")),n().createElement(c.xd,{canEdit:!1,onClick:()=>{}},C),n().createElement(c.QS,{creators:[O],totalEpisodes:k}))),n().createElement("div",{className:F.Z.yourEpisodesContentWrapper},n().createElement(d.o,{backgroundColor:a},n().createElement(d.F,null,x&&n().createElement(g.$,{onClick:v,isPlaying:b,size:E.qE.lg,uri:w,disabled:!p,ariaPlayLabel:i.ag.get("playlist.a11y.play",C),ariaPauseLabel:i.ag.get("playlist.a11y.pause",C)}),t&&n().createElement("div",{className:F.Z.searchBoxContainer},n().createElement(ne.E,{filterPlaceholder:i.ag.get("playlist.search_in_playlist"),sortOptions:B.$2})))),n().createElement("div",{className:"contentSpacing"},e.totalLength>0&&n().createElement(ee,{contextUri:w,usePlayContextItem:h}))),0===e.totalLength&&n().createElement("div",{className:"contentSpacing"},n().createElement(re.u,{message:i.ag.get("collection.empty-page.episodes-subtitle"),title:i.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:i.ag.get("collection.empty-page.shows-cta"),renderInline:!0},n().createElement(r.Z,null))))},oe=n().memo((()=>{const e=(0,l.useContext)(s.H).getCapabilities(),t=(0,p.x)();return t?n().createElement(K.$,{uri:t.uri,defaultSortOption:B.oT.ADDED_AT},n().createElement(q.hz,{uri:t.uri},n().createElement(se,{metadata:t,canSort:e.canSort&&t.totalLength>0}))):n().createElement(o.h,{errorMessage:i.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})})),ce=oe},40080:(e,t,a)=>{a.d(t,{D:()=>n});var l=a(67294);function n(e){const t=(0,l.useRef)();return(0,l.useEffect)((()=>{t.current=e}),[e]),t.current}},92408:(e,t,a)=>{a.d(t,{E:()=>S,$:()=>x});var l=a(67294),n=a.n(l),r=a(43315),i=a(59713),s=a.n(i);const o="wIA_5Ypq0rltNPeZQpM4",c="Swi6YtNEFCCVz8l4y75v",u="pklLPOhfigdytL9bPoth",m="sb24Y8kdMZInJ8aI8dXT";a(45697);class d extends l.PureComponent{render(){const{ariaValueText:e,max:t,current:a}=this.props,l=t&&a?100*Math.min(1,a/t):0,r={transform:`translateX(-${100-l}%)`},i=e||`${Math.round(l)}%`;return n().createElement("div",{className:o,role:"progressbar",tabIndex:0,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":t,"aria-valuetext":i},n().createElement("div",{className:c}),n().createElement("div",{className:u},n().createElement("div",{className:m,style:r})))}}s()(d,"defaultProps",{current:0,max:1});const g=d,E="qfYkuLpETFW3axnfMntO",p="jOd7lbjiyc_kvRJaAbeL",y="_q93agegdE655O5zPz6l",b="z7Yl7CIT1AB0y91f_moh",f="iLIlkUcfIq56KncGtX7u",h="nV50yZ6BR_TIuWP3l7b1",v="qLjIx_SzBEpDRA_q7kxQ";var w=a(40378),C=a(20657),P=a(76343),k=a(94184),N=a.n(k),O=a(6695);let x;!function(e){e[e.LARGE=0]="LARGE",e[e.SMALL=1]="SMALL"}(x||(x={}));const S=e=>{const{resumePositionMs:t=0,releaseDate:a,isPlaying:l,fullyPlayed:i,durationMs:s,size:o=x.SMALL,position:c=t}=e;return n().createElement("div",{className:N()(E,{[p]:o===x.LARGE})},a?n().createElement(P.Dy.p,{variant:P.$e.mesto,className:y},(0,r.rL)((0,r.RX)(a))):null,(()=>{if(i&&!l)return n().createElement("div",{className:f},n().createElement(P.Dy.p,{variant:P.$e.mesto,className:b},C.ag.get("episode.played")),n().createElement(w.R,{iconSize:16,className:v}));if(c>0||l){const e=Math.ceil(Math.max(s-c,0));return n().createElement("div",{className:f},n().createElement(P.Dy.p,{variant:P.$e.mesto,className:b},n().createElement(O.ng,{durationMs:e})))}return n().createElement(P.Dy.p,{variant:P.$e.mesto,className:y},n().createElement(O.nL,{durationMs:s}))})(),!i&&c>0||l?n().createElement("div",{className:h},n().createElement(g,{current:c,max:s,isEnabled:!1})):null)}}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map