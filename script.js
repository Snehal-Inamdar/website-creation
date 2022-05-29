let my_Balance = parseInt(document.getElementById("my_Balance").innerText);

function perform_transaction(){
   var enterAccountNo = parseInt(document.getElementById("enterAccountNo").value);
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 600000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterAccountNo + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var my_Balance = parseInt(document.getElementById("my_Balance").innerText) - enterAmount
      document.getElementById("my_Balance").innerText = my_Balance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(` Transaction Successful !!  
      INR ${enterAmount} is successfully transferred  to ${enterAccountNo}.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`INR ${enterAmount} is transferred to recepient with Account_No ${enterAccountNo} on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}
