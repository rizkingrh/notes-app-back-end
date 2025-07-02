const { Pool } = require('pg');

const pool = new Pool({
  user: 'rizki',
  host: 'localhost',
  database: 'companydb',
  password: 'rzkngrh',
  port: 5432,
});

const getAllEmployees = async () => {
  // melakukan query mendapatkan seluruh data karyawan
  const result = await pool.query('SELECT * FROM karyawan');
  console.log(result.rows);
  // mengembalikan seluruh karyawan dalam bentuk JavaScript array of object
  return result.rows;
};

getAllEmployees();

const insertEmployee = async (id, name, email, address) => {
  // Membuat objek query
  const query = {
    text: 'INSERT INTO karyawan VALUES($1, $2, $3, $4) RETURNING *',
    values: [id, name, email, address],
  };

  const result = await pool.query(query);
  console.log(result);
  return result.rows;
};

insertEmployee('DCD005', 'Dimas Bahyudi', 'dmd123@gmail.com', 'Serang');
