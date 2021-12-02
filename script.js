
//Cap Kingdom
var CAPslider = document.getElementById("CAPslider");
var CAPoutput = document.getElementById("CAPoutput");
CAPoutput.innerHTML = CAPslider.value;
var CAPPreOut = CAPslider.value

//Cascade Kingdom
var CascadeSlider = document.getElementById("CascadeSlider");
var CascadeOutput = document.getElementById("CascadeOutput");
CascadeOutput.innerHTML = CascadeSlider.value;
var CascadePreOut = CascadeSlider.value

//Sand Kingdom
var SandSlider = document.getElementById("SandSlider");
var SandOutput = document.getElementById("SandOutput");
SandOutput.innerHTML = SandSlider.value;
var SandPreOut = SandSlider.value

//Lake Kingdom
var LakeSlider = document.getElementById("LakeSlider");
var LakeOutput = document.getElementById("LakeOutput");
LakeOutput.innerHTML = LakeSlider.value;
var LakePreOut = LakeSlider.value

//Wooded Kingdom
var WoodedSlider = document.getElementById("WoodedSlider");
var WoodedOutput = document.getElementById("WoodedOutput");
WoodedOutput.innerHTML = WoodedSlider.value;
var WoodedPreOut = WoodedSlider.value

//Cloud Kingdom
var CloudSlider = document.getElementById("CloudSlider");
var CloudOutput = document.getElementById("CloudOutput");
CloudOutput.innerHTML = CloudSlider.value;
var CloudPreOut = CloudSlider.value

//Lost Kingdom
var LostSlider = document.getElementById("LostSlider");
var LostOutput = document.getElementById("LostOutput");
LostOutput.innerHTML = LostSlider.value;
var LostPreOut = LostSlider.value

//Metro Kingdom
var MetroSlider = document.getElementById("MetroSlider");
var MetroOutput = document.getElementById("MetroOutput");
MetroOutput.innerHTML = MetroSlider.value;
var MetroPreOut = MetroSlider.value

//Snow Kingdom
var SnowSlider = document.getElementById("SnowSlider");
var SnowOutput = document.getElementById("SnowOutput");
SnowOutput.innerHTML = SnowSlider.value;
var SnowPreOut = SnowSlider.value

//Seaside Kingdom
var SeasideSlider = document.getElementById("SeasideSlider");
var SeasideOutput = document.getElementById("SeasideOutput");
SeasideOutput.innerHTML = SeasideSlider.value;
var SeasidePreOut = SeasideSlider.value

//Luncheon Kingdom
var LuncheonSlider = document.getElementById("LuncheonSlider");
var LuncheonOutput = document.getElementById("LuncheonOutput");
LuncheonOutput.innerHTML = LuncheonSlider.value;
var LuncheonPreOut = LuncheonSlider.value

//Ruined Kingdom
var RuinedSlider = document.getElementById("RuinedSlider");
var RuinedOutput = document.getElementById("RuinedOutput");
RuinedOutput.innerHTML = RuinedSlider.value;
var RuinedPreOut = RuinedSlider.value

//Bowser Kingdom
var BowserSlider = document.getElementById("BowserSlider");
var BowserOutput = document.getElementById("BowserOutput");
BowserOutput.innerHTML = BowserSlider.value;
var BowserPreOut = BowserSlider.value

//Moon Kingdom
var MoonSlider = document.getElementById("MoonSlider");
var MoonOutput = document.getElementById("MoonOutput");
MoonOutput.innerHTML = MoonSlider.value;
var MoonPreOut = MoonSlider.value

//Mushroom Kingdom
var MushroomSlider = document.getElementById("MushroomSlider");
var MushroomOutput = document.getElementById("MushroomOutput");
MushroomOutput.innerHTML = MushroomSlider.value;
var MushroomPreOut = MushroomSlider.value

//Dark Kingdom
var DarkSlider = document.getElementById("DarkSlider");
var DarkOutput = document.getElementById("DarkOutput");
DarkOutput.innerHTML = DarkSlider.value;
var DarkPreOut = DarkSlider.value

//Darker Kingdom
var DarkerSlider = document.getElementById("DarkerSlider");
var DarkerOutput = document.getElementById("DarkerOutput");
DarkerOutput.innerHTML = DarkerSlider.value;
var DarkerPreOut = DarkerSlider.value

