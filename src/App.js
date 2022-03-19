import logo from './logo.svg';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Layout from "./Layout";
import Main from "./views/Main";

function App() {
  const matches = useMediaQuery('(prefers-reduced-motion: no-preference)');

  return (
    <Layout>
      <Main/>
    </Layout>
  );
}

export default App;
