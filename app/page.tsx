import Image from 'next/image';
import { InferGetStaticPropsType } from 'next'


//components
import Meet, {Meeting} from './Components/Meet';

const meetingData: Meeting = {
  Meet: [
      {
          title: "Team Meeting",
          description: "Discuss project progress and plan next steps."
      }
  ]
};

export default function Home({meetings} :InferGetStaticPropsType<typeof getStaticProps>) {

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <Meet meeting={meetingData.Meet}/>
      </div>
    </main>
  )
}
