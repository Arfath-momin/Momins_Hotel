import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function RoomAvailability({ id, qty }) {
    const [bookingCount, setBookingCount] = useState(null);
    const [isAvailable, setIsAvailable] = useState(null);

    useEffect(() => {
        if (id) {
            fetchBookingCount(id);
        }
    }, [id]);

    const fetchBookingCount = async (roomId) => {
        const maxRetries = 3;
        let attempts = 0;
        while (attempts < maxRetries) {
            try {
                console.log("room id", roomId);
                const response = await fetch(`/https://momins.netlify.app/api/validate/${roomId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const count = await response.json();
                    setBookingCount(count);
                    return;
                } else {
                    console.error('Failed to fetch booking count');
                }
            } catch (error) {
                console.error('Error fetching booking count:', error);
            }
            attempts += 1;
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempts) * 1000)); // Exponential backoff
        }
        console.error('Max retries reached');
    };

    useEffect(() => {
        if (bookingCount !== null) {
            const availability = checkAvailability(bookingCount, qty);
            setIsAvailable(availability);
        }
    }, [bookingCount, qty]);

    const checkAvailability = (bookingCount, qty) => {
        return bookingCount < qty;
    };

    return (
        <div>
            {bookingCount !== null ? (
                <>
                    {isAvailable !== null && (
                        !isAvailable ? 
                        <div className='underline underline-offset-8 self-end text-[#f84444] mt-[10px] cursor-not-allowed'>
                            Not Available
                        </div> : 
                        <Link
                            href={`/bookings/${id}`}
                            className='underline underline-offset-8 self-end text-[#656a70] mt-[10px]'
                        >
                            Book Now
                        </Link>
                    )}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RoomAvailability;
