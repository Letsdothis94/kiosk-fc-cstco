import CartOrder from '../CartOrder/CartOrder';
import '../Success/Success.css';

const Success = () => {
  return (
    <div className='main-container'>
        <CartOrder />
        <section className='success-section'>
            <div className='success-container'>
                <h1>PLEASE TAKE YOUR RECEIPT</h1>
                <img className='checkmark-icon' src='../../public/check-mark.svg' alt='check-mark icon' />
                <h3>Thank you for shopping at kiosk food-mart.</h3>
            </div>
        </section>
    </div>
  )
}

export default Success;