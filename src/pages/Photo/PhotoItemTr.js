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

  useEffect(() => {
    if (obj.params3Array) {
      setItems(obj.params3Array.map((item) => item))
    }
    if (obj.params2Array) {
      setItemsMP4(obj.params2Array.map((item) => item))
    }
  }, [])

  if (short) {
    return (
      <>
        {items.map((item, idx) => {
            return (
            <div key={obj.id + '_' + idx + '_' + Date.now()} className={styles.gridContainer}>
              <img
                onClick={() => react3d.ADD_IMAGE(obj, item, device)}
                className={styles.imgList}
                src={process.env.REACT_APP_API_URL + item}
                alt={item}
                key={item}
              ></img>
            </div>
            )
          })}
        
      </>

    )
  }

  return (
    <tr>
      <td className={"mt-3 comm_num"} onClick={() => history.push(PHOTO_ROUTE + "/" + obj.id)}>
        {obj.id}
      </td>
      <td className="community_name">{obj.name}</td>
      <td>
        {items.map((item) => {
          return (<img className={styles.imgList} src={process.env.REACT_APP_API_URL + item} alt={item} key={item}></img>)
        })}
      </td>
      <td>
        {itemsMP4.map((item, idx) => {
          return (
            <video width="100" height="100" controls="controls" poster="video/duel.jpg" key={item + idx + Date.now()}>
              <source src={process.env.REACT_APP_API_URL + item} type='video/mp4 codecs="avc1.42E01E, mp4a.40.2"'/>
            </video>
          )
        })}
      </td>
    </tr>
  )
})

export default PhotoItem
