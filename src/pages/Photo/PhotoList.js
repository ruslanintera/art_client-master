import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../../index"
import PhotoItemTr from "./PhotoItemTr"

const PhotoList = observer(({ short, data }) => {
  const { device } = useContext(Context)

  console.log(`user artworks: ${data}`)

  if (short) {
    return (
      <>
            {data && data.map((item) => {
              return <PhotoItemTr key={item?.token_id} obj={item} short={true} />
            })}

      </>
    )
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>pv</th>
          </tr>
        </thead>
        <tbody>
          {data ? data.map((item) => {

            return <PhotoItemTr key={1} obj={item} />
          }) : ""}
        </tbody>
      </table>
    </>
  )
})

export default PhotoList
