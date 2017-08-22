function Optimise_NavBar_NotFixed(){
    var NavBar_NotFixed = document.getElementsByClassName("notFixed")[0];
    if(NavBar_NotFixed){NavBar_NotFixed = NavBar_NotFixed.getElementsByClassName("nav-bar")[0];}
    if(NavBar_NotFixed){
        var marginTop = (380/1536)* window.innerWidth;
        var marginLeft = (60/1536)* window.innerWidth;
        var marginLeft = (60/1536)* window.innerWidth;
        NavBar_NotFixed.style.margin = 
            marginTop.toString() + "px 0 " + 
            marginLeft.toString() + "px " +
            marginLeft.toString() + "px";
        NavBar_NotFixed.style.border = ((10/1536) * window.innerWidth).toString() + "px inset";
        NavBar_NotFixed.style.borderLeft = 
            NavBar_NotFixed.style.borderRight = 
            ((4/1536) * window.innerWidth).toString() + "px inset #FFF";
        var F = NavBar_NotFixed.getElementsByTagName("span");
        for(var i = 0;i<F.length;i++){
            F[i].style.fontSize = ((20/1536) * window.innerWidth).toString() + "px";
            F[i].style.padding = ((1/1536) * window.innerWidth).toString() + "px solid #9A9A9A";
        }
        var L = NavBar_NotFixed.getElementsByTagName("li");
        for(var i = 0;i<L.length;i++){
            L[i].style.fontSize = ((20/1536) * window.innerWidth).toString() + "px";
            L[i].style.borderLeft = ((20/1536) * window.innerWidth).toString() + "px";
        }
        document.getElementsByClassName("slider")[0].style.minHeight = 
            (marginTop + marginLeft + NavBar_NotFixed.offsetHeight).toString() + "px";
    }
}
function Optimise_NavBar_Fixed(){
    var NavBar_Fixed = document.getElementsByClassName("fixed-nav-bar")[0];
    if(NavBar_Fixed){NavBar_Fixed = NavBar_Fixed.getElementsByClassName("nav-bar")[0];}
    if(NavBar_Fixed){
        NavBar_Fixed.style.margin = "0";
        NavBar_Fixed.style.border = 
        NavBar_Fixed.style.borderLeft = 
            NavBar_Fixed.style.borderRight = "none";
        NavBar_Fixed.style.marginLeft = ((50/1536) * window.innerWidth).toString() + "px";
        F = NavBar_Fixed.getElementsByTagName("span");
        for(var i = 0;i<F.length;i++){
            F[i].style.fontSize = ((20/1536) * window.innerWidth).toString() + "px";
            F[i].style.padding = ((1/1536) * window.innerWidth).toString() + "px solid #9A9A9A";
        }
        L = NavBar_Fixed.getElementsByTagName("li");
        for(var i = 0;i<L.length;i++){
            L[i].style.fontSize = ((20/1536) * window.innerWidth).toString() + "px";
            L[i].style.borderLeft = ((20/1536) * window.innerWidth).toString() + "px";
        }
        var Logo = document.getElementsByClassName("fixed-nav-bar")[0].getElementsByTagName("img")[0];
        Logo.style.width = ((60/1536) * window.innerWidth).toString() + "px";
        Logo.style.marginLeft = ((800/1536) * window.innerWidth).toString() + "px";
        Logo.style.top = ((5/1536) * window.innerWidth).toString() + "px";
    }
}
function Optimise_Seasons(){
    var SeasonsEle = document.getElementsByClassName("seasons")[0];
    SeasonsEle.style.padding = ((110/1536) * window.innerWidth).toString() + "px 0";
    SeasonsEle = SeasonsEle.getElementsByClassName("season");
    for(var i=0;i < SeasonsEle.length;i++){
        //alert(i);
        SeasonsEle[i].style.marginTop = ((5/1536) * window.innerWidth).toString() + "px";
        var h = SeasonsEle[i].getElementsByClassName("header")[0];
        var hh1 = h.getElementsByTagName("h1")[0];
        hh1.style.padding = ((10/1536) * window.innerWidth).toString() + "px";
        hh1.style.paddingLeft = ((20/1536) * window.innerWidth).toString() + "px";
        hh1.style.fontSize = ((2/1536) * window.innerWidth).toString() + "em";
        var hi = h.getElementsByTagName("i")[0];
        hi.style.padding = ((0.1/1536) * window.innerWidth).toString() + "em";
        hi.style.fontSize = ((3/1536) * window.innerWidth).toString() + "em";
        var ep = SeasonsEle[i].getElementsByClassName("episode");
        //alert("sss " + ep.length);
        for(var j=0;j < ep.length;j++){
            ep[j].style.padding = ((5/1536) * window.innerWidth).toString() + "px";
            ep[j].style.marginTop = ((2/1536) * window.innerWidth).toString() + "px";
            ep[j].style.marginBottom = ((2/1536) * window.innerWidth).toString() + "px";
            ep[j].getElementsByTagName("h3")[0].style.marginLeft = ((40/1536) * window.innerWidth).toString() + "px";
            ep[j].getElementsByTagName("h3")[0].style.fontSize = ((1.2/1536) * window.innerWidth).toString() + "em";
            var ep_a = ep[j].getElementsByTagName("a");
            //alert("dnksdc " +  ep_a.length);
            for(var k=0;k < ep_a.length;k++){
                ep_a[k].style.paddingRight = ((40/1536) * window.innerWidth).toString() + "px";
                ep_a[k].getElementsByTagName("i")[0].style.fontSize = 
                    ((1.1/1536) * window.innerWidth).toString() + "em";
            }
        }
    }
}
function Optimise_Footer(){
    var Footer = document.getElementsByClassName("footer")[0];
    Footer.style.padding = ((80/1536) * window.innerWidth).toString() + "px 0";
    var infoMe = Footer.getElementsByClassName("info_me")[0];
    infoMe.style.padding = "0 0 0 " + ((50/1536) * window.innerWidth).toString() + "px";
    /*infoMe.getElementsByTagName("h2")[0].style.textShadow = 
        ((2/1536) * window.innerWidth).toString() + "px " + ((2/1536) * window.innerWidth).toString() + "px " + "#DA3139";
    infoMe.getElementsByTagName("h2")[0].style.fontSize =
        ((1.5/1536) * window.innerWidth).toString() + "em";
    var infoMeh3 = infoMe.getElementsByTagName("h2");
    for(var i=0;i < infoMeh3.length;i++){
        infoMeh3[i].style.fontSize =
            ((0.9/1536) * window.innerWidth).toString() + "em";
        infoMeh3[i].style.margin = ((10/1536) * window.innerWidth).toString() + "px 0";
    }*/
    var FooterImg = Footer.getElementsByClassName("img")[0].getElementsByTagName("img")[0];
    FooterImg.style.margin = "0 " + ((10/1536) * window.innerWidth).toString() + "px";
    FooterImg.style.border = ((10/1536) * window.innerWidth).toString() + "px  solid #FFF";
    var pxs = ((8/1536) * window.innerWidth).toString() + "px ";
    
    FooterImg.style.boxShadow = pxs + pxs + pxs + "#DA3139," + "-" + pxs + pxs + pxs + "#DA3139,"
        + pxs + "-" + pxs + pxs + "#DA3139," + "-" + pxs + "-" + pxs + pxs + "#DA3139";
    //FooterImg.hover.boxShadow = pxs + pxs + pxs + "#246488," + "-" + pxs + pxs + pxs + "#246488,"
      //  + pxs + "-" + pxs + pxs + "#246488," + "-" + pxs + "-" + pxs + pxs + "#246488";
    var Form = Footer.getElementsByClassName("form")[0];
    Form.style.borderLeft = ((2/1536) * window.innerWidth).toString() + "px solid #000";
    var Formh3 = Form.getElementsByTagName("h3");
    for(var i=0;i < Formh3.length;i++){
        Formh3[i].style.margin = ((5/1536) * window.innerWidth).toString() + "px";
    }
    var FormInput = [Form.getElementsByClassName("name")[0],Form.getElementsByClassName("address")[0]];
    for(var i=0;i < FormInput.length;i++){
        FormInput[i].style.border = ((5/1536) * window.innerWidth).toString() + "px  solid #DA3139";
        FormInput[i].style.borderRadius = ((20/1536) * window.innerWidth).toString() + "px";
        FormInput[i].style.padding = ((5/1536) * window.innerWidth).toString() + "px " +
            ((10/1536) * window.innerWidth).toString() + "px";
        FormInput[i].style.marginBottom = ((20/1536) * window.innerWidth).toString() + "px";
        FormInput[i].style.textShadow = ((1.5/1536) * window.innerWidth).toString() + "px " +
            ((1.5/1536) * window.innerWidth).toString() + "px " +
            ((1/1536) * window.innerWidth).toString() + "px #DA3139";
    }
    var FormInputTextArea = Form.getElementsByTagName("textarea")[0];
    FormInputTextArea.style.border = ((5/1536) * window.innerWidth).toString() + "px  solid #DA3139";
    FormInputTextArea.style.borderRadius = ((20/1536) * window.innerWidth).toString() + "px";
    FormInputTextArea.style.padding = ((10/1536) * window.innerWidth).toString() + "px";
    FormInputTextArea.style.marginBottom = ((20/1536) * window.innerWidth).toString() + "px";
    FormInputTextArea.style.textShadow = ((1.5/1536) * window.innerWidth).toString() + "px " +
        ((1.5/1536) * window.innerWidth).toString() + "px " +
        ((1/1536) * window.innerWidth).toString() + "px #DA3139";
    FormInputTextArea.style.minHeight = ((200/1536) * window.innerWidth).toString() + "px";
    var FormInputSubmit = Form.getElementsByClassName("submit")[0];
    FormInputSubmit.style.marginTop = ((20/1536) * window.innerWidth).toString() + "px";
    FormInputSubmit.style.padding = ((20/1536) * window.innerWidth).toString() + "px " +
        ((40/1536) * window.innerWidth).toString() + "px";
    FormInputSubmit.style.fontSize = ((20/1536) * window.innerWidth).toString() + "px";
    FormInputSubmit.style.border = ((10/1536) * window.innerWidth).toString() + "px inset #DA3139";
    FormInputSubmit.style.borderRadius = ((50/1536) * window.innerWidth).toString() + "px";
    FormInputSubmit.style.borderRight =
    FormInputSubmit.style.borderLeft =
        ((4/1536) * window.innerWidth).toString() + "px inset #DA3139";
}

