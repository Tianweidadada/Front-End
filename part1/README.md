# Overview

## Key Points
* Pass values to component
  > Each key-value pair will be saved into a props object when passed values to a component
  > Just as the example shown bellow, content and arg are saved into the parameter props as an object properties
    ```javascript
    const Component = (props) => {
        let content = props.content; // 
        let arg = props.arg;

        <p>{content[0]} : {arg.number}</p>
        // do something       
    }

    const App = () => {
        const dataArr = ['A', 'B', 'C];
        const number = 10;
        <Component content={content} arg={number} />
    }
    ```

* return clauses
  * This is not work
    ```javascript
      const Course = ({course}) => {
        <div>
          <Header course_name={course.name} />
          <Content parts={course.parts} />
        </div>
      };
    ```
  * right way
    ```javascript
      const Course = ({course}) => 
          <div>
            <Header course_name={course.name} />
            <Content parts={course.parts} />
          </div>
      
      // This is equavilent to bellow
    const Course = ({course}) => {
        return (
          <div>
            <Header course_name={course.name} />
            <Content parts={course.parts} />
          </div>
        )
      };
    ```