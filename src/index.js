import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);

//CHALLENGE

//1)-Implement the add note functionality
//-Create a constant that keeps track of the title and content(//for updation of these notes like adding title and note we will add a function called onchange)
//-Pass the new note back to the App
//-Add new note to an array
//-Take array and render separate Note components for each item

//2)-Implement the delete note functionality
//-Callback from the note component to trigger a delete function.
//-Use the filter function to filter out the item that needs deletion
//-Pass a id over to the Note component,pass it back to the App when deleting

