const transport = require("../configuration/mail")

const getController = (model) => async(req, res) => {
    try{
        const page = req.query.page;
        const pagesize = req.query.pagesize || 10;
        const skipItems = (page - 1) * pagesize;

        const item = await model.find().skip(skipItems).limit(pagesize).lean().exec();

        return res.status(201).send({item : item});
    }catch(err){
        return res.status(500).send({message : err.message});
    }
    
}

const postController = (model) => async(req, res) => {
    try{
        const item = await model.create(req.body);
        transport.sendMail(
            {
                from: '"Admin" <admin@osource.com>',
                to: item.sellerMail,
                subject: "Welcome to the DataBase",
                text: `Hello ${item.name}, Thank you for connecting with us`,
                html: `<b>Hello ${item.name}, Thank you for connecting with us</b>`,
            }
        );
        return res.status(201).send({message : "User Deatals Uploaded Successfully"});

    }catch(err){
         return res.status(402).send({message : err.message});   
    }
}

const patchController = (model) => async(req, res) => {
    try{
        const item = await model.findByIdAndUpdate(req.params.id , req.body, {new : true});
        return res.status(201).send({item : item});
    }catch(err){
        return res.status(402).send({message : err.message}); 
    }
}

const deleteController = (model) => async(req, res) => {
    try{
        const item = await model.findByIdAndDelete(req.params.id);
        return res.status(201).send({item : item});
    }catch(err){
        return res.status(402).send({message : err.message}); 
    }
}

module.exports = {getController , postController , patchController , deleteController}