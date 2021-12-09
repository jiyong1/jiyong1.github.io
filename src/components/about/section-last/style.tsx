import styled from 'styled-components';

const AboutLastSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .thank-text {
    font-size: 2rem;
    margin: 2em 0;
  }
  .button-container {
    display: grid;
    padding: 0 1rem;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 600px;
    grid-gap: 1.5rem;
    justify-content: center;

    > * {
      font-size: 1.1rem;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      &:hover {
        color: inherit;
        opacity: 0.7;
      }
    }
  }
`;
export default AboutLastSection;
