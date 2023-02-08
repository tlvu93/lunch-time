import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React, { useEffect } from "react";

type Props = {
  currency: "USD" | "EUR";
};

const PaypalButtonWrapper = ({ currency }: Props) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency]);

  return (
    <PayPalButtons
      fundingSource="paypal"
      style={{ layout: "vertical", label: "donate" }}
      disabled={false}
      createOrder={(data, actions) => {
        return actions.order
          .create({
            purchase_units: [
              {
                amount: {
                  // charge users $499 per order
                  value: "1",
                },
              },
            ],
            // remove the applicaiton_context object if you need your users to add a shipping address
            application_context: {
              shipping_preference: "NO_SHIPPING",
            },
          })
          .then((orderID) => {
            console.log(orderID);
            return orderID;
          });
      }}
      onApprove={(data, actions) => {
        return actions?.order.capture().then(function (details) {
          const { payer } = details;
        });
      }}
      onError={(err) => {
        console.log(err);
      }}
    />
  );
};

export default PaypalButtonWrapper;
