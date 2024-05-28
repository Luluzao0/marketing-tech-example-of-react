
import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const features = [
  { title: 'Automação de Marketing', description: 'Automatize suas campanhas de marketing com nossas ferramentas avançadas.' },
  { title: 'Análise de Dados', description: 'Obtenha insights profundos sobre suas campanhas com análises detalhadas.' },
  { title: 'Otimização de SEO', description: 'Melhore seu ranking nos motores de busca com nossas técnicas de SEO.' },
];

const Features = () => (
  <Container maxWidth="lg" className="features" id="features">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h3" gutterBottom>
        Nossas Características
      </Typography>
    </motion.div>
    <Grid container spacing={4}>
      {features.map((feature, index) => (
        <Grid item xs={12} md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <Box border={1} borderRadius={2} p={3}>
              <Typography variant="h5" gutterBottom>
                {feature.title}
              </Typography>
              <Typography>
                {feature.description}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Features;
