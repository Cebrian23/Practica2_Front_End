
import { FunctionalComponent } from "preact";

const Formulary: FunctionalComponent = () => {
  return(
      <div>
        <form method="get" action={`/personaje`} class="centrar">
          <h1>Inserta el nombre del personaje</h1>
          <input type="text" name="name" defaultValue=""/>
          <span/>
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
}

export default Formulary;