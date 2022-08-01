import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { styled } from '@stitches/react';

const MainContainer = styled('div', {
  backgroundColor: '#5F7ED6',
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    width: '250px',
    height: '75px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    color: 'DarkBlue',

    '&:hover': {
      filter: 'brightness(0.95)',
    },
  },
});

const Main: NextPage = () => {
  const router = useRouter();

  return (
    <MainContainer>
      <button onClick={() => router.push('/home')}>
        Faça loguin para continuar
      </button>
    </MainContainer>
  );
};

export default Main;
