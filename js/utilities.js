// common shared function
function getInputValueById(id){
    const donateAmount = document.getElementById(id).value;
    const donateAmountNumber = parseFloat(donateAmount);
    return donateAmountNumber;
}

function getTextValueById(id){
    const availableDonation = document.getElementById(id).innerText;
    const availableDonationNumber = parseFloat(availableDonation);
    return availableDonationNumber;
}

function showSectionById(id){
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
console.log("hello")
}