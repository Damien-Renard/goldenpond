import React from 'react';
import Duck from '../../../public/assets/img/duck.png';
import { PondGrid } from '../utils/utils';

/* ---- ASSETS ---- */
import Cattail from '../../../public/assets/img/cattails.jpg';

const Pond = ({ size, ducks }) => {
  const pondGrid = new PondGrid(size);
  const grid = pondGrid.grid;
  return (
    <div className="flex-column-center-end">
      <div className="table-container flex-column-center-center">
        {
          grid.map((row, i) => (
            <div key={`row-${i}`} className="pond-row flex-row-center-center">
              {
                row.map(cell => (
                  <div key={cell.coords} className="pond-cell flex-row-center-center">
                    {
                      ducks.map(duck => (
                        cell.x === duck.x && cell.y === duck.y &&
                        <img key={`duck-${duck.x}-${duck.y}-${duck.heading}`} src={Duck} alt="duck" className={duck.className} />
                        ))
                    }
                    <div className="pond-cell-id" />
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
      <img src={Cattail} className="cattail" alt="cattail" />
    </div>
  );
};

export default Pond;
