import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { PHOTO_ROUTE } from "../../utils/consts"

import { observer } from "mobx-react-lite"
import { Context } from "../../index"
import { react3d } from "../../3d/react3d"
import styles from "./PhotoPage.module.css"

const PhotoItem = observer(({ obj, short }) => {
  const history = useHistory()
  const { device } = useContext(Context)
  const { store } = useContext(Context)
  const [items, setItems] = useState([])
  const [itemsMP4, setItemsMP4] = useState([])

  console.log(obj)

  // useEffect(() => {
  //   if (obj.params3Array) {
  //     setItems(obj.params3Array.map((item) => item))
  //   }
  //   if (obj.params2Array) {
  //     setItemsMP4(obj.params2Array.map((item) => item))
  //   }
  // }, [])

  if (short) {
    return (
      <div key={obj?.token_id} className={styles.gridContainer}>
        <img
          onClick={() => react3d.ADD_IMAGE(obj, obj?.image, device)}
          className={styles.imgList}
          src={obj?.image}
          alt={obj?.name}
          key={obj?.token_id}
        ></img>
      </div>
    )
  }

  return (
    <tr>
      <td className={"mt-3 comm_num"} onClick={() => history.push(PHOTO_ROUTE + "/" + obj.id)}>
        {obj.id}
      </td>
      <td className="community_name">{obj.name}</td>
      <td>
        <img className={styles.imgList} src={obj?.image} alt={obj?.name} key={obj?.token_id}></img>
      </td>
    </tr>
  )
})

export default PhotoItem
