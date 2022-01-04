// Variable block - Start.
var euro;
var dollar;
var gel;
var rub;
var kro;
var gpb;
var yen;
var fra;
// Variable block - End.

// start() function - Start.
function start() {
  euro = document.getElementById('euro');
  dollar = document.getElementById('dollar');
  gel = document.getElementById('gel');
  rub = document.getElementById('rub');
  kro = document.getElementById('kro');
  gpb = document.getElementById('gpb');
  yen = document.getElementById('yen');
  fra = document.getElementById('fra');
}
// start() function - End.

// euro to dollar, gel, rub, kro, gpb, yen, fra - Start.
function EuroConvert() {
  dollar.value = euro.value * 0.444;
  gel.value = euro.value * 3.5072;
  rub.value = euro.value * 84.3564;
  kro.value = euro.value * 10.2847;
  gpb.value = euro.value * 0.8403;
  yen.value = euro.value * 130.7388;
  fra.value = euro.value * 1.0366;
}
// euro to dollar, gel, rub, kro, gpb, yen, fra - End.

// dollar to Euro, gel, rub, kro, gpb, yen, fra - Start.
function DollarConvert() {
  euro.value = dollar.value * 0.8807;
  gel.value = dollar.value * 3.0887;
  rub.value = dollar.value * 74.2905;
  kro.value = dollar.value * 9.0575;
  gpb.value = dollar.value * 0.74;
  yen.value = dollar.value * 115.1383;
  fra.value = dollar.value * 0.9129;
}
// dollar to Euro, gel, rub, kro, gpb, yen, fra - End.

// gel to Euro, dollar, rub, kro, gpb, yen, fra - Start.
function GelConvert() {
  euro.value = gel.value * 0.2852;
  dollar.value = gel.value * 0.3238;
  rub.value = gel.value * 24.0584;
  kro.value = gel.value * 2.9325;
  gpb.value = gel.value * 0.2396;
  yen.value = gel.value * 37.2773;
  fra.value = gel.value * 0.2956;
}
// gel to Euro, dollar, rub, kro, gpb, yen, fra - End.

// rub to Euro, dollar, gel, kro, gpb, yen, fra - Start.
function RubConvert() {
  euro.value = rub.value * 0.0119;
  dollar.value = rub.value * 0.0135;
  gel.value = rub.value * 0.0416;
  kro.value = rub.value * 0.1219;
  gpb.value = rub.value * 0.01;
  yen.value = rub.value * 1.5498;
  fra.value = rub.value * 0.0123;
}
// rub to Euro, dollar, gel, kro, gpb, yen, fra - End.

// yen to Euro, dollar, gel, kro, gpb, rub, fra - Start.
function YenConvert() {
  euro.value = yen.value * 0.0076;
  dollar.value = yen.value * 0.0087;
  gel.value = yen.value * 0.0268;
  kro.value = yen.value * 0.0787;
  gpb.value = yen.value * 0.0064;
  rub.value = yen.value * 0.6452;
  fra.value = yen.value * 0.0079;
}
// yen to Euro, dollar, gel, kro, gpb, rub, fra - End.

// kro to Euro, dollar, gel, yen, gpb, rub, fra - Start.
function Krofunc() {
  euro.value = kro.value * 0.0972;
  dollar.value = kro.value * 0.1104;
  gel.value = kro.value * 0.341;
  yen.value = kro.value * 12.7119;
  gpb.value = kro.value * 0.0817;
  rub.value = kro.value * 8.2021;
  fra.value = kro.value * 0.1008;
}
// kro to Euro, dollar, gel, yen, gpb, rub, fra - End.

// gpb to Euro, dollar, gel, yen, kro, rub, fra - Start.
function Gbpfunc() {
  euro.value = gpb.value * 1.1901;
  dollar.value = gpb.value * 1.3513;
  gel.value = gpb.value * 4.1738;
  yen.value = gpb.value * 12.7119;
  kro.value = gpb.value * 12.2395;
  rub.value = gpb.value * 100.3896;
  fra.value = gpb.value * 1.2336;
}
// gpb to Euro, dollar, gel, yen, kro, rub, fra - End.

// fra to Euro, dollar, gel, yen, kro, rub, gpb - Start.
function Frafunc() {
  euro.value = fra.value * 0.9647;
  dollar.value = fra.value * 1.0954;
  gel.value = fra.value * 3.3834;
  yen.value = fra.value * 126.1239;
  kro.value = fra.value * 9.9217;
  rub.value = fra.value * 81.3787;
  gpb.value = fra.value * 1.2336;
}
// fra to Euro, dollar, gel, yen, kro, rub, gpb - End.

start();