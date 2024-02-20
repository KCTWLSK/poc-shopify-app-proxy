import { DataType } from "@shopify/shopify-api";
import shopify from "../shopify.js";

const createOrder = async (session) => {
  fetch("https://api.sandbox.checkout.com/hosted-payments", {
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));

  const data = await client.post({
    path: "orders",
    data: {
      order: {
        customer: {
          id: 6776074731767, // shopify customer id here
        },
        line_items: [
          {
            variant_id: 42288768057591,
            quantity: 1,
          },
        ],
        financial_status: "authorized",
        total_tax: 13.5,
        currency: "USD",
      },
    },
    type: DataType.JSON,
  });
};

export default createOrder;