function UpdateTotal() {
  document.getElementById("count").innerHTML = document.querySelectorAll('input[type="checkbox"][name="thing"]:checked').length;

}

function ShowByID(name1) {
  if (document.getElementById(name1).style.display != "none") {
    document.getElementById(name1).style.display = "none";
  }else{
    document.getElementById(name1).style.display = "block";
  }
  if (document.getElementById(name1+'Kingdom').style.display != "none") {
    document.getElementById(name1+'Kingdom').style.display = "none";
  }else{
    document.getElementById(name1+'Kingdom').style.display = "block";
  }
  getNbrOfVisButton();
}

let DontShowAtStart = ["Cap","Cloud","Moon","Mushroom","Dark","Darker"];
for (let i in DontShowAtStart) {
  ShowByID(DontShowAtStart[i]);
  document.getElementById(DontShowAtStart[i]+'View').checked = false

}


function UpdateCheckBoxFunction(SliderInput, Output, PreVal, Kingdom) {
  Output.innerHTML = SliderInput.value;
  //console.log(SliderInput.value + "," + PreVal)
  if (Number(SliderInput.value) >= Number(PreVal)) {
    for (let i = 1; i <= Number(SliderInput.value); i++) {
      element = document.getElementById(Kingdom + i);
      if (element == null) {
        var inputEle = document.createElement('input');
        inputEle.setAttribute("id", Kingdom + i);
        inputEle.setAttribute("name", "thing");
        inputEle.setAttribute("type", "checkbox");
        inputEle.setAttribute("value", "valuable");
        inputEle.setAttribute("Kingdom", Kingdom)
        inputEle.setAttribute("oninput", "UpdateTotal()")
        document.getElementById(Kingdom).appendChild(inputEle);
        var labelCap = document.createElement("label");
        labelCap.setAttribute("for", Kingdom + i);
        labelCap.setAttribute("id", Kingdom + i);
        document.getElementById(Kingdom).appendChild(labelCap);
      }
    }
  } else {
    for (let i = Number(SliderInput.value) + 1; i <= Number(SliderInput.max); i++) {
      elementRM = document.getElementById(Kingdom + i);
      if (elementRM != null) {
        elementRM.remove();
      }
      elementRM = document.getElementById(Kingdom + i);
      if (elementRM != null) {
        elementRM.remove();
      }
    }
  }
  // only count moons if the parent element is visible.
  // let countElement = document.querySelectorAll('input[type="checkbox"]');
  // let count = 0;
  // for(let i in countElement){

  // }
// document.getElementById("total").innerHTML = 
  // console.log(document.querySelectorAll('input[type="checkbox"]').display); 

  getNbrOfVisButton();
  return SliderInput.value;
}

function getNbrOfVisButton(){
  let total = 0;
  let inputs = document.querySelectorAll('input[checked]');
  let acummulator = [];
  for(let i in inputs){
    if(inputs[i].checked == true){
      acummulator.push(inputs[i].getAttribute("kingdom"));
    }
  }
  for(let j in acummulator){
    total +=document.getElementById(acummulator[j]).childElementCount/2;
  }
  console.log(total);
  document.getElementById("total").innerHTML=total;
}




CAPslider.oninput = function () { CAPPreOut = UpdateCheckBoxFunction(CAPslider, CAPoutput, CAPPreOut, "CapKingdom"); }
window.onload = UpdateCheckBoxFunction(CAPslider, CAPoutput, CAPPreOut, "CapKingdom");

CascadeSlider.oninput = function () { CascadePreOut = UpdateCheckBoxFunction(CascadeSlider, CascadeOutput, CascadePreOut, "CascadeKingdom"); }
window.onload = UpdateCheckBoxFunction(CascadeSlider, CascadeOutput, CascadePreOut, "CascadeKingdom");

SandSlider.oninput = function () { SandPreOut = UpdateCheckBoxFunction(SandSlider, SandOutput, SandPreOut, "SandKingdom"); }
window.onload = UpdateCheckBoxFunction(SandSlider, SandOutput, SandPreOut, "SandKingdom");

