import { useEffect } from "react"
import gen1 from "../../allGenPokeName/gen1"
import gen2 from "../../allGenPokeName/gen2"
import gen3 from "../../allGenPokeName/gen3"
import gen4 from "../../allGenPokeName/gen4"
import gen5 from "../../allGenPokeName/gen5"
import gen6 from "../../allGenPokeName/gen6"
import gen7 from "../../allGenPokeName/gen7"

const useRenderImgsDynamically = ({ pokemon_id, setRenderPokemonImg }) => {
   let pokemonIdModfied
   switch (true) {
      case pokemon_id <= 151:
         if (pokemon_id < 10) {
            pokemonIdModfied = '00' + (pokemon_id).toString()
         } else if (pokemon_id < 100 && pokemon_id >= 10) {
            pokemonIdModfied = '0' + (pokemon_id).toString()
         } else {
            pokemonIdModfied = (pokemon_id).toString()
         }
         if (gen1.filter(collection => collection.id === pokemonIdModfied)[0]) {
            const pokemonSrc = gen1.filter(collection => collection.id === pokemonIdModfied)[0].src
            setRenderPokemonImg(pokemonSrc)
         }
         break;

      case pokemon_id >= 152 && pokemon_id <= 251:
         pokemonIdModfied = (pokemon_id).toString()
         // console.log(gen2.filter(collection => collection.id === pokemonIdModfied)[0], 'sds');
         if (gen2.filter(collection => collection.id === pokemonIdModfied)[0]) {
            const pokemonSrc = gen2.filter(collection => collection.id === pokemonIdModfied)[0].src
            setRenderPokemonImg(pokemonSrc)
         }
         break;

      case pokemon_id >= 252 && pokemon_id <= 386:
         pokemonIdModfied = (pokemon_id).toString()
         if (gen3.filter(collection => collection.id === pokemonIdModfied)[0]) {
            const pokemonSrc = gen3.filter(collection => collection.id === pokemonIdModfied)[0].src
            setRenderPokemonImg(pokemonSrc)
         }
         break

      case pokemon_id >= 387 && pokemon_id <= 494:
         pokemonIdModfied = (pokemon_id).toString()
         if (gen4.filter(collection => collection.id === pokemonIdModfied)[0]) {
            const pokemonSrc = gen4.filter(collection => collection.id === pokemonIdModfied)[0].src
            setRenderPokemonImg(pokemonSrc)
         }
         break

      case pokemon_id >= 495 && pokemon_id <= 649:
         pokemonIdModfied = (pokemon_id).toString()
         if (gen5.filter(collection => collection.id === pokemonIdModfied)[0]) {
            const pokemonSrc = gen5.filter(collection => collection.id === pokemonIdModfied)[0].src
            setRenderPokemonImg(pokemonSrc)
         }
         break

      case pokemon_id >= 650 && pokemon_id <= 721:
         pokemonIdModfied = (pokemon_id).toString()
         if (gen6.filter(collection => collection.id === pokemonIdModfied)[0]) {
            const pokemonSrc = gen6.filter(collection => collection.id === pokemonIdModfied)[0].src
            setRenderPokemonImg(pokemonSrc)
         }
         break

      case pokemon_id >= 722 && pokemon_id <= 802:
         pokemonIdModfied = (pokemon_id).toString()
         if (gen7.filter(collection => collection.id === pokemonIdModfied)[0]) {
            const pokemonSrc = gen7.filter(collection => collection.id === pokemonIdModfied)[0].src
            setRenderPokemonImg(pokemonSrc)
         }
         break

      default:
         break;
   }
}

export default useRenderImgsDynamically