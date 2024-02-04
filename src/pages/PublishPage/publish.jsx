import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ userToken }) => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [preview, setPreview] = useState(null);

  const handleSumbit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", state);
      formData.append("city", location);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log("result upload =>", response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return userToken ? (
    <div className="signup-container">
      <input
        type="file"
        onChange={(event) => {
          //   console.log(event);
          const objectfUrl = URL.createObjectURL(event.target.files[0]);
          setPreview(objectfUrl);
          setPicture(event.target.files[0]);
        }}
      />
      {preview && <img src={preview} alt="preview-before-upload" />}
      <input
        value={title}
        type="text"
        placeholder="Titre"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <textarea
        value={description}
        placeholder="Déscription"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></textarea>
      <input
        value={brand}
        type="text"
        placeholder="Marque"
        onChange={(event) => {
          setBrand(event.target.value);
        }}
      />
      <input
        value={size}
        type="text"
        placeholder="Taille"
        onChange={(event) => {
          setSize(event.target.value);
        }}
      />
      <input
        value={color}
        type="text"
        placeholder="Couleur"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <input
        value={state}
        type="text"
        placeholder="Etat"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <input
        value={location}
        type="text"
        placeholder="Lieu"
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      />
      <input
        value={price}
        type="number"
        placeholder="Prix"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <button onClick={handleSumbit}>Ajouter</button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
