﻿/* http://j2s.sf.net/ */


if(window["Clazz"]==null){




Class=Clazz=function(){
};

NullObject=function(){
};

JavaObject=Object;


Clazz.supportsNativeObject=window["j2s.object.native"];

if(Clazz.supportsNativeObject){
JavaObject=function(){};
}

JavaObject.prototype.equals=function(obj){
return this==obj;
};

JavaObject.prototype.hashCode=function(){
try{
return this.toString().hashCode();
}catch(e){
var str=":";
for(var s in this){
str+=s+":"
}
return str.hashCode();
}
};

JavaObject.prototype.getClass=function(){
return Clazz.getClass(this);
};

JavaObject.prototype.clone=function(){
var o=new this.constructor();
for(var i in this){
o[i]=this[i];
}
return o;
};


JavaObject.prototype.finalize=function(){};
JavaObject.prototype.notify=function(){};
JavaObject.prototype.notifyAll=function(){};
JavaObject.prototype.wait=function(){};

JavaObject.prototype.to$tring=Object.prototype.toString;
JavaObject.prototype.toString=function(){
if(this.__CLASS_NAME__!=null){
return"["+this.__CLASS_NAME__+" object]";
}else{
return this.to$tring();
}
};

if(Clazz.supportsNativeObject){

Clazz.extendedObjectMethods=[
"equals","hashCode","getClass","clone","finalize","notify","notifyAll","wait","to$tring","toString"
];

for(var i=0;i<Clazz.extendedObjectMethods.length;i++){
var p=Clazz.extendedObjectMethods[i];
Array.prototype[p]=JavaObject.prototype[p];
}
JavaObject.__CLASS_NAME__="Object";
JavaObject["getClass"]=function(){return JavaObject;};
}


InternalFunction=Object;



Clazz.getClassName=function(Hz){
if(Hz==null){

return"NullObject";
}
if(typeof Hz=="function"){
var clazz=Hz;
if(clazz.__CLASS_NAME__!=null){
if(arguments[1]!=true){
return"Class";
}

return clazz.__CLASS_NAME__;
}

var Sc=clazz.toString();
var idx0=Sc.indexOf("function");
if(idx0==-1){


if(Sc.charAt(0)=='['){
var Nc=Sc.substring(1,Sc.length-1);
if(Nc.indexOf("object ")!=-1){
return Nc.substring(7);
}
return Nc;
}else{
return Sc.replace(/[^a-zA-Z0-9]/g,'');
}
}
var idx1=idx0+8;
var idx2=Sc.indexOf("(",idx1);
if(idx2==-1){
return"Object";
}
var Nc=Sc.substring(idx1,idx2)
.replace(/^\s+/,"").replace(/\s+$/,"");
if(Nc=="anonymous"){
return"Function";
}else{
return Nc;
}
}else{
var obj=Hz;
if(obj instanceof Clazz.CastedNull){
return obj.Nc;
}else{
var oT=typeof obj;
if(oT=="string"){

return"String";
}else if(oT=="object"){
if(obj.__CLASS_NAME__!=null){

return obj.__CLASS_NAME__;
}else if(obj.constructor==null){
return"Object";
}else{
if(obj.constructor.__CLASS_NAME__==null){
if(obj instanceof Number){
return"Number";
}else if(obj instanceof Boolean){
return"Boolean";
}else if(obj instanceof Array){
return"Array";
}
}
return Clazz.getClassName(obj.constructor,true);
}
}else if(oT=="number"){
return"Number";
}else if(oT=="boolean"){
return"Boolean";
}
return Clazz.getClassName(obj.constructor,true);
}
}
};


Clazz.getClass=function(Hz){
if(Hz==null){

return JavaObject;
}
if(typeof Hz=="function"){
return Hz;
}else{
var Nc=null;
var obj=Hz;
if(obj instanceof Clazz.CastedNull){
Nc=obj.Nc;
}else{
var oT=typeof obj;
if(oT=="string"){
return String;
}else if(typeof obj=="object"){

if(obj.__CLASS_NAME__!=null){
Nc=obj.__CLASS_NAME__;
}else if(obj.constructor==null){
return JavaObject;
}else{
return obj.constructor;
}
}
}
if(Nc!=null){



return Clazz.evalType(Nc,true);
}else{
return obj.constructor;
}
}
};




Clazz.eP=function(Th,Sh){
for(var o in Sh){
if(o!="b$"&&o!="prototype"&&o!="superClazz"
&&o!="__CLASS_NAME__"&&o!="implementz"
&&!Clazz.cIF(Sh,o)){
Th[o]=Sh[o];
}
}
};



Clazz.cIF=function(Sh,Nf){
for(var k=0;k<Clazz.iFN.length;k++){
if(Nf==Clazz.iFN[k]&&
Clazz.innerFunctions[Nf]===Sh[Nf]){
return true;
}
}
return false;
};




Clazz.ip=function(Th,Sh){
for(var o in Sh){
if(o!="b$"&&o!="prototype"&&o!="superClazz"
&&o!="__CLASS_NAME__"&&o!="implementz"){
if(typeof Sh[o]=="function"){

if(Clazz.cIF(Sh,o)){
continue;
}
}
Th[o]=Sh[o];
Th.prototype[o]=Sh[o];
}
}


};


Clazz.aIC=function(){
};
Clazz.inheritArgs=new Clazz.aIC();




Clazz.xic=function(Tz,clazzSuper,oSp){

Clazz.eP(Tz,clazzSuper);
if(Clazz.isClassUnloaded(Tz)){

}else if(oSp!=null){





Tz.prototype=oSp;
}else if(clazzSuper!==Number){
Tz.prototype=new clazzSuper(Clazz.inheritArgs);
}else{
Tz.prototype=new Number();
}
Tz.superClazz=clazzSuper;


Tz.prototype.__CLASS_NAME__=Tz.__CLASS_NAME__;
};



Clazz.implementOf=function(Tz,interfacez){
if(arguments.length>=2){
if(Tz.implementz==null){
Tz.implementz=new Array();
}
var impls=Tz.implementz;
if(arguments.length==2){
if(typeof interfacez=="function"){
impls[impls.length]=interfacez;
Clazz.ip(Tz,interfacez);
}else if(interfacez instanceof Array){
for(var i=0;i<interfacez.length;i++){
impls[impls.length]=interfacez[i];
Clazz.ip(Tz,interfacez[i]);
}
}
}else{
for(var i=1;i<arguments.length;i++){
impls[impls.length]=arguments[i];
Clazz.ip(Tz,arguments[i]);
}
}
}
};



Clazz.extendInterface=Clazz.implementOf;



Clazz.eOE=function(Tz,anc){
if(Tz===anc){
return 0;
}
if(Tz.implementz!=null){
var impls=Tz.implementz;
for(var i=0;i<impls.length;i++){
var level=Clazz.eOE(impls[i],anc);
if(level>=0){
return level+1;
}
}
}
return-1;
};



Clazz.gIL=function(tg,bs){
if(tg===bs){
return 0;
}
var isTgtStr=(typeof tg=="string");
var isBaseStr=(typeof bs=="string");
if((isTgtStr&&("void"==tg||"unknown"==tg))
||(isBaseStr&&("void"==bs
||"unknown"==bs))){
return-1;
}

if((isTgtStr&&"NullObject"==tg)
||NullObject===tg){
if(bs!==Number&&bs!==Boolean
&&bs!==NullObject){
return 0;
}
}
if(isTgtStr){
tg=Clazz.evalType(tg);
}
if(isBaseStr){
bs=Clazz.evalType(bs);
}
if(bs==null||tg==null){
return-1;
}
var level=0;
var zzalc=tg;
while(zzalc!==bs&&level<10){

if(zzalc.implementz!=null){
var impls=zzalc.implementz;
for(var i=0;i<impls.length;i++){
var implsLevel=Clazz.eOE(impls[i],
bs);
if(implsLevel>=0){
return level+implsLevel+1;
}
}
}

zzalc=zzalc.superClazz;
if(zzalc==null){
if(bs===Object||bs===JavaObject){

return level+1.5;
}else{
return-1;
}
}
level++;
}
return level;
};



Clazz.instanceOf=function(obj,clazz){
if(obj==null){
return clazz==undefined;
}
if(clazz==null){
return false;
}
if(obj instanceof clazz){
return true;
}else{

var Nc=Clazz.getClassName(obj);
return Clazz.gIL(Nc,clazz)>=0;
}
};



Clazz.superCall=function(To,Tz,Nf,funParams){
var fx=null;
var i=-1;
var Fc=To[Nf];
if(Fc!=null){
if(Fc.claxxOwner!=null){

if(Fc.claxxOwner!==Tz){

fx=Fc;
}
}else if(Fc.stacks==null&&!(Fc.lastClaxxRef!=null
&&Fc.lastClaxxRef.prototype[Nf]!=null
&&Fc.lastClaxxRef.prototype[Nf].stacks!=null)){
fx=Fc;
}else{
var stacks=Fc.stacks;
if(stacks==null){
stacks=Fc.lastClaxxRef.prototype[Nf].stacks;
}
var length=stacks.length;
for(i=length-1;i>=0;i--){


if(Tz===stacks[i]){
if(i>0){
i--;
fx=stacks[i].prototype[Nf];
}else{

fx=stacks[0].prototype[Nf]["\\unknown"];
}
break;
}else if(Clazz.gIL(Tz,
stacks[i])>0){
fx=stacks[i].prototype[Nf];
break;
}
}
}
}
if(fx!=null){

if(i==0&&Nf=="construct"){
var ss=Fc.stacks;
if(ss!=null&&ss[0].superClazz==null
&&ss[0].con$truct!=null){
ss[0].con$truct.apply(To,[]);
}
}

if(Clazz.tracingCalling){
var caller=arguments.callee.caller;
if(caller===Clazz.superConstructor){
caller=caller.arguments.callee.caller;
}
Clazz.pu$hCalling(new Clazz.callingStack(caller,Tz));
var ret=fx.apply(To,(funParams==null)?[]:funParams);
Clazz.p0pCalling();
return ret;
}

return fx.apply(To,(funParams==null)?[]:funParams);
}else if(Nf=="construct"){



return;
}
throw new Clazz.MethodNotFoundException(To,Tz,Nf,
Clazz.getParamsType(funParams).typeString);
};



Clazz.superConstructor=function(To,Tz,funParams){
Clazz.superCall(To,Tz,"construct",funParams);

if(Tz.con$truct!=null){
Tz.con$truct.apply(To,[]);
}
};



Clazz.CastedNull=function(asClazz){
if(asClazz!=null){
if(asClazz instanceof String){
this.Nc=asClazz;
}else if(asClazz instanceof Function){
this.Nc=Clazz.getClassName(asClazz,true);
}else{
this.Nc=""+asClazz;
}
}else{
this.Nc="Object";
}
this.toString=function(){
return null;
};
this.valueOf=function(){
return null;
};
};



Clazz.castNullAs=function(asClazz){
return new Clazz.CastedNull(asClazz);
};



Clazz.MethodException=function(){

};

Clazz.MethodNotFoundException=function(){
this.toString=function(){
return"MethodNotFoundException";
};
};



Clazz.getParamsType=function(funParams){
var params=new Array();
params.hasCastedNull=false;
if(funParams!=null){
for(var i=0;i<funParams.length;i++){
params[i]=Clazz.getClassName(funParams[i]);
if(funParams[i]instanceof Clazz.CastedNull){
params.hasCastedNull=true;
}
}
}
if(params.length==0){
params[0]="void";
}
params.typeString="\\"+params.join('\\');

return params;
};



Clazz.saem=function(To,claxxRef,fxName,funParams){
var params=Clazz.getParamsType(funParams);
var fx=To[fxName];

if(fx.lastParams==params.typeString&&fx.lastClaxxRef===claxxRef){
var methodParams=null;
if(params.hasCastedNull){
methodParams=new Array();
for(var k=0;k<funParams.length;k++){
if(funParams[k]instanceof Clazz.CastedNull){

methodParams[k]=null;
}else{
methodParams[k]=funParams[k];
}
}
}else{
methodParams=funParams;
}
if(fx.lastMethod!=null){
return fx.lastMethod.apply(To,methodParams);
}else{
return;
}
}
fx.lastParams=params.typeString;
fx.lastClaxxRef=claxxRef;

var stacks=fx.stacks;
if(stacks==null){
stacks=claxxRef.prototype[fxName].stacks;
}
var length=stacks.length;

var began=false;
for(var i=length-1;i>-1;i--){


if(began||stacks[i]===claxxRef){

var Fc=stacks[i].prototype[fxName];

var ret=Clazz.tsae(To,Fc,params,
funParams,fx);
if(!(ret instanceof Clazz.MethodException)){
return ret;
}

began=true;
}
}
if("construct"==fxName){

return;
}

throw new Clazz.MethodNotFoundException(To,claxxRef,
fxName,params.typeString);
};



Clazz.ie$plit="\\2".split(/\\/).length==1;


Clazz.tracingCalling=false;




Clazz.tsae=function(To,Fc,params,funParams,fx){
var methods=new Array();

var generic=true;
for(var fn in Fc){

if(fn.charCodeAt(0)==92){
var ps=(Clazz.ie$plit?fn:fn.substring(1)).split(/\\/);
if(ps.length==params.length){
methods[methods.length]=ps;
}
generic=false;
continue;
}


if(generic&&fn=="funParams"&&Fc.funParams!=null){

fn=Fc.funParams;
var ps=(Clazz.ie$plit?fn:fn.substring(1)).split(/\\/);
if(ps.length==params.length){
methods[0]=ps;
}
break;
}
}
if(methods.length==0){

return new Clazz.MethodException();
}



var method=Clazz.sM(methods,params);
if(method!=null){
var f=null;
if(generic){

f=Fc;
}else{
f=Fc["\\"+method];
}

var methodParams=null;
if(params.hasCastedNull){
methodParams=new Array();
for(var k=0;k<funParams.length;k++){
if(funParams[k]instanceof Clazz.CastedNull){

methodParams[k]=null;
}else{
methodParams[k]=funParams[k];
}
}
}else{
methodParams=funParams;
}

if(Clazz.tracingCalling){
var caller=arguments.callee.caller;
caller=caller.arguments.callee.caller;
caller=caller.arguments.callee.caller;
var xpushed=f.exName=="construct"
&&Clazz.gIL(f.exClazz,Throwable)>=0
&&!Clazz.initializingException;
if(xpushed){
Clazz.initializingException=true;

var xcaller=caller.arguments.callee.caller
.arguments.callee.caller;
var fun=xcaller.arguments.callee;
var owner=fun.claxxReference;
if(owner==null){
owner=fun.exClazz;
}
if(owner==null){
owner=fun.claxxOwner;
}

Clazz.pu$hCalling(new Clazz.callingStack(xcaller,owner));
}

var noInnerWrapper=caller!==Clazz.instantialize
&&caller!==Clazz.superCall;
if(noInnerWrapper){
var fun=caller.arguments.callee;
var owner=fun.claxxReference;
if(owner==null){
owner=fun.exClazz;
}
if(owner==null){
owner=fun.claxxOwner;
}
Clazz.pu$hCalling(new Clazz.callingStack(caller,owner));
}
fx.lastMethod=f;
var ret=f.apply(To,methodParams);
if(noInnerWrapper){
Clazz.p0pCalling();
}
if(xpushed){
Clazz.p0pCalling();
}
return ret;
}

fx.lastMethod=f;
return f.apply(To,methodParams);

}

return new Clazz.MethodException();
};


Clazz.initializingException=false;





Clazz.sM=function(rO,pts){




var rT=new Array();
for(var i=0;i<rO.length;i++){

var fL=new Array();
var isFitted=true;
for(var j=0;j<rO[i].length;j++){
fL[j]=Clazz.gIL(pts[j],
rO[i][j]);
if(fL[j]<0){
isFitted=false;
break;
}
}
if(isFitted){
fL[pts.length]=i;
rT[rT.length]=fL;
}
}
if(rT.length==0){
return null;
}


var rtT=rT;
var min=rtT[0];
for(var i=1;i<rtT.length;i++){

var vl=true;
for(var j=0;j<pts.length;j++){
if(min[j]<rtT[i][j]){
vl=false;;
break;
}
}
if(vl){
min=rtT[i];
}
}
var index=min[pts.length];

return rO[index].join('\\');
};




Clazz.gDM=function(claxxRef,Nf){

var delegating=function(){
var r=arguments;
return SAEM(this,r.callee.claxxReference,r.callee.methodName,r);
};
delegating.methodName=Nf;
delegating.claxxReference=claxxRef;
return delegating;
};

SAEM=Clazz.saem;


Clazz.expExpandParameters=function($0,$1){
if($1=='N'){
return"Number";
}else if($1=='B'){
return"Boolean"
}else if($1=='S'){
return"String";
}else if($1=='O'){
return"Object";
}else if($1=='A'){
return"Array"
}
return"Unknown";
};



Clazz.formatParameters=function(funParams){
if(funParams==null||funParams.length==0){
return"\\void";
}else{

var s=funParams;
s=s.replace(/~([NABSO])/g,Clazz.expExpandParameters);
return s.replace(/\s+/g,"").replace(/^|,/g,"\\")
.replace(/\$/g,"org.eclipse.s");
}
};



Clazz.overrideMethod=function(Tz,Nf,Bf,funParams){
if(Clazz.assureInnerClass)Clazz.assureInnerClass(Tz,Bf);
Bf.exName=Nf;
var fpName=Clazz.formatParameters(funParams);

Bf.funParams=fpName;
Bf.claxxOwner=Tz;
Tz.prototype[Nf]=Bf;
return Bf;
};



Clazz.defineMethod=function(Tz,Nf,Bf,funParams){
if(Clazz.assureInnerClass)Clazz.assureInnerClass(Tz,Bf);
Bf.exName=Nf;
var fpName=Clazz.formatParameters(funParams);

var f$=Tz.prototype[Nf];
if(f$==null||(f$.claxxOwner===Tz
&&f$.funParams==fpName)){

Bf.funParams=fpName;
Bf.claxxOwner=Tz;
Tz.prototype[Nf]=Bf;
Bf.exClazz=Tz;
return Bf;
}
var oldFun=null;
var oldStacks=new Array();

if(f$.stacks==null){

oldFun=f$;
if(f$.claxxOwner!=null){
oldStacks[0]=oldFun.claxxOwner;
}
}else{
oldStacks=f$.stacks;
}














if(f$.stacks==null
||f$.claxxReference!==Tz){

f$=Tz.prototype[Nf]=Clazz
.gDM(Tz,Nf);

var arr=new Array();
for(var i=0;i<oldStacks.length;i++){
arr[i]=oldStacks[i];
}
f$.stacks=arr;
}
var ss=f$.stacks;

if(ss.length==0){
ss[ss.length]=Tz;
}else{
var existed=false;
for(var i=ss.length-1;i>=0;i--){
if(ss[i]===Tz){
existed=true;
break;
}
}
if(!existed){
ss[ss.length]=Tz;
}
}

if(oldFun!=null){
if(oldFun.claxxOwner===Tz){
f$[oldFun.funParams]=oldFun;
oldFun.claxxOwner=null;

oldFun.funParams=null;
}else if(oldFun.claxxOwner==null){

f$["\\unknown"]=oldFun;
}
}
Bf.exClazz=Tz;
f$[fpName]=Bf;
return f$;
};



Clazz.makeConstructor=function(Tz,Bf,funParams){
var Nf="construct";
Clazz.defineMethod(Tz,Nf,Bf,funParams);
if(Tz.con$truct!=null){
Tz.con$truct.index=Tz.con$truct.stacks.length;
}

};



Clazz.allPackage=new Object();



Clazz.allClasses=new Object();

Clazz.lastPackageName=null;
Clazz.lastPackage=null;


Clazz.unloadedClasses=new Array();


Clazz.isClassUnloaded=function(clzz){
var thisClassName=Clazz.getClassName(clzz,true);
return Clazz.unloadedClasses[thisClassName]!=null;
};


Clazz.declarePackage=function(pkgName){
if(Clazz.lastPackageName==pkgName){
return Clazz.lastPackage;
}
if(pkgName!=null&&pkgName.length!=0){
var pkgFrags=pkgName.split(/\./);
var pkg=Clazz.allPackage;
for(var i=0;i<pkgFrags.length;i++){
if(pkg[pkgFrags[i]]==null){
pkg[pkgFrags[i]]={
__PKG_NAME__:((pkg.__PKG_NAME__!=null)?
pkg.__PKG_NAME__+"."+pkgFrags[i]:pkgFrags[i])
};

if(i==0){

window[pkgFrags[i]]=pkg[pkgFrags[i]];
}
}
pkg=pkg[pkgFrags[i]]
}
Clazz.lastPackageName=pkgName;
Clazz.lastPackage=pkg;
return pkg;
}
};



Clazz.evalType=function(typeStr,isQualified){

var idx=typeStr.lastIndexOf(".");
if(idx!=-1){
var pkgName=typeStr.substring(0,idx);
var pkg=Clazz.declarePackage(pkgName);
var Nc=typeStr.substring(idx+1);
return pkg[Nc];


}else if(isQualified){
return window[typeStr];
}else if(typeStr=="number"){
return Number;
}else if(typeStr=="object"){
return JavaObject;
}else if(typeStr=="string"){
return String;
}else if(typeStr=="boolean"){
return Boolean;
}else if(typeStr=="function"){
return Function;
}else if(typeStr=="void"||typeStr=="undefined"
||typeStr=="unknown"){
return typeStr;
}else if(typeStr=="NullObject"){
return NullObject;
}else{
return window[typeStr];
}
};



Clazz.defineType=function(Nq,Fc,pc,interfacez){
var cf=Clazz.unloadedClasses[Nq];
if(cf!=null){
Fc=cf;
}
var idx=Nq.lastIndexOf(".");
if(idx!=-1){
var pkgName=Nq.substring(0,idx);
var pkg=Clazz.declarePackage(pkgName);
var Nc=Nq.substring(idx+1);
if(pkg[Nc]!=null){

return pkg[Nc];
}
pkg[Nc]=Fc;
}else{
if(window[Nq]!=null){

return window[Nq];
}
window[Nq]=Fc;
}
Clazz.decorateAsType(Fc,Nq,pc,interfacez);

return Fc;
};

Clazz.isSafari=(navigator.userAgent.indexOf("Safari")!=-1);
Clazz.isSafari4Plus=false;
if(Clazz.isSafari){
var ua=navigator.userAgent;
var verIdx=ua.indexOf("Version/");
if(verIdx!=-1){
var verStr=ua.substring(verIdx+8);
var verNumber=parseFloat(verStr);
Clazz.isSafari4Plus=verNumber>=4.0;
}
}


Clazz.instantialize=function(To,args){
if(args!=null&&args.length==1&&args[0]!=null
&&args[0]instanceof Clazz.aIC){
return;
}

if(To instanceof Number){
To.valueOf=function(){
return this;
};
}
if(Clazz.isSafari4Plus){
var argsClone=new Array();
for(var k=0;k<args.length;k++){
argsClone[k]=args[k];
}
args=argsClone;
}
var c=To.construct;
if(c!=null){
if(To.con$truct==null){
c.apply(To,args);
}else if(To.getClass().superClazz==null){
To.con$truct.apply(To,[]);
c.apply(To,args);
}else if((c.claxxOwner!=null
&&c.claxxOwner===To.getClass())
||(c.stacks!=null
&&c.stacks[c.stacks.length-1]==To.getClass())){

c.apply(To,args);
}else{
if(c.claxxOwner!=null&&c.claxxOwner.superClazz==null
&&c.claxxOwner.con$truct!=null){
c.claxxOwner.con$truct.apply(To,[]);
}else if(c.stacks!=null&&c.stacks.length==1
&&c.stacks[0].superClazz==null){
c.stacks[0].con$truct.apply(To,[]);
}
c.apply(To,args);
To.con$truct.apply(To,[]);
}
}else if(To.con$truct!=null){
To.con$truct.apply(To,[]);
}
};





Clazz.iFN=[
"equals","getName","getClassLoader","getResourceAsStream"
];



Clazz.innerFunctions={

equals:function(aFun){
return this===aFun;
},


getName:function(){
return Clazz.getClassName(this,true);
},

getClassLoader:function(){
var Nc=this.__CLASS_NAME__;
var bFr=ClazzLoader.getClasspathFor(Nc);
var x=bFr.lastIndexOf(Nc.replace(/\./g,"/"));
if(x!=-1){
bFr=bFr.substring(0,x);
}else{
bFr=ClazzLoader.getClasspathFor(Nc,true);
}
var loader=ClassLoader.requireLoaderByBase(bFr);
loader.getResourceAsStream=Clazz.innerFunctions.getResourceAsStream;
return loader;
},

getResourceAsStream:function(name){
var is=null;
if(name==null){
return is;
}
if(java.io.InputStream!=null){
is=new java.io.InputStream();
}else{
is=new JavaObject();
is.__CLASS_NAME__="java.io.InputStream";
is.close=NullObject;
}
is.read=function(){return 0;};
name=name.replace(/\\/g,'/');

var bFr=null;
var Nc=this.__CLASS_NAME__;
if(arguments.length==2&&name.indexOf('/')!=0){
name="/"+name;
}
if(name.indexOf('/')==0){

if(arguments.length==2){
bFr=arguments[1];
if(bFr==null){
bFr=ClazzLoader.binaryFolders[0];
}
}else if(window["ClazzLoader"]!=null){
bFr=ClazzLoader.getClasspathFor(Nc,true);
}
if(bFr==null||bFr.length==0){
is.url=name.substring(1);
}else{
bFr=bFr.replace(/\\/g,'/');
var length=bFr.length;
var lastChar=bFr.charAt(length-1);
if(lastChar!='/'){
bFr+="/";
}
is.url=bFr+name.substring(1);
}
}else{
if(this.base!=null){
bFr=this.base;
}else if(window["ClazzLoader"]!=null){
bFr=ClazzLoader.getClasspathFor(Nc);
var x=bFr.lastIndexOf(Nc.replace(/\./g,"/"));
if(x!=-1){
bFr=bFr.substring(0,x);
}else{

var y=-1;
if(bFr.indexOf(".z.js")==bFr.length-5
&&(y=bFr.lastIndexOf("/"))!=-1){
bFr=bFr.substring(0,y+1);
var pkgs=Nc.split(/\./);
for(var k=1;k<pkgs.length;k++){
var pkgURL="/";
for(var j=0;j<k;j++){
pkgURL+=pkgs[j]+"/";
}
if(pkgURL.length>bFr.length){
break;
}
if(bFr.indexOf(pkgURL)==bFr.length-pkgURL.length){
bFr=bFr.substring(0,bFr.length-pkgURL.length+1);
break;
}
}
}else{
bFr=ClazzLoader.getClasspathFor(Nc,true);
}
}
}else{
var bins=Clazz.binaryFolders;
if(bins!=null&&bins.length!=0){
bFr=bins[0];
}
}
if(bFr==null||bFr.length==0){
bFr="bin/";
}
bFr=bFr.replace(/\\/g,'/');
var length=bFr.length;
var lastChar=bFr.charAt(length-1);
if(lastChar!='/'){
bFr+="/";
}




if(this.base!=null){
is.url=bFr+name;
}else{
var idx=Nc.lastIndexOf('.');
if(idx==-1||this.base!=null){
is.url=bFr+name;
}else{
is.url=bFr+Nc.substring(0,idx)
.replace(/\./g,'/')+"/"+name;
}
}
}
return is;
}
};



Clazz.dF=function(Fc,prefix,name){
if(window["ClazzLoader"]!=null){

ClazzLoader.checkInteractive();
}
var qName=null;
if(prefix==null){


qName=name;
window[name]=Fc;
}else if(prefix.__PKG_NAME__!=null){


qName=prefix.__PKG_NAME__+"."+name;
prefix[name]=Fc;
if(prefix===java.lang){
window[name]=Fc;
}
}else{


qName=prefix.__CLASS_NAME__+"."+name;
prefix[name]=Fc;
}
Fc.__CLASS_NAME__=qName;
if(Clazz.supportsNativeObject){
for(var i=0;i<Clazz.extendedObjectMethods.length;i++){
var p=Clazz.extendedObjectMethods[i];
Fc.prototype[p]=JavaObject.prototype[p];
}
}
Fc.prototype.__CLASS_NAME__=qName;

var inF=Clazz.iFN;
for(var i=0;i<inF.length;i++){
Fc[inF[i]]=Clazz.innerFunctions[inF[i]];
}

if(window["ClazzLoader"]!=null){

var node=ClazzLoader.fC(qName);

if(node!=null&&node.status==1){

window.setTimeout((function(nnn){
return function(){
ClazzLoader.uN(nnn);
};
})(node),1);


}
}
};


Clazz.declareInterface=function(prefix,name,interfacez){
var Fc=function(){};
Clazz.dF(Fc,prefix,name);
if(interfacez!=null){
Clazz.implementOf(Fc,interfacez);
}
return Fc;
};



Clazz.decorateAsClass=function(Fc,prefix,name,pc,
interfacez,pi){
var prefixName=null;
if(prefix!=null){
prefixName=prefix.__PKG_NAME__;
if(prefixName==null){
prefixName=prefix.__CLASS_NAME__;
}
}
var qName=(prefixName==null?"":prefixName+".")+name;
var cf=Clazz.unloadedClasses[qName];
if(cf!=null){
Fc=cf;
}
var qName=null;
Clazz.dF(Fc,prefix,name);
if(pi!=null){
Clazz.xic(Fc,pc,pi);
}else if(pc!=null){
Clazz.xic(Fc,pc);
}
if(interfacez!=null){
Clazz.implementOf(Fc,interfacez);
}
return Fc;
};


Clazz.declareType=function(prefix,name,pc,interfacez,
pi){
var f=function(){
Clazz.instantialize(this,arguments);
};
return Clazz.decorateAsClass(f,prefix,name,pc,interfacez,
pi);
};


Clazz.declareAnonymous=function(prefix,name,pc,interfacez,
pi){
var f=function(){
Clazz.prepareCallback(this,arguments);
Clazz.instantialize(this,arguments);
};
return Clazz.decorateAsClass(f,prefix,name,pc,interfacez,
pi);
};


Clazz.decorateAsType=function(Fc,Nq,pc,
interfacez,pi,inheritClazzFuns){
Fc.__CLASS_NAME__=Nq;
if(Clazz.supportsNativeObject){
for(var i=0;i<Clazz.extendedObjectMethods.length;i++){
var p=Clazz.extendedObjectMethods[i];
Fc.prototype[p]=JavaObject.prototype[p];
}
}


Fc.prototype.__CLASS_NAME__=Nq;

Fc.equals=Clazz.innerFunctions.equals;
Fc.getName=Clazz.innerFunctions.getName;
if(inheritClazzFuns){
for(var i=0;i<Clazz.iFN.length;i++){
var methodName=Clazz.iFN[i];
Fc[methodName]=Clazz.innerFunctions[methodName];
}
}
if(pi!=null){
Clazz.xic(Fc,pc,pi);
}else if(pc!=null){
Clazz.xic(Fc,pc);
}
if(interfacez!=null){
Clazz.implementOf(Fc,interfacez);
}
return Fc;
};



Clazz._ex_reg=function(msg,spliterName,spliterRegex){
if(!spliterRegex)
spliterRegex="[^\\s]+";
var idx=msg.indexOf(spliterName),
str=msg.substring(0,idx)+spliterRegex+msg.substring(idx+spliterName.length),
regexp=new RegExp("^"+str+"$");
return regexp;
};

var $$o$$=null;
try{
$$o$$.hello();
}catch(e){
if(/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
var idx1=e.message.indexOf(":"),idx2=e.message.indexOf(":",idx1+2);
Clazz._NPEMsgFragment=e.message.substr(idx1+1,idx2-idx1-20);
Clazz._isNPEExceptionPredicate=function(e){
return e.message.indexOf(Clazz._NPEMsgFragment)!=-1;
};
}
else if(navigator.userAgent.toLowerCase().indexOf("webkit")!=-1){
Clazz._exceptionNPERegExp=Clazz._ex_reg(e.message,"hello");
Clazz._isNPEExceptionPredicate=function(e){
return Clazz._exceptionNPERegExp.test(e.message);
};
}
else{
Clazz._exceptionNPERegExp=Clazz._ex_reg(e.message,"$$o$$");
Clazz._isNPEExceptionPredicate=function(e){
return Clazz._exceptionNPERegExp.test(e.message);
};
}
};

Clazz.exceptionOf=function(e,clazz){
if(e.__CLASS_NAME__)
return Clazz.instanceOf(e,clazz);
else if(Clazz._isNPEExceptionPredicate(e)){

var jnpe=new java.lang.NullPointerException();
for(var i in jnpe){e[i]=jnpe[i];}
return Clazz.instanceOf(e,clazz);
}
else
return false;
};


Number.prototype._numberToString=Number.prototype.toString;

Clazz.declarePackage("java.io");

Clazz.declarePackage("java.lang.annotation");
Clazz.declarePackage("java.lang.instrument");
Clazz.declarePackage("java.lang.management");
Clazz.declarePackage("java.lang.reflect");
Clazz.declarePackage("java.lang.ref");
java.lang.ref.reflect=java.lang.reflect;
Clazz.declarePackage("java.util");


Clazz.declareInterface(java.io,"Closeable");
Clazz.declareInterface(java.io,"DataInput");
Clazz.declareInterface(java.io,"DataOutput");
Clazz.declareInterface(java.io,"Externalizable");
Clazz.declareInterface(java.io,"Flushable");
Clazz.declareInterface(java.io,"Serializable");
Clazz.declareInterface(java.lang,"Iterable");
Clazz.declareInterface(java.lang,"CharSequence");
Clazz.declareInterface(java.lang,"Cloneable");
Clazz.declareInterface(java.lang,"Appendable");
Clazz.declareInterface(java.lang,"Comparable");
Clazz.declareInterface(java.lang,"Runnable");
Clazz.declareInterface(java.util,"Comparator");

java.lang.ClassLoader={
__CLASS_NAME__:"ClassLoader"
};
}



