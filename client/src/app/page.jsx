import Navbar from './components/Navbar';

export default function Home() {
    return (
      <main>
        <Navbar/>
        <h1 className="text-3xl font-bold">Welcome to My Next.js App</h1>
        <p className="text-lg mt-2">This is the home page.</p>
      </main>
    );
}
  