
import { FunctionalComponent } from "preact";
import { useSignal } from "@preact/signals";

const Formulary: FunctionalComponent = () => {
    const name = useSignal<string>("");
    
    return(
      <div>
        <form method="get" class="centrar">
          <input type="text" name="name" defaultValue="" onInput={(e) => name.value = e.currentTarget.value}/>
          <button type="submit">
            <a href={`/personaje?name=${name}`}>Buscar</a>
          </button>
        </form>
      </div>
    );
}

export default Formulary;