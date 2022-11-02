const {connection, clusterApiUrl, LAMPORTS_PER_SOL} = require("@solana/web3.js");
const connection = new Connection(clusterApiUrl("devnet"),"confirmed");

(async ()=>{
    const airdropSignature = await connection.requestAirdrop(
        'DhLmna9a2ZG5eagBPhikhkAMrD2SdHA718XywrGP7R7S',
        LAMPORTS_PER_SOL
    );
    const latestBlockHash = await connecction.getLatestBlockhash();

    await connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: airdropSignature,
    });
})()