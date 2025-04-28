import logo from '../assets/investment-calculator-logo.png'

export default function Navbar() {
    return <header id='header'>
          <img src={logo} alt="" />
          <h1>Investment Calculator</h1>
    </header>;
}