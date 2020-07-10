import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const pinObjects = response.data;
      const pins = [];
      if (pinObjects) {
        Object.keys(pinObjects).forEach((pinId) => {
          pinObjects[pinId].id = pinId;
          pins.push(pinObjects[pinId]);
        });
      }

      resolve(pins);
    })
    .catch((err) => reject(err));
});

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const boardPinsObj = response.data;
      const boardPins = [];
      Object.keys(boardPinsObj).forEach((boardPinsId) => {
        boardPinsObj[boardPinsId].id = boardPinsId;
        boardPins.push(boardPinsObj[boardPinsId]);
      });

      resolve(boardPins);
    })
    .catch((err) => reject(err));
});

const getPinsById = (pinId) => axios.get(`${baseUrl}/pins/${pinId}.json`);

const deletePins = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

const addPin = (newPins) => axios.post(`${baseUrl}/pins.json`, newPins);

// const updatePin = (updatedPin) => axios.put(`${baseUrl}`);

export default {
  getPins,
  deletePins,
  getPinsByBoardId,
  addPin,
  getPinsById,
  // updatePin,
};
