import React from 'react'

function StoreCardSearchFilter(props){

  const { setCardDetailCss, title, data, list, setList } = props

  return(
    <div>
      <p>{title}</p>
      {data.map((v, i) => {
        return(
          <li key={i} style={{position: 'relative'}}>
            <input
              type="checkbox"
              name={v}
              id={v}
              value={v}
              checked={list.includes(v)}
              onChange={(e) => {
                setCardDetailCss('')
                if (e.target.checked) {
                  setList([...list, e.target.value])
                } else {
                  setList(list.filter(id => id !== e.target.value))
                }
              }}
            />
            <label htmlFor={v}>
              {v}
            </label>
          </li>
        )
      })}
    </div>
  )
}

export default StoreCardSearchFilter