import Image from 'next/image';
import AnimatedGridPattern from '../../components/magicui/animated-grid-pattern';
import { cn } from '../../lib/utils';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#953553] flex-col items-center justify-between py-24 px-6">
            <p className="z-10  whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
          <span className='text-2xl'>though I woulda deny my most loyal and trustworthy friends challenge?</span>
              <br/><br/>
              1 year, 132 lbs, muscular+lean, accepted, NO Girl friends (never again ngl fr/except naomi, andy, emy, linda and havana)<br/>
              my challenge: 1 year, about 88lbs, lean+10%bodyFat, no Guy friends (except our teammates)<br/>
              <span className='text-2xl'>{"Forgive me & Don't worry I'm never ever making the mistake of choosing another girl over you, really ever again, I KNOW YOU'RE FAR MORE LOYAL THAN ME, INTROVERTED OWL. Basically everyday Flames reminded me the number of days you cried for me, don't ever again :("}</span>
              <br/><br/>
              You think your all profiles with no B won my trust? <br/>
              {" Not even close, I have been talking to you roughly for 4 years now, I know everything :) "}<br/>
            
              
            </p>
    </main> 
  );
}
