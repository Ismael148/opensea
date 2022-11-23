import '../styles/globals.css';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

// The chain ID 5 represents the Goerli test network
// The `injected` connector is a web3 coonection method used by metamask
const supportedChainIds = [5];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
