"use client"
import { Provider } from "react-redux"
import { lusitana } from "./fonts"
import React, { useRef } from "react"
import { store } from "@/store"


export const Providers = (props: React.PropsWithChildren) => {
    return (
        <Provider store={store}>
            {props.children}
         </Provider>)
}

