var mercadopago = require('mercadopago')
mercadopago.configurations.setAccessToken(
  'TEST-2881905683136781-050414-6ebe33934dcd834b936f908e7c682b0c-21409650'
)

mercadopago.payment
  .save(req.body)
  .then(function (response) {
    const { status, status_detail, id } = response.body
    res.status(response.status).json({ status, status_detail, id })
  })
  .catch(function (error) {
    console.error(error)
  })
