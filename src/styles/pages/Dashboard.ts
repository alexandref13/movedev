import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`

// @media (max-width: 660px){

//   .container section {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center
//   }
// }
