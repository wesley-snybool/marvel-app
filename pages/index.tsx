import type { NextPage } from 'next';
import { Router, useRouter } from 'next/router';

const Main: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push('/home')}>
        Faça loguin para continuar
      </button>
    </div>
  );
};

export default Main;
