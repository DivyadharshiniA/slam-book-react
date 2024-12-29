import React, { useState } from "react";
import "./App.css";

const SlamBook = () => {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    address: "",
    phone: "",
    memories: "",
    gender: "",
    actors: [],
    school: "",
  });

  const [entries, setEntries] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        actors: checked
          ? [...prev.actors, value]
          : prev.actors.filter((actor) => actor !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries((prev) => [...prev, formData]);
    setFormData({
      name: "",
      nickname: "",
      address: "",
      phone: "",
      memories: "",
      gender: "",
      actors: [],
      school: "",
    });
  };

  return (
    <div className="slam-book">
      <div className="container">
        <h1 className="heading">Slam Book</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </label>
          <label>
            Nickname:
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              placeholder="Enter your nickname"
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Enter your address"
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
          </label>
          <label>
            Memories:
            <textarea
              name="memories"
              value={formData.memories}
              placeholder="Share your memories"
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Gender:
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </label>
          <label>
            Favorite Actors:
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="actors"
                  value="Actor1"
                  checked={formData.actors.includes("Actor1")}
                  onChange={handleChange}
                />
                Actor 1
              </label>
              <label>
                <input
                  type="checkbox"
                  name="actors"
                  value="Actor2"
                  checked={formData.actors.includes("Actor2")}
                  onChange={handleChange}
                />
                Actor 2
              </label>
              <label>
                <input
                  type="checkbox"
                  name="actors"
                  value="Actor3"
                  checked={formData.actors.includes("Actor3")}
                  onChange={handleChange}
                />
                Actor 3
              </label>
            </div>
          </label>
          <label>
            School:
            <select
              name="school"
              value={formData.school}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select your school
              </option>
              <option value="school1">School 1</option>
              <option value="school2">School 2</option>
              <option value="school3">School 3</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="entries">
        <h2>Entries</h2>
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <p><strong>Name:</strong> {entry.name}</p>
            <p><strong>Nickname:</strong> {entry.nickname}</p>
            <p><strong>Address:</strong> {entry.address}</p>
            <p><strong>Phone:</strong> {entry.phone}</p>
            <p><strong>Memories:</strong> {entry.memories}</p>
            <p><strong>Gender:</strong> {entry.gender}</p>
            <p><strong>Favorite Actors:</strong> {entry.actors.join(", ")}</p>
            <p><strong>School:</strong> {entry.school}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlamBook;
