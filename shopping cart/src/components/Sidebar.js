import React from "react";

function Sidebar({ products }) {
  let sizes = products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);

  let newSizes = [...new Set(sizes)];

  return (
    <>
      <aside className="flex-20">
        <div className="flex wrap">
          {newSizes.map((size) => {
            return <span>{size}</span>;
          })}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
