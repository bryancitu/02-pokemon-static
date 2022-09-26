import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

const Navbar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 2px',
      background: theme?.colors.gray100.value,
    }}>

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />

      <Text 
        css={{
          textGradient: "45deg, $blue600 10%, $pink600 100%",
        }}
        color="white"
        h2
      >P</Text>
      <Text 
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 70%",
        }}
        color="white" 
        h3
      >okémon</Text>
      <Spacer css={{ flex: 1 }} />
      <Text 
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        color="white" 
        h3
      >Favoritos</Text>
    </div>
  );
}

export default Navbar;