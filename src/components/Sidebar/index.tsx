import { HeaderContext } from '@/context/navigation/header'
import React, { useContext } from 'react'
import { SidebarContainer, SidebarContent } from './styled'

export const Sidebar: React.FC = () => {
  const { setVisible, visible } = useContext(HeaderContext)
  const closeSidebar = () => {
    setVisible(false)
  }
  return (
    <SidebarContainer onClick={closeSidebar} visible={visible}>
      <SidebarContent></SidebarContent>
    </SidebarContainer>
  )
}
