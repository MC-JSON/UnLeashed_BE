const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const signup = (req, res) => {
  const user = new User({
    name: req.body.fullName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })

  user.save((err, user) => {
    if (err) {
      res.status(500).send({
        message: err
      })
      return
    } else {
      res.status(200).send({
        message: 'User Registered successfully'
      })
    }
  })
}

const signin = (req, res) => {
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({
        message: err
      })
      return
    }
    if (!user) {
      return res.status(404).send({
        message: 'User Not found.'
      })
    }

    //comparing passwords
    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
    // checking if password was valid and send response accordingly
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!'
      })
    }
    //signing token with user id
    let token = jwt.sign(
      {
        id: user.id
      },
      process.env.API_SECRET,
      {
        expiresIn: 86400
      }
    )

    //responding to client request with user profile success message and  access token .
    res.status(200).send({
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      },
      message: 'Login successful',
      accessToken: token
    })
  })
}

module.exports = {
  signup,
  signin
}
