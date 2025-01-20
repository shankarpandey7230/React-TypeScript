# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


This project provides a comprehensive guide to integrating TypeScript with React. It covers initial setup using vite and TypeScript, demonstrates various React and TypeScript concepts through clear examples, and delves into more advanced topics.Key aspects include

- Component Structure and TypeScript Integration: Explains how to correctly type React Components, manage return types, and handle potential TypeScript errors.
- Prop Handling and Typing : Offers insights on inline typing, using interfaces, and managing children props with TypeScript.
- State Management:Teaches TypeScript type inference in state management, showcasing various useState example.
- Event Handling: Guides on typing events in React, such as form submissions and input changes.
- Complex Component Structures: Discusses complex use cases like conditional prop rendering based on type values.
- Context API with TypeScript:Provides a deep dive into using React's Context API in a TypeScript environment.
- Reducers and Global State Management: Includes examples of setting up reducers with TypeScript and using them in React Components. 
- Data Fetching: Demonstrates fetching data with TypeScript validation using tools like Zod, Axios and React Query.
- Redux Toolkit (RTK) Integration: Shows how to integrate Redux Toolkit in a TypeScript-React Setup, including creating slices and using hooks.
- Practical Application with Task Management: Concludes with a practical task management application, emphasizing localStorage use and handling task state.

Each section is presented with relevant code snippets and explanations, making it an ideal resource for developers looking to deepen their understanding of TypeScript in React applications.


## Setup

```sh
npm create vite@latest ReactTypeScript -- --template react-ts
```

## Remove Boilerplate 
# React & TypeScript

- .tsx -file extension

## 01 - Component Return

- TypeScript infers JSX.Element, helps if no return

```tsx
// TypeScript infers JSX.Element
// this will trigger error
function Component() {}
export default Component;
```

- set function return type

```tsx
function Component(): JSX.Element | null | string {
  return null;
  return 'hello';
  return <h2>hello from typescript</h2>;
}
export default Component;
```

## 02- Props

```tsx
function App() {
  return (
    <main>
      <Component name='peter' id={123} />
    </main>
  );
}

export default App;
```

- inline types

```tsx
function Component({ name, id }: { name: string; id: number }) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>ID : {id}</h1>
    </div>
  );
}
export default Component;
```

- type or interface
- props object or {}

```tsx
type ComponentProps = {
  name: string;
  id: number;
};

function Component({ name, id }: ComponentProps) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>ID : {id}</h1>
    </div>
  );
}
export default Component;
```

- children prop

```tsx
function App() {
  return (
    <main>
      <Component name='peter' id={123}>
        <h2>hello world</h2>
      </Component>
    </main>
  );
}

export default App;
```

- React.ReactNode
- PropsWithChildren

```tsx
import { type PropsWithChildren } from 'react';

type ComponentProps = {
  name: string;
  id: number;
  children: React.ReactNode;
};

// type ComponentProps = PropsWithChildren<{
//   name: string;
//   id: number;
// }>;

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>Name : {name}</h2>
      <h2>ID : {id}</h2>
      {children}
    </div>
  );
}
export default Component;
```

## 03 - State

- typeScript infers primitive types
- by default [] is type never

```tsx
import { useState } from 'react';

function Component() {
  const [text, setText] = useState('shakeAndBake');
  const [number, setNumber] = useState(1);
  const [list, setList] = useState<string[]>([]);

  return (
    <div>
      <h2 className='mb-1'>hello from typescript</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          // setText(1);
          // setNumber('hello');
          // setList([1, 3]);
          setList(['hello', 'world']);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
 
```


## 04 -Events
- inline functions infers object type

When you provide the exact HTML element type in the angle brackets(<>), like HTMLInputElement in your case, you're telling TypeSCript exactly what kind of element the event is coming from. This helps TypeScript provide accurate suggestions and error checking based on the properties and methods that are specific to that kind of element. For example, an HTMLInputElement has properties like value and checked that other elements don't have. By specifying the exact element type, TypeScript can help you avoid mistakes and write safe code.

```tsx 
import {useState} from 'react';
function Component(){
  const [text, setText]=useState('');
  const [email, setEmail] = useState('');

const handleChange= (e:React.ChangeEvent<HTMLInputElememt>)=>{
  console.log(e.target.value);
  setEmail(e.target.value)
}

return (
  <section>
  <h2>events example</h2>
  <form className='form'>
  <input
   className='form-input mb-1' 
   type='text' name='text'
    value={text} 
    onChange={(e)=>setText(e.target.value)}/>
   <input
          type='email'
          className='form-input mb-1'
          value={email}
          onChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
  </form>
  </section>
)
}
export default Component;
```

```tsx
import { useState } from 'react';

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    const formData = new FormData(e.target as HTMLFormElement);
    // const data = Object.fromEntries(formData);
    const text = formData.get('text') as string;
    const person: Person = { name: text };
  };

  return (
    <section>
      <h2>events example</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
          className='form-input mb-1'
          type='text'
          name='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type='email'
          className='form-input mb-1'
          value={email}
          onChange={handleChange}
          name='email'
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
  );
}
export default Component;
```