LakeSlider.oninput = function () { LakePreOut = UpdateCheckBoxFunction(LakeSlider, LakeOutput, LakePreOut, "LakeKingdom"); }
window.onload = UpdateCheckBoxFunction(LakeSlider, LakeOutput, LakePreOut, "LakeKingdom");

WoodedSlider.oninput = function () { WoodedPreOut = UpdateCheckBoxFunction(WoodedSlider, WoodedOutput, WoodedPreOut, "WoodedKingdom"); }
window.onload = UpdateCheckBoxFunction(WoodedSlider, WoodedOutput, WoodedPreOut, "WoodedKingdom");

CloudSlider.oninput = function () { CloudPreOut = UpdateCheckBoxFunction(CloudSlider, CloudOutput, CloudPreOut, "CloudKingdom"); }
window.onload = UpdateCheckBoxFunction(CloudSlider, CloudOutput, CloudPreOut, "CloudKingdom");

LostSlider.oninput = function () { LostPreOut = UpdateCheckBoxFunction(LostSlider, LostOutput, LostPreOut, "LostKingdom"); }
window.onload = UpdateCheckBoxFunction(LostSlider, LostOutput, LostPreOut, "LostKingdom");

MetroSlider.oninput = function () { MetroPreOut = UpdateCheckBoxFunction(MetroSlider, MetroOutput, MetroPreOut, "MetroKingdom"); }
window.onload = UpdateCheckBoxFunction(MetroSlider, MetroOutput, MetroPreOut, "MetroKingdom");

SnowSlider.oninput = function () { SnowPreOut = UpdateCheckBoxFunction(SnowSlider, SnowOutput, SnowPreOut, "SnowKingdom"); }
window.onload = UpdateCheckBoxFunction(SnowSlider, SnowOutput, SnowPreOut, "SnowKingdom");

SeasideSlider.oninput = function () { SeasidePreOut = UpdateCheckBoxFunction(SeasideSlider, SeasideOutput, SeasidePreOut, "SeasideKingdom"); }
window.onload = UpdateCheckBoxFunction(SeasideSlider, SeasideOutput, SeasidePreOut, "SeasideKingdom");

LuncheonSlider.oninput = function () { LuncheonPreOut = UpdateCheckBoxFunction(LuncheonSlider, LuncheonOutput, LuncheonPreOut, "LuncheonKingdom"); }
window.onload = UpdateCheckBoxFunction(LuncheonSlider, LuncheonOutput, LuncheonPreOut, "LuncheonKingdom");

RuinedSlider.oninput = function () { RuinedPreOut = UpdateCheckBoxFunction(RuinedSlider, RuinedOutput, RuinedPreOut, "RuinedKingdom"); }
window.onload = UpdateCheckBoxFunction(RuinedSlider, RuinedOutput, RuinedPreOut, "RuinedKingdom");

BowserSlider.oninput = function () { BowserPreOut = UpdateCheckBoxFunction(BowserSlider, BowserOutput, BowserPreOut, "BowserKingdom"); }
window.onload = UpdateCheckBoxFunction(BowserSlider, BowserOutput, BowserPreOut, "BowserKingdom");

MoonSlider.oninput = function () { MoonPreOut = UpdateCheckBoxFunction(MoonSlider, MoonOutput, MoonPreOut, "MoonKingdom"); }
window.onload = UpdateCheckBoxFunction(MoonSlider, MoonOutput, MoonPreOut, "MoonKingdom");

MushroomSlider.oninput = function () { MushroomPreOut = UpdateCheckBoxFunction(MushroomSlider, MushroomOutput, MushroomPreOut, "MushroomKingdom"); }
window.onload = UpdateCheckBoxFunction(MushroomSlider, MushroomOutput, MushroomPreOut, "MushroomKingdom");

DarkSlider.oninput = function () { DarkPreOut = UpdateCheckBoxFunction(DarkSlider, DarkOutput, DarkPreOut, "DarkKingdom"); }
window.onload = UpdateCheckBoxFunction(DarkSlider, DarkOutput, DarkPreOut, "DarkKingdom");

DarkerSlider.oninput = function () { DarkerPreOut = UpdateCheckBoxFunction(DarkerSlider, DarkerOutput, DarkerPreOut, "DarkerKingdom"); }
window.onload = UpdateCheckBoxFunction(DarkerSlider, DarkerOutput, DarkerPreOut, "DarkerKingdom");


