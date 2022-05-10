import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SliderArrow from '../../../common/components/sliderArrow';
import MatchListCard from './listCard';
import './matchList.css';

function MatchList(props) {

  let matches = props.matches.map((match) => {
      return <Link to={'/matches/' + match.id} key={match.id}>
        <Card id={match.id} className="border-light">
          <MatchListCard match={match} category={props.category}/>
        </Card>
      </Link>;
    },
  );

  return <Slider dots speed={600} slidesPerRow={2} nextArrow={<SliderArrow/>} prevArrow={<SliderArrow/>}>
    {matches}
  </Slider>;
}

export default MatchList;
