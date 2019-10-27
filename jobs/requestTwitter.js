
const request = require('request');
const cheerio = require('cheerio');
const database = require("../data/database");

findFollowersMainTwitter = function(body) 
{
    let $ = cheerio.load(body);

    let followersMainTw = $('.ProfileNav-value','.ProfileNav-item--followers');
    return followersMainTw.attr('data-count');
}


findFollowersMainTwitter = function(body) 
{
    let $ = cheerio.load(body);

    let followersMainTw = $('.ProfileNav-value','.ProfileNav-item--followers');
    return followersMainTw.attr('data-count');
}


module.exports = 
{

    requestMainTwitter: function() 
    {
        request('https://twitter.com/DeepBrainChain', function (error, response, body) 
        {
        console.log("Main Twitter");
        console.log(findFollowersMainTwitter(body));
        database.save("Twitter","Main", "Nr of Followers", findFollowersMainTwitter(body));
        });
    },

    requestTwitterKorea: function() 
    {
        request('https://twitter.com/ChainDeepbrain', function (error, response, body) 
        {
        console.log("Twitter Korea");
        console.log(findFollowersMainTwitter(body));
        database.save("Twitter","Korea", "Nr of Followers", findFollowersMainTwitter(body));
        });
    },

}