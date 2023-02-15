The contract is called StakERC20 and it allows users to stake a specified ERC20 token and earn rewards in another ERC20 token, both of which can be set by the contract owner.

The contract allows users to stake a certain amount of tokens, and in return, they receive a 20% annual percentage yield (APY) in the form of CVIII tokens. The staking ratio is 1:1, meaning that for every token staked, the user receives an equivalent amount of rewards.

The contract uses a struct called User to keep track of each user's staked amount, start time, and accrued rewards.
The contract also has functions for calculating and claiming rewards, as well as withdrawing and closing the staked account.

The contract has an access control feature, where only the contract owner can set the stake and reward tokens. Additionally, the contract has error handling mechanisms in place to prevent malicious actions or unintended behavior.
