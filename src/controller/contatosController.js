const { response } = require("express")
const contatoCollections = require("../models/contatoSchema")

const getAll = (request, response)=>{
    console.log(request.url)

    contatoCollections.find((error, contatos) =>{
        if(error){
            return response.status(500).send(error)
        } else{
            return response.status(200).send({
                mensagem: "GET com sucesso",
                contatos
            })
        }
    })
}

const addContato = (request, response)=>{
    const contatoDoBody = request.body //pegando o body que o usuario digitou
    const contato = new contatoCollection(contatoDoBody)//criando um novo dado com o body

    contato.save((error)=>{
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem: "POST com sucesso",
                contato
            })
        }
    })
}
//getContatoID
const getContatoID = (request, response) =>{
    const idParams = request.params.id
    contatoCollections.findById(idParams, (error, contatoID)=>{
        if(error){
            return response.status(500).send(error)
        }else{
            if(contatoID){
                return response.status(200).send(contatoID)
            }else{
                return response.status(404).send("Pessoa não encontrada")
            }
        }

    })
}

//getByNome
const getByNome = (request, response) =>{
    const nomeParms = request.params.nome
    contatoCollection.find({})
}

module.exports = {
    getAll,
    addContato,
    getContatoID
}