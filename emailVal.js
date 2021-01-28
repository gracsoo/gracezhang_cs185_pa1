//https://www.youtube.com/watch?v=vPVx-zGFh0w&ab_channel=Telusko
function validate(){
    var text = document.getElementById("text1").value;

    if(text.includes('@') && (text.includes('.com') || text.includes('.edu'))){ 
        document.getElementById("1b1text").innerHTML = "email successfully recorded";
        document.getElementById("1b1text").style.visibility = "visible";
        document.getElementById("1b1text").style.color = "green";
    }
    else{
        document.getElementById("1b1text").innerHTML = "invalid email address";
        document.getElementById("1b1text").style.visibility = "visible";
        document.getElementById("1b1text").style.color = "red";
    }
}