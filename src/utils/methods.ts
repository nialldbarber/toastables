import create from 'zustand'

interface State {
  visibility: 'hide' | 'show'
  showToastable: () => void
  hideToastable: () => void
}

export const useToastable = create<State>()((set) => ({
  visibility: 'hide',
  showToastable: () => set(() => ({ visibility: 'show' })),
  hideToastable: () => set(() => ({ visibility: 'hide' })),
}))