var loadingDiv = document.getElementsByClassName("loading")[0];
var loadingShape = document.getElementsByClassName("loading")[0].getElementsByTagName("i")[0];
loadingDiv.style.height = window.innerHeight.toString() + "px";
loadingShape.style.fontSize = (0.2 * window.innerWidth).toString() + "px";
loadingShape.style.marginTop = ((window.innerHeight - 0.2 * window.innerWidth)*0.5).toString() + "px";
Optimise_NavBar_NotFixed();
Optimise_NavBar_Fixed();
Optimise_Seasons();
Optimise_Footer();


window.onload = function(){
    document.body.removeChild(loadingDiv);
};



var Seasons = document.getElementsByClassName("season");
for(var i=0;i < Seasons.length;i++){
    Seasons[i].getElementsByClassName("episodes")[0].style.display = "none";
}


var NavBarElements = document.getElementsByClassName("nav-bar-ele");
function highlight() {
    for(var i=0;i < NavBarElements.length;i++){
        if(NavBarElements[i].getAttribute("id") == "active"){
            NavBarElements[i].removeAttribute("id");
            break;
        }
    }
    if(window.pageYOffset < document.getElementsByClassName("slider")[0].offsetHeight - document.getElementsByClassName("nav-bar")[0].offsetHeight) {

    }
    else if(window.pageYOffset < (document.getElementsByClassName("slider")[0].offsetTop + document.getElementsByClassName("slider")[0].offsetHeight - document.getElementsByClassName("nav-bar")[0].offsetHeight)) {

    }
    else if(window.pageYOffset < (document.getElementsByClassName("seasons")[0].offsetTop + document.getElementsByClassName("seasons")[0].offsetHeight - document.getElementsByClassName("nav-bar")[0].offsetHeight)) {
        NavBarElements[0].setAttribute("id", "active");
    }
    else if(window.pageYOffset < (document.getElementsByClassName("cast")[0].offsetTop + document.getElementsByClassName("cast")[0].offsetHeight - document.getElementsByClassName("nav-bar")[0].offsetHeight)) {
        NavBarElements[1].setAttribute("id", "active");
    }
    else if(window.pageYOffset < (document.getElementsByClassName("rate")[0].offsetTop + document.getElementsByClassName("rate")[0].offsetHeight - document.getElementsByClassName("nav-bar")[0].offsetHeight)) {
        NavBarElements[2].setAttribute("id", "active");
    }
    else if(window.pageYOffset < (document.getElementsByClassName("about")[0].offsetTop + document.getElementsByClassName("about")[0].offsetHeight - document.getElementsByClassName("nav-bar")[0].offsetHeight)) {
        NavBarElements[3].setAttribute("id", "active");
    }
}

