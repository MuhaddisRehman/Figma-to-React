(self.webpackChunksufi_panel=self.webpackChunksufi_panel||[]).push([[8925],{8925:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SaleConversionModule:()=>C});var r=n(1116),a=n(4140),o=n(7368),l=n(2749),i=n(5703),s=n(1462),m=n(8918),d=n(507);function c(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"strong",23),o["\u0275\u0275text"](1,"Best"),o["\u0275\u0275elementEnd"]())}function p(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"strong",24),o["\u0275\u0275text"](1,"Bad"),o["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"strong",23),o["\u0275\u0275text"](1,"Keep it up"),o["\u0275\u0275elementEnd"]())}function u(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"strong",24),o["\u0275\u0275text"](1,"Check Suggestions"),o["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"tr"),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275elementStart"](2,"p",17),o["\u0275\u0275text"](3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"td"),o["\u0275\u0275elementStart"](5,"p",17),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"td"),o["\u0275\u0275elementStart"](8,"p",17),o["\u0275\u0275text"](9),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"td"),o["\u0275\u0275elementStart"](11,"p",17),o["\u0275\u0275text"](12),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"td"),o["\u0275\u0275elementStart"](14,"p",20),o["\u0275\u0275text"](15),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"td"),o["\u0275\u0275elementStart"](17,"p",17),o["\u0275\u0275template"](18,c,2,0,"strong",21),o["\u0275\u0275template"](19,p,2,0,"strong",22),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](20,"td"),o["\u0275\u0275elementStart"](21,"p",17),o["\u0275\u0275template"](22,g,2,0,"strong",21),o["\u0275\u0275template"](23,u,2,0,"strong",22),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=t.index;o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](n+1),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"]("",e.agentId," "),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"]("",e.totalInquery," "),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"]("",e.totalbooking," "),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"]("",e.percentage,"% "),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngIf",e.percentage>20),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",e.percentage<=20),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngIf",e.percentage>20),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",e.percentage<=20)}}const f=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a){this.spinner=e,this.modalService=t,this.fb=n,this.notifierService=r,this.service=a,this.conversion=()=>{this.spinner.show(),this.service.converstion({startDate:"",endDate:""}).subscribe(e=>{"True"===e.status&&(this.saleConversionData=e.data.resp,this.totalAgents=e.data.totalAgents,this.totalInquiries=e.data.grandTotalInquery,this.totalBookings=e.data.grandTotalbooking,this.searchForm.setValue({startDate:e.data.startfliter,endDate:e.data.endfliter}),this.spinner.hide())})},this.searchConversion=()=>{this.spinner.show();let e={startDate:this.searchForm.controls.startDate.value,endDate:this.searchForm.controls.endDate.value};console.log(e),this.service.converstion(e).subscribe(e=>{"True"===e.status&&(this.saleConversionData=e.data.resp,this.totalAgents=e.data.totalAgents,this.totalInquiries=e.data.grandTotalInquery,this.totalBookings=e.data.grandTotalbooking,this.spinner.hide())})},this.notifier=r}ngOnInit(){this.conversion(),this.searchForm=this.fb.group({startDate:[],endDate:[]})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](l.t2),o["\u0275\u0275directiveInject"](i.gk),o["\u0275\u0275directiveInject"](s.FormBuilder),o["\u0275\u0275directiveInject"](m.lG),o["\u0275\u0275directiveInject"](d.r))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-sale-conversion"]],decls:61,vars:6,consts:[[1,"iq-card","iq-card-block","iq-card-stretch","iq-card-height"],[1,"row","p-3"],[1,"col-md-12","iq-header-title"],[1,"card-title",2,"font-weight","700"],[1,"iq-card-body","bg-light","m-3","border-15"],[3,"formGroup"],[1,"row"],[1,"col-md-3","form-group"],["type","date","formControlName","startDate",1,"form-control","form-control-sm"],["type","date","formControlName","endDate",1,"form-control","form-control-sm"],["type","button",1,"btn","btn-sm","btn-primary",2,"margin-top","30px",3,"click"],[1,"table-responsive"],[1,"table","table-hover","text-center","mb-0","mt-2"],[1,"bg-primary"],["scope","col"],[4,"ngFor","ngForOf"],[2,"background-color","var(--iq-primary)","color","white"],[1,"mb-0"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-clip-rotate",3,"fullScreen"],[2,"color","white"],[1,"mb-0","text-primary"],["class","text-success",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"text-success"],[1,"text-danger"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"h2",3),o["\u0275\u0275text"](4,"Sale Conversion"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"div",4),o["\u0275\u0275elementStart"](6,"form",5),o["\u0275\u0275elementStart"](7,"div",6),o["\u0275\u0275elementStart"](8,"div",7),o["\u0275\u0275elementStart"](9,"label"),o["\u0275\u0275text"](10,"Start Date:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](11,"input",8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"div",7),o["\u0275\u0275elementStart"](13,"label"),o["\u0275\u0275text"](14,"To Date:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](15,"input",9),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"div",7),o["\u0275\u0275elementStart"](17,"button",10),o["\u0275\u0275listener"]("click",function(){return t.searchConversion()}),o["\u0275\u0275text"](18,"Check"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"div",11),o["\u0275\u0275elementStart"](20,"table",12),o["\u0275\u0275elementStart"](21,"thead",13),o["\u0275\u0275elementStart"](22,"tr"),o["\u0275\u0275elementStart"](23,"th",14),o["\u0275\u0275text"](24,"Sr#"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](25,"th",14),o["\u0275\u0275text"](26,"Agent Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](27,"th",14),o["\u0275\u0275text"](28,"Total Inquiries"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](29,"th",14),o["\u0275\u0275text"](30,"Total Bookings"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](31,"th",14),o["\u0275\u0275text"](32,"Conversion"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](33,"th",14),o["\u0275\u0275text"](34,"Rating"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](35,"th",14),o["\u0275\u0275text"](36,"Improvements"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](37,"tbody"),o["\u0275\u0275template"](38,h,24,9,"tr",15),o["\u0275\u0275elementStart"](39,"tr",16),o["\u0275\u0275elementStart"](40,"td"),o["\u0275\u0275element"](41,"p",17),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](42,"td"),o["\u0275\u0275elementStart"](43,"p",17),o["\u0275\u0275text"](44),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](45,"td"),o["\u0275\u0275elementStart"](46,"p",17),o["\u0275\u0275text"](47),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](48,"td"),o["\u0275\u0275elementStart"](49,"p",17),o["\u0275\u0275text"](50),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](51,"td"),o["\u0275\u0275element"](52,"p",17),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](53,"td"),o["\u0275\u0275element"](54,"p",17),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](55,"td"),o["\u0275\u0275element"](56,"p",17),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](57,"ngx-spinner",18),o["\u0275\u0275elementStart"](58,"p",19),o["\u0275\u0275text"](59," Loading... "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](60,"notifier-container")),2&e&&(o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("formGroup",t.searchForm),o["\u0275\u0275advance"](32),o["\u0275\u0275property"]("ngForOf",t.saleConversionData),o["\u0275\u0275advance"](6),o["\u0275\u0275textInterpolate1"](" ",t.totalAgents," Agents "),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"](" ",t.totalInquiries," "),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"](" ",t.totalBookings," "),o["\u0275\u0275advance"](7),o["\u0275\u0275property"]("fullScreen",!0))},directives:[s["\u0275NgNoValidate"],s.NgControlStatusGroup,s.FormGroupDirective,s.DefaultValueAccessor,s.NgControlStatus,s.FormControlName,r.sg,l.Ro,m.TK,r.O5],styles:["h4[_ngcontent-%COMP%]{color:#fff}.border-15[_ngcontent-%COMP%]{border-radius:15px}.form-control[_ngcontent-%COMP%]{background-color:#fff}"]}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[a.Bz.forChild(f)],a.Bz]}),e})();var v=n(2693),E=n(8453),b=n(9282),x=n(4510);const I={position:{horizontal:{position:"right",distance:12},vertical:{position:"bottom",distance:12,gap:10}},theme:"material",behaviour:{autoHide:5e3,onClick:!1,onMouseover:"pauseAutoHide",showDismissButton:!0,stacking:4},animations:{enabled:!0,show:{preset:"slide",speed:300,easing:"ease"},hide:{preset:"fade",speed:300,easing:"ease",offset:50},shift:{speed:300,easing:"ease"},overlap:150}};let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[r.ez,S,l.ef,m.Eb.withConfig(I),i.zk,v.JF,s.ReactiveFormsModule,E.h,s.FormsModule,x.K,b.JX]]}),e})()}}]);