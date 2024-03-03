const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');

const app = express();
const port = process.env.PORT || 3000;

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.json());

// Your existing Web3 setup code
let web3;

function connect() {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable().catch((error) => {
        // User denied account access
        console.log(error);
    });
    const abi = JSON.parseJSON.parse(
    '[{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"get_accessed_doctorlist_for_patient","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"paddr","type":"address"},{"name":"daddr","type":"address"}],"name":"remove_patient","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"doctorList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"paddr","type":"address"},{"name":"daddr","type":"address"}],"name":"get_patient_doctor_name","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"daddr","type":"address"}],"name":"revoke_access","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"get_patient","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256[]"},{"name":"","type":"address"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"get_doctor","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"insurerList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"paddr","type":"address"}],"name":"get_hash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"get_insurer","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address[]"},{"name":"","type":"address[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"paddr","type":"address"}],"name":"accept_claim","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"patientList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"permit_access","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"get_doctor_list","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"iaddr","type":"address"},{"name":"_diagnosis","type":"uint256[]"}],"name":"select_insurer","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"get_accessed_patientlist_for_doctor","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get_patient_list","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get_insurer_list","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_age","type":"uint256"},{"name":"_designation","type":"uint256"},{"name":"_hash","type":"string"}],"name":"add_agent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"paddr","type":"address"},{"name":"_diagnosis","type":"uint256"},{"name":"_hash","type":"string"}],"name":"insurance_claim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_age","type":"uint256"},{"name":"_designation","type":"uint256"},{"name":"_hash","type":"string"}],"name":"add_details","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]',
  );
    const agentContractAddress = '0x54810d23c1949B174230Edd8Bd404f6f03359359';
    const AgentContract = web3.eth.contract(abi);
    const contractInstance = AgentContract.at(agentContractAddress);
    web3.eth.defaultAccount = web3.currentProvider.selectedAddress;
    console.log('Web3 Connected:' + web3.eth.defaultAccount);
    return web3.currentProvider.selectedAddress;
}

connect();

// Define endpoints to interact with your contract
app.get('/api/account', (req, res) => {
    // Endpoint to get the default account address
    const defaultAccount = web3.eth.defaultAccount;
    res.json({ address: defaultAccount });
});

app.post('/api/contract/interaction', async (req, res) => {
    // Endpoint to interact with your contract
    const { functionName, params } = req.body;
    
    try {
        // Example contract interaction
        const result = await contractInstance[functionName].call(params);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
