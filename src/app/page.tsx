import Image from 'next/image';
import AnimatedGridPattern from '../../components/magicui/animated-grid-pattern';
import { cn } from '../../lib/utils';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-6">
            <p className="z-10  whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
          <span className='text-5xl'>though I woulda deny my most loyal and trustworthy friends challenge?</span>
              <br/>
              1 year, 132 lbs, muscular+lean, accepted, NO G friends<br/>
              my challenge: 1 year, 88lbs, lean+10%bodyFat, no guy friends<br/>
              <span className='text-5xl'>{"Don't worry I'm never making the mistake of choosing another girl over you ever again, I KNOW YOU'RE FAR MORE LOYAL THAN ME, INTROVERTED OWL. Flames told me the number of days you cried for me never again :("}</span>
               </p>
    </main> 
  );
}
