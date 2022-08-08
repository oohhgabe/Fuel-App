import React from 'react';
import FuelQuoteForm from './pages/FuelQuoteForm'
import FuelQuoteHistory from "./pages/FuelQuoteHistory"
import Welcome from "./pages/Welcome"
import PricingModule from "./pages/PricingModule"
import {render, screen, fireEvent, waitFor, getByTestId} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('testing',()=>{
    const onSubmit = jest.fn();
    
    it ('onSubmit works',async()=>{
        onSubmit.mockClear();
        render(<FuelQuoteForm handleSubmit={onSubmit}/>)
    await waitFor(async() =>{
        userEvent.click(screen.getByRole('button', {name: /get quote/i}))
    })
    
    
})
it('different paths',async ()=>{
    const bool = true;
    const details = {id: 7, username: test, password: 1234};
    const address = "1234 Some St."
    const date = "2022-08-05T05:00:00.000Z"
    const data = [{
        Gal_Req: 1,
        Del_Add: address,
        Del_Dat: "",
        Sug_Pri: 689,
        Tot_Amo: 0,
        Users_Id: 0,
        username: null
    }]
    React.useState = jest.fn().mockReturnValue([bool,{}])
    React.useState = jest.fn().mockReturnValue([details,{}])
    React.useState = jest.fn().mockReturnValue([address,{}])
    React.useState = jest.fn().mockReturnValue([date,{}])
    React.useState = jest.fn().mockReturnValue([data,{}])
    const spy = jest.spyOn(console,'log')
    render(<FuelQuoteForm/>);
    userEvent.type(screen.getByPlaceholderText("Please Enter Amount of Gallons"),'1')
    expect(screen.getByPlaceholderText("Please Enter Amount of Gallons")).toHaveDisplayValue(/1/i)
    await waitFor(async() =>{
        userEvent.click(screen.getByRole('button', {name: /get quote/i}))
    })
    await waitFor(async()=>{
        userEvent.click(screen.getByRole('button',{name: /submit/i}))
    })
    expect(spy).toBeCalledTimes(4);
})
   
})

describe("FuelQuoteHistory Works",()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    })
    it("History works",async()=>{
        const login = {id: 7, username: test, password: 1234}
        const data = [{Quote_Id: 1, Gallons_Requested: 1, Delivery_Address: "1234 Some St.", Deliver_Date: "2022-08-05T05:00:00.000Z", Total_Amount: 3, Users_Id: 7}]
        React.useState = jest.fn().mockReturnValue([login,{}])
        React.useState = jest.fn().mockReturnValue([data,{}])
        const spy = jest.spyOn(console,'log')
        render(<FuelQuoteHistory/>);
        expect(spy).toBeCalledTimes(2)
    })
    it("history Part2",async()=>{
        const login = {id: 7, username: test, password: 1234}
        const data = [{Quote_Id: 1, Gallons_Requested: 1, Delivery_Address: "1234 Some St.", Deliver_Date: "2022-08-05T12:00:00.000Z", Total_Amount: 3, Users_Id: 7}]
        React.useState = jest.fn().mockReturnValue([login,{}])
        React.useState = jest.fn().mockReturnValue([data,{}])
        const spy = jest.spyOn(console,'log')
        render(<FuelQuoteHistory/>);
        expect(spy).toBeCalledTimes(2)
    })
    it("historyPart3",async()=>{
        const login = {id: 7, username: test, password: 1234}
        const data = [{Quote_Id: 1, Gallons_Requested: 1, Delivery_Address: "1234 Some St.", Deliver_Date: "2022-08-05T17:00:00.000Z", Total_Amount: 3, Users_Id: 7}]
        React.useState = jest.fn().mockReturnValue([login,{}])
        React.useState = jest.fn().mockReturnValue([data,{}])
        const spy = jest.spyOn(console,'log')
        render(<FuelQuoteHistory/>);
        expect(spy).toBeCalledTimes(2)
    })
})

describe("testing Welcome", ()=>{
    it("test",async()=>{
        render(<Welcome/>)
    })
})
describe("testing Module", ()=>{
    it("test",async()=>{
        render(<PricingModule/>)
    })
})
