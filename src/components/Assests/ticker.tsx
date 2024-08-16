"use client"
import React, { useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { MY_TICKER } from '@/utils/gql/GQL_QUERIES';

// Define NewsItem interface
interface NewsItem {
  title: string;
}

const TickerWrapper: React.FC = () => {
  const client = useApolloClient();
  const [fetchedNewsItems, setFetchedNewsItems] = useState<NewsItem[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await client.query({
        query: MY_TICKER,
      });
      console.log('data', data);
      if (data && data.tickerInfo) {
        setFetchedNewsItems(data.tickerInfo); // Update the state with fetched news items
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state here if needed
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array ensures it runs only once


  return (
    <div id="cbwrap">
      <div className="hwrap">
        <div className="hmove">
          {fetchedNewsItems.map((item, index) => (
            <div key={index} className="hitem">
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerWrapper;
