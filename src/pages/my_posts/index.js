import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Container, Grid } from "@mui/material";
import { Layout } from "../../components/layout";
import Post from "../../views/MyPost/Post";
import MyMeeting from "../../views/MyPost/MyPost";
const Page = () => (
  <>
    <Head>
      <title>ShopJOB | My Posts</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {[1].map((item) => {
            return <Post />;
          })}
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
