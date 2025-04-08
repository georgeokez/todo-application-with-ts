import { styled, createGlobalStyle } from "styled-components";

interface ThemeProps {
  darkMode: boolean;
}

export const GlobalStyle = createGlobalStyle<ThemeProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }
  
  body {
    background-color: ${({ darkMode }) => darkMode ? '#181824' : '#fafafa'};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    color: ${({ darkMode }) => darkMode ? '#fff' : '#000'};
  }

  .mobile-only {
    display: none !important;
  }

  @media (max-width: 375px) {
    .mobile-only {
      display: flex !important;
    }
    .desktop-only {
      display: none !important;
    }
  }
`;

export const BackgroundDarkMode = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 280px;
  background: linear-gradient(225deg, rgba(139, 19, 176, 0.1) 0%, rgba(69, 10, 146, 0.1) 80%),
              url('/images/bg-desktop-dark.jpg') no-repeat center top;
  background-size: cover;
  z-index: -1;

  @media (max-width: 375px) {
    background-image: url('/images/bg-mobile-dark.jpg');
    height: 200px;
  }
`;

export const BackgroundLightMode = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 280px;
  background: linear-gradient(225deg, rgba(87, 221, 255, 0.4) 0%, rgba(192, 88, 243, 0.4) 100%),
              url('/images/bg-desktop-light.jpg') no-repeat center top;
  background-size: cover;
  z-index: -1;

  @media (max-width: 375px) {
    background-image: url('/images/bg-mobile-light.jpg');
    height: 200px;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  width: 540px;
  margin: 0 auto;
  padding: 70px 24px;
  position: relative;

  @media (max-width: 540px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    padding: 48px 24px;
    width: 100%;
  }
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const AppLink = styled.a`
  color: #61dafb;
`;

