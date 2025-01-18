
// import Component from "./learningFolder/01-return/index";
import Component from "./learningFolder/props/index";

function App() {
  return (
    <main>
      {/* <Component /> */}
      <Component name='shankar' id={124} >
        <h1>Hello world</h1>
      </Component>
      <Component name="Astha" id={ 1234}/>

    </main>
  );
}

export default App;
