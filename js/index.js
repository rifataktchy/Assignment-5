// blog button
document.getElementById('blog-button').addEventListener("click", function(){
    window.location.href = '/blog.html';
});

// for section-1
document.getElementById("donate-noakhali-button").addEventListener("click", function(event){
  event.preventDefault();
const donateAmountNumber = getInputValueById('donate-amount');

if(isNaN(donateAmountNumber) || donateAmountNumber<=0){
alert('failed to add donation amount');
return;
}

const availableDonationNumber = getTextValueById('available-donation');

const newDonationBalance = availableDonationNumber+ donateAmountNumber;
document.getElementById('available-donation').innerText = newDonationBalance;

const myBalance = getTextValueById('my-balance');
const updatedMyBalance = myBalance - donateAmountNumber;
document.getElementById('my-balance').innerText= updatedMyBalance;

const modal = document.getElementById('my_modal_1'); 
modal.showModal();

const noakhaliBanner = document.getElementById('noakhali-banner').innerText;

const currentTime = new Date();

const div = document.createElement('div');
div.classList.add('border');
div.innerHTML= `<p class="p-2 font-bold">${donateAmountNumber} Taka is ${noakhaliBanner}</p>
                 <h4 class="px-2 pb-2">Date: ${currentTime}</h4>`
document.getElementById('history-page').appendChild(div);

});


// for section-2
document.getElementById("donate-feni-button").addEventListener("click", function(event){
   event.preventDefault();
  
  const donateAmountNumber = getInputValueById('donate-feni-amount');
  
  if(isNaN(donateAmountNumber) || donateAmountNumber<=0){
    alert('failed to add donation amount');
    return;
    }
    
  const availableDonationNumber = getTextValueById('available-donation-feni');

  const newDonationBalance = availableDonationNumber+ donateAmountNumber;
 
  document.getElementById('available-donation-feni').innerText = newDonationBalance;

  const myBalance = getTextValueById('my-balance');
  const updatedMyBalance = myBalance - donateAmountNumber;
  document.getElementById('my-balance').innerText= updatedMyBalance;
  const modal = document.getElementById('my_modal_1');
  modal.showModal();

  const feniBanner = document.getElementById('feni-banner').innerText;

  const currentTime = new Date();

  const div = document.createElement('div');
  div.classList.add('border');
  div.innerHTML= `<p class="p-2 font-bold">${donateAmountNumber} Taka is ${feniBanner}</p>
                  <h4 class="px-2 pb-2">Date: ${currentTime}</h4>`
  document.getElementById('history-page').appendChild(div);

  });


// for section-3
document.getElementById("donate-quota-button").addEventListener("click", function(event){
    event.preventDefault();
  
  const donateAmountNumber = getInputValueById('donate-quota-amount');
  if(isNaN(donateAmountNumber) || donateAmountNumber<=0){
    alert('failed to add donation amount');
    return;
    }

  const availableDonationNumber = getTextValueById('available-donation-quota');

  const newDonationBalance = availableDonationNumber+ donateAmountNumber;
 
  document.getElementById('available-donation-quota').innerText = newDonationBalance;

  const myBalance = getTextValueById('my-balance');
  const updatedMyBalance = myBalance - donateAmountNumber;
  document.getElementById('my-balance').innerText= updatedMyBalance;
  
  const modal = document.getElementById('my_modal_1');
  modal.showModal();

  const quotaBanner = document.getElementById('quota-banner').innerText;

  const currentTime = new Date();

  const div = document.createElement('div');
  div.classList.add('border');
  div.innerHTML= `<p class="p-2 font-bold">${donateAmountNumber} Taka is ${quotaBanner}</p>
                  <h4 class="px-2 pb-2">Date: ${currentTime}</h4>`
  document.getElementById('history-page').appendChild(div);

  });
  