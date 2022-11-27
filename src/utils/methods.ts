import create from 'zustand'

interface State {
  visibility: 'hide' | 'show'
  show: () => void
  hide: () => void
}

export const useToastable = create<State>()((set) => ({
  visibility: 'hide',
  show: () => set(() => ({ visibility: 'show' })),
  hide: () => set(() => ({ visibility: 'hide' })),
}))
