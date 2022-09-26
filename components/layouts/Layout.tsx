import React, { FC } from "react";
import Head from "next/head";
import Navbar from "../ui/Navbar";

type Props = {
  children?: React.ReactNode,
  title: string
};

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
          <title>{ title || 'PokemonApp' }</title>
          <meta name="author" content="Fernando Herrera" />
          <meta name="description" content={`Información sobre el pokémon ${title}`} />
          <meta name="keywords" content={ `${title}, pokemon, pokedex`} />
      </Head>
    
      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
          { children }
      </main>
    
    </>
  );
}

export default Layout;