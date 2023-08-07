function scuberGreetingForFeet(feet){
    let message;
    if (feet>2500){
        message= 'No can do.'
    }else if(feet>2000){
        message= 'I will gladly take your thirty bucks.'
    }else if(feet<400){
        message= 'This one is on me!'
    }
    return message
  }
  console.log(scuberGreetingForFeet(2501))

  function ternaryCheckCity(city){
    // condition ? true : false
    return city==="NYC" ? 'Ok, sounds good.' : 'No go.'
    
  }
  console.log(ternaryCheckCity("Pittsburg"))

  
  function switchOnCharmFromTip(tip){
    // response, switch, case
    let response;
    switch(tip){
      case 'generous':
        response = 'Thank you so much.'
        break;
      case 'not as generous':
        response = 'Thank you.'
        break;
      default:
        response = 'Bye.'
    }
    return response
  }
console.log(switchOnCharmFromTip('nothing.'))