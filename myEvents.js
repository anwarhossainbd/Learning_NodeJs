const EventEmitter=require('events')

class myEvents extends EventEmitter{
    function1=()=>{
        this.emit('event one')
    }
}

module.exports =myEvents ;