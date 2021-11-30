setScreen("screen1");
hideElement("button1");
//when you click the arrow
onEvent("button2", "click", function( ) {
  //the text of the text area will change
  setText("text_area1", "You can do this by investing in stock market or cryptocurrency, to learn how to invest, just click on start learning. FOR MORE OPTIONS CLICK ON THE MENU BUTTON ON THE TOP.");
//the arrow will be hidden
hideElement("button2");
//now start learning button will be visible
showElement("button1");
});

//when start learning is clicked
onEvent("image2","click",function(){
  setScreen("screen2");
});
//when button back and button 14 is clicked then set to home
onEvent("button4","click",function(){
  setScreen("screen1");
});
onEvent("button14","click",function(){
  setScreen("screen1");
});
//open demat frm menu
onEvent("button7","click",function(){
  setScreen("screen3");
});
//menu of screen3(open demat)
onEvent("image9","click",function(){
  setScreen("screen2");
});
//when screen3's stocket heading clicked
onEvent("button16","click",function(){
  setScreen("screen1");
});
//when a person will click on skip and create...so next screen will come.
onEvent("button7","click",function(){
  setScreen("screen6");
});
onEvent("image11","click",function(){
  setScreen("screen2");
});
onEvent("button21","click",function(){
  setScreen("screen1");
});
//open angel broking demat account
onEvent("button3","click",function(){
open("https://www.angelone.in/open-demat-account");
});
//from trusted banks
onEvent("buttonfrm_trstd_bnks","click",function(){
  setScreen("screen4");
});
//yesbank

onEvent("button17","click",function(){
open("https://www.yesbank.in/personal-banking/yes-individual/wealth-management/demat-account");
});
onEvent("button22", "click", function( ) {
  open("https://www.kotak.com/en/personal-banking/investments/demat-account.html");
});

onEvent("button23", "click", function( ) {
  open("https://allinone.hdfcsec.com/lp/open-trading-account?utm_source=bing&utm_medium=cpc&utm_campaign=Bing_Search_Brand_Top_Exact_All_India&utm_term=hdfc%20bank%20demat%20account&utm_Content=&adgroup=1276533717095839&matchtype=e&devicemodel=&device=c&network=o&placement=&msclkid=97b96e2d91dc14853e5a0f0fdfea6c79&utm_content=HDFC%20Demat%20Account");
});

onEvent("button24", "click", function( ) {
  open("https://secure.icicidirect.com/accountopening/open-demat-trading-account-for-free-neo?utm_source=bing_search&utm_medium=OAO-Brand-Demat-BMM&utm_campaign=OAO&utm_content=trading_offer&utm_adgroup=OAO-ICICI-Demat-BMM&utm_term=%2Bicici%20%2Bdemat&utm_adid=&msclkid=4c0a85712f531016c16de45361e3ad30");
});

onEvent("button25", "click", function( ) {
  open("https://www.axisbank.com/retail/investment/demat-account/features-benefits");
});

onEvent("image8","click",function(){
  setScreen("screen2");
});

onEvent("button8","click", function(){
  open("https://www.bing.com/search?q=today%27s+stock+market+overview&cvid=5e87c5d6ee0b4093840afb4c60972767&aqs=edge..69i57j0.13003j0j1&pglt=931&FORM=ANNTA1&PC=DCTS");
});
//Get inspired by other investors
onEvent("button10","click", function(){
  setScreen("get_inspired");
});
//it's menu


//start of it
onEvent("startbtn","click", function(){
  setScreen("screen7");
});

onEvent("image25","click", function(){
  setScreen("screen2");
});
onEvent("button5","click", function(){
  setScreen("screen8");
});
onEvent("button26","click", function(){
  setScreen("screen9");
});
onEvent("image28","click", function(){
  setScreen("screen2");
});

onEvent("button30","click", function(){
  setScreen("screen10");
});
onEvent("image30","click", function(){
  setScreen("screen2");
});

onEvent("button32","click", function(){
  setScreen("screen11");
});
onEvent("image32","click", function(){
  setScreen("screen2");
});

