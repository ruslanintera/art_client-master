import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { Pagination } from "react-bootstrap";

const PagesPhoto = observer(() => {
  const { device } = useContext(Context);
  const pageCount = Math.ceil(
    device.getPhotoTotal / device.getPhotoLimit
  );
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-0">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={device.getPhotoPage === page}
          //active={true}
          onClick={() => device.setPhotoPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default PagesPhoto;
