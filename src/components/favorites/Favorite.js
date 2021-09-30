import useLocalStorage from "../../hooks/useLocalStorage";
import { useRef } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";

//Level 2
//I did not have the time to finish this, and not sure if I was even on the right track.
//Would love some feedback or a tutorial on how to make this work if you have the time.
//This reusable favorite component is inspired by brilliant Vicky V from dev.to
//https://dev.to/vikirobles/creating-favourites-with-local-storage-and-useref-in-react-1c3d

export const Favorite = ({ id }) => {
  const [fav, setFav] = useLocalStorage("Favorites", []);
  const savedFavs = useRef(fav);

  let isFavorited = savedFavs.current.includes(id);

  //Check if the id is already in the array of favorites
  function handleToggleFavorite() {
    //If its not, push it into the current array, and update the array
    if (!isFavorited) {
      let fav = { id: id };
      savedFavs.current.push(id);
      setFav(savedFavs.current);
    } else {
      //If it's already in the array, find the index of the id and remove it by using splice.
      const favIndex = savedFavs.current.indexOf(id);
      savedFavs.current.splice(favIndex, 1);
      setFav(savedFavs.current);
    }
  }
  return (
    <i onClick={handleToggleFavorite}>
      {isFavorited ? <BsHeartFill /> : <BsHeart />}
    </i>
  );
};
