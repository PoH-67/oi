'use client';
import { ArrowLeft, Bell } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function Header({title,subtitle,back=true}:{title:string;subtitle?:string;back?:boolean}){const router=useRouter();return <div className="page-head">{back&&<button className="back" onClick={()=>router.back()}><ArrowLeft size={18}/></button>}<div style={{flex:1}}><h1>{title}</h1>{subtitle&&<div className="subtitle">{subtitle}</div>}</div>{!back&&<div className="pill"><Bell size={15}/>2</div>}</div>}
