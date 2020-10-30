const model = require("../models/index")

exports.index = (req, res, next) => {
    res.send('registers');
  }

exports.show = async (req, res, next) => {

    const data = await model.registers.findAll()

      res.status(200).json({
          data: data
      })
    }
exports.insert = async (req, res, next) => {

    const { firstname, lastname } = req.body;
        
    const check = await model.registers.create({
    firstname, lastname
     })
        
    res.status(201).json({
    message: check
            })
    }
