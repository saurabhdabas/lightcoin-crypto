class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    // Calculate the balance using the transaction objects.
    let balance = 0;
    for (let t of this.transactions) {
    	balance += t.Value; // Invoking the getter method
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}
class Transaction{
  constructor(amount,account){
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
     // Add the transaction to the account
    this.account.addTransaction(this)
  }
}
class Deposit extends Transaction{
  get Value(){
    return this.amount;
  }
}

class Withdrawal extends Transaction{

  get Value(){
    return -this.amount;
  }
}
// Went to the bank and opened a bank account
const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();
const t2 = new Withdrawal(50.00, myAccount);
t2.commit();
console.log('Ending Balance:', myAccount.balance);
