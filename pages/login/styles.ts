import { styled } from "@stitches/react";

export const MainLoguin = styled('div', {
  width: '50%',
  height: '450px',
  backgroundColor: '#1C3144',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '20px',

  a: {
    textDecoration: 'none',
    width: '100px',
    height: '56px',
    backgroundColor: 'LightGray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "0 10px",
    borderRadius: '20px',
    margin: '10px',
  },
  h1: {
    color: 'lightGray',
    margin: '50px',
  }
});