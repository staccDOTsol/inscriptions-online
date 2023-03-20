const express = require("express");
const bitcoin = require("bitcoinjs-lib");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.post("/generate-psbt", (req, res) => {
  try {
    // Create a new PSBT
    const psbt = new bitcoin.Psbt({ network: bitcoin.networks.testnet });

    // Add inputs
    // Replace with real input data (transaction id and index)
    psbt.addInput({ hash: "input_txid_1", index: 0 });
    psbt.addInput({ hash: "input_txid_2", index: 1 });
    psbt.addInput({ hash: "input_txid_3", index: 2 });

    // Add outputs
    // Replace with real output data (addresses and values)
    psbt.addOutput({ address: "output_address_1", value: 100000 });
    psbt.addOutput({ address: "output_address_2", value: 200000 });
    psbt.addOutput({ address: "output_address_3", value: 300000 });

    // Serialize the PSBT to base64
    const base64Psbt = psbt.toBase64();

    res.json({ psbt: base64Psbt });
  } catch (error) {
    console.error("Error generating PSBT:", error);
    res.status(500).json({ error: "Error generating PSBT" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
