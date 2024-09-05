class ApiUtil{

    constructor(apiContext, payload, orderPayload){
        this.apiContext = apiContext;
        this.payload = payload
        this.orderPayload = orderPayload

    }

    async getToken(){
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
    
            data : this.payload
        })
        const loginResponseJson = await loginResponse.json()
    
        const token = await loginResponseJson.token
    
        return token
    }

    async orderProduct(){
        let response = {}
        response.token = await this.getToken() 
        const orderresponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: this.orderPayload,
                headers : {
                    "authorization" : response.token
                }
            }
         )
    
         const orderresponseJson = await orderresponse.json()
         const orderID = await orderresponseJson.orders[0]
         response.orderID = orderID
         return response // orderid
    }

}

module.exports = {ApiUtil}