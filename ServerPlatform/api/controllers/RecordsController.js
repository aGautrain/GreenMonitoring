/**
 * RecordsController
 *
 * @description :: Server-side logic for managing Records
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	hello: function(req,res){
		return res.send(200,'Hello world !');
	},
	
	temperature: function(req,res) {
		Records.find({}).exec(function (err, recs){
			if(err) return res.serverError(err);
			if(!recs) return res.json([]);
			
			var recsFormated = [];
			
			recs.forEach(function(element, index){
                
				var rec = {
					value: element.temperature.toFixed(2),
					date: element.date,
					id: element.id
				};
				
                recsFormated.push(rec);
                    
                if(index == (recs.length-1)){
                    return res.json(recsFormated); 
                }        
            });
			
		});
	},
	
	humidity: function(req,res) {
		Records.find({}).exec(function (err, recs){
			if(err) return res.serverError(err);
			if(!recs) return res.json([]);
			
			var recsFormated = [];
			
			recs.forEach(function(element, index){
                
				var rec = {
					value: element.humidity.toFixed(2),
					date: element.date,
					id: element.id
				};
				
                recsFormated.push(rec);
                    
                if(index == (recs.length-1)){
                    return res.json(recsFormated); 
                }        
            });
			
		});
	}
	
};

