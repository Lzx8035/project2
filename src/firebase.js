// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { collection } from "firebase/firestore";
// import { addDoc, getDocs } from "firebase/firestore";
// import { cityDb } from "./temp/m-city-export";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

const firebaseConfig = {
  apiKey: "AIzaSyCh5la64Ka3QMR3dQL860uzFhp6vg80gv8",
  authDomain: "m-city-c6612.firebaseapp.com",
  projectId: "m-city-c6612",
  storageBucket: "m-city-c6612.appspot.com",
  messagingSenderId: "522757894806",
  appId: "1:522757894806:web:1ce3e29683d3812c5b48b7",
  measurementId: "G-M1CXJFKC0Y",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase);
const matchesCollection = collection(db, "matches");
const playersCollection = collection(db, "players");
const positionsCollection = collection(db, "positions");
const promotionsCollection = collection(db, "promotions");
const teamsCollection = collection(db, "teams");

/*
////////////////////////////////////////////////////////////////////////////////////
// 1) ADD MATCHES TO DATABASE //////////////////////////////////////////////////////
async function addMatches(matches) {
  for (const item of matches) {
    try {
      await addDoc(matchesCollection, item);
    } catch (e) {
      console.error("Error adding: ", e);
    }
  }
}
addMatches(cityDb.matches);

// 2) ADD PLAYERS TO DATABASE //////////////////////////////////////////////////////
async function addPlayers(matches) {
  for (const item of matches) {
    try {
      await addDoc(playersCollection, item);
    } catch (e) {
      console.error("Error adding: ", e);
    }
  }
}
addPlayers(cityDb.players);

// 3) ADD Positions TO DATABASE ////////////////////////////////////////////////////
async function addPositions(matches) {
  for (const item of matches) {
    try {
      await addDoc(positionsCollection, item);
    } catch (e) {
      console.error("Error adding: ", e);
    }
  }
}
addPositions(cityDb.positions);

// 4) ADD Promotions TO DATABASE ////////////////////////////////////////////////////
async function addPromotions(matches) {
  for (const item of matches) {
    try {
      await addDoc(promotionsCollection, item);
    } catch (e) {
      console.error("Error adding: ", e);
    }
  }
}
addPromotions(cityDb.promotions);

// 5) ADD Teams TO DATABASE /////////////////////////////////////////////////////////
async function addTeams(matches) {
  for (const item of matches) {
    try {
      await addDoc(teamsCollection, item);
    } catch (e) {
      console.error("Error adding: ", e);
    }
  }
}
addTeams(cityDb.teams);
////////////////////////////////////////////////////////////////////////////////////
*/

export default firebase;
export {
  matchesCollection,
  playersCollection,
  positionsCollection,
  promotionsCollection,
  teamsCollection,
};
