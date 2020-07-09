import React from "react";
import LazyLoad from "react-lazy-load";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ image,click }: Partial<{ image: string, click:any }>) => {
  return (
    <div className="gif-item" onClick={click}>
      <LazyLoad
        width='100%'
        height='100%'
        debounce={false}
        throttle={250}
        offsetVertical={400}
      >
        <div className="img-container">
          <img src={image} alt="Lazy Load Example" className="img-reaction" />
        </div>
      </LazyLoad>
    </div>
  );
};

export default MyImage;

// const _loaded: Iprops = {};

// const [loaded, setLoaded] = useState<string | any>(_loaded.image);
// const onLoad = () => {
//   _loaded.image = true;
//   setLoaded(true);
// };
