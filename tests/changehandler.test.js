let { ChangeHandler } = require("../src/changehandler");

describe("ChangeHandler", function() {
    describe("constructor", function() {


    // Set up a test below...
    test("5.a. amountDue is set based on an argument". function() {
        // Remember, you can arrange, act, and assert...start small
        let changeHandler=new ChangeHandler(105);
        expect(changeHandler.amountDue).toBe(105);
    });
    test("5.b. cash tendered is set to zero", function() {
        // Remember, you can arrange, act, and assert...start small
        let changeHandler=new ChangeHandler(54);
        expect(ChangeHandler.amountDue).toBe(0);
    })
})
describe("insertCoin", function(){
    test("6.a. Inserting a quarter adds 25.", function(){
        let changeHandler= new ChangeHandler (); // changeHandler =object ChangeHandler=class
        changeHandler.insertCoin("quarter")
        expect(changeHandler.cashTendered).toBe(25)
        
    })
    test("6.b. Inserting a dime adds 10.", function(){
        let changeHandler= new ChangeHandler (); // changeHandler =object ChangeHandler=class
        changeHandler.insertCoin("dime")
        expect(changeHandler.cashTendered).toBe(10)
    })
    test("6.c. Inserting a nickle adds 5.", function(){
        let changeHandler= new ChangeHandler (); // changeHandler =object ChangeHandler=class
        changeHandler.insertCoin("nickle")
        expect(changeHandler.cashTendered).toBe(5)
    })
test("6.d. Inserting a penny adds 1.", function(){
    let changeHandler= new ChangeHandler (); // changeHandler =object ChangeHandler=class
    changeHandler.insertCoin("penny")
    expect(changeHandler.cashTendered).toBe(1)
})
test("6.e. Calling function multiple times adds to amount.", function(){
    let changeHandler= new ChangeHandler (); // changeHandler =object ChangeHandler=class
    changeHandler.insertCoin("penny")
    changeHandler.insertCoin("quarter")
    expect(changeHandler.cashTendered).toBe(26)
})
// });
// 7. isPaymentSufficient:
// a. Returns true if cashTendered more than amountDue.
// b. Returns false if cashTendered less than amountDue.
// c. Returns true if cashTendered equal to amountDue.

// 8. giveChange:
// a. 32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.
// b. 10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.
// c. 27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.
// d. 68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3
