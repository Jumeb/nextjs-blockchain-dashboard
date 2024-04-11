import Notification from '@/components/shared/Notification/notification.component'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockClick = jest.fn()

describe('Notification', () => {
  describe('Render', () => {
    it('should have a heading and the name should be "Notification"', () => {
      //arrange
      render(<Notification message='Notification' show={true} setShow={mockClick} />)

      //act
      const heading = screen.getByRole('heading', {
        name: 'Notification',
      })

      //assert 
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Notification')
    })

    it('should have a heading and the name should be "Notifications"', () => {
        //arrange
        render(<Notification message='Notifications' show={true} setShow={mockClick} />)
  
        //act
        const heading = screen.getByRole('heading', {
          name: 'Notifications',
        })
  
        //assert 
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent('Notifications')
      })
  })

  describe('Behavior', () => { 
    it('should be clicable', async () => {
        //arrange
        render(<Notification message='Notifications' show={true} setShow={mockClick} />)

        //act
        const button = screen.getByTestId('hide-notify')
        await userEvent.click(button)

        expect(button).toBeInTheDocument()
        expect(mockClick).toHaveBeenCalled()
    });
    
   })
})
