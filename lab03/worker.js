function send_time(){
   postMessage(new Date().toString())
}
setInterval(send_time,1000)