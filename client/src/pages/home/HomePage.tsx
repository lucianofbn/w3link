import './HomePage.css'
import ud_default from '../../assets/images/default-large.svg'
import step1_ic from '../../assets/images/step1-ic.svg'
import step2_ic from '../../assets/images/step2-ic.svg'
import step3_ic from '../../assets/images/step3-ic.svg'
import logo from '../../assets/images/w3link-logo.svg'
import UdLoginBt from '../../components/udloginbt/UdLoginBt'

function HomePage() {
  return (
    <div>
      <nav>
        <a href='/'>
          <img className='logo' src={logo} alt='W3Link'></img>
        </a>
      </nav>

      <section className='title'>
        <h1>Everything about your web3<br />profile in one simple link</h1>
      </section>

      <section className='infos'>
        <div className='box-info'>
          <img src={step1_ic} alt='Step 1'></img>
          <p>Login with unstoppable domain</p>
        </div>

        <div className='box-info'>
          <img src={step2_ic} alt='Step 2'></img>
          <p>Edit and customize your profile</p>
        </div>

        <div className='box-info'>
          <img src={step3_ic} alt='Step 3'></img>
          <p>Share your web3 profile link</p>
        </div>
      </section>

      <div className='divisor'></div>

      <section className='login'>
        <div className='box-login'>
          <h1>Login to Continue.</h1>
          <UdLoginBt></UdLoginBt>
        </div>
      </section>
    </div>
  )
}

export default HomePage
