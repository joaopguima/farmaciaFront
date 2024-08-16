import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Categoria | null;
    usuario: Usuario | null;
  }