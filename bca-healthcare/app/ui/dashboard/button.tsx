import Link from "next/link";


export default function Button({name, href, classes}:{name:string, href:string, classes:string}){
    return(
        <Link href={href}><button className={classes}>{name}</button></Link>
    )
}