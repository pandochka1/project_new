function Header() {//функциональный компонент
    return <nav className="blue accent-2">
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">ПоискКино</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Sass</a></li>
                <li><a href="#">Components</a></li>
                <li><a href="#">JavaScript</a></li>
            </ul>
        </div>
    </nav>
}
export { Header }