onEvent("button34","click", function(){
  setScreen("screen12");
});
onEvent("image34","click", function(){
  setScreen("screen2");
});
onEvent("button36","click", function(){
  setScreen("screen1");
});
//now-- the biggest scams of india
onEvent("button11","click", function(){
  setScreen("screen13");
});
onEvent("button38","click", function(){
  setScreen("hmscm");
});
onEvent("image36","click", function(){
  setScreen("screen2");
});
onEvent("image26","click", function(){
  setScreen("screen2");
});
onEvent("button42","click", function(){
  setScreen("hmscm2");
});
onEvent("image39","click", function(){
  setScreen("screen2");
});
onEvent("button44","click", function(){
  setScreen("screen13");
});
onEvent("button39","click", function(){
  setScreen("kpscm");
});
onEvent("image42","click", function(){
  setScreen("kpscm");
});
onEvent("button46","click", function(){
  setScreen("kpscm2");
});
onEvent("image44","click", function(){
  setScreen("screen2");
});
onEvent("button48","click", function(){
  setScreen("screen13");
});
onEvent("button40","click", function(){
  setScreen("stscm");
});
onEvent("image46","click", function(){
  setScreen("screen2");
});
onEvent("button50","click", function(){
  setScreen("stscm2");
});
onEvent("image49","click", function(){
  setScreen("screen2");
});
onEvent("button52","click", function(){
  setScreen("screen13");
});
onEvent("button12","click", function(){
  setScreen("screen20");
});
onEvent("image51","click", function(){
  setScreen("screen2");
});
onEvent("button54","click", function(){
  setScreen("mvstkt");
});
onEvent("image54","click", function(){
  setScreen("screen2");
});
onEvent("button57","click", function(){
  setScreen("screen20");
});
onEvent("button55","click", function(){
  setScreen("mvbsns");
});
onEvent("image58","click", function(){
  setScreen("screen2");
});

onEvent("button59","click", function(){
  setScreen("screen20");
});
onEvent("button13","click", function(){
  setScreen("bob");
});
onEvent("image62","click", function(){
  setScreen("screen2");
});
onEvent("button61","click", function(){
  setScreen("bob2");
});
onEvent("image65","click", function(){
  setScreen("screen2");
});
onEvent("button63","click", function(){
  setScreen("bob3");
});
onEvent("image68","click", function(){
  setScreen("screen2");
});
onEvent("buttonbob","click", function(){
  setScreen("bob4");
  
});
onEvent("image71","click", function(){
  setScreen("screen2");
});
onEvent("button67","click", function(){
  setScreen("bob5");
});
onEvent("image74","click", function(){
  setScreen("screen2");
});
onEvent("button69","click", function(){
  setScreen("bob6");
});
onEvent("image57","click", function(){
  setScreen("screen2");
});
onEvent("button71","click", function(){
  setScreen("bob7");
});
onEvent("image80","click", function(){
  setScreen("screen2");
});
onEvent("button73","click", function(){
  setScreen("bob8");
});
onEvent("image83","click", function(){
  setScreen("screen2");
});
onEvent("button75","click", function(){
  setScreen("bob9");
});
onEvent("image86","click", function(){
  setScreen("screen2");
});
onEvent("button77","click", function(){
  setScreen("bob10");
});
onEvent("image89","click", function(){
  setScreen("screen2");
});
onEvent("button79","click", function(){
  setScreen("bob11");
});
onEvent("image92","click", function(){
  setScreen("screen2");
});
onEvent("button81","click", function(){
  setScreen("screen2");
});
onEvent("button9","click", function(){
  setScreen("cryptocurrency");
});
onEvent("image95","click", function(){
  setScreen("screen2");
});
onEvent("button83","click", function(){
 playSpeech("A Cryptocurrency is an online version of money a digital asset to be precise The name is derived from Cryptography, which is the art of writing and solving codes. Cryptography is used to encrypt transactions and control the production of Cryptocurrency. It is a strictly monitored process, as it uses the Blockchain", "female", "English");
   
});
onEvent("button84","click", function(){
  setScreen("cryptocurrency2");
});
onEvent("button86","click", function(){
playSpeech("Bitcoin was the first Cryptocurrency ever created. In November 1, 2008, a man named Satoshi Nakamoto posted a research paper to an obscure cryptography listserv describing his design for a new digital currency that he called Bitcoin. None of the list’s veterans had heard of him, and what little information could be", "female", "English");
});
onEvent("button87","click", function(){
  setScreen("cryptocurrency3");
});
onEvent("image97","click", function(){
  setScreen("screen2");
});
onEvent("image99","click", function(){
  setScreen("screen2");
});
onEvent("button89","click", function(){
  playSpeech("The Basic Law of Supply and Demand governs all price changes. The best indicator of the future course of the Cryptocurrency market is the relation of supply to demand. Stated simply, a Cryptocurrency’s value begins to decline when the number of coins offered exceeds the number of bids for purchase. This type of market", "female", "English");
});
onEvent("button90","click", function(){
  setScreen("cryptocurrency4");
});
onEvent("image101","click", function(){
  setScreen("screen2");
});

