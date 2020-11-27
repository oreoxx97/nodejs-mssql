
const Router = require('express').Router
const studentController = require('../components/controller/studentController')
const r = new Router()

studentController(r)

module.exports = r