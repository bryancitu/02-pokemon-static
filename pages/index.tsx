import { Button, Switch, useTheme,  } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import { NextPage } from 'next'
import Layout from '../components/layouts/Layout';

const Home: NextPage = () => {

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Layout title='hola'>
      <Button color={'gradient'}>
        TEDXAR
      </Button>
      <div>
        The current theme is: {type}
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
      </div>
    </Layout>
  )
}

export default Home
