import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Email',
      credentials: {
        email: {
          label: 'Correo Electronico',
          type: 'email',
          placeholder: 'mi@email.com'
        },
        password: {
          label: 'Contraseña',
          type: 'password',
          placeholder: 'micontraseña'
        }
      },
      authorize: async cred => {
        if (cred.email === 'me@me.me') {
          return {
            name: 'Fernando Ticona',
            image: 'https://randomuser.me/api/portraits/men/86.jpg',
            email: 'me@me.me'
          }
        }
        return null
      }
    })
  ]
})
