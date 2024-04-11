import Stamp from "@/components/shared/Stamp";
import { Wallet } from "@/lib/assets/icons";
import { render, screen } from "@testing-library/react";
import exp from "constants";


const mockStamp = {
    icon: <Wallet />,
    title: 'Test',
    value: '234 234',
}

describe('Stamp', () => {
    describe('Render', () => { 
        it('should have a heading with text "Test" and it should be a level 6', () => {
            //arrange
            render(<Stamp stamp={mockStamp} />)

            //act
            const heading = screen.getByRole('heading', {
                name: 'Test',
                level: 6
            })

            //assert
            expect(heading).toBeInTheDocument()
            expect(heading).toHaveTextContent('Test')
            
        });

        it('should have a paragraph with text "234 234"', () => {
            //arrange
            render(<Stamp stamp={mockStamp} />)

            //act
            const paragraph = screen.getByTestId('paragraph')

            //assert
            expect(paragraph).toBeInTheDocument()
            expect(paragraph).toHaveTextContent('234 234')
            
        });
        
     })
});
