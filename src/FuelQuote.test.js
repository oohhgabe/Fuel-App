import React from 'react';
//import {Alert} from 'react-native'
import FuelQuoteForm from './pages/FuelQuoteForm'
import FuelQuoteHistory from './pages/FuelQuoteHistory'
import {render, screen, fireEvent, waitFor, getByTestId} from '@testing-library/react';
import user from '@testing-library/user-event';
import {BrowserRouter as Router} from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
//jest.mock('./pages/FuelQuoteForm.js')
describe('testing',()=>{
    const onSubmit = jest.fn();
    beforeEach(() =>{
        onSubmit.mockClear();
        render(<Router><FuelQuoteForm handleSubmit={onSubmit}/></Router>)
    });
    it('onSubmit works',async()=>{

        //const Gal_Req = screen.getByPlaceholderText("Please Enter Amount of Gallons");
    await act(async()=>{

        userEvent.type(screen.getByPlaceholderText("Please Enter Amount of Gallons"),'1')
        expect(screen.getByPlaceholderText("Please Enter Amount of Gallons")).toHaveDisplayValue(/1/i)
        
        //No matter what value we give it'll always be "9999 Some St." becuase it is readOnly which never changes
        userEvent.type(screen.getByPlaceholderText("Address"),"1234 Some St.")
        expect(screen.getByPlaceholderText("Address")).toHaveDisplayValue(/9999 Some St./i)

        userEvent.type(screen.getByPlaceholderText("Please Enter a Deliver Date"),"10/24/2022")
        expect(screen.getByPlaceholderText("Please Enter a Deliver Date")).toHaveDisplayValue("10/24/2022")   

        userEvent.type(screen.getByPlaceholderText("Suggested Price"),"689")
        expect(screen.getByPlaceholderText("Suggested Price")).toHaveDisplayValue(/689/i)

        userEvent.type(screen.getByPlaceholderText("Total Amount"),'689')
        expect(screen.getByPlaceholderText("Total Amount")).toHaveDisplayValue(/689/i)
    })
    await act(async()=>{
        userEvent.click(screen.getByRole('button',{name: /submit/i}))
    })
    
    })
})

