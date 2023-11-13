const endDate = "6 September 2023 02:00 PM"
document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input")
function clock(){
    const end= new Date(endDate)
    const current = new Date()
    const diff=(end-current)/1000;
    //console.log(diff);
    if(diff < 0) return;//if we dont do this when the timer gets finished it shows -1 which is wrong so now it will show 0
    //convertion into days
    input[0].value = Math.floor(diff / 3600 / 24); //60 mins have 3600s
    //convertion into hours
    input[1].value = Math.floor(diff / 3600) % 24;
    //convertion into minutes
    input[2].value = Math.floor(diff / 60 ) %60;
    //convertion into seconds
    input[3].value = Math.floor(diff ) % 60;
}
clock() //initial call

setInterval(
    () => {
        clock()
    },
    1000
)//we created a function for in order for the clock to run and change automatically