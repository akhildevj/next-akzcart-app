import { Rating } from '@mui/material';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';

const RatingBar = props => {
  const { loading, authUser } = useAuth();
  const [rating, setRating] = useState(props.rating || 0);

  const changeRating = async value => {
    setRating(value);
    if (!loading && authUser) {
      const options = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: Number(props.id), rating: value }),
      };
      await fetch(
        `${process.env.NEXT_PUBLIC_URL}/products/rating/${authUser.uid}`,
        options
      );
    }
  };

  return (
    <Rating
      name='half-rating'
      className='order-details-item--rating'
      value={rating}
      precision={0.5}
      sx={{
        fontSize: '2.8rem',
      }}
      onChange={(event, newValue) => {
        changeRating(newValue);
      }}
    />
  );
};

export default RatingBar;
