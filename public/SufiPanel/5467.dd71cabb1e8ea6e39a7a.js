(self.webpackChunksufi_panel=self.webpackChunksufi_panel||[]).push([[5467],{5467:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CancelledBookingsModule:()=>P});var i=n(1116),a=n(4140),r=n(3187),s=n(7368),l=n(2749),o=n(5703),d=n(1462),m=n(8918),c=n(1755),h=n(5946);function g(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275elementStart"](1,"td"),s["\u0275\u0275elementStart"](2,"p",16),s["\u0275\u0275text"](3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"td"),s["\u0275\u0275elementStart"](5,"p",16),s["\u0275\u0275elementStart"](6,"strong",17),s["\u0275\u0275elementStart"](7,"a",18),s["\u0275\u0275listener"]("click",function(){const t=s["\u0275\u0275restoreView"](e).$implicit;return s["\u0275\u0275nextContext"]().bookingDetailRoute(t.id)}),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"td"),s["\u0275\u0275elementStart"](10,"p",16),s["\u0275\u0275text"](11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"td"),s["\u0275\u0275elementStart"](13,"p",16),s["\u0275\u0275text"](14),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"td"),s["\u0275\u0275elementStart"](16,"p",16),s["\u0275\u0275text"](17),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"td"),s["\u0275\u0275elementStart"](19,"p",16),s["\u0275\u0275text"](20),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"td"),s["\u0275\u0275elementStart"](22,"p",16),s["\u0275\u0275text"](23),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"td"),s["\u0275\u0275elementStart"](25,"p",16),s["\u0275\u0275text"](26),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,i=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](i.serialNumberArray[n]-i.pageSize*(i.paginatePageNumber-1)),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](e.id),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",e.booking_date," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",e.departure_date," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",e.returnDate," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",e.supplier_ref," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",e.fullname," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",e.agent_name," ")}}function u(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"option",19),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275property"]("value",e),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e," ")}}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a,r,s){this.spinner=e,this.modalService=t,this.fb=n,this.notifierService=i,this.router=a,this.service=r,this.adminService=s,this.pageNumberForClick=[],this.pageSize=100,this.startNumber=0,this.serialNumberArray=[],this.paginatePageNumber=1,this.oldDB=!1,this.bookingDetailRoute=e=>{this.router.navigate(["/cancelled-bookings/booking-details",{id:e}])},this.getBrands=()=>{this.adminService.getBrands().subscribe(e=>{"True"==e.status&&(this.brandsData=e.data)})},this.toggleChange=e=>{this.cancelledBookingsToggle(e)},this.cancelledBookings=()=>{let e="";!0===this.oldDB&&(e="mysql2"),0==this.oldDB&&(e="mysql"),this.spinner.show(),this.service.cancled({brand_fliter:"",sort_fliter:"",start_:this.startNumber,end_:this.pageSize,db:e}).subscribe(e=>{if(console.log("Cancelled Bookings Data",e),"True"===e.status){this.cancelledData=e.data,this.spinner.hide(),this.totalRecords=e.total,this.numOfPages=e.total/this.pageSize,this.spinner.hide();for(let t=e.total;t>=1;t--)this.serialNumberArray.push(t);this.isFloat(this.numOfPages)?(this.numOfPages=1+~~this.numOfPages,this.showPagesNumber()):this.showPagesNumber()}})},this.cancelledBookingsToggle=e=>{!0===e?(this.spinner.show(),this.service.cancled({brand_fliter:"",sort_fliter:"",start_:this.startNumber,end_:this.pageSize,db:"mysql2"}).subscribe(e=>{if(console.log("Cancelled Bookings Data",e),"True"===e.status){this.cancelledData=e.data,this.spinner.hide(),this.totalRecords=e.total,this.numOfPages=e.total/this.pageSize,this.spinner.hide();for(let t=e.total;t>=1;t--)this.serialNumberArray.push(t);this.isFloat(this.numOfPages)?(this.numOfPages=1+~~this.numOfPages,this.showPagesNumber()):this.showPagesNumber()}})):(this.spinner.show(),this.service.cancled({brand_fliter:"",sort_fliter:"",start_:this.startNumber,end_:this.pageSize,db:"mysql"}).subscribe(e=>{if(console.log("Cancelled Bookings Data",e),"True"===e.status){this.cancelledData=e.data,this.spinner.hide(),this.totalRecords=e.total,this.numOfPages=e.total/this.pageSize,this.spinner.hide();for(let t=e.total;t>=1;t--)this.serialNumberArray.push(t);this.isFloat(this.numOfPages)?(this.numOfPages=1+~~this.numOfPages,this.showPagesNumber()):this.showPagesNumber()}}))},this.getPaginationNumberRecord=e=>{this.paginatePageNumber=e.target.value,this.startNumber=this.pageSize*(this.paginatePageNumber-1),this.cancelledBookings()},this.showPagesNumber=()=>{if(0==this.pageNumberForClick.length)for(let e=1;e<=this.numOfPages;e++)this.pageNumberForClick.push(e);else{this.pageNumberForClick.length=0;for(let e=1;e<=this.numOfPages;e++)this.pageNumberForClick.push(e)}return this.pageNumberForClick},this.getNumOfRecords=e=>{this.startNumber=0,this.paginatePageNumber=1,this.pageNumberForClick.length=0,this.pageSize=e.target.value,console.log(e.target.value),this.cancelledBookings()},this.notifier=i}ngOnInit(){this.cancelledBookings(),this.getBrands()}isFloat(e){return Number(e)===e&&e%1!=0}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](l.t2),s["\u0275\u0275directiveInject"](o.gk),s["\u0275\u0275directiveInject"](d.FormBuilder),s["\u0275\u0275directiveInject"](m.lG),s["\u0275\u0275directiveInject"](a.F0),s["\u0275\u0275directiveInject"](c.F),s["\u0275\u0275directiveInject"](h.l))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-cancelled-bookings"]],decls:37,vars:3,consts:[[1,"iq-card","iq-card-block","iq-card-stretch","iq-card-height"],[1,"iq-card-header","d-flex","justify-content-between","px-3","border-bottom"],[1,"iq-header-title"],[1,"card-title"],[1,"iq-card-body"],[1,"table-responsive"],[1,"table","table-hover","text-center","mb-0","mt-2"],[1,"bg-primary"],["scope","col"],[4,"ngFor","ngForOf"],[1,"card-footer","text-center","py-3"],[1,"text-danger","selectPageLabel"],[1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-clip-rotate",3,"fullScreen"],[2,"color","white"],[1,"mb-0"],[1,"text-color-new"],[1,"cursor-pointer","text-color-new",3,"click"],[3,"value"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"div",2),s["\u0275\u0275elementStart"](3,"h2",3),s["\u0275\u0275text"](4,"Cancelled Bookings"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"div",4),s["\u0275\u0275elementStart"](6,"div",5),s["\u0275\u0275elementStart"](7,"table",6),s["\u0275\u0275elementStart"](8,"thead",7),s["\u0275\u0275elementStart"](9,"tr"),s["\u0275\u0275elementStart"](10,"th",8),s["\u0275\u0275text"](11,"Sr#"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"th",8),s["\u0275\u0275text"](13,"File No."),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"th",8),s["\u0275\u0275text"](15,"booking Date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"th",8),s["\u0275\u0275text"](17,"Travelling Date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"th",8),s["\u0275\u0275text"](19,"Return Date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"th",8),s["\u0275\u0275text"](21,"Sup.Ref#"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](22,"th",8),s["\u0275\u0275text"](23,"Customer Name"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"th",8),s["\u0275\u0275text"](25,"Agent"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](26,"tbody"),s["\u0275\u0275template"](27,g,27,8,"tr",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](28,"div",10),s["\u0275\u0275elementStart"](29,"label",11),s["\u0275\u0275text"](30,"Select Page: "),s["\u0275\u0275elementStart"](31,"select",12),s["\u0275\u0275listener"]("change",function(e){return t.getPaginationNumberRecord(e)}),s["\u0275\u0275template"](32,u,2,2,"option",13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](33,"notifier-container"),s["\u0275\u0275elementStart"](34,"ngx-spinner",14),s["\u0275\u0275elementStart"](35,"p",15),s["\u0275\u0275text"](36," Loading... "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](27),s["\u0275\u0275property"]("ngForOf",t.cancelledData),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("ngForOf",t.pageNumberForClick),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("fullScreen",!0))},directives:[i.sg,m.TK,l.Ro,d.NgSelectOption,d["\u0275NgSelectMultipleOption"]],styles:["a[_ngcontent-%COMP%]{font-size:20px;cursor:pointer}"]}),e})()},{path:"booking-details",component:r.A}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[a.Bz.forChild(p)],a.Bz]}),e})();var f=n(2693),S=n(7241),v=n(8453),E=n(9282),x=n(4510),N=n(9710);const k={position:{horizontal:{position:"right",distance:12},vertical:{position:"bottom",distance:12,gap:10}},theme:"material",behaviour:{autoHide:5e3,onClick:!1,onMouseover:"pauseAutoHide",showDismissButton:!0,stacking:4},animations:{enabled:!0,show:{preset:"slide",speed:300,easing:"ease"},hide:{preset:"fade",speed:300,easing:"ease",offset:50},shift:{speed:300,easing:"ease"},overlap:150}};let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[i.ez,b,l.ef,m.Eb.withConfig(k),o.zk,f.JF,d.ReactiveFormsModule,v.h,d.FormsModule,x.K,E.JX,S.UM,N.S]]}),e})()}}]);