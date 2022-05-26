import {
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsAppIcon
} from '~/components/icon/social.icon'

export const shareSocialNetworks = [
  {
    icon: FacebookIcon,
    name: 'Facebook',
    color: '#1877F2',
    format: 'https://www.facebook.com/sharer/sharer.php?u='
  },
  {
    icon: TwitterIcon,
    name: 'Twitter',
    color: '#1DA1F2',
    format: 'http://www.twitter.com/share?url='
  },
  {
    icon: WhatsAppIcon,
    name: 'Whatsapp',
    color: '#25D366',
    format: 'https://api.whatsapp.com/send?text='
  },
  {
    icon: TelegramIcon,
    name: 'Telegram',
    color: '#26A5E4',
    format: 'https://t.me/share/url?url='
  }
]
