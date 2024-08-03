// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// Singleton instance of the bank branch
let bankBranchInstance = null;

// Define the BankBranch class
class BankBranch {
    // Constructor taking branchInfo as a parameter
    constructor(branchInfo) {
        // Check if the singleton instance already exists
        if (!bankBranchInstance) {
            // If not, initialize the instance and assign branchInfo
            bankBranchInstance = this;
            this.branchInfo = branchInfo;
        }
        // Return the existing singleton instance
        return bankBranchInstance;
    }

    // Method to get branch information
    getBranchInfo() {
        return this.branchInfo;
    }
}

// Create instances of the BankBranch class
const branchA = new BankBranch("Branch A: Location: Durban");
const branchB = new BankBranch("Branch B: Location: Pretoria");

// Retrieve branch details
console.log(branchA.getBranchInfo()); // Should print "Branch A: Location: Durban"
console.log(branchB.getBranchInfo()); // Should print "Branch A: Location: Durban"

// Verify that branchA and branchB are the same instance
console.log(branchA === branchB); // Should print true
