import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import dataProvider from "./dataProvider";
import { AutoList } from "./components/AutoList";
import { AutoEdit } from "./components/AutoEdit";
import { AutoCreate } from "./components/AutoCreate";



export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="autos" list={AutoList} edit={AutoEdit} create={AutoCreate}  show={ShowGuesser} />
</Admin>;
