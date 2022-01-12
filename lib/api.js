const axios = require("axios").default;

class Sellapp {
	constructor(api_key) {
		this.api_key = api_key;
		this.url = "https://sell.app/api/v1/";
	}

	// BLACKLISTS ENDPOINT
	/**
	 * @returns Returns a list of all the blacklists created.
	 */
	getAllBlacklists() {
		const params = `blacklists`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Retrieves a blacklist by the entered ID.
	 */
	getBlacklist(id) {
		const params = `blacklists/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} type One of the following - "EMAIL", "IP", or "COUNTRY"
	 * @param {string} data Depending on the type you chose, you can enter an IP address, email address, or country code here.
	 * @param {string} description A description that will help you remember why this blacklist rule was created.
	 */
	createBlacklist(type, data, description) {
		let blacklist = {
			"type": type.toUpperCase(),
			"data": data,
			"description": description
		};
		const params = `blacklists`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, blacklist, "POST")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id ID of Blacklists to edit.
	 * @param {string} type One of the following - "EMAIL", "IP", or "COUNTRY"
	 * @param {string} data Depending on the type you chose, you can enter an IP address, email address, or country code here.
	 * @param {string} description A description that will help you remember why this blacklist rule was created.
	 */
	updateBlacklist(id, type, data, description) {
		let blacklist = {
			"type": type.toUpperCase(),
			"data": data,
			"description": description
		};
		const params = `blacklists/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, blacklist, "PATCH")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Deletes a blacklist by the entered ID.
	 */
	deleteBlacklist(id) {
		const params = `blacklists/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, null, "DELETE")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					resolve(err);
				});
		});
	}

	// COUPONS ENDPOINT
	/**
	 * @returns Returns a list of all the coupons created.
	 */
	getAllCoupons() {
		const params = `coupons`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {object} fields Coupon's field ([More info](https://developer.sell.app/#tag/Coupons/paths/~1api~1v1~1coupons/post))
	 */
	createCoupon(fields) {
		const params = `coupons`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, fields, "POST")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Retrieves a coupon by the entered ID.
	 */
	getCoupon(id) {
		const params = `coupons/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Updates a coupon by the entered ID.
	 * @param {object} fields Coupon's field. ([More info](https://developer.sell.app/#tag/Coupons/paths/~1api~1v1~1coupons/post))
	 */
	updateCoupon(id, fields) {
		const params = `coupons/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, fields, "PATCH")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Deletes a coupon by the entered ID.
	 */
	deleteCoupon(id) {
		const params = `coupons/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, null, "DELETE")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	// LISTINGS/PRODUCTS ENDPOINT
	/**
	 * @returns Returns a list of all the listings/products created.
	 */
	getAllProducts() {
		const params = `listings`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Retrieves a listing/product by the entered ID.
	 */
	getProduct(id) {
		const params = `listings/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {object} fields Product's field ([More info](https://developer.sell.app/#tag/Listings/paths/~1api~1v1~1listings/post))
	 */
	createProduct(fields) {
		const params = `listings`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, fields, "POST")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Updates a listing/product by the entered ID.
	 * @param {object} fields Product's field. ([More info](https://developer.sell.app/#tag/Listings/paths/~1api~1v1~1listings~1{listing}/patch))
	 */
	updateProduct(id, fields) {
		const params = `listings/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, fields, "PATCH")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Deletes a listing/product by the entered ID.
	 */
	deleteProduct(id) {
		const params = `coupons/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, null, "DELETE")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	// SECTIONS ENDPOINT
	/**
	 * @returns Returns a list of all the listings created.
	 */
	getAllSections() {
		const params = `sections`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Retrieves a section by the entered ID.
	 */
	getSection(id) {
		const params = `sections/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {object} fields Section's field ([More info](https://developer.sell.app/#tag/Sections/paths/~1api~1v1~1sections/post))
	 */
	createSection(fields) {
		const params = `sections`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, fields, "POST")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Updates a section by the entered ID.
	 * @param {object} fields Section's field. ([More info](https://developer.sell.app/#tag/Sections/paths/~1api~1v1~1sections~1{section}/patch))
	 */
	updateSection(id, fields) {
		const params = `sections/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, fields, "PATCH")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Deletes a section by the entered ID.
	 */
	deleteSections(id) {
		const params = `sections/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, null, "DELETE")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	//FEEDBACK ENDPOINTS
	/**
	 * @returns Returns a list of all the feedback received.
	 */
	getAllFeedback() {
		const params = `feedback`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Retrieves a feedback by the entered ID.
	 */
	getFeedback(id) {
		const params = `feedback/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Responds to a given feedback by the entered ID.
	 * @param {string} replyMessage A reply message that was left by the store owner who received this rating
	 */
	replyFeedback(id, replyMessage) {
		const message = {
			"reply": replyMessage
		};
		const params = `feedback/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, message, "PATCH")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	// INVOICES ENDPOINT
	/**
	 * @returns Returns a list of all the orders that have been placed.
	 */
	getAllOrders() {
		const params = `invoices`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Retrieve a specific order by the entered ID.
	 */
	getOrder(id) {
		const params = `invoices/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {object} fields Invoice's fields ([More info](https://developer.sell.app/#tag/Invoices/paths/~1api~1v1~1invoices/post))
	 */
	createInvoice(fields) {
		const params = `invoices`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, fields, "POST")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Issue a replacement for an order by the entered ID.
	 * @param {array} fields Listing(s)' field, the listings that should be replaced. If no listings are provided, all listings will be replaced. ([More info](https://developer.sell.app/#tag/Invoices/paths/~1api~1v1~1invoices~1{invoice}~1issue-replacement/patch))
	 */
	issueReplacement(id, fields) {
		const params = `invoices/${id}/issue-replacement`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, fields, "PATCH")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Generates a payment session for the given order. POSTing to this endpoint will return a unique payment_url that you can pass on to your customer. Once the customer has made the payment, our system will automatically process the relevant order and deliver the product to the customer, you won't need to do anything else.
	 */
	createPayment(id) {
		const params = `invoices/${id}/checkout`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, null, "POST")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	// TICKETS ENDPOINT
	/**
	 * @returns Retrieves a list of all the tickets received.
	 */
	getAllTickets() {
		const params = `tickets`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Retrieves a ticket by the entered ID.
	 */
	getTicket(id) {
		const params = `tickets/${id}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	// TICKET MESSAGES ENDPOING
	/**
	 * @param {string} id Retrieves a list of all the messages within a ticket by its entered ID.
	 */
	getAllTicketMessages(id) {
		const params = `tickets/${id}/messages`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Retrieves a specific message within a ticket by their respective entered IDs.
	 * @param {string} messageId Message's ID that you want to retrieve with
	 */
	getTicketMessage(id, messageId) {
		const params = `tickets/${id}/messages/${messageId}`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	/**
	 * @param {string} id Creates a message to a ticket by its entered ID and returns the created message.
	 * @param {object} fields Response's field ([More info](https://developer.sell.app/#tag/Ticket-Messages/paths/~1api~1v1~1tickets~1{ticket}~1messages/post))
	 */
	respondTicket(id, fields) {
		const params = `tickets/${id}/messages`;
		return new Promise((resolve, reject) => {
			this.makeRequest(params, fields, "POST")
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	// REQUEST
	/**
	 * @param {string} params URL route
	 * @param {*} body Content of body.
	 * @param {string} method HTTP Method. Default is 'GET'
	 */
	async makeRequest(params, body, method) {
		return await new Promise((resolve, reject) => {
			axios({
				method: method ? method : "GET",
				url: this.url + params,
				data: body,
				headers: {
					"Authorization": `Bearer ${this.api_key}`
				},
				responseType: "json",
				proxy: false
			})
				.then((res) => {
					return resolve(res.data);
				})
				.catch((err) => {
					return reject(err);
				});
		});
	}
}

module.exports = Sellapp;
