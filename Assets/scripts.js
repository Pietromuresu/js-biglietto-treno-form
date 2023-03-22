const input2 = document.getElementById('kmToDo')
  const select = document.getElementById('majority')
  const name = document.getElementById('name2')
  console.log(name); 
generate.addEventListener('click', function() {

 const ticketContainer = document.getElementById('ticket-container');
 


  const platform = Math.floor(Math.random(1) * 20);
  console.log(platform);
 
 const seat  = Math.floor(Math.random(1) * 120);
  const numTicket = Math.floor(Math.random() * 53442232);

const priceForKm = 0.21 ; 
const fasciaEta = select.value;
const naming = name.value;
let km = input2.value;
console.log(km, fasciaEta);

let offerta = 'Prezzo Standard',
   sconto = 0,
   prezzo;

let validForm = true;

 if (fasciaEta === 'minorenne') {
   sconto = 20;
   offerta = 'sconto minorenni';
 }else if (fasciaEta === 'over-65'){
   sconto = 40; 
   offerta = 'sconto over-65';

 }


  prezzo = (km * priceForKm) * (1 - sconto/100);
  console.log( prezzo);

  // Valido la correttezza della compilazione 
  if(name.length < 3) validForm = false;

  if(isNaN(km)) validForm = false;
  
  if(fasciaEta === '----') validForm = false;

// stampo
 if (validForm){document.getElementById('output').innerHTML = naming;
 document.getElementById('outputKmToDo').innerHTML = km;
 document.getElementById('totalPrice').innerHTML = prezzo.toFixed(2);
 document.getElementById('offer').innerHTML = offerta;
 document.getElementById('outputPlatform').innerHTML = platform;
 document.getElementById('outputSeat').innerHTML = seat + 'B';
 document.getElementById('numTicket').innerHTML = 'T4' + '-' + numTicket;
 ticketContainer.classList.remove('d-none');
}else {
  alert('inserire tutti i campi')
}



 

});



// Reset button
annulla.addEventListener('click', function() {
name.value = '';
kmToDo.value = '';
majority.value = '----'
const ticketContainer = document.getElementById('ticket-container');
ticketContainer.classList.add('d-none');

})







 


  

  




 


