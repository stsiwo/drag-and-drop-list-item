import * as React from 'react';
import { useResponsive } from './hooks/responsive';
import { sampleList, ListItemType } from './state';
import LeftArrowI from './icons/LeftArrowI';
import RightArrowI from './icons/RightArrowI';
import styled, { createGlobalStyle, css } from 'styled-components';

/**
 * implementation steps
 *
 *
 **/

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    text-size-adjust: 100%; /* Prevent font scaling in landscape while allowing user zoom */
  }
`

const SliderWrapper = styled.div`
`

const SliderOuterBox = styled.div`
  // for absolute in slider-btn
  position: relative;

  padding: 5px 24px;
  max-width: 75vw;
`
const SliderInnerBox = styled.div`

  display: flex;
  flex-wrap: nowrap;
  overflow: auto;

  /* hide scroll (horizontal) bar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */

  &::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
`

const ListItem = styled.a`
  display: block;
  flex: 0 0 290px; 
  margin: 5px;
  border-radius: 10px;
  box-shadow: 5px 5px 16px grey;
  text-align: center;
  & img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`

//
// props:
//  position: 'left' 'right'
declare type  SliderBtnBoxPropsType = {
  position: string;
}
const SliderBtnBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: transparent;
  transition: all 1s;
  cursor: pointer;
  ${(props: SliderBtnBoxPropsType) => props.position == 'left' ? "left: 0" : "right: 0"};

  &:hover {
    background-color: rgba(0, 217, 255, 0.5);
    transition: all 1s;
  }
`

// use 'css' to reuse this style for multiple components
const sliderBtnIconStyle = css`
  position: relative;
  top: 50%;
  bottom: 50%;
  transform: translateY(-50%);
  color: $myComplementaryColor;
`

// use 'styled(Component)' to wrap existing component with styled-component styles
const SliderLeftBtnIcon = styled(LeftArrowI)`
  ${sliderBtnIconStyle}
`
const SliderRightBtnIcon = styled(RightArrowI)`
  ${sliderBtnIconStyle}
`

const App: React.FunctionComponent<{}> = (props) => {

  /**
   * scroll feature
   **/
  const innerBoxRef = React.useRef<HTMLDivElement>(null);
  const outerBoxRef = React.useRef<HTMLDivElement>(null);

  /**
   * event handler when click left arrow
   **/
  const handleLeftArrowIconClickEvent: React.EventHandler<React.MouseEvent<HTMLDivElement>> = React.useCallback((e) => {

    if (innerBoxRef.current) {
      innerBoxRef.current.scrollBy({
        behavior: "smooth",
        left: -300,
      })
    }

  }, [innerBoxRef])

  /**
   * event handler when click right arrow
   **/
  const handleRightArrowIconClickEvent: React.EventHandler<React.MouseEvent<HTMLDivElement>> = React.useCallback((e) => {

    if (innerBoxRef.current) {
      innerBoxRef.current.scrollBy({
        behavior: "smooth",
        left: 300,
      })
    }
  }, [innerBoxRef])

  /**
   * side effect to close unnecessary arrows
   *
   *  - if scrollbar, need to show arrows, otherwise, no arrows
   *  - ref: https://stackoverflow.com/questions/4880381/check-whether-html-element-has-scrollbars
   **/
  const responsive = useResponsive()
  const [isNeedArrows, setNeedArrows] = React.useState<boolean>(false)
  const [curScrollPos, setScrollPos] = React.useState<number>(0)
  React.useEffect(() => {
    if (outerBoxRef.current && innerBoxRef.current) {
      if (innerBoxRef.current.scrollWidth > innerBoxRef.current.clientWidth) {
        // need to have scroll
        setNeedArrows(true)
      } else {
        // don't need it
        setNeedArrows(false)
      }
    }
  }, [outerBoxRef, innerBoxRef, isNeedArrows, responsive.currentScreenWidth, setNeedArrows])

  /**
   * remove arrows if scroll position is on the edge
   *
   *  - use 'scroll' event handler to detect cur scroll position and remove unnecessary arrow
   *  - initial scroll position is 0 so default values for its state is 'false' and 'true'
   **/
  const [isNeedLeftArrow, setNeedLeftArrow] = React.useState<boolean>(false)
  const [isNeedRightArrow, setNeedRightArrow] = React.useState<boolean>(true)
  const handleScrollChangeEvent: React.EventHandler<React.UIEvent<HTMLDivElement>> = (e) => {
    const curScrollPos = e.currentTarget.scrollLeft
    const maxScrollPos = e.currentTarget.scrollWidth - e.currentTarget.clientWidth
    if (curScrollPos == 0) {
      setNeedLeftArrow(false);
    } else if (curScrollPos == maxScrollPos) {
      setNeedRightArrow(false);
    } else {
      setNeedLeftArrow(true);
      setNeedRightArrow(true);
    }
  }

  /**
   * render dummy data 
   *
   *  - replace it with real one if necessary
   *
   **/
  const dateOption = { year: 'numeric', month: 'long', day: 'numeric' };
  const renderListItemComponents: () => React.ReactNode = () => {
    return sampleList.map((listItem: ListItemType, index: number) => (
      <ListItem
        key={index}
      >
        <img src={listItem.imageSrc} alt={`list item ${index}`} />
        <h3>{listItem.title}</h3>
        <p>{listItem.desc}</p>
        <small>{listItem.date.toLocaleString("en-US", dateOption)}</small>
      </ListItem>
    ))
  }

  return (
    <SliderWrapper>
      <SliderOuterBox ref={outerBoxRef}>
        <SliderInnerBox ref={innerBoxRef} onScroll={handleScrollChangeEvent}>
          {renderListItemComponents()}
        </SliderInnerBox>
        {(isNeedArrows &&
          <React.Fragment>
            {(isNeedLeftArrow &&
              <SliderBtnBox position={"left"} onClick={handleLeftArrowIconClickEvent} >
                <SliderLeftBtnIcon />
              </SliderBtnBox>
            )}
            {(isNeedRightArrow &&
              <SliderBtnBox position={"right"} onClick={handleRightArrowIconClickEvent} >
                <SliderRightBtnIcon />
              </SliderBtnBox>
            )}
          </React.Fragment>
        )}
      </SliderOuterBox>
    </SliderWrapper>
  )
}

export default App;
