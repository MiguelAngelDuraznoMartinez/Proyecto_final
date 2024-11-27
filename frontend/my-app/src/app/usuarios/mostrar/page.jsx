import BorrarUsuario from "@/components/borrar";
import axios from "axios";
import Link from "next/link";
async function getUsuarios(){
    const url="http://localhost:3000/usuarios";
    const usuarios=await axios.get(url);
    //console.log(universidades.data);
    return usuarios.data;
}


export default async function Usuarios(){
    const usuarios=await getUsuarios();
    return(
        <>
            <h1>Usarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>usuario</th>
                        <th>Editar / borrar</th>
                        
                    </tr>
                
                </thead>
                <tbody>
                    {
                        usuarios.map((usuarios,i)=>(
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{usuarios.nombre}</td>
                                <td>{usuarios.usuario}</td>
                                <td>
                                    <BorrarUsuario id={usuarios.id}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}