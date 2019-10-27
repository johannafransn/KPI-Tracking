const mongoose = require('mongoose');



    const KPItracking = mongoose.model('KPItracking', 
    {
        channel: String, 
        region: String, 
        kpi: String, 
        timestamp: Date, 
        value: Number
    });  



module.exports = 
{
    
    connect: function() 
    {
        mongoose.connect('mongodb://Dev:nallen_7@ds121382.mlab.com:21382/kpitracking');
    
    },

   
    save: function(channel, region, kpi, value) 
    {

        const tester = new KPItracking(
            { 
            channel: channel, 
            region: region, 
            kpi: kpi, 
            timestamp: new Date(), 
            value: value });
            //tester.save().then(() => console.log('meow'));
    }
    
}



