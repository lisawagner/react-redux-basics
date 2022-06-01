# react-redux-basics
A React study project. Created so far:
  1. Simple `<TodoList>` component where the user can add and delete list items from their browser.
  2. HOC experiments - created different methods for using hooks on class based components via hocs

      Since `withRouter` is depricated in React Router 6, alternatives are needed for instances where it isn't feasible to upgrade all your class components to functional components. If you are interested in more info on solutions, check out these links:
      - [react-router-dom v6 withRouter for Class Components](https://stackoverflow.com/questions/70169810/react-router-dom-v6-typescript-withrouter-for-class-components)
      - [Does v6 drop support for class components?](https://github.com/remix-run/react-router/issues/8146)
      - [Request: withRouter for v6](https://github.com/remix-run/react-router/issues/7256)
  
  3.  Refactored the `<Home>` component for displaying **Dynamic Data**:

      - Included a third party *RestAPI*, [JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/) (a free online REST service) to load demo data.
      - Utilized *Axios*, an HTTP promise-based request library for sending and retrieving responses.
      - Refactored React v16.4 `<HOME>` functional component to a class based component in order to utilize the lifecycle method `<componentDidMount()>`
      - Added additional class based components where `<componentDidMount()>` is needed.
      - Using react-router-dom v6 with React v16.4 became counter productive. Upgrading everyting would work with significant refactoring. Downgrading created a stable development environment more readily.
      - Added an image for testing purposes.
      - Added state management with Redux