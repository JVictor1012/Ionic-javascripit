let openEye = document.getElementById('open-eye')
    let closedEye = document.getElementById('closed-eye')

    closedEye.style.display = "none";
    openEye.style.display = "block";

function esconder(){
    let btnesconder = document.getElementById('btn')
    let card = document.getElementById('ion-content')
    

    console.log(!btnesconder.checked)

    if(btnesconder.checked){
        card.style.display = "block"
        openEye.style.display = "block"
        closedEye.style.display = "none"
    }else{
        card.style.display = "none"
        closedEye.style.display = "block"
        openEye.style.display = "none"
        
    }



    

}