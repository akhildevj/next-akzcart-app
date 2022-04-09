import Link from 'next/link';

const NavItem = ({ active, setActive, name, route }) => {
  return (
    active !== name && (
      <Link href={route} passHref={true}>
        <span onClick={() => setActive(name)}>{name}</span>
      </Link>
    )
  );
};

export default NavItem;
