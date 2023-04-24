import { HeaderContext } from '@/context/navigation/header'
import { bottomLinks } from '@/utils/mocks/header'
import React, { useContext } from 'react'
import { MdHelp, MdHome } from 'react-icons/md'
import {
  ContactSupportIcon,
  LocationOnIcon,
  RestaurantIcon,
  SearchIcon
} from '../icons'
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
  return (
    <SidebarContainer onClick={closeSidebar} visible={visible}>
      <SidebarContent>
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
