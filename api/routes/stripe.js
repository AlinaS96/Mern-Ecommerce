require('dotenv').config()
const express = require('express')
const app = express();
const Order = require('../models/Order')
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const router = express.Router()
router.post('/create-checkout-session', async (req, res) => {
  // console.log(req.body,'here');
  // const customer = await stripe.customers.create({
    
  //   metadata: {
  //     userId: req.body.user,
  //     cart: JSON.stringify(req.body.products)
  //   }
  // })
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'PK'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: req.body.products[0].price < 50 ? 1000 : 0,
            currency: 'usd',
          },
          display_name: req.body.products[0].price < 50 ? 'Standard Shipping' : 'Free shipping',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: req.body.totalPrice < 50 ? 2500 : 1500,
            currency: 'usd',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],
    line_items: req.body.products.map(item => (
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${item.title}`,
            // Images:[item.img] ,
            // description:item.desc,
            // metadata:{id:utem.id}
          },
          unit_amount: (item.price) * 100
        },
        quantity: item.quantity
      }
    )),
    // custom_fields: [
    //     {
    //       key: 'engraving',
    //       label: {
    //         type: 'custom',
    //         custom: 'Shipping address',
    //       },
    //       type: 'text',
    //     },
    //   ],
    // customer: customer.id,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });
  res.send({ url: session.url })
});
//Stripe webhook
// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;
endpointSecret = "whsec_e35696c67b3e6d1968d496681e7de67beed2ddba9f64d9aeb72e75fb809b27c4";

router.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
  const sig = request.headers['stripe-signature'];
  let data; let eventType
  if (endpointSecret) {
    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log("Webhook verified")
    } catch (err) {
      console.log(`Webhook error: ${err.message}`)
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    data = event.data.object;
    eventType = event.type
  } else {
    data = req.body.data.object;
    eventType = req.body.type
  }
  //Handle the event 
  if (eventType == "checkout.session.completed") {
    stripe.customers.retrieve(data.customer).then(
      customer => {
        console.log(customer); console.log("data:", data)
      }
    ).catch(err => console.log(err.message))
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send().end();
});

// app.listen(4242, () => console.log('Running on port 4242'));

module.exports = router