module.exports = {
    getPhoneNumber: function(countryCode) {
        const number = Math.floor(1000000000 + Math.random() * 9000000000)
        return `${countryCode}${number}`
    },

    getCardNumber: function() {
        const number = Math.floor(100000000000 + Math.random() * 900000000000)
        return `${number}`
    },

    getCardCodeNumber: function() {
        const number = Math.floor(10 + Math.random() * 90)
        return `${number}`
    },
    
    getElementByText: async function(obj) {
        const selector = `div=${obj.toString()}`;
        console.log("Selector:", selector);
        return await $(selector);
    } 

/*     getElementByText: async function(text) {
        const selector = `//*[contains(text(), '${text}')]`;
        console.log("Selector:", selector);
        return await $(selector); 
    } */
    
};
