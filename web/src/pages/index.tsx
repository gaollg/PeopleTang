import PTCarousel from './componentsHome/PTCarousel';
import PTNFTGridShow from './componentsHome/PTNFTGridShow';
import PTNFTIntro2 from './componentsHome/PTNFTIntro2';
import PTSplite from './componentsHome/PTSplite';
import PTTopNav from './componentsHome/PTTopNav';

export default function HomePage() {
  return (
    <div>
      <PTTopNav />
      <PTNFTGridShow />
      <PTCarousel />
      <PTSplite />

      <PTNFTIntro2 />
    </div>
  );
}
