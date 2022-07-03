import Link from 'next/link';

const NavItem = ({ setActive, name, route }) => {
  return (
    <Link href={route} passHref={true}>
      <span onClick={() => setActive(name)}>{name}</span>
    </Link>
  );
};

export default NavItem;
