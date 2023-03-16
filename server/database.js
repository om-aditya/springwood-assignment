const express = require('express');
const { Client } = require('pg');

const app = express();

app.get('/form-data', (req, res) => {
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
  const query = `SELECT ${table1}.id, ${table1}.app_username, ${table1}.email_id, ${table1}.phone_number, ${table1}.cart_details, ${table1}.country_code, ${table1}.currency_code, ${table2}.payment_mode, ${table2}.amount, ${table2}.payment_channel, ${table2}.transaction_status, ${table2}.discount, ${table2}.net_amount_debit FROM ${table1},${table2} WHERE ${table1}.transaction_id = 'txn_2046623254' AND ${table2}.transaction_id = ${table1}.transaction_id`;

  client.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching form data from database');
    } else {
      res.send(result.rows);
    }

    client.end();
  });
});

