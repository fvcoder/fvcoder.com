/* eslint-disable @typescript-eslint/no-explicit-any */
import YoutubeImg from './../assets/image/brand/youtube.svg'
import InstagramImg from './../assets/image/brand/instagram.svg'
import TwitterImg from './../assets/image/brand/twitter.svg'

interface socialMediaI {
  icon: any
  name: string
  title: string
  redirect: string
}

const social: socialMediaI[] = [
  {
    icon: YoutubeImg,
    name: 'thefersh on code',
    title: 'Youtube',
    redirect: 'https://www.youtube.com/channel/UC_nMwrzCN1f0OkqTQ2l3z7Q'
  },
  {
    icon: InstagramImg,
    name: 'thefersh24',
    title: 'Instagram',
    redirect: 'https://www.instagram.com/thefersh24/'
  },
  {
    icon: TwitterImg,
    name: 'thefersh24',
    title: 'Twitter',
    redirect: 'https://www.twitter.com/thefersh24/'
  }
]

export default social
