import Stats from "@/components/shared/Stats";
import { render, screen } from "@testing-library/react";

const mockStat = {
    title: 'Test',
    value: '234 234',
}

describe('Stats', () => { 
    describe('Render', () => { 
        it('should have 2 paragraphs', () => {
            //arrange
            render(<Stats title={mockStat.title} value={mockStat.value}  />)

            //act
            const paras = screen.getAllByTestId('paragraph')

            //assert
            expect(paras.length).toBe(2)
        });

        it('should render "Test" in 1st paragraph', () => {
            //arrange
            render(<Stats title={mockStat.title} value={mockStat.value}  />)

            //act
            const para1 = screen.getAllByTestId('paragraph')[0]

            //assert
            expect(para1).toHaveTextContent('Test')
        });

        it('should render "234 234" in 2nd paragraph', () => {
            //arrange
            render(<Stats title={mockStat.title} value={mockStat.value}  />)

            //act
            const para2 = screen.getAllByTestId('paragraph')[1]

            //assert
            expect(para2).toHaveTextContent('234 234')
        });
        
     })
 })