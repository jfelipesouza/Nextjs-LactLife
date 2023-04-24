import Link from 'next/link'
import styled from 'styled-components'

export const SidebarContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: flex-end;
`
export const SidebarContent = styled.div`
  width: 320px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secundary};
  box-shadow: 2px 10px 15px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 0 0;
`

export const LogoContainer = styled.div`
  position: relative;
  width: 300px;
  height: 100px;
  margin-bottom: 2rem;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`

export const SidebarButtonsContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`
export const SidebarButtonsContent = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const SidebarButtonsLinks = styled(Link)`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`
