import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  loadSingleGifs,
  loadGifs,
} from "../../components/redux/ImagesRedux/getImages.action";
import SingleGifWrapper from "./style";

interface props {
  loading: boolean;
  item: any;
  error: boolean;
  filter: any;
  data: any;
  loadGif: () => void;
  load: (args: number, arg2: any) => void;
  ClearFilter: () => void;
}

const SingleGif: React.FC<props> = ({ loadGif, load, data, item, loading }) => {
  const { index } = useParams();

  console.log(index);
  console.log(item);

  useEffect(() => {
    loadGif();
    load(+index, data);
    // load(id, data);
    // eslint-disable-next-line
  }, [index]);

  return (
    <SingleGifWrapper>
      <div className="container" key={item}>
        <div className="left">
          <img src={item ? item : ""} alt="dogs" />
        </div>
        <div className="right">
          <h2>General Characteristics</h2>
          <p>
            Dog, (Canis lupus familiaris), domestic mammal of the family Canidae
            (order Carnivora). It is a subspecies of the gray wolf (Canis lupus)
            and is related to foxes and jackals. The dog is one of the two most
            ubiquitous and most popular domestic animals in the world (the cat
            is the other). For more than 12,000 years it has lived with humans
            as a hunting companion, protector, object of scorn or adoration, and
            friend. Dogs come in many shapes and sizes. The smallest breeds
            include the toy and miniature varieties, such as the Toy Poodle,
            Papillon, Chihuahua, and Shih Tzu. These dogs usually weigh only 5
            to 10 pounds (2.3 to 4.5 kilograms), or even less. Medium-sized dogs
            include many of the terriers and spaniels, which weigh in the 10 to
            50 pound (4.5 to 23 kilograms) range. Larger still are the
            retrievers, shepherds, and setters, which often weigh 65 to 100
            pounds (30 to 45 kilograms). Finally, the giant breeds, such as the
            Mastiff, Komondor, and Saint Bernard, can approach or exceed 200
            pounds (91 kilograms). Of course, sizes vary within breeds, with
            males usually being larger than females. Mixed-breed dogs include
            all size ranges.
          </p>
          <p>Dog breed: </p>
        </div>
      </div>
    </SingleGifWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  data: state.Giphy.dataArray,
  item: state.Giphy.dataObj,
  error: state.Giphy.error,
  loading: state.Giphy.loading,
});

export default connect(mapStateToProps, {
  load: loadSingleGifs,
  loadGif: loadGifs,
})(SingleGif);
