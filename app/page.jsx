import Link from 'next/link'
const Homepage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties" className="text-blue-600">Show Properties</Link>
    </div>
  );
};

export default Homepage;
