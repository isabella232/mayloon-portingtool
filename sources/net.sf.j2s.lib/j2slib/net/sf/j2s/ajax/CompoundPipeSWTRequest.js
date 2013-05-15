﻿$_J("net.sf.j2s.ajax");
$_L(["net.sf.j2s.ajax.SimplePipeRequest"],"net.sf.j2s.ajax.CompoundPipeSWTRequest",["net.sf.j2s.ajax.CompoundPipeRequest","$.CompoundPipeRunnable","$.SimplePipeSWTRequest","$.SimpleRPCSWTRequest"],function(){
c$=$_T(net.sf.j2s.ajax,"CompoundPipeSWTRequest",net.sf.j2s.ajax.SimplePipeRequest);
c$.swtWeave=$_M(c$,"swtWeave",
function(id,p){
{
}var pipe=net.sf.j2s.ajax.CompoundPipeRequest.retrievePipe(id,false);
if(pipe==null){
pipe=net.sf.j2s.ajax.CompoundPipeRequest.registerPipe(net.sf.j2s.ajax.CompoundPipeSWTRequest.createSWTWrappedPipe(id));
}if(pipe.status==0||!pipe.isPipeLive()){
pipe.weave(p);
pipe.updateStatus(true);
if(pipe.status==0){
pipe.status=1;
pipe.pipeKey=null;
p.pipeKey=null;
net.sf.j2s.ajax.SimplePipeSWTRequest.swtPipe(pipe);
}}else{
if(!pipe.weave(p)&&p.isPipeLive()){
return;
}p.pipeKey=pipe.pipeKey;
net.sf.j2s.ajax.SimpleRPCSWTRequest.swtRequest(p);
if(pipe.status<2){
pipe.status=2;
}}},"~S,net.sf.j2s.ajax.CompoundPipeSession");
c$.createSWTWrappedPipe=$_M(c$,"createSWTWrappedPipe",
($fz=function(id){
var pipe=(($_D("net.sf.j2s.ajax.CompoundPipeSWTRequest$2")?0:net.sf.j2s.ajax.CompoundPipeSWTRequest.$CompoundPipeSWTRequest$2$()),$_N(net.sf.j2s.ajax.CompoundPipeSWTRequest$2,this,null));
pipe.id=id;
return pipe;
},$fz.isPrivate=true,$fz),"~S");
c$.pipeFailed=$_M(c$,"pipeFailed",
function(pipe){
var now=System.currentTimeMillis();
if(now-pipe.lastSetupRetried>300000){
pipe.setupFailedRetries=0;
}pipe.setupFailedRetries++;
if(pipe.setupFailedRetries<=3){
pipe.updateStatus(true);
pipe.lastSetupRetried=now;
net.sf.j2s.ajax.SimplePipeSWTRequest.swtPipe(pipe);
}else{
for(var i=0;i<pipe.pipes.length;i++){
if(pipe.pipes[i]!=null){
pipe.pipes[i].pipeFailed();
}}
pipe.setupFailedRetries=0;
pipe.status=0;
pipe.lastSetupRetried=0;
}},"net.sf.j2s.ajax.CompoundPipeRunnable");
c$.configure=$_M(c$,"configure",
function(id,pipeURL,pipeMethod,rpcURL,rpcMethod){
var pipe=net.sf.j2s.ajax.CompoundPipeRequest.retrievePipe(id,false);
if(pipe==null){
pipe=net.sf.j2s.ajax.CompoundPipeRequest.registerPipe(net.sf.j2s.ajax.CompoundPipeSWTRequest.createSWTWrappedPipe(id));
}if(pipeURL!=null){
pipe.pipeURL=pipeURL;
}if(pipeMethod!=null){
pipe.pipeMethod=pipeMethod;
}if(rpcURL!=null){
pipe.rpcURL=rpcURL;
}if(rpcMethod!=null){
pipe.rpcMethod=rpcMethod;
}},"~S,~S,~S,~S,~S");
c$.$CompoundPipeSWTRequest$2$=function(){
$_H();
c$=$_W(net.sf.j2s.ajax,"CompoundPipeSWTRequest$2",net.sf.j2s.ajax.CompoundPipeRunnable);
$_M(c$,"ajaxOut",
function(){
$_U(this,net.sf.j2s.ajax.CompoundPipeSWTRequest$2,"ajaxOut",[]);
if(!this.pipeAlive){
net.sf.j2s.ajax.CompoundPipeSWTRequest.pipeFailed(this);
return;
}for(var i=0;i<this.pipes.length;i++){
if(this.pipes[i]!=null){
this.pipes[i].pipeKey=this.pipeKey;
net.sf.j2s.ajax.SimpleRPCSWTRequest.swtRequest(this.pipes[i]);
if(this.status<2){
this.status=2;
}}}
});
$_V(c$,"ajaxFail",
function(){
net.sf.j2s.ajax.CompoundPipeSWTRequest.pipeFailed(this);
});
c$=$_P();
};
});
