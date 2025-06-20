import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
const PlanDetails = () => {
  const { id } = useParams();
  const [ plan, setPlan ] = useState(null);

  console.log(plan)
  const plansData = {
    standard: {
      name: "Standard Plan",
      price: "৳2,000/month",
      features: [
        "Access to 9-hole course",
        "Free locker room access",
        "1 guest pass per month",
      ],
      description:
        "Perfect for casual golfers who want basic club access and amenities.",
    },
    pro: {
      name: "Pro Plan",
      price: "৳5,000/month",
      features: [
        "Unlimited access to 18-hole course",
        "Priority tee times",
        "3 guest passes",
        "Monthly golf clinic access",
      ],
      description:
        "For serious golfers who want premium access and training options.",
    },
    family: {
      name: "Family Plan",
      price: "৳6,500/month",
      features: [
        "Full access for 4 family members",
        "Kids coaching program",
        "Shared locker space",
        "5 guest passes per month",
      ],
      description:
        "A value-packed plan designed for families that golf together.",
    },
  };

  useEffect(() => {
    const fetchPlan = plansData[id];
    setPlan(fetchPlan);
  }, [id]);
  
  if (!plan) return <div className="p-10 text-center text-xl">Loading...</div>;
  return (
    <div className="my-8">
      <div className="max-w-3xl mx-auto p-6">
        <div className="shadow-xl rounded-2xl">
          <div Conte className="p-8 space-y-6">
            <h1 className="text-3xl font-bold text-center">
              {plan.name}
            </h1>
            <p className="text-center text-xl text-green-700 font-semibold">
              {plan.price}
            </p>
            <p className="text-green-800 text-2xl font-bold text-center">
              {plan.description}
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {plan.features.map((feature, index) => (
                <li className="text-green-950 font-serif" key={index}>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="text-center mt-6">
              <Link
                to={"/payment"}
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-medium py-2 rounded-xl transition duration-200"
              >
                Secure Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
