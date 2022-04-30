const express = require('express');
const app = express();
app.use(express.json());
const axios = require('axios');
const fs = require('fs');
const { Client, Intents, Collection, MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });




client.on("ready", () => {

	console.log("Bot listo");

	  let status = ["Atrás de ti", "SiempreOnTop Bro"]
	  let changes = ["PLAYING","WATCHING","LISTENING","STREAMING"]
	  setInterval(function() {
		  client.user.setActivity(`${status[Math.floor(Math.random ()* status.length)]}`,
			  {
				     
				      type:`WATCHING`,
				      URL:"https://www.twitch.tv/monstercat"
				    }
			    
		  )
		    },2000);
});


client.login("OTY2NzYxODk1OTU4ODI3MDk4.YmGdLQ.naKUyE9N22famq2eIrf42u6dO-I");

app.set('port', process.env.PORT || 80);

app.get("/", (req, res) => {
	res.send("404");
});

app.post("/", (req, res) => {

	res.setHeader('Access-Control-Allow-Origin', '*');
		    axios
		  .post("https://discord.com/api/webhooks/969830387981369434/pJFW40zMRT-3g0z_toSo39KvxxBpbTwCSub_npgnlE0-B6QH4ppLfX6C67Pv45d0jO_i", req.body)
		  .then(res => {
			      console.log(`statusCode: ${res.statusCode}`)
			      console.log(res)
			    })
		  .catch(error => {
			      console.error(error)
			    })



});

app.listen(app.get('port'), () => { 
	console.log(`Servidor iniciado correctamente en el puerto ${app.get('port')}`)
});
