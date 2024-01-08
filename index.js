const http = require('http')
const express = require("express")
const path = require('path')
const { Server } = require('socket.io')
const { Socket } = require('engine.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

//Socket.io
io.on('connection', (Socket)=>{
    Socket.on("user-message", (message)=>{
        io.emit('message', message)
    })
})

app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
  return res.sendFile('/publicindex.html')
})

server.listen(9000, () => console.log(`Server is running on PORT: 9000`))
