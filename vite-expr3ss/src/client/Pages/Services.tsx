import React, { useState } from 'react';
import Background from '../assets/images/championship.jpg';
import Footer from '../components/Footer';
import type { Plan } from '../components/Cart.type';
import Button from 'react-bootstrap/esm/Button';

const plans: Plan[] = [
    {
        id: "Basic",
        name: 'Basic Plan',
        feature: [
            "Enter the 5 mile marathon race.",
            "Meeting event with the coaches.",
            "Meeting with the committee.",
        ],
        price: 10,
        color: "primary",
    },
    {
        id: "Premium",
        name: "Premium Plan",
        feature: [
            "Includes all basic features.",
            "Feature representation of jersey with country and name.",
            "Dallas News mention/placement.",
            "Nominee for Athlete of the week.",
        ],
        price: 20,
        color: "success",
    },
    {
        id: "Pro",
        name: "Pro Plan",
        feature: [
            "Includes all basic & premium features plus exclusive content and one-on-one coaching sessions.",
            "Full tour of the headquarters in Dallas, Texas with fully paid Uber.",
            "Meeting & Dinner with the CEO of the organization.",
            "Committee initiation of the organization.",
        ],
        price: 25,
        color: "warning",
    },
];

const Services: React.FC = () => {
    const [cart, setCart] = useState<Plan[]>([])

    const addToCart = (plan: Plan) => {
        setCart((prev) => [...prev, plan])
        alert(`${plan.name} has been added to your cart!`);
    }
    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="text-center text-light p-4 shadow-lg">
                <h1 className='text-opacity-50'>Services</h1>
            </div>

            <div className='text-center'>
                <h1 className='text-light'>Available Plans</h1>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {plans.map((plan) => (
                        <div key={plan.id} className='col-md-4'>
                            <div className={`card bg-${plan.color} text-${plan.color === 'warning' ? 'dark' : 'light'} mb-4`}>
                                <div className='card-body'>
                                    <h5 className='card-title'>{plan.name}</h5>
                                    <ul>
                                        {plan.feature.map((feature, i) => (
                                            <li key={i} className='card-text'>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='p-3'>
                                        <p className='card-text'>
                                            <strong>Price:</strong> ${plan.price}/month
                                        </p>
                                        <Button className="btn btn-light" onClick={() => addToCart(plan)}>
                                            Buy Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-light mt-5 fst-italic fw-bold'>
                    <h2>Your Items</h2>
                    {cart.length === 0 ? (
                        <p className='text-warning'>No items yet.</p>
                    ) : (
                        <ul>
                            {cart.map((item, idx) => (
                                <li key={idx}>
                                    {item.name} - ${item.price}/month
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Services;