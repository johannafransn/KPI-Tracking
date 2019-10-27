
const request = require('request');
const cheerio = require('cheerio');
const database = require("../data/database");


findSubsYT = function(body) 
{
    let $ = cheerio.load(body);

    let members = $('span[class="yt-subscription-button-subscriber-count-branded-horizontal subscribed yt-uix-tooltip"]');
   

    return parseInt(members.text().replace(/\s/g,'').replace(',',''));
}


module.exports = function() 
{
    request('https://www.youtube.com/channel/UCE8fSDw-zYrw4OQc62JG_pQ', function (error, response, body) 
    {
    console.log("Youtube");
    console.log(findSubsYT(body));
    database.save("Youtube","Main", "Nr of Subscribers", findSubsYT(body));
    });
}