import Link from 'next/link';

const NavItem = ({ active, setActive, name, route }) => {
  return (
    <Link href={route} passHref={true}>
      <span
        className={active === name ? 'nav-item nav-item--active' : 'nav-item'}
        onClick={() => setActive(name)}
      >
        {name}
      </span>
    </Link>
  );
};

export default NavItem;
