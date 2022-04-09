import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavItem from './NavItem';

const NavBar = () => {
  const [active, setActive] = useState('Home');
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActive('Home');
    if (pathname === '/products') setActive('Products');
    if (pathname === '/products/new') setActive('New Product');
  }, [pathname, setActive]);

  return (
    <div className="navBar">
      <p className="navBar_logo">AkzKart</p>
      <div className="navBar_container">
        <span>{active}</span>
        <NavItem name="Home" route="/" active={active} setActive={setActive} />
        <NavItem
          name="Products"
          route="/products"
          active={active}
          setActive={setActive}
        />
        <NavItem
          name="New Product"
          route="/products/new"
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
};

export default NavBar;
