var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (n = 0; n < numberOfDrumButtons; n++) {
    document.querySelectorAll(".drum")[n].addEventListener("click", function (event){
        var buttonInnerHTML = this.innerHTML;
        playAudio(buttonInnerHTML);
        buttonAnimmation(buttonInnerHTML);
    });
}

    document.addEventListener("keydown", function (event) {
        
        playAudio(event.key);
        buttonAnimmation(event.key);
    });
       
    



        function playAudio(key) {
                
            switch (key) {
                case "w":
                    var tom1 = new Audio("./sounds/tom-1.mp3");
                    tom1.play();
                break;
        
                case "a":
                    var tom2 = new Audio("./sounds/tom-2.mp3");
                    tom2.play();
                break;
        
                case "s":
                    var tom3 = new Audio("./sounds/tom-3.mp3");
                    tom3.play();
                break;
        
                case "d":
                    var tom4 = new Audio("./sounds/tom-4.mp3");
                    tom4.play();
                break;
        
                case "j":
                    var snare = new Audio("./sounds/snare.mp3");
                    snare.play();
                break;
        
                case "k":
                    var crash = new Audio("./sounds/crash.mp3");
                    crash.play();
                break;
        
                case "l":
                    var kick = new Audio("./sounds/kick-bass.mp3");
                    kick.play();
                break;
        
                default: console.log(key);    
            }
        }
        
        

        function buttonAnimmation(currentKey) {
            var selectedButton = document.querySelector("." + currentKey);
            
            selectedButton.classList.toggle("pressed");

            setTimeout(function () {
                selectedButton.classList.remove("pressed");
            }, 150);
            
        }
