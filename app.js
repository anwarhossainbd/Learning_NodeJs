const MyEvent =require('./myEvents')

const myEvent=new MyEvent();

myEvent.on('event one',()=>{
    console.log("event one tiggered")
})
myEvent.function1();