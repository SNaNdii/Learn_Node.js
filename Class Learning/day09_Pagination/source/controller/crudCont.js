const getController = (model) => async(req, res) => {
    try{
        const item = await model.find().lean().exec();
        return res.status(201).send({item : item});
    }catch(err){
        return res.status(500).send({message : errr.message});
    }
    
}

const postController = (model) => async(req, res) => {
    try{
        const item = await model.create(req.body);
        return res.status(201).send({item : item});

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