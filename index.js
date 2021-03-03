const express = require("express");
const app = express();
const bodyparser= require("body-parser");
const cors= require("cors");
app.use(cors());
app.use(bodyparser.urlencoded({extended :false}));
app.use(bodyparser.json())


var DB = {

  games: [
      {
          id:25,
          title:"call off duty MW",
          year:2020,
          price:60
      },
      {
        id:65,
        title:"Sea of thieves",
        year:2018,
        price:40
    },
    {
        id:30,
        title:"call off duty MW",
        year:2020,
        price:60
    },
    {
        id:40,
        title:"call off duty MW",
        year:2020,
        price:60
    },
  ]

}

// criar os nossos pointes ou seja as nossas rotas para as nossas apis 

// listagem
app.get ("/games",(req,res)=>{
  // verificação da api executada com sucesso
    res.statusCode=200;
    res.json(DB.games);


})

// verificação por id
app.get("/games/:id",(req,res)=>{

  if(isNaN(req.params.id)){
  // sintaxe incorreta
    res.sendStatus(400)

  }else{
    var id = parseInt(req.params.id);
    var game = DB.games.find( g =>g.id==id)

    if (game!=undefined){
      res.sendStatus=200
      res.json(game)
    }else {
      res.sendStatus(404)
    }
  }


});

// cadastrar o geme 
app.post("/game",(req,res)=>{

var {title,year,price}=req.body

DB.games.push({
  id:124,
  title,
  price,
  year

});

res.sendStatus(200);

})
// deletar api
app.delete("/game/:id",(req,res)=>{
  if(isNaN(req.params.id)){
    // sintaxe incorreta
      res.sendStatus(400)
  
    }else{
      var id = parseInt(req.params.id);
      var index = DB.games.findIndex( g =>g.id==id)

      if (index==-1){
        res.sendStatus(404)
      }else{
        DB.games.splice[index,1]
        res.sendStatus(200);
      }
  
    }

})

// edição de dados 

app.put("/game/:id",(req,res)=>{
   
  if (isNaN(req.params.id)){
    res.sendStatus(400)
   
  }else{
    var id = parseInt(req.params.id);
    var game = DB.games.find( g =>g.id==id)

    if (game !=undefined){
      var {title,price,year}=req.body

      if(game!=undefined){
        game.title=title
      }
      if(game!=undefined){
        game.price=price
      }
      if(game!=undefined){
        game.year=year
      }
      res.sendStatus(200)
    }else {
    res.sendStatus(404)

    }
   
  }
})


app.listen(45678,()=>{
  console.log("API RODANDO")

})



