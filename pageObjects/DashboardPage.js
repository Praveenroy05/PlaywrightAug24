class DashboardPage
{
    constructor(page){
        this.page = page
        this.products = page.locator("div.card-body")
        this.addToCartSuccessMessage = page.locator("#toast-container")
        this.viewPageProductName = page.locator("div h2")
    }


    async searchProductAndAddToCart(productName)
    {
    await this.products.first().waitFor()
    const countOfTheProducts = await this.products.count()
    for(let i=0; i<countOfTheProducts; i++){
        const productText = await this.products.nth(i).locator("b").textContent() // 
        if(productText === productName){
           await this.products.nth(i).getByRole('button',{name:" Add To Cart"}).click()
            break;
        }
    }
    await this.addToCartSuccessMessage.waitFor()
    }


    async searchProductAndViewDetails(productName)
    {
    await this.products.first().waitFor()
    const countOfTheProducts = await this.products.count()
    for(let i=0; i<countOfTheProducts; i++){
        const productText = await this.products.nth(i).locator("b").textContent() // 
        if(productText === productName){
           await this.products.nth(i).getByRole('button',{name:" View"}).click()
            break;
        }
    }
    await this.viewPageProductName.waitFor()
    }

}
module.exports = {DashboardPage}
