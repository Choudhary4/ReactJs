import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [animateCount, setAnimateCount] = useState(false);

    // Trigger ripple effect when count changes
    useEffect(() => {
        setAnimateCount(true);
        const timer = setTimeout(() => setAnimateCount(false), 600); // Reset after animation
        return () => clearTimeout(timer);
    }, [count]);

    return (
        <div className="flex flex-col items-center justify-center ">
            <button
                className="px-8 py-3 mb-6 text-lg font-semibold text-white bg-red-500 rounded-full shadow-lg transform transition-transform duration-700 hover:bg-red-600 hover:rotate-6 hover:scale-110 active:scale-95 active:rotate-0"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <div className="relative flex items-center justify-center my-6">
                <div
                    className={`text-5xl font-bold text-gray-900 transition-transform duration-500 ${
                        animateCount ? 'animate-rippleEffect text-blue-700' : ''
                    }`}
                    key={count}
                >
                    {count}
                </div>
                {animateCount && (
                    <div className="absolute inset-0 flex items-center justify-center animate-ripple">
                        <div className="absolute w-24 h-24 border-4 border-blue-400 rounded-full opacity-0"></div>
                    </div>
                )}
            </div>
            <button
                className="px-8 py-3 text-lg font-semibold text-white bg-green-500 rounded-full shadow-lg transform transition-transform duration-700 hover:bg-green-600 hover:-rotate-6 hover:scale-110 active:scale-95 active:rotate-0"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
        </div>
    );
};

export default Counter;
