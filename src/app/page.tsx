import Image from 'next/image';
import AnimatedGridPattern from '../../components/magicui/animated-grid-pattern';
import { cn } from '../../lib/utils';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-6">
            <p className="z-10  whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
            Finally this come to an end <br/><br/>
            <span className='text-5xl'>
              {"I don't trust girls, "} <u>definitely you</u>
            </span><br/><br/>
              Neither I want to keep stalking your profile to see how many new boyfriends you made nor how many boys try to impress you, follow you, post story for you <br/>
              I {"don't"} actually trust you enough to know whether you -  <br/>
              ~bought a new sim, new whatsapp account, talk to boys with that account <br/>
              ~made an instagram alternate account, talk to boys in that account <br/>
               ~dirty things with ANYONE<br/>
              Neither I trust your lie~<br/> {'"my dad doesn\'t let me talk to boys", I was stupid to even believe that'} <br/>
              Forgive me I tried to make you guilty and a good person instead of doing dirty things with you <br/>
              <br/><br/>
            <span className='text-5xl'>
              {"Don't post any stories if its for me, its alright for your other boyfriends howsoever, Don't ever stalk me I am goddamned done with this toxic relationship"}
            </span><br/><br/>
            </p>
    </main>
  );
}
