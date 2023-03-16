import {getAllByText, getByPlaceholderText, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "./App"

describe( 'App Component' , () => {
    it( 'should render list items' , () => {
        const {getByText} = render(<App />)
        expect(getByText('Pedro' )).toBeInTheDocument()
        expect(getByText('Clara' )).toBeInTheDocument()
        expect(getByText('Agnes' )).toBeInTheDocument()
    } )
    it('should be able add new item to list', async () => {
        const {getByText, getByPlaceholderText, findByText  } = render(<App />)
const inputElement = getByPlaceholderText('Novo item')
const addButton = getByText('Adicionar')
userEvent.click(addButton)

userEvent.type(inputElement, 'Novo')
await waitFor( () => {
expect(getByText('Novo' )).toBeInTheDocument()
})
    }
    
    
    
    )
    it('should be able to remove  item to list', async () => {
        const {getByText, queryByText, getAllByText  } = render(<App />)
const removeBtn = getAllByText('Remover' )

userEvent.click(removeBtn[0] )
await waitForElementToBeRemoved(() => {
    return queryByText('Pedro' )
})
    }
    
    
    
    )
} )