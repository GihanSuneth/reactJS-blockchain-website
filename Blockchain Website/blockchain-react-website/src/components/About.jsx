import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si'
import { VscServerProcess } from 'react-icons/vsc'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <div className='about w-full bg-black text-white text-center'>
    <div className='max-w-[1320px] mx-auto px-4 py-16 bg-black text-white text-center'>
      <div>
        <h1 className='py-4'>A Growing Protocol Ecosystem</h1>
        <p className='py-4 text-xl'>
          The DeXi protocol system empowers developers, liquidity providers, and 
          traders to participate in a financial marketpalcethat is open and
          accessible to all.
        </p>

        {/*Card Container*/}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                {/* Card */}
                <div className='card'>
                <AboutCard icon={<SiHiveBlockchain size={40} />} heading='Reliable, temper-proof network' text='Use decentralization, trusted nodes, premium data, and
    crytographic proofs to connect highly accurate and available
    data/APIs to any smart contract.' />
                </div>

                <div className='card'>
                <AboutCard icon={<SiStrapi size={40} />} heading='Seamless connection to any API' text='Build on a flexible framework can retrive data from ant API, connect with existing systems, and integrate with any current or future blockchain' />
                </div>

                <div className='card'>
                <AboutCard icon={<SiFsecure size={40} />} heading='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' />
                </div>  

                <div className='card'>
                <AboutCard icon={<VscServerProcess size={40} />} heading='Secure off-chain computation' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />
                </div>
                

        </div>
      </div>

    </div>
    </div>
  )
}

export default About;