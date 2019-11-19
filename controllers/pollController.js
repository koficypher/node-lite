const db = require('../database/models');
const Position = require('../database/models').Position;
const Candidate = require('../database/models').Candidate;
const Count = require('../database/models').Count;

module.exports = {
    getPolls : (req,res) => {
      Position.findAll({include: [{model: Candidate}] }).then((resp)=> {
        res.status(200).json({data:resp});
      });
    },
    getResults :  (req,res) => {
      Position.findAll({ 
            include: [
              {model: Candidate, 
                include: [{ model: Count, as: "votes"
                          }] 
              }] 
            }).then(resp => {
        res.status(200).json({data: resp});
      }); 
    }
};