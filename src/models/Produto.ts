import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    categoria: Categoria | null;
    usuario: Usuario | null;
  }