module.exports = function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PATCH, DELETE')
    res.header('Access-Control-Headers-Origin','Origin, X-Requested-With, Content-Type, Accept')
}