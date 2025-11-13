import { Mail, Phone, Github, Linkedin, Instagram, LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export const futureVision =
  '사용자에게 필요한 백엔드 서비스를 만들며, 나를 세상에 알리는 개발자로 성장하고 싶습니다.';

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: '이메일',
    value: 'randirao4245@gmail.com',
    href: 'mailto:randirao4245@gmail.com'
  },
  {
    icon: Phone,
    label: '전화번호',
    value: '010-5606-8381',
    href: 'tel:010-5606-8381'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/randirao',
    href: 'https://github.com/randirao'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/haeun218',
    href: 'https://www.linkedin.com/in/haeun218'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: 'instagram.com/han22._x',
    href: 'https://www.instagram.com/han22._x/'
  }
];