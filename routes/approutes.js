const express = require('express')
const router = express.Router()
const con = require('../config/dbconfig')
const fetch = require('node-fetch')
const dateformat = require('dateformat')

router.get('/getSearchResults',(req,res)=>{
    var term = req.query.query
    fetch("https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged="+term+"&site=stackoverflow")
    .then(res=>res.json())
    .then(res=>res.items)
    .then(items=>{
        items.forEach(item=>{
            //console.log()
            con.query("Insert into stackoverflow(title,isAnswered,tags,lastActivity) values (?,?,?,?)",[
                item.title,
                item.is_answered,
                item.tags.join(","),
                dateformat(new Date(item.last_activity_date*1000),"dd mmmm yyyy")
                
            ],(err,result,fields)=>{
                if(err)
                    console.log(err)
            })
        })
        res.send(items)
    })
})

module.exports = router