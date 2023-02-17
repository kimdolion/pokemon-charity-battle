import { POKEMON_TYPE_COLORS } from '@/utils/pokemon-constants'
import { TypeBadgeProps } from '@/interfaces/pokemon'

const TypeBadge = ({ type }: TypeBadgeProps) => {
  let bgColor = '#eee'
  let textColor = '#fff'

  switch (type) {
    case 'bug':
      bgColor = POKEMON_TYPE_COLORS.bug
      break;
    case 'dark':
      bgColor = POKEMON_TYPE_COLORS.dark
      break;
    case 'dragon':
      bgColor = POKEMON_TYPE_COLORS.dragon
      break;
    case 'electric':
      bgColor = POKEMON_TYPE_COLORS.electric
      textColor = '#1e1e1e'
      break;
    case 'fairy':
      bgColor = POKEMON_TYPE_COLORS.fairy
      break;
    case 'fighting':
      bgColor = POKEMON_TYPE_COLORS.fighting
      break;
    case 'fire':
      bgColor = POKEMON_TYPE_COLORS.fire
      break;
    case 'flying':
      bgColor = POKEMON_TYPE_COLORS.flying
      break;
    case 'ghost':
      bgColor = POKEMON_TYPE_COLORS.ghost
      break;
    case 'grass':
      bgColor = POKEMON_TYPE_COLORS.grass
      break;
    case 'ground':
      bgColor = POKEMON_TYPE_COLORS.ground
      break;
    case 'ice':
      bgColor = POKEMON_TYPE_COLORS.ice
      break;
    case 'normal':
      bgColor = POKEMON_TYPE_COLORS.normal
      textColor = '#1e1e1e'
      break;
    case 'poison':
      bgColor = POKEMON_TYPE_COLORS.poison
      break;
    case 'psychic':
      bgColor = POKEMON_TYPE_COLORS.psychic
      break;
    case 'rock':
      bgColor = POKEMON_TYPE_COLORS.rock
      break;
    case 'steel':
      bgColor = POKEMON_TYPE_COLORS.steel
      break;
    case 'water':
      bgColor = POKEMON_TYPE_COLORS.water
      break;
    default: bgColor = '#111'
  }

  return (
    <div style={{ background: bgColor, color: textColor }} className="rounded px-2 font-semibold">
      <span>{type}</span>
    </div>
  )
}

export default TypeBadge
