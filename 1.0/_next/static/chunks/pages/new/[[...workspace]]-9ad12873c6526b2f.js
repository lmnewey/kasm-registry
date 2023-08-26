(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return t(5790)}])},5790:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return u},default:function(){return p}});var a=t(5893),r=t(9008),n=t.n(r),i=t(7294),o=t(3162),l=t(8813),c=t(3157),d=t(1163),m=JSON.parse('{"wZ":[{"description":"Chromium is a free and open-source browser, primarily developed and maintained by Google.","docker_registry":"https://index.docker.io/v1/","image_src":"chromium.png","name":"kasmweb/chromium:develop","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Browser"],"friendly_name":"Chromium","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"365ce0f48ab56c008eb362a1b40e2af8aae793c1"},{"description":"Emulator for commander X16 ","docker_registry":"https://docker2.newey.id.au/v2","image_src":"logo.png","name":"docker2.newey.id.au/emulator/x16:base","run_config":{"hostname":"kasm-commande-x16"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Emulator"],"friendly_name":"Commander X16","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":2170,"sha":"65d20d5d2f631d463e461cc8f1e77bbfa15f108d"},{"description":"DotNet Development Environment","docker_registry":"https://docker2.newey.id.au/v2/","image_src":"ubuntuwsdn.png","name":"docker2.newey.id.au/workstation/dotnet-dev:latest","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Workstation"],"friendly_name":"Dotnet","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":7000,"sha":"d6faf0f5b61bc3fd0644381fa32bb7404038ea60"},{"description":"DotNet Core Development Environment","docker_registry":"https://docker2.newey.id.au/v2/","image_src":"ubuntuwsdnc.png","name":"docker2.newey.id.au/workstation/dotnetcore-dev:latest","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Workstation"],"friendly_name":"Dotnet Core","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":7000,"sha":"5d8bcf21ede20eac9f7735f63714f43f6ef7cd0e"},{"description":"Pyhton3 Development Environment","docker_registry":"https://docker2.newey.id.au/v2/","image_src":"ubuntuwsp3.png","name":"docker2.newey.id.au/workstation/python-dev:23008240920","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Workstation"],"friendly_name":"Python 3","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":7000,"sha":"e0cce913ffdb261b5e7e8e232b6221f3e09b3225"},{"description":"KVM nested Virtualization Development Environment2","docker_registry":"https://docker2.newey.id.au/v2/","image_src":"ubuntuwsdn.png","name":"docker2.newey.id.au/workstation/dotnet-kvm:23008232127","run_config":{"hostname":"kasm","user":"root","devices":["/dev/kvm:/dev/kvm:rwm"]},"exec_config":{"first_launch":{"user":"root","cmd":"bash -c \'chown -R kasm-user:kasm-user /dev/kvm/*\'"},"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Workstation"],"friendly_name":"VirtualHost2","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":7000,"sha":"817f677b6f1b90c26c964aaa95b19e391f40164b"},{"description":"Gaming Workstation","docker_registry":"https://docker2.newey.id.au/v2/","image_src":"ubuntuws.png","name":"my-ubuntu:latest","run_config":{"hostname":"kasm-Gaming"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Workstation"],"friendly_name":"Gaming Workstation","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":21700,"sha":"60afe90a34c7eb2bdafdc8634d808da9720ff7f3"},{"description":"KVm nested Virtualization Development Environment","docker_registry":"https://docker2.newey.id.au/v2/","image_src":"ubuntuwsdn.png","name":"docker2.newey.id.au/workstation/dotnet-kvm:23008232127","run_config":{"hostname":"kasm","user":"root","devices":["/dev/kvm:/dev/kvm:rwm"]},"exec_config":{"first_launch":{"user":"root","cmd":"bash -c \'chown -R kasm-user:kasm-user /dev/kvm/*\'"},"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Workstation"],"friendly_name":"VirtualHost","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":7000,"sha":"ea5288c889c487fc51830befed16466367ed2e9f"},{"description":"test ws newey","docker_registry":"https://docker2.newey.id.au/v2/","image_src":"chromium.png","name":"my-ubuntu:latest","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Workstation"],"friendly_name":"NeweyWS Test1","architecture":["amd64"],"compatibility":["1.13.x","1.14.x"],"uncompressed_size_mb":21700,"sha":"60c5f849c7160afe8f26c62e134275fba4e17f5b"}]}'),u=!0;function p(e){let{workspace:s}=e,r=(0,i.useRef)(null),u=(0,i.useRef)(null),p=(0,i.useRef)(null),[f,b]=(0,i.useState)(null),[g,x]=(0,i.useState)(null),[_,v]=(0,i.useState)(null),[k,y]=(0,i.useState)("png"),[w,j]=(0,i.useState)(null),N={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[S,R]=(0,i.useState)(N);(0,d.useRouter)(),(0,i.useEffect)(()=>{if(null===s)p.current.value="",r.current.value="",u.current.value="",b(null),x(null),v(null),R(N);else if(s&&s[0]){let e=m.wZ.find(e=>e.name===atob(s[0]));if(delete e.sha,p.current.value=e.description,r.current.value=e.name,u.current.value=e.friendly_name,e.categories){let t=[];e.categories.map(e=>t.push({label:e,value:e})),b(t)}if(e.architecture){let a=[];e.architecture.map(e=>a.push({label:e,value:e})),x(a)}j("../../icons/"+e.image_src),R({...S,...e})}},[s]);let L={control:(e,s)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,s){let{data:t}=s;return{...e,backgroundColor:"#dde6f1"}}};(0,i.useEffect)(()=>{if(S&&S.friendly_name){let e={...S};e.image_src=C(e.friendly_name)+"."+k,R(e)}},[k]);let A=e=>{let s={...S};s.categories=e.map(e=>e.value),R(s);let t=[];s.categories.map(e=>t.push({label:e,value:e})),b(t)},M=e=>{let s={...S};s.architecture=e.map(e=>e.value),R(s);let t=[];s.architecture.map(e=>t.push({label:e,value:e})),x(t)};function C(e){var s=e.toString().toLowerCase();return(s=(s=(s=s.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let K=()=>{var e=t(5733);let s=new e,a=s.folder(S.friendly_name);if(a.file("workspace.json",JSON.stringify(S,null,2)),_)a.file(S.image_src,_.file);else if(w){let r=fetch(w).then(e=>e.blob());a.file(S.image_src,r)}s.generateAsync({type:"blob"}).then(function(e){(0,o.saveAs)(e,C(S.friendly_name)+".zip")})},U=e=>{let s={...S};s[e.target.name]=e.target.value,"icon"===e.target.name&&(delete s.icon,v({value:e.target.value,file:e.target.files[0]}),y(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),j(null)),s.friendly_name&&(s.image_src=C(s.friendly_name)+"."+k),R(s)};return(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:"Kasm Workspaces"}),(0,a.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,a.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,a.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,a.jsx)("input",{type:"file",name:"icon",onChange:U,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,a.jsx)("input",{ref:u,name:"friendly_name",onChange:U,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,a.jsx)(l.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:A,styles:L,value:f}),(0,a.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,a.jsx)("input",{ref:p,name:"description",onChange:U,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,a.jsx)("input",{ref:r,name:"name",onChange:U,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,a.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,a.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:M,styles:L,value:g}),(0,a.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,a.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,a.jsx)(h,{workspace:S,icon:_,inlineImage:w}),(0,a.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...S},null,2)}),(0,a.jsx)("button",{onClick:K,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function h(e){let{workspace:s,icon:t,inlineImage:r}=e,[n,o]=(0,i.useState)(!1),l=null;if(t){let c=new Blob([t.file]);l=URL.createObjectURL(c),s.image_src=l}return(0,a.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,a.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(n?" -translate-y-1/2":""),children:[(0,a.jsxs)("div",{onClick:()=>o(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,a.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:s.image_src,onError(e){null!==r&&(e.target.src=r)},alt:s.friendly_name}),(0,a.jsxs)("div",{className:"flex-col pl-28",children:[(0,a.jsx)("div",{className:"font-bold",children:s.friendly_name||"Friendly Name"}),(0,a.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Kasm as a Dev playground"," ",(0,a.jsx)("span",{children:void 0})]}),(0,a.jsx)("div",{className:" h-8"})]}),(0,a.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[s.architecture&&s.architecture.map((e,s)=>(0,a.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+s)),s.categories.map((e,s)=>(0,a.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+s))]}),!1]}),(0,a.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,a.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>o(!1),children:(0,a.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,a.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,a.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,a.jsx)("div",{className:"font-bold",children:s.friendly_name})," ",s.description]}),(0,a.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,a.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,a.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);