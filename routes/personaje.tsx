import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import Character from "../components/Character.tsx";
import Formulary from "../islands/Formulary.tsx";

type Data = {
        url: string,
        name: string,
        birth_year: string,
        gender: string,
        hair_color: string,
        eye_color: string,
        skin_color: string,
        height: string,
        mass: string,
        homeworld: string,
        films: string[],
        species: string[],
        starships: string[],
        vehicles: string[],
        created: string,
        edited: string,
}

export const handler: Handlers<Data> = {
    async GET(req: Request, ctx: FreshContext<unknown, Data>){
        try {
            const url = new URL(req.url);
            const name = url.searchParams.get("name") || "";
      
            const response = await Axios.get<{results: Data[]}>(
            `https://swapi.dev/api/people/?search=${name}&format=json`);
            //console.log(response);

            const person = response.data.results[0];
      
            return ctx.render(person);
        } catch(e){
            console.log(e);
            throw new Error("Error");
        }
    }
}

const Page = (props: PageProps<Data>) =>{
    const people = props.data;

    if(people){
        return(
            <>
                <table class="centrar" >
                    <tr>
                        <td>
                            <Formulary/>
                        </td>
                        <span></span>
                        <td class="centrar">
                            <Character character={people}/>
                        </td>
                    </tr>
                </table>                
            </>
        );
    }
    else{
        return(
            <div class="centrar">
                <form method="get" action={`/`}>
                    <h2 class="error_ch">
                        No se ha encontrado el personaje
                        <hr></hr>
                        <button type="submit" class="color_negro">Volver al inicio</button>
                    </h2>
                </form>
                
            </div>
        );
    }
}

export default Page;