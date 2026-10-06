'use client';
import { Home, ClipboardList, MessageCircle, UserRound } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
const items=[['/','Home',Home],['/matching','Aktivitas',ClipboardList],['/diagnosis','Chat',MessageCircle],['/review','Profil',UserRound]] as const;
export default function BottomNav(){const path=usePathname();const router=useRouter();return <nav className="bottomnav">{items.map(([href,label,Icon])=><button key={href} className={'navitem '+(path===href?'active':'')} onClick={()=>router.push(href)}><Icon size={20}/><span>{label}</span></button>)}</nav>}
