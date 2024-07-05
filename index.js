// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null;

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch{
    constructor(bankInfo) {
        // 3. In the `BankBranch` class:
//    - Create a constructor that takes `branchInfo` as a parameter.
//    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).

        if (!bankBranchInstance){
            //    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
            bankBranchInstance = this;
            //Assign branch information
            this.bankInfo = bankInfo;
        }
     //    - Return the `bankBranchInstance` whether it's newly created or existing.
        return bankBranchInstance;
    }
    // 4. Add methods to the `BankBranch` class for managing branch-related information.
    getBranchInfo(){
        return this.getBranchInfo;
    } 

}
// 5. In the usage section:
//    - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
const branchA = new BankBranch("Branch A: Location: Durban");
const branchB = new BankBranch("Branch B: Location: Pretoria");

//Retrieving branch details
console.log(branchA.getBranchInfo());
console.log(branchB.getBranchInfo());

//    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.
console.log(branchA === branchB);

