import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Rating from 'react-rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const HomePageReview = ({ review }) => {
  console.log('review', review);

  const { reviewers_img, reviewers_name, description, rating } = review;

  return (
    <Grid item xs={6} md={3} sx={{ padding: '10px 0px 10px 0px !important' }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar alt={reviewers_name.slice(0)} src={reviewers_img} />
      </Box>

      <Box sx={{ textAlign: 'center', my: 3 }}>
        <Rating
          style={{ color: 'goldenrod' }}
          readonly
          initialRating={rating}
          emptySymbol={<FontAwesomeIcon icon={emptyStart}></FontAwesomeIcon>}
          fullSymbol={<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
        ></Rating>
        <Typography variant="h5" style={{ marginTop: '10px' }}>
          {reviewers_name}
        </Typography >
        <Typography variant="p">
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default HomePageReview;

/* <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar alt={reviewers_name.slice(0)} src={reviewers_img} />
      </Box>

      <Box sx={{ textAlign: 'center', my: 3 }}>
        <Rating
          style={{ color: 'goldenrod' }}
          readonly
          initialRating={rating}
          emptySymbol={<FontAwesomeIcon icon={emptyStart}></FontAwesomeIcon>}
          fullSymbol={<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
        ></Rating>
        <Typography variant="h5">
          {reviewers_name}
        </Typography >
        <Typography variant="p">
          {description}
        </Typography>
      </Box> */



{/* <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar alt={reviewers_name.slice(0)} src={reviewers_img} />
          </Box>
          <CardContent sx={{ textAlign: 'center', my: 3 }}>
            <Rating
              style={{ color: 'goldenrod' }}
              readonly
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={emptyStart}></FontAwesomeIcon>}
              fullSymbol={<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
            ></Rating>
            <Typography variant="h5">
              {reviewers_name}
            </Typography >
            <Typography variant="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

     */}