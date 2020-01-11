import React from "react";
// import axios from "axios";
import { stripeApiPublicKey } from "./stripeApiPublicKey";

// JS Rendering CSS
import { StripeCheckoutButton } from "./StripeButtonStyles";

const StripeButton = ({ price }) => {
  // price in cents
  const priceForStripe = price * 100;
  const publishableKey = stripeApiPublicKey;

  //   console.log(process.env.REACT_APP_STRIPE_PUBLIC);

  const onToken = async token => {
    try {
      console.log(token);

      /*
      const res = await axios({
        method: "POST",
        url: "payment",
        data: {
          amount: priceForStripe,
          token: token
        }
      });

        alert(`Success!
          name: ${res.data.success.billing_details.name}
          email: ${token.email}
          amount: $${res.data.success.amount / 100}`);
      */
    } catch (error) {
      alert(
        `There was an issues with your payment, please try again. ${error.message}`
      );
    }
  };

  return (
    <StripeCheckoutButton
      lable="Buy Now"
      name="Clarify"
      shippingAddress
      billingAddress={true}
      image="https://bit.ly/37OMc2K"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Purchase"
      token={onToken}
      stripeKey={publishableKey}
      className="stripe"
    />
  );
};

export default StripeButton;
