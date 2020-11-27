var sql = require("mssql");
const { poolPromise } = require("../config/connectionDB");

module.exports = (r) => {
  r.get("/", async function (req, res) {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("select * from Student", function (err, profileset) {
        if (err) console.log(err);
        // send records as a response
        res.json(profileset.recordset);
      });
  });

  r.post("/createStudent", async function (req, res) {
    console.log(req.body.StudentName);
    if (req.body.StudentName !== undefined) {
      const pool = await poolPromise;
      const result = await pool
        .request()
        .input("StudentName", sql.VarChar(50), req.body.StudentName)
        .execute("InsertStudent")
        .then(function (recordSet) {
          res.setHeader("Content-Type", "application/json");
          res.status(200).json({ status: "Success" });
        });
    } else {
      res.status(404).json({ status: "Invalidate" });
    }
  });

  r.put("/updateStudentNameById", async (req, res) => {
    try {
      const pool = await poolPromise;
      const result = await pool
        .request()
        .input("StudentId", sql.Int, req.body.StudentId)
        .input("StudentName", sql.VarChar(50), req.body.StudentName)
        .execute("UpdateStudentByStudentId")
        .then(function (err, recordSet) {
          res.status(200).json({ status: "Success" });
        });
    } catch (err) {
      res.status(500);
      res.send(err.message);
    }
  });

  r.delete("/deleteStudentById", async (req, res) => {
    try {
      const pool = await poolPromise;
      const result = await pool
        .request()
        .input("StudentId", sql.Int, req.body.StudentId)
        .execute("DeleteStudentByStudentId")
        .then(function (err, recordSet) {
          res.status(200).json({ status: "Success" });
        });
    } catch (err) {
      res.status(500);
      res.send(err.message);
    }
  });
};
