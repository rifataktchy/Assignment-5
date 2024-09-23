// for section-1
document.getElementById("donate-noakhali-button").addEventListener("click", function(event){
  event.preventDefault();
//   const donateAmount = document.getElementById("donate-amount").value;
//   const donateAmountNumber = parseFloat(donateAmount);
const donateAmountNumber = getInputValueById('donate-amount');
if(isNaN(donateAmountNumber) || donateAmountNumber<=0){
alert('failed to add donation amount');
return;
}
//  const availableDonation = document.getElementById('available-donation').innerText;
// const availableDonationNumber = parseFloat(availableDonation);
const availableDonationNumber = getTextValueById('available-donation');

const newDonationBalance = availableDonationNumber+ donateAmountNumber;
document.getElementById('available-donation').innerText = newDonationBalance;

const myBalance = getTextValueById('my-balance');
const updatedMyBalance = myBalance - donateAmountNumber;
document.getElementById('my-balance').innerText= updatedMyBalance;
const modal = document.getElementById('my_modal_1');
  modal.showModal();
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
  });
  