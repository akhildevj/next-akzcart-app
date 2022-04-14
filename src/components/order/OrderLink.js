import Link from 'next/link';

const OrderLink = props => {
  return (
    <Link href={props.link}>
      <a>{props.children}</a>
    </Link>
  );
};

export default OrderLink;
