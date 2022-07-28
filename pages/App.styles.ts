import { styled } from "../global.styles";

export const Main = styled('div', {
  backgroundColor: '#1C3144',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',

  'h1': {
    color: 'white',
    margin: '100px',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '700',
  }
});

export const ContainerCardHero = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 200px)',
  gap: '50px',
  justifyContent: 'center'
})

export const CardHero = styled('div', {
  backgroundColor: '#A2AEBB',
  width: '200px',
  height: '300px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '20px 0 0 0',
  overflow: 'hidden',
  transition: 'all 0.5s',

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.2)',
  },

  span: {
    fontFamily: 'Roboto',
    color: '#1C3144',
    marginBottom: '20px',
    textAlign: 'center',
  },

  img: {
    width: '100%',
    height: '100%',
  }
});

export default Main;