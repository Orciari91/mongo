const express = require("express")
const MongoClient() = require ("mongodb").MongoClient //Pido solo el mongoclient de todo el mongodb
const easyDB = require("easydb-io")

const api = express()

const uri = "mongodb://localhost:27017"
const dbName = "test"
const collectionName = "mongoTest"

const client = MongoClient(uri, config) //"config" va a ser un objeto vacio por ahora

api.listen(80) 
api.use(express.urlencoded({extended: true}))
api.use(express.json())

client.connect(err =>{
	if(err) throw err

	const db = client.db(dbName)
	const collection = db.collection(collectionName)

	collection.find().toArray((err, result) => {
		if (err)throw err

		console.log({result}, result.length)
		
		client.close()
	})

	const obj = {name:'Carlitos', adress: 'Corriente 1234'}

	collection.insertOne(obj, (err, result) => {
		if(err) throw err
			console.log({ result })
		client.close()

		result.map(({name}) => console.log({name}))
	})
})

api.get("/api/peliculas/", function(request, response){

	let elID = request.params.id

	if(!elID){ 

		peliculas.list(function(error, listado){
			
			let rta = error ? { rta : "error", error } : listado
			response.json(rta)
		})

	} else { 

			peliculas.get(elID, function(error, pelicula){

			let rta = error ? { rta: "error", error } : pelicula

			response.json(rta)	
	})

	}

})