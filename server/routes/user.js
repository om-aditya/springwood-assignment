const router = require("express").Router();
const { Client } = require('pg');

const client = new Client({
  host: '142.93.218.23',
  port: 5432,
  user: 'maxpay_analytics',
  password: 'Maxpay@query1',
  database: 'maxpay_db'
});
client.connect();

const table1 = "customers_products_transactions";
const table2 = "transactions";

router.get("/", async (req,res)=>{
    try {
        const query = `SELECT ${table1}.id, ${table1}.app_username, ${table1}.email_id, ${table1}.phone_number, ${table1}.cart_details, ${table1}.country_code, ${table1}.currency_code, ${table2}.payment_mode, ${table2}.amount, ${table2}.payment_channel, ${table2}.transaction_status, ${table2}.discount, ${table2}.net_amount_debit FROM ${table1},${table2} WHERE ${table1}.email_id LIKE '%${req.body.email}%' AND ${table1}.phone_number LIKE '%${req.body.phone}%' AND ${table1}.payment_channel LIKE '%${req.body.paymentChannel}%' AND ${table1}.transactions_status LIKE '%${req.body.status}%' AND ${table2}.transaction_id = ${table1}.transaction_id`;

        const users = client.query(query, (err, res) => {
                            console.log(err, res);
                        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error)
    }
});

client.end();

module.exports = router;