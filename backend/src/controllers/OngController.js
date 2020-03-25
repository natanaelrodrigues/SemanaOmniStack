const crypto = require('crypto');
const connection = require('../database/connection');


module.exports= {

    async index (request, response)  {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    
    },

    async create(request, response){
        const data = request.body;
        const {name, 
               email, 
               whatsapp, 
               city, 
               UF} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            UF,
        })
    
        //console.log(data);
        //console.log(id);
    
        return response.json({id});
    }
};