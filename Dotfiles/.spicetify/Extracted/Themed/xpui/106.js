"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[106],{36685:(e,a,n)=>{n.d(a,{L:()=>m});var i=n(67294),t=n.n(i),l=n(91802),r=n(28248);n(98984);const o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"queryAlbumTracks"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"tracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uid"}},{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"discNumber"}},{kind:"Field",name:{kind:"Name",value:"trackNumber"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"relinkingInformation"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"isRelinked"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}}]}}]}}]}}]};var s=n(42922),d=n(29064),u=n(9554);function c(e){return e.total_count>=2&&e.total_count<=10}const m=t().memo((({ariaLabel:e,nrTracks:a,discs:n,albumUri:m,highlightUri:k,scrollToIndex:v,usePlayContextItem:g,hasHeaderRow:N=!0})=>{const b=(0,d.ZO)()===u.W.Web,{request:p}=(0,i.useContext)(l.Ax),y=(0,i.useRef)(null),f=(0,i.useRef)(!1),[S,E]=(0,i.useState)(null);(0,i.useEffect)((()=>{y.current&&(S?y.current.scrollToIndex(S):v&&y.current.scrollToIndex(v))}),[S,v]);const w=(0,i.useMemo)((()=>function(e){return c(e)?e.items.reduce(((e,a)=>(e.push(a.number-1),e.concat(Array(a.total_tracks).fill(a.number)))),[]):null}(n)),[n]),D=(0,i.useCallback)(((e,a)=>p(o,{uri:m,offset:null!==w?e-w[e]:e,limit:a}).then((e=>{var a,i;if(k&&!S){var t,l,r;const a=null==e||null===(t=e.data)||void 0===t||null===(l=t.album)||void 0===l||null===(r=l.tracks.items)||void 0===r?void 0:r.findIndex((e=>e.track.uri===k));E(a||-1)}return((e,a)=>{if(!c(a)||!e)return e;let n=0;return e.reduce(((e,a)=>((a.track.trackNumber<n||1===a.track.trackNumber)&&e.push({discNumber:a.track.discNumber}),e.push(a),n=a.track.trackNumber,e)),[])})(null==e||null===(a=e.data)||void 0===a||null===(i=a.album)||void 0===i?void 0:i.tracks.items,n)||[]}))),[p,m,w,k,S,n]),I=(0,i.useCallback)(((e,a)=>{var n,i,l;if("discNumber"in e)return t().createElement(r.UT,{key:a+e.discNumber,discNumber:e.discNumber});const{uid:o,track:s}=e;let d;d=null!==(n=s.relinkingInformation)&&void 0!==n&&n.isRelinked?s.relinkingInformation.uri:s.uri;const u=s.playcount?parseInt(s.playcount,10):0,c=!f.current&&(k===s.uri||k===(null===(i=s.relinkingInformation)||void 0===i?void 0:i.uri));return c&&(f.current=!0),t().createElement(r.Ym,{key:a+s.uri,index:a,trackNumber:s.trackNumber,contextUri:m,uri:d,uid:o,duration_ms:s.duration.totalMilliseconds,name:s.name,isPlayable:s.playability.playable,artists:s.artists.items,contentRating:null===(l=s.contentRating)||void 0===l?void 0:l.label,playcount:u,shouldRenderPlayCount:!b,shouldHighLight:c,usePlayContextItem:g})}),[k,m,b,g]),h=(0,i.useMemo)((()=>(e=>e?[r.QD.INDEX,r.QD.TITLE,r.QD.DURATION]:[r.QD.INDEX,r.QD.TITLE,r.QD.PLAYS,r.QD.DURATION])(b)),[b]),C=(0,i.useCallback)((e=>"track"in e?e.track.uri:""),[]);return t().createElement(s.ZP,{value:"album-tracklist"},t().createElement(r.Pv,{key:m,ariaLabel:e,hasHeaderRow:N,rowPlaceholder:r.uD,columns:h,renderRow:I,resolveUri:C,nrTracks:c(n)?n.total_count+a:a,fetchTracks:D,limit:300,outerRef:y}))}))},42811:(e,a,n)=>{n.d(a,{Hr:()=>t,qo:()=>l,GJ:()=>r,B$:()=>o,pf:()=>s,ak:()=>d,B:()=>u,X7:()=>c});var i=n(7073);const t=e=>e?e.reduce(((e,a)=>(e.push(a.releases.items[0]),e)),[]):[],l=e=>`spotify:artist:${e}`,r=e=>`spotify:app:artist:${e}`,o=(e,a,n)=>{var i,t;return{artists:[{uri:a,name:n}],images:(null===(i=e.coverArt)||void 0===i?void 0:i.sources)||[],name:e.name,uri:e.uri,year:null===(t=e.date)||void 0===t?void 0:t.year,type:e.type,sharingInfo:e.sharingInfo}},s=e=>{var a,n;return{artists:e.artists.items.map((e=>({uri:e.uri,name:e.profile.name}))),images:(null===(a=e.coverArt)||void 0===a?void 0:a.sources)||[],name:e.name,uri:e.uri,year:null===(n=e.date)||void 0===n?void 0:n.year,type:e.type,sharingInfo:e.sharingInfo}},d=({uri:e,profile:{name:a},visuals:{avatarImage:n}})=>({uri:e,name:a,images:(null==n?void 0:n.sources)||[]}),u=({uri:e,name:a,description:n,images:{items:i},owner:t})=>({uri:e,name:a,owner:{display_name:(null==t?void 0:t.name)||a},description:n||"",images:i[0]&&i[0].sources?i[0].sources:[]}),c=({track:{uri:e,name:a,playcount:n,duration:{totalMilliseconds:t},contentRating:l,artists:{items:r},album:{coverArt:o,uri:s},playability:{playable:d}}},u)=>{var c;return{uri:e,contextUri:u,totalMilliseconds:t,name:a,contentRating:(null==l?void 0:l.label)||i.KS.None,isPlayable:d,playcount:parseInt(n||"0",10),artists:r.map((e=>({uri:e.uri,name:e.profile.name}))),imageUrl:null!=o&&null!==(c=o.sources)&&void 0!==c&&c.length?o.sources[0].url:"",albumUri:s}}},90110:(e,a,n)=>{n.d(a,{q:()=>h,o:()=>F});var i=n(67294),t=n.n(i),l=n(69518),r=n.n(l),o=n(50020),s=n(96895),d=n(24656),u=n(69010),c=n(94184),m=n.n(c);const k="l_MW0G9qeeCKlVJwBykT",v="BKsbV2Xl786X9a09XROH",g="HbKLiGoYM4dpuK8L4TMX",N="_APVWqivXc4YqgsnpFkP",b="VmwiDoU6RpqyzK_n7XRO",p="rEx3EYgBzS8SoY7dmC6x",y="z3zia5snl987x676qe5w";var f=n(6116),S=n(20657),E=n(40080),w=n(38209);var D=n(80946),I=n(83692);let h;!function(e){e[e.sm=24]="sm",e[e.md=32]="md"}(h||(h={}));const C=e=>{const{currentTarget:a,detail:n}=e;n>0&&a&&a.blur()},F=({uri:e,isFollowing:a,onFollow:n,size:l=h.sm,className:c,onClick:F=(()=>{})})=>{const T={"--size":`${l}px`},{useDownloading:A,useDownloadCapability:L}=(0,i.useContext)(d.I),[O,P]=(0,i.useState)(!1),[R,x]=L(r().isEpisode(e)),[V,_]=(0,i.useState)(!1),{currentAvailability:U,progress:M,beginDownload:z,clearDownload:W}=A(e);((e,a)=>{const n=(0,w.r)(),t=(0,i.useRef)(!1);(0,i.useEffect)((()=>{e===u.V8.DOWNLOADING&&!1===t.current&&(t.current=!0,n.say(S.ag.get("download.downloading",a.totalItems)))}),[n,e,a]);const l=(0,E.D)(e);(0,i.useEffect)((()=>{l===u.V8.DOWNLOADING&&e===u.V8.YES&&(t.current=!1,n.say(S.ag.get("download.complete")))}),[n,l,e])})(U,M);const $=(0,i.useCallback)((e=>{x===u.v$.DOWNLOADING_NOT_ALLOWED?_(!0):!1===a?(n(),P(!0)):z(),F(e),C(e)}),[z,x,a,F,n]),q=(0,i.useCallback)((e=>{W(),C(e),F(e)}),[W,F]);return(0,i.useEffect)((()=>{!0===O&&!0===a&&(z(),P(!1))}),[a,O,z]),R===u.PQ.NO_DOWNLOAD_CAPABILITY?null:x===u.v$.DOWNLOADING_NOT_ALLOWED?t().createElement("div",{className:v},t().createElement(I.w,{label:S.ag.get("download.download")},t().createElement("button",{className:m()(g,c),role:"switch",onClick:$,"aria-label":S.ag.get("download.download"),"aria-checked":!1},t().createElement(o.a,{iconSize:l}))),V&&t().createElement("div",{className:y},t().createElement(D.E,{withTopLeftPointer:!0,horizontal:!0,onClose:()=>{_(!1)}},S.ag.get("download.upsell")))):U===u.V8.YES?t().createElement(I.w,{label:S.ag.get("download.remove")},t().createElement("button",{className:m()(g,c,N),role:"switch",onClick:q,"aria-label":S.ag.get("download.remove"),"aria-checked":!0},t().createElement(s.C,{iconSize:l}))):U===u.V8.NO?t().createElement(I.w,{label:S.ag.get("download.download")},t().createElement("button",{className:m()(g,c),role:"switch",onClick:$,"aria-label":S.ag.get("download.download"),"aria-checked":!1},t().createElement(o.a,{iconSize:l}))):t().createElement("div",{className:m()(b,c),role:"switch","aria-checked":!0},t().createElement(I.w,{label:S.ag.get("download.cancel")},t().createElement("button",{style:T,className:m()(g,k,c),onClick:q,"aria-label":S.ag.get("download.cancel")})),t().createElement("span",{style:T,className:m()(p,k)},t().createElement(f.e,{"aria-valuetext":S.ag.get("progress.downloading-tracks"),percentage:M.percentage,size:l})))}},13768:(e,a,n)=>{n.d(a,{i:()=>m});var i=n(67294),t=n.n(i),l=n(8498),r=n(36590),o=n(20657),s=n(27298),d=n(18261),u=n(4232),c=n(48528);const m=t().memo((function(e){const{entity:{images:a,name:n,uri:i,type:m,year:k,sharingInfo:v},latest:g,showType:N,onClick:b,delegatePlayback:p=!1,isPlaying:y,onPlay:f,index:S}=e,E=g?o.ag.get("artist.latest-release"):k;return t().createElement(d._,{menu:t().createElement(u.Y,{uri:i,sharingInfo:v})},t().createElement(r.C,{onClick:b,featureIdentifier:"album",headerText:n,uri:i,index:S,delegatePlayback:p,isPlaying:y,onPlay:f,renderCardImage:()=>t().createElement(l.x,{images:a}),renderSubHeaderContent:()=>t().createElement(t().Fragment,null,E&&t().createElement("time",{dateTime:(k||"").toString()},E),N&&t().createElement("span",{className:s.Z.type},(0,c.R)(m)))}))}))},70369:(e,a,n)=>{n.d(a,{$:()=>i.$});var i=n(22578)},94233:(e,a,n)=>{n.d(a,{k:()=>o});var i=n(67294),t=n.n(i),l=n(76343);const r="rTMkDBDp47Eo12ZEQv4U",o=({copyrights:e,courtesyLine:a})=>{const n=(e||[]).map(((e,a)=>{const n=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let i;return i="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,t().createElement(l.Dy,{as:"p",variant:l.Dy.finale,key:a,dir:"auto"},`${i} ${n}`)}));return a&&n.unshift(t().createElement(l.Dy,{as:"p",variant:l.Dy.finale,key:n.length,dir:"auto"},a)),t().createElement("div",{className:r},n)}},40080:(e,a,n)=>{n.d(a,{D:()=>t});var i=n(67294);function t(e){const a=(0,i.useRef)();return(0,i.useEffect)((()=>{a.current=e}),[e]),a.current}},48528:(e,a,n)=>{n.d(a,{R:()=>l});var i=n(20657),t=n(15066);function l(e){switch(e){case t.n.SINGLE:return i.ag.get("single");case t.n.EP:return i.ag.get("ep");case t.n.COMPILATION:return i.ag.get("compilation");case t.n.ALBUM:default:return i.ag.get("album")}}}}]);
//# sourceMappingURL=106.js.map