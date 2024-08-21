const UrlBase = "https://www.saucedemo.com/";

describe('Test Saucedemo', () => {
    it('Tes 1 - Login Successfully', async () => {
        await browser.url(UrlBase)
        const UserNameTextBox = await browser.$('#user-name')
        const PasswordTextBox = await browser.$('#password')
        const LoginBtn = await browser.$('//input[@type="submit"]')

        await UserNameTextBox.addValue("standard_user")
        await PasswordTextBox.addValue("secret_sauce")
        await LoginBtn.click()

        await browser.pause(5000)
        // await assert.equal(await browser.getUrl(), 'https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitle('Swag Labs');
    });
    it('Tes 2 - Add Item To Cart', async () => {
         // Add the first available item to the cart
         const FirstItem = await browser.$('#add-to-cart-sauce-labs-backpack')
         const ClickCart = await browser.$('.shopping_cart_link')

         await FirstItem.click();
         await ClickCart.click();

         await browser.pause(5000)
    });
    it('Tes 3 - Validate item successfully add to cart', async () => {
        const CartPage = 'https://www.saucedemo.com/cart.html';
        const cartItems = await browser.$('.cart_item .inventory_item_name');

        await expect(browser).toHaveUrl(CartPage)
        await expect(cartItems).toBeExisting()
        
    });
});