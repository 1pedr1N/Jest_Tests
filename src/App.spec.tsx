import {getByPlaceholderText, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "./App"

describe( 'App Component' , () => {
    it( 'should render list items' , () => {
        const {getByText} = render(<App />)
        expect(getByText('Pedro' )).toBeInTheDocument()
        expect(getByText('Clara' )).toBeInTheDocument()
        expect(getByText('Agnes' )).toBeInTheDocument()
    } )
    it('should be able add new item to list', () => {
        const {getByText, getByPlaceholderText  } = render(<App />)
const inputElement = getByPlaceholderText('Novo item')
const addButton = getByText('Adicionar')
userEvent.click(addButton)

userEvent.type(inputElement, 'Novo')

expect(getByText('Novo' )).toBeInTheDocument()
    })
} )