onEvent("button92","click", function(){
  playSpeech("No one can deny that in markets throughout the world, the big fish eat the little ones. Large operators could not operate successfully without the large number of people making up the public. The public is used so large operators can more easily do the trading they choose to do. Tape reading and chart reading enable on…", "female", "English");
});
onEvent("button93","click", function(){
  setScreen("cryptocurrency5");
});
onEvent("image103","click", function(){
  setScreen("screen2");
});
onEvent("button95","click", function(){
playSpeech("Many of the principal moves in the Cryptocurrency market are made by large operators (i.e., developers, well-informed insiders) whose work we must detect and follow. When important interests are accumulating a Cryptocurrency, a study of the transactions will frequently disclose the fact. Not in every case, but in the", "female", "English");
});
onEvent("button96","click", function(){
  setScreen("cryptocurrency6");
});
onEvent("image105","click", function(){
  setScreen("screen2");
});
onEvent("button97", "click", function( ) {
playSpeech("Every upward or downward swing in the Cryptocurrency market, whether it amounts to many points, only a few points, or fractions of a point, consists of numerous buying and selling waves. These waves run just long enough to attract a following. When this following is exhausted for the time being, that wave comes to an", "female", "English");
    
});
onEvent("button98","click", function(){
  setScreen("cryptocurrency7");
});
onEvent("image107", "click", function( ) {
  setScreen("screen2");
});

onEvent("button100", "click", function( ) {
playSpeech("After we have determined the position and probable trend of the general Cryptocurrency market and have examined the action of the various Cryptocurrencies to see which are most likely to follow or lead the market as a whole, we must single out those individual Cryptocurrencies that are in the best position for our…", "female", "English");
    
});
onEvent("button101", "click", function( ) {
  setScreen("cryptocurrency8");
});
//to move to learn screen
onEvent("button6","click",function(){
  setScreen("learn1");
});
//menu from learn 1
onEvent("image5","click", function(){
  setScreen("Screen2");
});
//proceed button
onEvent("button121","click", function(){
  setScreen("bks1");
});
//menu of proceed 1
onEvent("image111","click", function(){
  setScreen("screen2");
});
//book1
onEvent("image6","click", function(){
open("https://1lib.in/dl/11386685/7e284b");
});
//book2
onEvent("image10", "click", function(){
open("https://1lib.in/dl/565303/52fa25?dsource=recommend");
});
//book3
onEvent("image10", "click", function(){
open("https://1lib.in/dl/565303/52fa25?dsource=recommend");
});
//next scrn
onEvent("button103", "click", function(){
  setScreen("screen14");
});
//menu
onEvent("image17", "click", function(){
  setScreen("screen2");
});
//intelligent investor
onEvent("image18", "click", function(){
  open("https://1lib.in/dl/859143/d61ed4?dsource=recommend");
});
//warren buffet
onEvent("image19", "click", function(){
  open("https://1lib.in/dl/3313120/20f2aa?dsource=recommend");
});
//next scren
onEvent("button105", "click", function(){
setScreen("screen15");
  
});
//screen menu
onEvent("image112", "click", function(){
setScreen("screen2");
  
});
onEvent("image113", "click", function( ) {
open("https://1lib.in/dl/5002783/13c0f8?dsource=recommend");
    
});

onEvent("image114", "click", function( ) {
open("https://1lib.in/dl/459939/27ca3e?dsource=recommend");
    
});
onEvent("button1", "click", function(){
setScreen("learn1");
  
});
onEvent("image14", "click", function(){
setScreen("screen2");
  
});
onEvent("image22", "click", function(){
setScreen("screen2");
  
});
