const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {

    // 1. Setting the address and checking the entered value
    it('should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect(await helper.getElementByText('East 2nd Street, 601' && '1300 1st St')).toBeExisting();
    });

    // 2. Selecting Supportive plan
    it('should select supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanIcon = await $(page.supportivePlan);
        await supportivePlanIcon.waitForDisplayed();
        await supportivePlanIcon.click();
        await expect(await helper.getElementByText('Blanket and handkerchiefs')).toBeExisting();
    }); 

    // 3. Filling in the phone number
    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);

        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    });

    // 4. Adding a credit card
    it('should save credit card number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const creditCardNumber = helper.getCardNumber();
        const cardCodeNumber = helper.getCardCodeNumber();
        await page.addCreditCard(creditCardNumber, cardCodeNumber);
        
        const newCardLabel = await $(page.newCardLabel);
        await newCardLabel.waitForDisplayed();
    
        await expect(newCardLabel).toBeDisplayed();
    });

    // 5. Writing a message for the driver
    it('should write message for driver', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // browser.pause(3000);
    
        const messageDriver = await $(page.messageDriverField);
        await messageDriver.waitForDisplayed();
        
        const messageText = "Hey, it worked";
        await messageDriver.setValue(messageText);
    
        const inputFieldValue = await messageDriver.getValue();

        await expect(inputFieldValue).toEqual(messageText);
    });

    // 6. Ordering a Blanket and handkerchiefs
    it('should toggle blanket and handkerchiefs switch', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const supportivePlanIcon = await $(page.supportivePlan);
        await supportivePlanIcon.waitForDisplayed();
        await supportivePlanIcon.click();

        const blanketSwitch = await $(page.blanketsSwitch);
        await blanketSwitch.scrollIntoView();

        await blanketSwitch.click();

        browser.pause(3000);

        await expect(blanketSwitch).toBeEnabled()
    });  

    // 7. Ordering 2 Ice creams
    it('should order 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const supportivePlanIcon = await $(page.supportivePlan);
        await supportivePlanIcon.waitForDisplayed();
        await supportivePlanIcon.click();

        const addIceCreamButton = await $(page.addIceCreamButton);
        await addIceCreamButton.scrollIntoView();

        await addIceCreamButton.click()
        browser.pause(3000);
        await addIceCreamButton.click()

        const iceCreamCounter = await $(page.iceCreamCounter);
        const iceCreamCounterValue = await iceCreamCounter.getText()

        await expect(iceCreamCounterValue).toEqual('2');
    });  

    // 8. The car search modal appears
    it('car search modal should appear', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);

        const orderTaxiButton = await $(page.orderTaxiButton);
        await orderTaxiButton.waitForDisplayed();
        await orderTaxiButton.click()

        const carSearchModal = await $(page.carSearchModal);
        //await carSearchModal.scrollIntoView();

        const carSearchModalText = await carSearchModal.getText();

        await expect(carSearchModalText).toBe('Car search');
    });


    // 9. The driver info appears
    it('driver info should appear', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);

        const orderTaxiButton = await $(page.orderTaxiButton);
        await orderTaxiButton.waitForDisplayed();
        await orderTaxiButton.click()

        const driverInfoModal = await $(page.driverInfoModal);
        //await driverInfoModal.scrollIntoView();

        await browser.waitUntil(
            async () => await driverInfoModal.isExisting(),
            { timeout: 45_000, timeoutMsg: 'Driver info did not appear within 45 seconds' }
        );
    
        await expect(driverInfoModal).toBeExisting();
    });         
})  




/* ********************************************************************************************************** */

/*     it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    }) */


