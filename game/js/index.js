window.onload = function () {
    document.getElementById("game").style.display = "none";

}
var randomNumber = 0;
var lives = 3;

function start() {
    this.msg("result","");

    this.lives = 3
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("game").style.display = "block";
    this.randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log(""+this.randomNumber);
    this.msg("lives", "Lives: " + this.lives);

}

function msg(id, msg) {
    document.getElementById(id).innerHTML = msg;
}

function tryGame() {

    var number = document.getElementById("num").value;
    if (number < 1 || number > 10) {
        this.msg("error", "Tiene que poner un numero entre el 1 y el 10");

    } else {
        this.msg("error", "");

        if (number != this.randomNumber) {
            this.lives -= 1;
            this.msg("lives", "Lives: " + this.lives);
            if (this.lives == 0) {
                document.getElementById("game").style.display = "none";
                this.msg("result","Lose");
                document.getElementById("startBtn").style.display = "block";

            }
        }else{
            this.msg("result","Win!!!");
            document.getElementById("startBtn").style.display = "block";
            document.getElementById("game").style.display = "none";

        }
    }
}