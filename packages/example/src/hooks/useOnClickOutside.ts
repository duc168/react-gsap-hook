import React, { useEffect } from 'react'

const useOnClickOutside = (ref: React.RefObject<HTMLElement>, onClickOutSide: () => void) => {
    
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return
            }
            onClickOutSide()
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
        }
    }, [ref, onClickOutSide])
}

export default useOnClickOutside