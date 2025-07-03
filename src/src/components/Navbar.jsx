import { Link } from 'react-router-dom';
const Navbar = () => (
  <nav className="flex justify-between p-4 bg-blue-600 text-white dark:bg-gray-900">
    <h1 className="font-bold">Task Manager</h1>
    <div>
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/tasks">Tasks</Link>
    </div>
  </nav>
);
export default Navbar;
