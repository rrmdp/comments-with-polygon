const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DBForum", function () {
  it("Should add and fetch successfully", async function () {
    const DBForum = await ethers.getContractFactory("DBForum");
    const dbforum = await DBForum.deploy();
    await dbforum.deployed();

    expect(await dbforum.getComments("my-first-blog-post")).to.be.lengthOf(0);

    const tx1 = await dbforum.addComment(
      "my-first-blog-post",
      "my first comment"
    );
    await tx1.wait();

    expect(await dbforum.getComments("my-first-blog-post")).to.be.lengthOf(1);
    expect(await dbforum.getComments("my-second-blog-post")).to.be.lengthOf(0);

    const tx2 = await dbforum.addComment(
      "my-second-blog-post",
      "this comment is on a different thread"
    );
    await tx2.wait();

    expect(await dbforum.getComments("my-first-blog-post")).to.be.lengthOf(1);
    expect(await dbforum.getComments("my-second-blog-post")).to.be.lengthOf(1);
  });
});
