const input2 = document.getElementById('kmToDo')
  const select = document.getElementById('majority')
  const name = document.getElementById('name2')
  console.log(name); 
generate.addEventListener('click', function() {

 const ticketContainer = document.getElementById('ticket-container');
 ticketContainer.classList.remove('d-none');


  const platform = Math.floor(Math.random() * 20);
  console.log(platform);
 
 const seat  = Math.floor(Math.random() * 120);
  const numTicket = Math.floor(Math.random() * 53442232);

const priceForKm = 0.21 ; 
const fasciaEta = select.value;
const naming = name.value;
let km = input2.value;
console.log(km, fasciaEta);

let offerta = 'Prezzo Standard',
   sconto = 0,
   prezzo;



 if (fasciaEta === 'minorenne') {
   sconto = 20;
   offerta = 'sconto minorenni';
 }else if (fasciaEta === 'over-65'){
   sconto = 40; 
   offerta = 'sconto over-65';

 }


  prezzo = (km * priceForKm) * (1 - sconto/100);
 console.log( prezzo);

 document.getElementById('output').innerHTML = naming;
 document.getElementById('outputKmToDo').innerHTML = km;
 document.getElementById('totalPrice').innerHTML = prezzo.toFixed(2);
 document.getElementById('offer').innerHTML = offerta;
 document.getElementById('outputPlatform').innerHTML = platform;
 document.getElementById('outputSeat').innerHTML = seat + 'B';
 document.getElementById('numTicket').innerHTML = 'T4' + numTicket;

});




annulla.addEventListener('click', function() {
name.value = '';
kmToDo.value = '';
majority.value = '----'
const ticketContainer = document.getElementById('ticket-container');
ticketContainer.classList.add('d-none');

})







 


  

  




 


