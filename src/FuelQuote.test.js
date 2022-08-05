import React from 'react';
//import {Alert} from 'react-native'
import FuelQuoteForm from './pages/FuelQuoteForm'
//import FuelQuoteHistory from './pages/FuelQuoteHistory'
import FuelQuoteHistory from "./pages/FuelQuoteHistory"
import {render, screen, fireEvent, waitFor, getByTestId} from '@testing-library/react';
import user from '@testing-library/user-event';
import {BrowserRouter as Router} from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';


describe('testing',()=>{
    const onSubmit = jest.fn();
    beforeEach(() =>{
        onSubmit.mockClear();
        render(<FuelQuoteForm handleSubmit={onSubmit}/>)
    });
    it('onSubmit works',async()=>{

        //const Gal_Req = screen.getByPlaceholderText("Please Enter Amount of Gallons");
    await act(async()=>{

        userEvent.type(screen.getByPlaceholderText("Please Enter Amount of Gallons"),'1')
        expect(screen.getByPlaceholderText("Please Enter Amount of Gallons")).toHaveDisplayValue(/1/i)
                
        userEvent.type(screen.getByPlaceholderText("Please Enter a Deliver Date"),"10/24/2022")
        expect(screen.getByPlaceholderText("Please Enter a Deliver Date")).toHaveDisplayValue("10/24/2022")   

       
        expect(screen.getByPlaceholderText("Suggested Price")).toHaveDisplayValue("")

        expect(screen.getByPlaceholderText("Total Amount")).toHaveDisplayValue("")
    })
    await waitFor(async() =>{
        userEvent.click(screen.getByRole('button', {name: /get quote/i}))
    })
    await waitFor(async()=>{
        userEvent.click(screen.getByRole('button',{name: /submit/i}))
    })
    await waitFor(() =>{

        expect(screen.quoteState).toBeTruthy()
    })
    
    })
})

describe("FuelQuoteHistory Works",()=>{
    beforeEach(() => {jest.clearAllMocks()});
    it("History works",async()=>{
      render(<Router><FuelQuoteHistory/></Router>)
      expect(screen.getByText(/delivery date/i)).toBeInTheDocument()
      expect(screen.getByText(/delivery address/i)).toBeInTheDocument()
      expect(screen.getByText(/gallons requested/i)).toBeInTheDocument()
      expect(screen.getByText(/suggested price/i)).toBeInTheDocument()
      expect(screen.getByText(/total amount/i)).toBeInTheDocument()

    })
})

