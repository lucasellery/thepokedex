import { configure } from 'mobx';
import * as React from 'react';
import PkmStore from './pkmStore';

const PkmContext = React.createContext();

configure({
  enforceActions: false,
})

function PkmProvider({ children }) {
  const pkmStore = React.useRef(new PkmStore()).current
  const value = { pkmStore };

  return (
    <PkmContext.Provider value={value}>
      {children}
    </PkmContext.Provider>
  )
}

function usePkmStore() {
  const context = React.useContext(PkmContext);
  if (context === undefined) {
    throw new Error('usePkmStore must be use within a PkmProvider');
  }

  return context;
}

export {
  PkmProvider,
  usePkmStore
}
