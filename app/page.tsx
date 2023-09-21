import Image from 'next/image';
import { InferGetStaticPropsType } from 'next'



//components
import Meet from './home/page';
import AddMeeting from './addmeeting/page';
import Button from './Components/Button';
import Nav from './Components/Nav';
import Link from 'next/link';


export default function Home({meetings} :InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <main className="">
      <div className="">
        <Nav/>
      </div>
    </main>
  )
}
