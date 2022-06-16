import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: 'center' }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: '200px', height: '58px' }} />
    </Stack>
    <Typography
      variant="h4"
      sx={{ fontSize: { lg: '17px', xs: '20px' } }}
      mt="18px"
      textAlign="center"
      pb="40px"
    >
      All Rights Reserved
    </Typography>
  </Box>
)

export default Footer
