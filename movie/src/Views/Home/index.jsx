import React, { useEffect, memo} from "react";
import Header from "../../Component/Header";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import useStyle from "./style";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../redux/action/movie";
import { NavLink } from "react-router-dom";

function Home() {
  const classes = useStyle();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovie);
  }, []);
  const movieList = useSelector((state) => {
    return state.movieReducer.movieList;
  });
  console.log(movieList);
  return (
    <>
      <Header />
      <Typography className="mt-5 mb-5" variant="h3" component="h4" align="center">
        Danh Sách Phim
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {movieList.map((item, index) => {
            return <Grid key={index} item md={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.hinhAnh}
                    title="Contemplative Reptile"
                  />
                  {/* <CardContent>
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {item.tenPhim}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      {item.moTa}
                    </Typography>
                  </CardContent> */}
                </CardActionArea>
                <CardActions>
                  <NavLink to={`/detail/${item.maPhim}`} component={Button} className="mt-3 mb-3" size="small" variant="contained" color="primary">
                    Detail
                  </NavLink>
                </CardActions>
              </Card>
            </Grid>
          })}
        </Grid>
      </Container>
    </>
  );
}
export default memo(Home)