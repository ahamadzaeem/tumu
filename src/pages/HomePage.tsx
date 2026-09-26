import { HeroSection } from '../components/HeroSection';
import { FlavorCarousel } from '../components/FlavorCarousel';
import { MakingProcess } from '../components/MakingProcess';
import { TumuJourney } from '../components/TumuJourney';
import { Franchise } from '../components/Franchise';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FlavorCarousel />
      <MakingProcess />
      <TumuJourney />
      <Franchise />
    </>
  );
}

