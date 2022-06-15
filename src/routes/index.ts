import express from 'express'
import article from './getRequest'

const app = express();

app.use('/article', article)

module.exports = app;