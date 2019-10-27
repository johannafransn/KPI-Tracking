

module.exports = 
{
    start: function() 
        {
        var CronJob = require('cron').CronJob;
        var job = new CronJob({
            cronTime: '00 37 23 * * 1-7',
            onTick: function() 
            {
                console.log("makesureitshappening");
               
            

            /*
            * Runs every day (Monday through Sunday)
            * at 11:30:00 AM. 
            */
            },
            start: false,
            timeZone: 'America/Los_Angeles'
        });
        job.start();
    }

} 