// Start Fixed Nav
var innerHTMLOfFixedNavBar = "<img src=\"images/start-overlay2.png\">";
var image = document.createElement("img");
image.setAttribute("src", "images/start-overlay2.png");
var innerHTMLOfNav = document.getElementsByClassName("nav-bar")[0].parentElement.innerHTML;
window.onscroll = function(){
var FixedNavBarDiv = document.getElementsByClassName("nav-bar")[0];
    if(window.pageYOffset >
            ((380/1536)* window.innerWidth + (60/1536)* window.innerWidth + (20/1536)* window.innerWidth)){
        FixedNavBarDiv.parentElement.className = "fixed-nav-bar";
        FixedNavBarDiv.parentElement.appendChild(image);
        Optimise_NavBar_Fixed();
    }
    else{
        FixedNavBarDiv.parentElement.className = "notFixed";
        FixedNavBarDiv.parentElement.removeChild(image);
        Optimise_NavBar_NotFixed();
    }
    
    highlight();
};
// End Fixed Nav
// Start Scroll Season list
for(var i=0;i < Seasons.length;i++){
    Seasons[i].getElementsByClassName("header")[0].onclick = function(){
        var episodesList = this.nextElementSibling;
    if(episodesList.style.display == "none"){
        episodesList.style.display = "block";
        this.getElementsByTagName("i")[0].setAttribute("class", "fa fa-arrow-circle-up");
    }
    else{
        episodesList.style.display = "none";
        this.getElementsByTagName("i")[0].setAttribute("class", "fa fa-arrow-circle-down");
    }
    };
}
// End Scroll Season list

