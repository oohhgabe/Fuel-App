import React from 'react';
import LoginForm from "./pages/LoginForm";
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

describe('Login Testing', () => {
    const onSubmit = jest.fn();
    beforeEach(() => {
        onSubmit.mockClear();
        render(<Router><LoginForm handleSubmit={onSubmit}/></Router>)
    });

    it('onSubmit should work', async () =>{
        await act(async () => {
            userEvent.type(screen.getByPlaceholderText("Username"),'admin')
            expect(screen.getByPlaceholderText("Username")).toHaveDisplayValue(/admin/i)

            userEvent.type(screen.getByPlaceholderText("Password"),'password')
            expect(screen.getByPlaceholderText("Password")).toHaveDisplayValue(/password/i)

        });

        await act(async () => {
            userEvent.click(screen.getByRole('button',{name: /LOGIN/i}))
        });
    });
});