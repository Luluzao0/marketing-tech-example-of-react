
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => (
  <Container maxWidth="lg" className="hero" id="hero">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h2" gutterBottom>
        Bem-vindo ao Marketing Tech
      </Typography>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h5">
        Soluções tecnológicas para suas necessidades de marketing.
      </Typography>
    </motion.div>
  </Container>
);

export default Hero;
