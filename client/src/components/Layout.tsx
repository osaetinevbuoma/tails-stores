import logo from '../assets/img/logo-tm.svg';

interface LayoutInterface {
  children: any
}

const Layout = ({ children }: LayoutInterface): JSX.Element => {
  return (
    <section className="section">
      <div className="container">
        <nav className='block' role="navigation" aria-label="main-navigation">
          <div>
            <a href="# ">
              <img src={logo} alt="Tails Stores logo" width={100} />
            </a>
          </div>
        </nav>

        {children}
      </div>
    </section>
  );
};

export default Layout;
