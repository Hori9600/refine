"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79526],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45442:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={id:"useModal",title:"useModal"},s=void 0,d={unversionedId:"core/hooks/ui/useModal",id:"version-3.xx.xx/core/hooks/ui/useModal",isDocsHomePage:!1,title:"useModal",description:"useModal hook allows you to manage a modal. Since it is designed as headless, it only outputs show and close functions and visible for state. It expects you to handle the UI.",source:"@site/versioned_docs/version-3.xx.xx/core/hooks/ui/useModal.md",sourceDirName:"core/hooks/ui",slug:"/core/hooks/ui/useModal",permalink:"/docs/core/hooks/ui/useModal",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/core/hooks/ui/useModal.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"useModal",title:"useModal"},sidebar:"version-3.xx.xx/someSidebar",previous:{title:"useExport",permalink:"/docs/core/hooks/import-export/useExport"},next:{title:"useNotification",permalink:"/docs/core/hooks/useNotification"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useModal")," hook allows you to manage a modal. Since it is designed as headless, it only outputs ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," functions and ",(0,r.kt)("inlineCode",{parentName:"p"},"visible")," for state. It expects you to handle the UI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { show, close, visible } = useModal();\n")),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"visible")," state to show or hide the modal. The ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," functions allow to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"visible")," state. It does not provide any functionality besides this. You can use this hook anywhere."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's see an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import {\n// highlight-next-line\n    useModal,\n} from "@pankod/refine-core";\n\nexport const PostList: React.FC = () => {\n// highlight-next-line\n    const { visible, show, close } = useModal();\n\n    return (\n        <>\n// highlight-start\n            <button onClick={show}>Show Modal</button>\n            {visible && \n            <YourModalComponent>\n                <p>Dummy Modal Content</p>\n                <button onClick={close}>Close Modal</button>\n            </YourModalComponent>\n            }\n// highlight-end\n        </>\n    );\n};\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Here, we show a button somewhere on the page and use ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," on it's ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," callback to trigger opening of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<YourModalComponent>"),". When the user clicks on the button, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<YourModalComponent>")," appears."),(0,r.kt)("p",null,"We also created a ",(0,r.kt)("inlineCode",{parentName:"p"},"<button>")," to close the ",(0,r.kt)("inlineCode",{parentName:"p"},"<YourModalComponent>")," and gave the onClick function ",(0,r.kt)("inlineCode",{parentName:"p"},"close"),", the modal dialog will be closed. We do this to demonstrate ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," function."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultVisible"),(0,r.kt)("td",{parentName:"tr",align:null},"Modal's default ",(0,r.kt)("inlineCode",{parentName:"td"},"visible")," state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visible"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the ",(0,r.kt)("inlineCode",{parentName:"td"},"visible")," state of the Modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that can open the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a function that can close the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,r.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/refine-core-use-modal-rq1hh?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-modal-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0}}]);