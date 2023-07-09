<img src="https://i.vgy.me/NomCdN.png" align="right" />

This is a copy of the package sell-app but I fixed the 403 error since I couldn't get in contact with the og owner. All credits go to him 

## Requirements

-   Sell.app API Key ([Get it here](https://sell.app/user/api-tokens))
-   npm >=8.3.0
-   node >=16.0.0

## Installation

```bash
npm install sell-app-fixed
```

## Usage

```javascript
const Sellapp = require("sell-app-fixed");
const API = new Sellapp.API("YOUR_API_KEY");

API.getAllProducts().then((res) => {
	console.log(res); // returns a list of all products
});

API.createBlacklist("email", "hi@example.com", "evil user").then((res) => {
	console.log(res); // blacklisting the said user with the string "evil user" as description
});
```

## Multi-Store Support

Say you are part of multiple stores and want to access `bob.sell.app`, you would pass the slug `bob` as your store.

## Supported Endpoints

Click on an endpoint to see its <b>example.</b>

### <a href="#blacklist-endpoint">Blacklists Endpoint</a>

-   `getAllBlacklists()`: Returns a list of all the blacklists created.
-   `getBlacklist(id)`: Retrieves a blacklist by the entered ID.
-   `createBlacklist(type, data, description)`: Creates a blacklist and returns the created blacklist.
-   `updateBlacklist(id, type, data, description)`: Updates a blacklist by the entered ID.
-   `deleteBlacklist(id)`: Deletes a blacklist by the entered ID.

### <a href="#coupon-endpoint">Coupons Endpoint</a>

-   `getAllCoupons()`: Returns a list of all the coupons created.
-   `getCoupon(id)`: Retrieves a coupon by the entered ID.
-   `createCoupon(fields)`: Creates a coupon and returns the created coupon.
-   `updateCoupon(id, fields)`: Updates a coupon by the entered ID.
-   `deleteCoupon(id)`: Deletes a coupon by the entered ID.

### <a href="#product-endpoint">Listings/Products Endpoint</a>

-   `getAllProducts()`: Returns a list of all the listings created.
-   `getProduct(id)`: Retrieves a listing by the entered ID.
-   `createProduct(fields)`: Creates a listing and returns the created listing.
-   `updateProduct(id, fields)`: Updates a listing by the entered ID.
-   `deleteProduct(id)`: Deletes a listing by the entered ID.

### <a href="#productv2-endpoint">Listings/Products v2 Endpoint</a>

-   `getAllProductsv2()`: Returns a list of all products created.
-   `createListing(fields)`: Create Listing.
-   `getListing(id)`: Gets listing by the entered ID.
-   `updateListing(id, fields)`: Updates a listing by the entered ID.
-   `deleteListing(id)`: Deletes a listing by the entered ID.
-   `searchVariants(id)`: Search for product variants by the entered ID.
-   `getAllVariants(id)`: Returns a list of all product variants created by the entered ID.

### <a href="#section-endpoint">Sections Endpoint</a>

-   `getAllSections()`: Returns a list of all the listings created.
-   `getSection(id)`: Retrieves a section by the entered ID.
-   `createSection(fields)`: Creates a section and returns the created section.
-   `updateSection(id, fields)`: Updates a section by the entered ID.
-   `deleteSections(id)`: Deletes a section by the entered ID.

### <a href="#feedback-endpoint">Feedback Endpoint</a>

-   `getAllFeedback()`: Returns a list of all the feedback received.
-   `getFeedback(id)`: Retrieves a feedback by the entered ID.
-   `replyFeedback(id, replyMessage)`: Responds to a given feedback by the entered ID.

### <a href="#invoice-endpoint">Invoices Endpoint</a>

-   `getAllOrders()`: Returns a list of all the orders that have been placed.
-   `getOrder(id)`: Retrieve a specific order by the entered ID.
-   `getOrderDeliverables(id)`: Retrieve deliverables from a specific order by the entered ID.
-   `createInvoice(fields)`: Generates an invoice, and returns the invoice that is generated.
-   `issueReplacement(id, fields)`: Issue a replacement for an order by the entered ID.
-   `createPayment(id)`: Generates a payment session for the given order.

### <a href="#ticket-endpoint">Tickets Endpoint</a>

-   `getAllTickets()`: Retrieves a list of all the tickets received.
-   `getTicket(id)`: Retrieves a ticket by the entered ID.

### <a href="#ticket-message-endpoint">Ticket Messages Endpoint</a>

-   `getAllTicketMessages(id)`: Retrieves a list of all the messages within a ticket by its entered ID.
-   `getTicketMessage(id, messageId)`: Retrieves a specific message within a ticket by their respective entered IDs.
-   `respondTicket(id, fields)`: Creates a message to a ticket by its entered ID and returns the created message.

# Endpoints' examples of usage

## Blacklist Endpoint

<details>
  <summary>getAllBlacklists()</summary>
  
```javascript
API.getAllBlacklists().then((res) => {
	console.log(res);
});
```
</details>

<details>
  <summary>getBlacklist(id)</summary>
  
```javascript
API.getBlacklist("164").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | ID of a blacklist rule |
</details>

<details>
  <summary>createBlacklist(type, data, description)</summary>
  
```javascript
API.createBlacklist("ip", "1.3.3.7", "Block hackers").then((res) => {
    console.log(res);
});
```
|  Parameters   |  Type  | Required |                                            Description                                             |
| :-----------: | :----: | :------: | :------------------------------------------------------------------------------------------------: |
|    `type`     | string |    ✔️    |         Your blacklist rule's type, can be one of the following - "email", "ip", "country"         |
|    `data`     | string |    ✔️    | Depending on the type you chose, you can enter an IP address, email address, or country code here. |
| `description` | string |    ✔️    |           A description that will help you remember why this blacklist rule was created.           |
</details>

<details>
  <summary>updateBlacklist(id, type, data, description)</summary>

```javascript
API.updateBlacklist(
	"164",
	"country",
	"MX",
	"sorry my fellow Mexican friends :sob:"
).then((res) => {
	console.log(res);
});
```

|  Parameters   |  Type  | Required |                                            Description                                             |
| :-----------: | :----: | :------: | :------------------------------------------------------------------------------------------------: |
|     `id`      | string |    ✔️    |                            ID of the blacklist rule you want to update                             |
|    `type`     | string |    ✔️    |         Your blacklist rule's type, can be one of the following - "email", "ip", "country"         |
|    `data`     | string |    ✔️    | Depending on the type you chose, you can enter an IP address, email address, or country code here. |
| `description` | string |    ✔️    |           A description that will help you remember why this blacklist rule was created.           |

</details>

<details>
  <summary>deleteBlacklist(id)</summary>
  
```javascript
API.deleteBlacklist("164").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | ID of the blacklist rule you want to delete |
</details>

## Coupon Endpoint

<details>
  <summary>getAllCoupons()</summary>
  
```javascript
API.getAllCoupons().then((res) => {
	console.log(res);
});
```
</details>

<details>
  <summary>getCoupon(id)</summary>
  
```javascript
API.getCoupon("468").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | ID of the coupon |
</details>

<details>
  <summary>createCoupon(fields)</summary>
  
```javascript
API.createCoupon({
	"code": "15off",
	"type": "PERCENTAGE",
	"discount": "15",
	"store_wide": false
}).then((res) => {
	console.log(res);
});
```

| Parameters |  Type  | Required |  Description   |
| :--------: | :----: | :------: | :------------: |
|  `fields`  | object |    ✔️    | Coupon's field |

| Fields' Values |    Type     | Required |                                 Description                                  |
| :------------: | :---------: | :------: | :--------------------------------------------------------------------------: |
|     `code`     |   string    |    ✔️    |             The coupon code the customer enters during checkout.             |
|     `type`     |   string    |    ✔️    |                 This can be either "PERCENTAGE" or "AMOUNT".                 |
|   `discount`   |   string    |    ✔️    |                  The discount value in percentage or cents.                  |
|    `limit`     |  int/null   |    ❌    | The maximum amount of times a coupon code can be used, across all customers. |
|  `store_wide`  |   boolean   |    ✔️    |     Whether the coupon applies to all products within your store or not.     |
|  `expires_at`  | string/null |    ❌    |            The coupon's expiry date. (format: YY-MM-DD HH-MM-SS)             |

</details>

<details>
  <summary>updateCoupon(id, fields)</summary>
  
```javascript
API.updateCoupon("468", {
	"code": "free20",
	"type": "AMOUNT",
	"discount": "20", // price reduces by 20 dollars
	"limit": 2, // can only be used twice then expires
	"store_wide": true, // the code now can be used across all of your products
	"expires_at": "2023-01-01 12:00:00"
}).then((res) => {
	console.log(res);
});
```

| Parameters |  Type  | Required |             Description             |
| :--------: | :----: | :------: | :---------------------------------: |
|    `id`    | string |    ✔️    | ID of the coupon you want to update |
|  `fields`  | object |    ✔️    |           Coupon's field            |

| Fields' Values |    Type     | Required |                                 Description                                  |
| :------------: | :---------: | :------: | :--------------------------------------------------------------------------: |
|     `code`     |   string    |    ✔️    |             The coupon code the customer enters during checkout.             |
|     `type`     |   string    |    ✔️    |                 This can be either "PERCENTAGE" or "AMOUNT".                 |
|   `discount`   |   string    |    ✔️    |                  The discount value in percentage or cents.                  |
|    `limit`     |  int/null   |    ❌    | The maximum amount of times a coupon code can be used, across all customers. |
|  `store_wide`  |   boolean   |    ✔️    |     Whether the coupon applies to all products within your store or not.     |
|  `expires_at`  | string/null |    ❌    |            The coupon's expiry date. (format: YY-MM-DD HH-MM-SS)             |

</details>

<details>
  <summary>deleteCoupon(id)</summary>
  
```javascript
API.deleteCoupon("468").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | ID of the coupon you want to delete |
</details>

## Product Endpoint

<details>
  <summary>getAllProducts()</summary>
  
```javascript
API.getAllProducts().then((res) => {
	console.log(res);
});
```
</details>

<details>
  <summary>getProduct(id)</summary>
  
```javascript
API.getProduct("4982").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | ID of the product |
</details>

<details>
  <summary>createProduct(fields)</summary>
  
```javascript
API.createProduct({
	"title": "Millions of gold pieces",
	"description": "Get rich, buy this.",
	"deliverable": {
		"delivery_text": "Meet me in world 5",
		"type": "MANUAL",
		"data": {
			"stock": 666,
			"comment": "Thanks"
		}
	},
	"price": {
		"price": 50,
		"currency": "USD"
	},
	"payment_methods": ["PAYPAL"],
	"minimum_purchase_quantity": 1,
	"visibility": "HIDDEN"
})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
```

| Parameters |  Type  | Required |   Description   |
| :--------: | :----: | :------: | :-------------: |
|  `fields`  | object |    ✔️    | Product's field |

|       Fields' Values        |      Type       | Required |                                                                   Description                                                                    |
| :-------------------------: | :-------------: | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
|           `title`           |     string      |    ✔️    |                                                               The product's title.                                                               |
|        `description`        |     string      |    ✔️    |                                                            The product's description.                                                            |
|           `image`           |   object/null   |    ❌    |                                      An image binary which will be visible when someone views your product.                                      |
|           `order`           |    int/null     |    ❌    |                                          The product's order in which it is sorted on your storefront.                                           |
|        `visibility`         |     string      |    ✔️    |                       Either "PUBLIC", "HIDDEN", or "PRIVATE" - depending on whether you want this product to be visible.                        |
|        `deliverable`        |     object      |    ✔️    | The product's deliverable which will be sent to the customer. Consists of three pieces of nested data, being "delivery_text", "type", and "data" |
|           `price`           |     object      |    ✔️    |                        The product's price in nested format. Consists of two variables "PRICE" (in cents) and "CURRENCY".                        |
|          `humble`           |     boolean     |    ❌    |                              Whether you want to allow the customer to pay more than the product's price. ( ͡° ͜ʖ ͡°)                               |
|      `payment_methods`      | array of string |    ✔️    |                        Items Enum: "COINBASE" "PAYDASH" "PAYPAL" "STRIPE". The product's payment methods in array format.                        |
|  `additional_information`   |      array      |    ❌    |                               Additional info that can be requested from the customer during the checkout process.                               |
|       `bulk_discount`       |      array      |    ❌    |                                 An array of discounts when a customer purchases more than a specified quantity.                                  |
| `minimum_purchase_quantity` |       int       |    ✔️    |                                                The minimum amount a customer is able to purchase.                                                |
| `maximum_purchase_quantity` |    int/null     |    ❌    |                                                The maximum amount a customer is able to purchase.                                                |
|          `webhook`          |   string/null   |    ❌    |                                         A webhook URL that will receive updates when orders are placed.                                          |
|         `warranty`          |   object/null   |    ❌    |                                        The warranty time in which a customer is able to request a refund.                                        |
|          `locked`           |     boolean     |    ❌    |                                           Whether this product is locked by the admins or moderators.                                            |
|          `section`          |    int/null     |    ❌    |                             The ID of a section to associate with this product. Use null to disassociate a section.                              |

</details>

<details>
  <summary>updateProduct(id, fields)</summary>
  
```javascript
API.updateProduct("4982", {
	"title": "Millions of gold pieces EXTRA",
	"slug": "millions-of-gold-pieces",
	"description": "Get rich, buy this.",
	"visibility": "PUBLIC",
	"deliverable": {
		"delivery_text": "Meet me in world 1000!!",
		"type": "MANUAL",
		"data": {
			"stock": 666,
			"comment": "Thanks broski (scammed, real)"
		}
	},
	"price": {
		"price": 1000, // ( ͡° ͜ʖ ͡°)
		"currency": "USD"
	},
	"humble": true,
	"payment_methods": ["PAYPAL"],
	"minimum_purchase_quantity": 1,
	"maximum_purchase_quantity": 20
})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
```

| Parameters |  Type  | Required |             Description             |
| :--------: | :----: | :------: | :---------------------------------: |
|    `id`    | string |    ✔️    | ID of the coupon you want to update |
|  `fields`  | object |    ✔️    |           Coupon's field            |

|       Fields' Values        |      Type       | Required |                                                                   Description                                                                    |
| :-------------------------: | :-------------: | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
|           `title`           |     string      |    ✔️    |                                                               The product's title.                                                               |
|        `description`        |     string      |    ✔️    |                                                            The product's description.                                                            |
|           `image`           |   object/null   |    ❌    |                                      An image binary which will be visible when someone views your product.                                      |
|           `order`           |    int/null     |    ❌    |                                          The product's order in which it is sorted on your storefront.                                           |
|        `visibility`         |     string      |    ✔️    |                       Either "PUBLIC", "HIDDEN", or "PRIVATE" - depending on whether you want this product to be visible.                        |
|        `deliverable`        |     object      |    ✔️    | The product's deliverable which will be sent to the customer. Consists of three pieces of nested data, being "delivery_text", "type", and "data" |
|           `price`           |     object      |    ✔️    |                        The product's price in nested format. Consists of two variables "PRICE" (in cents) and "CURRENCY".                        |
|          `humble`           |     boolean     |    ❌    |                              Whether you want to allow the customer to pay more than the product's price. ( ͡° ͜ʖ ͡°)                               |
|      `payment_methods`      | array of string |    ✔️    |                        Items Enum: "COINBASE" "PAYDASH" "PAYPAL" "STRIPE". The product's payment methods in array format.                        |
|  `additional_information`   |      array      |    ❌    |                               Additional info that can be requested from the customer during the checkout process.                               |
|       `bulk_discount`       |      array      |    ❌    |                                 An array of discounts when a customer purchases more than a specified quantity.                                  |
| `minimum_purchase_quantity` |       int       |    ✔️    |                                                The minimum amount a customer is able to purchase.                                                |
| `maximum_purchase_quantity` |    int/null     |    ❌    |                                                The maximum amount a customer is able to purchase.                                                |
|          `webhook`          |   string/null   |    ❌    |                                         A webhook URL that will receive updates when orders are placed.                                          |
|         `warranty`          |   object/null   |    ❌    |                                        The warranty time in which a customer is able to request a refund.                                        |
|          `locked`           |     boolean     |    ❌    |                                           Whether this product is locked by the admins or moderators.                                            |
|          `section`          |    int/null     |    ❌    |                             The ID of a section to associate with this product. Use null to disassociate a section.                              |

</details>

<details>
  <summary>deleteProduct(id)</summary>
  
```javascript
API.deleteProduct("4982").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | ID of the product you want to delete |
</details>

## Section Endpoint

<details>
  <summary>getAllSections()</summary>
  
```javascript
API.getAllSections().then((res) => {
	console.log(res);
});
```
</details>

<details>
  <summary>getSection(id)</summary>
  
```javascript
API.getSection("694").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | ID of a section |
</details>

<details>
  <summary>createSection(fields)</summary>
  
```javascript
API.createSection({
	"title": "Gaming Goods",
	"hidden": false
})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
```

| Parameters |  Type  | Required |   Description   |
| :--------: | :----: | :------: | :-------------: |
|  `fields`  | object |    ✔️    | Section's field |

| Fields' Values |  Type   | Required |                                     Description                                      |
| :------------: | :-----: | :------: | :----------------------------------------------------------------------------------: |
|    `title`     | string  |    ✔️    |                                 The section's title.                                 |
|    `hidden`    | boolean |    ✔️    | Whether this section is hidden from public view (can only be accessed by direct URL) |
|    `order`     |   int   |    ❌    |        The order of the section in which it is displayed on your storefront.         |

</details>

<details>
  <summary>updateSection(id, fields)</summary>
  
```javascript
API.updateSection("694", {
	"title": "Gaming Goods",
	"hidden": false,
	"order": 1,
	"slug": "gaming-goods"
}).then((res) => {
	console.log(res);
});
```

| Parameters |  Type  | Required |             Description             |
| :--------: | :----: | :------: | :---------------------------------: |
|    `id`    | string |    ✔️    | ID of the coupon you want to update |
|  `fields`  | object |    ✔️    |           Coupon's field            |

| Fields' Values |  Type   | Required |                                     Description                                      |
| :------------: | :-----: | :------: | :----------------------------------------------------------------------------------: |
|    `title`     | string  |    ✔️    |                                 The section's title.                                 |
|    `hidden`    | boolean |    ✔️    | Whether this section is hidden from public view (can only be accessed by direct URL) |
|    `order`     |   int   |    ❌    |        The order of the section in which it is displayed on your storefront.         |

</details>

<details>
  <summary>deleteSection(id)</summary>
  
```javascript
API.deleteSection("694").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | ID of the section you want to delete |
</details>

## Feedback Endpoint

<details>
  <summary>getAllFeedback()</summary>
  
```javascript
API.getAllFeedback().then((res) => {
	console.log(res);
});
```
</details>

<details>
  <summary>getFeedback(id)</summary>
  
```javascript
API.getFeedback("666").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | ID of a feedback |
</details>

<details>
  <summary>replyFeedback(id, replyMessage)</summary>
  
```javascript
API.replyFeedback("666", "Thanks for the positive feedback!").then((res) => {
	console.log(res);
});
```

|   Parameters   |  Type  | Required |                                Description                                |
| :------------: | :----: | :------: | :-----------------------------------------------------------------------: |
|      `id`      | string |    ✔️    |                    ID of the coupon you want to update                    |
| `replyMessage` | string |    ✔️    | A reply message that was left by the store owner who received this rating |

</details>

## Invoice Endpoint

<details>
  <summary>getAllOrders()</summary>
  
```javascript
API.getAllOrders().then((res) => {
	console.log(res);
});
```
</details>

<details>
  <summary>getOrder(id)</summary>
  
```javascript
API.getOrder("666").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | ID of an order |
</details>

<details>
  <summary>getOrderDeliverables(id)</summary>
  
```javascript
API.getOrderDeliverables("666").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | ID of an order |
</details>

<details>
  <summary>createInvoice(fields)</summary>
  
```javascript
API.createInvoice({
	"customer_email": "john@doe.com",
	"total": "4.99",
	"payment_method": "PAYPAL",
	"products": {
		"1210": {
			"quantity": 5,
			"additional_information": [
				{
					"accept_terms_and_conditions": true,
					"read_terms_and_conditions_before_accepting": true
				}
			],
			"fill_once": true
		}
	}
})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
```

| Parameters |  Type  | Required |   Description   |
| :--------: | :----: | :------: | :-------------: |
|  `fields`  | object |    ✔️    | Invoice's field |

|  Fields' Values  |  Type  | Required |                                                                                                                          Description                                                                                                                          |
| :--------------: | :----: | :------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `customer_email` | string |    ❌    |                                                                                                       The email of the customer who placed this order.                                                                                                        |
|     `total`      | string |    ❌    |                                                                                   The total amount to pay for this order. Can be excluded to create free-of-charge orders.                                                                                    |
| `payment_method` | string |    ❌    | Enum: "COINBASE" "PAYDASH" "PAYPAL" "STRIPE". The payment gateway to process this order with.The selected payment gateway must be configured for the issuing store and should only be included in the request if the total of the order is greater than zero. |
|     `coupon`     | string |    ❌    |                                                                                                            The coupon code to apply to this order.                                                                                                            |
|    `products`    | object |    ❌    |                                                     Association of products with quantity and additional information to include in the order. The object keys must be the ids of the listings to include                                                      |

</details>

<details>
  <summary>issueReplacement(id, fields)</summary>
  
```javascript
API.issueReplacement("666", {
  "listings": [
    1,
    2,
    3
  ]
}).then((res) => {
	console.log(res);
});
```

| Parameters |  Type  | Required |                                            Description                                            |
| :--------: | :----: | :------: | :-----------------------------------------------------------------------------------------------: |
|    `id`    | string |    ✔️    |                          ID of the order you want to issue a replacement                          |
|  `fields`  | array  |    ❌    | The listings that should be replaced. If no listings are provided, all listings will be replaced. |

</details>

<details>
  <summary>createPayment(id)</summary>
  
```javascript
API.createPayment("4982")
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | Generates a payment session for the given ORDER ID. |
</details>

## Ticket Endpoint

<details>
  <summary>getAllTickets()</summary>
  
```javascript
API.getAllTickets().then((res) => {
	console.log(res);
});
```
</details>

<details>
  <summary>getTicket(id)</summary>
  
```javascript
API.getTicket("69").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | Retrieves a ticket by the entered ID. |
</details>

## Ticket Message Endpoint

<details>
  <summary>getAllTicketMessages(id)</summary>
  
```javascript
API.getAllTicketMessages("69").then((res) => {
    console.log(res);
});
```
| Parameters |  Type  | Required |      Description       |
| :--------: | :----: | :------: | :--------------------: |
|    `id`    | string |    ✔️    | Retrieves a list of all the messages within a ticket by its entered ID. |
</details>

<details>
  <summary>getTicketMessage(id, messageId)</summary>
  
```javascript
API.getTicketMessage("69", "420").then((res) => {
    console.log(res);
});
```
|  Parameters | Type | Required |                                  Description                                  |
|:-----------:|:----:|:--------:|:-----------------------------------------------------------------------------:|
|     `id`    |  int |    ✔️      |                                 ID of a ticket                                |
| `messageId` |  int |     ✔️     | Retrieves a specific message within a ticket by their respective entered IDs. |
</details>

<details>
  <summary>respondTicket(id, fields)</summary>
  
```javascript
API.respondTicket("69", {
	"author": "STORE",
	"content": "This is a response message."
}).then((res) => {
	console.log(res);
});
```

| Parameters |  Type  | Required |             Description              |
| :--------: | :----: | :------: | :----------------------------------: |
|    `id`    | string |    ✔️    | ID of the ticket you want to respond |
|  `fields`  | object |    ✔️    |           Response's field           |

| Parameters |  Type  | Required |                                Description                                |
| :--------: | :----: | :------: | :-----------------------------------------------------------------------: |
|  `author`  | string |    ❌    | Either "STORE" or "CUSTOMER" depending on who sent this specific message. |
| `content`  | string |    ✔️    |                        The message that was left.                         |

</details>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
