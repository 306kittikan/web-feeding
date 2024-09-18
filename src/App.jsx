import { useState } from "react";

const person = {
  name: 'Hypo feeding game',
  theme: {
    backgroundColor: 'skyblue',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',  
    height: '100vh'  
  }
};

export default function TodoList() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100); 
  const [image, setImage] = useState("https://www.khaosod.co.th/wpapp/uploads/2024/09/Nong-Moo-Deng4548-5.jpg"); 

  const feed = (foodLevel) => {
    const newLevel = level + foodLevel;

    if (newLevel > 100) {
      setImage("kittikan.jpg"); 
    }

    setLevel(newLevel);
    setSize(100 + newLevel); 
  };

  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <img
        className="avatar"
        src={image}
        alt="kittikan.jpg"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          maxWidth: '90vw',  
          maxHeight: '90vh', 
          objectFit: 'cover', 
        }}
      />

      <h2>Feed the Mudang</h2>
      {/* Container for horizontal buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => feed(5)}
          style={{ backgroundColor: 'lightgreen', color: 'black' }}
        >
          แตงโม (+5)
        </button>
        <button 
          onClick={() => feed(10)}
          style={{ backgroundColor: 'yellow', color: 'black' }}
        >
          ฟักทอง (+10)
        </button>
        <button 
          onClick={() => feed(20)}
          style={{ backgroundColor: 'green', color: 'black' }}
        >
          ผักบุ้ง (+20)
        </button>
      </div>

      <p>Current Level: {level}</p>
    </div>
  );
}















