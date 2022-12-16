import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import { createError } from "../utils/error.js";

const { BASE_URL, KEY_FLICKR, SECRET_userId_FLICKR, FORMAT_DEFAULT, NOJSONCB_DEFAULT } = process.env;
const url = `${BASE_URL}?method=flickr.interestingness.getList&api_key=${KEY_FLICKR}&format=${FORMAT_DEFAULT}&nojsoncallback=${NOJSONCB_DEFAULT}&extras=date_taken,url_h`;

export const getInterestingness = async (req, res, next) => {
  try {
    const responde = await axios.get(url);
    const hotels = responde.data;
    if (hotels.stat === "fail") return next(createError(404, hotels.message));

    res.status(200).json({ message: "Semua data berhasil di panggil", data: hotels });
  } catch (error) {
    next(error);
  }
};
