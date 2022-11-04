import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1> 404</h1>
      <p>Oops, page you were looking for does not exist!</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
