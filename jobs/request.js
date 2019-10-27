const request = require('request');
const cheerio = require('cheerio');
const database = require("../data/database");



findTransactions = function(body) 
{
    let $ = cheerio.load(body);

    let members = $('div .jss432 jss441 jss712 jss710');

    return parseInt(members.text().replace(/\s/g,''));
}


findFollowersReddit = function(body) 
{
    let $ = cheerio.load(body);

    let members = $('p[class="s1rdie1g-12 qKTMJ"]');
    //console.log(members);
    return parseInt(members.text().replace(/\s/g,''));
}

findFollowersFacebook = function(body) 
{
    let $ = cheerio.load(body);

    let members = $('div[class="_3xoo"]');
    return parseInt(members.text().replace(/\s/g,''));
}


findMembers = function(body) 
{
    let $ = cheerio.load(body);

    let members = $('div[class="tgme_page_extra"]');
    return parseInt(members.text().replace(/\s/g,''));
}

const channel = "Telegram";
const kpi = "Nr of Members"

module.exports = 
{
    requestTeleKorea: function() 
    {
        request('http://t.me/DeepBrainChainKor', function (error, response, body) 
        {
        console.log("Telegram Korea");
        console.log(findMembers(body));
        database.save(channel,"Korea", kpi, findMembers(body));
        });
    }, 
  

    requestTeleMain: function() 
    {
        request('http://t.me/deepbrainchain', function (error, response, body) 
        {
        console.log("Telegram Main DBC");
        console.log(findMembers(body));
        database.save(channel, "Main", kpi, findMembers(body));

        });
    },

    requestTeleAIminers: function() 
    {
        request('http://t.me/DeepBrainChainAIminers', function (error, response, body) 
        {
        console.log("Telegram AI Miners");
        console.log(findMembers(body));
        database.save(channel, "AI Miners", kpi, findMembers(body));

        });
    },

    requestTeleChina: function() 
    {
        request('http://t.me/deepbrainchainchina', function (error, response, body) 
        {
        console.log("Telegram China");
        console.log(findMembers(body));
        database.save(channel,"China", kpi, findMembers(body));

        });
    },
 
    requestTeleRussia: function() 
    {
        request('http://t.me/deepbrainchain_Rus', function (error, response, body) 
        {
        console.log("Telegram Russia");
        console.log(findMembers(body));
        database.save(channel,"Russia", kpi, findMembers(body));

        });
    },

    requestTeleGermany: function() 
    {
        request('http://t.me/DBCger', function (error, response, body) 
        {
        console.log("Telegram Germany");
        console.log(findMembers(body));
        database.save(channel,"Germany", kpi, findMembers(body));

        });
    },

    requestTeleIndonesia: function() 
    {
        request('http://t.me/DeepBrainChainIndonesia', function (error, response, body) 
        {
        console.log("Telegram Indonesia");
        console.log(findMembers(body));
        database.save(channel,"Indonesia", kpi, findMembers(body));

        });
    },

    requestTelePhilippines: function() 
    {
        request('http://t.me/DeepBrainChainPhilippines', function (error, response, body) 
        {
        console.log("Telegram Philippines");
        console.log(findMembers(body));
        database.save(channel,"Philippines", kpi, findMembers(body));

        });
    },
 
    

    requestTeleVietnam: function() 
    {
        request('http://t.me/DeepBrainChainVietnam', function (error, response, body) 
        {
        console.log("Telegram Vietnam");
        console.log(findMembers(body));
        database.save(channel,"Vietnam", kpi, findMembers(body));

        });
    },

    requestTeleThailand: function() 
    {
        request('http://t.me/DeepBrainChainThai', function (error, response, body) 
        {
        console.log("Telegram Thailand");
        console.log(findMembers(body));
        database.save(channel,"Thailand", kpi, findMembers(body));

        });
    },

    requestTeleIndia: function() 
    {
        request('http://t.me/DeepBrainChainIndia', function (error, response, body) 
        {
        console.log("Telegram India");
        console.log(findMembers(body));
        database.save(channel,"India", kpi, findMembers(body));

        });
    },

    requestTeleJapan: function() 
    {
        request('http://t.me/DBCJapan', function (error, response, body) 
        {
        console.log("Telegram Japan");
        console.log(findMembers(body));
        database.save(channel,"Japan", kpi, findMembers(body));

        });
    },

    requestTeleTurkey: function() 
    {
        request('http://t.me/DeepBrainChainTurkey', function (error, response, body) 
        {
        console.log("Telegram Turkey");
        console.log(findMembers(body));
        database.save(channel,"Turkey", kpi, findMembers(body));

        });
    },

    requestTeleMiddleEast: function() 
    {
        request('http://t.me/DeepBrainChainMiddleEast', function (error, response, body) 
        {
        console.log("Telegram MiddleEast");
        console.log(findMembers(body));
        database.save(channel,"Middle East", kpi, findMembers(body));

        });
    },

    requestTeleSouthAmerica: function() 
    {
        request('http://t.me/DeepBrainChainSouthAmerica', function (error, response, body) 
        {
        console.log("Telegram South America");
        console.log(findMembers(body));
        database.save(channel,"South America", kpi, findMembers(body));

        });
    },

    requestNeoTransactions: function() 
    {
        request('https://neotracker.io/browse/asset/1', function (error, response, body) 
        {
        console.log("NEO Tracker Transactions");
        console.log(findTransactions(body));
        database.save("Neo Tracker","Neo Tracker Transactions", "Nr of Transcations", findTransactions(body));

        });
    },


    requestFacebookFollowers: function() 
    {
        request('https://www.facebook.com/OfficialDeepBrainChain/', function (error, response, body) 
        {
        console.log("Facebook Followers");
        console.log(findFollowersFacebook(body));
        database.save(channel,"Facebook", kpi, findFollowersFacebook(body));

        });
    },

    requestRedditFollowers: function() 
    {
        request('https://www.reddit.com/r/DeepBrainChain/', function (error, response, body) 
        {
        console.log("Reddit");
        console.log(findFollowersReddit(body));
        database.save("Reddit","Main", "Nr of Followers", findFollowersReddit(body));

        });
    },
}


