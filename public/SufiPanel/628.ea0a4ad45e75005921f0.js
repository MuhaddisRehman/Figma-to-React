(self.webpackChunksufi_panel=self.webpackChunksufi_panel||[]).push([[628],{628:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BrandsModule:()=>N});var i=n(1116),l=n(4140),r=n(1462),a=n(529),o=n(1153),d=n(7368),s=n(2749),m=n(5703),c=n(8918),u=n(5946),h=n(4510),f=n(8453);const p=["myModalAdd"],g=["myModalView"],b=["myModalHide"],S=["myModalDelete"],y=["TABLE"],v=["logoFile"];function E(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"a",50),d["\u0275\u0275listener"]("click",function(){d["\u0275\u0275restoreView"](e);const t=d["\u0275\u0275nextContext"]().$implicit;return d["\u0275\u0275nextContext"]().openModalHide(t.id)}),d["\u0275\u0275element"](1,"i",51),d["\u0275\u0275elementEnd"]()}}function x(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"a",52),d["\u0275\u0275listener"]("click",function(){d["\u0275\u0275restoreView"](e);const t=d["\u0275\u0275nextContext"]().$implicit;return d["\u0275\u0275nextContext"]().openModalView(t.id)}),d["\u0275\u0275element"](1,"i",53),d["\u0275\u0275elementEnd"]()}}function F(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tr"),d["\u0275\u0275elementStart"](1,"td"),d["\u0275\u0275elementStart"](2,"p",43),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"td"),d["\u0275\u0275elementStart"](5,"p",43),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"td"),d["\u0275\u0275elementStart"](8,"p",43),d["\u0275\u0275text"](9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"td"),d["\u0275\u0275elementStart"](11,"p",43),d["\u0275\u0275text"](12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"td"),d["\u0275\u0275elementStart"](14,"p",43),d["\u0275\u0275element"](15,"img",44),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"td"),d["\u0275\u0275elementStart"](17,"div",45),d["\u0275\u0275template"](18,E,2,0,"a",46),d["\u0275\u0275template"](19,x,2,0,"a",47),d["\u0275\u0275elementStart"](20,"a",48),d["\u0275\u0275listener"]("click",function(){const t=d["\u0275\u0275restoreView"](e).$implicit;return d["\u0275\u0275nextContext"]().openModalDelete(t.id)}),d["\u0275\u0275element"](21,"i",49),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,i=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](n+1),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](e.brand_name),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](e.brand_code),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](e.contact_num),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("src",i.BaseURlFile+e.logo,d["\u0275\u0275sanitizeUrl"]),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngIf","Show"===e.visibility_status),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf","Hide"===e.visibility_status)}}function k(e,t){if(1&e&&d["\u0275\u0275element"](0,"div",54),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("innerHtml",e.msg,d["\u0275\u0275sanitizeHtml"])}}function B(e,t){if(1&e&&d["\u0275\u0275element"](0,"img",44),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("src",e.url,d["\u0275\u0275sanitizeUrl"])}}const w=function(){return{color:"red"}},C=function(){return{color:"black"}},M=function(e,t){return{th:e,td:t}},D=[{path:"",component:(()=>{class e{constructor(e,t,n,i,l){this.spinner=e,this.modalService=t,this.fb=n,this.notifierService=i,this.adminService=l,this.BaseURlFile=a.N.BaseURLFiles,this.imgLogoFile=null,this.imgLogoFileName=null,this.validLogoFile=!1,this.msg="",this.logoFileData=null,this.ExportTOExcel=()=>{const e=o.utils.table_to_sheet(this.TABLE.nativeElement),t=o.utils.book_new();o.utils.book_append_sheet(t,e,"Sheet1"),o.writeFile(t,"BrandDetails.xlsx")},this.selectFile=e=>{if(e.target.files[0]&&0!=e.target.files[0].length){if(null==e.target.files[0].type.match(/image\/*/))return this.url=null,this.msg="Only images are supported",void this.addBrandForm.controls.brand_pic.reset();this.logoFileData=e.target.files[0];var t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=e=>{this.msg="",this.url=t.result}}else this.msg="You must select an image"},this.addBrand=()=>{this.spinner.show();let e={brand_name:this.addBrandForm.controls.brand_name.value,brand_code:this.addBrandForm.controls.brand_code.value,contact_num:this.addBrandForm.controls.brand_contact.value,logo:this.logoFileData};console.log(e);let t=this.getFormData(e);this.adminService.addBrand(t).subscribe(e=>{"True"==e.status&&(this.closeModalAdd(),this.getBrands(),this.url=null,this.logoFileData=null,this.spinner.hide(),this.notifier.notify("success","Successfully Added!"))},e=>{this.spinner.hide(),this.notifier.notify("error",e)})},this.getBrands=()=>{this.spinner.show(),this.adminService.getBrands().subscribe(e=>{"True"==e.status&&(this.brandsData=e.data,this.spinner.hide())},e=>{this.spinner.hide(),this.notifier.notify("error",e)})},this.visiBilityHide=()=>{this.spinner.show(),this.adminService.showVisibility({id:this.hideId,visibility_status:"Hide"}).subscribe(e=>{"True"===e.status&&(this.getBrands(),this.spinner.hide(),this.closeModalHide(),this.notifier.notify("success","Successfully Changed Visibility Status!"))},e=>{this.spinner.hide(),this.notifier.notify("error",e)})},this.visiBilityShow=()=>{this.spinner.show(),this.adminService.showVisibility({id:this.showId,visibility_status:"Show"}).subscribe(e=>{"True"===e.status&&(this.getBrands(),this.spinner.hide(),this.closeModalView(),this.notifier.notify("success","Successfully Changed Visibility Status!"))},e=>{this.spinner.hide(),this.notifier.notify("error",e)})},this.deleteBrand=()=>{this.spinner.show(),this.adminService.deleteBrand({id:this.deleteId}).subscribe(e=>{"True"===e.status&&(this.getBrands(),this.spinner.hide(),this.closeModalDelete(),this.notifier.notify("success","Successfully Deleted!"))},e=>{this.spinner.hide(),this.notifier.notify("error",e)})},this.addImgPicker=e=>{let t=!1;this.imgLogoFile=e.target.files[0],this.imgLogoFileName=e.target.files[0].name;let n=["image/jpg","image/png","image/jpeg","image/bmp","image/gif"];for(let i=0;i<=4;i++)if(n[i]==e.target.files[0].type){if(this.imgLogoFile=e.target.files[0],e.target.files[0].size/1e3/1e3>5)return this.imgLogoFileName=null,this.validLogoFile=!1,this.imgLogoFile=null,void(this.imgLogoFileName="File must be less than 5 MB");this.imgLogoFileName=null,t=!0,this.validLogoFile=!0,this.imgLogoFileName=e.target.files[0].name}else 0==t&&(this.imgLogoFileName=null,this.validLogoFile=!1,this.imgLogoFile=null,this.imgLogoFileName="Please Enter valid File Type")},this.resetBrandForm=()=>{this.addBrandForm.reset(),this.notifier.notify("error","Form Reset Done!"),this.url=null,this.logoFileData=null},this.getFormData=e=>{const t=new FormData;return Object.keys(e).forEach(n=>t.append(n,e[n])),t},this.openModalView=e=>{this.showId=e,this.modalRefView=this.modalService.open(this.myModalView,{size:"sm",modalClass:"mymodal",hideCloseButton:!1,centered:!1,backdrop:!0,animation:!0,keyboard:!1,closeOnOutsideClick:!1,backdropClass:"modal-backdrop"})},this.closeModalView=()=>{this.modalService.close(this.modalRefView)},this.openModalHide=e=>{this.hideId=e,this.modalRefHide=this.modalService.open(this.myModalHide,{size:"sm",modalClass:"mymodal",hideCloseButton:!1,centered:!1,backdrop:!0,animation:!0,keyboard:!1,closeOnOutsideClick:!1,backdropClass:"modal-backdrop"})},this.closeModalHide=()=>{this.modalService.close(this.modalRefHide)},this.openModalDelete=e=>{this.deleteId=e,this.modalRefDelete=this.modalService.open(this.myModalDelete,{size:"sm",modalClass:"mymodal",hideCloseButton:!1,centered:!1,backdrop:!0,animation:!0,keyboard:!1,closeOnOutsideClick:!1,backdropClass:"modal-backdrop"})},this.closeModalDelete=()=>{this.modalService.close(this.modalRefDelete)},this.openModalAdd=()=>{this.modalRefAdd=this.modalService.open(this.myModalAdd,{size:"lg",modalClass:"mymodal",hideCloseButton:!1,centered:!1,backdrop:!0,animation:!0,keyboard:!1,closeOnOutsideClick:!1,backdropClass:"modal-backdrop"})},this.closeModalAdd=()=>{this.modalService.close(this.modalRefAdd),this.addBrandForm.reset(),this.url=null,this.logoFileData=null},this.notifier=i}ngOnInit(){this.getBrands(),this.addBrandForm=this.fb.group({brand_name:["",r.Validators.required],brand_code:["",r.Validators.required],brand_contact:["",r.Validators.required],brand_pic:["",r.Validators.required]})}get f(){return this.addBrandForm.controls}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](s.t2),d["\u0275\u0275directiveInject"](m.gk),d["\u0275\u0275directiveInject"](r.FormBuilder),d["\u0275\u0275directiveInject"](c.lG),d["\u0275\u0275directiveInject"](u.l))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-brands"]],viewQuery:function(e,t){if(1&e&&(d["\u0275\u0275viewQuery"](p,5),d["\u0275\u0275viewQuery"](g,5),d["\u0275\u0275viewQuery"](b,5),d["\u0275\u0275viewQuery"](S,5),d["\u0275\u0275viewQuery"](y,5),d["\u0275\u0275viewQuery"](v,5)),2&e){let e;d["\u0275\u0275queryRefresh"](e=d["\u0275\u0275loadQuery"]())&&(t.myModalAdd=e.first),d["\u0275\u0275queryRefresh"](e=d["\u0275\u0275loadQuery"]())&&(t.myModalView=e.first),d["\u0275\u0275queryRefresh"](e=d["\u0275\u0275loadQuery"]())&&(t.myModalHide=e.first),d["\u0275\u0275queryRefresh"](e=d["\u0275\u0275loadQuery"]())&&(t.myModalDelete=e.first),d["\u0275\u0275queryRefresh"](e=d["\u0275\u0275loadQuery"]())&&(t.TABLE=e.first),d["\u0275\u0275queryRefresh"](e=d["\u0275\u0275loadQuery"]())&&(t.logoFile=e.first)}},decls:123,vars:16,consts:[[1,"iq-card","iq-card-block","iq-card-stretch","iq-card-height"],[1,"iq-card-header","d-flex","justify-content-between"],[1,"iq-header-title"],[1,"card-title"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-plus"],[1,"d-flex","align-items-center","justify-content-between","pl-2","mt-3","pr-3"],[1,"d-flex","justify-content-between"],["type","button",1,"btn","btn-outline-success","mx-1",3,"click"],[1,"fa","fa-file"],["type","button","printTitle","Brands Detail | Sufi Travel & Tours","printSectionId","print-section","ngxPrint","",1,"btn","btn-outline-danger","mx-1",3,"printStyle","useExistingCss"],[1,"fa","fa-print"],[1,"form-group","mb-0","position-relative"],["type","text","placeholder","Search","name","search",1,"form-control",3,"ngModel","ngModelChange"],["id","print-section",1,"iq-card-body"],["TABLE","","table",""],[1,"table-responsive"],[1,"table","table-hover","text-center","mb-0","mt-2"],[1,"bg-primary"],["scope","col"],[4,"ngFor","ngForOf"],["myModalAdd",""],[3,"formGroup"],[1,"row"],[1,"col-md-6","form-group"],["type","text","formControlName","brand_name",1,"form-control"],["type","text","formControlName","brand_code",1,"form-control"],["type","email","formControlName","brand_contact",1,"form-control"],["for","logoImg"],["style","color: red;",3,"innerHtml",4,"ngIf"],["style","height: 50px;",3,"src",4,"ngIf"],["type","file","formControlName","brand_pic",3,"change"],["type","btn",1,"btn","btn-primary","mx-1",3,"click"],["aria-hidden","true",1,"fa","fa-check"],["type","reset",1,"btn","btn-dark","mx-1",3,"click"],["aria-hidden","true",1,"fa","fa-times"],["type","btn",1,"btn","btn-danger","mx-1",3,"click"],["aria-hidden","true",1,"fa","fa-ban"],["myModalView",""],["myModalHide",""],["myModalDelete",""],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-clip-rotate",3,"fullScreen"],[2,"color","white"],[1,"mb-0"],[2,"height","50px",3,"src"],[1,"d-flex","align-items-center","justify-content-center"],["class","avatar-35 rounded-circle text-center ml-1 iq-bg-primary font-size-16",3,"click",4,"ngIf"],["class","avatar-35 rounded-circle text-center ml-1 iq-bg-success font-size-16",3,"click",4,"ngIf"],[1,"avatar-35","rounded-circle","text-center","ml-1","iq-bg-danger","font-size-16",3,"click"],["aria-hidden","true",1,"fa","fa-trash-o","font-size-14"],[1,"avatar-35","rounded-circle","text-center","ml-1","iq-bg-primary","font-size-16",3,"click"],["aria-hidden","true",1,"fa","fa-eye-slash","font-size-14"],[1,"avatar-35","rounded-circle","text-center","ml-1","iq-bg-success","font-size-16",3,"click"],["aria-hidden","true",1,"fa","fa-eye","font-size-14"],[2,"color","red",3,"innerHtml"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"div",2),d["\u0275\u0275elementStart"](3,"h2",3),d["\u0275\u0275text"](4,"Brands"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"div"),d["\u0275\u0275elementStart"](6,"button",4),d["\u0275\u0275listener"]("click",function(){return t.openModalAdd()}),d["\u0275\u0275element"](7,"i",5),d["\u0275\u0275text"](8," Add New Brand "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"div",6),d["\u0275\u0275elementStart"](10,"div",7),d["\u0275\u0275elementStart"](11,"button",8),d["\u0275\u0275listener"]("click",function(){return t.ExportTOExcel()}),d["\u0275\u0275element"](12,"i",9),d["\u0275\u0275text"](13," Excel"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"button",10),d["\u0275\u0275element"](15,"i",11),d["\u0275\u0275text"](16," Print"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"div",7),d["\u0275\u0275elementStart"](18,"div",12),d["\u0275\u0275elementStart"](19,"input",13),d["\u0275\u0275listener"]("ngModelChange",function(e){return t.searchTerm=e}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"div",14,15),d["\u0275\u0275elementStart"](23,"div",16),d["\u0275\u0275elementStart"](24,"table",17),d["\u0275\u0275elementStart"](25,"thead",18),d["\u0275\u0275elementStart"](26,"tr"),d["\u0275\u0275elementStart"](27,"th",19),d["\u0275\u0275text"](28,"Sr#"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](29,"th",19),d["\u0275\u0275text"](30,"Brand Name"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](31,"th",19),d["\u0275\u0275text"](32,"Brand Code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](33,"th",19),d["\u0275\u0275text"](34,"Contact #"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](35,"th",19),d["\u0275\u0275text"](36,"Logo"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](37,"th",19),d["\u0275\u0275text"](38,"Actions"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](39,"tbody"),d["\u0275\u0275template"](40,F,22,7,"tr",20),d["\u0275\u0275pipe"](41,"filter"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](42,"modal",null,21),d["\u0275\u0275elementStart"](44,"modal-header"),d["\u0275\u0275elementStart"](45,"h4"),d["\u0275\u0275text"](46,"Add New Brand"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](47,"modal-content"),d["\u0275\u0275elementStart"](48,"form",22),d["\u0275\u0275elementStart"](49,"div",23),d["\u0275\u0275elementStart"](50,"div",24),d["\u0275\u0275elementStart"](51,"label"),d["\u0275\u0275text"](52,"Brand Name"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](53,"input",25),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](54,"div",24),d["\u0275\u0275elementStart"](55,"label"),d["\u0275\u0275text"](56,"Brand Code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](57,"input",26),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](58,"div",24),d["\u0275\u0275elementStart"](59,"label"),d["\u0275\u0275text"](60,"Brand Contact #"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](61,"input",27),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](62,"div",24),d["\u0275\u0275elementStart"](63,"label",28),d["\u0275\u0275text"](64,"Brand Logo"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](65,k,1,1,"div",29),d["\u0275\u0275elementStart"](66,"div"),d["\u0275\u0275template"](67,B,1,1,"img",30),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](68,"p"),d["\u0275\u0275elementStart"](69,"input",31),d["\u0275\u0275listener"]("change",function(e){return t.selectFile(e)}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](70,"modal-footer"),d["\u0275\u0275elementStart"](71,"button",32),d["\u0275\u0275listener"]("click",function(){return t.addBrand()}),d["\u0275\u0275text"](72,"Save "),d["\u0275\u0275element"](73,"i",33),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](74,"button",34),d["\u0275\u0275listener"]("click",function(){return t.resetBrandForm()}),d["\u0275\u0275text"](75,"Reset "),d["\u0275\u0275element"](76,"i",35),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](77,"button",36),d["\u0275\u0275listener"]("click",function(){return t.closeModalAdd()}),d["\u0275\u0275text"](78,"Close "),d["\u0275\u0275element"](79,"i",37),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](80,"modal",null,38),d["\u0275\u0275elementStart"](82,"modal-header"),d["\u0275\u0275elementStart"](83,"h4"),d["\u0275\u0275text"](84,"Show Brand"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](85,"modal-content"),d["\u0275\u0275elementStart"](86,"modal-footer"),d["\u0275\u0275elementStart"](87,"button",32),d["\u0275\u0275listener"]("click",function(){return t.visiBilityShow()}),d["\u0275\u0275text"](88,"Show "),d["\u0275\u0275element"](89,"i",33),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](90,"button",36),d["\u0275\u0275listener"]("click",function(){return t.closeModalView()}),d["\u0275\u0275text"](91,"Close "),d["\u0275\u0275element"](92,"i",37),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](93,"modal",null,39),d["\u0275\u0275elementStart"](95,"modal-header"),d["\u0275\u0275elementStart"](96,"h4"),d["\u0275\u0275text"](97,"Hide Brand"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](98,"modal-content"),d["\u0275\u0275elementStart"](99,"modal-footer"),d["\u0275\u0275elementStart"](100,"button",32),d["\u0275\u0275listener"]("click",function(){return t.visiBilityHide()}),d["\u0275\u0275text"](101,"Hide "),d["\u0275\u0275element"](102,"i",33),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](103,"button",36),d["\u0275\u0275listener"]("click",function(){return t.closeModalHide()}),d["\u0275\u0275text"](104,"Close "),d["\u0275\u0275element"](105,"i",37),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](106,"modal",null,40),d["\u0275\u0275elementStart"](108,"modal-header"),d["\u0275\u0275elementStart"](109,"h4"),d["\u0275\u0275text"](110,"Delete Brand"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](111,"modal-content"),d["\u0275\u0275elementStart"](112,"modal-footer"),d["\u0275\u0275elementStart"](113,"button",32),d["\u0275\u0275listener"]("click",function(){return t.deleteBrand()}),d["\u0275\u0275text"](114,"Delete "),d["\u0275\u0275element"](115,"i",33),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](116,"button",36),d["\u0275\u0275listener"]("click",function(){return t.closeModalDelete()}),d["\u0275\u0275text"](117,"Close "),d["\u0275\u0275element"](118,"i",37),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](119,"ngx-spinner",41),d["\u0275\u0275elementStart"](120,"p",42),d["\u0275\u0275text"](121," Loading... "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](122,"notifier-container")),2&e&&(d["\u0275\u0275advance"](14),d["\u0275\u0275property"]("printStyle",d["\u0275\u0275pureFunction2"](13,M,d["\u0275\u0275pureFunction0"](11,w),d["\u0275\u0275pureFunction0"](12,C)))("useExistingCss",!0),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngModel",t.searchTerm),d["\u0275\u0275advance"](21),d["\u0275\u0275property"]("ngForOf",d["\u0275\u0275pipeBind2"](41,8,t.brandsData,t.searchTerm)),d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("formGroup",t.addBrandForm),d["\u0275\u0275advance"](17),d["\u0275\u0275property"]("ngIf",t.msg),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",t.url),d["\u0275\u0275advance"](52),d["\u0275\u0275property"]("fullScreen",!0))},directives:[h.I,r.DefaultValueAccessor,r.NgControlStatus,r.NgModel,i.sg,m.zS,m.Rb,m.Ef,r["\u0275NgNoValidate"],r.NgControlStatusGroup,r.FormGroupDirective,r.FormControlName,i.O5,m.YI,s.Ro,c.TK],pipes:[f.Z],styles:["h4[_ngcontent-%COMP%]{color:var(--iq-light)}"]}),e})()}];let I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[l.Bz.forChild(D)],l.Bz]}),e})();var _=n(2693),V=n(9282);const L={position:{horizontal:{position:"right",distance:12},vertical:{position:"bottom",distance:12,gap:10}},theme:"material",behaviour:{autoHide:5e3,onClick:!1,onMouseover:"pauseAutoHide",showDismissButton:!0,stacking:4},animations:{enabled:!0,show:{preset:"slide",speed:300,easing:"ease"},hide:{preset:"fade",speed:300,easing:"ease",offset:50},shift:{speed:300,easing:"ease"},overlap:150}};let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[i.ez,I,s.ef,c.Eb.withConfig(L),m.zk,_.JF,r.ReactiveFormsModule,f.h,r.FormsModule,h.K,V.JX]]}),e})()}}]);