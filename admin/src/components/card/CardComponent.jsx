import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// const title = 'Sales'
// const Number = 500;
// const percent = -1.4;
export default function CardComponent({title,Number,percent}) {
  return (
    <Card sx={{ width:{ sm: 250, lg:400 }, maxHeight: 200 }} elevation={3}>
      <CardHeader title={`${title}`} sx={{ fontWeight: 800 }} />
      <CardContent>
        <Typography variant="h3" sx={{ display: "inline-block" }}>
          ${Number}
          <Typography sx={{ display: "inline-block", marginLeft: "10px" }}>
            {percent} 
            {percent>0 && <ArrowUpwardIcon sx={{color:"green"}}/>}
            {percent<=0 && <ArrowDownwardIcon sx={{color:"red"}}/>}
          </Typography>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          variant="h7"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          Compared to last month
        </Typography>
      </CardContent>
    </Card>
  );
}
