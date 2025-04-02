import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <h1 className='text-5xl font-extrabold'>Hello World!</h1>
        <p>
          Page under construction. Come back in a few seconds, maybe something
          has changed (or not).
        </p>
      </main>
      <Footer />
    </div>
  );
}
