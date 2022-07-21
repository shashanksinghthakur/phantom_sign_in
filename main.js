async function getSignmessage() {
    const message = `To avoid digital dognappers,
    sign below to authenticate with CryptoCorgis`;
const encodedMessage = new TextEncoder().encode(message);
const signedMessage = await window.solana.signMessage(encodedMessage, "utf8");
console.log(signedMessage)
}