if(window["Clazz"]==null||window["Clazz"].unloadClass==null){





Clazz.MethodNotFoundException=function(obj,clazz,method,params){
var paramStr="";
if(params!=null){
paramStr=params.substring(1).replace(/\\/g,",");
}
var leadingStr="";
if(method!=null&&method!="construct"){
leadingStr="Method";
}else{
leadingStr="Constructor";
}
this.message=leadingStr+" "+Clazz.getClassName(clazz,true)+"."
+method+"("+paramStr+") is not found!";
this.toString=function(){
return"MethodNotFoundException:"+this.message;
}
};



Clazz.prepareCallback=function(To,args){
var classThisObj=args[0];
var cbName="b$";
if(To!=null&&classThisObj!=null&&classThisObj!==window){
var obs=new Array();
if(To[cbName]==null){
To[cbName]=obs;
}else{
for(var s in To[cbName]){
if(s!="length"){
obs[s]=To[cbName][s];
}
}
To[cbName]=obs;
}
var className=Clazz.getClassName(classThisObj,true);



obs[className.replace(/org\.eclipse\.swt\./,"$wt.")]=classThisObj;
var clazz=Clazz.getClass(classThisObj);
while(clazz.superClazz!=null){
clazz=clazz.superClazz;


obs[Clazz.getClassName(clazz,true)
.replace(/org\.eclipse\.swt\./,"$wt.")]=classThisObj;
}

var cbs=classThisObj[cbName];
if(cbs!=null&&cbs instanceof Array){
for(var s in cbs){
if(s!="length"){
obs[s]=cbs[s];
}
}
}
}

for(var i=0;i<args.length-1;i++){
args[i]=args[i+1];
}
args.length--;

};



Clazz.innerTypeInstance=function(clazzInner,To,finalVars){
if(clazzInner==null){
clazzInner=arguments.callee.caller;
}
var obj=null;
if(arguments.length==3){
obj=new clazzInner(To);
}else if(arguments.length==4){
if(To.__CLASS_NAME__==clazzInner.__CLASS_NAME__
&&arguments[3]===Clazz.inheritArgs){
obj=To;
}else{
obj=new clazzInner(To,arguments[3]);
}
}else if(arguments.length==5){
obj=new clazzInner(To,arguments[3],arguments[4]);
}else if(arguments.length==6){
obj=new clazzInner(To,arguments[3],arguments[4],
arguments[5]);
}else if(arguments.length==7){
obj=new clazzInner(To,arguments[3],arguments[4],
arguments[5],arguments[6]);
}else if(arguments.length==8){
obj=new clazzInner(To,arguments[3],arguments[4],
arguments[5],arguments[6],arguments[7]);
}else if(arguments.length==9){
obj=new clazzInner(To,arguments[3],arguments[4],
arguments[5],arguments[6],arguments[7],arguments[8]);
}else if(arguments.length==10){
obj=new clazzInner(To,arguments[3],arguments[4],
arguments[5],arguments[6],arguments[7],arguments[8],
arguments[9]);
}else{

obj=new clazzInner();
if(obj.construct==null){
throw new String("No support anonymous class constructor with "
+"more than 7 parameters.");
}
var args=new Array();
for(var i=3;i<arguments.length;i++){
args[i-3]=arguments[i];
}
obj.construct.apply(obj,args);
}

if(finalVars!=null&&To.f$==null){
obj.f$=finalVars;
}else if(finalVars==null&&To.f$!=null){
obj.f$=To.f$;
}else if(finalVars!=null&&To.f$!=null){
var o=new Object();
for(var attr in To.f$){
o[attr]=To.f$[attr];
}
for(var attr in finalVars){
o[attr]=finalVars[attr];
}
obj.f$=o;
}


return obj;
};



Clazz.cloneFinals=function(){
var o=new Object();
var length=arguments.length/2;
for(var i=0;i<length;i++){
o[arguments[i+i]]=arguments[i+i+1];
}
return o;
};


Clazz.isClassDefined=Clazz.isDefinedClass=function(Nc){
if(Nc!=null&&Nc.length!=0){
if(Clazz.allClasses[Nc]){
return true;
}
var pkgFrags=Nc.split(/\./);
var pkg=null;
for(var i=0;i<pkgFrags.length;i++){
if(pkg==null){
if(Clazz.allPackage[pkgFrags[0]]==null){

return false;
}
pkg=Clazz.allPackage[pkgFrags[0]];
}else{
if(pkg[pkgFrags[i]]==null){

return false;
}
pkg=pkg[pkgFrags[i]]
}
}


if(pkg!=null){
Clazz.allClasses[Nc]=true;
return true;
}else{
return false;
}
}else{

return false;
}
};


Clazz.defineEnumConstant=function(clazzEnum,enumName,enumOrdinal,initialParams,clazzEnumExt){
var o=null;
if(clazzEnumExt!=null){
o=new clazzEnumExt();
}else{
o=new clazzEnum();
}
Clazz.superConstructor(o,clazzEnum,[enumName,enumOrdinal]);
if(initialParams!=null&&initialParams.length!=0){
o.construct.apply(o,initialParams);
}
clazzEnum[enumName]=o;
clazzEnum.prototype[enumName]=o;
return o;
};



Clazz.newArray=function(){
var args=arguments;
if(arguments.length==1){
if(arguments[0]instanceof Array){
args=arguments[0];
}
}
if(args.length<=1){
return new Array();
}else if(args.length==2){
var dim=args[0];
if(typeof dim=="string"){
dim=dim.charCodeAt(0);
}
var val=args[1];
var arr=new Array(dim);
for(var i=0;i<dim;i++){
arr[i]=val;
}
return arr;
}else{
var dim=args[0];
if(typeof dim=="string"){
dim=dim.charCodeAt(0);
}
var len=args.length-1;
var xargs=new Array(len);
for(var i=0;i<len;i++){
xargs[i]=args[i+1];
}
var arr=new Array(dim);
for(var i=0;i<dim;i++){

arr[i]=Clazz.newArray(xargs);
}
return arr;
}
};



Clazz.makeFunction=function(jsr){
return function(e){
if(e==null){
e=window.event;
}
if(jsr.setEvent!=null){
jsr.setEvent(e);
}
jsr.run();

if(jsr.returnSet==1){
return jsr.returnNumber;
}else if(jsr.returnSet==2){
return jsr.returnBoolean;
}else if(jsr.returnSet==3){
return jsr.returnObject;
}
};
};


Clazz.defineStatics=function(clazz){
for(var i=0;i<(arguments.length-1)/2;i++){
var name=arguments[i+i+1];
clazz[name]=clazz.prototype[name]=arguments[i+i+2];
}
};


Clazz.prepareFields=function(clazz,fieldsFun){
var stacks=new Array();
if(clazz.con$truct!=null){
var ss=clazz.con$truct.stacks;
var idx=clazz.con$truct.index;
for(var i=idx;i<ss.length;i++){
stacks[i]=ss[i];
}
}
clazz.con$truct=clazz.prototype.con$truct=function(){
var stacks=arguments.callee.stacks;
if(stacks!=null){
for(var i=0;i<stacks.length;i++){
stacks[i].apply(this,[]);
}
}
};
stacks[stacks.length]=fieldsFun;
clazz.con$truct.stacks=stacks;
clazz.con$truct.index=0;
};



Clazz.registerSerializableFields=function(clazz){
var args=arguments;
var length=args.length;
var newArr=new Array();
if(clazz.declared$Fields!=null){
for(var i=0;i<clazz.declared$Fields.length;i++){
newArr[i]=clazz.declared$Fields[i];
}
}
clazz.declared$Fields=newArr;

if(length>0&&length%2==1){
var fs=clazz.declared$Fields;
for(var i=1;i<=(length-1)/2;i++){
var o={name:args[i+i-1],type:args[i+i]};
var existed=false;
for(var j=0;j<fs.length;j++){
if(fs[j].name==o.name){
fs[j].type=o.type;
existed=true;
break;
}
}
if(!existed){
fs[fs.length]=o;
}
}
}
};




Clazz.gMCM=function(args){
var o=new Object();
var argc=args.callee.caller;
if(argc==null)return null;
if(argc!==Clazz.tsae){
argc=argc.arguments.callee.caller;
if(argc==null)return null;
}
if(argc!==Clazz.tsae)return null;
argc=argc.arguments.callee.caller;
if(argc==null||argc!==Clazz.saem)return null;
o.claxxRef=argc.arguments[1];
o.fxName=argc.arguments[2];
o.pts=Clazz.getParamsType(argc.arguments[3]);
argc=argc.arguments.callee.caller;
if(argc==null)return null;
argc=argc.arguments.callee.caller;
if(argc==null)return null;
o.caller=argc;
return o;
};



Clazz.checkPrivateMethod=function(args){
var m=Clazz.gMCM(args);
if(m==null)return null;
var callerFx=m.claxxRef.prototype[m.caller.exName];
if(callerFx==null)return null;
var ppFun=null;
if(callerFx.claxxOwner!=null){
ppFun=callerFx.claxxOwner.prototype[m.fxName];
}else{
var stacks=callerFx.stacks;
for(var i=stacks.length-1;i>=0;i--){
var fx=stacks[i].prototype[m.caller.exName];
if(fx===m.caller){
ppFun=stacks[i].prototype[m.fxName];
}else if(fx!=null){
for(var fn in fx){
if(fn.indexOf('\\')==0&&fx[fn]===m.caller){
ppFun=stacks[i].prototype[m.fxName];
break;
}
}
}
if(ppFun!=null){
break;
}
}
}
if(ppFun!=null&&ppFun.claxxOwner==null){
ppFun=ppFun["\\"+m.pts];
}
if(ppFun!=null&&ppFun.isPrivate&&ppFun!==args.callee){
return ppFun;
}
return null;
};
var $fz=null;

var c$=null;

Clazz.cst=new Array();
Clazz.pu$h=function(){
if(c$!=null){
Clazz.cst[Clazz.cst.length]=c$;
}
};
Clazz.p0p=function(){
if(Clazz.cst.length>0){
var clazz=Clazz.cst[Clazz.cst.length-1];
Clazz.cst.length--;
return clazz;
}else{
return null;
}
};




Clazz.tracingCalling=false;



Clazz.initializingException=false;


Clazz.callingStack=function(caller,owner){
this.caller=caller;
this.owner=owner;
};
Clazz.callingStackTraces=new Array();
Clazz.pu$hCalling=function(stack){
Clazz.callingStackTraces[Clazz.callingStackTraces.length]=stack;
};
Clazz.p0pCalling=function(){
var length=Clazz.callingStackTraces.length;
if(length>0){
var stack=Clazz.callingStackTraces[length-1];
Clazz.callingStackTraces.length--;
return stack;
}else{
return null;
}
};




if(window["ClazzLoader"]!=null&&ClazzLoader.binaryFolders!=null){
Clazz.binaryFolders=ClazzLoader.binaryFolders;
}else{
Clazz.binaryFolders=["bin/","","j2slib/"];
}

Clazz.addBinaryFolder=function(bin){
if(bin!=null){
var bins=Clazz.binaryFolders;
for(var i=0;i<bins.length;i++){
if(bins[i]==bin){
return;
}
}
bins[bins.length]=bin;
}
};
Clazz.removeBinaryFolder=function(bin){
if(bin!=null){
var bins=Clazz.binaryFolders;
for(var i=0;i<bins.length;i++){
if(bins[i]==bin){
for(var j=i;j<bins.length-1;j++){
bins[j]=bins[j+1];
}
bins.length--;
return bin;
}
}
}
return null;
};
Clazz.setPrimaryFolder=function(bin){
if(bin!=null){
Clazz.removeBinaryFolder(bin);
var bins=Clazz.binaryFolders;
for(var i=bins.length-1;i>=0;i--){
bins[i+1]=bins[i];
}
bins[0]=bin;
}
};



Clazz.load=function(musts,clazz,optionals,declaration){
if(declaration!=null){
declaration();
}
};


java.lang.Object=JavaObject;

JavaObject.getName=Clazz.innerFunctions.getName;

w$=window;
d$=document;
System={
currentTimeMillis:function(){
return new Date().getTime();
},
props:null,
getProperties:function(){
return System.props;
},
setProperties:function(props){
System.props=props;
},
getProperty:function(key,def){
if(System.props!=null){
return System.props.getProperty(key,def);
}
if(def!=null){
return def;
}
return key;
},
setProperty:function(key,val){
if(System.props==null){
return;
}
System.props.setProperty(key,val);
},
currentTimeMillis:function(){
return new Date().getTime();
},
arraycopy:function(src,srcPos,dest,destPos,length){
if(src!==dest){
for(var i=0;i<length;i++){
dest[destPos+i]=src[srcPos+i];
}
}else{
var swap=[];
for(var i=0;i<length;i++){
swap[i]=src[srcPos+i];
}
for(var i=0;i<length;i++){
dest[destPos+i]=swap[i];
}
}
}
};
System.out=new JavaObject();
System.out.__CLASS_NAME__="java.io.PrintStream";
System.out.print=function(){};
System.out.printf=function(){};
System.out.println=function(){};

System.err=new JavaObject();
System.err.__CLASS_NAME__="java.io.PrintStream";
System.err.print=function(){};
System.err.printf=function(){};
System.err.println=function(){};

popup=assert=log=error=window.alert;

Thread=function(){};
Thread.J2S_THREAD=Thread.prototype.J2S_THREAD=new Thread();
Thread.currentThread=Thread.prototype.currentThread=function(){
return this.J2S_THREAD;
};


Clazz.intCast=function(n){
var b1=(n&0xff000000)>>24;
var b2=(n&0xff0000)>>16;
var b3=(n&0xff00)>>8;
var b4=n&0xff;
if((b1&0x80)!=0){
return-(((b1&0x7f)<<24)+(b2<<16)+(b3<<8)+b4+1);
}else{
return(b1<<24)+(b2<<16)+(b3<<8)+b4;
}
};


Clazz.shortCast=function(s){
var b1=(n&0xff00)>>8;
var b2=n&0xff;
if((b1&0x80)!=0){
return-(((b1&0x7f)<<8)+b2+1);
}else{
return(b1<<8)+b4;
}
};


Clazz.byteCast=function(b){
if((b&0x80)!=0){
return-((b&0x7f)+1);
}else{
return b&0xff;
}
};


Clazz.charCast=function(c){
return String.fromCharCode(c&0xff).charAt(0);
};



Clazz.floatCast=function(f){
return f;
};



Clazz.longMasks=[];

Clazz.longReverseMasks=[];

Clazz.longBits=[];

(function(){
var arr=[1];
for(var i=1;i<53;i++){
arr[i]=arr[i-1]+arr[i-1];
}
Clazz.longBits=arr;
Clazz.longMasks[52]=arr[52];
for(var i=51;i>=0;i--){
Clazz.longMasks[i]=Clazz.longMasks[i+1]+arr[i];
}
Clazz.longReverseMasks[0]=arr[0];
for(var i=1;i<52;i++){
Clazz.longReverseMasks[i]=Clazz.longReverseMasks[i-1]+arr[i];
}
})();


Clazz.longLeftShift=function(l,o){
if(o==0)return l;
if(o>=64)return 0;
if(o>52){
error("[Java2Script] Error : JavaScript does not support long shift!");
return l;
}
if((l&Clazz.longMasks[o-1])!=0){
error("[Java2Script] Error : Such shift operator results in wrong calculation!");
return l;
}
var high=l&Clazz.longMasks[52-32+o];
if(high!=0){
return high*Clazz.longBits[o]+(l&Clazz.longReverseMasks[32-o])<<0;
}else{
return l<<o;
}
};


Clazz.intLeftShift=function(n,o){
return(n<<o)&0xffffffff;
};


Clazz.longRightShift=function(l,o){
if((l&Clazz.longMasks[52-32])!=0){
return Math.round((l&Clazz.longMasks[52-32])/Clazz.longBits[32-o])+(l&Clazz.longReverseMasks[o])>>o;
}else{
return l>>o;
}
};


Clazz.intRightShift=function(n,o){
return n>>o;
};


Clazz.long0RightShift=function(l,o){
return l>>>o;
};


Clazz.int0RightShift=function(n,o){
return n>>>o;
};


$_L=Clazz.load;$_W=Clazz.declareAnonymous;$_T=Clazz.declareType;$_J=Clazz.declarePackage;$_C=Clazz.decorateAsClass;$_Z=Clazz.instantialize;$_I=Clazz.declareInterface;$_D=Clazz.isClassDefined;$_H=Clazz.pu$h;$_P=Clazz.p0p;$_B=Clazz.prepareCallback;$_N=Clazz.innerTypeInstance;$_K=Clazz.makeConstructor;$_U=Clazz.superCall;$_R=Clazz.superConstructor;$_M=Clazz.defineMethod;$_V=Clazz.overrideMethod;$_S=Clazz.defineStatics;$_E=Clazz.defineEnumConstant;$_F=Clazz.cloneFinals;$_Y=Clazz.prepareFields;$_A=Clazz.newArray;$_O=Clazz.instanceOf;$_G=Clazz.inheritArgs;$_X=Clazz.checkPrivateMethod;$_Q=Clazz.makeFunction;$_s=Clazz.registerSerializableFields;


var reflect=Clazz.declarePackage("java.lang.reflect");
Clazz.declarePackage("java.security");

Clazz.iFN=Clazz.iFN.concat(["getSuperclass",
"isAssignableFrom","getMethods","getMethod","getDeclaredMethods",
"getDeclaredMethod","getConstructor","getModifiers","isArray","newInstance"]);

Clazz.innerFunctions.getSuperclass=function(){
return this.superClazz;
};
Clazz.innerFunctions.isAssignableFrom=function(clazz){
return Clazz.gIL(clazz,this)>=0;
};
Clazz.innerFunctions.getConstructor=function(){
return new java.lang.reflect.Constructor(this,[],[],
java.lang.reflect.Modifier.PUBLIC);
};

Clazz.innerFunctions.getDeclaredMethods=Clazz.innerFunctions.getMethods=function(){
var ms=new Array();
var p=this.prototype;
for(var attr in p){
if(typeof p[attr]=="function"&&p[attr].__CLASS_NAME__==null){

ms[ms.length]=new java.lang.reflect.Method(this,attr,
[],java.lang.Void,[],java.lang.reflect.Modifier.PUBLIC);
}
}
p=this;
for(var attr in p){
if(typeof p[attr]=="function"&&p[attr].__CLASS_NAME__==null){
ms[ms.length]=new java.lang.reflect.Method(this,attr,
[],java.lang.Void,[],java.lang.reflect.Modifier.PUBLIC
|java.lang.reflect.Modifier.STATIC);
}
}
return ms;
};
Clazz.innerFunctions.getDeclaredMethod=Clazz.innerFunctions.getMethod=function(name,clazzes){
var p=this.prototype;
for(var attr in p){
if(name==attr&&typeof p[attr]=="function"
&&p[attr].__CLASS_NAME__==null){

return new java.lang.reflect.Method(this,attr,
[],java.lang.Void,[],java.lang.reflect.Modifier.PUBLIC);
}
}
p=this;
for(var attr in p){
if(name==attr&&typeof p[attr]=="function"
&&p[attr].__CLASS_NAME__==null){
return new java.lang.reflect.Method(this,attr,
[],java.lang.Void,[],java.lang.reflect.Modifier.PUBLIC
|java.lang.reflect.Modifier.STATIC);
}
}
return null;
};
Clazz.innerFunctions.getModifiers=function(){
return java.lang.reflect.Modifier.PUBLIC;
};
Clazz.innerFunctions.isArray=function(){
return false;
};
Clazz.innerFunctions.newInstance=function(){
var clz=this;
return new clz();
};


{
var inF=Clazz.iFN;
for(var i=0;i<inF.length;i++){
JavaObject[inF[i]]=Clazz.innerFunctions[inF[i]];
Array[inF[i]]=Clazz.innerFunctions[inF[i]];
}
Array["isArray"]=function(){
return true;
};
}


Clazz.forName=function(Nc){
if(Clazz.isClassDefined(Nc)){
return Clazz.evalType(Nc);
}
if(window["ClazzLoader"]!=null){
ClazzLoader.setLoadingMode("xhr.sync");
ClazzLoader.loadClass(Nc);
return Clazz.evalType(Nc);
}else{
alert("[Java2Script] Error: No ClassLoader!");
}
};




Clazz.cleanDelegateMethod=function(m){
if(m==null)return;
if(typeof m=="function"&&m.lastMethod!=null
&&m.lastParams!=null&&m.lastClaxxRef!=null){
m.lastMethod=null;
m.lastParams=null;
m.lastClaxxRef=null;
}
};


Clazz.unloadClass=function(Nq){
var cc=Clazz.evalType(Nq);
if(cc!=null){
Clazz.unloadedClasses[Nq]=cc;
var Nc=Nq;
var pkgFrags=Nc.split(/\./);
var pkg=null;
for(var i=0;i<pkgFrags.length-1;i++){
if(pkg==null){
pkg=Clazz.allPackage[pkgFrags[0]];
}else{
pkg=pkg[pkgFrags[i]]
}
}
if(pkg==null){
Clazz.allPackage[pkgFrags[0]]=null;
window[pkgFrags[0]]=null;

for(var c in window){
if(c.indexOf(Nq+"$")==0){
Clazz.unloadClass(c);
window[c]=null;
}
}
}else{
pkg[pkgFrags[pkgFrags.length-1]]=null;

for(var c in pkg){
if(c.indexOf(pkgFrags[pkgFrags.length-1]+"$")==0){
Clazz.unloadClass(pkg.__PKG_NAME__+"."+c);
pkg[c]=null;
}
}
}

if(Clazz.allClasses[Nq]==true){
Clazz.allClasses[Nq]=false;

for(var c in Clazz.allClasses){
if(c.indexOf(Nq+"$")==0){
Clazz.allClasses[c]=false;
}
}
}

for(var m in cc){
Clazz.cleanDelegateMethod(cc[m]);
}
for(var m in cc.prototype){
Clazz.cleanDelegateMethod(cc.prototype[m]);
}

if(window["ClazzLoader"]!=null){
ClazzLoader.unloadClassExt(Nq);
}

return true;
}
return false;
};








Clazz.addEvent=function(element,type,handler){
if(element.addEventListener){
element.addEventListener(type,handler,false);
}else{

if(!handler.$$guid)handler.$$guid=Clazz.addEvent.guid++;

if(!element.events)element.events={};

var handlers=element.events[type];
if(!handlers){
handlers=element.events[type]={};

if(element["on"+type]){
handlers[0]=element["on"+type];
}
}

handlers[handler.$$guid]=handler;

element["on"+type]=Clazz.handleEvent;
}
};


Clazz.addEvent.guid=1;


Clazz.removeEvent=function(element,type,handler){
if(element.removeEventListener){
element.removeEventListener(type,handler,false);
}else{

if(element.events&&element.events[type]){
delete element.events[type][handler.$$guid];
}
}
};


Clazz.isVeryOldIE=navigator.userAgent.indexOf("MSIE 6.0")!=-1||navigator.userAgent.indexOf("MSIE 5.5")!=-1||navigator.userAgent.indexOf("MSIE 5.0")!=-1;


Clazz.handleEvent=function(event){
var returnValue=true;

if(!Clazz.isVeryOldIE){
event=event||Clazz.fixEvent(((this.ownerDocument||this.document||this).parentWindow||window).event);
}else{
if(event==null){
var evt=null;
try{
var pWindow=(this.ownerDocument||this.document||this).parentWindow;
if(pWindow!=null){
evt=pWindow.event;
}
}catch(e){
evt=window.event;
}
event=Clazz.fixEvent(evt);
}
}

var handlers=this.events[event.type];

for(var i in handlers){
if(isNaN(i)){
continue;
}
this.$$handleEvent=handlers[i];
if(typeof this.$$handleEvent!="function"){
continue;
}
if(this.$$handleEvent(event)===false){
returnValue=false;
}
}
return returnValue;
};


Clazz.fixEvent=function(event){

event.preventDefault=Clazz.fixEvent.preventDefault;
event.stopPropagation=Clazz.fixEvent.stopPropagation;
return event;
};
Clazz.fixEvent.preventDefault=function(){
this.returnValue=false;
};
Clazz.fixEvent.stopPropagation=function(){
this.cancelBubble=true;
};

}



if(window["$CN$"]==null){











$CN$=function(){
this.sp=new Array();
this.sm=new Array();
this.optionals=new Array();
this.dcl=null;
this.name=null;
this.path=null;
this.status=0;
this.random=0.13412;
this.oled=null;
this.toString=function(){
if(this.name!=null){
return this.name;
}else if(this.path!=null){
return this.path;
}else{
return"$CN$";
}
};
};





$CL$=function(){};

$CL$.loaders=[];

$CL$.requireLoaderByBase=function(base){
for(var i=0;i<$CL$.loaders.length;i++){
if($CL$.loaders[i].base==base){
return $CL$.loaders[i];
}
}
var loader=new $CL$();
loader.base=base;
$CL$.loaders[$CL$.loaders.length]=loader;
return loader;
};



$CL$.tr=new $CN$();




$CL$.ls=new Object();




$CL$.ilt=0;



$CL$.maxLoadingThreads=6;

$CL$.userAgent=navigator.userAgent.toLowerCase();
$CL$.isOpera=($CL$.userAgent.indexOf("opera")!=-1);
$CL$.isIE=($CL$.userAgent.indexOf("msie")!=-1)&&!$CL$.isOpera;
$CL$.isGecko=($CL$.userAgent.indexOf("gecko")!=-1);
$CL$.isChrome=($CL$.userAgent.indexOf("chrome")!=-1);


if($CL$.isOpera){
$CL$.maxLoadingThreads=1;
var index=$CL$.userAgent.indexOf("opera/");
if(index!=-1){
var verNumber=9.0;
try{
verNumber=parseFloat($CL$.userAgent.subString(index+6));
}catch(e){}
if(verNumber>=9.6){
$CL$.maxLoadingThreads=6;
}
}
}


if(window["Clazz"]!=null&&Clazz.isClassDefined){
$CL$.isClassDefined=Clazz.isClassDefined;
}else{

$CL$.dC=new Object();
$CL$.isClassDefined=function(clazzName){
return $CL$.dC[clazzName]==true;
};
}


if(window["Clazz"]!=null&&Clazz.binaryFolders!=null){
$CL$.binaryFolders=Clazz.binaryFolders;
}else{
$CL$.binaryFolders=["bin/","","j2slib/"];
}

$CL$.addBinaryFolder=Clazz.addBinaryFolder;
$CL$.removeBinaryFolder=Clazz.removeBinaryFolder;
$CL$.setPrimaryFolder=Clazz.setPrimaryFolder;





$CL$.async=true;



$CL$.xhr=false;



$CL$.ltl=-1;



$CL$.setLoadingMode=function(mode,timeLag){
if(mode==null){
if($CL$.async&&timeLag>=0){
$CL$.ltl=timeLag;
}else{
$CL$.ltl=-1;
}
return;
}
if(typeof mode=="string"){
mode=mode.toLowerCase();
if(mode.length==0||mode.indexOf("script")!=-1){
$CL$.xhr=false;
$CL$.async=true;
}else{
$CL$.xhr=true;
if(mode.indexOf("async")!=-1){
$CL$.async=true;
}else{
$CL$.async=false;
}
}

}
if($CL$.async&&timeLag>=0){
$CL$.ltl=timeLag;
}else{
$CL$.ltl=-1;
}
};





$CL$.unwrapArray=function(arr){
if(arr==null||arr.length==0){
return arr;
}
var last=null;
for(var i=0;i<arr.length;i++){
if(arr[i]==null){
continue;
}
if(arr[i].charAt(0)=='$'){
if(arr[i].charAt(1)=='.'){
if(last==null){
continue;
}
var idx=last.lastIndexOf(".");
if(idx!=-1){
var prefix=last.substring(0,idx);
arr[i]=prefix+arr[i].substring(1);
}
}else{
arr[i]="org.eclipse.s"+arr[i].substring(1);
}
}
last=arr[i];
}
return arr;
};




$CL$.cq=new Array();


$CL$.classpathMap=new Object();


$CL$.packageClasspath=function(pkg,base,index){
var map=$CL$.classpathMap;

var isPkgDeclared=index==true&&map["@"+pkg]!=null;
if(index&&map["@java"]==null&&pkg.indexOf("java")!=0){
$CL$.acp("java");
}
if(pkg instanceof Array){
$CL$.unwrapArray(pkg);
for(var i=0;i<pkg.length;i++){
$CL$.packageClasspath(pkg[i],base,index);
}
return;
}
if(pkg=="java"||pkg=="java.*"){

var key="@net.sf.j2s.ajax";
if(map[key]==null){
map[key]=base;
}
key="@net.sf.j2s";
if(map[key]==null){
map[key]=base;
}
}else if(pkg=="swt"){
pkg="org.eclipse.swt";
}else if(pkg=="ajax"){
pkg="net.sf.j2s.ajax";
}else if(pkg=="j2s"){
pkg="net.sf.j2s";
}
if(pkg.lastIndexOf(".*")==pkg.length-2){
pkg=pkg.substring(0,pkg.length-2);
}
map["@"+pkg]=base;
if(index==true&&!isPkgDeclared){
if(window[pkg+".registered"]!=true){
$CL$.pkgRefCount++;
$CL$.loadClass(pkg+".package",function(){
$CL$.pkgRefCount--;
if($CL$.pkgRefCount==0){
$CL$.runtimeLoaded();
}
},true);
}else if(window[pkg+".package.callback"]!=null){
window[pkg+".package.callback"]();
}
}
};

$CL$.pkgRefCount=0;




$CL$.jarClasspath=function(jar,zs){
if(zs instanceof Array){
$CL$.unwrapArray(zs);
for(var i=0;i<zs.length;i++){
$CL$.classpathMap["#"+zs[i]]=jar;
}
$CL$.classpathMap["$"+jar]=zs;
}else{
$CL$.classpathMap["#"+zs]=jar;
$CL$.classpathMap["$"+jar]=[zs];
}
};



$CL$.registerPackages=function(prefix,pkgs){

$CL$.checkInteractive();
var base=$CL$.getClasspathFor(prefix+".*",true);
for(var i=0;i<pkgs.length;i++){
if(window["Clazz"]!=null){
Clazz.declarePackage(prefix+"."+pkgs[i]);
}
$CL$.packageClasspath(prefix+"."+pkgs[i],base);
}
};



$CL$.multipleSites=function(path){
var deltas=window["j2s.update.delta"];
if(deltas!=null&&deltas instanceof Array&&deltas.length>=3){
var lastOldVersion=null;
var lastNewVersion=null;
for(var i=0;i<deltas.length/3;i++){
var oldVersion=deltas[i+i+i];
if(oldVersion!="$"){
lastOldVersion=oldVersion;
}
var newVersion=deltas[i+i+i+1];
if(newVersion!="$"){
lastNewVersion=newVersion;
}
var relativePath=deltas[i+i+i+2];
var key=lastOldVersion+"/"+relativePath;
var idx=path.indexOf(key);
if(idx!=-1&&idx==path.length-key.length){
path=path.substring(0,idx)+lastNewVersion+"/"+relativePath;
break;
}
}
}
var length=path.length;
if($CL$.maxLoadingThreads>1
&&((length>15&&path.substring(0,15)=="http://archive.")
||(length>9&&path.substring(0,9)=="http://a."))){
var index=path.lastIndexOf("/");
if(index<length-3){
var arr=['a', 'e', 'i', 'o', 'u', 'y'];
var c1=path.charCodeAt(index+1);
var c2=path.charCodeAt(index+2);
var idx=(length-index)*3+c1*5+c2*7;
return path.substring(0,7)+arr[idx%6]+path.substring(8);
}
}
return path;
};



$CL$.getClasspathFor=function(clazz,forRoot,ext){

var path=$CL$.classpathMap["#"+clazz];
var base=null;
if(path!=null){
if(!forRoot&&ext==null){
return $CL$.multipleSites(path);
}else{
var idx=path.lastIndexOf(clazz.replace(/\./g,"/"));
if(idx!=-1){
base=path.substring(0,idx);
}else{

idx=clazz.lastIndexOf(".");
if(idx!=-1){
idx=path.lastIndexOf(clazz.substring(0,idx)
.replace(/\./g,"/"));
if(idx!=-1){
base=path.substring(0,idx);
}
}
}
}
}
if(base==null){

var idx=clazz.lastIndexOf(".");

while(idx!=-1){
var pkg=clazz.substring(0,idx);
base=$CL$.classpathMap["@"+pkg];
if(base!=null){
break;
}
idx=clazz.lastIndexOf(".",idx-2);
}


}

base=$CL$.aB(base);
if(forRoot){
return $CL$.multipleSites(base);
}
if(clazz.lastIndexOf(".*")==clazz.length-2){
return $CL$.multipleSites(base+clazz.substring(0,idx+1)
.replace(/\./g,"/"));
}
if(ext==null){
ext=".js";
}else if(ext.charAt(0)!='.'){
ext="."+ext;
}
var jsPath=base+clazz.replace(/\./g,"/")+ext;
return $CL$.multipleSites(jsPath);
};



$CL$.aB=function(base){
if(base==null){

var bins="binaryFolders";
if(window["Clazz"]!=null&&Clazz[bins]!=null
&&Clazz[bins].length!=0){
base=Clazz[bins][0];
}else if($CL$[bins]!=null
&&$CL$[bins].length!=0){
base=$CL$[bins][0];
}else{
base="bin";
}
}
if(base.lastIndexOf("/")!=base.length-1){
base+="/";
}
return base;
};




$CL$.exmap=new Object();



$CL$.ignore=function(){
var zs=null;
if(arguments.length==1){
if(arguments[0]instanceof Array){
zs=arguments[0];
}
}
if(zs==null){
zs=new Array();
for(var i=0;i<arguments.length;i++){
zs[zs.length]=arguments[i];
}
}
$CL$.unwrapArray(zs);
for(var i=0;i<zs.length;i++){
$CL$.exmap["@"+zs[i]]=true;
}
};



$CL$.isEx=function(clazz){
return $CL$.exmap["@"+clazz]==true;
};



$CL$.scriptLoading=function(file){};


$CL$.scriptLoaded=function(file){};


$CL$.scriptInited=function(file){};


$CL$.scriptCompleted=function(file){};


$CL$.classUnloaded=function(clazz){};


$CL$.classReloaded=function(clazz){};



$CL$.globalLoaded=function(){};


$CL$.keepOnLoading=true;



$CL$.p2node=new Object();


$CL$.xhrOnload=function(tt,file){
if(tt.status>=400||tt.responseText==null
||tt.responseText.length==0){
var fs=$CL$.fss;
if(fs[file]==null){

fs[file]=1;
$CL$.ls[file]=false;
$CL$.xrpt(file);
return;
}else{
alert("[Java2Script] Error in loading "+file+"!");
}
$CL$.next(file);
}else{
try{


eval(tt.responseText);
}catch(e){
alert("[Java2Script] Script error: "+e.message);
throw e;
}
$CL$.scriptLoaded(file);
$CL$.next(file);
}
};




$CL$.rsc=function(){
};



$CL$.fss=new Object();



$CL$.fhs=new Object();


$CL$.takeAnotherTry=true;



$CL$.gRF=function(node){
return function(){
if(node.readyState!="interactive"){
try{
if(node.parentNode!=null){
node.parentNode.removeChild(node);
}
}catch(e){}
node=null;
}
};
};




$CL$.RsN=function(n){
if(window["j2s.script.debugging"]){
return;
}

window.setTimeout($CL$.gRF(n),1);
};



$CL$.gXOd=function(tt,file){
return function(){
$CL$.xhrOnload(tt,file);
tt=null;
file=null;
};
};



$CL$.gXcb=function(tt,file){
return function(){
if(tt.readyState==4){
if($CL$.ilt>0){
$CL$.ilt--;
}
var lazyFun=$CL$.gXOd(tt,file);
if(iX){
tt.onreadystatechange=$CL$.rsc;

window.setTimeout(lazyFun,
$CL$.ltl<0?0:$CL$.ltl);
}else{
tt.onreadystatechange=null;
if($CL$.ltl>=0){
window.setTimeout(lazyFun,$CL$.ltl);
}else{
$CL$.xhrOnload(tt,file);
}
}
tt=null;
file=null;
}
};
};



$CL$.lNBP=function(path){
if($CL$.ltl>=0){
window.setTimeout(function(){
$CL$.next(path);
},$CL$.ltl);
}else{
$CL$.next(path);
}
};



$CL$.iTLA=function(path,local){
var fun=function(){
if(!$CL$.takeAnotherTry){
return;
}

$CL$.fss[path]=0;
$CL$.ls[path]=false;

if($CL$.ilt>0){
$CL$.ilt--;
}


$CL$.xrpt(path);
};


var waitingTime=(local?3000:30000);

return window.setTimeout(fun,waitingTime);
};



$CL$.wFLT=function(script){
return window.setTimeout(function(){
script.onerror();
script.timeoutHandle=null;
script=null;
},500);
};



$CL$.lazilyRexrpt=function(path){
return window.setTimeout(function(){
$CL$.xrpt(path);
},100);
};



$CL$.gWSC=function(path,forError){
return function(){
if($CL$.isGecko&&this.timeoutHandle!=null){
window.clearTimeout(this.timeoutHandle);
this.timeoutHandle=null;
}
if($CL$.ilt>0){
$CL$.ilt--;
}
this.onload=null;
this.onerror=null;
if(!forError&&$CL$.isOpera
&&!$CL$.ilss[this.src]){
$CL$.checkInteractive();
}
if(forError||(!$CL$.ilss[this.src]
&&$CL$.isOpera)){

var fss=$CL$.fss;
if(fss[path]==null&&$CL$.takeAnotherTry){


fss[path]=1;
if(!forError){
$CL$.ilss[this.src]=false;
}
$CL$.ls[path]=false;
$CL$.lazilyRexrpt(path);
$CL$.RsN(this);
return;
}else{
alert("[Java2Script] Error in loading "+path+"!");
}
if(forError){
$CL$.scriptLoaded(path);
}
}else{
$CL$.scriptLoaded(path);
}
$CL$.lNBP(path);
$CL$.RsN(this);
};
};



$CL$.gISC=function(path){
var f=function(){
var fhs=$CL$.fhs;
var fss=$CL$.fss;
var state=""+this.readyState;

var local=state=="loading"
&&(this.src.indexOf("file:")==0
||(window.location.protocol=="file:"
&&this.src.indexOf("http")!=0));


if(state!="loaded"&&state!="complete"){


if(fss[path]==null){
fhs[path]=$CL$.iTLA(path,local);
return;
}
if(fss[path]==1){
return;
}
if(state=="loading"&&!local){
return;
}
}
if(fhs[path]!=null){
window.clearTimeout(fhs[path]);
fhs[path]=null;
}
if((local||state=="loaded")
&&!$CL$.ilss[this.src]){
if(!local&&(fss[path]==null||fss[path]==0)
&&$CL$.takeAnotherTry){

if($CL$.ilt>0){
$CL$.ilt--;
}

fss[path]=1;

$CL$.ls[path]=false;
$CL$.lazilyRexrpt(path);
$CL$.RsN(this);
return;
}else{
alert("[Java2Script] Error in loading "+path+"!");
}
}
if($CL$.ilt>0){
$CL$.ilt--;
}
$CL$.scriptLoaded(path);

this.onreadystatechange=null;
$CL$.lNBP(path);
$CL$.RsN(this);


var scripts=document.getElementsByTagName("SCRIPT");
if(scripts!=null&&scripts.length>0){
for(var i=0;i<scripts.length;i++){
var s=scripts[i];
if(s.readyState=="loading"&&s.onreadystatechange!=null
&&s.onreadystatechange.path==path&&s!==this){
s.parentNode.removeChild(s);
}
}
}
};
f.path=path;
return f;
};






$CL$.xrpt=function(file){

var iol=(arguments[1]==true);
if($CL$.ls[file]&&!iol){
$CL$.next(file);
return;
}
$CL$.ls[file]=true;

var cq=$CL$.cq;
for(var i=0;i<cq.length;i++){
if(cq[i]==file){
for(var j=i;j<cq.length-1;j++){
cq[i]=cq[i+1];
}
cq.length--;
break;
}
}

if($CL$.xhr){
$CL$.scriptLoading(file);
var tt=null;
var iX=false;
if(window.XMLHttpRequest){
tt=new XMLHttpRequest();
}else{
iX=true;
try{
tt=new ActiveXObject("Msxml2.XMLHTTP");
}catch(e){
tt=new ActiveXObject("Microsoft.XMLHTTP");
}
}
if(tt==null){
alert("[Java2Script] XMLHttpRequest not supported!");
return;
}

tt.open("GET",file,$CL$.async);


if($CL$.async){
tt.onreadystatechange=$CL$.gXcb(
tt,file);
$CL$.ilt++;
try{
tt.send(null);
}catch(e){
alert("[Java2Script] Loading file error: "+e.message);
$CL$.xhrOnload(tt,file);

}
}else{
try{
tt.send(null);
}catch(e){
alert("[Java2Script] Loading file error: "+e.message);

}
$CL$.xhrOnload(tt,file);
}
return;
}

var script=document.createElement("SCRIPT");
script.type="text/javascript";
if($CL$.isChrome&&$CL$.reloadingClasses[file]){
script.src=file+"?"+Math.floor(100000*Math.random());
}else{
script.src=file;
}
var head=document.getElementsByTagName("HEAD")[0];

if(iol){
head.appendChild(script);

return;
}
script.defer=true;

if(typeof(script.onreadystatechange)=="undefined"||!$CL$.isIE){
if($CL$.isGecko&&(file.indexOf("file:")==0
||(window.location.protocol=="file:"&&file.indexOf("http")!=0))){
script.timeoutHandle=$CL$.wFLT(script);
}



script.onload=$CL$.gWSC(file,false);

script.onerror=$CL$.gWSC(file,true);

if($CL$.isOpera){
$CL$.needOnloadCheck=true;
}
}else{
$CL$.needOnloadCheck=true;
script.onreadystatechange=$CL$.gISC(file);
}
$CL$.ilt++;


head.appendChild(script);
$CL$.scriptLoading(file);
};


$CL$.isResourceExisted=function(id,path,base){
if(id!=null&&document.getElementById(id)!=null){
return true;
}
if(path!=null){
var key=path;
if(base!=null){
if(path.indexOf(base)==0){
key=path.substring(base.length);
}
}
if(path.lastIndexOf(".css")==path.length-4){
var resLinks=document.getElementsByTagName("LINK");
for(var i=0;i<resLinks.length;i++){
var cssPath=resLinks[i].href;
var idx=cssPath.lastIndexOf(key);
if(idx!=-1&&idx==cssPath.length-key.length){
return true;
}
}
if(window["css."+id]==true){
return true;
}
}else if(path.lastIndexOf(".js")==path.length-4){
var resScripts=document.getElementsByTagName("SCRIPT");
for(var i=0;i<resScripts.length;i++){
var jsPath=resScripts[i].src;
var idx=jsPath.lastIndexOf(key);
if(idx!=-1&&idx==jsPath.length-key.length){
return true;
}
}
}
}
return false;
};



$CL$.q4T=[];



$CL$.l4T=true;



$CL$.lec=true;



$CL$.bJP=false;




$CL$.next=function(file){

if($CL$.l4T&&$CL$.pkgRefCount!=0
&&file.lastIndexOf("package.js")!=file.length-10
&&!$CL$.isOpera){
var qbs=$CL$.q4T;
qbs[qbs.length]=file;
return;
}


var node=$CL$.p2node["@"+file];
if(node==null){

return;
}

var zs=$CL$.classpathMap["$"+file];
if(zs!=null){
for(var i=0;i<zs.length;i++){
var nm=zs[i];
if(nm!=node.name){
var n=$CL$.fC(nm);
if(n!=null){

if(n.status<2){
n.status=2;
$CL$.uN(n);
}


}else{
n=new $CN$();
n.name=nm;
var pp=$CL$.classpathMap["#"+nm];
if(pp==null){
log(nm);
error("Java2Script implementation error! Please report this bug!");
}

n.path=pp;

$CL$.mpp(n.path,nm,n);
n.status=2;
$CL$.addCCN($CL$.tr,n,-1);
$CL$.uN(n);
}
}
}
}
if(node instanceof Array){


for(var i=0;i<node.length;i++){
if(node[i].status<2){
node[i].status=2;

$CL$.uN(node[i]);
}
}
}else{
if(node.status<2){
var stillLoading=false;
var ss=document.getElementsByTagName("SCRIPT");
for(var i=0;i<ss.length;i++){
if($CL$.isIE){
if(ss[i].onreadystatechange!=null&&ss[i].onreadystatechange.path==node.path
&&ss[i].readyState=="interactive"){
stillLoading=true;
break;
}
}else{
if(ss[i].onload!=null&&ss[i].onload.path==node.path){
stillLoading=true;
break;
}
}
}
if(!stillLoading){
node.status=2;
$CL$.uN(node);
}
}
}

if(!$CL$.keepOnLoading){
return;
}

var loadFurther=false;
var n=$CL$.fNM($CL$.tr,
1);

if(n!=null){

$CL$.lCN(n);
while($CL$.ilt<$CL$.maxLoadingThreads){
var nn=$CL$.fNM($CL$.tr,
1);
if(nn==null)break;
$CL$.lCN(nn);
}
}else{
var cq=$CL$.cq;
if(cq.length!=0){

n=cq[0];



for(var i=0;i<cq.length-1;i++){
cq[i]=cq[i+1];
}
cq.length--;

if(!$CL$.ls[n.path]||cq.length!=0
||!$CL$.lec
||(n.sm!=null&&n.sm.length!=0)
||(n.optionals!=null&&n.optionals.length!=0)){
$CL$.addCCN($CL$.tr,n,1);
$CL$.xrpt(n.path);
}else{
if($CL$.lec){

$CL$.lec=false;
}



}
}else{

n=$CL$.fNO(1);
if(n!=null){

$CL$.lCN(n);
while($CL$.ilt<$CL$.maxLoadingThreads){
var nn=$CL$.fNO(1);

if(nn==null)break;
$CL$.lCN(nn);
}
}else{
loadFurther=true;
}
}
}

if(loadFurther&&$CL$.ilt==0){

while((n=$CL$.fNM($CL$.tr,2))!=null){
$CL$.uN(n);
}
var lastNode=null;
while((n=$CL$.fNO(2))!=null){
if(lastNode===n){
n.status=5;
}
$CL$.uN(n);
lastNode=n;
}
while(true){
$CL$.tracks=new Array();
if(!$CL$.checkOptionalCycle($CL$.tr)){
break;
}
}
lastNode=null;
while((n=$CL$.fNM($CL$.tr,4))!=null){
if(lastNode===n)break;
$CL$.uN(n);
lastNode=n;
}
lastNode=null;
while((n=$CL$.fNO(4))!=null){
if(lastNode===n)break;
$CL$.uN(n);
lastNode=n;
}
var dList=[];
while((n=$CL$.fNM($CL$.tr,4))!=null){
dList[dList.length]=n;
n.status=5;
}
while((n=$CL$.fNO(4))!=null){
dList[dList.length]=n;
n.status=5;
}
for(var i=0;i<dList.length;i++){

$CL$.dCN(dList[i]);
}
for(var i=0;i<dList.length;i++){
var optLoaded=dList[i].oled;
if(optLoaded!=null){
dList[i].oled=null;

optLoaded();
}
}


$CL$.globalLoaded();

}
};

$CL$.tracks=new Array();



$CL$.checkOptionalCycle=function(node){
var ts=$CL$.tracks;
var length=ts.length;
var cycleFound=-1;
for(var i=0;i<ts.length;i++){
if(ts[i]===node&&ts[i].status>=4){

cycleFound=i;
break;
}
}
ts[ts.length]=node;
if(cycleFound!=-1){

for(var i=cycleFound;i<ts.length;i++){
ts[i].status=5;

$CL$.dCN(ts[i]);
for(var k=0;k<ts[i].sp.length;k++){

$CL$.uN(ts[i].sp[k]);
}
ts[i].sp=new Array();
var optLoaded=ts[i].oled;
if(optLoaded!=null){
ts[i].oled=null;


optLoaded();
}
}
ts.length=0;
return true;
}
for(var i=0;i<node.sm.length;i++){
if(node.sm[i].status==4){
if($CL$.checkOptionalCycle(node.sm[i])){
return true;
}
}
}
for(var i=0;i<node.optionals.length;i++){
if(node.optionals[i].status==4){
if($CL$.checkOptionalCycle(node.optionals[i])){
return true;
}
}
}
ts.length=length;
return false;
};




$CL$.uN=function(node){
if(node.name==null
||node.status>=5){
$CL$.dCN(node);
return;
}
var mOK=false;
if(node.sm==null||node.sm.length==0
||node.dcl==null){

mOK=true;
}else{

mOK=true;
var mustLength=node.sm.length;
for(var i=mustLength-1;i>=0;i--){

var n=node.sm[i];
if(n.status<4){
if($CL$.isClassDefined(n.name)){
var nns=new Array();
n.status=5;

$CL$.dCN(n);

if(n.dcl!=null
&&n.dcl.clazzList!=null){
var list=n.dcl.clazzList;
for(var j=0;j<list.length;j++){
var nn=$CL$.fC(list[j]);
if(nn.status!=5
&&nn!==n){
nn.status=n.status;
nn.dcl=null;


$CL$.dCN(nn);
if(nn.oled!=null){
nns[nns.length]=nn;
}
}
}
n.dcl=null;
}
if(n.oled!=null){
nns[nns.length]=n;
}
for(var j=0;j<nns.length;j++){
var optLoaded=nns[j].oled;
if(optLoaded!=null){
nns[j].oled=null;

optLoaded();
}
}
}else{
if(n.status==2){

$CL$.uN(n);
}
if(n.status<4){
mOK=false;
}
}

if(node.sm.length!=mustLength){

mustLength=node.sm.length;
i=mustLength;
mOK=true;
}
}
}
}

if(mOK){
if(node.status<4){
var decl=node.dcl;
if(decl!=null){
if(decl.executed==false){
decl();
decl.executed=true;
}else{
decl();
}
}
node.status=4;
if($CL$.dC!=null){
$CL$.dC[node.name]=true;
}
$CL$.scriptInited(node.path);

if(node.dcl!=null
&&node.dcl.clazzList!=null){
var list=node.dcl.clazzList;
for(var j=0;j<list.length;j++){
var nn=$CL$.fC(list[j]);
if(nn.status!=4
&&nn!==node){
nn.status=4;
if($CL$.dC!=null){
$CL$.dC[nn.name]=true;
}
$CL$.scriptInited(nn.path);
}
}
}
}
var level=4;
var oOK=false;
if(((node.optionals==null||node.optionals.length==0)
&&(node.sm==null||node.sm.length==0))
||(node.status>1
&&node.dcl==null)){
oOK=true;
}else{
oOK=true;
for(var i=0;i<node.sm.length;i++){
var n=node.sm[i];
if(n.status<5){
oOK=false;
break;
}
}
if(oOK){
for(var i=0;i<node.optionals.length;i++){
var n=node.optionals[i];
if(n.status<5){
oOK=false;
break;
}
}
}
}
if(oOK){
level=5;
node.status=level;
$CL$.scriptCompleted(node.path);
var optLoaded=node.oled;
if(optLoaded!=null){
node.oled=null;

optLoaded();
if(!$CL$.keepOnLoading){
return false;
}
}
$CL$.dCN(node);

if(node.dcl!=null
&&node.dcl.clazzList!=null){
var list=node.dcl.clazzList;
for(var j=0;j<list.length;j++){
var nn=$CL$.fC(list[j]);
if(nn.status!=level&&nn!==node){
nn.status=level;
nn.dcl=null;
$CL$.scriptCompleted(nn.path);
var optLoaded=nn.oled;
if(optLoaded!=null){
nn.oled=null;

optLoaded();
if(!$CL$.keepOnLoading){
return false;
}
}
$CL$.dCN(node);
}
}
}
}
$CL$.uP(node,level);
}
};



$CL$.uP=function(node,level){
if(node.sp==null||node.sp.length==0){
return;
}
for(var i=0;i<node.sp.length;i++){
var p=node.sp[i];
if(p.status>=level){
continue;
}
$CL$.uN(p);
}
if(level==5){
node.sp=new Array();
}
};



$CL$.fNM=function(node,status){
if(node!=null){

if(node.sm!=null&&node.sm.length!=0){
for(var i=0;i<node.sm.length;i++){
var n=node.sm[i];
if(n.status==status&&(status!=1
||$CL$.ls[n.path]!=true)
&&(status==4
||!$CL$.isClassDefined(n.name))){
return n;
}else{
var nn=$CL$.fNM(n,status);
if(nn!=null){
return nn;
}
}
}
}
if(node.status==status&&(status!=1
||$CL$.ls[node.path]!=true)
&&(status==4
||!$CL$.isClassDefined(node.name))){
return node;
}
}
return null;
};




$CL$.Rms={};
$CL$.Rms["r"+0.13412]=0.13412;



$CL$.fNO=function(status){
var rnd=0;
while(true){
rnd=Math.random();
var s="r"+rnd;
if($CL$.Rms[s]!=rnd){
$CL$.Rms[s]=rnd;
break;
}
}
$CL$.tr.random=rnd;
var node=$CL$.tr;
return $CL$.fNNO(node,status);
};



$CL$.fNNO=function(node,status){
var rnd=$CL$.tr.random;

if(node.sm!=null&&node.sm.length!=0){
var n=$CL$.searchClassArray(node.sm,rnd,status);
if(n!=null&&(status!=1
||$CL$.ls[n.path]!=true)
&&(status==4
||!$CL$.isClassDefined(n.name))){
return n;
}
}

if(node.optionals!=null&&node.optionals.length!=0){
var n=$CL$.searchClassArray(node.optionals,rnd,status);
if(n!=null&&(status!=1
||$CL$.ls[n.path]!=true)
&&(status==4
||!$CL$.isClassDefined(n.name))){
return n;
}
}

if(node.status==status&&(status!=1
||$CL$.ls[node.path]!=true)
&&(status==4
||!$CL$.isClassDefined(node.name))){
return node;
}
return null;
};


$CL$.searchClassArray=function(arr,rnd,status){
for(var i=0;i<arr.length;i++){
var n=arr[i];
if(n.status==status&&(status!=1
||$CL$.ls[n.path]!=true)
&&(status==4
||!$CL$.isClassDefined(n.name))){
return n;
}else{
if(n.random==rnd){
continue;
}
n.random=rnd;
var nn=$CL$.fNNO(n,status);
if(nn!=null){
return nn;
}
}
}
return null;
};




$CL$.ilss=new Object();




$CL$.itst=null;



$CL$.needOnloadCheck=false;



$CL$.checkInteractive=function(){

if(!$CL$.needOnloadCheck){
return;
}
var is=$CL$.itst;
if(is!=null&&is.readyState=="interactive"){
return;
}
$CL$.itst=null;
var ss=document.getElementsByTagName("SCRIPT");
for(var i=0;i<ss.length;i++){
if(ss[i].readyState=="interactive"
&&ss[i].onreadystatechange!=null){
$CL$.itst=ss[i];
$CL$.ilss[ss[i].src]=true;
}else if($CL$.isOpera){
if(ss[i].readyState=="loaded"
&&ss[i].src!=null&&ss[i].src.length!=0){
$CL$.ilss[ss[i].src]=true;
}
}
}
};



$CL$.load=function(sm,clazz,optionals,dcl){

$CL$.checkInteractive();

if(clazz instanceof Array){
$CL$.unwrapArray(clazz);
for(var i=0;i<clazz.length;i++){
$CL$.load(sm,clazz[i],optionals,dcl,clazz);
}
return;
}
if(clazz.charAt(0)=='$'){
clazz="org.eclipse.s"+clazz.substring(1);
}

var node=$CL$.p2node["#"+clazz];
if(node==null){
var n=$CL$.fC(clazz);
if(n!=null){
node=n;
}else{
node=new $CN$();
}


node.name=clazz;
var pp=$CL$.classpathMap["#"+clazz];
if(pp==null){
log(clazz);
error("Java2Script implementation error! Please report this bug!");
}

node.path=pp;

$CL$.mpp(node.path,clazz,node);
node.status=1;
$CL$.addCCN($CL$.tr,node,-1);




}

if(sm!=null&&sm.length!=0){
$CL$.unwrapArray(sm);
for(var i=0;i<sm.length;i++){
var name=sm[i];
if(name==null||name.length==0){
continue;
}
var n=$CL$.fC(name);
if($CL$.isClassDefined(name)
||$CL$.isEx(name)){
if(n!=null
&&n.status!=5){
$CL$.addCCN(node,n,1);
}
continue;
}

if(n==null){
n=new $CN$();
n.name=sm[i];
n.status=1;
$CL$.addCCN(node,n,1);
}else{
if(n.status!=5){
$CL$.addCCN(node,n,1);
}
}
}
}



if(arguments.length==5&&dcl!=null){
dcl.status=node.status;
dcl.clazzList=arguments[4];
}
node.dcl=dcl;
if(dcl!=null){
node.status=2;
}


if(optionals!=null&&optionals.length!=0){
$CL$.unwrapArray(optionals);
for(var i=0;i<optionals.length;i++){
var name=optionals[i];
if(name==null||name.length==0){
continue;
}
var n=$CL$.fC(name);
if($CL$.isClassDefined(name)
||$CL$.isEx(name)){
if(n!=null
&&n.status!=5){
$CL$.addCCN(node,n,-1);
}
continue;
}

if(n==null){
n=new $CN$();
n.name=optionals[i];
n.status=1;
$CL$.addCCN(node,n,-1);
}else{
if(n.status!=5){
$CL$.addCCN(node,n,-1);
}
}
}
}
};


if(window["Clazz"]!=null){
Clazz.load=$CL$.load;
if(window["$_L"]!=null){
$_L=Clazz.load;
}
}




$CL$.fC=function(clazzName){
var rnd=0;
while(true){
rnd=Math.random();
var s="r"+rnd;
if($CL$.Rms[s]!=rnd){
$CL$.Rms[s]=rnd;
break;
}
}
$CL$.tr.random=rnd;
return $CL$.fCU(clazzName,
$CL$.tr);
};



$CL$.fCU=function(clazzName,node){
var rnd=$CL$.tr.random;
if(node.name==clazzName){
return node;
}

for(var i=0;i<node.sm.length;i++){
var n=node.sm[i];
if(n.name==clazzName){
return n;
}
if(n.random==rnd){
continue;
}
n.random=rnd;
var nn=$CL$.fCU(clazzName,n);
if(nn!=null){
return nn;
}
}

for(var i=0;i<node.optionals.length;i++){
var n=node.optionals[i];
if(n.name==clazzName){
return n;
}
if(n.random==rnd){
continue;
}
n.random=rnd;
var nn=$CL$.fCU(clazzName,n);
if(nn!=null){
return nn;
}
}
return null;
};




$CL$.mpp=function(path,name,node){
var map=$CL$.p2node;
var keyPath="@"+path;
var v=map[keyPath];
if(v!=null){
if(v instanceof Array){
var existed=false;
for(var i=0;i<v.length;i++){
if(v[i].name==name){
existed=true;
break;
}
}
if(!existed){
v[v.length]=node;
}
}else{
var arr=new Array();
arr[0]=v;
arr[1]=node;
map[keyPath]=arr;
}
}else{
map[keyPath]=node;
}
map["#"+name]=node;
};



$CL$.lCN=function(node){
var name=node.name;
if(!$CL$.isClassDefined(name)
&&!$CL$.isEx(name)){
var path=$CL$.getClasspathFor(name);
node.path=path;
$CL$.mpp(path,name,node);
if(!$CL$.ls[path]){
$CL$.xrpt(path);
return true;
}
}
return false;
};



$CL$.runtimeKeyClass="java.lang.String";



$CL$.queueBe4KeyClazz=new Array();




$CL$.getJLB=function(){
var o=window["j2s.lib"];
if(o!=null){
if(o.base==null){
o.base="http://archive.java2script.org/";
}
return o.base+(o.alias?o.alias:(o.version?o.version:"1.0.0"))+"/";
}
var ss=document.getElementsByTagName("SCRIPT");
for(var i=0;i<ss.length;i++){
var src=ss[i].src;
var idx=src.indexOf("j2slib.z.js");
if(idx!=-1){
return src.substring(0,idx);
}
idx=src.indexOf("j2slibcore.z.js");
if(idx!=-1){
return src.substring(0,idx);
}
var base=$CL$.classpathMap["@java"];
if(base!=null){
return base;
}
idx=src.indexOf("java/lang/ClassLoader.js");
if(idx!=-1){
return src.substring(0,idx);
}
}
return null;
};



$CL$.JLB=null;

$CL$.fgLB=function(){
if($CL$.JLB==null){
$CL$.JLB=$CL$.getJLB();
}
return $CL$.JLB;
};




$CL$.acp=function(pkg){
var r=window[pkg+".registered"];
if(r!=false&&r!=true&&$CL$.classpathMap["@"+pkg]==null){
window[pkg+".registered"]=false;
var base=$CL$.fgLB();
if(base==null){
base="http://archive.java2script.org/1.0.0/";
}
$CL$.packageClasspath(pkg,base,true);
}
};



$CL$.loadClass=function(name,oled,forced,async){
if(typeof oled=="boolean"){
return Clazz.evalType(name);
}


$CL$.acp("java");
var swtPkg="org.eclipse.swt";
if(name.indexOf(swtPkg)==0||name.indexOf("$wt")==0){
$CL$.acp(swtPkg);
}
if(name.indexOf("junit")==0){
$CL$.acp("junit");
}


$CL$.keepOnLoading=true;
if(!forced&&(($CL$.pkgRefCount!=0
&&name.lastIndexOf(".package")!=name.length-8)
||(!$CL$.isClassDefined($CL$.runtimeKeyClass)
&&name.indexOf("java.")!=0))){
var qbs=$CL$.queueBe4KeyClazz;
qbs[qbs.length]=[name,oled];
return;
}
if(!$CL$.isClassDefined(name)
&&!$CL$.isEx(name)){
var path=$CL$.getClasspathFor(name);
var existed=$CL$.ls[path];
var existedItem=null;
var qq=$CL$.cq;
if(!existed){
for(var i=qq.length-1;i>=0;i--){
if(qq[i].path==path||qq[i].name==name){
existed=true;
existedItem=qq[i];
}
}
}
var n=null;
var checked=false;
if(existed&&oled!=null){
n=$CL$.fC(name);
checked=true;
if(n==null){
existed=false;
}
}
if(!existed){
if(Clazz.unloadedClasses[name]!=null&&!checked){
n=$CL$.fC(name);
}
if(n==null){
n=new $CN$();
}
n.name=name;
n.path=path;
$CL$.mpp(path,name,n);
n.oled=oled;
n.status=1;

var nQ=false;


for(var i=qq.length-1;i>=0;i--){
if(qq[i].status!=5){
nQ=true;
break;
}
}
if(path.lastIndexOf("package.js")==path.length-10){

var inserted=false;
for(var i=qq.length-1;i>=0;i--){
var itemName=qq[i].name;
if(itemName.lastIndexOf("package.js")==itemName.length-10){
qq[i+1]=n;
inserted=true;
break;
}
qq[i+1]=qq[i];
}
if(!inserted){
qq[0]=n;
}
}else if(nQ){
qq[qq.length]=n;
}
if(!nQ){

var bkECL=false;
if(oled!=null){
bkECL=$CL$.lec;
$CL$.lec=true;
}
$CL$.addCCN($CL$.tr,n,1);
if(!$CL$.ls[n.path]){
$CL$.xrpt(n.path);
}
if(oled!=null){
$CL$.lec=bkECL;
}
}
}else if(oled!=null){
if(!checked){
n=$CL$.fC(name);
}
if(n!=null){
if(n.oled==null){
n.oled=oled;
}else if(oled!=n.oled){
n.oled=(function(oF,nF){
return function(){
oF();
nF();
};
})(n.oled,oled);
}
}else if(existedItem!=null){
if(existedItem[1]==null){
existedItem[1]=oled;
}else if(oled!=existedItem[1]){
existedItem[1]=(function(oF,nF){
return function(){
oF();
nF();
};
})(existedItem[1],oled);
}
}
}
}else if(oled!=null&&$CL$.isClassDefined(name)){
var nn=$CL$.fC(name);
if(nn==null||nn.status>=5){

if(async){
window.setTimeout(oled,25);
}else{
oled();
}
}
}

};



$w$=$CL$.loadJ2SApp=function(clazz,args,loaded){
if(clazz==null){
return;
}
var clazzStr=clazz;
if(clazz.charAt(0)=='$'){
clazzStr="org.eclipse.s"+clazz.substring(1);
}
var idx=-1;
if((idx=clazzStr.indexOf("@"))!=-1){
var path=clazzStr.substring(idx+1);
$CL$.setPrimaryFolder(path);
clazzStr=clazzStr.substring(0,idx);
idx=clazzStr.lastIndexOf(".");
if(idx!=-1){
var pkgName=clazzStr.substring(0,idx);
$CL$.packageClasspath(pkgName,path);
}
}
var agmts=args;
if(agmts==null||!(agmts instanceof Array)){
agmts=[];
}
var afterLoaded=loaded;
if(afterLoaded==null){
afterLoaded=(function(clazzName,argv){
return function(){
Clazz.evalType(clazzName).main(argv);
};
})(clazzStr,agmts);
}else{
afterLoaded=loaded(clazzStr,agmts);
}
$CL$.loadClass(clazzStr,afterLoaded);
};


$u$=$CL$.loadJUnit=function(clazz,args){
var afterLoaded=function(clazzName,argv){
return function(){
$CL$.loadClass("junit.textui.TestRunner",function(){
junit.textui.TestRunner.run(Clazz.evalType(clazzName));
});
};
};
$CL$.loadJ2SApp(clazz,args,afterLoaded);
};


$CL$.runtimeLoaded=function(){
if($CL$.pkgRefCount!=0
||!$CL$.isClassDefined($CL$.runtimeKeyClass)){
return;
}
var qbs=$CL$.queueBe4KeyClazz;
for(var i=0;i<qbs.length;i++){
$CL$.loadClass(qbs[i][0],qbs[i][1]);
}
$CL$.queueBe4KeyClazz=[];


};



$CL$.loadZJar=function(zjarPath,keyClazz){
var keyClass=keyClazz;
var isArr=(keyClazz instanceof Array);
if(isArr){
keyClass=keyClazz[keyClazz.length-1];
}
$CL$.jarClasspath(zjarPath,isArr?keyClazz
:[keyClazz]);
if(keyClazz==$CL$.runtimeKeyClass){
$CL$.loadClass(keyClass,$CL$.runtimeLoaded,true);
}else{
$CL$.loadClass(keyClass,null,true);
}
};




$CL$.addCCN=function(parent,child,type){
var existed=false;
var arr=null;
if(type==1){
arr=parent.sm;
}else{
arr=parent.optionals;
}
for(var i=0;i<arr.length;i++){
if(arr[i].name==child.name){
existed=true;
break;
}
}
if(!existed){



arr[arr.length]=child;
var swtPkg="org.eclipse.swt";
if(child.name.indexOf(swtPkg)==0
||child.name.indexOf("$wt")==0){
window["swt.lazy.loading.callback"]=$CL$.swtLazyLoading;
$CL$.acp(swtPkg);
}
if($CL$.lec
&&child.name.indexOf("java")!=0
&&child.name.indexOf("net.sf.j2s.ajax")!=0){
if($CL$.bJP){
$CL$.lec=false;
}
$CL$.bJP=true;
}

}
existed=false;
for(var i=0;i<child.sp.length;i++){
if(child.sp[i].name==parent.name){
existed=true;
break;
}
}
if(!existed&&parent.name!=null&&parent!=$CL$.tr
&&parent!=child){
child.sp[child.sp.length]=parent;
}
};



$CL$.swtLazyLoading=function(){
$CL$.l4T=false;
var qbs=$CL$.q4T;
for(var i=0;i<qbs.length;i++){
$CL$.next(qbs[i]);
}
$CL$.q4T=[];
};


$CL$.removeFromArray=function(node,arr){
if(arr==null||node==null){
return false;
}

var j=0;
for(var i=0;i<arr.length;i++){
if(!(arr[i]===node)){
if(j<i){
arr[j]=arr[i];
}
j++;
}
}
arr.length=j;
return false;
};



$CL$.dCN=function(node){

var sp=node.sp;
if(sp!=null){
for(var k=0;k<sp.length;k++){
if(!$CL$.removeFromArray(node,sp[k].sm)){
$CL$.removeFromArray(node,sp[k].optionals);
}
}
}

};




$CL$.unloadClassExt=function(Nq){
if($CL$.dC!=null){
$CL$.dC[Nq]=false;
}
if($CL$.classpathMap["#"+Nq]!=null){
var pp=$CL$.classpathMap["#"+Nq];
$CL$.classpathMap["#"+Nq]=null;
var arr=$CL$.classpathMap["$"+pp];
var removed=false;
for(var i=0;i<arr.length;i++){
if(arr[i]==Nq){
for(var j=i;j<arr.length-1;j++){
arr[j]=arr[j+1];
}
arr.length--;
removed=true;
break;
}
}
if(removed){
$CL$.classpathMap["$"+pp]=arr;
}
}
var n=$CL$.fC(Nq);
if(n!=null){
n.status=1;
$CL$.ls[n.path]=false;
}
var path=$CL$.getClasspathFor(Nq);
$CL$.ls[path]=false;
if($CL$.ilss[path]){
$CL$.ilss[path]=false;
}

$CL$.classUnloaded(Nq);
};


$CL$.assureInnerClass=function(clzz,fun){
var clzzName=clzz.__CLASS_NAME__;
if(Clazz.unloadedClasses[clzzName]){
if(clzzName.indexOf("$")!=-1)return;
var list=new Array();
var key=clzzName+"$";
for(var s in Clazz.unloadedClasses){
if(Clazz.unloadedClasses[s]!=null&&s.indexOf(key)==0){
list[list.length]=s;
}
}
if(list.length==0)return;
var funStr=""+fun;
var idx1=funStr.indexOf(key);
if(idx1==-1)return;
var idx2=funStr.indexOf("\"",idx1+key.length);
if(idx2==-1)return;
var anonyClazz=funStr.substring(idx1,idx2);
if(Clazz.unloadedClasses[anonyClazz]==null)return;
var idx3=funStr.indexOf("{",idx2);
if(idx3==-1)return;
idx3++;
var idx4=funStr.indexOf("("+anonyClazz+",",idx3+3);
if(idx4==-1)return;
var idx5=funStr.lastIndexOf("}",idx4-1);
if(idx5==-1)return;
var innerClazzStr=funStr.substring(idx3,idx5);
eval(innerClazzStr);
Clazz.unloadedClasses[anonyClazz]=null;

}
};


$CL$.ltUd=new Date().getTime();

$CL$.ltSI=0;


if($CL$.isChrome){
$CL$.reloadingClasses=new Object();
}



$CL$.updateHotspot=function(){
if(Clazz.assureInnerClass==null){
Clazz.assureInnerClass=$CL$.assureInnerClass;
}
var args=arguments[0];
if(arguments.length!=1||arguments[0]==null){
args=arguments;
}
var length=(args.length-1)/3;
var lastID=0;

var lUd=0;

var tUs=new Array();
for(var i=0;i<length;i++){
var time=args[i*3];
var id=args[i*3+1];
var clazz=args[i*3+2];
if((time>$CL$.ltUd)
||(time==$CL$.ltUd
&&id>$CL$.ltSI)){
tUs[tUs.length]=clazz;
lastID=id;
lUd=time;
}
}
if(tUs.length>0){
$CL$.ltUd=lUd;
$CL$.ltSI=lastID;

var nUC=new Array();
for(var i=0;i<tUs.length;i++){
nUC[i]=Clazz.unloadClass(tUs[i]);
}
for(var i=0;i<tUs.length;i++){
if(nUC[i]){
var clzz=tUs[i];
if($CL$.isChrome){
$CL$.reloadingClasses[$CL$.getClasspathFor(clzz)]=true;
}
$CL$.loadClass(clzz,(function(clazz){
return function(){

Clazz.unloadedClasses[clazz]=null;
$CL$.classReloaded(clazz);
if($CL$.isChrome){
$CL$.reloadingClasses[$CL$.getClasspathFor(clazz)]=false;
}
};
})(clzz));
}
}
}
$CL$.ltJF=false;
};



$CL$.rtSN=function(node){

window.setTimeout(function(){
if(node.readyState!="interactive"){
try{
if(node.parentNode!=null){
node.parentNode.removeChild(node);
}
}catch(e){}
}
node=null;
},1);

if($CL$.htMrTimeout!=null){
window.clearTimeout($CL$.htMrTimeout);
$CL$.htMrTimeout=null;
}
};


$CL$.ltSL=true;

$CL$.hJSt=null;

$CL$.ltJF=false;


$CL$.gHWC=function(){
return function(){
try{
$CL$.ltSL=true;
$CL$.rtSN(this);
}catch(e){};
this.onload=null;
this.onerror=null;
};
};


$CL$.gHIC=function(){
return function(){
var state=""+this.readyState;
if(state=="loaded"||state=="complete"){
try{
$CL$.ltSL=true;
$CL$.rtSN(this);
}catch(e){};
this.onreadystatechange=null;
}
};
};


$CL$.loadHotspotScript=function(hotspotURL,iframeID){
var script=document.createElement("SCRIPT");
script.type="text/javascript";
script.defer=true;
script.src=hotspotURL;
if(typeof(script.onreadystatechange)=="undefined"||!$CL$.isIE){
script.onload=script.onerror=$CL$.gHWC();
}else{
script.onreadystatechange=$CL$.gHIC();
}
var head=document.getElementsByTagName("HEAD")[0];
head.appendChild(script);
};



$CL$.hLTo=function(){
$CL$.ltSL=true;
$CL$.ltJF=false;
};



$CL$.htMr=function(){
if($CL$.ltSL
&&!$CL$.ltJF){
var port=window["j2s.hotspot.port"];
if(port==null){
port=1725;
}
var hotspotURL="http://127.0.0.1:"+port;
if($CL$.ltSI==0){
hotspotURL+="/hotspot.js?"+Math.random();
}else{
hotspotURL+="/"+$CL$.ltSI+".js?"
+Math.random();
}

$CL$.ltJF=true;
$CL$.ltSL=false;

$CL$.loadHotspotScript(hotspotURL);

if($CL$.hJSt!=null){
window.clearTimeout($CL$.hJSt);
$CL$.hJSt=null;
}
$CL$.hJSt=window.setTimeout(
$CL$.hLTo,2000);

}

window.setTimeout($CL$.htMr,2500);
};


window.setTimeout(function(){
var ss=document.getElementsByTagName("SCRIPT");
for(var i=0;i<ss.length;i++){
var src=ss[i].src;
if(src.indexOf("chrome:")!=0&&(src.indexOf("j2slib.z.js")!=-1
||src.indexOf("j2slibcore.z.js")!=-1)){
$CL$.getJLB();
$CL$.RsN(ss[i]);
break;
}
}

if(window["j2s.script.debugging"]==true&&window["j2s.disable.hotspot"]!=true){
window.setTimeout($CL$.htMr,10000);
}
},324);

ClassLoader=$CL$;
}
ClazzLoader=$CL$;



