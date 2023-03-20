import { Link } from 'umi';

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <Link to="/test">Go to test page</Link>{' '}
    </div>
  );
}
