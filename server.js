const database = require("./data/database");
const express = require("express"); 
const startJob = require("./jobs/start");
const requestTelegram = require("./jobs/request.js");
const requestMedium = require("./jobs/requestMedium.js");
const requestYoutube = require("./jobs/requestYoutube.js");
const requestTwitter = require("./jobs/requestTwitter.js");




const app = express(); 
const port = process.env.PORT || 8080;

app.use(express.static(__dirname+"/dist/"));
app.get(/.*./),function(req,res) 
{ 
// send all request to home page
res.sendfile(__dirname + "/dist/index.html");
} 


app.listen(port);

database.connect();
console.log("appislisteningto" + port);
startJob.start();

requestTelegram.requestTeleMain();
requestTelegram.requestTeleAIminers();
requestTelegram.requestTeleChina();
requestTelegram.requestTeleKorea();
requestTelegram.requestTeleRussia();
requestTelegram.requestTeleGermany();
requestTelegram.requestTeleIndonesia();
requestTelegram.requestTelePhilippines();
requestTelegram.requestTeleVietnam();
requestTelegram.requestTeleThailand();
requestTelegram.requestTeleIndia();
requestTelegram.requestTeleJapan();
requestTelegram.requestTeleTurkey();
requestTelegram.requestTeleMiddleEast();
requestTelegram.requestTeleSouthAmerica();
requestTelegram.requestNeoTransactions();
requestTelegram.requestFacebookFollowers();
requestYoutube();
requestMedium();
requestTwitter.requestMainTwitter();
requestTwitter.requestTwitterKorea();
requestTelegram.requestRedditFollowers();



