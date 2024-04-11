import NavLinks from "@/components/shared/NavLinks";
import { Wallet } from "@/lib/assets/icons";
import { render, screen } from "@testing-library/react";

const mockLink = {
    href: '/test',
    label: 'Test',
    icon: <Wallet />,
    disabled: true
}

const mockLink1 = {
    href: '/test',
    label: 'Test',
    icon: <Wallet />,
    disabled: true
}

describe('NavLinks', () => { 
    describe('Render', () => { 
        it('should render a link and the link should have text "Test"', () => {
            //arrange
            render(<NavLinks link={mockLink} />)

            //act
            const link = screen.getByRole('link')

            //assert
            expect(link).toBeInTheDocument()
            expect(link).toHaveTextContent('Test')
        });
        
     })
 })