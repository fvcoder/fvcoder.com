import {
  SiFacebook,
  SiTwitter,
  SiWhatsapp,
  SiTelegram
} from "react-icons/si"

export const shareSocialNetworks = [
  {
    icon: SiFacebook,
    name: 'Facebook',
    color: '#1877F2',
    format: 'https://www.facebook.com/sharer/sharer.php?u='
  },
  {
    icon: SiTwitter,
    name: 'Twitter',
    color: '#1DA1F2',
    format: 'http://www.twitter.com/share?url='
  },
  {
    icon: SiWhatsapp,
    name: 'Whatsapp',
    color: '#25D366',
    format: 'https://api.whatsapp.com/send?text='
  },
  {
    icon: SiTelegram,
    name: 'Telegram',
    color: '#26A5E4',
    format: 'https://t.me/share/url?url='
  }
]
