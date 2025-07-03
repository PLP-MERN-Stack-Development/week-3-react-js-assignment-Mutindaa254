const Card = ({ title, children }) => (
  <div className="bg-white shadow-md rounded p-4 dark:bg-gray-800">
    <h2 className="text-xl font-bold mb-2 dark:text-white">{title}</h2>
    <div>{children}</div>
  </div>
);
export default Card;
