'use client'
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import {useState} from 'react'

const faqData = [
    {
        question: "How do I generate my code",
        answer: "Your Code Is Automatically Generated As Soon As You Confirm Booking For Your Desired Service."
    },
    {
        question: "How long is my code valid",
        answer: "Your Code Is Valid Until Your Appointment Date Elapses."
    },
    {
        question: "Is my code still valid if I miss my appointment",
        answer: "No. You Would Have To Book Another Appointment To Generate A New Code."
    },
    {
        question: "Is there any notification to the facility concerning my appointment or booking",
        answer: "Yes, All Network Facilities Receive Notification Of Your Booking."
    },
    {
        question: "How is the payment made through the app",
        answer: "You Cannot Make Payment Through The BCA Healthcare App. Payment Is Made Directly To Your Service Provider."
    },
    {
        question: "Can I speak to any consultant or medical practitioners",
        answer: "Yes You Can"
    },
    {
        question: "Is the call care center always available",
        answer: "We Operate A  Fully Functional 24-Hour Call Center"
    }
]

export default function Faq(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-4 my-10 lg:w-3/5 lg:mx-auto">
            <h1 className="text-2xl mb-4">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="border p-4 rounded-lg">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleAnswer(index)}
                        >
                            <h2 className="text-lg font-semibold">{faq.question}</h2>
                            <ChevronDownIcon
                                className={`w-6 h-6 transition-transform ${
                                    openIndex === index ? 'transform rotate-180' : ''
                                }`}
                            />
                        </div>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-700">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}