if(window["ClazzLoaderProgressMonitor"]==null){


ClazzLoaderProgressMonitor=ClassLoaderProgressMonitor=new Object();
var clpm=ClassLoaderProgressMonitor;
clpm.fadeOutTimer=null;
clpm.fadeAlpha=0;
clpm.monitorEl=null;
clpm.lastScrollTop=0;
clpm.bindingParent=null;
clpm.DEFAULT_OPACITY=55;
clpm.clearChildren=function(el){
if(el==null)return;
for(var i=el.childNodes.length-1;i>=0;i--){
var child=el.childNodes[i];
if(child==null)continue;
if(child.childNodes!=null&&child.childNodes.length!=0){
this.clearChildren(child);
}
try{
el.removeChild(child);
}catch(e){};
}
};
clpm.setAlpha=function(alpha){
if(this.fadeOutTimer!=null&&alpha==this.DEFAULT_OPACITY){
window.clearTimeout(this.fadeOutTimer);
this.fadeOutTimer=null;
}
this.fadeAlpha=alpha;
var ua=navigator.userAgent.toLowerCase();
if(ua.indexOf("msie")!=-1&&ua.indexOf("opera")==-1){
this.monitorEl.style.filter="Alpha(Opacity="+alpha+")";
}else{
this.monitorEl.style.opacity=alpha/100.0;
}
};
clpm.hiddingOnMouseOver=function(){
this.style.display="none";
};
clpm.attached=false;
clpm.cleanup=function(){
var oThis=ClassLoaderProgressMonitor;
if(oThis.monitorEl!=null){
oThis.monitorEl.onmouseover=null;
}
oThis.monitorEl=null;
oThis.bindingParent=null;
Clazz.removeEvent(window,"unload",oThis.cleanup);

oThis.attached=false;
};
clpm.createHandle=function(){
var div=document.createElement("DIV");
div.id="clazzloader-status";
div.style.cssText="position:absolute;bottom:4px;left:4px;padding:2px 8px;"
+"z-index:3333;background-color:#8e0000;color:yellow;"
+"font-family:Arial, sans-serif;font-size:10pt;white-space:nowrap;";
div.onmouseover=this.hiddingOnMouseOver;
this.monitorEl=div;
if(this.bindingParent==null){
document.body.appendChild(div);
}else{
this.bindingParent.appendChild(div);
}
return div;
};
clpm.fadeOut=function(){
if(this.monitorEl.style.display=="none")return;
if(this.fadeAlpha==this.DEFAULT_OPACITY){
this.fadeOutTimer=window.setTimeout(function(){
ClassLoaderProgressMonitor.fadeOut();
},750);
this.fadeAlpha-=5;
}else if(this.fadeAlpha-10>=0){
this.setAlpha(this.fadeAlpha-10);
this.fadeOutTimer=window.setTimeout(function(){
ClassLoaderProgressMonitor.fadeOut();
},40);
}
};
clpm.getFixedOffsetTop=function(){
if(this.bindingParent!=null){
var b=this.bindingParent;
return b.scrollTop;
}
var dua=navigator.userAgent;
var b=document.body;
var p=b.parentNode;
var pcHeight=p.clientHeight;
var bcScrollTop=b.scrollTop+b.offsetTop;
var pcScrollTop=p.scrollTop+p.offsetTop;
if(dua.indexOf("Opera")==-1&&document.all){
return(pcHeight==0)?bcScrollTop:pcScrollTop;
}else if(dua.indexOf("Gecko")!=-1){
return(pcHeight==p.offsetHeight
&&pcHeight==p.scrollHeight)?bcScrollTop:pcScrollTop;
}
return bcScrollTop;
};

clpm.initialize=function(parent){
this.bindingParent=parent;
if(parent!=null&&!this.attached){
this.attached=true;
Clazz.addEvent(window,"unload",this.cleanup);

}
};

clpm.showStatus=function(msg,fading){
if(this.monitorEl==null){
this.createHandle();
if(!this.attached){
this.attached=true;
Clazz.addEvent(window,"unload",this.cleanup);

}
}
this.clearChildren(this.monitorEl);
this.monitorEl.appendChild(document.createTextNode(""+msg));
if(this.monitorEl.style.display=="none"){
this.monitorEl.style.display="";
}
this.setAlpha(this.DEFAULT_OPACITY);
var offTop=this.getFixedOffsetTop();
if(this.lastScrollTop!=offTop){
this.lastScrollTop=offTop;
this.monitorEl.style.bottom=(this.lastScrollTop+4)+"px";
}
if(fading){
this.fadeOut();
}
};
if(window["ClazzLoader"]!=null){
ClazzLoader.scriptLoading=function(file){
ClassLoaderProgressMonitor.showStatus("Loading "+file+"...");
};
ClazzLoader.scriptLoaded=function(file){
ClassLoaderProgressMonitor.showStatus(file+" loaded.",true);
};
ClazzLoader.globalLoaded=function(file){
ClassLoaderProgressMonitor.showStatus("Application loaded.",true);
};
ClazzLoader.classUnloaded=function(clazz){
ClassLoaderProgressMonitor.showStatus("Class "+clazz+" is unloaded.",true);
};
ClazzLoader.classReloaded=function(clazz){
ClassLoaderProgressMonitor.showStatus("Class "+clazz+" is reloaded.",true);
};

var ua=navigator.userAgent.toLowerCase();
if(ua.indexOf("msie")!=-1&&ua.indexOf("opera")==-1){
ClazzLoader.setLoadingMode("script",5);
}
}
}



