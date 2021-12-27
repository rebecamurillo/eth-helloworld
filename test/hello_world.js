const HelloWorld = artifacts.require("HelloWorld");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HelloWorld", function (/* accounts */) {
  it("should assert true", async function () {
    await HelloWorld.deployed();
    return assert.isTrue(true);
  });

  it('should initialize contract with text "hello world!"', async function(){
    const helloWorldInstance = await HelloWorld.deployed();
    const message = await helloWorldInstance.message();

    return assert.equal(message,"Hello world!")
  });


  it('should update message with text "hello world updated!"', async function(){
    const newMessage = "hello world updated!";
    const helloWorldInstance = await HelloWorld.deployed();
    await helloWorldInstance.update(newMessage);
    const message = await helloWorldInstance.message();

    return assert.equal(message,newMessage)
  });

});
