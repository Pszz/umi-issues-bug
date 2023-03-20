import yayJpg from '@/assets/yay.jpg';
import RankSVG from '@/assets/rank_five.svg';

export default function HomePage() {
  return (
    <div>
      <h2>Test Page</h2>
      <p>
        <img src={yayJpg} width="388" />
        <img src={RankSVG} width="388" />
      </p>
    </div>
  );
}
