'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const maxRating = 500;

function calculateStarRating(rating: number) {
  const normalizedRating = rating / maxRating; // Step 1: Normalize the rating
  const scaledRating = normalizedRating * 5;   // Step 2: Scale to 1 to 5
  const starRating = Math.round(scaledRating); // Step 3: Round to nearest integer
  return starRating;
}


export default function BasicRating({rate}: {rate: number}) {
  const [value, setValue] = React.useState<number | null>(2);

  React.useEffect(()=>{
    setValue(calculateStarRating(rate))
  }, [])

  return (
    <Box sx={{'& > legend': { mt: 2 },}}>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}
