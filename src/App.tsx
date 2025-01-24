
// import Component from "./learningFolder/01-return/index";
// import Component from "./learningFolder/props/index";

import Component from "./learningFolder/05-challenge";

// import Component from "./learningFolder/05-challenge";

// import Component from "./learningFolder/04-events";

// import Component from "./learningFolder/03-state";

function App() {
  return (
    <main>
      {/* <Component /> */}
      {/* <Component name='shankar' id={124} >
        <h1>Hello world</h1>
      </Component>
      <Component name="Astha" id={ 1234}/> */}
      {/* <Component/> */}
      {/* <Component/> */}
      <h2>React TypeScript</h2>
      <Component type='advanced' name='susan' email='email@email.com' />
            <Component type='basic' name='susan' email=''/>
      {/* <Component type='basic' name='susan' /> */}
      {/* <Component type="advanced" name="anna" email="email@email.com"/> */}
    </main>
  );
}

export default App;
