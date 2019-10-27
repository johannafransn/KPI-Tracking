
const request = require('request');
const cheerio = require('cheerio');
const database = require("../data/database");


findFollowersMedium = function(body) 
{
    let $ = cheerio.load(body);

    let members = $('a[href="/@DeepBrain_Chain/followers?source=user_profile---------------------------"]');

    return parseInt(members.text().replace(/\s/g,''));
},


module.exports = function() 
{
    request('https://medium.com/@DeepBrain_Chain', function (error, response, body) 
    {
    console.log("Followers Medium");
    console.log(findFollowersMedium(body));
    database.save("Medium","Main", "Nr of Followers", findFollowersMedium(body));

    });
}
