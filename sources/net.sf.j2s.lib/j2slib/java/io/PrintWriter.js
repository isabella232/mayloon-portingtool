﻿$_L(["java.io.Writer"],"java.io.PrintWriter",["java.io.BufferedOutputStream","$.FileOutputStream","$.OutputStreamWriter","java.lang.NullPointerException","java.util.Formatter","$.Locale"],function(){
c$=$_C(function(){
this.out=null;
this.ioError=false;
this.autoflush=false;
this.lineSeparator="\n";
$_Z(this,arguments);
},java.io,"PrintWriter",java.io.Writer);
$_K(c$,
function(out){
this.construct(new java.io.OutputStreamWriter(out),false);
},"java.io.OutputStream");
$_K(c$,
function(out,autoflush){
this.construct(new java.io.OutputStreamWriter(out),autoflush);
},"java.io.OutputStream,~B");
$_K(c$,
function(wr){
this.construct(wr,false);
},"java.io.Writer");
$_K(c$,
function(wr,autoflush){
$_R(this,java.io.PrintWriter,[wr]);
this.autoflush=autoflush;
this.out=wr;
},"java.io.Writer,~B");
$_K(c$,
function(file){
this.construct(new java.io.OutputStreamWriter(new java.io.BufferedOutputStream(new java.io.FileOutputStream(file))),false);
},"java.io.File");
$_K(c$,
function(file,csn){
this.construct(new java.io.OutputStreamWriter(new java.io.BufferedOutputStream(new java.io.FileOutputStream(file)),csn),false);
},"java.io.File,~S");
$_K(c$,
function(fileName){
this.construct(new java.io.OutputStreamWriter(new java.io.BufferedOutputStream(new java.io.FileOutputStream(fileName))),false);
},"~S");
$_K(c$,
function(fileName,csn){
this.construct(new java.io.OutputStreamWriter(new java.io.BufferedOutputStream(new java.io.FileOutputStream(fileName)),csn),false);
},"~S,~S");
$_M(c$,"checkError",
function(){
var delegate=this.out;
if(delegate==null){
return this.ioError;
}this.flush();
return this.ioError||delegate.checkError();
});
$_M(c$,"clearError",
function(){
{
this.ioError=false;
}});
$_M(c$,"close",
function(){
{
if(this.out!=null){
try{
this.out.close();
}catch(e){
if($_O(e,java.io.IOException)){
this.setError();
}else{
throw e;
}
}
this.out=null;
}}});
$_M(c$,"flush",
function(){
{
if(this.out!=null){
try{
this.out.flush();
}catch(e){
if($_O(e,java.io.IOException)){
this.setError();
}else{
throw e;
}
}
}else{
this.setError();
}}});
$_M(c$,"format",
function(format,args){
return this.format(java.util.Locale.getDefault(),format,[args]);
},"~S,~A");
$_M(c$,"format",
function(l,format,args){
if(format==null){
throw new NullPointerException("format==null");
}new java.util.Formatter(this,l).format(format,[args]);
if(this.autoflush){
this.flush();
}return this;
},"java.util.Locale,~S,~A");
$_M(c$,"printf",
function(format,args){
return this.format(format,[args]);
},"~S,~A");
$_M(c$,"printf",
function(l,format,args){
return this.format(l,format,[args]);
},"java.util.Locale,~S,~A");
$_M(c$,"print",
function(charArray){
this.print(String.instantialize(charArray,0,charArray.length));
},"~A");
$_M(c$,"print",
function(ch){
this.print(String.valueOf(ch));
},"~N");
$_M(c$,"print",
function(dnum){
this.print(String.valueOf(dnum));
},"~N");
$_M(c$,"print",
function(fnum){
this.print(String.valueOf(fnum));
},"~N");
$_M(c$,"print",
function(inum){
this.print(String.valueOf(inum));
},"~N");
$_M(c$,"print",
function(lnum){
this.print(String.valueOf(lnum));
},"~N");
$_M(c$,"print",
function(obj){
this.print(String.valueOf(obj));
},"~O");
$_M(c$,"print",
function(str){
this.write(str!=null?str:String.valueOf(Clazz.castNullAs("Object")));
},"~S");
$_M(c$,"print",
function(bool){
this.print(String.valueOf(bool));
},"~B");
$_M(c$,"println",
function(){
{
this.print("\n");
if(this.autoflush){
this.flush();
}}});
$_M(c$,"println",
function(charArray){
this.println(String.instantialize(charArray,0,charArray.length));
},"~A");
$_M(c$,"println",
function(ch){
this.println(String.valueOf(ch));
},"~N");
$_M(c$,"println",
function(dnum){
this.println(String.valueOf(dnum));
},"~N");
$_M(c$,"println",
function(fnum){
this.println(String.valueOf(fnum));
},"~N");
$_M(c$,"println",
function(inum){
this.println(String.valueOf(inum));
},"~N");
$_M(c$,"println",
function(lnum){
this.println(String.valueOf(lnum));
},"~N");
$_M(c$,"println",
function(obj){
this.println(String.valueOf(obj));
},"~O");
$_M(c$,"println",
function(str){
{
this.print(str);
this.println();
}},"~S");
$_M(c$,"println",
function(bool){
this.println(String.valueOf(bool));
},"~B");
$_M(c$,"setError",
function(){
{
this.ioError=true;
}});
$_M(c$,"write",
function(buf){
this.write(buf,0,buf.length);
},"~A");
$_M(c$,"write",
function(buf,offset,count){
this.doWrite(buf,offset,count);
},"~A,~N,~N");
$_M(c$,"write",
function(oneChar){
this.doWrite([String.fromCharCode(oneChar)],0,1);
},"~N");
$_M(c$,"doWrite",
($fz=function(buf,offset,count){
{
if(this.out!=null){
try{
this.out.write(buf,offset,count);
}catch(e){
if($_O(e,java.io.IOException)){
this.setError();
}else{
throw e;
}
}
}else{
this.setError();
}}},$fz.isPrivate=true,$fz),"~A,~N,~N");
$_M(c$,"write",
function(str){
this.write(str.toCharArray());
},"~S");
$_M(c$,"write",
function(str,offset,count){
this.write(str.substring(offset,offset+count).toCharArray());
},"~S,~N,~N");
$_M(c$,"append",
function(c){
this.write(c.charCodeAt(0));
return this;
},"~N");
$_M(c$,"append",
function(csq){
if(null==csq){
this.append("null",0,"null".length);
}else{
this.append(csq,0,csq.toString().length);
}return this;
},"CharSequence");
$_M(c$,"append",
function(csq,start,end){
if(null==csq){
csq="null";
}var output=csq.subSequence(start,end).toString();
this.write(output,0,output.length);
return this;
},"CharSequence,~N,~N");
});
