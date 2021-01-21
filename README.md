# Drag and Drop List Item With ReactJS

## Main Dependencies

  * [ReactJS](https://reactjs.org/)
  * [CRA](https://github.com/facebook/create-react-app)
  * [TypeScript](https://www.typescriptlang.org/)
  * [styled components](https://styled-components.com/)

## How To Run 

  1. clone this repository to your local
  2. install its dependencies
  3. start dev server 
  
## Q&A

  ### My tsconfig.json is overwritten every time run 'npm start' and TypeScript complains that 'Cannot use JSX unless the '--jsx' flag is provided'. How do I fixed that?

 This is because you are using old TypeScript (3.x.x),so bump up to (4.x.x).
 
 ref: https://stackoverflow.com/questions/50432556/cannot-use-jsx-unless-the-jsx-flag-is-provided, https://github.com/facebook/create-react-app/issues/10144

  
  ### The ending padding is ignored when flex & horizontal scroll. How do I add the ending padding?

  It turned out that it is NOT a bug. the browsers ignore the ending padding. the solution is to add 'after' pseudo attribute of container element.
  ```
    .container::after {
      content: '';
      padding-right: 0.02px; /* smallest size that is cross browser */
    }
  ```

   ref: [how to fix the missing ending padding](https://webplatform.news/issues/2019-08-07)
  
  ### Swiping is not smooth on mobile. How do I fix that?
  
  You need to install the polyfill to make swiping smooth. install the following dependencies.
  
  * [smoothscroll-polyfill](https://www.npmjs.com/package/smoothscroll-polyfill)
  * [@types/smoothscroll-polyfill](https://www.npmjs.com/package/@types/smoothscroll-polyfill) (if you use TS)
  
  ### How do I check an element has scrollbar or not?
   
  You need to compare 'scrollWidth' with 'clientWidth' on the target element. If 'scrollWidth' value is larger than 'clientWidth', it has a scrollbar.
  
  * [Check whether HTML element has scrollbars](https://stackoverflow.com/questions/4880381/check-whether-html-element-has-scrollbars)
  
  ### How to hide scrollbar?
  
  You can achieve this using CSS.
  ```
    /* hide scroll (horizontal) bar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
   
    &::-webkit-scrollbar { /* WebKit */
      width: 0;
      height: 0;
    }
  ```
  Still appear?
  * [additional ref](https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll)
