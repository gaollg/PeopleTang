import PTCarousel from './componentsHome/PTCarousel';
import PTNFTGridShow from './componentsHome/PTNFTGridShow';
import PTTopNav from './componentsHome/PTTopNav';

export default function HomePage() {
  return (
    <div>
      <PTTopNav />
      <PTNFTGridShow />
      <PTCarousel />
    </div>
  );
}
