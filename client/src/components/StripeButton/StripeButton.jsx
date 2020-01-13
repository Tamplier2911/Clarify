import React from "react";
import { stripeApiPublicKey } from "./stripeApiPublicKey";

// redux
import { connect } from "react-redux";
import { requestPaymentStart } from "../../redux/payment/payment-actions";
import { createStructuredSelector } from "reselect";
import { selectAuthObject } from "../../redux/auth/auth-selectors";

// JS Rendering CSS
import { StripeCheckoutButton } from "./StripeButtonStyles";

const StripeButton = ({ price, currentUser, requestPaymentStart }) => {
  // price in cents
  const priceForStripe = price * 100;
  const publishableKey = stripeApiPublicKey;

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
      token={token =>
        requestPaymentStart({
          token,
          price,
          amount: priceForStripe
        })
      }
      stripeKey={publishableKey}
      className="stripe"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectAuthObject
});

export default connect(mapStateToProps, {
  requestPaymentStart
})(StripeButton);
