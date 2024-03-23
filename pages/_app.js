import MainContainer from "../components/MainContainer";
import "./globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}
