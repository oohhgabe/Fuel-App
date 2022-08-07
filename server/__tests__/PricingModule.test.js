import PricingModuleMock from "../controllers/MockPricingModule.controller.js";

describe('Happy Test PricingModule', function () {
    test('More than 1000 Gallons, from TX, and has history', () => {
        const req = { body: { data: { username: "test", Gal_Req: 1500, state: "TX", history: "True" } } };
        const res = { quote: '',
            send: function (input) {
                this.quote = input
        }
        };

        PricingModuleMock(req, res);
        expect(res.quote.price).toEqual('1.695');
        expect(res.quote.total).toEqual('2542.5');
    });

    test('More than 1000 Gallons, from TX, no history', () => {
        const req = { body: { data: { username: "test", Gal_Req: 1500, state: "TX", history: "False" } } };
        const res = { quote: '',
            send: function (input) {
                this.quote = input
            }
        };

        PricingModuleMock(req, res);
        expect(res.quote.price).toEqual('1.71');
        expect(res.quote.total).toEqual('2565');
    });

    test('Less than 1000 Gallons, not from TX, has history', () => {
        const req = { body: { data: { username: "test", Gal_Req: 500, state: "AL", history: "True" } } };
        const res = { quote: '',
            send: function (input) {
                this.quote = input
            }
        };

        PricingModuleMock(req, res);
        expect(res.quote.price).toEqual('1.74');
        expect(res.quote.total).toEqual('870');
    });
});

describe('Unhappy Test PricingModule', function () {
    test('More than 1000 Gallons, from TX, has history, however does not have username', () => {
        const req = { body: { data: { username: "", Gal_Req: 1500, state: "TX", history: "True" } } };
        const res = { quote: '',
            send: function (input) {
                this.quote = input
            }
        };

        PricingModuleMock(req, res);
        expect(res.quote.message).toEqual("Cannot Calculate Quote.");
    });

    test('0 Gallons, from TX, has history and username', () => {
        const req = { body: { data: { username: "test", Gal_Req: 0, state: "TX", history: "True" } } };
        const res = { quote: '',
            send: function (input) {
                this.quote = input
            }
        };

        PricingModuleMock(req, res);
        expect(res.quote.message).toEqual("Cannot Calculate Quote.");
    });
});