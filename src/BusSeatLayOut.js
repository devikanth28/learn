import React from 'react'

const BusSeatLayOut = () => {
   // Generate the seat layout
   function renderSeats() {
    const seats = [];

    for (let row = 1; row <= 6; row++) {
      for (let col = 1; col <= 12; col++) {
        if ((row !== 2 || col === 11) && (row !== 3 || col === 11)) {
          seats.push(
            <button className="bus-seat" key={`${row}-${col}`}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.1" viewBox="0 0 700 700">
                     <g>
                         <path d="m568.4 104.72c-3.3594-17.359-19.039-30.238-38.078-30.238h-198.8c-18.48 0-34.16 12.879-38.078 30.238h-164.08c-17.359 0-31.359 14-31.359 30.801v287.84c0 16.801 14 30.801 31.359 30.801h164.08c3.3594 17.922 19.039 31.922 38.078 31.922h198.24c17.359 0 32.48-11.762 36.961-27.441 19.602-2.2383 34.719-18.48 34.719-38.078l0.007812-278.32c1.1172-19.039-13.441-35.277-33.043-37.52zm-236.88-17.359h198.24c11.199 0 21.281 7.2812 24.078 17.922-15.121 3.3594-26.879 16.238-29.68 31.359h-192.64c-14 0-25.199-11.199-25.199-24.641s11.199-24.641 25.199-24.641zm-38.078 352.24h-164.08c-9.5195 0-17.922-7.8398-17.922-17.359l0.003906-287.28c0-9.5195 7.8398-17.359 17.922-17.359h164.08c2.8008 18.48 19.039 32.48 38.078 32.48h192.64v258.16l-192.64-0.003907c-19.039 0-34.719 13.441-38.078 31.363zm237.44 31.918h-199.36c-14 0-25.199-11.199-25.199-24.641s11.199-24.641 25.199-24.641h192.64c1.1211 16.801 12.879 30.238 28.559 34.719-2.7969 8.4023-11.758 14.562-21.84 14.562zm58.242-52.078c0 13.441-11.199 24.641-25.199 24.641s-25.199-11.199-25.199-24.641l-0.003906-277.2c0-13.441 11.199-24.641 25.199-24.641s25.199 11.199 25.199 24.641z" />
                     </g>
                 </svg>
            </button>
          );
        } else {
          seats.push(
            <span className="bus-seat" key={`${row}-${col}`}>
              s
            </span>
          );
        }
      }
    }

    return seats;
  }

  return <div className="bus-seat-layout">{renderSeats()}</div>;
}

export default BusSeatLayOut