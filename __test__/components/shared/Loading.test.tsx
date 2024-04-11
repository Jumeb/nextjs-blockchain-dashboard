import Loading from "@/components/shared/Loading";
import { render, screen } from "@testing-library/react";


describe('Loading', () => { 
    describe('Render', () => { 
        it('should render the loading', () => {
            //arrange
            render(<Loading />)

            //act
            const loading = screen.getByTestId('loading')

            //assert
            expect(loading).toBeInTheDocument()
        });
        
     })
 })