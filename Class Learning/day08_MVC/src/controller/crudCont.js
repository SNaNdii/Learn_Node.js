const post = (Model) => async(req, res) => {
    try{
        const item = await Model.create(req.body);
        return res.status(201).send({item : item})
    }catch(err){
        return res.status(500).send({message : err.message})
    }
};

const get = (Model) => async(req, res) => {
    try{
        const item = await Model.find().lean().exec();
        return res.status(201).send({item : item})
    }catch(err){
        return res.status(500).send({message : err.message})
    }
};

const patch = (Model) => async(req, res) => {
    try{
        const item = await Model.findByIdAndUpdate(req.params.id , req.body, {new: true}).lean().exec();
        return res.status(201).send({item : item})
    }catch(err){
        return res.status(500).send({message : err.message})
    }
};

const deleteOne = (Model) => async(req, res) => {
    try{
        const item = await Model.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send({item : item})
    }catch(err){
        return res.status(500).send({message : err.message})
    }
};

module.exports = { post , get , patch, deleteOne}