// Backend
function client(first, initDeposit){
  this.first = first;
  this.initDeposit = initDeposit;
}
var changes = 0;
console.log(changes);
client.prototype.clientCal = function() {
  $("h2#name").text(this.first);
  $("h3#box").text(this.initDeposit);
  $("#hide").hide();
  $("#show").show();
  changes = changes + (this.initDeposit);
}
function change(deposits, withdrawals){
  this.deposits = deposits;
  this.withdrawals = withdrawals;
}
change.prototype.changing = function() {
    changes = changes + this.deposits - this.withdrawals;
    $("h3#box").text(changes);
}
console.log(changes);

function resetFields() {
  $("#dep").val(0);
  $("#with").val(0);
}
// userinterface
$(function(){
  $("#show").hide();
  $("form#nameInput").submit(function(event){
    event.preventDefault();
    var clientName = $("input#name").val().toUpperCase();
    var clientInitDeposit =  parseFloat($("input#initDep").val());
    var killingIt = new client(clientName, clientInitDeposit);
    killingIt.clientCal();
    resetFields();
  });
  $("form#moneyInput").submit(function(event){
    event.preventDefault();
    var deposit = parseFloat($("input#dep").val());
    var withdrawal =  parseFloat($("input#with").val());
    var loaning = new change (deposit, withdrawal);
    loaning.changing();
    resetFields();
  });
});
