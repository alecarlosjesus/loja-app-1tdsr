import { NextResponse } from "next/server"

const modeloCamisa = [
    {id:1, modelo:"regata", cor:"azul"},
    {id:2, modelo:"polo", cor:"vermelha"},
    {id:3, modelo:"social", cor:"branca"},
    {id:4, modelo:"social", cor:"azul"}
]

export async function GET() {
    
    return NextResponse.json(modeloCamisa);

}
