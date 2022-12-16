import { Grid } from "@mui/material/";
import { useEffect, useState } from "react";
const FLICKR_API_KEY = "9538d767ef3699c97ece0748afa5a9ac";
const FLICKR_USER_ID = "6a683dc5fd5a13af";

const AppBarNavigasi = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=9538d767ef3699c97ece0748afa5a9ac&per_page=9&format=json&nojsoncallback=1&extras=date_taken,url_h`);
      const data = await response.json();
      setPhotos(data.photos.photo);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Grid container spacing={3} sx={{ backgroundColor: "red" }}>
        {photos.map((photo) => (
          <Grid item xs={4} key={photo.id}>
            <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AppBarNavigasi;
