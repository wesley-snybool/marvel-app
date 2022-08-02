import { styled } from '@stitches/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { LoginContext } from '../../src/contexts/loguin/contextLogin';
import { useLogin } from '../../src/hooks/loginHook';

const Main = styled('main', {
  width: '100%',
  height: '100vh',
  backgroundColor: '#21435C',
});

const Login = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px',
  padding: '20px 20px',
  width: 450,
  height: 350,
  borderRadius: '20px',
  position: 'relative',
  top: '25%',
  backgroundColor: '#1C3144 ',
  margin: 'auto auto',

  div: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    gap: '50px',
  },

  h1: {
    color: 'LightGray',
  },
  button: {
    width: '110px',
    height: '50px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'Gray',

    '&:hover': {
      filter: 'brightness(1.5)',
    },
  },
});

const Loguin = () => {
  const router = useRouter();
  const userState = useLogin();
  let userLogeed = userState?.userIsLogeed;

  console.log(userState?.userIsLogeed);

  const handleLogin = () => {
    userState?.setUserISLogeed(true);
    router.push({
      pathname: '/',
      query: {
        userLogeed,
      },
    });
  };

  return (
    <Main>
      <Login>
        <h1>Login Of Bad</h1>
        <div>
          <button onClick={() => userState?.setUserISLogeed(false)}>
            Signout
          </button>
          <button onClick={() => handleLogin()}>Signin</button>
        </div>
      </Login>
    </Main>
  );
};
export default Loguin;
