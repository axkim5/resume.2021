let btnWhite = document.querySelector('#btnWhite');
let content = document.querySelector('p');

btnWhite.addEventListener('click',() => content.style.color = 'White');

document.addEventListener("DOMContentLoaded", function(event) { 
                
    console.log('hello');

    //modal event
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
    })
    console.log(myModal);
    myModal.show();

    //timestamp
    const d = new Date ();
    document.getElementById("DateTimeStamp").innerHTML = d;

    //LinkedIn button event
    var myButton = document.getElementById("myButton");
    var myLoadingButton = document.getElementById("myLoadingButton");
    myButton.onclick =function(e){

        //prevent link from opening right away
        e.preventDefault();
        var url = this.getAttribute("href");
        var target = this.getAttribute("target");
        console.log(url);

        //show loading button
        this.style.display ="none";
        myLoadingButton.style.display = "block";

        //timeout and show OR button after 2s
        setTimeout(function(){
            if(myButton.style.display == "none") {
                console.log("hidden!");
                window.open(url,target);
                window.open("https://www.linkedin.com/in/arnold-kim-2ab9baa3", "_blank");
                myButton.style.display = "inline-block";
                myLoadingButton.style.display = "none"
            }
        }, 2000);
    }//onclick
});//ready state