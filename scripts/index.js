async function main() {
    const accounts = await ethers.provider.listAccounts();
    // console.log(accounts);
    const address = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
    const Box = await ethers.getContractFactory('Box');
    const box = await Box.attach(address);

    await box.store(20);
    const value = await box.retrieve();
    console.log('Box value is', value.toString());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });