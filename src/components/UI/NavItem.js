import Link from 'next/link';

const NavItem = ({ active, setActive, name, route, toggle }) => {
  const handleClick = () => {
    setActive(name);
    toggle();
  };

  return (
    <Link href={route} passHref={true}>
      <span
        className={active === name ? 'nav-item nav-item--active' : 'nav-item'}
        onClick={handleClick}
      >
        {name}
      </span>
    </Link>
  );
};

export default NavItem;
