(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3619)}])},3619:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return ee},default:function(){return et}});var r=a(5893),n=a(5820),i=a(7294),s=a(6276),l=a(5935),d=a(5675),c=a.n(d),o=a(3750),x=a(6893),h=a(2167);let m=e=>{let t="GitHub"===e?x.uOf:"LinkedIn"===e?x.qOw:"Stack Overflow"===e?o.yDg:"+91 9159115328"===e?x.tUt:"jeromemarshall0@gmail.com"===e?x.Imn:x.jxP;return t},u=e=>{let{src:t,width:a,height:r,quality:n}=e,i="https://images.weserv.nl/?url=".concat(t,"&h=").concat(r,"&w=").concat(a);return i},v=e=>{let{startDate:t,endDate:a,present:r}=e,n="MMMMMM yyyy";return r?(0,h.Z)(new Date(t),n)+" - Present":a?(0,h.Z)(new Date(t),n)+" - "+(0,h.Z)(new Date(a),n):(0,h.Z)(new Date(t),n)},p={scale:1.05,transition:{duration:1,yoyo:1/0}},g="transition-all duration-1000 ease-linear",k=(0,i.createContext)({}),b=k.Provider,j=e=>{let{skill:t,className:a,id:n}=e;return(0,r.jsx)(s.E.a,{className:"inline-block whitespace-nowrap text-sm transition-all duration-300 ease-linear hover:text-primary dark:hover:text-dark-secondary ".concat(a),href:t.url,target:"_blank",rel:"noopener noreferrer",whileHover:p,id:n,children:t.name})},f=e=>{let{aboutMe:t,skillsData:a}=e,n=a.data.map(e=>e.attributes),i=e=>({hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{delay:.1*e,duration:.5,ease:"easeInOut"}},hover:{scale:1.1}});return(0,r.jsx)("div",{className:"container py-20",id:"about",children:(0,r.jsxs)(s.E.div,{variants:{hidden:{opacity:0,y:100},visible:{opacity:1,y:0,transition:{duration:1,ease:"easeInOut",when:"beforeChildren"}}},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},className:"flex h-full flex-col items-center justify-center",children:[(0,r.jsx)("h3",{className:"self-center md:self-start",children:"About Me"}),(0,r.jsxs)("div",{className:"flex items-center md:gap-8 lg:gap-10 xl:gap-12",children:[(0,r.jsxs)("div",{className:"z-10 mt-7 flex w-full flex-col md:basis-2/3",children:[(0,l.ZP)(t),(0,r.jsx)("p",{className:"mt-6",children:"Here are a few technologies I've been working with recently:"}),(0,r.jsx)("ul",{className:"mt-4 grid grid-cols-2 sm:mr-auto sm:gap-x-32",children:n.map((e,t)=>(0,r.jsx)(s.E.li,{whileInView:"visible",initial:"hidden",viewport:{once:!0},variants:i(t),className:"z-10 py-1",children:(0,r.jsx)(j,{skill:e})},e.name))})]}),(0,r.jsx)(s.E.div,{className:"z-10",variants:{hidden:{scale:.7,opacity:0},visible:{scale:1,opacity:1,transition:{delay:.2,duration:1,ease:"easeInOut"}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:(0,r.jsxs)("div",{className:"relative z-10 hidden h-[270px] w-[270px] shrink-0 overflow-hidden rounded-[50%] transition-all duration-500 hover:rounded-3xl md:block lg:hover:!scale-110",children:[(0,r.jsx)("div",{className:"absolute z-10 h-full w-full bg-background_1/30 transition-all duration-500 hover:bg-background_1/0 dark:bg-dark-background_1/30 dark:hover:bg-dark-background_1/0"}),(0,r.jsx)(c(),{src:"https://live.staticflickr.com/65535/52176678364_3321678c1b_o.jpg",alt:"my picture",className:"aspect-ratio-1/1",fill:!0,loader:u})]})})]})]})})};var y=a(9808),w=a(6010),_=a(6512),N=a(4829);let E=e=>{let{index:t,job:a,toggleDisclosure:n,openedDisclosure:s,length:d}=e,{isThemeChanging:c}=(0,i.useContext)(k);return(0,r.jsx)(_.p,{as:"div",className:"bg-background_3 dark:bg-dark-background_3",defaultOpen:0===t,children(e){let{open:i}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.p.Button,{className:"w-full px-4 py-3 text-base transition-all duration-500 ".concat(i?" text-text-700 bg-background_3 text-lg font-bold dark:bg-dark-background_3 dark:text-dark-text_700":" bg-background_2 text-text_500 dark:bg-dark-background_2 dark:text-dark-text_500"," ").concat(c&&g),onClick:()=>n(t),children:a.name},a.name+"_tab"),(0,r.jsx)(N.u,{className:"overflow-hidden",enter:"transition-[max-height] duration-500 linear",enterFrom:" max-h-0",enterTo:" max-h-[700px]",leave:"transition-[max-height] duration-500 linear",leaveFrom:" max-h-[700px]",leaveTo:" max-h-0",children:(0,r.jsx)(_.p.Panel,{className:" bg-background_2 px-4 py-5 dark:bg-dark-background_2 ".concat(i&&t!=d-1?"border-b-2 border-background_3 dark:border-dark-background_3":""," ").concat(c&&g),children(e){let{close:n}=e;return s!==t&&n(),(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{className:"",children:[(0,r.jsx)("span",{className:"text-xl text-text_900 dark:text-dark-text_900 ".concat(c&&g),children:a.designation}),(0,r.jsx)("span",{className:"",children:" @ "}),(0,r.jsx)("span",{className:"text-xl text-primary dark:text-dark-primary ".concat(c&&g),children:a.name})]}),(0,r.jsx)("p",{className:"mt-1 mb-6 text-sm text-text_500 dark:text-dark-text_500 ".concat(c&&g),children:v({startDate:a.joiningDate,endDate:a.leavingDate,present:a.present})}),(0,r.jsx)("div",{className:"descendant-li:text-text_700 descendant-li:dark:text-dark-text_700 ".concat(c&&g),children:(0,l.ZP)(a.workDescription)})]})}},a.name+"_panel")})]})}})},I=e=>{let{jobs:t}=e,{isThemeChanging:a}=(0,i.useContext)(k),d=(0,i.useRef)(null),[c,o]=(0,i.useState)(0),x=e=>{o(e)},h=e=>({hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{delay:.1+.1*e,duration:.5,ease:"easeInOut"}},hover:{scale:1.1}});return(0,r.jsx)("div",{className:"container max-w-[800px] py-20",id:"experience",children:(0,r.jsxs)(s.E.div,{className:"flex h-full w-full flex-col items-center py-20",variants:{hidden:{opacity:0,y:100},visible:{opacity:1,y:0,transition:{duration:1,ease:"easeInOut",when:"beforeChildren"}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,r.jsx)("h3",{className:"md:self-start ".concat(a&&g),children:"Where I've worked"}),(0,r.jsxs)("div",{className:"mt-12 w-full",children:[(0,r.jsxs)(y.O.Group,{vertical:!0,as:"div",className:"hidden md:flex",children:[(0,r.jsx)(y.O.List,{className:"flex flex-col",children:t.map((e,t)=>(0,r.jsx)(s.E.div,{className:"z-10 mr-8",variants:h(t),initial:"hidden",whileInView:"visible",viewport:{once:!0},children:(0,r.jsx)(y.O,{className(e){let{selected:t}=e;return(0,w.Z)("z-10 w-full whitespace-nowrap border-l-[3px] p-3 text-left text-sm transition-all duration-500 hover:bg-background_3 hover:text-accent_hover dark:hover:bg-dark-background_3 dark:hover:text-dark-accent_hover",t?"border-secondary text-secondary dark:border-dark-secondary  dark:text-dark-secondary":"border-accent_border text-text_500 dark:border-dark-accent_border dark:text-dark-text_500")},children:e.name},e.name+"Tab")},e.name+"Tab"))}),(0,r.jsx)(y.O.Panels,{className:"z-10",children:(0,r.jsx)(n.M,{children:t.map((e,t)=>(0,r.jsxs)(y.O.Panel,{as:s.E.div,className:"z-10",animate:{opacity:1},initial:{opacity:0},transition:{duration:.3},children:[(0,r.jsxs)("h4",{className:"z-10 text-xl",children:[(0,r.jsx)("span",{className:"font-bold text-text_900 dark:text-dark-text_900 ".concat(a&&g),children:e.designation})," ",(0,r.jsx)("span",{className:"text-secondary dark:text-dark-secondary ".concat(a&&g),children:"@"})," ",(0,r.jsx)(s.E.a,{className:"z-10 inline-block font-bold text-primary dark:text-dark-primary ".concat(a&&g),href:e.url,target:"_blank",rel:"noreferrer",whileHover:p,children:e.name})]}),(0,r.jsx)("p",{className:"mt-1 text-sm text-text_500 dark:text-dark-text_500 ".concat(a&&g),children:v({startDate:e.joiningDate,endDate:e.leavingDate,present:e.present})}),(0,r.jsx)("div",{className:"mt-6 text-text_700 descendant-li:mb-2 descendant-li:leading-loose dark:text-dark-text_700 ".concat(a&&g),children:(0,l.ZP)(e.workDescription)})]},e.name+"Panel12"))})})]}),(0,r.jsx)("div",{className:"flex w-full flex-col overflow-hidden rounded-xl border-2 border-background_3 dark:border-dark-background_3 md:hidden",children:t.map((e,a)=>(0,r.jsx)(E,{length:t.length,pannelRef:d,openedDisclosure:c,toggleDisclosure:x,job:e,index:a},e.name))})]})]})})};var O=a(6261);let C=e=>{let{name:t,shortIntro:a,introduction:n}=e,{isThemeChanging:d}=(0,i.useContext)(k),c={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.3,ease:"easeInOut"}}};return(0,r.jsx)("div",{className:"container h-screen",children:(0,r.jsxs)(s.E.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{ease:"easeInOut",delay:1,when:"beforeChildren",staggerChildren:.1,delayChildren:.4}}},initial:"hidden",animate:"visible",className:"flex h-full w-full flex-col items-start justify-center ",children:[(0,r.jsx)(s.E.p,{variants:c,className:"text-sm text-secondary dark:text-dark-secondary",children:"Hi, my name is"}),(0,r.jsxs)(s.E.h1,{variants:c,className:"text-clamp-lg font-bold text-text_900 dark:text-dark-text_900",children:[t,"."]}),(0,r.jsx)(s.E.h3,{variants:c,className:"text-clamp-md text-text_700 dark:text-dark-text_700",children:a}),n&&(0,r.jsx)(s.E.div,{variants:c,className:"z-10 mt-5 max-w-[600px] child-p:text-text_500 dark:child-p:text-dark-text_500 md:child-p:text-lg",children:(0,l.ZP)(n)}),(0,r.jsx)(s.E.div,{className:"z-10 cursor-pointer",variants:c,children:(0,r.jsx)(s.E.div,{className:"btn mt-12 self-center sm:self-start ".concat(d&&g),whileHover:p,children:(0,r.jsx)(O.rU,{to:"contact",smooth:!0,duration:1e3,children:"Get in Touch"})})})]})})};var D=a(2010),z=a(3907),H=a(7735);let M=e=>{let{socials:t,name:a}=e,{isThemeChanging:n}=(0,i.useContext)(k),l=t.map(e=>{let t=m(e.name);return(0,r.jsx)("a",{className:"social-card",href:e.url,target:"phone"!==e.name?"_blank":"",rel:"noreferrer",children:(0,r.jsx)(t,{})},e.name+"creditSection")});return(0,r.jsx)("div",{className:"container mx-auto -mt-[140px] flex h-[140px] justify-center",children:(0,r.jsxs)(s.E.div,{className:"mb-4 flex h-full flex-col items-center justify-end",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:1,ease:"easeInOut",when:""}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,r.jsx)("div",{className:"flex gap-4 xl:hidden",children:l}),(0,r.jsxs)("div",{className:"my-4 flex flex-col items-center",children:[(0,r.jsxs)("p",{className:"text-sm text-text_500 dark:text-dark-text_500 ".concat(n&&g),children:["Designed by ",a]}),(0,r.jsxs)("p",{className:"mt-1 flex items-center gap-2 text-sm text-text_500 descendant:duration-1000 descendant-svg:h-5 descendant-svg:w-5 descendant-svg:text-secondary descendant-svg:transition-all dark:text-dark-text_500 dark:descendant-svg:text-dark-secondary ".concat(n&&g),children:["Built with"," ",(0,r.jsx)(s.E.a,{className:"z-10 inline-block ".concat(n&&g),href:"https://nextjs.org/",target:"_blank",rel:"noreferrer",whileHover:p,children:(0,r.jsx)(H.Xou,{})})]})]})]})})};var P=a(7845),S=a(7470),T=a.n(S),L=a(1484);let U=e=>{let{to:t,className:a,clickHandler:n,children:l,variants:d}=e,{isThemeChanging:c}=(0,i.useContext)(k);return(0,r.jsx)(s.E.div,{className:"".concat(a||""),variants:d,whileHover:p,children:(0,r.jsx)(O.rU,{to:t,className:"transition-all duration-300 ease-linear ".concat(c&&g),onClick:n,smooth:!0,duration:1e3,children:l})})},G=e=>{let{isThemeChanging:t}=(0,i.useContext)(k);return(0,r.jsx)(N.u,{show:e.isModalOpen,children:(0,r.jsx)(L.V,{onClose(e){},className:"relative z-50 transition-all",children:(0,r.jsx)(N.u.Child,{as:i.Fragment,enter:"ease-out duration-500",enterFrom:"opacity-50 bottom-full",enterTo:"opacity-100 bottom-0",leave:"ease-in duration-300",leaveFrom:"opacity-100 bottom-0",leaveTo:"opacity-50 bottom-full",children:(0,r.jsx)("div",{className:"bg fixed inset-0 top-20 overflow-y-auto bg-background_1 dark:bg-dark-background_1 ".concat(t&&g),children:(0,r.jsx)("div",{className:"relative flex h-full items-center justify-center p-4 text-center",children:(0,r.jsxs)(L.V.Panel,{className:"relative bottom-20 mx-auto",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-7 child-a:text-2xl child-a:text-text_900 child-a:transition-all child-a:duration-1000 child-a:ease-linear dark:child-a:text-dark-text_900",children:[(0,r.jsx)(U,{to:"about",clickHandler:e.closeModal,children:"About"}),(0,r.jsx)(U,{to:"experience",clickHandler:e.closeModal,children:"Experience"}),(0,r.jsx)(U,{to:"projects",clickHandler:e.closeModal,children:"Projects"}),(0,r.jsx)(U,{to:"contact",clickHandler:e.closeModal,children:"Contact"})]}),(0,r.jsx)("div",{className:"mt-32",children:(0,r.jsx)("a",{href:"https://drive.google.com/file/d/1eh_IK2jKvSl-f7UvOLKPq-A6GfEOHd1I/view",target:"_blank",className:"btn btn-secondary border-secondary bg-secondary px-12 text-text_hover dark:border-dark-secondary dark:bg-dark-secondary dark:text-dark-text_hover ".concat(t&&g),rel:"noreferrer",children:"Resume"})})]})})})})})})},V=e=>{let{isDark:t,handleThemeChange:a}=e,{isThemeChanging:n}=(0,i.useContext)(k),[l,d]=(0,i.useState)(!1),c=()=>{d(!0)},o=()=>{d(!1)},x=function(){let[e,t]=(0,i.useState)({width:0,height:0});return(0,i.useEffect)(()=>{function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}(),h={hidden:{y:-50},visible:{y:0,transition:{duration:.5,ease:"easeInOut",staggerChildren:.1,delayChildren:.2}}},m={hidden:{opacity:0,y:-20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeInOut"}}};return(0,r.jsxs)(s.E.nav,{className:"wrapper fixed inset-0 z-50 flex h-20 w-full items-center justify-between border-b-2 border-background_2 bg-background_1 dark:border-dark-background_2 dark:bg-dark-background_1 ".concat(n&&g),variants:h,initial:"hidden",animate:"visible",children:[(0,r.jsx)(s.E.div,{variants:m,whileHover:p,children:(0,r.jsx)(O.rU,{className:"cursor-pointer text-2xl font-bold text-primary dark:text-dark-primary ".concat(n&&g),to:"/",onClick(){l&&o(),O.NY.scrollToTop()},children:"JM"})}),(0,r.jsxs)(s.E.div,{className:"descendant-a:header-link hidden gap-12 md:flex",variants:h,children:[(0,r.jsx)(U,{to:"about",variants:m,children:"About"}),(0,r.jsx)(U,{to:"experience",variants:m,children:"Experience"}),(0,r.jsx)(U,{to:"projects",variants:m,children:"Projects"}),(0,r.jsx)(U,{to:"contact",variants:m,children:"Contact"}),(0,r.jsx)(s.E.div,{variants:m,whileHover:p,children:(0,r.jsx)("a",{className:"transition-all duration-300 ".concat(n&&g),href:"https://drive.google.com/file/d/1eh_IK2jKvSl-f7UvOLKPq-A6GfEOHd1I/view",target:"_blank",rel:"noreferrer",children:"Resume"})})]}),(0,r.jsx)("div",{className:"theme-toggle ml-auto md:ml-0",children:(0,r.jsx)(T(),{onChange:a,checked:t,size:x.width>768?28:26})}),(0,r.jsx)("div",{className:"ml-4 text-2xl md:hidden",children:(0,r.jsx)(P.X,{toggled:l,toggle:l?o:c,rounded:!0,size:30,duration:.5,distance:"md"})}),(0,r.jsx)(G,{isModalOpen:l,closeModal:o})]})},Z=e=>{let{children:t,data:a}=e,[n,s,l]=(0,z.Z)("isDark",!0),{theme:d,setTheme:c}=(0,D.F)(),[o,x]=(0,i.useState)(n),[h,m]=(0,i.useState)(!1),u=()=>{m(!0),c(o?"light":"dark"),x(!o),s(!n),setTimeout(()=>{m(!1)},2e3)};return(0,r.jsx)(b,{value:{isThemeChanging:h},children:(0,r.jsxs)("div",{className:"bg-background_1 dark:bg-dark-background_1 ".concat(h&&g),children:[(0,r.jsx)(V,{isDark:o,handleThemeChange:u}),t,(0,r.jsx)(M,{socials:a.socials,name:a.name})]})})},F=e=>{let{project:t,index:a}=e,{isThemeChanging:n}=(0,i.useContext)(k);return(0,r.jsx)(s.E.div,{className:"z-10",variants:{hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeInOut",delay:.2+.2*a,when:"beforeChildren"}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:(0,r.jsxs)("div",{className:"group z-10 flex h-full flex-col bg-background_2 px-5 py-7 transition-all duration-300 hover:-translate-y-2 dark:bg-dark-background_2 ".concat(n&&g),children:[(0,r.jsxs)("div",{className:"flex items-center justify-between text-text_700 child-svg:h-9 child-svg:w-9 dark:text-dark-text_700 ".concat(n&&g),children:[(0,r.jsx)(x.QoU,{}),(0,r.jsxs)("div",{className:" z-10 flex gap-4 descendant-svg:h-6 descendant-svg:w-6 descendant-svg:cursor-pointer descendant-svg:transition-all descendant-svg:duration-300",children:[t.githubURL&&(0,r.jsx)("a",{href:t.githubURL,target:"_blank",rel:"noreferrer",children:(0,r.jsx)(x.uOf,{className:"hover:text-text_900 dark:hover:text-dark-text_900 ".concat(n&&g)})}),t.externalURL&&(0,r.jsx)("a",{href:t.externalURL,target:"_blank",rel:"noreferrer",children:(0,r.jsx)(x.AlO,{className:"hover:text-text_900 dark:hover:text-dark-text_900 ".concat(n&&g)})})]})]}),(0,r.jsxs)("div",{className:"my-7 flex flex-col",children:[(0,r.jsx)("h5",{className:"text-xl font-bold text-text_900 transition-all duration-300 group-hover:text-primary  dark:text-dark-text_900 dark:group-hover:text-dark-primary ".concat(n&&g),children:t.name}),(0,r.jsx)("p",{className:"mt-3 text-text_500 dark:text-dark-text_500 lg:text-sm ".concat(n&&g),children:t.shortDescription})]}),(0,r.jsx)("div",{className:"show-scrollbar -mb-3 mt-auto flex w-full gap-4 overflow-auto pb-3",children:t.techStack.data.map(e=>(0,r.jsx)("div",{className:"inline before:content-[''] first:ml-auto",id:e.attributes.name,children:(0,r.jsx)(j,{skill:e.attributes,id:e.attributes.name,className:"text-xs text-text_700 transition-all duration-300 group-hover:text-secondary  dark:text-dark-text_700 dark:group-hover:text-dark-secondary ".concat(n&&g)})},e.attributes.name))})]})})},R=e=>{let{projectsData:t}=e,a=t.data.map(e=>e.attributes),{isThemeChanging:n}=(0,i.useContext)(k);return(0,r.jsx)("div",{className:"container pt-20",id:"projects",children:(0,r.jsxs)(s.E.div,{className:"flex h-full w-full flex-col items-center justify-center ".concat(n&&g),variants:{hidden:{opacity:0,y:100},visible:{opacity:1,y:0,transition:{duration:1,ease:"easeInOut",when:"beforeChildren"}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,r.jsx)("h3",{className:"text-center text-3xl md:text-4xl ".concat(n&&g),children:"Some things I've built"}),(0,r.jsx)("div",{className:"mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5",children:a.map((e,t)=>(0,r.jsx)(F,{project:e,index:t},e.name+t))})]})})};var K=a(9008),A=a.n(K);let X=e=>{let{content:t}=e,{isThemeChanging:a}=(0,i.useContext)(k);return(0,r.jsx)("div",{className:"container flex h-screen items-center justify-center",id:"contact",children:(0,r.jsxs)(s.E.div,{variants:{hidden:{opacity:0,y:100},visible:{opacity:1,y:0,transition:{duration:1,ease:"easeInOut",when:"beforeChildren"}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"flex flex-col items-center justify-center px-5 text-center",children:[(0,r.jsx)("h6",{className:"text-sm text-secondary dark:text-dark-secondary lg:text-base ".concat(a&&g),children:"What's Next?"}),(0,r.jsx)("h3",{className:"md:text-4xl lg:my-3 lg:text-[50px] ".concat(a&&g),children:"Get In Touch"}),(0,r.jsx)("p",{className:"mt-4 mb-6 max-w-xl lg:text-lg ".concat(a&&g),children:t}),(0,r.jsx)(s.E.a,{href:"mailto:jeromemarshall0@gmail.com",className:"btn mt-4 inline-block ".concat(a&&g),whileHover:p,children:"Say Hello"})]})})},q=e=>{let{socials:t}=e,a=[["GitHub","LinkedIn","Stack Overflow"],["+91 9159115328","jeromemarshall0@gmail.com"]],n={GitHub:"hover:w-[107px]",LinkedIn:"hover:w-[117px]","Stack Overflow":"hover:w-[158px]","+91 9159115328":"hover:w-[164px]","jeromemarshall0@gmail.com":"hover:w-[253px]"},i=e=>({hidden:{opacity:0},visible:{opacity:1,transition:{duration:1,ease:"easeInOut",staggerChildren:.1,delayChildren:1,staggerDirection:-1}}}),l=e=>({hidden:{x:e?-100:100,opacity:0},visible:{x:0,opacity:1,transition:{duration:.3,ease:"easeInOut"}}}),d=e=>{let{social:t,left:a,right:i}=e,d=m(t.name);return(0,r.jsx)(s.E.div,{variants:l(a),children:(0,r.jsxs)("a",{className:"social-card group flex w-[48px] items-center gap-3 ".concat(n[t.name]," ").concat(i?"flex-row-reverse":""),href:t.url,target:"phone"!==t.name?"_blank":"",rel:"noreferrer",children:[(0,r.jsx)(d,{}),(0,r.jsx)("span",{className:" whitespace-nowrap text-sm text-text_900 opacity-0 transition-all duration-500 group-hover:opacity-100 dark:text-dark-text_900",children:t.name})]},t.name+"creditSection")})},c=t.filter(e=>a[0].includes(e.name)).map(e=>(0,r.jsx)(d,{social:e,left:!0},e.name+"left")),o=t.filter(e=>a[1].includes(e.name)).map(e=>(0,r.jsx)(d,{social:e,right:!0},e.name+"right"));return(0,r.jsx)("div",{className:"wrapper fixed bottom-0 right-0 left-0 z-0 hidden w-screen items-end justify-between xl:flex",children:a.map((e,t)=>{let a=0===t;return(0,r.jsxs)(s.E.div,{variants:i(a),initial:"hidden",animate:"visible",className:"flex flex-col items-start gap-5 ".concat(!a&&"items-end"),children:[a?c:o,(0,r.jsx)(s.E.p,{variants:l(a),className:"h-[150px] border-r-2 border-accent_border dark:border-dark-accent_border ".concat(a?"ml-[22px]":"mr-[22px]")})]},t)})})};var B=a(9583);let Q=e=>{let{setIsLoading:t,randomQuote:a}=e,[l,d]=(0,i.useState)(!1),[c,x]=(0,i.useState)(!1);return setTimeout(()=>{d(!0)},5e3),(0,r.jsx)(s.E.div,{variants:{hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{duration:1,ease:"easeInOut",when:"beforeChildren"}},exit:{opacity:0,scale:0,transition:{duration:.7,ease:"easeInOut",when:"afterChildren"}}},initial:"hidden",animate:"visible",exit:"exit",className:"flex h-screen w-screen items-center justify-center overflow-auto bg-background_2 dark:bg-dark-background_2",layout:!0,children:(0,r.jsx)(s.E.div,{className:"container flex items-center",children:(0,r.jsx)(s.E.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:1,ease:"easeInOut"}},exit:{opacity:0,transition:{duration:.7,ease:"easeInOut"}}},className:"relative flex w-full flex-col items-center justify-center bg-background_2 py-16 dark:bg-dark-background_2 lg:px-12",layout:!0,children:(0,r.jsxs)(s.E.div,{className:"flex flex-col items-center text-center",layout:!0,children:[(0,r.jsx)("div",{className:"text-5xl text-text_500 dark:text-dark-text_500 md:text-6xl lg:text-7xl",children:(0,r.jsx)(B.fkU,{})}),(0,r.jsx)("p",{className:"mt-8 text-3xl leading-normal text-text_700 dark:text-dark-text_700 lg:text-5xl lg:leading-normal",children:a.quote}),(0,r.jsx)(s.E.div,{className:" flex w-40 items-center justify-center ".concat(l?"md:h-22 mt-10 mb-10 h-20 lg:h-24":"mt-10 mb-8 h-2 lg:mt-14"," transition-all duration-1000"),children:(0,r.jsx)(n.M,{exitBeforeEnter:!0,onExitComplete(){setTimeout(()=>{x(!0)},1e3)},children:l?(0,r.jsx)(s.E.div,{className:"h-full w-full cursor-pointer text-secondary hover:text-primary child-svg:h-full child-svg:w-full child-svg:transition-all child-svg:duration-500 dark:text-dark-secondary dark:hover:text-dark-primary ",variants:{hidden:{opacity:0,x:40},visible:{opacity:1,x:0,y:0,scale:1,transition:{duration:1,ease:"easeInOut"}},animation:{opacity:1,x:0,scale:1.05,transition:{duration:1,yoyo:1/0}},hover:{scale:1.05,transition:{duration:1,yoyo:1/0}},exit:{opacity:0,transition:{duration:.5,ease:"easeInOut"}}},initial:"hidden",animate:c?"animation":"visible",layout:!0,onClick:()=>t(!1),children:(0,r.jsx)(o.PxJ,{})},"icon-go"):(0,r.jsx)(s.E.div,{className:"h-1 w-full overflow-hidden rounded-xl bg-secondary dark:bg-dark-secondary",exit:{opacity:0,x:-40,transition:{duration:.5,ease:"easeInOut"}}},"divider")})}),(0,r.jsx)(s.E.p,{className:"text-lg text-text_700 dark:text-dark-text_700 lg:text-xl",layout:!0,children:a.author})]})})})})};var W=a(4298),J=a.n(W);let Y=e=>{let{mID:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(J(),{src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),strategy:"afterInteractive"}),(0,r.jsx)(J(),{strategy:"afterInteractive",id:"google-analytics",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n        \n          gtag('config', '".concat(t,"');\n        ")})]})},$=e=>{let{data:t,quotes:a,jobs:s}=e,[l,d]=(0,i.useState)(!0),c=a[Math.floor(Math.random()*a.length)];return(0,r.jsxs)("div",{className:"bg-background_1 dark:bg-dark-background_1",children:[(0,r.jsxs)(A(),{children:[(0,r.jsx)("title",{children:t.name}),(0,r.jsx)("meta",{name:"description",content:"".concat(t.name,"'s portfolio. Has all the info on ").concat(t.name,"'s career. This portfolio was made with Next js")})]}),(0,r.jsx)(Y,{mID:"G-K0X6YXQ2PG"}),(0,r.jsx)(n.M,{mode:"wait",children:l?(0,r.jsx)(Q,{setIsLoading:d,randomQuote:c},"splash-container"):(0,r.jsxs)(Z,{data:t,children:[(0,r.jsx)(C,{name:t.name,shortIntro:t.shortIntroduction,introduction:t.introduction}),(0,r.jsx)(f,{aboutMe:t.about,skillsData:t.skillsHighlight}),(0,r.jsx)(I,{jobs:s}),(0,r.jsx)(R,{projectsData:t.projectsHighlight}),(0,r.jsx)(X,{content:t.contactText}),(0,r.jsx)(q,{socials:t.socials})]})})]})};var ee=!0,et=$}},function(e){e.O(0,[415,445,13,526,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);