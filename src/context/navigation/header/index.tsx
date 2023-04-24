import React, { createContext, useState } from 'react'

export type HeaderContextProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

type HeaderContextProviderProps = {
  children?: React.ReactNode
}

export const HeaderContext = createContext<HeaderContextProps>(
  {} as HeaderContextProps
)

export const HeaderContextProvider: React.FC<HeaderContextProviderProps> = ({
  children
}) => {
  const [visible, setVisible] = useState(false)

  return (
    <HeaderContext.Provider value={{ visible, setVisible }}>
      {children}
    </HeaderContext.Provider>
  )
}
