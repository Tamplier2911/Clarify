import React from "react";
import axios from "axios";
import { stripeApiPublicKey } from "./stripeApiPublicKey";

// redux
import { connect } from "react-redux";
import { fetchAuthObjectStart } from "../../redux/auth/auth-actions";
import { createStructuredSelector } from "reselect";
import { selectAuthObject } from "../../redux/auth/auth-selectors";

// JS Rendering CSS
import { StripeCheckoutButton } from "./StripeButtonStyles";

const StripeButton = ({ price, fetchAuthObjectStart, currentUser }) => {
  // price in cents
  const priceForStripe = price * 100;
  const publishableKey = stripeApiPublicKey;

  //   console.log(process.env.REACT_APP_STRIPE_PUBLIC);

  const onToken = async token => {
    try {
      const res = await axios({
        method: "POST",
        url: "/payment",
        data: {
          amount: priceForStripe,
          token: token,
          userId: currentUser._id,
          price: price
        }
      });

      fetchAuthObjectStart();

      alert(`Success!
          name: ${res.data.success.billing_details.name}
          email: ${token.email}
          amount: $${res.data.success.amount / 100}`);
    } catch (error) {
      alert(
        `There was an issues with your payment, please try again. ${error.message}`
      );
    }
  };

  // if pass in a child - child will be jsx element instead default one
  // <StripeCheckoutButton>
  // <div>Displayed Component</div>
  // </StripeCheckoutButton>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectAuthObject
});

export default connect(mapStateToProps, { fetchAuthObjectStart })(StripeButton);
