import { useEffect, useState } from 'react';
import CartOrder from '../CartOrder/CartOrder';
import '../Success/Success.css';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  let [count, setCount] = useState(10);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1500);
    return () => { clearInterval(interval) };
  }, []);
  
  console.log(count);
  useEffect(() => {
    if(count === 0){
      navigate('/');
    }
  }, [count, navigate]);

  return (
    <div className='main-container'>
        <CartOrder className='cartOrderS'/>
        <section className='success-section'>
            <div className='success-container'>
                <h1>PLEASE TAKE YOUR RECEIPT</h1>
                <img className='checkmark-icon' src='../../public/check-mark.svg' alt='check-mark icon' />
                <h3>Thank you for shopping at kiosk food-mart.</h3>
                <p className='counter'>{count}</p>
            </div>
        </section>
    </div>
  )
}

export default Success;