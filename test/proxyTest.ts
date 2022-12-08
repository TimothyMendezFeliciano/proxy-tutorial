import {ethers} from "hardhat";
import hre from "hardhat";
import {expect} from "chai";

describe("NFT Upgradeable", () => {
    it("Should deploy an upgradeable ERC721 Contract", async () => {
        const TimProxyNFT = await ethers.getContractFactory("TimProxyNFT");
        const UpgradedContractNFT = await ethers.getContractFactory("UpgradedContractNFT");

        let proxyContract = await hre.upgrades.deployProxy(TimProxyNFT, {
            kind: "uups"
        })

        const [owner] = await ethers.getSigners();
        const ownerOfToken1 = await proxyContract.ownerOf(1);

        expect(ownerOfToken1).to.be.equal(owner.address);

        proxyContract = await hre.upgrades.upgradeProxy(proxyContract, UpgradedContractNFT);
        expect(await proxyContract.test()).to.equal("upgraded");
    })
})