// Start Nav Bar
NavBarElements[0].onclick = function() {
    window.scroll(0, document.getElementsByClassName("seasons")[0].offsetTop);
    highlight();
};
NavBarElements[1].onclick = function() {
    window.scroll(0, document.getElementsByClassName("cast")[0].offsetTop);
    highlight();
};
NavBarElements[2].onclick = function() {
    window.scroll(0, document.getElementsByClassName("rate")[0].offsetTop);
    highlight();
};
NavBarElements[3].onclick = function() {
    
    window.scroll(0, document.getElementsByClassName("about")[0].offsetTop);
    highlight();
};
//End Nav Bar



window.onresize = function(){
    //alert(window.innerWidth);
    loadingDiv.style.height = window.innerHeight.toString() + "px";
    loadingShape.style.fontSize = (0.2 * window.innerWidth).toString() + "px";
    loadingShape.style.marginTop = ((window.innerHeight - 0.2 * window.innerWidth)*0.5).toString() + "px";
    // notFixed
    Optimise_NavBar_NotFixed();
    // end notFixed
    // Fixed    
    Optimise_NavBar_Fixed();
    // end Fixed
    Optimise_Seasons();
    Optimise_Footer();
    // cast
    document.getElementsByClassName("cast")[0].style.padding = 
        ((110/1536) * window.innerWidth).toString() + "px 0";
    var castImages = document.getElementsByClassName("cast")[0].getElementsByTagName("img");
    var widthOfContainer = document.getElementsByClassName("actor-actress")[0].offsetWidth;
    for(var i=0;i < castImages.length;i++){
        castImages[i].style.width = (( 232 / 583) * widthOfContainer).toString() + "px";
        castImages[i].style.margin = (( 20 / 583) * widthOfContainer).toString() + "px";
        castImages[i].style.marginBottom = "0px";
    }
    var ASh3 = document.getElementsByClassName("cast")[0].getElementsByTagName("h3");
    for(var i=0;i < ASh3.length;i++){
        ASh3[i].style.fontSize = (( 20 / 583) * widthOfContainer).toString() + "px";
        ASh3[i].style.padding = (( 5 / 583) * widthOfContainer).toString() + "px";
        ASh3[i].style.marginTop = (( 120 / 583) * widthOfContainer).toString() + "px";
    }
    var Names = document.getElementsByClassName("cast")[0].getElementsByTagName("h2");
    for(var i=0;i < Names.length;i++){
        Names[i].style.fontSize = (( 18 / 583) * widthOfContainer).toString() + "px";
        Names[i].style.marginBottom = (( 20 / 583) * widthOfContainer).toString() + "px";
        Names[i].style.shadowOffsetX = (( 2 / 583) * widthOfContainer).toString() + "px";
        Names[i].style.shadowOffsetY = (( 2 / 583) * widthOfContainer).toString() + "px";
    }
    // end cast
};
/*
var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      var radius = 75;
      var startAngle = 1.1 * Math.PI;
      var endAngle = 1.9 * Math.PI;
      var counterClockwise = false;

      context.beginPath();
      context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      context.lineWidth = 15;

      // line color
      context.strokeStyle = 'black';
      context.stroke();
*/