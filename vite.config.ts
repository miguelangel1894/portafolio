import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({command, mode}) =>{

  const env = loadEnv(mode, process.cwd())

  if(mode === 'development'){
    console.log(env)
  }else{
    console.log('En modo produccion')
  }

    return{
      plugins: [react()],
      base: '/portafolio/'
    }
})
