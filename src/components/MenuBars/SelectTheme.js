import React, { useState } from 'react'
import { SelectThemeStyles } from './Styles/SelectThemeStyles'
import {MdLightMode} from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'
import { Button } from '../Buttons/Button'
import { useSelector } from 'react-redux'
import { themeAction } from '../Features/Theme'
import { useDispatch } from 'react-redux'

const SelectTheme = ({hidetheme}) => {
  const themeMode = useSelector((state)=>state.theme.value)
  const [active,setActive] = useState(themeMode)
  const dispatch = useDispatch()
  const toggle = (mode)=>{
    setActive(mode)
    dispatch(themeAction(mode))
  }
  return (
    <SelectThemeStyles>
      <label htmlFor="theme">Choose Theme</label>
      <div className="theme">
        <div className={active==='light'? 'active':'mode'} onClick={()=>toggle('light')}>
          <MdLightMode fontSize={24} color={'gold'}/>
          <span>Light</span>
        </div>
        <div className={active==='dark'? 'active':'mode'}  onClick={()=>toggle('dark')}>
          <MdDarkMode fontSize={24} color={'black'}/>
          <span>Dark</span> 
        </div>
      </div>
      <Button onClick={()=>hidetheme(true)}>Hide</Button>
    </SelectThemeStyles>
  )
}

export default SelectTheme