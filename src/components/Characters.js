
export default function Characters(props){
    const {characters,setCharacters}=props;

    const reseteCharacters= () =>{
        console.log("reseting");
        setCharacters(null);
    }

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={reseteCharacters} >Regresar</span>
            <div className="container-characters" >
                {characters.map((character,index)=>( ///los pareetesis son un return implicito en lugar de llaves y poner return
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}></img>
                            {/* <p>{character.name}</p> */}
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>{
                            character.status==='Alive'?(<>
                            <span className="alive"></span>
                            Alive
                            </>):(
                                <>
                                <span className="dead"></span>
                                Dead
                                </>
                            )
                            }</h6>
                            <p>
                                <span className="text-grey">
                                    Episodios:
                                </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie:</span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={reseteCharacters} >Regresar</span>
        </div>

    );
}