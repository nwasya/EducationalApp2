import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from '../components/Markdown';
import Typography from '../components/Typography';
import AppAppBar from '../components/views/AppAppBar';
import AppFooter from '../components/views/AppFooter';
import withRoot from '../main/modules/withRoot';
import privacy from '../components/views/privacy.md';

function Privacy() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);