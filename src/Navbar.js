import logo from './logo.gif';

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-name">Crypto<img src={logo} alt="Logo" /> </a>
            <ul className="middle">
                <a href="/news"><li>News</li></a>
                <a href="/price"><li>Price</li></a>
            </ul>
            <ul className="end">
                <a href="/login" className="login"><li>Login</li></a>
                <a href="/sign-up" className="sign-up"><div><li>Sign up</li></div></a>
            </ul>
        </nav>
    )
}