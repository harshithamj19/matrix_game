import React, { useState } from 'react';

const MatrixGame = () => {
  const [clicked, setClicked] = useState(Array(9).fill(false));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (clickOrder.includes(index)) return;

    const newClicked = [...clicked];
    newClicked[index] = true;
    setClicked(newClicked);
    const newOrder = [...clickOrder, index];
    setClickOrder(newOrder);

    if (newOrder.length === 9) {
      changeToOrange(newOrder);
    }
  };

  const changeToOrange = (order) => {
    order.forEach((index, i) => {
      setTimeout(() => {
        setClicked((prevClicked) => {
          const newClicked = [...prevClicked];
          newClicked[index] = 'orange';
          return newClicked;
        });
      }, i * 300);
    });
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 50px)', gap: '5px', marginTop: '20px' }}>
      {clicked.map((box, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: box === true ? 'green' : box === 'orange' ? 'orange' : 'white',
            border: '1px solid gray',
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
  );
};

export default MatrixGame;
