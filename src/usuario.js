//Obtener data de un user
router.post('/obtenerdatausuario' , (req, res) => {
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs,err){
        if(!err){
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})