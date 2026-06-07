import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <main className="min-h-screen w-screen bg-slate-950">
      <Outlet />
    </main>
  );
}