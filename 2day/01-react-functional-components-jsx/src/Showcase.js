import dragonite from "./images/149-Dragonite (1).jpeg"
function Showcase(){
  const favPokemon = 'Dragonite'
  const pokeCharacteristics = {
    type: "Dragon/Flying",
    move: "Dragon Dance"
  }
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        style={{ height: 500, width: 500, padding: 20}}
        src={dragonite} alt="dragonite"
      />
      <h2>
        {favPokemon}'s type is{" "}
        <span style={{ backgroundColor: "Purple", color: "white" }}>
        {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{backgroundColor: "white", color: "Purple"}}>
          {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
};

export default Showcase;
