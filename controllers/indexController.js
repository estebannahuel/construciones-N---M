const obras = require('../data/obrasDurlock.json')

module.exports = {
    index: (req,res) => {
   
        return res.render('index')
    },
    servicios: (req,res) => {
        return res.render('servicios')
    },
    obrasRealizadas: (req,res) => {
        return res.render('obraRealizadas',{
            obras
        })
    },
    
 
}