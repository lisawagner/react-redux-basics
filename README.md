# react-redux-basics
A React study project. Created so far:
  1. Simple `<TodoList>` component where the user can add and delete list items from their browser.
  2. HOC experiments - created different methods for using hooks on class based components via hocs

      Since `withRouter` is depricated in React Router 6, alternatives are needed for instances where it isn't feasible to upgrade all your class components to functional components. If you are interested in more info on solutions, check out these links:
      - [react-router-dom v6 withRouter for Class Components](https://stackoverflow.com/questions/70169810/react-router-dom-v6-typescript-withrouter-for-class-components)
      - [Does v6 drop support for class components?](https://github.com/remix-run/react-router/issues/8146)
      - [Request: withRouter for v6](https://github.com/remix-run/react-router/issues/7256)
  
  3.  Created Blog demo by refactoring `<Home>` component to display **Dynamic Data**:

      - Included a third party *RestAPI*, [JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/) (a free online REST service) to load demo data.
      - Utilized *Axios*, an HTTP promise-based request library for sending and retrieving responses.
      - Refactored React v16.4 `<HOME>` functional component to a class based component in order to utilize the lifecycle method `<componentDidMount()>`
      - Added additional class based components where `<componentDidMount()>` is needed.
      - Mixing recent(2022) packages with React v16.4 became counter productive. Upgrading everything would work with significant refactoring. Downgrading created a stable development environment more readily.
      - Added an image for testing purposes.

      *IMPORTANT NOTE*
      While using materialize-css(not MUI, nor the React specific materialize), this error comes up:

      >materialize.min.js:7 [Violation] Added non-passive event listener to a scroll-blocking 'touchmove' event. Consider marking event handler as 'passive' to make the page more responsive.

      This is due to the *Passive Event Listeners* feature added to modern browsers in the summer of 2016. Use of a more current css framework that uses a .js library implementing this 'bleeding edge' feature would solve the issue. View details in this [article](https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive)
      
  4.  State management with Redux
      - Added state management with Redux
      - Added action creators in a separate file to make them reusable