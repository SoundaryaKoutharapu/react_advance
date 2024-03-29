import avatar from '../assets/default_avatar.svg'
import React from "react";
export function Person({name, nickName, images}) {

  // const img = images && images[0] && images[0].small && images[0].small.url
  const img = images?.[0]?.small?.url || avatar 

  return (
  <div>
    <img src={img} alt={name} style={{width: '50px'}} />
    <h4>{name}</h4>
    <h4>NickName: {nickName || 'Original'}</h4>
  </div>
  )
}
  