if(window["C_$"]==null){



C_$={};




C_$.mtl=1000;


C_$.setMaxTotalLines=function(lines){
if(lines<=0){
C_$.mtl=999999;
}else{
C_$.mtl=lines;
}
};




C_$.bi=false;


C_$.enableBuffering=function(enabled){
C_$.bi=enabled;
};



C_$.mbl=20;


C_$.setMaxBufferedLines=function(lines){
if(lines<=0){
C_$.mbl=20;
}else{
C_$.mbl=lines;
}
};



C_$.mlc=40;


C_$.setMaxLatency=function(latency){
if(latency<=0){
C_$.mlc=40;
}else{
C_$.mlc=latency;
}
};



C_$.pi=false;


C_$.enablePinning=function(enabled){
C_$.pi=enabled;
};



C_$.lc=0;



C_$.mbr=false;


C_$.splitNeedFixed="\n".split(/\n/).length!=2;




C_$.slr=function(s){
var arr=new Array();
var i=0;
var last=-1;
while(true){
i=s.indexOf('\r',last+1);
if(i!=-1){
arr[arr.length]=s.substring(last+1,i);
last=i;
if(last+1==s.length){
arr[arr.length]="";
break;
}
}else{
arr[arr.length]=s.substring(last+1);
break;
}
}
return arr;
};




C_$.sil=function(s){
var arr=new Array();
if(s==null){
return arr;
}
var i=0;
var last=-1;
while(true){
i=s.indexOf('\n',last+1);
var str=null;
if(i!=-1){
if(i>0&&s.charAt(i-1)=='\r'){
str=s.substring(last+1,i-1);
}else{
str=s.substring(last+1,i);
}
last=i;
}else{
str=s.substring(last+1);
}
var rArr=C_$.slr(str);
for(var k=0;k<rArr.length;k++){
arr[arr.length]=rArr[k];
}
if(i==-1){
break;
}else if(last+1==s.length){
arr[arr.length]="";
break;
}
}
return arr;
};




C_$.cB=new Array();



C_$.oT=new Date().getTime();



C_$.lct=0;



C_$.li=function(){
if(C_$.cB.length==0){
return;
}
var console=document.getElementById("_console_");;
if(console==null){
if(document.body==null){
if(C_$.lct==0){
C_$.lct=window.setTimeout(
"C_$.li ();",C_$.mlc);
}
return;
}
}
C_$.cot();
};



C_$.createC_$Window=function(parentEl){
var console=document.createElement("DIV");
console.style.cssText="font-family:monospace, Arial, sans-serif;";
document.body.appendChild(console);
return console;
};



C_$.cot=function(s,color,bed){
var console=document.getElementById("_console_");;
if(console==null){
if(document.body==null){
C_$.cB[C_$.cB.length]={
message:s,
color:color
};
if(C_$.lct==0){
C_$.lct=window.setTimeout(
"C_$.li ();",C_$.mlc);
}
return false;
}else{
console=C_$.createC_$Window();
console.id="_console_";
}
}

if(C_$.bi&&!bed&&
C_$.cB.length<C_$.mbl&&
new Date().getTime()-C_$.oT<
C_$.mlc){
C_$.cB[C_$.cB.length]={
message:s,
color:color
};
if(C_$.lct==0){
C_$.lct=window.setTimeout(
"C_$.li ();",C_$.mlc);
}
return false;
}

if(C_$.bi&&bed&&C_$.lct!=0){
window.clearTimeout(C_$.lct);
C_$.lct=0;
}

if(!bed&&C_$.cB.length!=0){
for(var i=0;i<C_$.cB.length;i++){
var o=C_$.cB[i];
C_$.cot(o.message,o.color,true);
}
C_$.cB=new Array();
}
if(C_$.lc>C_$.mtl){
for(var i=0;i<C_$.lc-C_$.mtl;i++){
if(console!=null&&console.childNodes.length>0){
console.removeChild(console.childNodes[0]);
}
}
C_$.lc=C_$.mtl;
}


var wbr=false;
if(typeof s=="undefined"){
s="";
}else if(s==null){
s="null";
}else{
s=""+s;
}
if(s.length>0){

var lc=s.charAt(s.length-1);
if(lc=='\n'){
if(s.length>1){
var preLastChar=s.charAt(s.length-2);
if(preLastChar=='\r'){
s=s.substring(0,s.length-2);
}else{
s=s.substring(0,s.length-1);
}
}else{
s="";
}
wbr=true;
}else if(lc=='\r'){
s=s.substring(0,s.length-1);
wbr=true;
}
}

var lines=null;
var c160=String.fromCharCode(160);
s=s.replace(/\t/g,c160+c160+c160+c160+
c160+c160+c160+c160);
if(C_$.splitNeedFixed){
try{
lines=C_$.sil(s);
}catch(e){
window.popup(e.message);
}
}else{
lines=s.split(/\r\n|\r|\n/g);
}
for(var i=0;i<lines.length;i++){

var lE=null;
if(C_$.mbr||C_$.lc==0
||console.childNodes.length<1){
lE=document.createElement("DIV");
console.appendChild(lE);
lE.style.whiteSpace="nowrap";
C_$.lc++;
}else{
try{
lE=console.childNodes[console.childNodes.length-1];
}catch(e){
lE=document.createElement("DIV");
console.appendChild(lE);
lE.style.whiteSpace="nowrap";
C_$.lc++;
}
}
var el=document.createElement("SPAN");
lE.appendChild(el);
el.style.whiteSpace="nowrap";
if(color!=null){
el.style.color=color;
}
if(lines[i].length==0){
lines[i]=String.fromCharCode(160);

}
el.appendChild(document.createTextNode(lines[i]));
if(!C_$.pi){
console.scrollTop+=100;
}

if(i!=lines.length-1){
C_$.mbr=true;
}else{
C_$.mbr=wbr;
}
}

var cssClazzName=console.parentNode.className;
if(!C_$.pi&&cssClazzName!=null
&&cssClazzName.indexOf("composite")!=-1){
console.parentNode.scrollTop=console.parentNode.scrollHeight;
}
C_$.oT=new Date().getTime();
};



C_$.clear=function(){
C_$.mbr=true;
var console=document.getElementById("_console_");;
if(console==null){
if(document.body==null){
C_$.cB=[];
}
return;
}
C_$.cB=[];
var childNodes=console.childNodes;
for(var i=childNodes.length-1;i>=0;i--){
console.removeChild(childNodes[i]);
}
C_$.lc=0;
};



window.popup=window.alert;


window.alert=function(s){
C_$.cot(s+"\r\n");
};


window.error=function(s){
C_$.cot(s+"\r\n","red");
};


window.log=function(s){
C_$.cot(s+"\r\n","blue");
};



window.assert=function(){
var b=true;
if(arguments.length==1){
b=arguments[0];
}else if(arguments.length==2){
var x1=arguments[0];
var x2=arguments[1];
b=(x1==x2);
}else{
var x1=arguments[0];
var x2=arguments[1];
var delta=arguments[2];
b=Math.abs(x1-x2)<Math.abs(delta);
}
if(b){
C_$.cot("Passed\r\n","green");
}else{

if(arguments.length>=2){
C_$.cot("Failed: expecting "+arguments[1]
+", but "+arguments[0]+" !\r\n","red");
}else{
C_$.cot("Failed\r\n","red");
}
}
};




System=new JavaObject();

System.currentTimeMillis=function(){
return new Date().getTime();
};


System.arraycopy=function(src,srcPos,dest,destPos,length){
if(src!=dest){
for(var i=0;i<length;i++){
dest[destPos+i]=src[srcPos+i];
}
}else{
var swap=[];
for(var i=0;i<length;i++){
swap[i]=src[srcPos+i];
}
for(var i=0;i<length;i++){
dest[destPos+i]=swap[i];
}
}
};

System.props=null;
System.getProperties=function(){
return System.props;
};
System.getProperty=function(key,def){
if(System.props!=null){
return System.props.getProperty(key,def);
}
if(def!=null){
return def;
}
return key;
};
System.setProperties=function(props){
System.props=props;
};
System.setProperty=function(key,val){
if(System.props==null){
return;
}
System.props.setProperty(key,val);
};


System.out=new JavaObject();
System.out.__CLASS_NAME__="java.io.PrintStream";


System.out.print=function(s){
C_$.cot(s);
};


System.out.println=function(s){
if(typeof s=="undefined"){
s="\r\n";
}else if(s==null){
s="null\r\n";
}else{
s=s+"\r\n";
}
C_$.cot(s);
};


System.err=new JavaObject();
System.err.__CLASS_NAME__="java.io.PrintStream";


System.err.print=function(s){
C_$.cot(s,"red");
};


System.err.println=function(s){
if(typeof s=="undefined"){
s="\r\n";
}else if(s==null){
s="null\r\n";
}else{
s=s+"\r\n";
}
C_$.cot(s,"red");
};



System.out.printf=System.err.printf=function(format,args){
if(format==null||format.length==0){
return;
}
var xargs=new Array();
if(arguments.length!=2){
for(var i=1;i<arguments.length;i++){
xargs[i-1]=arguments[i];
}
}else if(arguments[1]instanceof Array){
xargs=arguments[1];
}else{
xargs=[args];
}

var index=0;
var str=format.replace(
/%(\d+\$)?([-#+ 0,\(<]*)?(\d+)?(\.\d+)?([tT])?([a-zA-Z%])/g,
function($0,$1,$2,$3,$4,$5,$6){
var o=null;
if($1!=null&&$1.length!=0){
var i=parseInt($1)-1;
o=xargs[i];
}else if($2!=null&&$2.length!=0){
o=xargs[index-1];
}else if($5!=null&&$5.length!=0){
o=this.formatTime(xargs[index],$6);
index++;
}else if($6=="n"){
o="\r\n";
}else if($6=="%"){
o="%";
}else{
o=xargs[index];
index++;
}
return o.toString();
});
this.print(str);
};


System.out.formatTime=System.err.formatTime=function(t,p){
var o=t;
if(p=="H"){
o=""+t.getHours();
if(o.lenght<2){
o="0"+o;
}
}else if(p=="I"){
o=""+(t.getHours()%12);
if(o.lenght<2){
o="0"+o;
}
}else if(p=="k"){
o=""+t.getHours();
}else if(p=="l"){
o=""+(t.getHours()%12);
}else if(p=="M"){
o=""+t.getMinutes();
if(o.lenght<2){
o="0"+o;
}
}else if(p=="S"){
o=""+t.getSeconds();
if(o.lenght<2){
o="0"+o;
}
}else if(p=="L"){
o="000";
}else if(p=="N"){
o="000000000";
}else if(p=="k"){
o=(t.getHours()>12)?"pm":"am";
}else if(p=="z"){
o="+0800";

}
return o;
};

}
Console=C_$;

window["java.registered"]=false;

window["java.package.callback"]=function(){
window["java.package.callback"]=null;
ClazzLoader.registerPackages("java",[
"io","lang","lang.annotation","lang.reflect","lang.ref",
"util","util.concurrent","util.concurrent.atomic","util.concurrent.locks",
"util.jar","util.logging","util.prefs","util.regex","util.zip",
"net","text"]);

window["reflect"]=java.lang.reflect;

var base=ClazzLoader.getClasspathFor("java.*");

ClazzLoader.jarClasspath(base+"core.z.js",[
"java.lang.Void",
"$.reflect.AccessibleObject",
"$.AnnotatedElement",
"$.GenericDeclaration",
"$.InvocationHandler",
"$.Member",
"$.Modifier",
"$.Constructor",
"$.Field",
"$.Method",

"java.net.URLEncoder",
"java.net.URLDecoder",

"net.sf.j2s.ajax.HttpRequest",
"$.ARunnable",
"$.AClass",
"$.ASWTClass",

"net.sf.j2s.ajax.IXHRCallback",
"$.XHRCallbackAdapter",
"$.XHRCallbackSWTAdapter",

"$.SimpleSerializable",
"$.SimpleFilter",
"$.SimpleRPCRunnable",
"$.ISimpleRequestInfoBinding",
"$.ISimpleRequestInfo",
"$.ISimpleGeoLocationBinding",
"$.ISimpleGeoLocation",
"$.SimpleRPCRequest",
"$.SimpleRPCSWTRequest",

"$.SimplePipeRunnable",
"$.ISimplePipePriority",
"$.SimplePipeHelper",
"$.SimplePipeRequest",
"$.SimplePipeSWTRequest",

"$.CompoundSerializable",
"$.CompoundPipeSession",
"$.CompoundPipeRunnable",
"$.CompoundPipeRequest",
"$.CompoundPipeSWTRequest",

"net.sf.j2s.store.IStore",
"$.CookieStore",
"$.XSSCookieStore",
"$.HTML5LocalStorage",
"$.SimpleStore"
]);

ClazzLoader.jarClasspath(base+"util/AbstractList.js",[
"java.util.AbstractList",
"java.util.AbstractList.FullListIterator",
"java.util.AbstractList.SimpleListIterator",
"java.util.AbstractList.SubAbstractList",
"java.util.AbstractList.SubAbstractListRandomAccess"
]);

ClazzLoader.jarClasspath(base+"util/MapEntry.js",[
"java.util.MapEntry",
"java.util.MapEntry.Type"
]);

ClazzLoader.jarClasspath(base+"util/Collections.js",[
"java.util.Collections",
"java.util.Collections.CheckedCollection",
"java.util.Collections.CheckedList",
"java.util.Collections.CheckedListIterator",
"java.util.Collections.CheckedMap",
"java.util.Collections.CheckedMap.CheckedEntry",
"java.util.Collections.CheckedMap.CheckedEntrySet",
"java.util.Collections.CheckedMap.CheckedEntrySet.CheckedEntryIterator",
"java.util.Collections.CheckedRandomAccessList",
"java.util.Collections.CheckedSet",
"java.util.Collections.CheckedSortedMap",
"java.util.Collections.CheckedSortedSet",
"java.util.Collections.CopiesList",
"java.util.Collections.EmptyList",
"java.util.Collections.EmptyMap",
"java.util.Collections.EmptySet",
"java.util.Collections.ReverseComparator",
"java.util.Collections.ReverseComparatorWithComparator",
"java.util.Collections.SingletonList",
"java.util.Collections.SingletonMap",
"java.util.Collections.SingletonSet",
"java.util.Collections.SynchronizedCollection",
"java.util.Collections.SynchronizedList",
"java.util.Collections.SynchronizedMap",
"java.util.Collections.SynchronizedRandomAccessList",
"java.util.Collections.SynchronizedSet",
"java.util.Collections.SynchronizedSortedMap",
"java.util.Collections.SynchronizedSortedSet",
"java.util.Collections.UnmodifiableCollection",
"java.util.Collections.UnmodifiableList",
"java.util.Collections.UnmodifiableMap",
"java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet",
"java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet.UnmodifiableMapEntry",
"java.util.Collections.UnmodifiableRandomAccessList",
"java.util.Collections.UnmodifiableSet",
"java.util.Collections.UnmodifiableSortedMap",
"java.util.Collections.UnmodifiableSortedSet"
]);

ClazzLoader.jarClasspath(base+"lang/StringBuilder.z.js",
["java.lang.AbstractStringBuilder","$.StringBuilder"]);

ClazzLoader.jarClasspath(base.substring(0,base.lastIndexOf("java/"))
+"org/apache/harmony/luni/util/Msg.z.js",
["org.apache.harmony.luni.util.Msg","$.MsgHelp"]);


ClazzLoader.loadZJar(base+"core.z.js",ClazzLoader.runtimeKeyClass);
};
if(ClazzLoader.classpathMap["@java"]!=null){
window["java.package.callback"]();
}



window["java.registered"]=true;

window["org.eclipse.swt.registered"]=false;



$WTC$$={};


$WTC$$.cssAlreadyAggregated=false;
$WTC$$.cssForcedUsingFile=false;


$WTC$$.timeouts=new Object();
$WTC$$.triedTimes=new Object();
$WTC$$.cssTestEls=[];

$WTC$$.trackCSS=function(clazzName){
var el=document.createElement("DIV");
el.style.cssText="position:absolute;left:-1000px;top:-100px;font-size:0;display:block;";
var cssID=$WTC$$.getCSSRuleID(clazzName);
el.className=cssID;
if(document.body!=null){
document.body.appendChild(el);
}

var els=$WTC$$.cssTestEls;
for(var i=0;i<els.length;i++){
if(els[i]==el){
return;
}
}
els[els.length]=el;
var f=(function(e,name){
return function(){
$WTC$$.removeTesting(name);
var tts=$WTC$$.triedTimes;
if(tts[e.className]>1){
alert("[Java2Script] Error in loading CSS for "+name+"!");
}else{


var head=document.getElementsByTagName("HEAD")[0];
var links=head.getElementsByTagName("LINK");
for(var i=0;i<links.length;i++){
if(links[i].id=="c$$."+name){
if(window["O$"]!=null&&O$.destroyHandle!=null){
O$.destroyHandle(links[i]);
}else{
head.removeChild(links[i]);
}
break;
}
}
$WTC$$["registerCSS"](name);
}
};
})(el,clazzName);
var handle=window.setTimeout(f,15000);

$WTC$$.timeouts[cssID]=handle;
var tts=$WTC$$.triedTimes;
if(tts[cssID]==null){
tts[cssID]=1;
}else{
tts[cssID]++;
}
if(els.length==1){
$WTC$$.globalChecking();
}
};

$WTC$$.cssLoaded=function(clazzName){};

$WTC$$.globalLoaded=function(){};

$WTC$$.removeTesting=function(clazzName){
var cssClassName=$WTC$$.getCSSRuleID(clazzName);
var els=$WTC$$.cssTestEls;
for(var i=0;i<els.length;i++){
if(els[i].className==cssClassName){
var el=els[i];
if(el.parentNode!=null){
if(window["O$"]!=null&&O$.destroyHandle!=null){
O$.destroyHandle(el);
}else{
el.parentNode.removeChild(el);
}
}
for(var j=i;j<els.length-1;j++){
els[j]=els[j+1];
}
els.length--;
return el;
}
}
return null;
};

$WTC$$.globalChecking=function(){
var els=$WTC$$.cssTestEls;
for(var i=0;i<els.length;i++){
var el=els[i];
var w=Math.max(el.offsetWidth,Math.max(el.clientWidth,el.scrollWidth));
if(w==324){

$WTC$$.cssLoaded(el.className);
window.clearTimeout($WTC$$.timeouts[el.className]);
if(el.parentNode!=null){
if(window["O$"]!=null&&O$.destroyHandle!=null){
O$.destroyHandle(el);
}else{
el.parentNode.removeChild(el);
}
}
for(var j=i;j<els.length-1;j++){
els[j]=els[j+1];
}
els.length--;
}
}
if(els.length!=0){

return window.setTimeout($WTC$$.globalChecking,100);
}else{

$WTC$$.globalLoaded();
}
};


$WTC$$.getCSSRuleID=function(clazzName){
var cssRuleID=null;
if(clazzName.indexOf("org.eclipse.swt.")==0||clazzName.indexOf("$wt.")==0){
var idx=clazzName.indexOf("wt.")+3;
cssRuleID="swt."+clazzName.substring(idx);
}else{
cssRuleID=clazzName;
}
return cssRuleID.toLowerCase().replace(/\./g,'-');
};



$WTC$$["registerCSS"]=function(clazzName,cssText){
var isDebugging=(window["swt.debugging"]==true);
if(isDebugging){
cssText=null;
}
if($WTC$$.cssAlreadyAggregated||window["ClazzLoader"]==null){
return;
}
if(!ClazzLoader.isIE&&clazzName.indexOf(".IE")!=-1){
return;
}
clazzName=ClazzLoader.unwrapArray([clazzName])[0];
var cssPath=null;
var idx=clazzName.indexOf(".IE");
if(idx!=-1){
cssPath=ClazzLoader.getClasspathFor(clazzName.substring(0,idx),false,".IE.css");
}else{
cssPath=ClazzLoader.getClasspathFor(clazzName,false,".css");
}

var basePath=ClazzLoader.getClasspathFor(clazzName,true);
var cssID="c$$."+clazzName;

if(!ClazzLoader.isResourceExisted(clazzName,cssPath,basePath)||document.getElementById(cssID)!=null){
$WTC$$.registeredCSSs[$WTC$$.registeredCSSs.length]=clazzName;
if(window["swt.debugging"]==true||cssText==null||$WTC$$.cssForcedUsingFile){
var cssLink=document.createElement("LINK");
cssLink.rel="stylesheet";
cssLink.id=cssID;
cssLink.href=cssPath;
document.getElementsByTagName("HEAD")[0].appendChild(cssLink);

$WTC$$.trackCSS(clazzName);
}else{
var prefix="";
var idx=cssPath.lastIndexOf("/");
if(idx!=-1){
prefix=cssPath.substring(0,idx+1);
}
if(document.createStyleSheet!=null){




var location=window.location.href.toString();

var idx=location.lastIndexOf("/");
if(idx!=-1&&prefix.indexOf("http:")!=0
&&prefix.indexOf("https:")!=0
&&prefix.indexOf("file:")!=0
&&prefix.indexOf("ftp:")!=0
&&prefix.indexOf("javascript:")!=0){
prefix=location.substring(0,idx+1)+prefix;
}

}
var usingSingleSite=prefix.indexOf("/org/eclipse/swt/")!=-1;
if(!usingSingleSite){
var sites=window["j2s.css.single.site.classes"];
if(sites!=null&&sites.length>0){
for(var k=0;k<sites.length;k++){
var clzz=sites[k];
if(clzz!=null&&clzz.length>0){
var clzzPathKey="/"+clzz.replace(/\./g,"/")+"/";
if(prefix.indexOf(clzzPathKey)!=-1){
usingSingleSite=true;
break;
}
}
}
}
}
if(usingSingleSite){
var length=prefix.length;
if(length>15&&prefix.match(/^http\:\/\/[aeiouy]rchive\..*/)){
prefix="http://archive."+prefix.substring(15);
}else if(length>9&&prefix.match(/^http\:\/\/[aeiouy]\..*/)){
prefix="http://a."+prefix.substring(9);
}
}

cssText=cssText.replace(/((url\s*\(\s*['"])|(src\s*=\s*['"]))(.*)(['"])/ig,

function($0,$1,$2,$3,$4,$5){
if($4.indexOf("/")==0
||$4.indexOf("http:")==0
||$4.indexOf("https:")==0
||$4.indexOf("file:")==0
||$4.indexOf("ftp:")==0
||$4.indexOf("javascript:")==0){
return $0;
}
return $1+prefix+$4+$5;
});
if(document.createStyleSheet!=null){

var sheet=null;
try{
sheet=document.createStyleSheet();
sheet.cssText=cssText;
}catch(e){

var min=0;
var idx=0;
for(var i=0;i<document.styleSheets.length;i++){
var style=document.styleSheets[i];
if(min==0){
min=style.cssText.length;
idx=i;
}else if(min>style.cssText.length){
min=style.cssText.length;
idx=i;
}
}
sheet=document.styleSheets[idx];
sheet.cssText+="\r\n"+cssText;
}

window[cssID]=true;
}else{
var cssStyle=document.createElement("STYLE");
cssStyle.id=cssID;
cssStyle.appendChild(document.createTextNode(cssText));
document.getElementsByTagName("HEAD")[0].appendChild(cssStyle);
}
}


var len=$WTC$$.themes.length;
for(var i=0;i<len;i++){
var themeName=$WTC$$.themes[i];
var themePath=$WTC$$.themePaths[themeName]+"/"+clazzName.replace(/\./g,"/")+".css";
var cssLink=document.createElement("LINK");
cssLink.rel="stylesheet";
cssLink.id=cssID+themeName;
cssLink.href=themePath;
document.getElementsByTagName("HEAD")[0].appendChild(cssLink);

}
}
};


$WTC$$.themes=new Array();
$WTC$$.themePaths=new Object();
$WTC$$.registeredCSSs=new Array();

$WTC$$.registerTheme=function(themeName,themePath){
$WTC$$.themes[$WTC$$.themes.length]=themeName;
$WTC$$.themePaths[themeName]=themePath;

var len=$WTC$$.registeredCSSs.length;
var cssID="c$$."+clazzName;

for(var i=0;i<len;i++){
var clazzName=$WTC$$.registeredCSSs[i];
var cssPath=themePath+"/"+clazzName.replace(/\./g,"/")+".css";
var cssLink=document.createElement("LINK");
cssLink.rel="stylesheet";
cssLink.id=cssID+themeName;
cssLink.href=cssPath;
document.getElementsByTagName("HEAD")[0].appendChild(cssLink);
}

};

Clazz.declarePackage("org.eclipse.swt");
$wt=org.eclipse.swt;

window["org.eclipse.swt.package.callback"]=function(){
window["org.eclipse.swt.package.callback"]=null;
ClazzLoader.registerPackages("org.eclipse.swt",[
"accessibility",
"browser",
"custom",
"dnd",
"events",
"graphics",
"internal",
"internal.dnd",
"internal.browser",
"internal.struct",
"layout",
"printing",
"program",
"widgets"]);

var path=ClazzLoader.getClasspathFor("org.eclipse.swt.*");

var isDebugging=(window["swt.debugging"]==true);
if(!isDebugging){
ClazzLoader.jarClasspath(path+"basic.z.js",[
"org.eclipse.swt.internal.SWTEventListener",
"$.SWTEventObject",
"org.eclipse.swt.widgets.Event",
"org.eclipse.swt.events.TypedEvent",
"$.ArmEvent",
"$.ControlEvent",
"$.DisposeEvent",
"$.FocusEvent",
"$.HelpEvent",
"$.KeyEvent",
"$.MenuEvent",
"$.MenuDetectEvent",
"$.ModifyEvent",
"$.MouseEvent",
"$.PaintEvent",
"$.SelectionEvent",
"$.ShellEvent",
"$.TraverseEvent",
"$.TreeEvent",
"$.VerifyEvent",
"org.eclipse.swt.widgets.Listener",
"$.TypedListener",
"org.eclipse.swt.events.ArmListener",
"$.ControlListener",
"$.ControlAdapter",
"$.DisposeListener",
"$.FocusListener",
"$.FocusAdapter",
"$.HelpListener",
"$.KeyListener",
"$.KeyAdapter",
"$.MenuListener",
"$.MenuAdapter",
"$.MenuDetectListener",
"$.ModifyListener",
"$.MouseListener",
"$.MouseAdapter",
"$.MouseMoveListener",
"$.MouseTrackListener",
"$.MouseTrackAdapter",
"$.PaintListener",
"$.SelectionListener",
"$.SelectionAdapter",
"$.ShellListener",
"$.ShellAdapter",
"$.TraverseListener",
"$.TreeListener",
"$.TreeAdapter",
"$.VerifyListener",
"org.eclipse.swt.widgets.EventTable",

"$wt.internal.SerializableCompatibility",
"$.CloneableCompatibility",
"$.RunnableCompatibility",
"$wt.internal.dnd.HTMLEventWrapper",
"$.DragListener",
"$.DragAdapter",
"$.DragEvent",

"$wt.internal.struct.WINDOWPOS",
"$.MESSAGE",

"$wt.accessibility.Accessible",

"$wt.graphics.Point",
"$.Rectangle",
"$.RGB",

"$.Resource",
"$.Color",
"$.Cursor",

"$.Drawable",
"$.Device",
"$.DeviceData",

"$.FontData",
"$.FontMetrics",
"$.Font",

"$wt.widgets.Monitor",

"$wt.internal.ResizeHandler",
"$wt.internal.ResizeSystem",

"$wt.internal.dnd.DragAndDrop",
"$.DNDUtils",
"$.ShellFrameDND",

"$wt.internal.browser.OS",
"$.Popup",

"$wt.graphics.Image",
"$.ImageData",
"$wt.widgets.Item",
"$.Layout"
]);

ClazzLoader.jarClasspath(ClazzLoader.getClasspathFor("org.eclipse.swt.*")+"SWT.z.js",[
"$wt.SWT",
"$.SWTError",
"$.SWTException"
]);

var wPath=ClazzLoader.getClasspathFor("org.eclipse.swt.widgets.*");
ClazzLoader.jarClasspath(wPath+"Shell.z.js",[
"$wt.widgets.DesktopItem",
"$.TaskBar",
"$.MaximizedTitle",
"$.QuickLaunch",
"$.NotificationCorner",
"$.Display",
"$.Widget",
"$.Control",
"$.ScrollBar",
"$.Scrollable",
"$.Composite",
"$.Canvas",
"$.Decorations",
"$.Shell",
"$.Dialog"
]);
ClazzLoader.jarClasspath(wPath+"more.z.js",[
"$wt.widgets.Label",
"$.Button",
"$.Text",
"$.Group",
"$.TabItem",
"$.TabFolder",
"$.TrayItem",
"$.Tray",
"$.MenuItem",
"$.Menu",
"$.Link",
"$.Combo",
"$wt.browser.Browser",
"$wt.program.Program",
"$wt.layout.GridData",
"$.GridLayout",
"$.FillData",
"$.FillLayout"
]);

var w="$wt.widgets.";
ClazzLoader.jarClasspath(wPath+"Tree.z.js",[
w+"TreeItem",
"$.TreeColumn",
"$.Tree"
]);
ClazzLoader.jarClasspath(wPath+"ToolBar.z.js",[
w+"ToolItem",
"$.ToolBar"
]);
ClazzLoader.jarClasspath(wPath+"Table.z.js",[
w+"TableItem",
"$.TableColumn",
"$.Table",
"$wt.internal.dnd.TableColumnDND"
]);

var cPath=ClazzLoader.getClasspathFor("org.eclipse.swt.custom.*");
ClazzLoader.jarClasspath(cPath+"SashForm.z.js",[
"$wt.internal.dnd.SashDND",
w+"Sash",
"$wt.custom.SashFormData",
"$.SashFormLayout",
"$.SashForm"
]);
var c="$wt.custom.";
ClazzLoader.jarClasspath(cPath+"CBanner.z.js",[
c+"CBannerLayout",
"$.CBanner"
]);
ClazzLoader.jarClasspath(cPath+"CLabel.z.js",[
c+"CLayoutData",
"$.CLabel"
]);
ClazzLoader.jarClasspath(cPath+"CTabFolder.z.js",[
c+"CTabFolderEvent",
"$.CTabFolderListener",
"$.CTabFolderAdapter",
"$.CTabFolder2Listener",
"$.CTabFolder2Adapter",
"$.CTabFolderLayout",
"$.CTabItem",
"$.CTabFolder",
]);
ClazzLoader.jarClasspath(cPath+"ViewForm.z.js",[
c+"ViewFormLayout",
"$.ViewForm"
]);

ClazzLoader.jarClasspath(wPath+"Slider.z.js",[
"$wt.internal.dnd.SliderDND",
w+"Slider"
]);
ClazzLoader.jarClasspath(wPath+"Scale.z.js",[
"$wt.internal.dnd.ScaleDND",
w+"Scale"
]);
ClazzLoader.jarClasspath(wPath+"CoolBar.z.js",[
w+"CoolItem",
"$.CoolBar"
]);

var lPath=ClazzLoader.getClasspathFor("org.eclipse.swt.layout.*");
var l="$wt.layout.";
ClazzLoader.jarClasspath(lPath+"RowLayout.z.js",[
l+"RowData",
"$.RowLayout"
]);
ClazzLoader.jarClasspath(lPath+"FormLayout.z.js",[
l+"FormAttachment",
"$.FormData",
"$.FormLayout"
]);

ClazzLoader.jarClasspath(path+"dnd.z.js",[
"$wt.dnd.DND",
"$.DNDEvent",
"$.DNDListener",
"$.DragSourceListener",
"$.DragSourceAdapter",
"$.DragSourceEvent",
"$.DropTargetListener",
"$.DropTargetAdapter",
"$.DropTargetEvent",
"$.TransferData",
"$.Transfer",
"$.DragSource",
"$.DropTarget"
]);


}

};
if(ClazzLoader.classpathMap["@org.eclipse.swt"]!=null){
window["org.eclipse.swt.package.callback"]();
}


window["org.eclipse.swt.registered"]=true;

var lazyCBKey="swt.lazy.loading.callback";
if(window[lazyCBKey]!=null){
window[lazyCBKey]();
window[lazyCBKey]=null;
}
