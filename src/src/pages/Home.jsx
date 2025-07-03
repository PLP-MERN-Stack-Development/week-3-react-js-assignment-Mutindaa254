import { useEffect, useState } from 'react';
import Card from '../components/Card';
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.slice(0, 9).map((item) => (
        <Card key={item.id} title={item.title}>
          <p>{item.body}</p>
        </Card>
      ))}
    </div>
  );
};
export default Home;
