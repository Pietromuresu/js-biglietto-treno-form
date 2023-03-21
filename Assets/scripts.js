 
 const priceForKm = 0.21 ; 
 const input2 = document.getElementById('kmToDo')
 const select = document.getElementById('majority')
const minorenne = document.getElementById('minorenne')
const maggiorenne = document.getElementById('maggiorenne')
 console.log(name);

 generate.addEventListener('click', function(){
  const input = document.getElementById('name');
  const name = input.value;
  output.innerHTML = name;
  console.log(input);
 })

 generate.addEventListener('click', function(){
   
    let input2 = document.getElementById('kmToDo');
    
    let kmToDo = Number(input2.value);console.log(kmToDo)
    outputKmToDo.innerHTML = kmToDo + '' + 'Km';
    console.log(input2);
    
     
  })

  generate.addEventListener('click', function() {

    let kmToDo = Number(input2.value);
    console.log(kmToDo)
    let price = (priceForKm * parseInt(kmToDo));
    console.log(price);
    document.getElementById('totalPrice').innerHTML = `
      ${price} &euro;
      `;
  if (select.selectedIndex.value = 1){
      
      let price2 = price *= 1 - (20/100);
      console.log(price2);
      document.getElementById('totalPrice').innerHTML = `
      ${price2} &euro;
      `;
  
    } else if (select.selectedIndex.value = 2 ) {
      let price3 = (price *= 1 - (40/100));
      console.log(price3);
      document.getElementById('totalPrice').innerHTML = `
      ${price3} &euro;
      `;
    }
   
  

  } )

  

 
  

  
//  select element



 


