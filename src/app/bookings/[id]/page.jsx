const fetchBookingCount = async (roomId) => {
  const maxRetries = 3;
  let attempts = 0;
  while (attempts < maxRetries) {
      try {
          console.log("room id", roomId);
          const response = await fetch(`https://momins-hotel.vercel.app/api/validate/${roomId}`, {
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
      await new Promise(resolve => setTimeout(resolve, attempts * 1000)); // Exponential backoff
  }
  console.error('Max retries reached');
};
