import React from "react";
import FormInput from "../components/form/form-input";
import Button from "../components/button/button";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PaypalButtonWrapper from "../components/button/paypal-button-wrapper";
import paypalButton from "../assets/paypal.png";
import ContainerCenter from "../components/container/container-center";

type Props = {};

const OrderPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col max-w-5xl gap-8">
      <ContainerCenter id="order-form">
        <h1>Aktuelle Liste</h1>

        <FormInput label="Bestellungswunsch" />
        <FormInput label="Preis (optional)" />
        <div className="flex gap-2">
          <input type="checkbox" />
          <div>Ich möchte mitkommen</div>
        </div>
      </ContainerCenter>
      <ContainerCenter>
        <Button onClick={() => console.log("Test")}>
          <div className="flex justify-center gap-2">
            <img className="h-7" src={paypalButton} /> Geld senden
          </div>
        </Button>
        <Button className="hover:bg-orange-300 bg-orange-400 text-slate-700">
          Jetzt eintragen
        </Button>
      </ContainerCenter>
    </div>
  );
};

export default OrderPage;
