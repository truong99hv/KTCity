import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

const getRandomPhoto = async (page) => {
  // return (
  //   axios
  //     // .get("https://picsum.photos/v2/list")
  //     // .get("https://picsum.photos/v2/list?limit=8")
  //     .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
  //     .then((response) => {
  //       //   console.log(response);
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // );
  try {
    const response = await axios
      // .get("https://picsum.photos/v2/list")
      // .get("https://picsum.photos/v2/list?limit=8")
      .get(`https://picsum.photos/v2/list?page=${page}&limit=8`);

    //   console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100
const Photos = () => {
  //   useEffect(callback, [dependencies]);

  const [randomPhoto, setRandomPhoto] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  // console.log("outsite");
  const handleLoadMorePhoto = useRef({});
  handleLoadMorePhoto.current = async () => {
    // getRandomPhoto(nextPage).then((images) => {
    //   console.log(images);
    //   const newPhotos = [...randomPhoto, ...images];
    //   console.log("newPhoto: ", newPhotos);
    //   setRandomPhoto(newPhotos);
    //   setNextPage(nextPage + 1);
    // });

    const images = await getRandomPhoto(nextPage);
    const newPhotos = [...randomPhoto, ...images];
    console.log("newPhoto: ", newPhotos);
    setRandomPhoto(newPhotos);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    //    site-effect
    // document.title = "Welcome to useEffect";
    // console.log("insite");
    handleLoadMorePhoto.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5 ">
        {randomPhoto.length > 0 &&
          randomPhoto.map((item, index) => (
            <div
              key={`${item.download_url}${index}`}
              className="p-3 bg-white shadow-md rounded-lg h-[200px] "
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg  "
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMorePhoto.current}
          className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
