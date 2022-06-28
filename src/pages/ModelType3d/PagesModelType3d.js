import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { Pagination } from "react-bootstrap";

const PagesModelType3d = observer(() => {
  const { device } = useContext(Context);
  const pageCount = Math.ceil(
    device.getModelType3dTotal / device.getModelType3dLimit
  );
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-0 pagination">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={device.getModelType3dPage === page}
          onClick={() => device.setModelType3dPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default PagesModelType3d;
