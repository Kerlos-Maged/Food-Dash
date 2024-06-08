'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Image from 'next/image';
import { offers } from '../../../constants';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className='w-full'>
        {
            offers.map((e)=>{
              return (
                <Grid item xs={4}>
                  <Item>
                    <Link href={'/'} key={e.id} className='relative size-[400px]'>
                      <Image src={e.img} fill className='object-cover' alt=''/>
                    </Link> 
                  </Item>
                </Grid>
              )
            })
          }
      </Grid>
    </Box>
  );
}
