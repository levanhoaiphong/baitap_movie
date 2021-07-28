import { Container, Grid, Card, CardActionArea,CardMedia, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyle from "./style";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieId } from "../../redux/action/movie";
import Header from "../../Component/Header";

export default function Detail(props) {
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    const movieId = props.match.params.id;
    dispatch(fetchMovieId(movieId));
  }, []);
  const detail = useSelector((state) => {
    return state.movieReducer.movieDetail;
  });
  return (
	<>
	<Header/>
	    <Container maxWidth="lg">
     <Typography className="mt-4 mb-4" variant="h2" component="h3" align="center">Detail</Typography>
      <Grid container >
        <Grid item md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={detail.hinhAnh}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={8}>
		<Typography className="mb-3" style={{fontWeight:600,textTransform:"uppercase"}} variant="h5">{detail.tenPhim}</Typography>
		<Typography className="mb-3"><span style={{fontWeight:700}}>Xem xếp hạng:</span> {detail.danhGia}</Typography>
		<Typography className="mb-3" ><span style={{fontWeight:700}}>Ngày phát hành: </span>{detail.ngayKhoiChieu}</Typography>
		<Typography> <span style={{fontWeight:700}}>Mô tả: </span>{detail.moTa}</Typography>
	</Grid>
      </Grid>
    </Container>
	</>
  );
}
