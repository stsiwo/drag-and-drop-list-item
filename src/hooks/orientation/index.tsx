import * as React from 'react';
import { UseOrientationChangeOutputType } from './types';
  
export const useOrientation = (): UseOrientationChangeOutputType => {

  const [isOrientationChanged, setOrientationChanged] = React.useState<number>(0)
  
  React.useEffect(() => {   
    function handleOrientationChange() {
      setOrientationChanged((prev: number) => prev + 1)
    } 
      
    window.addEventListener("orientationchange", handleOrientationChange);
      
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []); 
    
  return {
    isOrientationChanged: isOrientationChanged
  }
}   
