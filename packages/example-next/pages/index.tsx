import CoinbaseWalletCard from '../components/connectors/CoinbaseWalletCard'
import MetaMaskCard from '../components/connectors/MetaMaskCard'
import NetworkCard from '../components/connectors/NetworkCard'
import TorusCard from '../components/connectors/TorusCard'
import WalletConnectCard from '../components/connectors/WalletConnectCard'
import GnosisSafeCard from '../components/connectorCards/GnosisSafeCard'
import ProviderExample from '../components/ProviderExample'

export default function Home() {
  return (
    <>
      <ProviderExample />
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <MetaMaskCard />
        <WalletConnectCard />
        <CoinbaseWalletCard />
        <NetworkCard />
        <TorusCard />
        <GnosisSafeCard />
      </div>
    </>
  )
}
