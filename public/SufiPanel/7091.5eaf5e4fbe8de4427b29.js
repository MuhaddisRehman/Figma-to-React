(self.webpackChunksufi_panel=self.webpackChunksufi_panel||[]).push([[7091],{7091:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CreateFollowupModule:()=>E});var o=n(1116),r=n(4140),l=n(7368),i=n(2749),m=n(5703),a=n(1462),s=n(8918),p=n(507),d=n(2693);function c(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"option"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e)}}function f(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"option"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e)}}const u=[{path:"",component:(()=>{class e{constructor(e,t,n,o,r,l){this.spinner=e,this.modalService=t,this.fb=n,this.notifierService=o,this.service=r,this.http=l,this.returningStopOver=!0,this.getDepartAirports=e=>{this.http.get("https://www.sufitravelandtours.co.uk/departairport.php?term="+e.target.value).subscribe(e=>{this.flightFrom=e})},this.getFlightToAirports=e=>{this.http.get("https://www.sufitravelandtours.co.uk/departairport.php?term="+e.target.value).subscribe(e=>{this.flightTo=e})},this.saveForm=()=>{this.spinner.show();let e={flight_from:this.followUpForm.controls.flight_from.value,destination:this.followUpForm.controls.flight_to.value,departure_date:this.followUpForm.controls.departed_date.value,return_date:this.followUpForm.controls.return_date.value,prefered_airline:this.followUpForm.controls.prefered_airline.value,pnr:this.followUpForm.controls.pnr.value,cost_price:this.followUpForm.controls.cost_price.value,sale_price:this.followUpForm.controls.sale_price.value,number_of_passanger:this.followUpForm.controls.pessengers.value,customer_name:this.followUpForm.controls.customer_name.value,customer_phone:this.followUpForm.controls.primary_phone.value,secondary_phone:this.followUpForm.controls.secondary_phone.value,customer_email:this.followUpForm.controls.customer_email.value,adult:this.followUpForm.controls.adult.value,child:this.followUpForm.controls.child.value,infaunt:this.followUpForm.controls.infant.value,comments:this.followUpForm.controls.comments.value};console.log(e),this.service.createFollowup(e).subscribe(e=>{"True"===e.status&&(this.followUpForm.reset(),this.spinner.hide(),this.notifier.notify("success","Successfully Submitted!"))})},this.resetForm=()=>{this.followUpForm.reset()},this.notifier=o}ngOnInit(){this.followUpForm=this.fb.group({flight_from:[],flight_to:[],departed_date:[],return_date:[],prefered_airline:[],pnr:[],cost_price:[],sale_price:[],pessengers:[],customer_name:[],primary_phone:[],secondary_phone:[],customer_email:[],adult:[],child:[],infant:[],comments:[]})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](i.t2),l["\u0275\u0275directiveInject"](m.gk),l["\u0275\u0275directiveInject"](a.FormBuilder),l["\u0275\u0275directiveInject"](s.lG),l["\u0275\u0275directiveInject"](p.r),l["\u0275\u0275directiveInject"](d.eN))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-create-followup"]],decls:91,vars:4,consts:[[1,"iq-card","iq-card-block","iq-card-stretch","iq-card-height"],[1,"row","p-3"],[1,"col-md-12","iq-header-title"],[1,"card-title",2,"font-weight","700"],[1,"iq-card-body","bg-light","m-3","border-15"],[3,"formGroup"],[1,"row"],[1,"col-md-6","form-group"],["type","text","formControlName","flight_from","list","flightFromNames","autocomplete","off",1,"form-control",3,"input"],["id","flightFromNames"],[4,"ngFor","ngForOf"],["type","text","formControlName","flight_to","list","flightToNames","autocomplete","off",1,"form-control",3,"input"],["id","flightToNames"],["type","date","formControlName","departed_date",1,"form-control"],["type","date","formControlName","return_date",1,"form-control"],["type","text","formControlName","prefered_airline",1,"form-control"],["type","text","formControlName","pnr",1,"form-control"],[1,"col-md-3","form-group"],["type","text","formControlName","cost_price",1,"form-control"],["type","text","formControlName","sale_price",1,"form-control"],["type","text","formControlName","pessengers",1,"form-control"],["type","text","formControlName","customer_name",1,"form-control"],["type","text","formControlName","primary_phone",1,"form-control"],["type","text","formControlName","secondary_phone",1,"form-control"],["type","email","formControlName","customer_email",1,"form-control"],[1,"col-md-2","form-group"],["type","text","formControlName","adult",1,"form-control"],["type","text","formControlName","child",1,"form-control"],["type","text","formControlName","infant",1,"form-control"],["formControlName","comments","rows","1",1,"form-control"],[1,"col-md-12","text-center"],["type","button",1,"btn","btn-danger","mx-1",3,"click"],["aria-hidden","true",1,"fa","fa-times"],["type","button",1,"btn","btn-primary","mx-1",3,"click"],["aria-hidden","true",1,"fa","fa-floppy-o"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-clip-rotate",3,"fullScreen"],[2,"color","white"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275elementStart"](3,"h2",3),l["\u0275\u0275text"](4,"Create Follow Up"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"div",4),l["\u0275\u0275elementStart"](6,"form",5),l["\u0275\u0275elementStart"](7,"div",6),l["\u0275\u0275elementStart"](8,"div",7),l["\u0275\u0275elementStart"](9,"label"),l["\u0275\u0275text"](10,"Flight From:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"input",8),l["\u0275\u0275listener"]("input",function(e){return t.getDepartAirports(e)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"datalist",9),l["\u0275\u0275template"](13,c,2,1,"option",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"div",7),l["\u0275\u0275elementStart"](15,"label"),l["\u0275\u0275text"](16,"Flight To:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"input",11),l["\u0275\u0275listener"]("input",function(e){return t.getFlightToAirports(e)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](18,"datalist",12),l["\u0275\u0275template"](19,f,2,1,"option",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](20,"div",7),l["\u0275\u0275elementStart"](21,"label"),l["\u0275\u0275text"](22,"Departed Date:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](23,"input",13),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](24,"div",7),l["\u0275\u0275elementStart"](25,"label"),l["\u0275\u0275text"](26,"Return Date:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](27,"input",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](28,"div",7),l["\u0275\u0275elementStart"](29,"label"),l["\u0275\u0275text"](30,"Preffered Airline:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](31,"input",15),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](32,"div",7),l["\u0275\u0275elementStart"](33,"label"),l["\u0275\u0275text"](34,"PNR:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](35,"input",16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](36,"div",17),l["\u0275\u0275elementStart"](37,"label"),l["\u0275\u0275text"](38,"Cost Price:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](39,"input",18),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](40,"div",17),l["\u0275\u0275elementStart"](41,"label"),l["\u0275\u0275text"](42,"Sale Price:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](43,"input",19),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](44,"div",7),l["\u0275\u0275elementStart"](45,"label"),l["\u0275\u0275text"](46,"Pessengers:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](47,"input",20),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](48,"div",7),l["\u0275\u0275elementStart"](49,"label"),l["\u0275\u0275text"](50,"Customer Name:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](51,"input",21),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](52,"div",7),l["\u0275\u0275elementStart"](53,"label"),l["\u0275\u0275text"](54,"Primary Phone:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](55,"input",22),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](56,"div",7),l["\u0275\u0275elementStart"](57,"label"),l["\u0275\u0275text"](58,"Secondary Phone:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](59,"input",23),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](60,"div",7),l["\u0275\u0275elementStart"](61,"label"),l["\u0275\u0275text"](62,"Customer Email:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](63,"input",24),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](64,"div",25),l["\u0275\u0275elementStart"](65,"label"),l["\u0275\u0275text"](66,"Adult:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](67,"input",26),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](68,"div",25),l["\u0275\u0275elementStart"](69,"label"),l["\u0275\u0275text"](70," Child:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](71,"input",27),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](72,"div",25),l["\u0275\u0275elementStart"](73,"label"),l["\u0275\u0275text"](74,"Infant:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](75,"input",28),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](76,"div",7),l["\u0275\u0275elementStart"](77,"label"),l["\u0275\u0275text"](78,"Comments:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](79,"textarea",29),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](80,"div",30),l["\u0275\u0275elementStart"](81,"button",31),l["\u0275\u0275listener"]("click",function(){return t.resetForm()}),l["\u0275\u0275text"](82,"Reset "),l["\u0275\u0275element"](83,"i",32),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](84,"button",33),l["\u0275\u0275listener"]("click",function(){return t.saveForm()}),l["\u0275\u0275text"](85,"Save "),l["\u0275\u0275element"](86,"i",34),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](87,"ngx-spinner",35),l["\u0275\u0275elementStart"](88,"p",36),l["\u0275\u0275text"](89," Loading... "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](90,"notifier-container")),2&e&&(l["\u0275\u0275advance"](6),l["\u0275\u0275property"]("formGroup",t.followUpForm),l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("ngForOf",t.flightFrom),l["\u0275\u0275advance"](6),l["\u0275\u0275property"]("ngForOf",t.flightTo),l["\u0275\u0275advance"](68),l["\u0275\u0275property"]("fullScreen",!0))},directives:[a["\u0275NgNoValidate"],a.NgControlStatusGroup,a.FormGroupDirective,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlName,o.sg,i.Ro,s.TK,a.NgSelectOption,a["\u0275NgSelectMultipleOption"]],styles:[".border-15[_ngcontent-%COMP%]{border-radius:15px}.form-control[_ngcontent-%COMP%]{background-color:#fff}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[r.Bz.forChild(u)],r.Bz]}),e})();var v=n(8453),g=n(9282),S=n(4510);const b={position:{horizontal:{position:"right",distance:12},vertical:{position:"bottom",distance:12,gap:10}},theme:"material",behaviour:{autoHide:5e3,onClick:!1,onMouseover:"pauseAutoHide",showDismissButton:!0,stacking:4},animations:{enabled:!0,show:{preset:"slide",speed:300,easing:"ease"},hide:{preset:"fade",speed:300,easing:"ease",offset:50},shift:{speed:300,easing:"ease"},overlap:150}};let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[o.ez,h,i.ef,s.Eb.withConfig(b),m.zk,d.JF,a.ReactiveFormsModule,v.h,a.FormsModule,S.K,g.JX]]}),e})()}}]);