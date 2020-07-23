const Tweet = require('./../../models/tweets');
const getTweets = (req, res) =>{
    Tweet
    .find({})
    .populate('user', 'username')
    .populate('comments.user', 'username')
    .then((response)=>{
        res.status(200).send(response);
    })
    .catch((err)=>{
        res.sendStatus(500);
    })
};
const getTweet = (req, res) => {
    const id = req.params.id;
    Tweet
    .find({_id : id})
    .populate('user', 'username')
    .then((response)=>{
        res.status(200).send(response);
    })
    .catch((err)=>{
        res.sendStatus(500);
    })
};
const newTweet = (req, res) => {
    const tweet = {
        content: req.body.content,
        user: req.body.user
    };
    if(tweet.content && tweet.user){
        const object = new Tweet(tweet);
        object.save()
        .then((response)=>{
            res.status(201).send(response);
        })
        .catch((err)=>{
            res.sendStatus(500);
        })
    }else{
        res.sendStatus(500);
    }
};

const deleteTweet = (req, res) => {
    res.send("Borrar tweet");
};

const newComment = (req, res) => {
    const tweet = req.body.tweet;
    const comment = {
        comment: req.body.comment,
        user: req.body.user
    };
    Tweet.updateOne({_id :tweet}, {$addToSet: {comments : comment}})
    .then(response=>{
        res.status(202).send(response);
    })
    .catch(err=>{
        res.status(500).send(err);
    })
};

const deleteComment = (req, res) => {
    let idTweet = req.body.idTweet;
    let idComment = req.body.idComment;
	
	
	Tweet.findByIdAndUpdate(idTweet,{ $pull: { 'comments': {  _id: idComment } } })
	.then(response=>{
        res.status(202).send('Comentario eliminado');
    })
    .catch(err=>{
        res.status(500).send('Imposible eliminar comentario');
    })
	
	
};

module.exports = {getTweets, getTweet, newTweet, deleteTweet, newComment, deleteComment};