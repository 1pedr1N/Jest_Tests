import {render } from '@testing-library/react';
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
        const {getByText} = render(<App />)

        const addButton = getByText('Novo' )
userEvent.click(addButton)
expect(getByText('Novo' )).toBeInTheDocument()
    } )
} )