/*jslint browser:true*/
"use strict";

function validateForm(){
    let i;
    let status = true;
   
    let requiredSection = ['fullName', 'phoneNumber', 'payMethod', 'ccNumber', 'vehicle'];
    for (i=0; i<requiredSection.length; i++){
        document.getElementById(requiredSection[i]).className = "normal";

    }

    //validate name
   let name = document.forms.myForm.fullName.value;
    if(name ==="" || name === null){
        status = false;
        document.getElementById('fullName').className = "error";
    }

    //validate phone number
    let phoneNumber = document.forms.myForm.phoneNumber.value;
    let phone = phoneNumber.replace(/-/g, '');
    if(phone < 10 || phone > 15){
    status = false;
    document.getElementById('phoneNumber').className = "error";
}

    //validate payment method
    let type = document.getElementsByName('payMethod');
    let foundCheckedButton = false;
        for (i=0; i<type.length; i++){
            if (type[i].checked){
                foundCheckedButton = true;
                break;
            }//end if
        }//end for loop

    if(foundCheckedButton === false){
        status = false;
        document.getElementById('payMethod').className = "error";
    }


    //validate credit card
    let creditCard = document.forms.myForm.ccNumber.value;
    let credit = creditCard.replace(/ /g, '');
    if(credit != 15){
    status = false;
    document.getElementById('ccNumber').className = "error";
}

    //validate vehicle type

    let vehicleType =  document.forms.myForm.vehicle.selectedIndex;
    if (vehicleType === 0){
        status = false;
        document.getElementById('vehicle').className = "error";
        }


    if (status === false){
        document.getElementById('formProblems').className = "showErrorMsg";
    }

    return status;
    

  
}
