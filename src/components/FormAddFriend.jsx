import Button from "../common/Button";
import { useState } from "react";
const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default behavior of the form

    //validation: if the name or image is empty, return
    if (!name || !image) return;

    //create new id:
    const id = crypto.randomUUID();

    //create new friend object:
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    //console.log(newFriend);

    onAddFriend(newFriend);

    //Set the input values to the default state:
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>🌄 Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
