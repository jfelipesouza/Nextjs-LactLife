import { HeaderContext } from '@/context/navigation/header'
import { bottomLinks } from '@/utils/mocks/header'
import React, { useContext, useEffect, useState } from 'react'
import { MdHelp, MdHome } from 'react-icons/md'
import { ContactSupportIcon, LocationOnIcon, RestaurantIcon } from '../icons'
import {
  LogoContainer,
  SidebarButtonsContainer,
  SidebarButtonsContent,
  SidebarButtonsLinks,
  SidebarContainer,
  SidebarContent
} from './styled'

export const Sidebar: React.FC = () => {
  const { setVisible, visible } = useContext(HeaderContext)
  const [showAnimation, setShowAnimation] = useState<boolean>(false)
  const closeSidebar = () => {
    setVisible(false)
  }

  const icons = (id: string) => {
    switch (id) {
      case 'home':
        return <MdHome className="icon" />
      case 'recipes':
        return <RestaurantIcon className="icon" />
      case 'question':
        return <ContactSupportIcon className={'icon'} />
      case 'intolerance':
        return <MdHelp className={'icon'} />
      case 'restaurant':
        return <LocationOnIcon className={'icon'} />

      default:
        break
    }
  }

  useEffect(() => {
    setShowAnimation(visible)
  }, [visible])
  return (
    <SidebarContainer onClick={closeSidebar} visible={visible}>
      <SidebarContent showAnimation={showAnimation}>
        <LogoContainer>
          <img alt={''} src={'/assets/images/logo.svg'} />
        </LogoContainer>
        <SidebarButtonsContainer>
          {bottomLinks.map(({ ref, title, id }) => (
            <SidebarButtonsContent key={id}>
              {icons(id)}
              <SidebarButtonsLinks key={id} href={ref}>
                {title}
              </SidebarButtonsLinks>
            </SidebarButtonsContent>
          ))}
        </SidebarButtonsContainer>
      </SidebarContent>
    </SidebarContainer>
  )
}
